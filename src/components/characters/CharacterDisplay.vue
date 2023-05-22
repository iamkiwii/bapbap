<template>
    <div class="champ-wrapper" :class="checkIfActive()">
        <img :src="getImage(champ.name)" class="champ-image" />
        <div class="banner">
            <div class="name">{{ champ.name }}</div>
        </div>
    </div>
</template>

<script setup>
import { ActiveChampObject } from '@/assets/UserData'
import Kitsu from '@/assets/champs/images/Kitsu.png'
import Anna from '@/assets/champs/images/Anna.png'
import Chuck from '@/assets/champs/images/Chuck.png'
import Froggy from '@/assets/champs/images/Froggy.png'
import Sashimi from '@/assets/champs/images/Sashimi.png'
import Skinny from '@/assets/champs/images/Skinny.png'
import Sofia from '@/assets/champs/images/Sofia.png'
import Teevee from '@/assets/champs/images/Teevee.png'
import Zook from '@/assets/champs/images/Zook.png'
import Kiddo from '@/assets/champs/images/Kiddo.png'
</script>

<script>

export default {
    props: {
        champ: ActiveChampObject,
    },
    methods: {
        getImage() {
            switch (this.champ.name) {
                case "Kitsu":
                    return Kitsu;
                case "Anna":
                    return Anna;
                case "Chuck":
                    return Chuck;
                case "Froggy":
                    return Froggy;
                case "Sashimi":
                    return Sashimi;
                case "Skinny":
                    return Skinny;
                case "Sofia":
                    return Sofia;
                case "Teevee":
                    return Teevee;
                case "Zook":
                    return Zook;
                case "Kiddo":
                    return Kiddo;
                default:
                    return Kitsu;
            }
        },
        checkIfActive() {
            if (this.champ.isActive == true) {
                return "active"
            }
            else {
                return "inactive"
            }
        },
    }
}

</script>

<style lang="scss" scoped>
.banner {
    width: 100%;
    height: 5%;
    display: grid;
    justify-content: center;
    align-items: center;
}

.champ-wrapper {
    width: 100%;
    height: 100px;
    background-color: #091335;
    transform: skew(-5deg);
    margin: auto 0px;
    box-shadow: 2px 2px 0px rgba($color: #1d7077, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

.champ-image {
    width: 100%;
    height: 100%;
}

.active {
    height: 125px;
    background-color: rgb(254, 214, 6);
    border: 0;
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

.inactive {
    border: 0;
    cursor: pointer;
    transition: 0.2s ease-in;
}

.inactive:hover {
    border: white solid 2px;
    transition: 0.1s ease-in;
}
</style>