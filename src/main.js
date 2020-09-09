import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//添加全局样式
import './assets/css/global.css'
//引入阿里iconFont
import './assets/font/iconfont.css'
//引入bootstrap
import 'bootstrap'
//引入jquery
import $ from 'jquery'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
