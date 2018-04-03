import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    isChirping: false,
    feedNeedsUpdate: false,
    isLoading: false
  },
  plugins: [
    // keeps users logged in across page refreshes
    createPersistedState()
  ],
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    SET_USER (state, user) {
      state.user = user
    },
    START_CHIRPING (state) {
      state.isChirping = true
    },
    STOP_CHIRPING (state) {
      state.isChirping = false
    },
    TOGGLE_LOADING (state, loadingBool) {
      state.isLoading = loadingBool
    },
    UPDATE_FEED (state, updateBool) {
      state.feedNeedsUpdate = updateBool
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('SET_TOKEN', token)
    },
    setUser ({commit}, user) {
      commit('SET_USER', user)
    },
    startChirping ({commit}) {
      commit('START_CHIRPING')
    },
    stopChirping ({commit}) {
      commit('STOP_CHIRPING')
    },
    toggleLoading ({commit}, loadingBool) {
      commit('TOGGLE_LOADING', loadingBool)
    },
    updateFeed ({commit}, updateBool) {
      commit('UPDATE_FEED', updateBool)
    }
  },
  getters: {
    fetchUserData: state => state.user
  }
})
