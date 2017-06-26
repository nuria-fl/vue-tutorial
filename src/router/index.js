import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Init from '@/components/Init'
import Step2 from '@/components/Step2'
import Step3 from '@/components/Step3'

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
      component: Step2
    },
    {
      path: '/step3',
      name: 'Step3',
      component: Step3
    }
  ]
})
