<template>
    <div class="view-wrapper">

        <div class="active-champ-display">

            <!-- <CharacterInformation :champ="getActiveChampObject(UserData.CurrentActiveChamp)" /> -->
            <ChuckInfo />
        </div>


        <div class="character-selector-wrapper">
            <div class="character-selector" v-for="ActiveChampObject in UserData.ActiveChamps" :key="ActiveChampObject">
                <div class="temporary"></div>
                <CharacterDisplay :champ="ActiveChampObject" :key="updateKey"
                    @click="toggleActiveItem(ActiveChampObject)" />
            </div>
        </div>
    </div>
</template>

<script setup>
import GameData from '@/assets/GameData.js';
import UserData from '@/assets/UserData.js';
import { ActiveChampObject } from '@/assets/UserData.js';
import CharacterDisplay from '@/components/characters/CharacterDisplay.vue';
import ChuckInfo from '@/components/characters/ChuckInfo.vue';
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
        CharacterDisplay,
        ChuckInfo
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
    UserData.CurrentActiveChamp = a.name
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

function getActiveChampObject(champName) {
    for (let champ of UserData.ActiveChamps) {
        if (champName === champ.name) {
            return champ
        }
    }
}


</script>


<style lang="scss" scoped>
.character-selector {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;

}

.character-selector-wrapper {
    display: flex;
}

.active-champ-display {
    padding-top: 10px;
    height: 715px;
}

.view-wrapper {
    height: 100%;
    width: 100%;
    display: grid;
    align-items: center;
}
</style>