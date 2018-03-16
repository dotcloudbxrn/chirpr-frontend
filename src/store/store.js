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
    feedNeedsUpdate: false
  },
  plugins: [
    // createPersistedState()
  ],
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    },
    openChirp (state) {
      state.isChirping = true
    },
    stopChirping (state) {
      state.isChirping = false
    },
    triggerFUpdate (state) {
      state.feedNeedsUpdate = !state.feedNeedsUpdate
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    openChirp ({commit}) {
      commit('openChirp')
    },
    stopChirping ({commit} ) {
      commit('stopChirping')
    },
    triggerFUpdate({commit}) {
      commit('triggerFUpdate')
    }
  },
  getters: {
    fetchUserData: state => state.user
  }
})
