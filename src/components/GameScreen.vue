<template>
  <div class="game-screen">
    
    <div class="top">
      <TopBar />
      <Summary class="summary":content="gameStore.currentSummary" />
    </div>
    
    <div class="footer">
      <input
        class="input guess-input"
        v-model="userInput"
        placeholder="What book is it?"
        @keyup.enter="handleGuess"
      >
      <button @click="handleGuess">{{ buttonText }}</button>
    </div>

    <TitleModal @start="gameStore.closeModal" />

    <NextModal
      :correct-title="gameStore.currentBook?.title ?? ''"
      @next="handleNext"
    />
    <ShareModal />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useGameStore } from '@/stores/gameStore'
import TitleModal from './TitleModal.vue'
import Summary from './Summary.vue'
import NextModal from './NextModal.vue'
import ShareModal from './ShareModal.vue'
import TopBar from './TopBar.vue'

const gameStore = useGameStore()
const userInput = ref('')

const buttonText = computed(() => userInput.value ? 'Guess' : 'Get a hint')

const handleGuess = () => {
  if (userInput.value) {
    gameStore.checkGuess(userInput.value)
    userInput.value = ''
  } else {
    gameStore.getHint()
  }
}

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

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

/* .guess-input {
  width: 100%;
  font-size: 2rem;
  padding: 0.25em;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
} */
</style>
