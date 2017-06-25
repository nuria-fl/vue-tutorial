import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Init from '@/components/Init'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/step1',
      name: 'Step1',
      component: Init
    },
    {
      path: '/step2',
      name: 'Step2',
      component: Init
    }
  ]
})
