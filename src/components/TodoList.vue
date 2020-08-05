<template>
  <div class="todo-list">
    <ul>
      <li
        v-for="item in list"
        :key="item.id"
        :class="[{ 'todo-item--completed': item.completed }, 'todo-item']"
      >
        <a-row>
          <a-col :span="2">
            <a-checkbox
              @change="handleComplete(item)"
              :checked="item.completed"
            ></a-checkbox>
          </a-col>
          <a-col :span="20">
            <p>{{ item.content }}</p>
          </a-col>
          <a-col :span="2">
            <a-icon
              type="close-circle"
              theme="twoTone"
              twoToneColor="#ff4d4f"
              class="todo-close"
              :style="{ fontSize: '20px', cursor: 'pointer' }"
              @click="handleRemove(item)"
            />
          </a-col>
        </a-row>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    list: {
      type: Array,
    },
  },
  data: function() {
    return {}
  },
  methods: {
    handleComplete(item) {
      this.$emit('complete', item)
    },
    handleRemove(item) {
      this.$emit('remove', item)
    },
  },
}
</script>

<style scoped less>
ul,
li {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.todo-list {
  display: grid;
  background-color: #f8f8f8;
  border-radius: 5px;
  padding: 20px 10px;
}
.todo-item {
  margin-top: 10px;
}
.todo-item p {
  margin: 0;
  text-align: start;
}
.todo-item--completed p {
  text-decoration: line-through;
}
</style>
