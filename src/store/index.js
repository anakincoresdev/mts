import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    getQuestions: ({commit}) => {
      return axios.get('http://aviatis.ru:3001/').then(response => {
        console.log(response);
      })
    },
  },
  modules: {
  }
})
