var {Deck} = require('./Deck');

// Creates the instance of the deck
let deck = new Deck();

// Creates the hands as an example of how the Deck class can be utilised.
let playerHand = [];
let dealerHand = [];

// Just shows that the deck suffles haha
console.log(deck.deck);

// Just Draw the beginning hands for the players
while (playerHand.length < 2) {
    playerHand.push(deck.drawCard());
    dealerHand.push(deck.drawCard());
}

// Shows hands
console.log('Player');
console.log(playerHand);
console.log('Dealer');
console.log(dealerHand);

// Evaluates cards
console.log('Player: ' + deck.evaluate(playerHand));
console.log('Dealer: ' + deck.evaluate(dealerHand));

// Checks winner
if (deck.checkWinner(playerHand, dealerHand)) {
    console.log('You Won!');
} else {
    console.log('You lost!');
}