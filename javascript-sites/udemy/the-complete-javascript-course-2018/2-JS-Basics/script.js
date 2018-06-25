// -- Section 2 - Lecture 9: Variables and Data Types

/*
var name = "John";
console.log(name);

var lastName = "Smith";
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);

console.log("My name is " +name+ " " + lastName);

*/
/*

// -- Section 2 - Lecture 10: Variable Mutation and Type Coercion


var name = "John";
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = "teacher";
isMarried = false;

console.log(name + " is a  " + age + " years old " + job + ". Is he married? " + isMarried + ".");

age = "thirty six";
job = "driver";

console.log(name + " is a  " + age + " years old " + job + ". Is he married? " + isMarried + ".");

//var lastName = prompt("What is the last name?");
//console.log(lastName);

alert(name + " is a  " + age + " years old " + job + ". Is he married? " + isMarried + ".");

*/
/*

// -- Section 2 - Lecture 11: Operators


var now = 2016;

var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26;
//ageJohn = 26

ageJohn++;
//ageJohn = ageJohn+1;

ageMark *= 2;
//ageMark = ageMark *2;

console.log(ageJohn);
console.log(ageMark);

*/
/*

// -- Section 2 - Lecture 12: If / else Statements


var name = "John";
var age = 26;
var isMarried = "yes";

if (isMarried === "yes"){
    console.log(name + " is married!");
}else{
    console.log(name + " will hopefully marry soon :)");
}

isMarried = false;

if(isMarried){ //boolean value so does not need to a comparison 
    console.log("YES!");
} else {
    console.log("NO!");
}

if (23 == "23"){ //double equals uses type coercion
    console.log("Something to print...");
    }else{
        console.log("Nothing to print...");
    }

if (23 === "23"){ //triple eqals does not use type coercion
    console.log("Something to print...");
    }else{
        console.log("Nothing to print...");
    }

*/
/*

// -- Section 2 - Lecture 13: Boolean Logic and Switch


var age = 20;

if (age < 20){
    console.log("John is a teenager.");    
} else if (age >= 20 && age < 30){
    console.log("John is a young man.");
} else {
    console.log("John is an older man.");
}

var job = "driver";

job = prompt("What does John do?");

switch (job) {
    case "teacher":
        console.log("John teaches kids.");
        break;
    case "driver":
        console.log("John drives a cab in Lisbon.");
        break;
    case "cop":
        console.log("John helps fight crime.");
        break;
    default:
        console.log("John does something else.");
}

*/
/*

// -- Section 2 - Lecture 14: Coding Challenge 1
// My solution:

var heightJohn = 200;
var ageJohn = 50;
var heightFriend = 200;
var ageFriend = 50;
var heightFriend2 = 200;
var ageFriend2 = 50;

var resultJohn = heightJohn + ageJohn * 5;
var resultFriend = heightFriend + ageFriend * 5;
var resultFriend2 = heightFriend2 + ageFriend2 * 5;

console.log(resultJohn);
console.log(resultFriend);
console.log(resultFriend2);

if ( resultJohn > resultFriend && resultJohn > resultFriend2 ){
    console.log("John is the winner with: " + resultJohn + "!");
} else if ( resultFriend > resultJohn && resultFriend > resultFriend2 ){
    console.log("Friend is the winner with: " + resultFriend + "!");
} else if ( resultFriend2 > resultJohn && resultFriend2 > resultFriend ){
    console.log("Friend2 is the winner with: " + resultFriend2 + "!");
} else {
    console.log("It's a draw! John is: " + resultJohn + " and Friend is: " + resultFriend + " and Friend2 is: " + resultFriend2);
}

*/
/*

// -- Section 2 - Lecture 15: Coding Challenge 1: Solution
//Jonas' solution

var heightJohn = 180;
var heightMike = 165;
var ageJohn = 26;
var ageMike = 29;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;

if (scoreJohn > scoreMike){
	console.log("John wins the game with " + scoreJohn + " points!");
} else if (scoreMike > scoreJohn){
	console.log("Mike wins the game with " + scoreMike + " points!");
} else if (scoreJohn === scoreMike){
	console.log("There is a draw.")
}


var heightMary = 155;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;

if (scoreJohn > scoreMike && scoreJohn > scoreMary){
	console.log("John wins the game with " + scoreJohn + " points!");
}else if(scoreMike > scoreJohn && scoreMike > scoreMary){
	console.log("Mike wins the game with " + scoreMike + " points!");
}else if (scoreMary > scoreJohn && scoreMary > scoreMike){
	console.log("Mare wins the game with " + scoreMary + " points!");
}else{
	console.log("It's a draw.")
}

*/

