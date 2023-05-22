<template>
    <div class="container-wrapper"> <!-- Wraps the entire items display-->
        <div v-for="color in item.colors" :key="color">
            <!-- Loops through all colors and wraps each item type and all its tiers-->
            <ItemContainer :filename="getImage()" :color="color" :class="item.type" :desc="item.desc" :stats="item.stats"
                :type="activeItem" :name="item.name" />
        </div>
    </div>
</template>

<script setup>
import ItemContainer from '@/components/items/ItemContainer.vue';
import { ItemObject } from '@/assets/GameData.js'
import UserData from '@/assets/UserData';





</script>


<script>

export default {
    props: {
        item: ItemObject
    },
    components: {
        ItemContainer
    },
    methods: {
        getImage() {
            var filename = "Item_" + UserData.currentActive + "_" + this.item.type
            return filename
        }
    },
    data() {
        return {
            activeItem: UserData.currentActive
        }
    }
}


</script>

<style lang="scss" scoped>
.container-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    width: fit-content;
    height: fit-content;
    transition: all 0.5s ease;

}
</style>