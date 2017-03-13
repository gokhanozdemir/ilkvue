import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Ahmet from '@/components/Ahmet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Ahmet
    },
    {
      path: '/mehmet',
      component: Hello
    }
  ]
})
