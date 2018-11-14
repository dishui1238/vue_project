// 导入路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入tabbar中对应的组件
import HomeContainer from './components/tabbar/home.vue'
import MessageContainer from './components/tabbar/message.vue'
import ShopcartContainer from './components/tabbar/shopcart.vue'
import MyContainer from './components/tabbar/my.vue'
import NewsList from './components/news/NewsList.vue'

const router = new VueRouter({
  routes: [
    {path:'/',redirect:'./home'},
    {path:'/home',component:HomeContainer},
    {path:'/message',component:MessageContainer},
    {path:'/shopcart',component:ShopcartContainer},
    {path:'/my',component:MyContainer},
    {path:'/home/NewsList',component:NewsList}
  ],
  // 覆盖掉默认的路由高亮的类 router-link-active
  linkActiveClass:'mui-active'
    
})

export default router