// Nim Super Duper Simple (no input validation)
var again = true;
while(again == true){
	main();
	again=confirm("Play Again?");
}
function main(){
	var count = 0; var playerInput = 0; var cpuInput = 0; var winner=null; turn = 0;
	while (count<21) {
	turn=cpuTurn();
	count+=turn;
	alert("CPU counts "+turn+". Current count is "+count+".");
	winner="you";
	if (count<21) {
		turn = userTurn();
		count+=turn;
		alert("Current count is "+count);
		winner="CPU";
	}
}
	
alert("Game over. "+winner+" won!");
}
function cpuTurn(){
	var turn=Math.floor(Math.random()*3)+1;
	return turn;
}
function userTurn(){
	var turn = parseInt(prompt("Count how many? (1-3)"));
	if (turn > 3){
		alert("Too high, cheater!");
		userTurn();
	}
	return turn;
}
