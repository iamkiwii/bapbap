<template>
    <div class="view-wrapper">

        <div class="active-champ-display">

            <!-- <CharacterInformation :champ="getActiveChampObject(UserData.CurrentActiveChamp)" /> -->
            <ChuckInfo v-show="active == 'Chuck'" />
            <AnnaInfo v-show="active == 'Anna'" />
            <ZookInfo v-show="active == 'Zook'" />
            <KitsuInfo v-show="active == 'Kitsu'" />
            <SashimiInfo v-show="active == 'Sashimi'" />
            <KiddoInfo v-show="active == 'Kiddo'" />
            <SkinnyInfo v-show="active == 'Skinny'" />
            <FroggyInfo v-show="active == 'Froggy'" />
            <TeeveeInfo v-show="active == 'Teevee'" />
            <SofiaInfo v-show="active == 'Sofia'" />
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
import AnnaInfo from '@/components/characters/AnnaInfo.vue';
import ZookInfo from '@/components/characters/ZookInfo.vue';
import KitsuInfo from '@/components/characters/KitsuInfo.vue';
import SashimiInfo from '@/components/characters/SashimiInfo.vue';
import KiddoInfo from '@/components/characters/KiddoInfo.vue';
import SkinnyInfo from '@/components/characters/SkinnyInfo.vue';
import FroggyInfo from '@/components/characters/FroggyInfo.vue';
import TeeveeInfo from '@/components/characters/TeeveeInfo.vue';
import SofiaInfo from '@/components/characters/SofiaInfo.vue';
</script>

<script>

export default {
    data() {
        return {
            GameData: GameData,
            ActiveChampObject: ActiveChampObject,
            updateKey: 0,
            active: 'Chuck'
        }
    },
    components: {
        CharacterDisplay,
        ChuckInfo,
        AnnaInfo
    },
    methods: {
        // Toggles active item in UserData.ActiveItems then forces a re-render of the ItemSelector component
        toggleActiveItem(champ) {
            for (let i = 0; i < UserData.ActiveChamps.length; i++) {
                if (UserData.ActiveChamps[i].isActive == true) {
                    UserData.ActiveChamps[i].isActive = false
                }
                if (UserData.ActiveChamps[i].name == champ.name) {
                    UserData.ActiveChamps[i].isActive = !UserData.ActiveChamps[i].isActive
                }
            }
            this.active = champ.name
        },
        // Forces a re-render of the ItemSelector component
        forceRender() {
            this.updateKey++;
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