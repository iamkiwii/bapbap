<template>
    <div class="wrapper">
        <div class="left">
            <div class="names">
                <div class="name">Chuck</div>
                <div class="nickname">Chuck.</div>
            </div>
            <div class="image-wrapper">
                <img :src="Chuck" class="image" draggable="false" />
            </div>
        </div>
        <div class="middle">
            <div class="abilities">
                <div class="ability">
                    <div class="image-wrapper">
                        <img :src="Basic" class="ability-image" draggable="false" />
                    </div>
                    <div class="text-wrapper">
                        <div class="ability-name">Chuck Punch</div>
                        <div class="ability-info">Punch for a 3-hit combo. Hitting an opponent will grant you a Knock stack.
                        </div>
                        <div class="ability-damage">
                            <div class="material-symbols-outlined">
                                swords
                            </div> 130 (.5)
                        </div>
                    </div>
                </div>
                <div class="ability">
                    <div class="image-wrapper">
                        <img :src="Special" class="ability-image" draggable="false" />
                    </div>
                    <div class="text-wrapper">
                        <div class="ability-name">Chuck Knock</div>
                        <div class="ability-info">Throw a powerful punch. Inflict stun if you have full Knock stacks.</div>
                        <div class="ability-damage">
                            <div class="material-symbols-outlined">
                                swords
                            </div> 999 (.38)
                        </div>
                    </div>
                </div>
                <div class="ability">
                    <div class="image-wrapper">
                        <img :src="Movement" class="ability-image" draggable="false" />
                    </div>
                    <div class="text-wrapper">
                        <div class="ability-name">Chuck Jump</div>
                        <div class="ability-info">Jump to a location. Apply knock up on land.</div>
                        <div class="ability-damage">
                            <div class="material-symbols-outlined">
                                swords
                            </div> 999 (.6)
                        </div>
                    </div>
                </div>
                <div class="ability">
                    <div class="image-wrapper">
                        <img :src="Ultimate" class="ability-image" draggable="false" />
                    </div>
                    <div class="text-wrapper">
                        <div class="ability-name">CHUCK!!!!</div>
                        <div class="ability-info">Become gigantic and get an hp, damage and speed buff.</div>
                        <div class="ability-damage">
                            <div class="material-symbols-outlined">
                                swords
                            </div> 999
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="build">
                <div class="text"> BEST BUILDS </div>
                <div class="build">
                    <div class="item">
                        <HealthLogo />
                    </div>
                    <div class="item">
                        <ASLogo />
                    </div>
                    <div class="item">
                        <VampLogo />
                    </div>
                </div>


            </div>

        </div>
    </div>
</template>


<!-- <span class="material-symbols-rounded">
favorite
</span> -->
<!-- <span class="material-symbols-outlined">
hourglass_empty
</span> -->
<!-- <span class="material-symbols-outlined">
swords
</span> -->
<!-- <span class="material-symbols-outlined">
humidity_high
</span> -->
<!-- <span class="material-symbols-outlined">
bolt
</span> -->


<script setup>
import Chuck from '@/assets/champs/Chuck/Chuck.png'
import Basic from '@/assets/champs/Chuck/Chuck_Lmb_Sprite.png'
import Special from '@/assets/champs/Chuck/Chuck_Q_Sprite.png'
import Movement from '@/assets/champs/Chuck/Chuck_Space_Sprite.png'
import Ultimate from '@/assets/champs/Chuck/Chuck_E_Sprite.png'
import HealthLogo from '@/assets/itemlogos/HealthLogo.vue'
import ASLogo from '@/assets/itemlogos/ASLogo.vue'
import VampLogo from '@/assets/itemlogos/VampLogo.vue'
</script>


<script>

export default {
    data() {
        return {};
    },
    components: { ASLogo, VampLogo }
}

</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    width: 100%;
    height: 90%;
    background-color: #091335;
    transform: skew(-5deg);
    margin-top: 3%;
    box-shadow: 8px 8px 0px rgba($color: #fed606, $alpha: 1), 12px 12px 20px rgba($color: #000000, $alpha: 0.3);

    .left {
        width: 33.3%;
        height: 100%;

        .names {
            margin-left: 7%;
            margin-top: 2.5%;

            .name {
                color: white;
                text-shadow: 3px 2px 0px rgba($color: #a5a5a5, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
                font-size: 3rem;
            }

            .nickname {
                font-size: 1.5rem;
                color: white;
                margin-left: 1.5%;
            }
        }

        .image-wrapper {
            .image {
                width: 98%;
            }
        }

    }

    .middle {
        width: 33.3%;

        .abilities {
            margin-top: 5%;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 92.5%;

            .ability {
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 25%;

                .image-wrapper {
                    width: 20%;

                    .ability-image {
                        object-fit: scale-down;
                        width: 100%;
                    }
                }

                .text-wrapper {
                    width: 100%;
                    justify-content: center;

                    .ability-name {
                        color: white;
                        font-size: 2rem;
                        margin-bottom: 4%;
                        text-decoration: underline;
                        text-underline-offset: 30%;
                    }

                    .ability-info {
                        color: white;
                        font-size: 1rem;
                    }

                    .ability-damage {
                        display: flex;
                        align-content: center;

                        margin-top: 3%;
                        color: white;
                        font-size: 1.5rem;

                        .material-symbols-outlined {
                            height: fit-content;
                            text-align: center;
                            font-size: 1.8rem;
                            margin-right: 2%;
                        }


                    }
                }
            }
        }
    }

    .right {
        width: 33.3%;

        .build {
            margin-top: 5%;
            display: flex;
            flex-direction: column;

            .text {
                width: 100%;
                text-align: center;
                color: white;
                font-size: 2rem;
            }

            .build {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;

                .item {
                    text-align: center;
                    width: 20%;
                    font-size: 3rem;
                }

            }
        }

    }
}
</style>