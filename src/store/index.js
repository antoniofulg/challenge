import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemsList: [],
    cartList: [],
    userName: ""
  },
  mutations: {
    SET_ITEMS_LIST: (state, obj) => {
      state.itemsList = obj.list
    },

    SET_USER_NAME: (state, obj) => {
      state.userName = obj
    }
  },
  actions: {
    setItemsList: async ({commit}) => {
      const list = (await axios.get(`https://paguru-challenge-api.herokuapp.com/products`)).data
      commit('SET_ITEMS_LIST', {list})
    },

    setUserName: ({commit}, obj) => {
      commit('SET_USER_NAME', obj)
    }
  },
  modules: {
  }
})
