<template>
    <div class="item-selector-wrapper">
        <div class="button-wrapper" v-for="ActiveItemObject in UserData.ActiveItems" :key="ActiveItemObject">
            <ItemSelector :item="ActiveItemObject" @click="toggleActiveItem(ActiveItemObject)" :key="updateKey" />
        </div>
    </div>



    <div class="item-type-banner">
        <div v-for="types in GameData.itemtypes" :key="type">
            <h1>{{ types }}</h1>
        </div>
    </div>
    <div class="item-display-wrapper">
        <div v-for="item in GameData.itemlist" :key="item">
            <ItemDisplay :item="item" :key="updateKey" />
        </div>
    </div>
</template>

<script setup>
import ItemSelector from '@/components/items/ItemSelector.vue';
import ItemDisplay from '@/components/items/ItemDisplay.vue';
import GameData from '@/assets/GameData.js'
import UserData from '@/assets/UserData.js';
import { ItemObject } from '@/assets/GameData.js';
import { ActiveItemObject } from '@/assets/UserData.js';


</script>

<script>
export default {
    data() {
        return {
            GameData: GameData,
            item: ItemObject,
            ActiveItemObject: ActiveItemObject,
            updateKey: 0
        }
    },
    components: {
        ItemDisplay
    },
    methods: {
        toggleActiveItem(item) {
            toggleActive(item);
            this.forceRender();
        },
        forceRender() {
            this.updateKey++;
        }
    }

}

function toggleActive(a) {
    UserData.currentActive = a.name
    if (a.isActive == true) {
        return;
    }
    for (let i = 0; i < UserData.ActiveItems.length; i++) {
        if (UserData.ActiveItems[i] == a) {
            UserData.ActiveItems[i].isActive = true;
        } else {
            UserData.ActiveItems[i].isActive = false;
        }
    }
    a.isActive = true;
}



</script>


<style lang="scss" scoped>
.test {
    color: white;
    font-size: 30px;
}

.item-display-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    transition: all 0.5s ease;
    margin-top: 40px;

}


.item-selector-wrapper {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    transform: skew(-5deg);
}
</style>