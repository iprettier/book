import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Layout.vue')
const Search = () => import('@/views/component/search/Search.vue')
const Detail = () => import('@/views/component/detail/Detail.vue')
const Center = () => import('@/views/component/center/Center.vue')
const BookShelf = () => import('@/views/component/bookshelf/Bookshelf.vue')
const Login = () => import('@/views/component/login/Login.vue')
const Register = () => import('@/views/component/register/Register.vue')
const Read = () => import('@/views/component/read/Read.vue')

const routes = [

  // 首页
  {
    path: '/',
    component: Layout
  },
  // 搜索
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  // 作品详情
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  // 个人中心
  {
    path: '/center',
    name: 'center',
    component: Center
  },
  // 书架
  {
    path: '/shelf',
    name: 'shelf',
    component: BookShelf
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // 注册
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  // 内容
  {
    path: '/read',
    name: 'read',
    component: Read
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
