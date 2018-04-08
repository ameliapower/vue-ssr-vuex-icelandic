import Vue from 'vue'
import App from './App.vue'
import store from 'src/store'
import createRouter from './router'
import { sync } from 'vuex-router-sync'

export function createApp () {
  const router = createRouter()

  sync(store, router)

  const app = new Vue({
    router,
    store,  // injects the store instance to all child components
    render: h => h(App)
  })

  return { app, router, store }
}
