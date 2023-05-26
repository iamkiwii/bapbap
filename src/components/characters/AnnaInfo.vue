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
                        <DMGLogo />
                        <DMGLogo />
                        <VampLogo />
                    </div>
                    <div class="items">
                        <DMGLogo />
                        <DMGLogo />
                        <DMGLogo />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Champ from '@/assets/champs/Anna/Anna.png'
import Basic from '@/assets/champs/Anna/Anna_Lmb_Sprite.png'
import Special from '@/assets/champs/Anna/Anna_Q_Sprite.png'
import Movement from '@/assets/champs/Anna/Anna_Space_Sprite.png'
import Ultimate from '@/assets/champs/Anna/Anna_E_Sprite.png'
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
    name: 'Anna',
    hp: 800,
    nickname: 'Speed Graffittier'
})

const abilities = reactive({
    basic: {
        name: 'Run N\' Gun',
        damage: 55,
        scaling: '/bullet',
        info: 'Fire 4 small bullets.' // 55 85 100
    },
    special: {
        name: 'Eat Lead',
        damage: 85,
        scaling: '',
        cooldown: '8s',
        info: 'Fire 3 big bullets at once. Reset CYA! on hit.'
    },
    movement: {
        name: 'CYA!',
        damage: "N/A",
        scaling: '',
        cooldown: '6s',
        info: 'Perform a quick dash.'
    },
    ultimate: {
        name: 'Bullet Hell',
        damage: 100,
        scaling: '',
        cooldown: '25s',
        info: 'Spin and shoot everything around you. Apply slow on hit.'
    }
})



</script>


<script>
export default {

}

</script>

<style lang="scss" scoped></style>