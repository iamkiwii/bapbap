<template>
    <div>
        <div class="character-container" v-for="ChampItem in GameData.champs" :key="ChampItem"></div>
    </div>
</template>

<script setup>
import GameData from '@/assets/GameData.js'
</script>

<script>



</script>

<style lang="scss" scoped></style>