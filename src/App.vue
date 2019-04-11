<template>
  <div id="app">
    <todo-list></todo-list>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<script>
  import TodoList from '@/components/TodoList';
  export default {
    components: {TodoList}
  };
</script>
