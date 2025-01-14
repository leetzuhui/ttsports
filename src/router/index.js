import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/ViewHome.vue'
import News from '../views/ViewNews.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'
import NewsDetail from '../views/NewsDetail.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/news',
    name: 'view-news',
    component: News
  },
  {
    path: '/news/:id',
    name: 'news-detail',
    component: NewsDetail,
    props: true,  // 允许将路由参数作为props传递
  },
  {
    path: '/about',
    component: AboutUs
  },
  {
    path: '/contact',
    component: ContactUs
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
