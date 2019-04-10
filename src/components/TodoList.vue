<template>
  <div id="todo-list">
    <div v-for="(item, index) in todos" :key="item.id" v-on:remove="todos.splice(index,1)">
      <label :style="item.isDone?itemDoneStyle:null">
        <input type="checkbox" v-model="item.isDone" :disabled="item.isDone">
        {{item.title}}
      </label>
      <button v-if="!item.isDone" v-on:click="removeTodoItem(index)">删除</button>
    </div>
    <div><input type="text" placeholder="待办事项" v-model="newTodoText" @keydown.enter="addNewTodo">
      <button @click="addNewTodo">添加</button>
    </div>
    <div>
      <button @click="removeAllDoneItems">删除全部已完成项</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TodoList',
    data: {
      nextTodoId: 4,
      newTodoText: '',
      itemDoneStyle: {
        'text-decoration-line': 'line-through',
      },
      todos: [
        {
          id: 0,
          title: '起床',
          isDone: true,
        },
        {
          id: 1,
          title: '吃饭',
          isDone: false,
        },
        {
          id: 2,
          title: '上班',
          isDone: false,
        },
      ]
    },
    methods: {
      addNewTodo: function () {
        if (!this.newTodoText) {
          return;
        }
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText,
          isDone: false,
        });
        this.newTodoText = '';
      },
      removeTodoItem: function (index) {
        this.todos.splice(index, 1);
      },
      removeAllDoneItems: function () {
        for (let i = 0; i < this.todos.length; i++) {
          if (this.todos[i].isDone) {
            this.todos.splice(i, 1);
            i--;
          }
        }
      },
    }
  };
</script>

<style scoped>

</style>
