<template>
    <div class="container-wrapper"> <!-- Wraps the entire items display-->
        <div class="item-type-wrapper">
            <div :class="item.name">
                <div class="circle">
                    <img :src="getImage()" class="item" draggable="false" :class="type">
                </div>
                <div class="item-type">{{ item.name }}</div>
            </div>
        </div>
        <div v-for="color in item.colors" :key="color" class="colors">
            <!-- Loops through all colors and wraps each item type and all its tiers-->
            <ItemContainer :filename="getImage()" :color="color" :desc="item.desc" :stats="item.stats" :type="activeItem"
                :name="item.name" />
        </div>
    </div>
</template>

<script setup>
import ItemContainer from '@/components/items/ItemContainer.vue';
import { ItemObject } from '@/assets/GameData.js'
import UserData from '@/assets/UserData';
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

</script>


<script>

export default {
    props: {
        item: ItemObject
    },
    components: {
        ItemContainer
    },
    methods: {
        getImage() {
            var filename = "Item_" + UserData.currentActive + "_" + this.item.type
            switch (filename) {
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
    },
    data() {
        return {
            activeItem: UserData.currentActive
        }
    }
}


</script>

<style lang="scss" scoped>
.item-type-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 4%;
}

.item {
    height: 50px;
    width: 50px;
    margin-left: 11px;
    margin-bottom: 4px;
}


// Images are a bit weird, so I had to add some margins to make them look good
.Boots {
    margin-top: 8px;
}

.Backpack {
    margin-top: -2px;
    margin-left: 13px !important;
}


.container-wrapper {
    display: flex;
    flex-direction: column;
}


// Item type colors
.Chrono {
    width: 80%;
    display: flex;
    align-items: center;

    .circle {
        align-items: center;
        display: flex;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #2dabb7;
        box-shadow: 2px 2px 0px rgba($color: #1d7077, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    }

    .item-type {
        margin-left: 5%;
        font-size: 30px;
        color: white;
        text-shadow: 3px 2px 0px rgba($color: #a5a5a5, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    }
}

.Snap {
    width: 100%;
    display: flex;
    align-items: center;

    .circle {
        align-items: center;
        display: flex;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #e3a020;
        box-shadow: 2px 2px 0px rgba($color: #a06f15, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    }

    .item-type {
        margin-left: 5%;
        font-size: 30px;
        color: white;
        text-shadow: 3px 2px 0px rgba($color: #a5a5a5, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    }
}

.Sharp {
    width: 100%;
    display: flex;
    align-items: center;

    .circle {
        align-items: center;
        display: flex;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #b2090d;
        box-shadow: 2px 2px 0px rgba($color: #7a0608, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    }

    .item-type {
        margin-left: 5%;
        font-size: 30px;
        color: white;
        text-shadow: 3px 2px 0px rgba($color: #a5a5a5, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    }
}

.Bulky {
    width: 100%;
    display: flex;
    align-items: center;

    .circle {
        align-items: center;
        display: flex;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #589418;
        box-shadow: 2px 2px 0px rgba($color: #375e0e, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    }

    .item-type {
        margin-left: 5%;
        font-size: 30px;
        color: white;
        text-shadow: 3px 2px 0px rgba($color: #a5a5a5, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    }
}

.Vamp {
    width: 100%;
    display: flex;
    align-items: center;

    .circle {
        align-items: center;
        display: flex;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #6121aa;
        box-shadow: 2px 2px 0px rgba($color: #3c1569, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    }

    .item-type {
        margin-left: 5%;
        font-size: 30px;
        color: white;
        text-shadow: 3px 2px 0px rgba($color: #a5a5a5, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    }
}
</style>