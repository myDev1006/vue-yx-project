import Home from "../pages/Home/Home.vue"//主页
import Assort from "../pages/Assort/Assort.vue"//分类
import Scan from "../pages/Scan/Scan.vue"//识物
import Shop from "../pages/Shop/Shop.vue"//购物车
import Personal from "../pages/Personal/Personal.vue"//个人中心
import Login from "../pages/Login/Login.vue"
import Search from "../pages/Search/Search.vue"
import Find from "../pages/Scan/Find/Find.vue"//发现页
import SelectHome from "../pages/Scan/SelectHome/SelectHome.vue"//甄选家
export default[
  {
    path:"/home",
    component:Home,
    
  },
  {
    path:"/assort",
    component:Assort,
    
  },
  
  {
    path:"/scan",
    component:Scan,
    children:[
      {
        path:"/scan/find",
        component:Find
      },
      {
        path:"/scan/selecthome",
        component:SelectHome
      },
      {
        path:"",
        redirect:"/scan/find"
      }
    ]
    
  },
  {
    path:"/shop",
    component:Shop,
    
  },
  {
    path:"/personal",
    component:Personal,
    
  },
  {
    path:"/login",
    component:Login,
    meta:{
      isshow:true//改变导航颜色
    }
  },
  {
    path:"/search",
    component:Search
  },
  {
    path:"/",
    redirect:"/home"
  }
]