<template>
  <TinyModal
    :visible="s.modal === TIMES_UP_MODAL"  
  >
    <template #title>
      Tiny Tales
    </template>
    <p>A game by Lokesh Dhakar</p>
    <button @click="$emit('start')">Start</button>
  </TinyModal>
</template>

<style scoped>
.modal {
  /* Add your modal styles here */
}
</style>


<script setup lang="ts">
import TinyModal from './TinyModal.vue';
import { useGameStore } from '@/stores/gameStore'

const s = useGameStore();

defineEmits(['start'])
</script>

