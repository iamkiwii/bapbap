<template>
  <div>
    <SearchBox />
    <div class="profile-name"></div>
    <div class="all-stats-wrapper">
      <GamemodeStats class="stats-display" gamemode="TRIOS" />
      <GamemodeStats class="stats-display" gamemode="RANKED TRIOS" />
    </div>
  </div>
</template>

<script setup>
import GamemodeStats from '@/components/GamemodeStats.vue';
import SearchBox from '@/components/SearchBox.vue';
</script>

<style lang="scss" scoped>
.all-stats-wrapper {
  display: flex;
  flex-direction: row;
}
</style>
