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
                        <DMGLogo />
                        <CDRLogo />
                        <DMGLogo />
                    </div>
                    <div class="items">
                        <DMGLogo />
                        <CDRLogo />
                        <CDRLogo />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Champ from '@/assets/champs/Kiddo/Kiddo.png'
import Basic from '@/assets/champs/Kiddo/Kiddo_Lmb_Sprite.png'
import Special from '@/assets/champs/Kiddo/Kiddo_Q_Sprite.png'
import Movement from '@/assets/champs/Kiddo/Kiddo_Space_Sprite.png'
import Ultimate from '@/assets/champs/Kiddo/Kiddo_E_Sprite.png'
import HealthLogo from '@/assets/itemlogos/HealthLogo.vue'
import ASLogo from '@/assets/itemlogos/ASLogo.vue'
import VampLogo from '@/assets/itemlogos/VampLogo.vue'
import DMGLogo from '@/assets/itemlogos/DMGLogo.vue'
import CDRLogo from '@/assets/itemlogos/CDRLogo.vue'
import AbilityDMGLogo from '@/assets/itemlogos/AbilityDMGLogo.vue'
import { reactive } from 'vue'
import Characters from '@/components/characters/Characters.scss'

const champ = reactive({
    name: 'Kiddo',
    hp: 800,
    nickname: 'Pyro Prodigy'
})

const abilities = reactive({
    basic: {
        name: 'Light it up',
        damage: 999,
        scaling: '(0.6)',
        info: 'Light up an area.'
    },
    special: {
        name: 'It\'s Lit',
        damage: 999,
        scaling: '(0.6)',
        info: 'Turn an area into an expanding fire. Apply burn and slow on hit.'
    },
    movement: {
        name: 'Flame on',
        damage: "N/A",
        scaling: '(N/A)',
        info: 'Activate a fire shield.'
    },
    ultimate: {
        name: 'Blaze it',
        damage: 999,
        scaling: '(0.6)',
        info: 'Send a huge meteorite crashing into the ground.'
    }
})



</script>


<script>
export default {

}

</script>

<style lang="scss" scoped></style>