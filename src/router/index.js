import Vue from 'vue'
import Router from 'vue-router'
import fileManage from '@/components/fileManage'
import slotParent from '@/components/slotParent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fileManage',
      component: fileManage
    },
    {
      path: '/slotParent',
      name: 'slotParent',
      component: slotParent
    }
  ]
})
