<template>
  <TinyModal
    :visible="s.modal === TITLE_MODAL"
  >
    <template #title>
      Tiny Tales
    </template>
    <div class="subtitle">A small game by Lokesh Dhakar</div>
    <button class="button primary-button" @click="$emit('start')">Start</button>
  </TinyModal>
</template>

<style scoped>
.subtitle {
  font-family: var(--font-family-display);
  font-size: 2rem;
  color: var(--color-text-light);
  margin-bottom: 0.25rem;
}
</style>


<script setup lang="ts">
import TinyModal from '@/components/TinyModal.vue';
import { TITLE_MODAL } from '@/constants/modals'
import { useGameStore } from '@/stores/gameStore'

const s = useGameStore();

defineEmits(['start'])
</script>


