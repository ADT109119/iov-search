import { createStore } from 'vuex'

export default createStore({
    state: {
        nowData: {
            text:'',
            areas:[],
            times:[],
            features:[],
            pay:[]
        },
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
            state.searchHistory.forEach((item, i)=> i>=10?state.searchHistory.shift():true )
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
