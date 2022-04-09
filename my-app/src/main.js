import '@/assets/scss/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

// import Vue from 'vue'

// Vue.config.productionTip = false

createApp(App).use(router).mount('#app')
