<script setup lang="ts">
import { ref } from 'vue'

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
  <div class="modal">
    <h2>Finished!</h2>
    <button @click="copyLink">{{ copied ? 'Copied!' : 'Copy link to share' }}</button>
  </div>
</template>

<style scoped>
.modal {
  /* Add your modal styles here */
}
</style>