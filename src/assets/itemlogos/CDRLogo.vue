<template>
    <span class="material-symbols-rounded">
        hourglass_empty
    </span>
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
.material-symbols-rounded {
    font-size: inherit;
    color: #2dabb7;
    text-shadow: 2px 2px 0px rgba($color: #1d7077, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}


//background-color: #2dabb7;
// box-shadow: 2px 2px 0px rgba($color: #1d7077, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
</style>