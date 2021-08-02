
// Write a function called guessingGame which returns a function that allows you to guess a random whole number between 0 and 99. Every time you create a new game, it should select a new random number, and keep it secret from the player.
// Once the game has started, you can guess the number. The game should tell you whether your guess is too high, too low, or correct.
// After a correct guess, the game ends.

function guessingGame() {

    const randomNumber = Math.floor(Math.random() * 100);
    let guessCount = 0;
    let won = false;
        return function checkGuess(guess){
            if(won){
                return `The game is over, you already won!`;
            }
            if(guess < randomNumber){
                guessCount++;
                return `${guess} is too low!`;
            }
            if(guess > randomNumber){
                guessCount++;
                return `${guess} is too high!`;
            }
            if(guess === randomNumber){
                guessCount++;
                won = true;
                return `You win! You found ${randomNumber} in ${guessCount} guesses.`;
            }          
        };
}


module.exports = { guessingGame };
