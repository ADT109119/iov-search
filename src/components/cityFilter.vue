<template>

    <div style="display: grid; grid-template-columns: 1fr;">
        <div class="citys">
            <span :class="'cityButton ' + (index==showCounty?'active':'')" v-for="(item, index) in data" @click="showCounty = index" :key="index">
                <span v-show="selectedArea[index].length>0" :class="'areaNum ' + (selectedArea[index].length>0?'active':'')"><span v-show="selectedArea[index].length>0">{{ selectedArea[index].length }}</span></span>
                {{ item.CityName }}
            </span>

        </div>
        <div class="text-xl text-gray-500 font-bold mt-2">
            區域篩選: <span :class="'areaNum ' + (selectedArea[showCounty].length>0?'active':'')"><span v-show="selectedArea[showCounty].length>0">{{ selectedArea[showCounty].length }} / </span>{{ data[showCounty].AreaList.length }}</span>
            <label style="font-size: 16px; cursor: pointer;" @click="selectAll">全選</label>
        </div>
        <div id="areaSelect">
            <label v-for="(item, index) in data[showCounty].AreaList" style="margin-right: 0.5rem; display: inline-block;" :key="index">
                <input type="checkbox" :name="item.AreaName" :value="index" @change="changeSelectArea" :checked="selectedArea[showCounty].includes(index+'')">{{ item.AreaName }}
            </label>
        </div>

    </div>

</template>

<script setup>
import data from '@/assets/data/CityCountyData.json';
import { onMounted, ref, watch } from "vue";
import { useStore } from 'vuex'

const showCounty = ref(0);
const selectedArea = ref([]);
const store = useStore();

onMounted(()=>{
    // console.log(data)
    // console.log(store.getters.getData)
    document.addEventListener('loadSearchHistory', (e)=>{
        let newVal = e.detail.history;
        selectedArea.value = newVal.areas;
    })
})

for(let i = 0 ; i < data.length ; i++){
    selectedArea.value.push([]);
}


function changeSelectArea(e){
    if(e.target.checked)
        selectedArea.value[showCounty.value].push(e.target.value);
    else
        selectedArea.value[showCounty.value].splice(selectedArea.value[showCounty.value].indexOf(e.target.value), 1);
}

watch(selectedArea.value, (newVal)=>{
    let nowData = store.getters.getData;
    nowData.areas = newVal
    store.dispatch('setData', nowData)
})

watch(store.state.nowData, (newVal)=>{
    selectedArea.value = newVal.areas;
    // console.log(newVal.areas)
})

function selectAll(e){
    console.log(e.target)
    if(selectedArea.value[showCounty.value].length < data[showCounty.value].AreaList.length){
        document.querySelectorAll("#areaSelect input").forEach((item, i)=>{
            if(selectedArea.value[showCounty.value].includes(i+''))
                return;
            item.click();
        })
    }else{
        document.querySelectorAll("#areaSelect input").forEach((item)=>{
            item.click();
        })
    }
}

</script>

<style>
.citys{
    display: flex;
    flex-direction: row;
    gap: 1rem;
    overflow-x: scroll;
    width: 100%;
}

.citys span.cityButton{
    padding: 0.5rem;
    border-radius: 6px;
    border: 2px gray solid;
    text-wrap: nowrap;
    transition: .1s;
    cursor: pointer;
}

.citys span.cityButton.active{
    color: rgba(59, 130, 246, 1);
    border: 2px rgba(59, 130, 246, 1) solid;
}

.areaNum{
    font-size: 12px;
    background-color: gray;
    color: white;
    border-radius: 10000px;
    padding: 0.2rem 0.7rem;
    vertical-align: text-top
}

.areaNum.active{
    background-color: rgba(59, 130, 246, 1);
}

/*
#selectAll{
    position: relative;
}

#selectAll:has(~ label input:checked)::before{
    content: "-";
    position: absolute;
    left: 0;
    top: 0;
    background: rgb(0, 117, 255);
}
*/

</style>