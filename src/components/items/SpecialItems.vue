<template>
    <div>

    </div>
</template>

<script setup>


const items = {
    snowcap: {
        name: "SNOW CAP",
        passive: "Upon damaginge a target, freeze it.",
        stats: {
            health: 250,
            damage: 40
        }
    },
    shieldbag: {
        name: "SHIELD BAG",
        passive: "Blocks incoming atttacks. Once used, recharges after 6s.",
        stats: {
            damage: 60,
            health: 250
        }
    },
    explosioncap: {
        name: "EXPLOSION CAP",
        passive: "When you kill a target, spawn an explosion.",
        stats: {
            damage: 80
        }
    },
    spikybag: {
        name: "SPIKY BAG",
        passive: "Reflect 20% of the damage to the attacker.",
        stats: {
            health: 900
        }
    },
    rezboots: {
        name: "REZ BOOTS",
        passive: "On death, revive after 3s with 50% hp. One time use.",
        stats: {
            damage: 60,
            cdr: 40
        }
    },
    resetboots: {
        name: "RESET BOOTS",
        passive: "",
        stats: {
        }
    },
    metalboots: {
        name: "METAL BOOTS",
        passive: "",
        stats: {
        }
    },
    slimehat: {
        name: "SLIME HAT",
        passive: "",
        stats: {
        }
    },
    sprintboots: {
        name: "SPRINT BOOTS",
        passive: "",
        stats: {
        }
    },
}


</script>

<style lang="scss" scoped></style>