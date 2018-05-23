import Vue from 'vue'

import App from './App.vue'

// node_modules/element-ui/src/index.js
import {
  Menu,
  Submenu,
  MenuItem,
  Row,
  Col,
  Card,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
} from 'element-ui'

import '@/assets/scss/index.scss'

Vue.config.productionTip = false
Vue.prototype.$ELEMENT = {
  size: 'small',
}

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service

new Vue({
  render: h => h(App),
}).$mount('#app')
