import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Auth/Login.vue'
import Register from './views/Auth/Register.vue'
import Navbar from './components/Navbar.vue'
import Home from './views/Home.vue'
import Recipes from './views/Recipes.vue'

import Favorites from './views/User/Favorites.vue'

import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Navbar,
      redirect: 'home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
        },
        {
          path: 'recipes/:category',
          component: Recipes
        },
        {
          path: '/favorites',
          name: 'favorites',
          component: Favorites,
          meta: {
            requaresAuth: true
          }
        },

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
  const currentUser = store.state.token;
  if(requaresAuth && !currentUser){
    next('/login');
  }else if(requaresAuth && currentUser){
    next();
  }else{
    next();
  }
});


export default router;