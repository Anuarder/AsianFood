import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    user: {}
  },
  mutations: {
    setUserToken(state, token){
      state.token = token;
    },
    setUserData(state, user){
      state.user = user;
    }
  },
  actions: {
    setUserToken({commit}, token){
      commit('setUserToken', token);
    },
    setUserData({commit}, user){
      commit('setUserData', user);
    },
  }
})
