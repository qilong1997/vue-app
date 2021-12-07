import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    userName: state => state.user.name
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  modules: {
    user: {
      namespaced: true,
      state: {
        name: 'testData'
      }
    }
  }
})

export default store