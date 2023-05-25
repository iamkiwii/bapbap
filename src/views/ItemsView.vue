<template>
    <div class="item-selector-wrapper">
        <div class="button-wrapper" v-for="ActiveItemObject in UserData.ActiveItems" :key="ActiveItemObject">
            <ItemSelector :item="ActiveItemObject" @click="toggleActiveItem(ActiveItemObject)" :key="updateKey" />
        </div>
    </div>
</template>

<script setup>
import ItemSelector from '@/components/items/ItemSelector.vue';


</script>

<script>
export default {
}




</script>


<style lang="scss" scoped></style>