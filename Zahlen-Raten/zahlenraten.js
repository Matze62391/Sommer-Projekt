// Zahlenraten Game - Number Guessing Game
// This script implements a simple number guessing game where the user tries to guess a random number between 1 and 100.
// It uses DOM manipulation, arrays to store guess history, and string messages for feedback.

// Generate a random number between 1 and 100 (inclusive)
let secretNumber = Math.floor(Math.random() * 100) + 1;
// Counter for the number of attempts
let attempts = 0;
// Array to store each guess made by the user (for demonstration of array usage)
const guessHistory = [];

// DOM elements
const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check_button");
const restartButton = document.getElementById("restart_button");
const messageElement = document.getElementById("message");
const attemptsElement = document.getElementById("versuche");

// Event listener for the "Check" button
checkButton.addEventListener("click", () => {
    // Get the user's guess and convert to number
    const guessValue = guessInput.value.trim();
    const guess = Number(guessValue);

    // Validate input: must be a number between 1 and 100
    if (guessValue === "" || isNaN(guess) || guess < 1 || guess > 100) {
        messageElement.textContent = "Bitte gib eine Zahl von 1 bis 100 ein.";
        return;
    }

    // Increment attempt counter and update display
    attempts++;
    attemptsElement.textContent = attempts;

    // Store the guess in our history array
    guessHistory.push(guess);

    // Check if the guess is correct, too low, or too high
    if (guess === secretNumber) {
        messageElement.textContent = `Richtig! Du hast die Zahl in ${attempts} Versuchen erraten.`;
        // Optional: Log the guess history to the console for demonstration
        console.log("Guess history:", guessHistory);
    } else if (guess < secretNumber) {
        messageElement.textContent = "Zu niedrig!";
        // Optional: Log the guess history to the console for demonstration
        console.log("Guess history:", guessHistory);
    } else {
        messageElement.textContent = "Zu hoch!";
        // Optional: Log the guess history to the console for demonstration
        console.log("Guess history:", guessHistory);
    }
});

// Event listener for the "Restart" button
restartButton.addEventListener("click", () => {
    // Reset the game: generate a new secret number, reset counters, and clear UI
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsElement.textContent = attempts;
    messageElement.textContent = "Neues Spiel gestartet!";
    guessInput.value = "";
    // Clear the guess history array
    guessHistory.length = 0;
    // Optional: Log the cleared array
    console.log("Game restarted. Guess history cleared.");
});