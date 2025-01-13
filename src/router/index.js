import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/ViewHome.vue'
import News from '../views/ViewNews.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/news', component: News },
  { path: '/news/:id', component: () => import('../views/NewsDetail.vue') },
  { path: '/about', component: AboutUs },
  { path: '/contact', component: ContactUs },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
