import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/index.vue'
import Programs from 'components/programs/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/programs',
      name: 'programs',
      component: Programs
    }
  ]
})
