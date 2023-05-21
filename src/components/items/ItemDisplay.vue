<template>
    <div class="container-wrapper">
        <div v-for="color in item.colors" :key="color">
            <ItemContainer :filename="getImage()" :color="color" :class="getItem()" :desc="getDesc()" :stats="getStats()"
                :name="getName()" />
        </div>
    </div>
</template>

<script setup>
import ItemContainer from '@/components/items/ItemContainer.vue';
import { ItemObject } from '@/assets/GameData.js'





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
            var filename = "Item_Backpack_" + this.item.type
            return filename
        },
        getItem() {
            return this.item.type
        },
        getName() {
            return this.item.name
        },
        getStats() {
            return this.item.stats
        },
        getDesc() {
            return this.item.desc
        }
    }
}


</script>

<style lang="scss" scoped>
.container-wrapper {
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    position: relative;
    width: fit-content;
    height: fit-content;
    transition: all 0.5s ease;

}
</style>