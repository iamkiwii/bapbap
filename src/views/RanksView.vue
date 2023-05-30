<template>
    <div class="view">
        <div class="left-side">
            <div class="rank-display-wrapper"> <!-- Wrapper for all ranks -->
                <!-- Loop through all ranks and display them -->
                <div :class="rank.rank" v-for="rank in GameData.ranks" :key="rank">
                    <RankDisplay :rank="rank" />
                </div>
            </div>
        </div>
        <div class="right-side">

            <!-- Seperate component for divine rank cuz its max rank -->
            <div class="divine-wrapper">
                <div class="divine-image-wrapper">
                    <img :src="getDivineIMG()" class="divine-image" draggable="false">
                </div>
                <div class="divine-banners-wrapper">
                    <div class="divine-banners">
                        <div class="divine-banner-text-wrapper">
                            <div class="divine-name">Divine</div>
                            <div class="divine-fee">Fee: -34</div>
                            <div class="divine-threshold">TOP 50 PLAYERS</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Big box of text explaining how ranked works -->
            <div class="info-banner-wrapper">
                <div class="info-banner">
                    <div class="info-banner-text-wrapper">
                        <div class="info-title">INFO</div>
                        <div class="info-banner-text">
                            <div>1st: +36 | 2nd: +15 | 3rd: +9 | 4th: +6 | 5th: +3 | Team Kills: +3</div>
                            <div> Solo: 50% fee | Duo: 75% fee</div>
                            <div>Each game costs an RP fee depending on rank.</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script setup>
import RankDisplay from '@/components/ranks/RanksDisplay.vue';
import GameData from '@/assets/GameData.js';
import { RankObject } from '@/assets/GameData.js';
import Divine from '@/assets/ranks/divine.png'


</script>

<script>

export default {
    data() {
        return {
            GameData: GameData,
            rank: RankObject
        }
    },
    methods: {

    }
}


function getDivineIMG() {
    return Divine
}

</script>

<style lang="scss" scoped>
.info-title {
    user-select: none;
    text-shadow: 2px 2px 3px rgba($color: rgb(0, 0, 0), $alpha: 0.3);
    text-decoration: underline;
    text-underline-offset: 30%;
    margin-bottom: 4%;
    margin-left: 5%;
    font-size: 190%;
    color: rgb(9, 34, 56);
}

.info-banner-text {
    user-select: none;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 100%;

    div {
        user-select: none;
        text-shadow: 2px 2px 3px rgba($color: rgb(0, 0, 0), $alpha: 0.3);
        color: rgb(9, 34, 56);
        margin-bottom: 3%;
    }
}

.info-banner-text-wrapper {
    transform: skew(-5deg);
}

.info-banner-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100%;
}

.info-banner {
    transform: skew(5deg);
    box-shadow: 5px 5px 0px rgba($color: rgb(250, 151, 34), $alpha: 1), -22px -22px 0px rgba($color: rgb(9, 34, 56), $alpha: 1), 10px 10px 8px rgba($color: #000000, $alpha: 0.3);
    width: 75%;
    height: 45%;
    background-color: rgb(254, 214, 6);
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
}


.left-side {
    display: flex;
    width: 60%;
    height: fit-content;
}

.right-side {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
}

.divine-image-wrapper {
    display: flex;
    width: 250px;
    height: 250px;
    margin-top: 10px;
    margin-bottom: 5px;
}

.divine-image {
    user-select: none;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.divine-wrapper {
    margin-top: 15px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.divine-banners-wrapper {
    display: flex;
    align-items: center;
    align-content: center;
}

.divine-banners {
    transform: skew(-5deg);
    transition: 0.1s ease-in-out;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: 10px;
    width: 300px;
    height: 120px;
    background-color: rgb(9, 34, 56);
    box-shadow: 4px 4px 0px rgba($color: black, $alpha: 1), 6px 6px 8px rgba($color: #000000, $alpha: 0.3);
    text-align: center;
}

.divine-name {
    user-select: none;
    color: #8dfad0;
    text-transform: uppercase;
    text-align: left;
    margin-left: 10px;
    font-size: 1.7rem;
    text-shadow: 1px 1px 8px rgba($color: #000000, $alpha: 0.3);
    text-decoration: underline;
    text-decoration-color: #ff3c5e;
    text-underline-offset: 12px;
    margin-bottom: 12px;
}

.divine-fee {
    color: #ff3c5e;
    user-select: none;
    text-transform: uppercase;
    text-align: left;
    margin-left: 10px;
    font-size: 1.3rem;
    margin-bottom: 5px;
}

.divine-threshold {
    color: #ff3c5e;
    user-select: none;
    text-transform: uppercase;
    text-align: left;
    margin-left: 10px;
    font-size: 1.3rem;
}

.view {
    display: flex;
    height: fit-content;
}

.Bronze {
    height: fit-content;
    grid-area: 1 / 1 / 2 / 2;
}

.Silver {
    height: fit-content;
    grid-area: 1 / 2 / 2 / 3;
}

.Gold {

    height: fit-content;
    grid-area: 1 / 3 / 2 / 4;

}

.Platinum {
    height: fit-content;
    margin-top: -6%;
    grid-area: 2 / 1 / 3 / 2;

}

.Diamond {
    height: fit-content;
    margin-top: -6%;
    grid-area: 2 / 2 / 3 / 3;

}

.Royal {
    height: fit-content;
    margin-top: -6%;
    grid-area: 2 / 3 / 3 / 4;

}

.rank-display-wrapper {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    transition: all 0.5s ease;
    margin-top: 1.35%;
}
</style>