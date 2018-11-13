import Vue from 'vue'
import app from './app.vue'

// Mint-UI相关组件
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// MUI相关样式
import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'

// 导入router.js路由模块
import router from './router.js'
// 导入 vue-resource 模块
import VueResource from 'vue-resource'
Vue.use(VueResource)


var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
})