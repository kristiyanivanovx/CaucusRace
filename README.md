# Caucus Race

You are invited to play the following game. There is a sort of a circle ("the exact shape doesn't matter", as the Dodo once said) with integer values written around it one by one. The player starts the game with a balance of zero on her account.
At the beginning of the game, she chooses one of the positions on the circle i. The number values[i] written there is added to her account. Each move the player makes shifts her to the next position clockwise. Each time the player makes a move, her account changes by the number written on the new position. If, after a move, her balance becomes zero or negative, the game is over. The player wins if she manages to go through the full circle.
Given the list of values, return the sorted list of winning start positions (0-based).
