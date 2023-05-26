<template>
    <div class="items-wrapper">
        <div class="item-display-wrapper">
            <div class="item-section"></div>
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


<style lang="scss" scoped>
.items-wrapper {
    display: flex;
    height: 100%;
    width: 100%;
    margin-top: 8vh;

    .item-display-wrapper {
        display: flex;
        width: 100%;
        background-color: #091335;
        height: 700px;
        transform: skew(-5deg);
        box-shadow: 8px 8px 0px rgba($color: #fed606, $alpha: 1), 12px 12px 20px rgba($color: #000000, $alpha: 0.3);
    }
}
</style>