/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gamePlaying; //variables used throughout so in this global scope
var lastDice;

var target = document.getElementById("target");
var test = document.getElementById("test");
 
//test.innerHTMl = target.value;

function annotate(){
	test.innerHTML = target.value;
	
	//console.log(target.value);
}

init(); //call init() function first



document.querySelector(".btn-roll").addEventListener("click",function( ){//includes anonymous function
	
	if (gamePlaying){
		
			//1. Random number
		var dice1 = Math.floor(Math.random() * 6) + 1; //only require the dice variable in this scope
		var dice2 = Math.floor(Math.random() * 6) + 1;
		
				
		//2. Display result
		//var diceDOM = document.querySelector(".dice");//only require the diceDOM variable in this scope
		document.getElementById("dice-1").style.display = "block";
		document.getElementById("dice-2").style.display = "block";		document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
		document.getElementById("dice-2").src = "dice-" + dice2 + ".png";

		//3. Update the round score if the rolled number is not 1
		if (dice1 !== 1 && dice2 !==1){
			//add score
			roundScore += dice1 + dice2;
			document.querySelector("#current-" + activePlayer).textContent = roundScore;
		} else {
			//next player
			nextPlayer();
		}
		/*
		
		if(dice === 6 && lastDice === 6){			
			//Player loses score
			scores[activePlayer] = 0;
			document.querySelector("#score-" + activePlayer).textContent = "0";
			nextPlayer();
		} else if(dice !== 1){
			//add score
			roundScore += dice;
			document.querySelector("#current-" + activePlayer).textContent = roundScore; 
		} else {
			//next player
			nextPlayer();

		}
		lastDice = dice;
		*/
	}
	
	
});

document.querySelector(".btn-hold").addEventListener("click", function(){
	
	if(gamePlaying){
			//add current score to global score
		scores[activePlayer] += roundScore;
		//scores[activePlayer] = scores[activePlayer] + roundScore; //long way of writing the above


		//update UI
		document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
		
		var input = document.querySelector(".final-score").value;
		var winningScore;
		
		// undefined, 0, null and "" are coerced to false
		//anything else is coerced to true
		if(input){
		
			winningScore = input;
			
		} else {
			winningScore = 100;
		
		}

		//check if player won the game

		if(scores[activePlayer] >= winningScore){
		//console.log(activePlayer + " is the winner");
			document.querySelector("#name-" + activePlayer).textContent = "Winner!";
			document.getElementById("dice-1").style.display = "none";
			document.getElementById("dice-2").style.display = "none";
			document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner"); //better to create a bespoke css class and then and use the classList function
			document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

			
			gamePlaying = false; //sets the state variable gamePlaying to false when the game ends

		} else {
			//next player
			nextPlayer();
		}

	}
	
	
			
});

function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //ternary way of writing an if statement which is the same as writing:
//		if(activePlayer === 0){
//			activePlayer = 1;
//		} else {
//			activePlayer = 0;
//		}
		
		roundScore = 0;
		document.getElementById("current-0").textContent = "0";
		document.getElementById("current-1").textContent = "0";
		
		document.querySelector(".player-0-panel").classList.toggle("active");
		document.querySelector(".player-1-panel").classList.toggle("active");
		
		//document.querySelector(".player-0-panel").classList.remove("active");
		//document.querySelector(".player-1-panel").classList.add("active");
		
		document.getElementById("dice-1").style.display = "none";
		document.getElementById("dice-2").style.display = "none";
}
	//reset all scores back to zero
	document.querySelector(".btn-new").addEventListener("click", init);//on click call the init function - parentheses not required with function name - could use anonymous function to then call init() but this is unnecessary in this case

function init(){
	
	scores = [0,0]; //2 values to represent the 2 players' scores
	roundScore = 0,
	activePlayer = 0;//keep track of which player is acitive
	gamePlaying = true; //sets the state variable gamePlaying to true

	document.getElementById("dice-1").style.display = "none";
	document.getElementById("dice-2").style.display = "none";
	//initalise game with all scores set to zero
	document.getElementById("score-0").textContent = "0";
	document.getElementById("score-1").textContent = "0";
	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";
	//initalise the player names
	document.getElementById("name-0").textContent = "Player 1";
	document.getElementById("name-1").textContent = "Player 2";
	
	//remove winner class from player panels
	document.querySelector(".player-0-panel").classList.remove("winner"); 
	document.querySelector(".player-1-panel").classList.remove("winner"); 
	
	//remove active class from player panels
	document.querySelector(".player-0-panel").classList.remove("active"); 
	document.querySelector(".player-1-panel").classList.remove("active"); 
	
	//add active class to player 1 panel
	document.querySelector(".player-0-panel").classList.add("active");
	
	//enable roll dice and hold buttons
//	document.querySelector(".btn-roll").disabled = false;
//	document.querySelector(".btn-hold").disabled = false;
	
	
}







