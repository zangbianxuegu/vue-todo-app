<template>
  <div class="todo-form">
    <a-form-model
      ref="form"
      :model="form"
      :rules="rules"
      :wrapper-col="{ span: 24 }"
    >
      <a-form-model-item label="" prop="content">
        <a-input
          v-model="form.content"
          type="textarea"
          placeholder="请输入内容"
          :auto-size="{ minRows: 3, maxRows: 6 }"
          @keyup.enter="handleAdd()"
        />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 24 }">
        <a-button type="primary" @click="handleAdd()">
          添加
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      form: {
        content: '',
      },
      rules: {
        content: [
          { required: true, message: '请输入 TODO 内容', trigger: 'blur' },
        ],
      },
    }
  },
  // computed: {
  //   'form.content': function() {
  //     return this.$store.getters.newTodo
  //   },
  // },
  watch: {
    '$store.state.newTodo': function(val, oldVal) {
      this.form.content = ''
    },
  },
  methods: {
    handleAdd() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit('add', this.form.content)
        }
      })
    },
  },
}
</script>

<style scoped></style>
