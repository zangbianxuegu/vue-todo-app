import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { Form, Button, Input, Checkbox, Row, Col } from 'ant-design-vue'

Vue.use(Row)
Vue.use(Col)
Vue.use(Form)
Vue.use(Input)
Vue.use(Button)
Vue.use(Checkbox)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
