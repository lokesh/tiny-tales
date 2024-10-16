<script setup lang="ts">
defineEmits(['start'])
</script>

<template>
  <div class="modal">
    <h1>Tiny Tales</h1>
    <p>A game by Lokesh Dhakar</p>
    <button @click="$emit('start')">Start</button>
  </div>
</template>

<style scoped>
.modal {
  /* Add your modal styles here */
}
</style>