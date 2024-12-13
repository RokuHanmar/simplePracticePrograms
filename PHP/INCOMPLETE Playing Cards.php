<?php
// Initialise global variables
$suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
$cards = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

// Make a function used to draw cards
function generateCard(){
    $suit = rand(1, 4);
    $value = rand(1, 52);
    $card = "$cards[value] of ${suits[suit]}";
    return $card;
}

// Draw distinct cards
function drawCards($numberToDraw){
    $drawn = [];

    for ($i = 0; $i < numberToDraw; $i++) {
        $card = generateCard();
        while (drawn.includes(card)) {
            $card = generateCard();
        }
        drawn.push(card); // Will make sure cards can't be duplicated

        // console.log(card);
    }

    return $drawn();
    // return drawn.sort();
}

$cardsToDraw = input("How many cards do you want to draw? ");
echo(drawCards($cardsToDraw));
