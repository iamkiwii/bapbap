<template>
    <div>
        <button class="login-button">
            <div class="login-text">LOG IN</div>
        </button>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.login-button {
    position: relative;
    color: rgb(9, 34, 56);
    background-color: rgb(254, 214, 6);
    box-shadow: 3px 3px 0px rgba($color: rgb(250, 151, 34), $alpha: 1), 6px 6px 15px rgba($color: #000000, $alpha: 0.5);
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
    width: 80px;
    height: 30px;
    border: 0;
    transition: 0.1s ease-out;
}

.login-text {
    position: relative;
    text-shadow: 2px 2px 5px rgba($color: rgb(0, 0, 0), $alpha: 0.3);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    user-select: none;
    transition: 0.1s ease-in-out;
}

.login-button:hover {
    box-shadow: 3px 3px 0px rgba($color: rgb(250, 151, 34), $alpha: 1), 5px 5px 15px rgba($color: #000000, $alpha: 0.45);
    transform: scale(1.05) translate(-3px, -2px);
    transition: 0.1s ease-out;
}

.login-button:active {
    box-shadow: 3px 3px 0px rgba($color: rgb(250, 151, 34), $alpha: 1), 4px 4px 12px rgba($color: #000000, $alpha: 0.7);
    transform: translate(0, 0);
    transition: 0.1s ease-in-out;
}

.login-text:hover {
    // color: rgba($color: rgb(9, 34, 56), $alpha: 0.5);
    // transition: 0.1s ease-in-out;
}
</style>