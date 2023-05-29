<template>
    <div class="special-wrapper">
        <div class="item-container" v-for="item in items" :key="item">
            <div class="test">
                <ItemContainer :item="item" />
            </div>
        </div>
    </div>
</template>

<script setup>
import ItemContainer from "@/components/items/ItemContainer.vue"

const items = {
    slimehat: {
        name: "SLIME HAT",
        passive: "Upon damaging a target, spawns a jelly puddle that slows enemies.",
        stats: {
            health: ["+250", "hp"],
            aspeed: ["+25%", "as"],
            cdr: ["+75", "cdr"]
        }
    },
    snowcap: {
        name: "SNOW CAP",
        passive: "Upon damaginge a target, freeze it.",
        stats: {
            health: ["+250", "hp"],
            damage: ["+40", "dmg"],
            cdr: ["+75", "cdr"]
        },
        cost: 499
    },
    explosioncap: {
        name: "EXPLOSION CAP",
        passive: "When you kill a target, spawn an explosion (100 + 25% of max health).",
        stats: {
            damage: ["+80", "dmg"],
            cdr: ["+75", "cdr"]
        },
        cost: 399
    },
    shieldbag: {
        name: "SHIELD BAG",
        passive: "Blocks incoming atttacks. Once used, recharges after 6s.",
        stats: {
            damage: ["+60", "dmg"],
            health: ["+250", "hp"],
            basehp: ["+50%", "hp"]
        },
        cost: 499
    },
    spikybag: {
        name: "SPIKY BAG",
        passive: "Reflect 20% of the damage to the attacker.",
        stats: {
            health: ["+900", "hp"],
            basehp: ["+50%", "hp"]
        },
        cost: 499
    },
    rezboots: {
        name: "REZ BOOTS",
        passive: "On death, revive after 3s with 50% hp. One time use.",
        stats: {
            damage: ["+60", "dmg"],
            cdr: ["+40", "cdr"],
            ms: ["+75", "ms"]
        },
        cost: 499
    },
    resetboots: {
        name: "RESET BOOTS",
        passive: "Rest all cooldowns on kill.",
        stats: {
            damage: ["+40", "dmg"],
            as: ["+15%", "as"],
            ms: ["+75", "ms"]
        },
        cost: 499
    },
    metalboots: {
        name: "METAL BOOTS",
        passive: "Immune to CC smth smth idk",
        stats: {
            health: ["+500", "hp"],
            movespeed: ["-25", "ms"]
        },
        cost: 499
    },
    sprintboots: {
        name: "SPRINT BOOTS",
        passive: "You gain sprint on ulimate smth smth",
        stats: {
            ms: ["+150", "ms"]
        },
        cost: 399
    },
}


</script>

<style lang="scss" scoped>
.test {
    width: 100%;
    height: 100%;
}

.special-wrapper {
    margin-top: 2%;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-left: 5%;


    .item-container {
        margin-right: 5%;
        width: 25%;
        height: 25%;
    }
}

.wip {
    color: white;
    position: absolute;
    font-size: 5em;
    opacity: 0.3;
    margin-top: 11%;
    margin-left: 6%;
}
</style>