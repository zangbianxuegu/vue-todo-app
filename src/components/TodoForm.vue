<template>
  <div class="todo-form">
    <a-form :form="form" :wrapper-col="{ span: 24 }">
      <a-form-item label="">
        <a-textarea
          placeholder="请输入内容"
          :auto-size="{ minRows: 3, maxRows: 6 }"
          v-model="content"
          v-decorator="['content', { rules: [{ required: true, message: '请输入内容！' }] }]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 2, offset: 22 }">
        <a-button type="primary" html-type="submit" @click="handleAdd()">
          添加
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      content: '',
    }
  },
  components: {},
  beforeCreate() {
    this.form = this.$form.createForm(this, {})
  },
  methods: {
    handleAdd() {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$emit('add', this.content)
        }
      })
    },
  },
}
</script>

<style scoped></style>
