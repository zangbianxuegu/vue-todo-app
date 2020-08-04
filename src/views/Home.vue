<template>
  <div class="home">
    <Todo :title="'Todo list'"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from '@/components/Todo.vue'

export default {
  name: 'Home',
  components: {
    Todo
  }
}
</script>
