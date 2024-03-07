<template>
    <div class="pl-2.5 pt-1 flex flex-nowrap" style="max-width: calc(100vw - 1.5rem);">
        <span class="text-gray-600 font-semibold align-middle">熱門搜尋: </span>
        <div class="trendWord flex-1">
            <button class="ml-2 mr-2 text-gray-600 border-b-2 border-gray-600" v-for="(item, index) in trendData" @click="trendClick(item)" :key="index">{{ item }}</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const trendData = ref([]);
const api = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5-NyhMvAqaVN73qV2Qe2wON1jLhOQCTeCa4z2TwSvE2XRIVieqOre9963xqFScoXZWmzHi4sM0b2r/pub?gid=349326398&single=true&output=tsv";

fetch(api).then(res=>res.text()).then((response)=>{
    let data = response.split("\n")
    data[0].split("\t").forEach((item, i)=>{
        if(i == 0)
            return;
        trendData.value.push(item)
    })
})

function trendClick(text){
    const ev = new CustomEvent('trendClick', {detail:{text: text}});
    document.dispatchEvent(ev);
}

</script>

<style>
.trendWord{
    overflow-x: scroll;
    word-break: keep-all;
    text-wrap: nowrap;
}
</style>