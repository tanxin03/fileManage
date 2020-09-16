import Vue from 'vue'
import Router from 'vue-router'
import fileManage from '@/components/fileManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fileManage',
      component: fileManage
    }
  ]
})
