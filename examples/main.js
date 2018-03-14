// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */

import Vue from 'vue'
import VueRouter from 'vue-router'
import BackToTop from 'vue-backtotop'
import util from './utils/util'
import App from './App'
import Routers from './router'
import Env from './config/env'
import './styles/hljs.css'
import '../docs/style/base.less'
import './index.less'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BackToTop)
Vue.use(util)

// 路由配置
const RouterConfig = {
  routes: Routers
}
if (Env !== 'local') {
  RouterConfig.mode = 'history'
}
const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  console.log('进入router...')
  next()
})

router.afterEach((to, from, next) => {
  console.log('退出router...')
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
