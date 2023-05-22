<template>
    <div class="view-wrapper">

        <div class="active-champ-display">



        </div>



        <div class="character-selector" v-for="ActiveChampObject in UserData.ActiveChamps" :key="ActiveChampObject">
            <div class="temporary"></div>
            <CharacterDisplay :champ="ActiveChampObject" :key="updateKey" @click="toggleActiveItem(ActiveChampObject)" />
        </div>
    </div>
</template>

<script setup>
import GameData from '@/assets/GameData.js'
import UserData from '@/assets/UserData.js';
import { ActiveChampObject } from '@/assets/UserData.js';
import CharacterDisplay from '@/components/characters/CharacterDisplay.vue';
</script>

<script>

export default {
    data() {
        return {
            GameData: GameData,
            ActiveChampObject: ActiveChampObject,
            updateKey: 0
        }
    },
    components: {
        CharacterDisplay
    },
    methods: {
        // Toggles active item in UserData.ActiveItems then forces a re-render of the ItemSelector component
        toggleActiveItem(item) {
            toggleActive(item);
            this.forceRender();
        },
        // Forces a re-render of the ItemSelector component
        forceRender() {
            this.updateKey++;
        }
    }
}

function toggleActive(a) {
    UserData.currentActiveChamp = a.name
    if (a.isActive == true) {
        return;
    }
    for (let i = 0; i < UserData.ActiveChamps.length; i++) {
        if (UserData.ActiveChamps[i] == a) {
            UserData.ActiveChamps[i].isActive = true;
        } else {
            UserData.ActiveChamps[i].isActive = false;
        }
    }
    a.isActive = true;
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
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
}
</style>