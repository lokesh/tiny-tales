<template>
  <div class="top-bar">
    <div>
      <button class="button" @click="handleInfoClick">Info</button>
    </div>
    <div class="round-count">{{ currentRound }} / {{ totalRounds }}</div>
    <div>
      <button v-show="false" class="button" @click="handleStatsClick">Stats</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '@/stores/gameStore'

const gameStore = useGameStore()

const currentRound = computed(() => gameStore.currentRound)
const totalRounds = computed(() => gameStore.totalRounds)

const handleInfoClick = () => {
  // TODO: Implement info modal logic
  console.log('Info button clicked')
}

const handleStatsClick = () => {
  // TODO: Implement stats modal logic
  console.log('Stats button clicked')
}
</script>

<style scoped>
.top-bar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* justify-content: space-between;
  align-items: center; */
  /* padding: 0.5rem 1rem; */
  /* background-color: #f0f0f0;
  border-bottom: 1px solid #ccc; */
}

/* .info-button,
.stats-button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
} */

.round-count {
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 1.2rem; */
  /* font-weight: bold; */
}
</style>
