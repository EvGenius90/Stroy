import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory()

import homePage from './pages/Home.vue'
import aboutPage from "./pages/About.vue"
import payPage from './pages/Pay.vue'
import deliveryPage from './pages/Delivery.vue'
import newsPage from './pages/News.vue'
import newsDetailPage from './components/NewsDetail.vue'
import contactPage from '@/pages/Contacts.vue'
import products from '@/pages/Products.vue'
import catalog from '@/pages/Catalog.vue'
import cardDetail from '@/components/UI/CardDetail.vue'

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
    },
    {
      path: '/pay',
      component: payPage
    },
    {
      path: '/delivery',
      component: deliveryPage
    },
    {
      path: '/news',
      component: newsPage
    },
    {
      path: '/contacts',
      component: contactPage
    },
    {
      path: '/newsDetail/:alias',
      component: newsDetailPage
    },
    {
      path: '/cardDetail/:alias',
      component: cardDetail
    },
    // {
    //   path: '/products',
    //   component: products
    // },
    {
      path: '/catalog',
      component: catalog
    },
    {
      path: '/products/:category',
      name: 'Products',
      component: products,
      props: true
    },
  ]
})

export default routers