<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
import GameData from '@/assets/GameData.js';
</script>

<template>
  <NavBar />
  <RouterView />
</template>


<script>
export default {
  components: {
    NavBar,
    RouterView
  },
  data: () => ({
    GameData: GameData
  })
}

</script>

<style lang="scss" scoped></style>
