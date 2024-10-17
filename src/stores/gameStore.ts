import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import books from '@/data/books.json'
import { TITLE_MODAL } from '@/constants/modals'

// Update the type definition for Books
type Books = {
  [title: string]: string[]
}

export const useGameStore = defineStore('game', () => {
  const allBooks = ref<Books>(books)
  const currentBook = ref<string | null>(null)
  const guessedCorrectly = ref(false)
  const currentHintIndex = ref(0)
  const modal = ref<string>(TITLE_MODAL)
  const currentRound = ref(1)
  const totalRounds = ref(10) // Adjust this value as needed

  const availableBooks = computed(() => Object.keys(allBooks.value))

  // New computed property for currentSummary
  const currentSummary = computed(() => {
    if (currentBook.value) {
      const summaries = allBooks.value[currentBook.value]
      return summaries[currentHintIndex.value] || null
    }
    return null
  })

  const selectRandomBook = () => {
    const bookTitles = availableBooks.value
    const randomIndex = Math.floor(Math.random() * bookTitles.length)
    currentBook.value = bookTitles[randomIndex]
  }

  const checkGuess = (guessedTitle: string) => {
    guessedCorrectly.value = guessedTitle === currentBook.value
    return guessedCorrectly.value
  }

  const getHint = () => {
    if (!currentBook.value) return null

    const hint = allBooks.value[currentBook.value][currentHintIndex.value]

    if (hint) {
      currentHintIndex.value = Math.min(currentHintIndex.value + 1, 11)
      return hint
    }

    return null
  }

  const closeModal = () => {
    modal.value = ''
  }

  const resetGame = () => {
    currentBook.value = null
    guessedCorrectly.value = false
    currentHintIndex.value = 0
    selectRandomBook()
  }

  // Initialize the game
  selectRandomBook()

  return {
    closeModal,
    currentBook,
    currentSummary,
    currentHintIndex,
    guessedCorrectly,
    availableBooks,
    checkGuess,
    resetGame,
    getHint,
    modal,
    currentRound,
    totalRounds,
  }
})
