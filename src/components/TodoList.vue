<template>
  <div id="todo-list" align="left">
    <Card title="待办事项列表" style="width:350px">
      <div slot="extra">
        <Button type="primary" @click="removeAllDoneItems">删除全部已完成项</button>
      </div>
      <Card v-for="(item, index) in todos" :key="item.id" @remove="todos.splice(index,1)">
        <Checkbox class="todo-item-lab" :class="doneItemClassName(index)" v-model="item.isDone" :disabled="item.isDone">
          {{item.title}}
        </Checkbox>
        <div slot="extra">
          <Button type="primary" v-if="!item.isDone" @click="removeTodoItem(index)">删除</Button>
        </div>
      </Card>
      <Card>
        <div slot="extra">
          <Button type="primary" @click="addNewTodo">添加</button>
        </div>
        <Input type="text" class="todo-input" placeholder="待办事项" v-model="newTodoText" @on-enter="addNewTodo"
               clearable icon="ios-create-outline"/>
      </Card>
    </Card>
  </div>
</template>

<script>
  export default {
    name: 'TodoList',
    data () {
      return {
        nextTodoId: 4,
        newTodoText: '',
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
      };
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
      doneItemClassName: function (index) {
        return this.todos[index].isDone ? 'done-item' : '';
      }
    }
  };
</script>

<style scoped>
  .todo-item-lab {
    width: 200px;
    word-wrap: break-word;
  }

  .done-item {
    text-decoration-line: line-through
  }

  .todo-input {
    width: 200px;
  }

</style>
