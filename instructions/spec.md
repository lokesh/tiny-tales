**# Project Overview **
App Purpose: Game that has players guess the book title from a short summary that grows to make it easier.
App Name: Tiny Tales

Technical Requirements:
- No user registration required.
- Project scaffoled with Vite.
- Built with VueJS v3 using the Composition API.
- State management with Pinia.
- Routing with Vue Router.

**# Core Functionality **

1. Main page: Game screen
  - When loading the game for the first time, display the Title Modal.
  - Top of the screen has a one word summary of the current book. 
  - Has a text input near the bottom with placeholder text 'What is the title?'
  - Below the input is a button labeled 'Get a hint'
  - Once the user enters text into the input, update the button text to 'Guess'
  - When the user clicks 'Guess', validate the input.
  - If it is wrong, clear the input and update the summary for the current book to make it one word longer.
  - If it is correct, show a Success Modal with a 'Next' button.
  - When the user clicks 'Next', clear the input and update the currently selected book to the next one.
    - If the user is on the last book, show the Share Modal.
2. Modal: Title Modal
  - States the name of the game, Tiny Tales. Below that it says 'A game by Lokesh Dhakar'.
  - Below that is a button labeled 'Start' that closes the modal and sets the focus on the input. 
3. Modal: Share Modal
  - Title says: 'Finished!'
  - Has a button to copy a link to the game to share it with friends. 


**# Additional Requirements **