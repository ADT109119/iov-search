<template>

    <div style="display: grid; grid-template-columns: 1fr;">

        <div class="citys">
            <span :class="'cityButton ' + (index==showCounty?'active':'')" v-for="(item, index) in data" @click="showCounty = index">{{ item.CityName }}</span>

        </div>
        <div class="text-xl text-gray-500 font-bold mt-2">
            區域篩選: <span class="areaNum">{{ data[showCounty].AreaList.length }}</span>
        </div>
        <div>
            <label style="font-size: 16px;" id="selectAll"><input type="checkbox" ref="selectAllCheckbox">全選</label><br>
            <label v-for="(item, index) in data[showCounty].AreaList" style="margin-right: 0.5rem; display: inline-block;">
                <input type="checkbox" :value="index" @change="changeSelectArea">{{ item.AreaName }}
            </label>
        </div>

    </div>

</template>

<script setup>
import data from '@/assets/data/CityCountyData.json'
import { ref, watch } from "vue";

const showCounty = ref(0);

const selectedArea = ref([]);

for(let i = 0 ; i < data.length ; i++){
    selectedArea.value.push([]);
}

const selectAllCheckbox = ref();

function changeSelectArea(e){
    if(e.target.checked)
        selectedArea.value[showCounty.value].push(e.target.value);
    else
        selectedArea.value[showCounty.value].splice(selectedArea.value[showCounty.value].indexOf(e.target.value), 1);
}

watch(selectedArea, (newVal)=>{
    
})

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