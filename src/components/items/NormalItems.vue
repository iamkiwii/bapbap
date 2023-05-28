<template>
    <div class="normalitems-wrapper">
        <div class="items-wrapper">
            <div class="types-wrapper">
                <div class="logo-wrapper">
                    <ASLogo class="logos" />
                </div>
                <div class="right-wrapper">
                    <div class="title-wrapper">
                        <div class="type-name" id="snap">SNAP</div>
                        <div class="type-desc">(ATTACK SPEED %)</div>
                    </div>
                    <div class="info-wrapper">
                        <div class="stats" v-for="color in items.snap" :key="color">
                            <div :class="color.color">{{ color.stat }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="types-wrapper">
                <div class="logo-wrapper">
                    <CDRLogo class="logos" />
                </div>
                <div class="right-wrapper">
                    <div class="title-wrapper">
                        <div class="type-name" id="chrono">CHRONO</div>
                        <div class="type-desc">(COOLDOWN REDUCTION)</div>
                    </div>
                    <div class="info-wrapper">
                        <div class="stats" v-for="color in items.chrono" :key="color">
                            <div :class="color.color">{{ color.stat }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="types-wrapper">
                <div class="logo-wrapper">
                    <DMGLogo class="logos" />
                </div>
                <div class="right-wrapper">
                    <div class="title-wrapper">
                        <div class="type-name" id="sharp">SHARP</div>
                        <div class="type-desc">(DAMAGE)</div>
                    </div>
                    <div class="info-wrapper">
                        <div class="stats" v-for="color in items.sharp" :key="color">
                            <div :class="color.color">{{ color.stat }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="types-wrapper">
                <div class="logo-wrapper">
                    <HealthLogo class="logos" />
                </div>
                <div class="right-wrapper">
                    <div class="title-wrapper">
                        <div class="type-name" id="bulky">BULKY</div>
                        <div class="type-desc">(HEALTH)</div>
                    </div>
                    <div class="info-wrapper">
                        <div class="stats" v-for="color in items.bulky" :key="color">
                            <div :class="color.color">{{ color.stat }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="VampWrapper" class="types-wrapper">
                <div class="logo-wrapper">
                    <VampLogo class="logos" />
                </div>
                <div class="right-wrapper">
                    <div class="title-wrapper">
                        <div class="type-name" id="vamp">VAMP</div>
                        <div class="type-desc">(LIFESTEAL %)</div>
                    </div>
                    <div class="info-wrapper">
                        <div class="stats" v-for="color in items.vamp" :key="color">
                            <div :class="color.color">{{ color.stat }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="passives-wrapper">
            <div class="passive-title">PASSIVES</div>
            <div class="passive-type-wrapper">
                <div class="type-wrapper">
                    <div class="type-title">HATS</div>
                    <div class="type-desc">(CDR)</div>
                    <div class="info-wrapper">
                        <div class="stats" v-for="color in items.hat" :key="color">
                            <div :class="color.color">{{ color.stat }}</div>
                        </div>
                    </div>
                </div>
                <div class="seperator" id="left-sep"></div>
                <div class="type-wrapper" id="backpack">
                    <div class="type-title">BACKPACKS</div>
                    <div class="type-desc">(BASE HP)</div>
                    <div class="info-wrapper">
                        <div class="stats" v-for="color in items.backpack" :key="color">
                            <div :class="color.color">{{ color.stat }}</div>
                        </div>
                    </div>
                </div>
                <div class="seperator" id="right-sep"></div>
                <div class="type-wrapper">
                    <div class="type-title">BOOTS</div>
                    <div class="type-desc">(MOVE SPEED)</div>
                    <div class="info-wrapper">
                        <div class="stats" v-for="color in items.boots" :key="color">
                            <div :class="color.color">{{ color.stat }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ASLogo from '@/assets/itemlogos/ASLogo.vue'
import CDRLogo from '@/assets/itemlogos/CDRLogo.vue'
import DMGLogo from '@/assets/itemlogos/DMGLogo.vue'
import HealthLogo from '@/assets/itemlogos/HealthLogo.vue'
import VampLogo from '@/assets/itemlogos/VampLogo.vue'


const items = {
    snap: {
        white: { color: "white", stat: "+10%" },
        green: { color: "green", stat: "+20%" },
        blue: { color: "blue", stat: "+30%" },
        purple: { color: "purple", stat: "+40%" },
        yellow: { color: "yellow", stat: "+50%" }
    },
    chrono: {
        white: { color: "white", stat: "+20" },
        green: { color: "green", stat: "+40" },
        blue: { color: "blue", stat: "+60" },
        purple: { color: "purple", stat: "+80" },
        yellow: { color: "yellow", stat: "+100" }
    },
    sharp: {
        white: { color: "white", stat: "+25" },
        green: { color: "green", stat: "+50" },
        blue: { color: "blue", stat: "+75" },
        purple: { color: "purple", stat: "+100" },
        yellow: { color: "yellow", stat: "+125" }
    },
    bulky: {
        white: { color: "white", stat: "+100" },
        green: { color: "green", stat: "+200" },
        blue: { color: "blue", stat: "+300" },
        purple: { color: "purple", stat: "+400" },
        yellow: { color: "yellow", stat: "+500" }
    },
    vamp: {
        white: { color: "white", stat: "+20%" },
        green: { color: "green", stat: "+25%" },
        blue: { color: "blue", stat: "+30%" },
        purple: { color: "purple", stat: "+35%" },
        yellow: { color: "yellow", stat: "+40%" }
    },
    hat: {
        white: { color: "white", stat: "+15" },
        green: { color: "green", stat: "+30" },
        blue: { color: "blue", stat: "+45" },
        purple: { color: "purple", stat: "+60" },
        yellow: { color: "yellow", stat: "+75" }
    },
    backpack: {
        white: { color: "white", stat: "+10%" },
        green: { color: "green", stat: "+20%" },
        blue: { color: "blue", stat: "+30%" },
        purple: { color: "purple", stat: "+40%" },
        yellow: { color: "yellow", stat: "+50%" }
    },
    boots: {
        white: { color: "white", stat: "+15%" },
        green: { color: "green", stat: "+30%" },
        blue: { color: "blue", stat: "+45%" },
        purple: { color: "purple", stat: "+60%" },
        yellow: { color: "yellow", stat: "+75%" }
    }
}

</script>

<style lang="scss" scoped>
#right-sep {
    border-right: 4px solid white;
}

#left-sep {
    border-left: 4px solid white;
}

.seperator {
    margin-top: 5%;
    width: 5%;
    height: 52%;
}

.normalitems-wrapper {
    display: flex;
}

.items-wrapper {
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    margin-top: 1%;

    .types-wrapper {
        margin-top: 2%;
        border-bottom: 4px solid white;
        margin-left: 3.5%;
        align-items: center;
        width: 100%;
        height: 17%;
        display: flex;

        .logos {
            margin-bottom: 45%;
            font-size: 80px;
            width: fit-content;
            height: fit-content;
            justify-self: center;
        }

        .right-wrapper {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;

            .title-wrapper {
                display: flex;
                top: 0;
                margin-bottom: auto;
                width: fit-content;
                margin-left: 3%;
                width: 100%;
                position: relative;

                .type-name {
                    color: white;
                    font-size: 30px;
                }

                .type-desc {
                    color: white;
                    margin-left: 2%;
                    height: fit-content;
                    font-size: 10px;
                    margin-top: auto;
                    margin-bottom: 3%;
                }
            }

            .info-wrapper {
                display: flex;
                margin-left: 1%;
                margin-top: 1.5%;
                margin-bottom: 40%;
                font-size: 30px;
                flex-direction: row;
                height: fit-content;
                width: 100%;

                .stats {
                    margin-left: 2%;
                    text-align: center;
                    width: 30%;
                    background-color: #092238;
                }

            }
        }
    }
}

.passives-wrapper {
    margin-top: 8%;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .passive-title {
        margin-left: 12.5%;
        top: 0;
        margin-bottom: auto;
        font-size: 50px;
        color: white;
        width: fit-content;
        height: fit-content;
        align-self: center;
    }

    .passive-type-wrapper {
        display: flex;
        height: 100%;
        flex-direction: row;
        justify-content: space-evenly;
        margin-left: 10%;

        .type-wrapper {
            margin-top: 5%;
            width: 30%;
            height: 100%;
            display: flex;
            flex-direction: column;

            .type-title {
                align-self: center;
                color: white;
                font-size: 25px;
                width: fit-content;
                height: fit-content;
            }

            .type-desc {
                color: white;
                font-size: 12px;
                width: 100%;
                height: fit-content;
                text-align: center;
            }

            .title-wrapper {
                display: flex;
                top: 0;
                margin-bottom: auto;
                width: fit-content;
                margin-left: 3%;
                width: 100%;
                position: relative;

                .type-name {
                    color: white;
                    font-size: 30px;
                }

                .type-desc {
                    color: white;
                    margin-left: 2%;
                    height: fit-content;
                    font-size: 10px;
                    margin-top: auto;
                    margin-bottom: 3%;
                }
            }

            .info-wrapper {
                margin-top: 1%;
                display: flex;
                font-size: 30px;
                flex-direction: column;
                height: 50%;
                width: 100%;

                .stats {
                    margin-right: auto;
                    margin-left: auto;
                    text-align: center;
                    margin-top: 10%;
                    width: 65%;
                    background-color: #092238;
                }
            }
        }
    }
}

.white {
    color: white;
    box-shadow: 3px 3px 0px rgba($color: rgb(192, 192, 192), $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

.green {
    color: #53ff67;
    box-shadow: 3px 3px 0px rgba($color: #34a341, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

.blue {
    color: #2ddeff;
    box-shadow: 3px 3px 0px rgba($color: #1d91a5, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

.purple {
    color: #be5af1;
    box-shadow: 3px 3px 0px rgba($color: #7b3999, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

.yellow {
    color: #ffe24c;
    box-shadow: 3px 3px 0px rgba($color: #bba432, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

#vamp {
    color: #6121aa;
    text-shadow: 2px 2px 0px rgba($color: #3c1569, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

#snap {
    color: #e3a020;
    text-shadow: 2px 2px 0px rgba($color: #a06f15, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

#chrono {
    color: #2dabb7;
    text-shadow: 2px 2px 0px rgba($color: #1d7077, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

#sharp {
    color: #b2090d;
    text-shadow: 2px 2px 0px rgba($color: #7a0608, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

#bulky {
    color: #589418;
    text-shadow: 2px 2px 0px rgba($color: #375e0e, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

#VampWrapper {
    border-bottom: 0px !important;
}
</style>