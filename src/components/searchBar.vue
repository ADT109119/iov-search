<template>
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-2.5 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" v-model="inputText" class="block w-full p-4 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="搜尋職缺" required>
            <button type="submit" id="searchButton" @click="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">搜尋</button>
        </div>
        <trendList></trendList>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import trendList from './trendList.vue';
import { useStore } from 'vuex';
import liff from "@line/liff";
import data from '@/assets/data/CityCountyData.json';

const inputText = ref('');
const store = useStore();

onMounted(async ()=>{
    document.addEventListener("trendClick", (e)=>{
        console.log(e.detail.text);
        inputText.value = e.detail.text;
    })
    
    document.addEventListener('loadSearchHistory', (e)=>{
        inputText.value = e.detail.history.title;
    })

    await liff.init({
        liffId: "2000189044-8WzpqeWO", // 從LIFF頁面中拿到的ID
    })
    .then(() => {

        document.querySelector("#searchButton").addEventListener('click', ()=>{
            let temp = store.getters.getData;

            let areas = [];
            for(let i = 0 ; i < temp.areas.length ; i++){
                for(let j = 0 ; j < temp.areas[i].length ; j++){
                    areas.push(`${data[i].CityName}-${data[i].AreaList[j].AreaName}`);
                }
            }

            // let message = "IOV:" + temp.workTime.join('%2C') + "\t"+ temp.workTimeDetail[0] + "\t"  + document.querySelector("#keyword").value + "\t" + temp.areas.join(",") + "\t" + temp.title;
            let message = `IOV:${temp.workTime.join('%2C')}\t${temp.workTimeDetail[0]}\t${temp.workTimeDetail[1]}\t${temp.workFeature.join('%2C')}\t${temp.workMoney==0?'':temp.workMoney}\t${temp.moneyZone[0]}\t${temp.moneyZone[1]}\t${areas.join('%2c')}\t${inputText.value}`
            message = message.replace(/undefined/g, "");
            console.log(message)
            liff.sendMessages([
                {
                    type: 'text',
                    text: message
                }

            ]).then(res => {console.log(res);liff.closeWindow()})
                .catch(error => console.log(error));
        })
    })
    .catch((err) => {
        console.log(err.code, err.message);
    });

})

function submit(){
    store.getters.getData.title = inputText.value;
    store.dispatch('setData', store.getters.getData)
    store.dispatch('addHistory')
}

watch(store.state.nowData, (newVal)=>{
    inputText.value = newVal.title;
})

watch(inputText, (newVal)=>{
    let nowData = store.getters.getData;
    nowData.title = newVal
    store.dispatch('setData', nowData)
})

</script>
