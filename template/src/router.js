import Vue from 'vue'
import Router from 'vue-router'
import AsianFood from './components/AsianFood.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'asianfood',
      redirect: 'home',
      component: AsianFood,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
