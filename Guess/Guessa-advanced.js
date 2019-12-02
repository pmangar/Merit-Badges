/* Guess Validator Function: Merit Badge 2
 * Adds counting turns, quit with q, and validating guess
 * By Preity Mangar. 
 */

var answer = Math.floor(Math.random()*100)+1;
console.log(answer);
var guess = 0;
var turns = 0;
while (guess != answer){
	guess=prompt("Guess my number (1-100)");
    if (guess =="q") break;
	if (validator(guess) ==true){
	turns++;
		if (guess<answer) alert("too low"); 
		else if (guess>answer) alert("too high");
	}	

else alert("Invalid guess. Retry!");
}
if (guess == answer) alert("You got it in "+turns+" turns.");
else alert("Quitter!");
	function validator (guess){
	if (guess > 0 && guess < 101) return true;
	else return false; 
	}
function gameStats(turns, totalTurns){
	alert("you got it in "+turns+" turns");
	totalTurns += turns;
	averageTurns = totalTurns / games;
	alert("you won "+games+" games with an average of " +averageTurns+" turns per game!");
}
function newGame(){
	var again = prompt("Play again? y = yes.");
        if (again == "y") {
                return true;
        }
        else {
                alert("Sorry to see you go.");
                return false;
       }
}
