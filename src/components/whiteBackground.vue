<template>
    <div class="max-w-4xl w-full mx-auto sm:px-6 lg:px-8">
        <div class="mt-2 mb-4 bg-white overflow-hidden shadow sm:rounded-lg p-6">
            <h2 class="text-2xl leading-7 font-semibold">
                {{ props.history.title }}
            </h2>
            <p class="mt-3 text-gray-600">
                <span  class="areaDisplay">地區:
                    <span v-for="(item, index) in props.history.areas" v-show="item!=[]" :key="index">
                        <span v-for="(item2, index2) in item" :key="index2">
                            {{ index==0&&index2==0?'':'、' }}
                            {{ data[index].CityName }}-{{ data[index].AreaList[item2].AreaName }}
                        </span>
                    </span>
                </span>
                <br>
                上班時間: <span v-for="(item, index) in props.history.workTime" :key="index">{{ (index!=0?'、':'') + workTimeData[item-1] }}</span><br>
                工作性質: <span v-for="(item, index) in props.history.workFeature" :key="index">{{ (index!=0?'、':'') + workFeatureData[item-1] }}</span><br>
                工作待遇: <span>{{ workMoneyData[props.history.workMoney] }} {{ history.moneyZone[0] }}~{{ history.moneyZone[1] }}</span><br>
            </p>
            <p class="mt-4 pt-4 text-gray-800 border-t border-t-2 text-right">
                <a href="#" class="text-blue-600" @click="loadSearchHistory">套用設定 ></a>
            </p>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';
import data from '@/assets/data/CityCountyData.json';
import workTimeData from '@/assets/data/workTime.json'
import workFeatureData from '@/assets/data/workFeature.json'
import workMoneyData from '@/assets/data/workMoney.json'
import { useStore } from 'vuex';


const props = defineProps({
    history:{
        type: Object
    }
})

const store = useStore();

function loadSearchHistory(){
    store.dispatch('setData', props.history);
    const ev = new CustomEvent('loadSearchHistory', {detail:{history: props.history}});
    document.dispatchEvent(ev);
}

</script>

<style>
.areaDisplay{
    text-overflow: ellipsis;
    max-lines: 1;
    overflow:hidden;
    white-space: nowrap;
    width: 80%;
}
</style>