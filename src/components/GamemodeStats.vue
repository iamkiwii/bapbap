<template>
    <div class="stats-wrapper">
        <div class="gamemode-text">{{ gamemode }}</div>
        <div class="stats-display-wrapper">
            <div class="stat-display">0</div>
            <div class="stat-display">1</div>
            <div class="stat-display">0.01</div>
        </div>
        <div class="labels-wrapper">
            <div class="stat-label">WINS</div>
            <div class="stat-label">KILLS</div>
            <div class="stat-label">KDA</div>
        </div>
        <div class="white-banner"></div>
    </div>
</template>

<script>
export default {
    props: {
        gamemode: String
    }
}
</script>

<style lang="scss" scoped>
.stats-display-wrapper {
    border-top: 3px solid rgb(250, 151, 34);
    top: 5%;
    font-size: 40px;
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-evenly;
}

.stat-display {
    color: white;
    text-shadow: 2px 2px 3px rgba($color: rgb(0, 0, 0), $alpha: 0.3);
}

.white-banner {
    background-color: white;
    box-shadow: 3px 3px 0px rgba($color: rgb(192, 192, 192), $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
    position: relative;
    transform: skew(10deg);
    margin-left: 7.5%;
    width: 85%;
    height: 20%;
    top: -12%;
    left: 0;
    z-index: 1;
}

.stats-wrapper {
    user-select: none;
    transform: skew(-5deg);
    background-color: rgb(254, 214, 6);
    box-shadow: 3px 3px 0px rgba($color: rgb(250, 151, 34), $alpha: 1), 8px 8px 15px rgba($color: #000000, $alpha: 0.3);
    margin-top: 50px;
    width: 30%;
    height: 150px;
    margin-right: 3%;
}

.gamemode-text {
    transform: skew(5deg);
    height: fit-content;
    user-select: none;
    text-shadow: 2px 2px 3px rgba($color: rgb(0, 0, 0), $alpha: 0.3);
    font-style: italic;
    font-size: 30px;
    margin-left: 15px;
    width: fit-content;
    position: relative;
    top: 3%;
}

.labels-wrapper {
    transform: skew(5deg);
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: left;
    position: relative;
    top: 10%;
    height: 20%;
}

.stat-label {
    margin-left: 11%;
    margin-right: 11%;
    position: relative;
    color: rgb(9, 34, 56);
    text-shadow: 2px 2px 3px rgba($color: rgb(0, 0, 0), $alpha: 0.3);
    font-size: 15px;
}
</style>