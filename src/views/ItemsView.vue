<template>
    <div id="items-wrapper">
        <div id="item-display-wrapper">
            <div id="normal-items-wrapper">
                <div id="normal-items-display" v-show="normalItems">
                    <NormalItems class="NormalItems" />
                </div>
            </div>
            <div id="buttons-wrapper" @click="toggleSlider()">
                <div id="normal-button">
                    <div id="normal-btn-txt" class="btn-hover material-symbols-outlined">keyboard_double_arrow_up</div>
                </div>
                <div id="special-button">
                    <div id="special-btn-txt" class="btn-hover">SPECIAL ITEMS</div>
                </div>
            </div>
            <div id="special-items-wrapper">
                <div id="special-items-display" v-show="specialItems">
                    <SpecialItems class="SpecialItems" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import NormalItems from '@/components/items/NormalItems.vue';
import SpecialItems from '@/components/items/SpecialItems.vue';

</script>

<script>
export default {
    methods: {
        toggleSlider(a) {
            let normalItemsWrapper = document.getElementById('normal-items-wrapper');
            let specialItemsWrapper = document.getElementById('special-items-wrapper');
            let normalButtonText = document.getElementById('normal-btn-txt');
            let specialButtonText = document.getElementById('special-btn-txt');

            if (normalItemsWrapper.style.width == '100%') {
                normalItemsWrapper.style.width = '0%';
                specialItemsWrapper.style.width = '100%';
                specialButtonText.innerHTML = 'keyboard_double_arrow_up'
                normalButtonText.innerHTML = 'NORMAL ITEMS'
                normalButtonText.classList.remove('material-symbols-outlined');
                specialButtonText.classList.add('material-symbols-outlined');
                this.normalItems = false;
                this.specialItems = true;
            } else {
                specialItemsWrapper.style.width = '0%';
                normalItemsWrapper.style.width = '100%';
                if (a != "a") {
                    normalButtonText.classList.add('material-symbols-outlined');
                    specialButtonText.classList.remove('material-symbols-outlined');
                    normalButtonText.innerHTML = 'keyboard_double_arrow_up'
                    specialButtonText.innerHTML = 'SPECIAL ITEMS'
                    this.specialItems = false;
                    this.normalItems = true;
                }
            }
        }
    },
    mounted() {
        this.toggleSlider("a");
    },
    data() {
        return {
            normalItems: true,
            specialItems: false
        }
    }
}




</script>


<style lang="scss" scoped>
.NormalItems {
    width: 100%;
    height: 100%;
}


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
            width: 100%;
            height: 100%;
            transition: 0.3s ease-in-out;

            #normal-items-display {
                width: 100%;
                height: 100%;
                transition-delay: 0.3s ease-in-out;
            }
        }

        #buttons-wrapper {
            display: flex;
            width: 10%;

            #normal-button {
                width: 50%;
                height: 100%;
                transition: 0.3s ease-in-out;
            }

            #special-button {
                border-left: 5px solid white;
                width: 50%;
                height: 100%;
                transition: 0.3s ease-in-out;
            }

            .btn-hover {
                transition: 0.2s ease-in-out;
            }
        }

        #special-items-wrapper {
            width: 0%;
            height: 100%;
            display: flex;
            transition: 0.3s ease-in-out;

            #special-items-display {
                width: 100%;
                height: 100%;
                transition: 0.3s ease-in-out;
                transition-delay: 0.3s;
            }

        }
    }
}


#special-btn-txt {
    position: relative;
    bottom: 0;
    top: 50%;
    right: 220%;
    transform: rotate(90deg);
    transform-origin: 0, 0;
    width: 350px;
    color: white;
    font-size: 35px;
    text-align: center;
}

#normal-btn-txt {
    position: relative;
    bottom: 0;
    top: 50%;
    right: 220%;
    transform: rotate(-90deg);
    transform-origin: 0, 0;
    width: 350px;
    color: white;
    font-size: 35px;
    text-align: center;
}

#buttons-wrapper:hover {

    #normal-button {
        color: #fed606;
        transition: 0.2s ease-in-out;

        #normal-btn-txt {
            font-size: 36.75px;
        }

        .material-symbols-outlined {
            color: #fed606;
            right: 250%;
            transform: rotate(-90deg) scale(1.5) !important;
        }
    }

    #special-button {

        #special-btn-txt {
            font-size: 36.75px;
        }

        .material-symbols-outlined {
            color: #fed606;
            right: 190%;
            transform: rotate(90deg) scale(1.5) !important;
        }
    }
}
</style>