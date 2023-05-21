<template>
    <div class="item-containers">
        <div class="circle hidden" :class="getColor()" @click="(e) => expandItems(e)">
            <img :src="getImage()" class="item" draggable="false">
        </div>
        <div class="item-info hidden-banner" :class="getBannerColor()">
            <div class="item-name">{{ getName() }}</div>
            <div class="item-desc">{{ getInfo() }}</div>
        </div>
    </div>
</template>

<script setup>
import Item_Backpack_CDR from '@/assets/items/Item_Backpack_CDR.png'
import Item_Backpack_CRIT from '@/assets/items/Item_Backpack_CRIT.png'
import Item_Backpack_HP from '@/assets/items/Item_Backpack_HP.png'
import Item_Backpack_LS from '@/assets/items/Item_Backpack_LS.png'
import Item_Backpack_DMG from '@/assets/items/Item_Backpack_DMG.png'
import Item_Boots_DMG from '@/assets/items/Item_Boots_DMG.png'
import Item_Boots_CDR from '@/assets/items/Item_Boots_CDR.png'
import Item_Boots_HP from '@/assets/items/Item_Boots_HP.png'
import Item_Boots_LS from '@/assets/items/Item_Boots_LS.png'
import Item_Hat_CRIT from '@/assets/items/Item_Hat_CRIT.png'
import Item_Hat_HP from '@/assets/items/Item_Hat_HP.png'
import Item_Hat_LS from '@/assets/items/Item_Hat_LS.png'
import Item_Hat_DMG from '@/assets/items/Item_Hat_DMG.png'
import Item_Hat_CDR from '@/assets/items/Item_Hat_CDR.png'
</script>
<script scoped>

function expandItems(event) {
    var column = getColumn(event.currentTarget)
    if (event.currentTarget.classList.contains('white')) {
        for (let i = 0; i < 5; i++) {
            if (i != column) {
                document.getElementsByClassName('white-banner')[i].classList.add('hidden-banner')
                document.getElementsByClassName('white-banner')[i].classList.remove('expanded-banner')
                document.getElementsByClassName('green-banner')[i].classList.add('hidden-banner')
                document.getElementsByClassName('green-banner')[i].classList.remove('expanded-banner')
                document.getElementsByClassName('blue-banner')[i].classList.add('hidden-banner')
                document.getElementsByClassName('blue-banner')[i].classList.remove('expanded-banner')
                document.getElementsByClassName('purple-banner')[i].classList.add('hidden-banner')
                document.getElementsByClassName('purple-banner')[i].classList.remove('expanded-banner')
                document.getElementsByClassName('yellow-banner')[i].classList.add('hidden-banner')
                document.getElementsByClassName('yellow-banner')[i].classList.remove('expanded-banner')
                document.getElementsByClassName('white')[i].classList.add('hidden')
                document.getElementsByClassName('white')[i].classList.remove('expanded')
                document.getElementsByClassName('green')[i].classList.add('hidden')
                document.getElementsByClassName('green')[i].classList.remove('expanded')
                document.getElementsByClassName('blue')[i].classList.add('hidden')
                document.getElementsByClassName('blue')[i].classList.remove('expanded')
                document.getElementsByClassName('purple')[i].classList.add('hidden')
                document.getElementsByClassName('purple')[i].classList.remove('expanded')
                document.getElementsByClassName('yellow')[i].classList.add('hidden')
                document.getElementsByClassName('yellow')[i].classList.remove('expanded')
            }
        }
        if (document.getElementsByClassName('white')[column].classList.contains('hidden') == true) {
            document.getElementsByClassName('white-banner')[column].classList.add('expanded-banner')
            document.getElementsByClassName('white-banner')[column].classList.remove('hidden-banner')
            document.getElementsByClassName('green-banner')[column].classList.add('expanded-banner')
            document.getElementsByClassName('green-banner')[column].classList.remove('hidden-banner')
            document.getElementsByClassName('blue-banner')[column].classList.add('expanded-banner')
            document.getElementsByClassName('blue-banner')[column].classList.remove('hidden-banner')
            document.getElementsByClassName('purple-banner')[column].classList.add('expanded-banner')
            document.getElementsByClassName('purple-banner')[column].classList.remove('hidden-banner')
            document.getElementsByClassName('yellow-banner')[column].classList.add('expanded-banner')
            document.getElementsByClassName('yellow-banner')[column].classList.remove('hidden-banner')
            document.getElementsByClassName('white')[column].classList.add('expanded')
            document.getElementsByClassName('white')[column].classList.remove('hidden')
            document.getElementsByClassName('green')[column].classList.add('expanded')
            document.getElementsByClassName('green')[column].classList.remove('hidden')
            document.getElementsByClassName('blue')[column].classList.add('expanded')
            document.getElementsByClassName('blue')[column].classList.remove('hidden')
            document.getElementsByClassName('purple')[column].classList.add('expanded')
            document.getElementsByClassName('purple')[column].classList.remove('hidden')
            document.getElementsByClassName('yellow')[column].classList.add('expanded')
            document.getElementsByClassName('yellow')[column].classList.remove('hidden')
        } else {
            document.getElementsByClassName('white-banner')[column].classList.remove('expanded-banner')
            document.getElementsByClassName('white-banner')[column].classList.add('hidden-banner')
            document.getElementsByClassName('green-banner')[column].classList.remove('expanded-banner')
            document.getElementsByClassName('green-banner')[column].classList.add('hidden-banner')
            document.getElementsByClassName('blue-banner')[column].classList.remove('expanded-banner')
            document.getElementsByClassName('blue-banner')[column].classList.add('hidden-banner')
            document.getElementsByClassName('purple-banner')[column].classList.remove('expanded-banner')
            document.getElementsByClassName('purple-banner')[column].classList.add('hidden-banner')
            document.getElementsByClassName('yellow-banner')[column].classList.remove('expanded-banner')
            document.getElementsByClassName('yellow-banner')[column].classList.add('hidden-banner')
            document.getElementsByClassName('white')[column].classList.remove('expanded')
            document.getElementsByClassName('white')[column].classList.add('hidden')
            document.getElementsByClassName('green')[column].classList.remove('expanded')
            document.getElementsByClassName('green')[column].classList.add('hidden')
            document.getElementsByClassName('blue')[column].classList.remove('expanded')
            document.getElementsByClassName('blue')[column].classList.add('hidden')
            document.getElementsByClassName('purple')[column].classList.remove('expanded')
            document.getElementsByClassName('purple')[column].classList.add('hidden')
            document.getElementsByClassName('yellow')[column].classList.remove('expanded')
            document.getElementsByClassName('yellow')[column].classList.add('hidden')
        }
    }
}


