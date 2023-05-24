<template>
    <div class="material-symbols-outlined">
        swords
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup() {
        const state = reactive({
            count: 0,
        })

        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>
.material-symbols-outlined {
    font-size: inherit;
    color: #b2090d;
    text-shadow: 2px 2px 0px rgba($color: #7a0608, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

//background-color: #b2090d;
// box-shadow: 2px 2px 0px rgba($color: #7a0608, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
</style>