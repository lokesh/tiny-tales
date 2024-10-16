import { useGameStore } from '@/stores/gameStore'

export function useGameLogic() {
  const gameStore = useGameStore()

  const startGame = () => {
    gameStore.startGame()
  }

  const handleGuess = (guess: string) => {
    gameStore.checkGuess(guess)
  }

  const getHint = () => {
    gameStore.getHint()
  }

  const nextBook = () => {
    gameStore.nextBook()
  }

  return {
    startGame,
    handleGuess,
    getHint,
    nextBook,
  }
}
