import { createApp } from 'vue'
import routers from './router'
import App from './App.vue'
import './assets/css/normalize.css'
import './assets/scss/main.scss'

const app = createApp(App)
app.use(routers)
app.mount('#app')