function getColumn(element) {
    var num;
    switch (element) {
        case document.getElementsByClassName('white')[0]:
            num = 0;
            break;
        case document.getElementsByClassName('white')[1]:
            num = 1;
            break;
        case document.getElementsByClassName('white')[2]:
            num = 2;
            break;
        case document.getElementsByClassName('white')[3]:
            num = 3;
            break;
        case document.getElementsByClassName('white')[4]:
            num = 4;
            break;
    }
    return num;

}



export default {
    props: {
        filename: String,
        color: String,
        name: String,
        desc: String,
        stats: Array
    },
    methods: {
        getImage() {
            return getImageURL(this.filename)
        },
        getColor() {
            return this.color
        },
        getBannerColor() {
            return this.color + "-banner"
        },
        expandItems(event) {
            expandItems(event)
        },
        getInfo() {
            let a = this.stats[this.color] + " " + this.desc
            return a
        },
        getName() {
            return this.name
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
    }
}

</script>

<style lang="scss" scoped>
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
    margin-left: 10px;
}

.hidden-banner {
    visibility: hidden;
    left: -50px;
    opacity: -100%;
    transition: 0.2s ease-in-out;
}

.expanded-banner {
    visibility: visible;
    opacity: 100%;
    transition: 0.4s ease-in-out;
    left: 0;
}

.item-info {
    user-select: none;
    color: rgb(9, 34, 56);
    text-align: center;
    transform: skew(-5deg);
    height: 70px;
    width: 200px;
    // background-color: rgb(9, 34, 56);
    // box-shadow: 3px 3px 0px rgba($color: black, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    position: absolute;
    margin-top: 0px;
    margin-left: 100px;
    z-index: -1;
}

.hidden {
    top: 0px;
    margin-top: 10px;
    cursor: pointer;
    visibility: hidden;
    opacity: 0%;
    position: relative;
    transition: 0.2s ease-in-out;
}

.expanded {
    top: 70px;
    margin-top: 30px;
    opacity: 100%;
    position: relative;
    transition: 0.2s ease-in-out;
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
    margin-left: 13px;
    margin-bottom: 6px;
    user-select: none;
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