<template>
    <div class="active-champ-wrapper">
        <div class="champ-names">
            <span class="champ-name">{{ champ.name }}</span>
            <span class="champ-nick">{{ champ.nickName }}</span>
        </div>
        <div class="champ-image-wrapper">
            <img :src="getImage(champ.name)" class="champ-image" :class="champ.name" draggable="false" />
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
    height: 90%;
    background-color: #091335;
    transform: skew(-5deg);
    margin: auto 0px;
    margin-top: 3%;
    box-shadow: 5px 5px 0px rgba($color: #1d7077, $alpha: 1), 12px 12px 20px rgba($color: #000000, $alpha: 0.3);

}

.champ-names {
    width: 15%;
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

    .Chuck {
        height: 80%;
        left: 0;
        bottom: 0;
        margin-bottom: 2%;
        margin-left: 8%;
        position: absolute;
    }

    .Anna {
        height: 75%;
        left: 0;
        bottom: 0;
        margin-bottom: 2%;
        margin-left: 15%;
        position: absolute;
    }

    .Zook {
        height: 90%;
        left: 0;
        bottom: 0;
        margin-bottom: 1.5%;
        margin-left: 10%;
        position: absolute;
    }

    .Froggy {
        margin: auto 0px;
        left: 0;
        bottom: 0;
        height: 60%;
        position: absolute;
    }

    .Sashimi {
        bottom: 0;
        left: 0;
        margin: auto 0px;
        height: 80%;
        position: absolute;
    }

    .Kitsu {
        height: 90%;
        left: 3%;
        bottom: 0;
        position: absolute;
    }

    .Kiddo {
        height: 80%;
        position: absolute;
        bottom: 0;
        left: 15%;
    }

    .Skinny {
        height: 90%;
        position: absolute;
        bottom: 0;
        left: 8%;
    }

    .Teevee {
        height: 90%;
        position: absolute;
        bottom: 0;
        left: 8%;
    }

    .Sofia {
        height: 80%;
        position: absolute;
        bottom: 0;
        left: 8%;
    }

}

.champ-image {
    height: 100%;
    object-fit: contain;
}
</style>