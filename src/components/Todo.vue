<template>
  <div class="todo">
    <h1>{{ title }}</h1>
    <TodoForm @add="handleAdd($event)"></TodoForm>
    <a-spin :spinning="spinning">
      <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
      <TodoList
        :list="list"
        @remove="handleRemove($event)"
        @complete="handleComplete"
      ></TodoList>
    </a-spin>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
export default {
  name: 'Todo',
  props: {
    title: String,
  },
  components: {
    TodoForm,
    TodoList,
  },
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('loadList')
  },
  computed: {
    spinning() {
      return this.$store.getters.loading
    },
    list() {
      return this.$store.getters.list
    },
  },
  methods: {
    handleAdd(content) {
      this.$store.dispatch('setNewTodo', content)
      this.$store.dispatch('addTodo')
      // this.$store.dispatch('clearNewTodo')
    },
    handleComplete(todo) {
      this.$store.dispatch('completeTodo', todo)
    },
    handleRemove(todo) {
      this.$store.dispatch('removeTodo', todo)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo {
  max-width: 600px;
  margin: 20px auto;
}
</style>
