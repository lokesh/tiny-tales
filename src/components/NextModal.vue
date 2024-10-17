<script setup lang="ts">
import TinyModal from '@/components/TinyModal.vue';

import { useGameStore } from '@/stores/gameStore';

const s = useGameStore();

defineProps<{
  correctTitle: string
}>();

const emit = defineEmits(['next']);

const handleNext = () => {
  emit('next');
};
</script>

<template>
  <TinyModal :visible="s.modal === NEXT_MODAL">
    <template #title>
      Correct!
    </template>
    <p>The title is: {{ correctTitle }}</p>
    <button @click="handleNext">Next</button>
  </TinyModal>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>
