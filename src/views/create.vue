<template>
  <div class="create">
    <h1 class="create__title">
      Создание информационного кванта
    </h1>
    <app-field
      v-model="name"
      label="Название"
      class="create__field"
    />
    <app-field
      v-model="description"
      label="Описание"
      class="create__field"
    />
    <add-files class="create__add-files" />
    <add-button
      @click="openRuleWindow"
      class="create__rule"
    >
      Добавить правило
    </add-button>
    <div v-for="(rule,i) in rules" class="create__rule-item">
      Правило {{ i + 1}}) - {{ rule.points }} баллов
    </div>
    <div class="create__buttons">
      <app-button
        @click="save"
        class="create__button"
      >
        Сохранить
      </app-button>
      <app-button
        @click="$router.push({name: 'home'})"
        outline
        class="create__button"
      >
        Отменить
      </app-button>
    </div>
    <modal-window
      v-if="isModalOpen"
      @close="isModalOpen = false"
    >
      <div class="create__rule-modal">
        <h1 class="rule-modal__title">
          Создание правила
        </h1>
        <div class="rule-modal__fields">
          <div class="rule-modal__parameters">
            <add-button @click="isParamsOpen = !isParamsOpen">Добавить параметр</add-button>
            <div v-if="isParamsOpen" class="rule-modal__params">
              <div
                v-for="item in params"
                @click="addForm(item)"
                class="rule-modal__param"
              >
                {{ item.label }}
              </div>
            </div>
          </div>
          <department-form
            v-for="form in creatingRule.params"
            :value="form"
            class="rule-modal__department"
          />
          <app-select
            label="Баллы при совпадении"
            @input="changeRuleField($event, 'points')"
            :options="pointsOptions"
            placeholder="Выберите количество баллов"
            class="rule-modal__select"
          />
        </div>
        <div class="create__buttons">
          <app-button
            @click="addRule"
            class="create__button"
          >
            Сохранить
          </app-button>
          <app-button
            @click="isModalOpen = false"
            outline
            class="create__button"
          >
            Отменить
          </app-button>
        </div>
      </div>
    </modal-window>
  </div>
</template>

<script>
import AppField from '../components/form-fields/app-field.vue'
import AddFiles from '../components/add-files.vue'
import AddButton from '../components/ui/add-button.vue'
import AppButton from '../components/ui/app-button.vue'
import ModalWindow from '../components/modal-window.vue'
import AppSelect from '../components/form-fields/app-select.vue'
import DepartmentForm from '../components/department-form.vue'

export default {
  name: "create",
  components: {
    AppField,
    AddFiles,
    AddButton,
    AppButton,
    ModalWindow,
    AppSelect,
    DepartmentForm,
  },
  data() {
    return {
      isModalOpen: false,
      isParamsOpen: false,
      rules: [],

      pointsOptions: [
          {label: '1', value: 1},
          {label: '2', value: 2},
          {label: '3', value: 3},
          {label: '4', value: 4},
          {label: '5', value: 5},
          {label: '6', value: 6},
          {label: '7', value: 7},
          {label: '8', value: 8},
          {label: '9', value: 9},
          {label: '10', value: 10},
      ],
      creatingRule: {
        params: [],
        points: '',
      },
      name: '',
      description: '',
      params: [
        { label: 'Должность', value: 'position' },
        { label: 'Отдел', value: 'department' },
        { label: 'Владеете ли анлгийским языком', value: 'eng' },
        { label: 'Какие принципы работы серверов Вы понимаете', value: 'serv' },
        { label: 'Знание «серверных» языков программирования', value: 'serv_lang' },
        { label: 'Навык запросов к БД и проектирования баз данных', value: 'bd' },
        { label: 'Какими фреймверками вы владееете', value: 'front' },
      ],
    };
  },
  computed: {

  },
  methods: {
    openRuleWindow() {
      this.isModalOpen = true;
    },
    save() {
      const data = {
        title: this.name,
        link: 'bla',
        rules: this.rules,
      }
      this.$store.dispatch('createTask', data).then(res => {
        this.$router.push({name: 'home'});
      });
    },
    addRule() {
      this.creatingRule.params = this.creatingRule.params.map(item => {
        const obj = item;
        obj.code = obj.code.value;
        return obj;
      });
      this.rules.push(this.creatingRule);
      this.creatingRule = {
        params: [],
        points: '',
      };
      this.isModalOpen = false;
    },
    changeRuleField(data, name) {
      this.creatingRule[name] = data;
    },
    addForm(param) {
      this.creatingRule.params.push({code: param, values: [{matching:'',value:''}]});
      this.isParamsOpen = false;
    }
  },
}
</script>

<style lang="scss">
  .create {
    padding: 35px 40px;
    background: $bg-default-color;
    border-radius: $border-radius-block;
    width: 700px;
    &__title {
      font-size: $font-size-title;
      margin-bottom: 28px;
    }
    &__field {
      margin-bottom: 25px;
    }
    &__add-files {
      margin-bottom: 25px;
    }
    &__button {
      margin-right: 10px;
    }
    &__rule {
      margin-bottom: 10px;
    }
    &__rule-item {
      margin-bottom: 15px;
    }
    &__buttons {
      display: flex;
      align-items: center;
      margin-top: 30px;
    }
  }
  .rule-modal {
    &__title {
      font-size: $font-size-title;
      text-align: center;
      margin-bottom: 24px;
    }
    &__fields {
      margin-bottom: 35px;
    }
    &__select {
      margin-bottom: 15px;
    }
    &__department {
      margin-bottom: 20px;
      margin-top: 10px;
    }
    &__params {
      background: $bg-default-color;
      box-shadow: $shadow-default;
      position: absolute;
      width: 100%;
      top: $ui-height;
      z-index: 2;
    }
    &__parameters {
      position: relative;
      margin-bottom: 20px;
    }
    &__param {
      padding: 0 10px;
      height: 24px;
      display: flex;
      align-items: center;
      font-size: 15px;
      cursor: pointer;
      &:hover {
        background: darken($bg-default-color, 5%);
      }
    }
  }
</style>