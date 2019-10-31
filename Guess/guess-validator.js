/* Guess Validator Function: Merit Badge 2
 * Adds counting turns, quit with q, and validating guess
 * By Preity Mangar. 
 */

/* Global Variables */
// Declare var answer as random integer between 1 and 100.
var answer = Math.floor(Math.random()*100)+1;
// Alert the answer while testing.
console.log(answer);
// Declare var guess, set to 0.
var guess = 0;
var turns = 0;
/* Main Code */
// Define while loop that runs while guess is not equal to answer
while (guess != answer){
  	// Prompt user for guess.
	guess=prompt("Guess my number (1-100)");
    if (guess =="q") break;
	if (validator(guess) ==true){
	turns++;
		// If guess lower than answer, say too low. 
		if (guess<answer) alert("too low");
		// Otherwise, if guess greater than answer, say too high. 
		else if (guess>answer) alert("too high");
	// Close If block
	}
else alert("Invalid guess. Retry!");
	// Close While Loop block
}
// If they guessed it, tell them they got it in however many turns. 
if (guess == answer) alert("You got it in "+turns+" turns.");
else alert("Quitter!");
	function validator (guess){
	if (guess > 0 && guess < 101) return true;
	else return false; 
	}