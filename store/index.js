export const state = ()=>({
    nowData: {},
    searchHistory: []
})

export const getters = {
    getData(state){
    return state.nowData;
    },
    getHistory(state){
        return state.searchHistory;
    }
}

export const mutations = {
    setData(state, val){
        state.nowData = val;
    },
    addHistory(state, val){
        state.searchHistory.push(val);
        state.searchHistory.forEach((item, i)=> i>=10?state.searchHistory.shift():true )
    }
}

export const actions = {
    setData({ commit }, data){
        commit("setData", data)
    },
    addHistory({ commit }, data){
        commit("addHistory", data)
    }
  
}

export const modules = {
  
}
