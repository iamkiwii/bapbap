<template>
    <div :class="checkIfActive()">
        <div class="champ-wrapper">

            <img :src="getImage(champ.name)" class="champ-image" draggable="false" />
        </div>
    </div>
</template>

<script setup>
import { ActiveChampObject } from '@/assets/UserData'
import Kitsu from '@/assets/champs/Kitsu/Kitsu Icon.png'
import Anna from '@/assets/champs/Anna/Anna Icon.png'
import Chuck from '@/assets/champs/Chuck/Chuck Icon.png'
import Froggy from '@/assets/champs/Froggy/Froggy Icon.png'
import Sashimi from '@/assets/champs/Sashimi/Sashimi Icon.png'
import Skinny from '@/assets/champs/Skinny/Skinny Icon.png'
import Sofia from '@/assets/champs/Sofia/Sofia Icon.png'
import Teevee from '@/assets/champs/Teevee/Teevee Icon.png'
import Zook from '@/assets/champs/Zook/Zook Icon.png'
import Kiddo from '@/assets/champs/Kiddo/Kiddo Icon.png'
</script>

<script>

export default {
    props: {
        champ: ActiveChampObject
    },
    data() {
        return {
            isActive: this.checkIfActive()
        }
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
.champ-wrapper {
    margin: auto;
}

.champ-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.active {
    height: 125px;
    width: 65%;
    transform: skew(-5deg);
    border: rgb(254, 214, 6) solid 3px;
    filter: drop-shadow(3px 3px 0px rgba($color: #fa9722, $alpha: 1)) drop-shadow(5px 5px 8px rgba($color: #000000, $alpha: 0.3));

    .champ-wrapper {
        cursor: pointer;
        display: flex;
        background-color: rgb(254, 214, 6);
        height: 125px;
    }

}

.inactive:hover {
    filter: drop-shadow(3px 3px 0px rgba($color: #979797, $alpha: 1)) drop-shadow(5px 5px 8px rgba($color: #000000, $alpha: 0.3));

    .champ-wrapper {
        outline: white solid 3px;
        // outline-offset: -3px;

        .champ-image {
            outline: white solid 3px;
            // outline-offset: -3px;
        }
    }

}

.inactive {
    width: 60%;
    transform: skew(-5deg);
    filter: drop-shadow(3px 3px 0px rgba($color: #1d7077, $alpha: 1)) drop-shadow(5px 5px 8px rgba($color: #000000, $alpha: 0.3));

    .champ-wrapper {
        outline: white solid 0px;
        cursor: pointer;
        display: flex;
        height: 100px;
        width: 100%;
        background-color: #091335;
    }

    // .champ-wrapper:hover {
    //     transform: scale(1.048);
    //     box-sizing: content-box;
    //     z-index: 2;
    // }
}

.current-champ {
    height: 500px;
}
</style>