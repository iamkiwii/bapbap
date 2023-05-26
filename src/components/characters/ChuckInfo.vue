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
                        <HealthLogo />
                        <ASLogo />
                        <VampLogo />
                    </div>
                    <div class="items">
                        <HealthLogo />
                        <ASLogo />
                        <DMGLogo />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Champ from '@/assets/champs/Chuck/Chuck.png'
import Basic from '@/assets/champs/Chuck/Chuck_Lmb_Sprite.png'
import Special from '@/assets/champs/Chuck/Chuck_Q_Sprite.png'
import Movement from '@/assets/champs/Chuck/Chuck_Space_Sprite.png'
import Ultimate from '@/assets/champs/Chuck/Chuck_E_Sprite.png'
import HealthLogo from '@/assets/itemlogos/HealthLogo.vue'
import ASLogo from '@/assets/itemlogos/ASLogo.vue'
import VampLogo from '@/assets/itemlogos/VampLogo.vue'
import DMGLogo from '@/assets/itemlogos/DMGLogo.vue'
import CDRLogo from '@/assets/itemlogos/CDRLogo.vue'
import AbilityDMGLogo from '@/assets/itemlogos/AbilityDMGLogo.vue'
import '@/components/characters/Characters.scss'
import { reactive } from 'vue'
import AbilityCDLogo from '@/assets/itemlogos/AbilityCDLogo.vue'

const champ = reactive({
    name: 'Chuck',
    hp: 1300,
    nickname: 'Chuck.'
})

const abilities = reactive({
    basic: {
        name: 'Chuck Punch',
        damage: 175,
        scaling: '',
        info: 'Punch for a 3-hit combo. Hitting an opponent will grant you a Knock stack.'
    },
    special: {
        name: 'Chuck Knock',
        damage: 310,
        scaling: '',
        cooldown: '8s',
        info: 'Throw a powerful punch. Inflict stun if you have full Knock stacks.'
    },
    movement: {
        name: 'Chuck Jump',
        damage: 200,
        scaling: '',
        cooldown: '14s',
        info: 'Jump to a location. Apply knock up on land.'
    },
    ultimate: {
        name: 'CHUCK!!!!',
        damage: null,
        scaling: '(+20%)',
        cooldown: '30s',
        info: 'Become gigantic and get an hp, damage and speed buff.'
    }
})



</script>


<script>
export default {
    components: { AbilityCDLogo }
}

</script>

<style lang="scss" scoped></style>