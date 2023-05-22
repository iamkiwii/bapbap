<template>
    <div class="rank-wrapper" :class="getRank()"> <!-- wrapper for each rank to add certain styles to each rank -->
        <div class="image-wrapper">
            <img :src="getImage()" class="image" draggable="false">
        </div>
        <div class="rank-banners-wrapper">
            <div class="rank-banners" v-for="tier in rank.tiers" :key="tier" :class="tier">
                <div class="banner-text-wrapper">
                    <div class="rank-name">{{ getRankText(tier) }}</div>
                    <div class="rank-fee">Fee: {{ getFee(tier) }}</div>
                    <div class="rank-threshold">Threshhold: {{ getThreshold(tier) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { RankObject } from '@/assets/GameData.js';

// Imports rank images bc vite has cancer
import Unranked from '@/assets/ranks/unranked.png'
import Bronze from '@/assets/ranks/bronze.png'
import Silver from '@/assets/ranks/silver.png'
import Gold from '@/assets/ranks/gold.png'
import Platinum from '@/assets/ranks/platinum.png'
import Diamond from '@/assets/ranks/diamond.png'
import Royal from '@/assets/ranks/royal.png'

</script>

<script>

export default {
    props: {
        rank: RankObject
    },
    methods: {
        getImage() { // Returns the image for the rank again cuz vite has cancer
            let filename;
            switch (this.rank.rank) {
                case "Unranked":
                    filename = Unranked
                    break;
                case "Bronze":
                    filename = Bronze
                    break;
                case "Silver":
                    filename = Silver
                    break;
                case "Gold":
                    filename = Gold
                    break;
                case "Platinum":
                    filename = Platinum
                    break;
                case "Diamond":
                    filename = Diamond
                    break;
                case "Royal":
                    filename = Royal
                    break;
            }
            return filename
        },
        getRank() {
            return this.rank.rank
        },
        getRankText(tier) { // Returns the rank text for the rank with the tier text. Ex: Bronze II
            return this.rank.rank + " " + tier
        },
        getFee(tier) { // Calculates fee bc making a seperate object for each rank is dumb
            let n = 0;
            let i = this.rank.fee;
            if (tier == "II") n = 1;
            if (tier == "III") n = 2;

            let fee = i + n;
            return fee;
        },
        getThreshold(tier) { // Calculates threshold bc making a seperate object for each rank is dumb
            let n = 0;
            let i = this.rank.threshold;
            if (tier == "II") n = 1;
            if (tier == "III") n = 2;
            let threshold = i + (n * 100);
            return threshold;
        }
    }
}

</script>

<style lang="scss" scoped>
.I {
    backface-visibility: hidden;
}

.II {
    backface-visibility: hidden;
}

.III {
    backface-visibility: hidden;
}



.rank-banners:hover {

    transform: scale(1.3) translate3d(0, 0, 0);
    z-index: 1;
    backface-visibility: hidden;
    transition: 0.4s ease-in-out;
    box-shadow: 3px 3px 0px rgba($color: black, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3), 0px 0px 50px rgba($color: #000000, $alpha: 0.5);

}

.rank-name {
    color: white;
    user-select: none;
    text-transform: uppercase;
    text-align: left;
    margin-left: 6%;
    font-size: 140%;
    text-shadow: 1px 1px 8px rgba($color: #000000, $alpha: 0.3);
    text-decoration: underline;
    text-underline-offset: 25%;
    margin-bottom: 3%;
}

.rank-fee {
    color: white;
    user-select: none;
    text-transform: uppercase;
    text-align: left;
    margin-left: 5%;
    font-size: 90%;
}

.rank-threshold {
    color: white;
    user-select: none;
    text-transform: uppercase;
    text-align: left;
    margin-left: 5%;
    font-size: 90%;
}

.banner-text-wrapper {
    transform: skew(5deg);
    color: white;
}

.Bronze {
    transform: skew(-5deg);

    .rank-name {
        user-select: none;
        color: #c3614b;
        text-decoration-color: #00c4e8;
    }
}

.Silver {
    transform: skew(-5deg);

    .rank-name {
        user-select: none;
        color: #6b9dcb;
        text-decoration-color: #00ccbd;
    }
}

.Gold {
    transform: skew(-5deg);

    .rank-name {
        user-select: none;
        color: #eba61c;
        text-decoration-color: #88b500;
    }
}

.Royal {
    transform: skew(5deg);

    .image-wrapper {
        margin-left: 10%;
        transform: skew(-5deg);
    }

    .banner-text-wrapper {
        transform: skew(-5deg);
    }

    .rank-name {
        user-select: none;
        color: #c31fdc;
        text-decoration-color: #ff4801;
    }

}

.Platinum {
    transform: skew(5deg);

    .image-wrapper {
        transform: skew(-5deg);
        margin-left: 10%;
    }

    .banner-text-wrapper {
        transform: skew(-5deg);
    }

    .rank-name {
        user-select: none;
        color: #6ae1e1;
        text-decoration-color: #fd52eb;
    }
}

.Diamond {
    transform: skew(5deg);

    .image-wrapper {
        transform: skew(-5deg);
        margin-left: 10%;
    }

    .banner-text-wrapper {
        transform: skew(-5deg);
    }

    .rank-name {
        user-select: none;
        color: #8b93ff;
        text-decoration-color: #c962ff;
    }

}

.rank-banners-wrapper {
    margin-bottom: 2%;
}

.rank-banners {
    user-select: none;
    transition: 0.1s ease-in-out;
    display: flex;
    flex-direction: column;
    z-index: 0;
    margin-top: 1%;
    margin-bottom: 8%;
    width: 135%;
    height: 80px;
    background-color: rgb(9, 34, 56);
    box-shadow: 3px 3px 0px rgba($color: black, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    text-align: center;
}

.rank-wrapper {
    margin-bottom: 10%;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: fit-content;

}

.image-wrapper {
    transform: skew(5deg);
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    margin-bottom: 5px;
}

.image {
    margin-left: 33.3%;
    user-select: none;
    width: 125px;
    height: 125px;
    object-fit: contain;
}
</style>