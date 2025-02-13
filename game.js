const usinput = document.getElementById("usinput");
const subButton = document.getElementById("subButton");
const output = document.getElementById("output");
let randomNumber = Math.floor(Math.random() * 10) + 1; 
let userGuess;
let attempts = 0;

// Prompt user for a number between 1 and 10, or type 999 to exit.
output.textContent= userGuess = Number(prompt("Guess a number between 1 to 10 or 999 to exit: "));

while(userGuess != 999){
    if(userGuess == randomNumber ){
        alert(`Congratulations, you've guessed it in ${attempts} tries!`);
    } 
    else if (userGuess > randomNumber){
            output.textContent = userGuess = Number(prompt("Too high! Guess again:")); 
    }    
    else if(userGuess < randomNumber){
            output.textContent = userGuess = Number(prompt("Too low! Guess again:")); 
    }
    else if(userGuess != randomNumber){
            output.textContent = userGuess = Number(prompt("Invalid input! Guess again:")); 
    }
    attempts += 1 
}


// Create while loop that continues for as long as the user guesses are incorrect.
// Loop should count the number of guesses.
// Loop should exit if user enters 999 and not display "Too high!"
// If the guess is too low, the user should be promped "Too low!" and be able to guess again.
// If the guess is too high, the user should be promped 'Too high!" and be able to guess again.
// If anything else is entered, the user should be prompted that their input is invalid and 
// to guess again.

// If the guess is correct, the user should be alerted of their win and 
// be told the number of guesses they made.
 