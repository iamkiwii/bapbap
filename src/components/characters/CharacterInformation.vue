<template>
    <div class="active-champ-wrapper">
        <div class="champ-names" >
            <span class="champ-name">{{ champ.name }}</span>
            <span class="champ-nick">{{ champ.nickName }}</span>
        </div>
        <div class="champ-image-wrapper">
            <img :src="getImage(champ.name)" class="champ-image" :class="champ.name" />
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
.active-champ-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #091335;
    transform: skew(-5deg);
    margin: auto 0px;
    box-shadow: 2px 2px 0px rgba($color: #1d7077, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);

}

.champ-names {
    width: 175px;
    margin: 15% 10px 60% 10px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
}

.champ-name {
    color: white !important;
    margin-bottom: 0px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 2px;
}

.champ-nick {
    color: white !important;
    margin-top: 0px;
}

.champ-image-wrapper {
    width: 60%;
    height: 100%;

    .Froggy {
        margin: auto 0px;
        left: 0;
        top: 10%;
        height: 80%;
        position: absolute;
    }

    .Sashimi {
        top: 10%;
        left: 0;
        margin: auto 0px;
        height: 80%;
        position: absolute;
    }

    .Kitsu {
        left: 3%;
        position: absolute;
    }

}

.champ-image {
    height: 100%;
    object-fit: contain;
}

</style>