# Import libraries
import random

# Initialise global variables
suits = ["Hearts", "Clubs", "Diamonds", "Spades"]
cards = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

# Make a function used to draw cards
def generateCard():
    suit = random.randint(0, 3)
    value = random.randint(0, 12)
    card = cards[value] + " of " + suits[suit]
    return card

# Draw distinct cards
def drawCards(numberToDraw): 
    drawn = []

    for i in range(numberToDraw):
        card = generateCard()
        while card in drawn:
            card = generateCard()
        drawn.append(card) # Will make sure cards can't be duplicated
    
    return drawn
    
print(drawCards(52))
