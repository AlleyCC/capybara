import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Login from '../views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        }
      ]
    },
    {
      path: '/login',
      component: Login,
    },
  ],
  scrollBehavior(){
  return{
    top:0
  }
}
})

export default router