// -- Section 2 - Lecture 16: Functions

//this function returns a calculation result to be used when the function is called

/*
function calculateAge(yearOfBirth){
	var age = 2016 - yearOfBirth;
	return age; 
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
//	console.log(ageJohn);
//	console.log(ageMike);
//	console.log(ageMary);

//this function doesn't return a calculation it produces an output
function yearsUntilRetirement(name, year){ //function called incuding parameters
	var age = calculateAge(year);
	var retirement = 65 - age;
	
	if ( retirement >= 0){
	console.log(name + " retires in " + retirement + " years.");
	} else {
		console.log(name + " is already retired.");
	}
}

yearsUntilRetirement("John",1990); //function call including arguments
yearsUntilRetirement("Mike",1969);
yearsUntilRetirement("Mary",1948);


//my example
var recArea = calcArea(20, 50); //call to calcArea() function passing arguments and returns a calculated value
console.log(recArea);
calVol(200, recArea);//call to calVol() function passing arguments: a hardcoded one and the variable recArea which holds the value of calArea() function return

function calcArea(height, width){//function invoked with paramenters
	var area = height * width;
	return area;
}

function calVol(depth, recArea){//function involked with parameters: a hardcoded one and the recArea which holds the value of calArea() function return
	var vol = depth * recArea;
	console.log(vol);
}
*/
/*

// -- Section 2 -Lecture 17: Statements and Expressions

//function statement example - performs an action but doesn't produce an immediate outcome
function someFunc(par){
	//code to be executed
}

//function expression example - produces an outcome
var someFunc = function(par) {
	//code to be executed
}

//Statements

if (x === 5){
	//do something
}

//Expressions
3 + 4;
var x = 3;

*/
/*

// -- Section 2 - 18: Arrays:

var names = ["John", "Jane", "Mark"];
var years = new Array(1990, 1969, 1948); //alternative way of writing an array

console.log(names[0], years[0]);
names[1] = "Ben"; //data mutation - alters the value in names array, position 1
console.log(names);

var john = ["John", "Smith", 1990, "teacher", false];

console.log(john);

//array functions

john.push("blue"); //push - add element to end of array
console.log(john);

john.unshift("Mr.");
console.log(john); //unshift - add element to beginning of array

john.pop(); // pop - removes the last element of array
console.log(john);

john.shift(); // shift -  removes the first element of array
console.log(john);

console.log(john.indexOf("Smith")); // returns the index value of array element

if (john.indexOf("teacher") === -1){ //indexOf returns a value of -1 if the element is not in the array so this if statement checks against the -1 value
	console.log("John is not a teacher");
}

*/
/*

// -- Section 2 - Objects and Properties

//arrays work like this
var arr = [1,2,3];
console.log([0]); //finds an element from its index value in the order

//objects work like this using key value pairs
//object literal
// first way to create and populate an object
var john = { 
	name: "John",
	lastName: "Smith",
	yearOfBirth: 1990,
	job: "teacher",
	isMarried: false
};
console.log(john);

//to retrieve an element from an object
//method 1 - using the . notation
console.log(john.lastName);
//method 2 - using [] with the key notation 
console.log(john["lastName"]);

var xyz = "job";
console.log(john[xyz]); //output is teacher

//data mutation - ie changing the value of an element
john.lastName = "Miller"; // . notation
john["job"] = "programmer"; // [] with key notation

console.log(john);

//second way to create and populate an object
var jane = new Object(); // creates an empty object

//use data mutation to populate the object
jane.name = "Jane";
jane.lastName = "Smith";
jane["yearOfBirth"] = 1969;
jane["job"] = "retired";
jane["isMarried"] = true;

console.log(jane);

*/

// -- Section 2 - 20: Objects and Methods

//aswell as variables, objects can hold arrays, functions and other objects

