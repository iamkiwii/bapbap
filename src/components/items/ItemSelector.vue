<template>
    <div class="button-wrapper">
        <div class="button" :class="checkIfActive()">
            <div class="btn-text">{{ item.name }}</div>
        </div>
    </div>
</template>

<script setup>
import { ActiveItemObject } from '@/assets/UserData';
</script>

<script>

export default {
    props: {
        item: ActiveItemObject
    },
    methods: {
        checkIfActive() {
            if (this.item.isActive == true) {
                return "active"
            }
            else {
                return "inactive"
            }
        }
    }
}

</script>

<style lang="scss" scoped>
.btn-text {
    font-size: 20px;
    text-transform: uppercase;
}

.active {
    background-color: rgb(254, 214, 6);
    border: 0;
    box-shadow: 3px 3px 0px rgba($color: rgb(250, 151, 34), $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

.inactive {
    background-color: white;
    border: 0;
    box-shadow: 3px 3px 0px rgba($color: rgb(192, 192, 192), $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    cursor: pointer;
    transition: 0.2s ease-in;
}

.inactive:hover {
    background-color: rgba($color: rgb(214, 214, 214), $alpha: 1);
    transition: 0.1s ease-in;
}

.button {
    text-align: center;
    width: 150px;
    height: 30px;
    transition: 0.2s ease-in-out;
}

.button-wrapper {
    margin-right: 19.5px;
    width: fit-content;
    transition: 0.2s ease-in-out;
}

.button-wrapper:hover {
    cursor: pointer;
    // transform: scale(1.1) translate(0px, 0px);
    transition: 0.1s ease-in-out;
}

.button-wrapper:active {
    transform: scale(.9);
    transition: 0.1s ease-in-out;
    box-shadow: 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}
</style>