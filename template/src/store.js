import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user: null,
    isAuthenticated: false
  },
  plugins: [createPersistedState()],
  mutations: {
    setUserToken(state, token){
      state.token = token;
      state.isAuthenticated = true;
    },
    setUserData(state, user){
      state.user = user;
    },
    logout(state){
      state.token = '';
    }
  },
  actions: {
    setUserToken({commit}, token){
      commit('setUserToken', token);
    },
    setUserData({commit}, user){
      commit('setUserData', user);
    },
    logout({commit}){
      commit('logout')
    }
  }
})
