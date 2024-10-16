<script setup lang="ts">
import Debugger from '@/components/Debugger.vue'
import GameScreen from '@/components/GameScreen.vue'
</script>

<template>
  <div class="app">
    <Debugger v-if="false" />
    <GameScreen />
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
}
</style>
