<template>
    <div class="material-symbols-rounded"> accessible_forward </div>
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
    text-decoration: underline;
    color: #e3a020;
    text-shadow: 2px 2px 0px rgba($color: #a06f15, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}


// background-color: #e3a020;
// box-shadow: 2px 2px 0px rgba($color: #a06f15, $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
</style>