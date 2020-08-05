import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { FormModel, Button, Input, Checkbox, Row, Col, Icon, Spin } from 'ant-design-vue'

Vue.use(Row)
Vue.use(Col)
Vue.use(FormModel)
Vue.use(Input)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(Icon)
Vue.use(Spin)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
