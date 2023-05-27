<template>
    <div id="items-wrapper">
        <div id="item-display-wrapper">
            <div id="normal-items-wrapper">
                <div id="normal-items-display"></div>
                <div id="normal-button" @click="toggleSlider()"></div>

            </div>
            <div id="special-items-wrapper">
                <div id="special-button" @click="toggleSlider()"></div>
                <div id="special-items-display"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ItemSelector from '@/components/items/ItemSelector.vue';


function toggleSlider() {
    let normalItemsWrapper = document.getElementById('normal-items-wrapper');
    let specialItemsWrapper = document.getElementById('special-items-wrapper');
    let normalButton = document.getElementById('normal-button');
    let specialButton = document.getElementById('special-button');
    let normalItemsDisplay = document.getElementById('normal-items-display');
    let specialItemsDisplay = document.getElementById('special-items-display');

    if (normalItemsWrapper.style.width == '95%') {
        normalItemsWrapper.style.width = '5%';
        specialItemsWrapper.style.width = '95%';
        normalButton.style.borderRight = 'none';
        specialButton.style.borderLeft = '5px solid white';
        normalButton.style.width = '100%';
        normalItemsDisplay.style.width = '0%';
        specialItemsDisplay.style.width = '95%';
        specialButton.style.width = '5%';
    } else {
        normalItemsWrapper.style.width = '95%';
        specialItemsWrapper.style.width = '5%';
        normalButton.style.width = '5%';
        normalButton.style.borderRight = '5px solid white';
        specialButton.style.borderLeft = 'none';
        specialItemsDisplay.style.width = '0%';
        normalItemsDisplay.style.width = '95%';
        specialButton.style.width = '100%';
    }
}


</script>

<script>
export default {
    methods: {

    }
}




</script>


<style lang="scss" scoped>
#items-wrapper {
    display: flex;
    height: 100%;
    width: 100%;
    margin-top: 8vh;

    #item-display-wrapper {
        display: flex;
        width: 100%;
        background-color: #091335;
        height: 700px;
        transform: skew(-5deg);
        box-shadow: 8px 8px 0px rgba($color: #fed606, $alpha: 1), 12px 12px 20px rgba($color: #000000, $alpha: 0.3);

        #normal-items-wrapper {
            display: flex;
            width: 95%;
            height: 100%;
            transition: all 0.8s ease-in-out;

            #normal-items-display {
                transition: 0.8s ease-in-out;
                width: 95%;
                height: 100%;
            }

            #normal-button {
                transition: 0s;
                width: 5%;
                height: 100%;
                border-right: 5px solid white;
            }
        }

        #special-items-wrapper {
            width: 5%;
            height: 100%;
            display: flex;
            transition: 0.8s ease-in-out;

            #special-button {
                transition: 0s;
                display: flex;
                width: 100%;
                height: 100%;
            }

            #special-items-display {
                transition: 0.8s ease-in-out;
                width: 0%;
                height: 100%;
            }
        }
    }
}
</style>