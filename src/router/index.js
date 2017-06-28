import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Init from '@/components/Init'
import Step2 from '@/components/Step2'
import Step3 from '@/components/Step3'
import Step4 from '@/components/Step4'
import Step5 from '@/components/Step5'
import Step6 from '@/components/Step6'
import Extras from '@/components/Extras'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/step4',
      name: 'Step4',
      component: Step4
    },
    {
      path: '/step5',
      name: 'Step5',
      component: Step5
    },
    {
      path: '/step6',
      name: 'Step6',
      component: Step6
    },
    {
      path: '/extras',
      name: 'Extras',
      component: Extras
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
