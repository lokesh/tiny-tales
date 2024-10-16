<script setup lang="ts">
import Debugger from '@/components/Debugger.vue'
import GameScreen from '@/components/GameScreen.vue'
</script>

<template>
  <div id="app">
    <Debugger />
    <GameScreen />
  </div>
</template>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
