import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import RecipeCard from './components/RecipeCard.vue'

Vue.config.productionTip = false

Vue.component('recipe-card', RecipeCard);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
