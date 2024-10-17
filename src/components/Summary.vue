<template>
  <div class="summary">
    <span 
      v-for="(word, index) in words" 
      :key="index" 
      class="word"
    >
      {{ word }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const colors = [
  "#de8451",
  "#355b38",
  "#4c49eb",
  "#7d54ed",
  "#6fb7f2",
  "#eefdb1",
  "#acf89a",
  "#daf6f8",
  "#c2a7cf"
];

// Component props
const props = defineProps<{
  content: string
}>()

// Computed property to split the content into words
const words = computed(() => props.content.split(/\s+/))
</script>

<style scoped>
.summary {
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.8rem;
  line-height: 1.1;
  /* row-gap: 0.5rem; */
  font-size: 3rem;
  font-family: var(--font-family-display);
}

.word {

  /* font-weight: bold; */
  /* color: var(--color-bg); */
  /* display: inline-block; */
  /* padding: 0.25rem 0.4rem; */
  /* border-radius: 0.25rem; */
}
</style>
