import Vue from "vue"
import App from "./App.vue"
import router from "./router/index"
import FooterNav from "./components/FooterNav/FooterNav.vue"
Vue.component("FooterNav",FooterNav)//注册全局组件

new Vue({
  render:h => h(App),//渲染函数，生成app组件标签
  router//全局注册路由器
}).$mount("#app")
