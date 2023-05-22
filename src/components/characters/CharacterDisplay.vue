<template>
    <div>
        <div class="character-container" v-for="ChampItem in GameData.champs" :key="ChampItem"></div>
    </div>
</template>

<script setup>
import GameData from '@/assets/GameData.js'
</script>

<script>

export default {
    name: 'CharacterDisplay',
    data() {
        return {
            GameData: GameData
        }
    },
    methods: {
        getImage(champ) {
            return
        }
    }
}

</script>

<style lang="scss" scoped></style>