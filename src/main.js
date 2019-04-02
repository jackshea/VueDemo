// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'

Vue.config.productionTip = false

var app1 = new Vue({
  el: '#app',
  // router,
  // components: { App },
  // template: '<App/>',
  data: {
    message: 'Hello Vue!'
  }
})

Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})

new Vue({
  el: '#todo-list',
  data: {
    nextTodoId: 2,
    newTodoText: '',
    itemDoneStyle: {
      'text-decoration-line': 'line-through',
    },
    todos: [
      {
        id: 1,
        title: '起床',
        isDone: true,
      },
      {
        id: 2,
        title: '吃饭',
        isDone: false,
      },
      {
        id: 3,
        title: '上班',
        isDone: false,
      },
    ]
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
        isDone: false,
      })
      this.newTodoText = ''
    }
  }
})
