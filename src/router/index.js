import Vue from 'vue'
import Router from 'vue-router'

import slicing from './slicing';   //切图板块




//下面是注册单页
const pc_home         = () => import('@/components/index/pc/pc_home.vue');
const pc_index        = () => import('@/components/index/pc/pc_index.vue');
const pc_product      = () => import('@/components/index/pc/pc_product.vue');
const pc_about        = () => import('@/components/index/pc/pc_about.vue');
const pc_contact      = () => import('@/components/index/pc/pc_contact.vue');
const pc_Imageinfo    = () => import('@/components/index/pc/pc_Imageinfo.vue');

//手机端
const mp_home         = () => import('@/components/index/mp/mp_home.vue');
const mp_index        = () => import('@/components/index/mp/mp_index.vue');
const mp_product      = () => import('@/components/index/mp/mp_product.vue');
const mp_about        = () => import('@/components/index/mp/mp_about.vue');
const mp_contact      = () => import('@/components/index/mp/mp_contact.vue');


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pc_index',
      component: pc_home,
      meta:{ type : 'pc'},
      children: [
        {
          path: '/pc_index',
          component: pc_index,
          name: 'pc_index',
          meta:{
            type: 'pc',
          }
        },
        {
          path: '/pc_product',
          component: pc_product,
          name: 'pc_product',
          meta:{
            type: 'pc',
          }
        },
        {
          path: '/pc_about',
          component: pc_about,
          name: 'pc_about',
          meta:{
            type: 'pc',
          }
        },
        {
          path: '/pc_contact',
          component: pc_contact,
          name: 'pc_contact',
          meta:{
            type: 'pc',
          }
        },
        {
          path: '/pc_Imageinfo',
          component: pc_Imageinfo,
          name: 'pc_Imageinfo',
          meta:{
            type: 'pc',
          }
        },
        slicing,
      ]
    },
    {
      path: '/',
      redirect: '/mp_index',
      component: mp_home,
      meta:{ type : 'mp'},
      children: [
        {
          path: '/mp_index',
          component: mp_index,
          name: 'mp_index',
          meta:{ type : 'mp'},
        },
        {
          path: '/mp_product',
          component: mp_product,
          name: 'mp_product',
          meta:{
            type: 'mp',
          }
        },
        {
          path: '/mp_about',
          component: mp_about,
          name: 'mp_about',
          meta:{
            type: 'mp',
          }
        },
        {
          path: '/mp_contact',
          component: mp_contact,
          name: 'mp_contact',
          meta:{
            type: 'mp',
          }
        },
      ]
    },
  ]
})