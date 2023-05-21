<template>
    <!-- <div class="item-selector-wrapper">
        <ItemSelector text="HAT" :key="isHATActive()" />
        <ItemSelector text="BACKPACK" :key="isBackpackActive()" />
        <ItemSelector text="BOOTS" :key="isBootsActive()" />
    </div> -->




    <div class="item-display-wrapper">
        <div v-for="item in GameData.itemlist" :key="item">
            <ItemDisplay :item="item" />
        </div>
    </div>
</template>

<script setup>
import ItemSelector from '@/components/items/ItemSelector.vue';
import ItemDisplay from '@/components/items/ItemDisplay.vue';
import GameData from '@/assets/GameData.js'
import { ItemObject } from '@/assets/GameData.js';


</script>

<script>

export default {
    data() {
        return {
            GameData: GameData,
            item: ItemObject
        }
    },
    components: {
        ItemDisplay
    },
    methods: {

    }

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