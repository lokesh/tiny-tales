<template>
  <div class="summary">
    <span 
      v-for="(word, index) in coloredWords" 
      :key="index" 
      class="word"
      :style="{ backgroundColor: word.color }"
    >
      {{ word.text }}
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

// Function to get a random color different from the previous one
const getRandomColor = (previousColor?: string): string => {
  let color;
  do {
    color = colors[Math.floor(Math.random() * colors.length)];
  } while (color === previousColor);
  return color;
}

// Computed property to split the content into words and assign colors
const coloredWords = computed(() => {
  const words = props.content.split(/\s+/);
  let previousColor: string | undefined;

  return words.map(word => {
    const color = getRandomColor(previousColor);
    previousColor = color;
    return { text: word, color };
  });
})
</script>

<style scoped>
.summary {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.word {
  font-size: 3rem;
  font-weight: bold;
  color: var(--color-bg);
  display: inline-block;
  padding: 0.25rem 0.4rem;
  border-radius: 0.25rem;
}
</style>
