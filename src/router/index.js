import Vue from 'vue'
import Router from 'vue-router'
import docButton from '@/docs/docbutton'
import docpopover from '@/docs/docpopover'
import docDescription from '@/docs/docDescription'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:docDescription
    },
    {
      path: '/components/button',
      component: docButton
    },
    {
      path: '/components/popover',
      component: docpopover
    }

    
  ]
})


