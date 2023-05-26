<template>
    <div class="wrapper">
        <div class="left">
            <div class="names">
                <div class="name">{{ champ.name }}
                    <div class="hp">
                        <HealthLogo class="hp-logo" /> {{ champ.hp }}
                    </div>
                </div>
                <div class="nickname">{{ champ.nickname }}</div>
            </div>
            <div class="image-wrapper">
                <img :src="Champ" class="image" draggable="false" />
            </div>
        </div>
        <div class="seperator"></div>
        <div class="middle">
            <div class="abilities">
                <div class="ability">
                    <div class="image-wrapper">
                        <img :src="Basic" class="ability-image" draggable="false" />
                    </div>
                    <div class="text-wrapper">
                        <div class="ability-name-wrapper">
                            <div class="ability-name">{{ abilities.basic.name }}</div>
                            <div class="ability-damage">
                                <AbilityDMGLogo /> {{ abilities.basic.damage }} <div class="scaling">
                                    {{ abilities.basic.scaling }}</div>
                            </div>
                        </div>
                        <div class="ability-info">{{ abilities.basic.info }}
                        </div>
                    </div>
                </div>
                <div class="ability">
                    <div class="image-wrapper">
                        <img :src="Special" class="ability-image" draggable="false" />
                    </div>
                    <div class="text-wrapper">
                        <div class="ability-name-wrapper">
                            <div class="ability-name">{{ abilities.special.name }}</div>
                            <div class="ability-damage">
                                <AbilityDMGLogo /> {{ abilities.special.damage }} <div class="scaling">
                                    {{ abilities.special.scaling }}</div>
                                <div class="cooldown">
                                    <AbilityCDLogo /> {{ abilities.special.cooldown }}
                                </div>
                            </div>
                        </div>
                        <div class="ability-info">{{ abilities.special.info }}</div>
                    </div>
                </div>
                <div class="ability">
                    <div class="image-wrapper">
                        <img :src="Movement" class="ability-image" draggable="false" />
                    </div>
                    <div class="text-wrapper">
                        <div class="ability-name-wrapper">
                            <div class="ability-name">{{ abilities.movement.name }}</div>
                            <div class="ability-damage">
                                <AbilityDMGLogo /> {{ abilities.movement.damage }} <div class="scaling">
                                    {{ abilities.movement.scaling }}</div>
                                <div class="cooldown">
                                    <AbilityCDLogo /> {{ abilities.movement.cooldown }}
                                </div>
                            </div>
                        </div>
                        <div class="ability-info">{{ abilities.movement.info }}</div>
                    </div>
                </div>
                <div class="ability">
                    <div class="image-wrapper">
                        <img :src="Ultimate" class="ability-image" draggable="false" />
                    </div>
                    <div class="text-wrapper">
                        <div class="ability-name-wrapper">
                            <div class="ability-name">{{ abilities.ultimate.name }}</div>
                            <div class="ability-damage">
                                <AbilityDMGLogo /> {{ abilities.ultimate.damage }} <div class="scaling">
                                    {{ abilities.ultimate.scaling }}</div>
                                <div class="cooldown">
                                    <AbilityCDLogo /> {{ abilities.ultimate.cooldown }}
                                </div>
                            </div>
                        </div>
                        <div class="ability-info">{{ abilities.ultimate.info }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="builds">
                <div class="text"> BEST BUILDS </div>
                <div class="build">
                    <div class="items">
                        <ASLogo />
                        <VampLogo />
                        <VampLogo />
                    </div>
                    <div class="items">
                        <ASLogo />
                        <ASLogo />
                        <HealthLogo />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Champ from '@/assets/champs/Sashimi/Sashimi.png'
import Basic from '@/assets/champs/Sashimi/Sashimi_Lmb_Sprite.png'
import Special from '@/assets/champs/Sashimi/Sashimi_Q_Sprite.png'
import Movement from '@/assets/champs/Sashimi/Sashimi_Space_Sprite.png'
import Ultimate from '@/assets/champs/Sashimi/Sashimi_E_Sprite.png'
import HealthLogo from '@/assets/itemlogos/HealthLogo.vue'
import ASLogo from '@/assets/itemlogos/ASLogo.vue'
import VampLogo from '@/assets/itemlogos/VampLogo.vue'
import DMGLogo from '@/assets/itemlogos/DMGLogo.vue'
import CDRLogo from '@/assets/itemlogos/CDRLogo.vue'
import AbilityDMGLogo from '@/assets/itemlogos/AbilityDMGLogo.vue'
import { reactive } from 'vue'
import '@/components/characters/Characters.scss'
import AbilityCDLogo from '@/assets/itemlogos/AbilityCDLogo.vue'

const champ = reactive({
    name: 'Sashimi',
    hp: 1350,
    nickname: 'Upgraded Fishtank'
})

const abilities = reactive({
    basic: {
        name: 'Chop Chop',
        damage: 160,
        scaling: '(190)',
        info: 'Punch for a 3-hit combo.'
    },
    special: {
        name: 'Ginger Aftertaste',
        damage: 220,
        scaling: '',
        cooldown: '8s',
        info: 'Clap enemies in front of you. Apply stun and weaken on hit.'
    },
    movement: {
        name: 'Sushi Roll',
        damage: 300,
        scaling: '',
        cooldown: '14s',
        info: 'Charge a dash, deal damage and slow targets along the way.'
    },
    ultimate: {
        name: 'Tempura Shock',
        damage: 515,
        scaling: '',
        cooldown: '24s',
        info: 'Jump and slam into an area. On hit, knock up enemies and shield yourself and allies.'
    }
})



</script>


<script>
export default {

}

</script>

<style lang="scss" scoped>
#fuck-you {
    font-size: 1.8rem;
}

#fuck-you2 {

    width: 130%;

}
</style>