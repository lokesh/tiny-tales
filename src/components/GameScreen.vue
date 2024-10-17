<template>
  <div class="game-screen">
    <div class="top">
      <TopBar />
      <Summary class="summary" :content="gameStore.currentSummary" />
    </div>
    
    <BottomBar />

    <TitleModal @start="gameStore.closeModal" />

    <NextModal
      :correct-title="gameStore.currentBook?.title ?? ''"
      @next="handleNext"
    />
    <ShareModal />
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/gameStore'
import TitleModal from './TitleModal.vue'
import Summary from './Summary.vue'
import NextModal from './NextModal.vue'
import ShareModal from './ShareModal.vue'
import TopBar from './TopBar.vue'
import BottomBar from './BottomBar.vue'

const gameStore = useGameStore()

const handleNext = () => {
  gameStore.nextBook()
}
</script>

<style scoped>
.game-screen {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0.5rem
}

.summary {
  margin-top: 2rem;
}
</style>
