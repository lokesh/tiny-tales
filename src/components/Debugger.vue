<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from '@/stores/gameStore'

const gameStore = useGameStore()
const { 
  currentBook,
  currentSummary,
  guessedCorrectly,
  currentHintIndex
} = storeToRefs(gameStore)
</script>

<template>
  <div class="debugger">
    <pre>
currentBook: {{ currentBook }}
currentSummary: {{ currentSummary }}
guessedCorrectly: {{ guessedCorrectly }}
currentHintIndex: {{ currentHintIndex }}
modal: {{ gameStore.modal }}
    </pre>
  </div>
</template>

<style scoped>
.debugger {
  font-family: monospace;
  font-size: 0.8rem;
  text-align: left;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
}

pre {
  margin: 0;
  white-space: pre-wrap;
}
</style>
