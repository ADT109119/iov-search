<template>
    <div class="pl-2.5 pt-1 flex flex-nowrap" style="max-width: calc(100vw - 1.5rem);">
        <span class="text-gray-600 font-semibold align-middle">熱門搜尋: </span>
        <div class="trendWord flex-1">
            <button class="ml-2 mr-2 text-gray-600 border-b-2 border-gray-600" v-for="item in trendData" @click="trendClick(item)">{{ item }}</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const trendData = ref([]);
const api = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSukF2PVJm9QLsJg-9gRoduN13TRYn7vGa8GTFHsAz_hm0BMGAfe6QKjeJy_3baWcCI3sg9Sm-Cflg9/pub?gid=1903002788&single=true&output=tsv";

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