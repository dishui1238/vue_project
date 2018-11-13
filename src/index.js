import Vue from 'vue'
import app from './app.vue'
// import router from './router.js'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import './lib/css/mui.min.css'



var vm = new Vue({
  el: '#app',
  render: c => c(app),
  // router,
})