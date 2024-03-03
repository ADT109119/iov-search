<template>

    <div class="bg-white p-6 shadow mt-2">

        <div class="text-3xl text-gray-500 font-bold">
            縣市篩選:
        </div>
        <div class="mt-2" id="cityFilter">
            <cityFilter></cityFilter>
        </div>

        <hr>

        <div class="text-3xl text-gray-500 font-bold mt-5">
            工作時間:
        </div>
        <div class="mt-2" id="workTime">
            <label class="text-lg mr-2" v-for="(item, index) in workTimeData" :key="index">
                <input type="checkbox" :value="index+1" v-model="workTime">{{ item }}
            </label>
            <div>
                <input type="time" v-model="workTimeDetail[0]">
                ~
                <input type="time" v-model="workTimeDetail[1]">
            </div>

        </div>


        <div class="text-3xl text-gray-500 font-bold mt-5">
            工作性質:
        </div>
        <div class="mt-2" id="workFeature">
            <label class="text-lg mr-2" v-for="(item, index) in workFeatureData" :key="index">
                <input type="checkbox" :value="index+1" v-model="workFeature">{{ item }}
            </label>
        </div>

        
        <div class="text-3xl text-gray-500 font-bold mt-5">
            工作待遇:
        </div>
        <div class="mt-2" id="workMoney">
            <label class="text-lg mr-2" v-for="(item, index) in workMoneyData" :key="index">
                <input type="radio" :value="index+1" name="workMoney" :checked="index==0" v-model="workMoney">{{ item }}
            </label>

            <div class="moneyZone">
                <span class="bg-gray-100 rounded border-2">
                    <input type="number" class="bg-transparent p-2" placeholder="起始範圍" v-model="moneyZone[0]">
                </span>
                <t style="transform: translateY(0.5rem);">~</t>
                <span class="bg-gray-100 rounded border-2">
                    <input type="number" class="bg-transparent p-2" placeholder="結束範圍" v-model="moneyZone[1]">
                </span>
            </div>

        </div>

    </div>

</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import cityFilter from './cityFilter.vue';
import { useStore } from 'vuex';

import workTimeData from '@/assets/data/workTime.json'
import workFeatureData from '@/assets/data/workFeature.json'
import workMoneyData from '@/assets/data/workMoney.json'

const workTime = ref([]);
const workTimeDetail = ref([]);
const workFeature = ref([]);
const workMoney = ref(1);
const moneyZone = ref([]);

const store = useStore();

//更新工作時間資料
watch(workTime, (newVal)=>{
    let nowData = store.getters.getData;
    nowData.workTime = newVal
    store.dispatch('setData', nowData)
})

//更新詳細工作時間資料
watch(workTimeDetail.value, (newVal)=>{
    let nowData = store.getters.getData;
    nowData.workTimeDetail = newVal
    store.dispatch('setData', nowData)
})

//更新工作性質資料
watch(workFeature, (newVal)=>{
    let nowData = store.getters.getData;
    nowData.workFeature = newVal
    store.dispatch('setData', nowData)
})

//更新工作待遇資料
watch(workMoney, (newVal)=>{
    let nowData = store.getters.getData;
    nowData.features = newVal
    store.dispatch('setData', nowData)
})

//更新薪資範圍資料
watch(moneyZone.value, (newVal)=>{
    let nowData = store.getters.getData;
    nowData.moneyZone = newVal
    store.dispatch('setData', nowData)
})

watch(store.state.nowData, (newVal)=>{
    workTime.value = newVal.workTime;
    workTimeDetail.value = newVal.workTimeDetail;
    workFeature.value = newVal.workFeature;
    moneyZone.value = newVal.moneyZone;
})

onMounted(()=>{
    document.addEventListener('loadSearchHistory', (e)=>{
        let newVal = e.detail.history;
        workTime.value = newVal.workTime;
        workTimeDetail.value = newVal.workTimeDetail;
        workFeature.value = newVal.workFeature;
        moneyZone.value = newVal.moneyZone;
    })
})

</script>

<style>
#workMoney:has(input[value="4"]:checked) .moneyZone{
    display: none;
}

.moneyZone{
    /* display: flex; */
    display: grid;
    grid-template-columns: 1fr 1rem 1fr;
    /* width: 100%; */
}

.moneyZone span{
    position: relative;
}

.moneyZone span::before{
    content: "元";
    position: absolute;
    right: 0.5rem;
    color: gray;
    top: 0.5rem;
}

.moneyZone span input{
    width: 100%;
}

div span.text-lg.mr-2{
    display: inline-block;
}

</style>