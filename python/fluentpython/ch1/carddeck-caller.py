# pylint: disable=R,C

from random import choice
from carddeck import FrenchDeck

deck = FrenchDeck()
print(choice(deck))

for card in deck:
    print(card)