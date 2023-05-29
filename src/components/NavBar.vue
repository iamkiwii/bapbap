<template>
    <div class="navbar-wrapper">
        <RouterLink to="/" class="link">HOME</RouterLink>
        <RouterLink to="/characters" class="link">CHARACTERS</RouterLink>
        <RouterLink to="/items" class="link">ITEMS</RouterLink>
        <RouterLink to="/ranks" class="link">RANKS</RouterLink>
        <!-- <RouterLink to="/stats" class="link">LEADERBOARDS</RouterLink> -->
        <div class="profile-area">
            <ProfileArea />
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import ProfileArea from '@/components/ProfileArea.vue';
</script>

<style lang="scss" scoped>
.profile-area {
    align-items: flex-end;
    align-content: flex-end;
    justify-content: right;
}

.link {
    position: relative;
    color: white;
    opacity: 50%;
    text-decoration: none;
    text-transform: uppercase;
    user-select: none;
    margin-right: 100px;
}

.link:hover {
    opacity: 65%;
    transition: 0.2s ease-in-out;
}

.link:active {
    color: rgb(254, 214, 6);
    transform: translateY(5px);
}

.link::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0) skew(-10deg);
    height: 5px;
    bottom: -5px;
    left: 0;
    background-color: white;
    transform-origin: bottom middle;
    transition: transform 0.2s ease-in-out;
    user-select: none;
}

.router-link-active::after {
    background-color: rgb(254, 214, 6);
    transform: scaleX(1) skew(-10deg);
    transform-origin: bottom middle;
    user-select: none;
}

.router-link-active,
.router-link-active:hover {
    opacity: 100%;
    color: rgb(254, 214, 6);
    cursor: default;
    text-shadow: 0px 4px 10px rgba($color: rgb(0, 0, 0), $alpha: 0.8);
    box-shadow: 8px 10px 8px rgba($color: rgb(0, 0, 0), $alpha: 0.3);
}

.navbar-wrapper {
    display: flex;
    text-decoration: none;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    color: #ffffff;
    height: 50px;

    .profile-area {
        margin-left: auto;
    }
}
</style>