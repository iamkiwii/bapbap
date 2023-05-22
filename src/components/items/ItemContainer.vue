<template>
    <div class="item-containers">

        <!-- Item container circle that gets created for each tier -->
        <div class="circle" :class="color">
            <img :src="getImage()" class="item" draggable="false" :class="type">
        </div>

        <!-- Item info that gets created for each tier -->
        <div class="item-info" :class="getBannerColor()">
            <div class="item-name">{{ name }}</div>
            <div class="item-desc">{{ getInfo() }}</div>
            <div class="item-desc">{{ getStats() }}</div>
        </div>
    </div>
</template>

<script setup>

// i know
import Item_Backpack_CDR from '@/assets/items/Item_Backpack_CDR.png'
import Item_Backpack_CRIT from '@/assets/items/Item_Backpack_CRIT.png'
import Item_Backpack_HP from '@/assets/items/Item_Backpack_HP.png'
import Item_Backpack_LS from '@/assets/items/Item_Backpack_LS.png'
import Item_Backpack_DMG from '@/assets/items/Item_Backpack_DMG.png'
import Item_Boots_DMG from '@/assets/items/Item_Boots_DMG.png'
import Item_Boots_CDR from '@/assets/items/Item_Boots_CDR.png'
import Item_Boots_HP from '@/assets/items/Item_Boots_HP.png'
import Item_Boots_LS from '@/assets/items/Item_Boots_LS.png'
import Item_Boots_CRIT from '@/assets/items/Item_Boots_CRIT.png'
import Item_Hat_CRIT from '@/assets/items/Item_Hat_CRIT.png'
import Item_Hat_HP from '@/assets/items/Item_Hat_HP.png'
import Item_Hat_LS from '@/assets/items/Item_Hat_LS.png'
import Item_Hat_DMG from '@/assets/items/Item_Hat_DMG.png'
import Item_Hat_CDR from '@/assets/items/Item_Hat_CDR.png'
import GameData from '@/assets/GameData'
</script>
<script scoped>

export default {
    props: {
        filename: String,
        color: String,
        name: String,
        desc: String,
        stats: Array,
        type: String
    },
    methods: {
        getImage() {
            return getImageURL(this.filename)
        },
        getBannerColor() { // Returns color and adds -banner to give the banner class
            return this.color + "-banner"
        },
        getInfo() { // Returns the stats and description of the item for the banner
            return this.stats[this.color] + " " + this.desc
        },
        getStats() { // Gets extra stats (Hat is CDR, etc.)
            let t = this.type
            if (t == undefined) {
                return GameData.extrastats["Hat"].stat[this.color] + GameData.extrastats["Hat"].desc
            }
            else {
                let a = GameData.extrastats[t]
                return a.stat[this.color] + a.desc
            }
        }
    },
    data() {
        return {
            GameData: GameData
        }
    }
}


function getImageURL(file) {
    switch (file) {
        case "Item_Backpack_CDR":
            return Item_Backpack_CDR
        case "Item_Backpack_CRIT":
            return Item_Backpack_CRIT
        case "Item_Backpack_DMG":
            return Item_Backpack_DMG
        case "Item_Backpack_HP":
            return Item_Backpack_HP
        case "Item_Backpack_LS":
            return Item_Backpack_LS
        case "Item_Hat_CDR":
            return Item_Hat_CDR
        case "Item_Hat_CRIT":
            return Item_Hat_CRIT
        case "Item_Hat_DMG":
            return Item_Hat_DMG
        case "Item_Hat_HP":
            return Item_Hat_HP
        case "Item_Hat_LS":
            return Item_Hat_LS
        case "Item_Boots_CDR":
            return Item_Boots_CDR
        case "Item_Boots_CRIT":
            return Item_Boots_CRIT
        case "Item_Boots_DMG":
            return Item_Boots_DMG
        case "Item_Boots_HP":
            return Item_Boots_HP
        case "Item_Boots_LS":
            return Item_Boots_LS
        case "Item_undefined_CDR":
            return Item_Hat_CDR
        case "Item_undefined_CRIT":
            return Item_Hat_CRIT
        case "Item_undefined_DMG":
            return Item_Hat_DMG
        case "Item_undefined_HP":
            return Item_Hat_HP
        case "Item_undefined_LS":
            return Item_Hat_LS
    }
}

</script>

<style lang="scss" scoped>
.Boots {
    margin-top: 8px;
}

.Backpack {
    margin-top: -2px;
    margin-left: 13px !important;
}

.item-containers {
    padding: 10px;
    display: flex;
}

.item-name {
    transform: skew(5deg);
    font-size: 20px;
    text-transform: uppercase;
    text-align: left;
    margin-left: 10px;
    text-shadow: 3px 3px 8px rgba($color: #000000, $alpha: 0.3);
    font-style: italic;
    text-decoration: underline;
    text-underline-offset: 4px;
}

.item-desc {
    transform: skew(5deg);
    font-size: 15px;
    text-align: left;
    margin-left: 5%;
}

.item-info {
    user-select: none;
    color: rgb(9, 34, 56);
    text-align: center;
    transform: skew(-5deg);
    height: 70px;
    width: 150px;
    margin-top: 0px;
    margin-left: 10px;
    z-index: -1;
}

.circle {
    align-items: center;
    display: flex;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    transition: 0.2s ease-in-out;
}

.circle:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
}

.item {
    height: 50px;
    width: 50px;
    opacity: 100%;
    margin-left: 11px;
    margin-bottom: 4px;
    user-select: none;
    transition: 0.2s ease-in-out;
}

.white-banner {
    background-color: white;
    box-shadow: 3px 3px 0px rgba($color: rgb(192, 192, 192), $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

.green-banner {
    background-color: #53ff67;
    box-shadow: 3px 3px 0px rgba($color: #34a341, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

.blue-banner {
    background-color: #2ddeff;
    box-shadow: 3px 3px 0px rgba($color: #1d91a5, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

.purple-banner {
    background-color: #be5af1;
    box-shadow: 3px 3px 0px rgba($color: #7b3999, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

.yellow-banner {
    background-color: #ffe24c;
    box-shadow: 3px 3px 0px rgba($color: #bba432, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

.white {
    visibility: visible;
    opacity: 100%;
    background-color: white;
    box-shadow: 3px 3px 0px rgba($color: rgb(192, 192, 192), $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

.green {
    background-color: #53ff67;
    box-shadow: 3px 3px 0px rgba($color: #34a341, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

.blue {
    background-color: #2ddeff;
    box-shadow: 3px 3px 0px rgba($color: #1d91a5, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

.purple {
    background-color: #be5af1;
    box-shadow: 3px 3px 0px rgba($color: #7b3999, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

.yellow {
    background-color: #ffe24c;
    box-shadow: 3px 3px 0px rgba($color: #bba432, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

.img {
    user-select: none;
    pointer-events: none;
}
</style>