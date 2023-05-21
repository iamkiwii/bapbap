<template>
    <div class="view">
        <div class="left-side">
            <div class="rank-display-wrapper">
                <div :class="rank.rank" v-for="rank in GameData.ranks" :key="rank">
                    <RankDisplay :rank="rank" />
                </div>
            </div>
        </div>
        <div class="right-side">
            <div class="divine-wrapper">
                <div class="divine-image-wrapper">
                    <img :src="getDivineIMG()" class="divine-image">
                </div>
                <div class="divine-banners-wrapper">
                    <div class="divine-banners">
                        <div class="divine-banner-text-wrapper">
                            <div class="divine-name">Divine</div>
                            <div class="divine-fee">Fee: 20</div>
                            <div class="divine-threshold">TOP 50 PLAYERS</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-banner-wrapper">
                <div class="info-banner">
                    <div class="info-banner-text-wrapper">
                        <div class="info-banner-text">
                            <p>Each player starts at 0 ranked points.</p>
                            <p>Each game played will cost the player a fee (unless unranked)</p>
                            <P>Reaching the threshold of 100 ranked points per rank will cause a rank up</P>
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
import Divine from '@/assets/ranks/Divine.png'


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
.info-banner-wrapper {
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100%;
}

.info-banner {
    box-shadow: 5px 5px 0px rgba($color: rgb(192, 192, 192), $alpha: 1), 8px 8px 8px rgba($color: #000000, $alpha: 0.3);
    transform: skew(5deg);
    width: 400px;
    height: 200px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
}


.left-side {
    display: flex;
    width: 60%;
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
    height: 100px;
    background-color: white;
    box-shadow: 4px 4px 0px rgba($color: rgb(192, 192, 192), $alpha: 1), 6px 6px 8px rgba($color: #000000, $alpha: 0.3);
    text-align: center;
}

.divine-name {
    user-select: none;
    text-transform: uppercase;
    text-align: left;
    margin-left: 10px;
    font-size: 1.7rem;
    text-shadow: 1px 1px 8px rgba($color: #000000, $alpha: 0.3);
    text-decoration: underline;
    text-underline-offset: 4px;
}

.divine-fee {
    user-select: none;
    text-transform: uppercase;
    text-align: left;
    margin-left: 10px;
    font-size: 1.3rem;
}

.divine-threshold {
    user-select: none;
    text-transform: uppercase;
    text-align: left;
    margin-left: 10px;
    font-size: 1.3rem;
}

.view {
    display: flex;
}

.Bronze {
    grid-area: 1 / 1 / 2 / 2;
}

.Silver {
    grid-area: 1 / 2 / 2 / 3;
}

.Gold {

    grid-area: 1 / 3 / 2 / 4;

}

.Platinum {
    grid-area: 2 / 1 / 3 / 2;

}

.Diamond {
    grid-area: 2 / 2 / 3 / 3;
}

.Royal {
    grid-area: 2 / 3 / 3 / 4;
}

.rank-display-wrapper {
    height: fit-content;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    transition: all 0.5s ease;
    margin-top: 10px;
}
</style>