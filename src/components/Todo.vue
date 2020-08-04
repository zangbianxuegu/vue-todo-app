<template>
  <div class="todo">
    <h1>{{ title }}</h1>
    <TodoForm @add="handleAdd($event)"></TodoForm>
    <TodoList :list="list" @delete="handleDelete($event)" @complete="handleComplete"></TodoList>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
export default {
  name: 'Todo',
  props: {
    title: String
  },
  components: {
    TodoForm,
    TodoList,
  },
  data() {
    return {
      list: [
        {
          id: '1',
          content: 'TODO1',
          completed: false,
        },
        {
          id: '2',
          content: 'TODO2TODO2TODO2TODO2TODO2',
          completed: false,
        }
      ],
    }
  },
  methods: {
    handleAdd(content) {
      console.log(content)
      this.list = [{
        id: Math.random(),
        content: content,
        completed: false,
      }, ...this.list]
    },
    handleComplete(index) {
      this.list[index].completed = !this.list[index].completed
    },
    handleDelete(index) {
      this.list.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo {
  max-width: 600px;
  margin: 0 auto;
}
</style>
