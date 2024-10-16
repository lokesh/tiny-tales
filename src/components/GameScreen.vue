
<template>
  <div class="game-screen">
    <h1>{{ gameStore.currentSummary }}</h1>
    <input
      v-model="userInput"
      placeholder="What is the title?"
      @keyup.enter="handleGuess"
    >
    <button @click="handleGuess">{{ buttonText }}</button>
    
    <TitleModal @start="gameStore.closeModal" />

    <SuccessModal
      v-if="gameStore.showSuccessModal"
      :correct-title="gameStore.currentBook.title"
      @next="handleNext"
    />
    <ShareModal v-if="gameStore.showShareModal" />
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useGameStore } from '@/stores/gameStore'
import TitleModal from './TitleModal.vue'
import { TITLE_MODAL, SHARE_MODAL, NEXT_MODAL } from '@/constants/modals'
import SuccessModal from './SuccessModal.vue'
import ShareModal from './ShareModal.vue'

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
