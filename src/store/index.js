import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: {},
    task: {},
    tasks: [],
  },
  mutations: {
    setItem(state, {name, item}) {
      state[name] = item;
    },
  },
  actions: {
    getQuestions: ({commit}) => {
      return axios.get('http://aviatis.ru:3001/questionary?user_id=1').then(response => {
        commit('setItem', {name: 'questions', item:response.data});
      })
    },
    createTask: ({commit}, data) => {
      return axios.post('http://aviatis.ru:3001/entry?user_id=1', data);
    },
    getTasks: ({commit}, data) => {
      return axios.get('http://aviatis.ru:3001/entry?user_id=1', data).then(response => {
        console.log(response);
        commit('setItem', {name: 'tasks', item:response.data});
      });
    },
    getTask: ({commit}, id) => {
      return axios.get(`http://aviatis.ru:3001/entry/id-${id}?user_id=1`).then(response => {
        commit('setItem', {name: 'task', item:response.data});
      });
    },
    getUserTasks: ({commit}) => {
      return axios.get('http://aviatis.ru:3001/entry/user?user_id=1', data).then(response => {
        console.log(response);
        commit('setItem', {name: 'tasks', item:response.data});
      });
    },
    setLearnStatus: ({commit}, id) => {
      return axios.post(`http://aviatis.ru:3001/entry/id-${id}/learn?user_id=1`);
    }
  },
  modules: {
  }
})
