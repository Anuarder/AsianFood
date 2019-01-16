import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Auth/Login.vue'
import Register from './views/Auth/Register.vue'
import Home from './views/Home.vue'
import Recipes from './views/Recipes.vue'
import CategoryRecipes from './views/CategoryRecipes.vue'

import User from './views/User/User.vue'
import Favorite from './views/User/Favorite.vue'

import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: 'recipes',
      children: [
        {
          path: 'recipes',
          name: 'recipes',
          component: Recipes,
        },
        {
          path: 'recipes/:category',
          component: CategoryRecipes
        },
        {
          path: '/user',
          name: 'user',
          component: User,
          meta: {
            requaresAuth: true
          }
        },
        {
          path: '/favorite',
          name: 'favorite',
          component: Favorite,
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