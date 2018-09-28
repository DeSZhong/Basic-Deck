// Simple Deck class that is more aimed at BlackJack but simple functions can be utilised in many ways
// Creates the Deck and shuffles the cards.
class Deck {
    constructor() {
        this.deck = [];
        this.reset();
        this.shuffle();
    }
    // Creates the deck
    reset() {
        const suits = ['HEARTS', 'SPADES', 'CLUBS', 'DIAMONDS'];
        const names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

        for (var s = 0; s < suits.length; s++) {
            for (var n = 0; n < names.length; n++) {
                // Cards are stored as Objects with the deck Array as { Value, Name, Suit}
                // The Card values are set so that they are easier managed by BlackJack
                // The alternative would be setting J as 11, Q and 12... etc by removing the if and else
                if (n < 10) {
                    this.deck.push({value: n+1, names: names[n], suits: suits[s]});
                } else {
                    this.deck.push({value: 10, names: names[n], suits: suits[s]});
                }
            }
        }
    }

    // Basic Shuffle that utilises the known Fisher-Yates Shuffle
    shuffle() {
        const deck = this.deck;
        // Fisher-Yates Shuffle
        for (var i = deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * i);
            var temp = deck[j];
            deck[j] = deck[i];
            deck[i] = temp;
        }
    }

    // Simple draw card the Deck acts like a stack and only drawn from the top
    drawCard() {
        return this.deck.pop();
    }

    // evaluates a given hand based on BlackJack rules and Aces being either 1 or 11
    evaluate(hand) {
        let total = 0;
        let aces = 0;
        for (let i = 0; i < hand.length; i++) {
            if (hand[i].value !== 1) {
                total += hand[i].value;
            } else {
                aces++;
            }
        }
        for (let i = 0; i < aces; i++) {
            if (total <= 10) total += 11;
            else total += 1;
        }
        return total;
    }

    // Checks if the player is the winner, True: player is winner or drawn, False: player loses
    checkWinner(handPlayer, handDealer) {
        const player = this.evaluate(handPlayer);
        const dealer = this.evaluate(handDealer);

        if (dealer > 21 || ((player >= dealer) && (player <= 21))) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = {
    Deck: Deck
}