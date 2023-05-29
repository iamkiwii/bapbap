<template>
    <div id="wrapper">
        <div id="title">{{ name }} <div id="cost">{{ cost }}</div>
        </div>
        <div id="description">{{ passive }}</div>
        <div id="stats-wrapper">
            <div id="stat-wrapper" v-for="stat in stats" :key="stat">
                <div>
                    <HealthLogo v-if="getLogo('hp', stat[1])" class="stat-logo" />
                    <DMGLogo v-if="getLogo('dmg', stat[1])" class="stat-logo" />
                    <CDRLogo v-if="getLogo('cdr', stat[1])" class="stat-logo" />
                    <ASLogo v-if="getLogo('as', stat[1])" class="stat-logo" />
                    <MSLogo v-if="getLogo('ms', stat[1])" class="stat-logo" />
                    <VampLogo v-if="getLogo('vamp', stat[1])" class="stat-logo" />
                </div>
                <div class="stat-value">{{ stat[0] }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import HealthLogo from "@/assets/itemlogos/HealthLogo.vue"
import DMGLogo from "@/assets/itemlogos/DMGLogo.vue"
import CDRLogo from "@/assets/itemlogos/CDRLogo.vue"
import ASLogo from "@/assets/itemlogos/ASLogo.vue"
import MSLogo from "@/assets/itemlogos/MSLogo.vue"
import VampLogo from "@/assets/itemlogos/VampLogo.vue"
</script>

<script>

export default {
    props: {
        item: Object
    },
    data() {
        return {
            name: this.item.name,
            passive: this.item.passive,
            stats: this.item.stats,
            cost: this.item.cost
        }
    },
    methods: {
        getLogo(a, b) {
            if (a == b) {
                return true
            }
            else {
                return false
            }
        }
    }
}

</script>

<style lang="scss" scoped>
#wrapper {
    background-color: #092238;
    color: #ffe24c;
    box-shadow: 3px 3px 0px rgba($color: #bba432, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    width: 105%;
    height: 90%;
    padding: 5%;

    #title {
        display: flex;
        color: white;
        font-size: 1.5em;

        #cost {
            text-align: right;
            font-size: .7em;
            color: #ffe24c;
            height: fit-content;
            margin-left: auto;
            margin-top: auto;
            margin-bottom: 1%;
        }

    }

    #description {
        height: 23%;
        color: white;
        font-size: .9em;
        margin-bottom: 5%;
    }

    #stats-wrapper {
        display: flex;
        flex-wrap: wrap;

        #stat-wrapper {
            margin-top: 1%;
            width: 40%;
            display: flex;

            .stat-logo {
                text-decoration: none !important;
                font-size: 2em;
            }

            .stat-value {
                font-size: 1.5em;
                color: white;
            }
        }
    }
}
</style>