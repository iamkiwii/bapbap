<template>
    <div class="item-container-wrapper">
        <!-- Item info that gets created for each tier -->
        <div class="item-info" :class="getBannerColor()">
            <div class="item-desc">{{ getInfo() }}</div>
            <div class="item-desc">{{ getStats() }}</div>
        </div>
    </div>
</template>

<script setup>
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
</script>

<style lang="scss" scoped>
.item-container-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
}

.item-desc {
    transform: skew(5deg);
    font-size: 15px;
    text-align: left;
    margin-left: 10px;
    margin-top: 2%;
    margin-bottom: 2%;
}

.item-info {
    margin-top: 5%;
    color: rgb(9, 34, 56);
    transform: skew(-5deg);
    width: 78%;
}

.white-banner {
    background-color: white;
    background-color: rgb(9, 34, 56);
    box-shadow: 3px 3px 0px rgba($color: rgb(192, 192, 192), $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    box-shadow: 3px 3px 0px rgba($color: white, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);

    .item-desc {
        color: white;
    }
}

.green-banner {
    background-color: #53ff67;
    background-color: rgb(9, 34, 56);
    box-shadow: 3px 3px 0px rgba($color: #34a341, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    box-shadow: 3px 3px 0px rgba($color: #53ff67, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);

    .item-desc {
        color: #53ff67;
    }
}

.blue-banner {
    background-color: #2ddeff;
    background-color: rgb(9, 34, 56);
    box-shadow: 3px 3px 0px rgba($color: #1d91a5, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    box-shadow: 3px 3px 0px rgba($color: #2ddeff, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);

    .item-desc {
        color: #2ddeff;
    }
}

.purple-banner {
    background-color: #be5af1;
    background-color: rgb(9, 34, 56);
    box-shadow: 3px 3px 0px rgba($color: #7b3999, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    box-shadow: 3px 3px 0px rgba($color: #be5af1, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);


    .item-desc {
        color: #be5af1;
    }
}

.yellow-banner {
    background-color: #ffe24c;
    background-color: rgb(9, 34, 56);
    box-shadow: 3px 3px 0px rgba($color: #bba432, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    box-shadow: 3px 3px 0px rgba($color: #ffe24c, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);

    .item-desc {
        color: #ffe24c;
    }
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
</style>