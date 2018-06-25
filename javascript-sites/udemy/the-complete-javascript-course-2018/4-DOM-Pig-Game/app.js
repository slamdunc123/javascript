/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
var scores, roundScore, activePlayer; //variables used throughout so in this global scope

scores = [0,0]; //2 values to represent the 2 players' scores
roundScore = 0,
activePlayer = 1;//keep track of which player is acitive

//dice = Math.floor(Math.random() * 6) + 1;//random number generator from 1 to 6 with rounding down to nearest whole integer
//console.log(dice);

//the below manipulates a DOM element

//document.querySelector("#current-" + activePlayer).textContent = dice; 

//document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>"; //use innerHTML instead of textContent to add any html eg <h1></h1> etc

//inthis example could also use - document.getElementById("current-" + activePlayer).innerHTML = dice;

//the below reads a DOM element

//var x = document.querySelector("#score-0").textContent;
//console.log(x);

//to hidee the dice on document load

//document.querySelector(".dice").style.display = "none";

//using event listeners - https://developer.mozilla.org/en-US/docs/Web/Events

//using callback function - the addEventListener call the external function - used if function is used elsewhere
/*
function btn(){
	//do something here
}

btn();//call to btn function 

document.querySelector(".btn-roll").addEventListener("click",btn);//includes call to btn function


//using anonymous function - create a nameless function inside of the addEventListener function - used if function will not be used anywhere else
*/

var scores, roundScore, activePlayer, gamePlaying; //variables used throughout so in this global scope
var dicePrev = 0;

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
		var dice = Math.floor(Math.random() * 6) + 1; //only require the dice variable in this scope
		var dice2 = Math.floor(Math.random() * 6) + 1;
		
				
		//2. Display result
		var diceDOM = document.querySelector(".dice");//only require the diceDOM variable in this scope
		diceDOM.style.display = "block"; //show dice image
		diceDOM.src = "dice-" + dice + ".png";

		//3. Update the round score if the rolled number is not 1
		if(dice !== 1){
			if(dice === 6 && dicePrev === 6){
				//console.log("6 and 6");
				
				roundScore = 0;
				scores[activePlayer] = 0;
				document.querySelector("#score-" + activePlayer).textContent = roundScore; 
				nextPlayer();
				console.log("activePlayer is " + activePlayer);
				console.log("roundScore is " + roundScore);
				console.log("scores is " + scores);
							 
				}else{
//					console.log(dice);
//					console.log(dicePrev);
					//add score
					roundScore += dice;
					//roudScore = roundScore + dice;
					document.querySelector("#current-" + activePlayer).textContent = roundScore; 
					dicePrev = dice; 
					//console.log(dicePrev);
					} 		
				 
		}else{
			//next player
			nextPlayer();

		}
		
	}
	
	
});

document.querySelector(".btn-hold").addEventListener("click", function(){
	
	if(gamePlaying){
			//add current score to global score
		scores[activePlayer] += roundScore;
		//scores[activePlayer] = scores[activePlayer] + roundScore; //long way of writing the above


		//update UI
		document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

		//check if player won the game

		if(scores[activePlayer] >= target.value){
		//console.log(activePlayer + " is the winner");
			document.querySelector("#name-" + activePlayer).textContent = "Winner!";
			document.querySelector(".dice").style.display = "none"; //not best practice to manipules css by using JavaScript in this way
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
		
		document.querySelector(".dice").style.display = "none";
}
	//reset all scores back to zero
	document.querySelector(".btn-new").addEventListener("click", init);//on click call the init function - parentheses not required with function name - could use anonymous function to then call init() but this is unnecessary in this case

function init(){
	
	scores = [0,0]; //2 values to represent the 2 players' scores
	roundScore = 0,
	activePlayer = 0;//keep track of which player is acitive
	gamePlaying = true; //sets the state variable gamePlaying to true

	document.querySelector(".dice").style.display = "none";//hide dice image
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







