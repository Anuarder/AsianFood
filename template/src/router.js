import Vue from 'vue'
import Router from 'vue-router'
import AsianFood from './components/AsianFood.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'asianfood',
      redirect: 'home',
      component: AsianFood,
      meta: {
        requaresAuth: true,
      },
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
          meta: {
            requaresAuth: true,
          },
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

router.beforeEach((to, from, next) => {
  const requaresAuth = to.matched.some(record => record.meta.requaresAuth);
  const currentUser = store.state.isAuthenticated;
  if(requaresAuth && !currentUser){
    next('/login');
  }else if(requaresAuth && currentUser){
    next();
  }else{
    next();
  }
});


export default router;