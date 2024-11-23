// Initialise global variables
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let cards = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

// Make a function used to draw cards
generateCard = () => {
    let suit = Math.floor(Math.random() * 4);
    let value = Math.floor(Math.random() * 13);
    let card = `${cards[value]} of ${suits[suit]}`;
    return card;
}

// Draw distinct cards
drawCards = (numberToDraw) => {
    let drawn = [];

    for(i = 0; i < numberToDraw; i++) {
        let card = generateCard();
        while (drawn.includes(card)) {
            card = generateCard();
        }
        drawn.push(card); // Will make sure cards can't be duplicated
        
        // console.log(card);
    }
    
    return drawn();
    // return drawn.sort();
}

console.log(drawCards(52));
