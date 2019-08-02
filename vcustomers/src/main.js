// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import About from './components/About'
import Customers from './components/Customers'
import CustomerInfo from './components/CustomerInfo'
import Add from './components/Add'
import Edit from './components/Edit'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import axios from 'axios'


//使用路由
Vue.use(VueRouter)
// Vue.use(VueResource)
//使用aixos $http是自定义的名称
Vue.prototype.$http=axios

//设置路由
const router =new VueRouter({
  routes:[
    {path:"/",component:Customers},
    {path:"/about",component:About},
    {path:"/add",component:Add},
    //传递一个id 根据id来查询内容
    {path:"/customerInfo/:id",component:CustomerInfo},
    {path:"/edit/:id",component:Edit},

  ],
  mode:"history"
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
