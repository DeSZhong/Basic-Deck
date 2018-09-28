# Basic Deck
This is a Basic Deck class in Java Script (more aimed at use in BlackJack).

To run and test the code to see it working:
- node main.js

This project has two main files:
- main.js
- Deck.js

main.js utilises the Deck.js class importing it and using its functionality.
Deck.js is where the main logic is and main.js only utilises the class.

The code:
Deck.js:
- Constructor - creates the deck with the cards (stored as objects in an array {card value, card name, card suit), then shuffles the deck with a randomiser.
- reset() - the deck can be reset at any time by using this function on the deck object
- shuffle() - uses a basic shuffle and randomiser on the deck
- drawCard() - the deck itself acts like a stack so when cards ae drawn they are just taken from the top.
- evaluate(hand) - takes a hand as a parameter and evaluates its value based on BlackJack regulations.
- checkWinner(handPlayer, handDealer) - can be used in one of 2 ways:
    - check player and dealer - if the player wins the function returns true.
    - check two players - if the first player wins the function returns true.