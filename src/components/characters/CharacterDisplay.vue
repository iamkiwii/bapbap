<template>
    <div class="champ-wrapper">
        <img :src="getImage(champ.name)" class="champ-image" />
        <div class="banner">
            <div class="name"></div>
        </div>
    </div>
</template>

<script setup>
import { ChampObject } from '@/assets/GameData.js'
import Kitsu from '@/assets/champs/images/Kitsu.png'
import Anna from '@/assets/champs/images/Anna.png'
import Chuck from '@/assets/champs/images/Chuck.png'
import Froggy from '@/assets/champs/images/Froggy.png'
import Sashimi from '@/assets/champs/images/Sashimi.png'
import Skinny from '@/assets/champs/images/Skinny.png'
import Sofia from '@/assets/champs/images/Sofia.png'
import Teevee from '@/assets/champs/images/Teevee.png'
import Zook from '@/assets/champs/images/Zook.png'
</script>

<script>

export default {
    props: {
        champ: ChampObject
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
                default:
                    return Kitsu;
            }
        }
    }
}

</script>

<style lang="scss" scoped>
.banner {
    background-color: white;
    width: 100%;
    height: 50%;
}

.champ-wrapper {
    width: 100%;
    height: 300px;
    // display: flex;
    // flex-direction: column;
}

.champ-image {
    width: 10%;
    height: 100%;
}
</style>