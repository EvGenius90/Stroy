import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory()

import homePage from './pages/Home.vue'
import aboutPage from "./pages/About.vue"

const routers = createRouter({
  history: routerHistory,
  routes:[
    {
      path: '/',
      component: homePage
    },
    {
      path: '/about',
      component: aboutPage
    }
  ]
})

export default routers