import Home from "../pages/Home/Home.vue"//主页
import Assort from "../pages/Assort/Assort.vue"//分类
import Scan from "../pages/Scan/Scan.vue"//识物
import Shop from "../pages/Shop/Shop.vue"//购物车
import Personal from "../pages/Personal/Personal.vue"//个人中心

export default[
  {
    path:"/home",
    component:Home
  },
  {
    path:"/assort",
    component:Assort
  },
  {
    path:"/can",
    component:Scan
  },
  {
    path:"/shop",
    component:Shop
  },
  {
    path:"/personal",
    component:Personal
  },
  {
    path:"/",
    redirect:"/home"
  }
]