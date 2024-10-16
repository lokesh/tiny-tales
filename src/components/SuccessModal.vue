<script setup lang="ts">
defineProps<{
  correctTitle: string
}>()
defineEmits(['next'])
</script>

<template>
  <div class="modal">
    <h2>Correct!</h2>
    <p>The title is: {{ correctTitle }}</p>
    <button @click="$emit('next')">Next</button>
  </div>
</template>

<style scoped>
.modal {
  /* Add your modal styles here */
}
</style>