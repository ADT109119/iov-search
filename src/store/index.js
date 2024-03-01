import { createStore } from 'vuex'

export default createStore({
    state: {
        nowData: {
            title:'',
            areas:[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
            times:[],
            features:[],
            pay:[]
        },
        searchHistory: localStorage.getItem('searchHistory')!=null?JSON.parse(localStorage.getItem('searchHistory')):[]
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
        addHistory(state){
            state.searchHistory.unshift(JSON.parse(JSON.stringify(state.nowData)));
            localStorage.setItem('searchHistory', JSON.stringify(state.searchHistory))
            state.nowData = {
                title:'',
                areas:[],
                times:[],
                features:[],
                pay:[]
            };

            state.searchHistory.forEach((item, i)=> i>=10?state.searchHistory.pop():true )
        }

    },
    actions: {
        setData({ commit }, data){
            commit("setData", data)
        },
        addHistory({ commit }){
            commit("addHistory")
        }
    },
    modules: {
    }
})
