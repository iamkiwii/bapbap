<template>
    <div class="button-wrapper">
        <button id="button" :class="checkIfActive()">
            <div class="btn-text">{{ getText() }}</div>
        </button>
    </div>
</template>

<script setup>

</script>

<script>

export default {
    props: {
        text: String,
        isActive: Boolean
    },
    methods: {
        getText() {
            return this.text
        },
        checkIfActive() {
            if (this.isActive) {
                return "active"
            }
            else {
                return ""
            }
        }
    }
}

</script>

<style lang="scss" scoped>
.active {
    background-color: yellow;
}

#button {
    height: 60px;
    width: 115px;
    border: 0;
    box-shadow: 3px 3px 0px rgba($color: rgb(192, 192, 192), $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    cursor: pointer;
}

.button-wrapper {
    margin-right: 19.5px;
    width: fit-content;
    transition: 0.2s ease-in-out;
}

.button-wrapper:hover {
    cursor: pointer;
    transform: scale(1.05) translate(0px, -5px);
    transition: 0.1s ease-in-out;
}

.button-wrapper:active {
    transform: scale(1);
    transition: 0.1s ease-in-out;
    box-shadow: 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}
</style>