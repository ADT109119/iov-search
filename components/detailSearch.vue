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
            <label class="text-lg mr-2">
                <input type="checkbox" value="1"> 日班
            </label>
            <label class="text-lg mr-2">
                <input type="checkbox" value="2"> 中班
            </label>
            <label class="text-lg mr-2">
                <input type="checkbox" value="3"> 晚班
            </label>
            <label class="text-lg mr-2">
                <input type="checkbox" value="4"> 大夜班
            </label>
            <label class="text-lg mr-2">
                <input type="checkbox" value="5"> 假日班
            </label>
            <label class="text-lg mr-2">
                <input type="checkbox" value="6"> 其他時段
            </label>
            <div>
                <input type="time">
                ~
                <input type="time">
            </div>

        </div>


        <div class="text-3xl text-gray-500 font-bold mt-5">
            工作性質:
        </div>
        <div class="mt-2" id="workFeature">
            <label class="text-lg mr-2">
                <input type="checkbox" value="1"> 全職
            </label>
            <label class="text-lg mr-2">
                <input type="checkbox" value="2"> 短期兼職
            </label>
            <label class="text-lg mr-2">
                <input type="checkbox" value="3"> 長期兼職
            </label>
            <label class="text-lg mr-2">
                <input type="checkbox" value="4"> 實習
            </label>
            <label class="text-lg mr-2">
                <input type="checkbox" value="5"> 寒暑假工讀
            </label>
            <label class="text-lg mr-2">
                <input type="checkbox" value="6"> 負委託
            </label>
            <label class="text-lg mr-2">
                <input type="checkbox" value="7"> 遠端工作
            </label>

        </div>


        
        <div class="text-3xl text-gray-500 font-bold mt-5">
            工作待遇:
        </div>
        <div class="mt-2" id="workMoney">
            <label class="text-lg mr-2">
                <input type="radio" value="1" name="workMoney" checked> 時薪
            </label>
            <label class="text-lg mr-2">
                <input type="radio" value="2" name="workMoney"> 日新
            </label>
            <label class="text-lg mr-2">
                <input type="radio" value="3" name="workMoney"> 月薪
            </label>
            <label class="text-lg mr-2">
                <input type="radio" value="4" name="workMoney"> 面議
            </label>

            <div class="moneyZone">
                <span class="bg-gray-100 rounded border-2">
                    <input type="number" class="bg-transparent p-2" placeholder="起始範圍">
                </span>
                <t style="transform: translateY(0.5rem);">~</t>
                <span class="bg-gray-100 rounded border-2">
                    <input type="number" class="bg-transparent p-2" placeholder="結束範圍">
                </span>
            </div>

        </div>

    </div>

</template>

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