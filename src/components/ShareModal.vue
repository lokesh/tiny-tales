<script setup lang="ts">
import { ref } from 'vue'
import TinyModal from '@/components/TinyModal.vue'
import { SHARE_MODAL } from '@/constants/modals'
import { useGameStore } from '@/stores/gameStore'

const s = useGameStore()
const copied = ref(false)

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <TinyModal :visible="s.modal === SHARE_MODAL">
    <template #title>
      Finished!
    </template>
    <button @click="copyLink">{{ copied ? 'Copied!' : 'Copy link to share' }}</button>
  </TinyModal>
</template>

<style scoped>
.modal {
  /* Add your modal styles here */
}
</style>
