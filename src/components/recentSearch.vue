<template>
    <div class="recentSearchList">
        <whiteBackground v-for="(item, index) in store.getters.getHistory" :key="index" :history="item"></whiteBackground>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import whiteBackground from './whiteBackground.vue';

const store = useStore();

</script>
