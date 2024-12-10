let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = Number(document.getElementById('guess').value);
    const message = document.getElementById('message');
    attempts += 1;

    if (guess === randomNumber) {
        message.textContent = `Congratulations! You guessed it right in ${attempts} attempts. The number was ${randomNumber}.`;
        resetGame();
    } else if (guess > randomNumber) {
        message.textContent = 'Too high! Try again.';
    } else if (guess < randomNumber) {
        message.textContent = 'Too low! Try again.';
    } else {
        message.textContent = 'Please enter a valid number.';
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guess').value = '';
    setTimeout(() => {
        document.getElementById('message').textContent = '';
    }, 5000);
}
