<template>
  <div class="bottom-bar">
    <input
      class="input guess-input"
      v-model="userInput"
      placeholder="What book is it?"
      @keyup.enter="handleGuess"
    >
    <div class="button-container">
      <button class="button" @click="handleGuess">{{ guessButtonText }}</button>
      <button class="button" @click="handleHint">Get a hint</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useGameStore } from '@/stores/gameStore'

const gameStore = useGameStore()
const userInput = ref('')

const guessButtonText = computed(() => userInput.value ? 'Guess' : 'Skip')

const handleGuess = () => {
  if (userInput.value) {
    gameStore.checkGuess(userInput.value)
    userInput.value = ''
  } else {
    gameStore.skipGuess()
  }
}

const handleHint = () => {
  gameStore.getHint()
}
</script>

<style scoped>
.bottom-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.guess-input {
  width: 100%;
  padding: 0.25em 0;
  font-size: 1.25rem;
  background: transparent;
  border-bottom: 1px solid var(--color-text);
  border-radius: 0;
}

.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.button {
  padding: 0.5em 1em;
  font-size: 1rem;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: var(--color-background-mute);
}
</style>
