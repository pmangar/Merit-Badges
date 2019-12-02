/* Guess Validator Function: Merit Badge 3
 * Adds counting turns, quit with q, and validating guess
 * By Preity Mangar. 
 */
var game = 0;
var again = true;
var totalTurns = 0;
while (again == true) {
	var guess = 0;
	var turns = 0;
	game++;
	var answer = Math.floor(Math.random()*100)+1;
	console.log(answer);
	while (guess != answer){
		guess=prompt("Guess my number (1-100)");
		if (guess =="q") {
			alert("quitter!");
			break;
	}		
	if(validator(guess) == true){
		turns++;
		if (guess < answer) {
			alert("too low"); 
		} else if (guess > answer) {
			alert("too high");
		}
	} else if (validator(guess) == false) {
		alert ("Invalid guess!");
}
if (guess == answer) {
	gameStats(turns);
	again = newGame();
} else {
	break;
}
			
function validator (guess){
	if (guess > 0 && guess < 101) {
		return true;
	} else { 
		return false; 
	}
}
function gameStats(turns) {
	alert("you guessed it in"+turns+" turns");
	totalTurns += turns;
	averageTurns = totalTurns / games;
	alert("you won"+game+" games with an average of" +averageTurns+" turns per game!");
}
function newGame() {
		again = confirm("play again?");
		if (again == false) {
			alert("thanks for playing!");
			return false;
		} else if (again == true) {
			return true;
		}
	}
}
