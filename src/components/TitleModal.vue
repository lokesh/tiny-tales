<template>
  <TinyModal
    :visible="s.modal === TITLE_MODAL"
  >
    <template #title>
      Tiny Tales
    </template>
    <p>A game by Lokesh Dhakar</p>
    <button class="button" @click="$emit('start')">Start</button>
  </TinyModal>
</template>

<style scoped>
.modal {
  /* Add your modal styles here */
}
</style>


<script setup lang="ts">
import TinyModal from '@/components/TinyModal.vue';
import { TITLE_MODAL } from '@/constants/modals'
import { useGameStore } from '@/stores/gameStore'

const s = useGameStore();

defineEmits(['start'])
</script>

