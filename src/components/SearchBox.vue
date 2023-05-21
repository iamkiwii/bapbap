<template>
    <div>
        <div class="search-box-wrapper">
            <!-- Make a white box that can input a search term -->
            <div class="search-text">SEARCH</div>
            <div class="search-box">
                <input type="text" placeholder="User#0000" class="search-input" />
                <div class="focus-border"></div>
            </div>
            <div class="search-btn">GO</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.search-btn {
    position: relative;
    top: -38px;
    left: 80%;
    width: 20%;
    height: 60px;
    color: black;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

.search-btn:hover {
    opacity: 40%;
    transition: 0.1s ease-in-out;
}

.search-btn:active {
    transform: scale(115%, 115%) rotate(5deg);
}



// White box wrapper styles
.search-box-wrapper {
    transform: skew(-5deg);
    margin-top: 40px;
    user-select: none;
    background-color: white;
    height: 60px;
    color: black;
    width: 30%;
    box-shadow: 3px 3px 0px rgba($color: rgb(192, 192, 192), $alpha: 1), 5px 5px 8px rgba($color: #000000, $alpha: 0.3);
}

// "SEARCH" text styles
.search-text {
    font-style: italic;
    position: relative;
    font-size: 10px;
    top: 10px;
    margin-left: 20px;
}

// Reset styles for input box
input,
textarea,
select,
button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    border: 0;
    outline: 0;
}

// Input box styles
.search-box {
    margin-left: 18px;
    width: 300px;
    height: 25px;
}

// Actual input styles
.search-input {
    opacity: 60%;
    position: relative;
    top: 10px;
    border: 0;
    width: 300px;
    height: 25px;
    font-size: 20px;
    color: black;
    background-color: white;
    transition: 0.2s ease-out;
}

// Input box styles when focused
.search-input~.focus-border {
    position: relative;
    top: 10px;
    width: 0;
    height: 2px;
    background-color: black;
    transition: 0.2s ease-in-out;
}

.search-input:focus~.focus-border {
    width: 100%;
    transition: 0.2s ease-in-out;
    left: 0;
}
</style>