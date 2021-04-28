import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/Home')
const FenLei = () => import('../views/FenLei')
const GaoChe = () => import('../views/GaoChe')
const MyShop = () => import('../views/MyShop')
const XiangQing = () => import('../views/XiangQing')


const routes = [
  {
    path: '',
    name: 'DefaultHome',
    component: Home,
    meta:{
      title:"图书兄弟-首页"
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title:"图书兄弟-首页"
    }
  },
  {
    path: '/fen',
    name: 'FenLei ',
    component: FenLei,
    meta:{
      title:"图书兄弟-分类页"
    }
  },
  {
    path: '/gao',
    name: 'GaoChe  ',
    component: GaoChe,
    meta:{
      title:"图书兄弟-购物车"
    }
  },
  {
    path: '/my',
    name: 'MyShop  ',
    component: MyShop,
    meta:{
      title:"图书兄弟-个人中心"
    }
  },
  {
    path: '/xq',
    name: 'XiangQing  ',
    component: XiangQing,
    meta:{
      title:"图书兄弟-详情页"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=>{
  next();
  document.title=to.meta.title
})

export default router
