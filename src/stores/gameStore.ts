import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Book } from '@/types'

export const useGameStore = defineStore('game', () => {
  const books = ref<Book[]>([
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      summary: "A young girl's coming-of-age story in the American South during the 1930s. Her father, a lawyer, defends a black man accused of a terrible crime."
    },
    {
      title: "1984",
      author: "George Orwell",
      summary: "In a totalitarian future society, a man struggles to maintain his individuality under an oppressive government that controls every aspect of people's lives."
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      summary: "A witty romance set in Georgian England, following the relationship between the spirited Elizabeth Bennet and the proud Mr. Darcy as they overcome their own flaws and societal expectations."
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      summary: "A mysterious millionaire's obsession with his lost love leads to tragedy in this critique of the American Dream set in the Roaring Twenties."
    },
    {
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      summary: "A multi-generational saga of the Buendía family, blending reality and fantasy in the fictional town of Macondo, exploring themes of love, war, and the cyclical nature of history."
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      summary: "A teenage boy's experiences in New York City after being expelled from his prep school, dealing with themes of alienation, identity, and the loss of innocence."
    },
    {
      title: "The Handmaid's Tale",
      author: "Margaret Atwood",
      summary: "In a dystopian future, a woman is forced to live as a concubine under a fundamentalist theocratic dictatorship in the former United States."
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      summary: "A young Andalusian shepherd's journey to find his destiny leads him on an adventure across the Egyptian desert, teaching him about the essential wisdom of listening to his heart."
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      summary: "A futuristic society where humans are genetically bred and pharmaceutically anesthetized to passively serve a ruling order. A savage visitor challenges the system."
    },
    {
      title: "The Hunger Games",
      author: "Suzanne Collins",
      summary: "In a dystopian future, a young girl volunteers to take her sister's place in a televised battle to the death between children from different districts of a post-apocalyptic nation."
    }
  ])
  const currentBookIndex = ref(0)
  const summaryWordCount = ref(1)
  const showTitleModal = ref(true)
  const showSuccessModal = ref(false)
  const showShareModal = ref(false)

  const currentBook = computed(() => books.value[currentBookIndex.value])
  const currentSummary = computed(() => {
    const words = currentBook.value.summary.split(' ')
    return words.slice(0, summaryWordCount.value).join(' ')
  })

  const startGame = () => {
    showTitleModal.value = false
  }

  const checkGuess = (guess: string) => {
    if (guess.toLowerCase() === currentBook.value.title.toLowerCase()) {
      showSuccessModal.value = true
    } else {
      summaryWordCount.value++
    }
  }

  const getHint = () => {
    summaryWordCount.value++
  }

  const nextBook = () => {
    showSuccessModal.value = false
    currentBookIndex.value++
    summaryWordCount.value = 1

    if (currentBookIndex.value >= books.value.length) {
      showShareModal.value = true
    }
  }

  return {
    currentSummary,
    showTitleModal,
    showSuccessModal,
    showShareModal,
    currentBook,
    startGame,
    checkGuess,
    getHint,
    nextBook,
  }
})
