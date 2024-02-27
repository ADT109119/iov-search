import { createStore } from 'vuex'

export default createStore({
  state: {
    nowData: {},
    searchHistory: []
  },
  getters: {
    getData(state){
      return state.nowData;
    },
    getHistory(state){
      return state.searchHistory;
    }
  },
  mutations: {
    setData(state, val){
      state.nowData = val;
    },
    addHistory(state, val){
      state.searchHistory.push(val);
      state.searchHistory.shift();
    }
  },
  actions: {
    setData({ commit }, data){
      commit("setData", data)
    },
    addHistory({ commit }, data){
      commit("addHistory", data)
    }
  },
  modules: {
  }
})
