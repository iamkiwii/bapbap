<template>
    <div class="view-wrapper">
        <div class="character-container" v-for="ChampObject in GameData.champs" :key="ChampObject">

            <CharacterDisplay :champ="ChampObject" />
        </div>
    </div>
</template>

<script setup>
import GameData from '@/assets/GameData.js'
import { ChampObject } from '@/assets/GameData.js'
import CharacterDisplay from '@/components/characters/CharacterDisplay.vue';
</script>

<script>

export default {
    data() {
        return {
            GameData: GameData,
            ChampObject: ChampObject
        }
    },
    components: {

    },
    methods: {

    }
}


</script>

<script>

export default {
    data() {
        return {
            GameData: GameData
        }
    },
}

</script>


<style lang="scss" scoped>
.character-selector {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;

}

.view-wrapper {
    display: flex;
}
</style>