/* 
//v1.0
var john = { 
	name: "John",
	lastName: "Smith",
	yearOfBirth: 1990,
	job: "teacher",
	isMarried: false,
	family: ["Jane", "Mark", "Bob"], //array
	calculateAge: function(yearOfBirth){ //function wirtten as an expression - same as writing var calculateAge = function(yearOfBirth){}
		//return 2016 - yearOfBirth;
		return 2016 - this.yearOfBirth; //this refers to the john object
	}
};
console.log(john.family[2]);
//console.log(john.calculateAge(1970));
console.log(john.calculateAge());

var age = john.calculateAge(); //calls method and store result in a variable
john.age = age; //add variable to the object

console.log(john);



//v2.0

var john = { 
	name: "John",
	lastName: "Smith",
	yearOfBirth: 1990,
	job: "teacher",
	isMarried: false,
	family: ["Jane", "Mark", "Bob"], //array
	calculateAge: function(yearOfBirth){ //function wirtten as an expression - same as writing var calculateAge = function(yearOfBirth){}
		//return 2016 - yearOfBirth;
		//return 2016 - this.yearOfBirth;
		this.age = 2016 - this.yearOfBirth; //this refers to the john object
	}
	
};
john.calculateAge(); //automatically calculates the age and stores it in the age property
console.log(john);

var mike = { 
	
	yearOfBirth: 1950,
	job: "teacher",
	
	calculateAge: function(yearOfBirth){ //function wirtten as an expression - same as writing var calculateAge = function(yearOfBirth){}
		//return 2016 - yearOfBirth;
		//return 2016 - this.yearOfBirth;
		this.age = 2016 - this.yearOfBirth; //this refers to the john object
	}
	
};
mike.calculateAge(); //automatically calculates the age and stores it in the age property
console.log(mike);



let product = {
	id: 1001,
	name: "oil",
	weight: 500,
	color: "black",
	dimensions: [10, 20, 15],
	volume: function(dimensions){
		
		
	this.vol = this.dimensions[0] * this.dimensions[1] * this.dimensions[2];
	}
};

product.volume();
console.log(product);
console.log("Volume equals: " + product.vol);

*/

// -- Section 2 - 21: Loops and Iteration

//for loops
/*
for(var i=0; i<10; i++){
	console.log(i);
	
}


0, true, print 0, update i to 1
1, true, print 0, update i to 2
.
.
.
9, true, print 0, update i to 10
10, false end loop


var names = ["John", "Jane", "Mary", "Mark", "Bob"];

//to get all values out of the names array you could write each line out eg 
//console.log(names[0]);
//console.log(names[1]);
//console.log(names[2]);
//console.log(names[3]);
//console.log(names[4]);

//a better way is to use a for loop

//for(var i = 0; i < 5; i++){
//for(var i = 0; i < names.length; i++){
//	console.log(names[i]);
//}

for(i = names.length-1; i >= 0; i--){
	console.log(names[i]);
}



// while loops

var i = 0;
while(i<names.length){
	console.log(names[i]);
	i++;
}

//break key word

for (var i = 1; i <=5; i++){
	console.log(i);
	
	if(i ===3){
		break;
	}
}

//continue key word

for (var i = 1; i <=5; i++){
	
	
	if(i ===3){
		continue;
	}
	console.log(i);
}

*/

// -- Section 2 - Lecture 22: Coding Challenge 2

//my solution
/*
var birthYear = [1980, 1990, 2000, 2010];
var birthYear2 = [1985, 1995, 2005, 2015];


var full_1 = printFullAge(birthYear); //outcome of function which is the bool2 array value gets returned here and stored in a variable
var full_2 = printFullAge(birthYear2); //outcome of function which is the bool2 array value gets returned here and stored in a variable

console.log(full_1);
console.log(full_2);

function printFullAge(bY){ //function starts here
	//console.log(birthYear);
	var ages = [];
	var bool = [];
	var bool2 = [];


for(var i=0; i<bY.length; i++){
	//console.log(bY[i]);
	var age = 2018 - bY[i];
	ages[i] = age;
	
	//console.log(ages[i]);
	
	if(ages[i] >= 18){
		bool[i] = true; //set to true if 18 or over
		bool2.push(bool[i]); //add bool array value to start of bool2 array
		//console.log(ages[i] + " Full age " + bool[i] + " " + bool2);
	} else{
		bool[i] = false; //set to false if under 18
		bool2.push(bool[i]); //add bool array value to start of bool2 array
		//console.log(ages[i] + " Not full age " + bool[i] + " " + bool2);
	}
	
	
	
} 
//console.log(bool2);
	return ages + " - " + bool2; //return bool2 array values to printFullAge() function call
} //function ends here

*/

// -- Section 2 - Lecture 23: Coding Challenge 2: Solution

// Jonas' solution

/*


function printFullAge(years){
	var ages = [];
	var fullAges = [];

for(var i = 0; i < years.length; i++){
	ages[i] = 2016 - years[i];
}

for (i = 0; i < ages.length; i++){
	if(ages[i] >= 18){
		console.log("Person " + (i + 1) + " is " + ages[i] + " years old, and is of full age.");
		fullAges.push(true);
	} else {
		console.log("Person " + (i + 1) + " is " + ages[i] + " years old, and is NOT of full age.");
		fullAges.push(false);
	}	
	
}
//console.log(years);
//console.log(ages);
	return fullAges;
	
}
var years = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);
console.log(full_1);
console.log(full_2);

*/















