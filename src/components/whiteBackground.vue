<template>
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <div class="mt-2 mb-4 bg-white overflow-hidden shadow sm:rounded-lg p-6">
            <h2 class="text-2xl leading-7 font-semibold">
                {{ props.title }}
            </h2>
            <p class="mt-3 text-gray-600">
                {{ props.content }}
                We recommend you take a look at the <a href="https://nuxtjs.org" target="_blank" class="button--doc text-green-500 hover:underline">Nuxt Documentation</a>, whether you are new or have previous experience with the framework.<br>
            </p>
            <p class="mt-4 pt-4 text-gray-800 border-t border-t-2 text-right">
                <a href="#" class="text-blue-600">套用設定 ></a>
            </p>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';
const props = defineProps({
    title:{
        type: String
    },
    content:{
        type: String
    }
})
</script>
