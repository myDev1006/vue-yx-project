import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"
//使用路由
Vue.use(VueRouter)

//暴露路由器对象
export default new VueRouter({
  mode:"history",
  routes
})