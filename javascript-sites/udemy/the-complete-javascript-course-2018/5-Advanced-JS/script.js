// Function constructor (object)

//var john = {
//	name: 'John',
//	yearOfBirth: 1990,
//	job: 'teacher'
//};

//function constructors should start with a capital letter
/*
var Person = function(name, yearOfBirth, job){
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	//create a method
//	this.calculateAge = function(){
//		console.log(2016-this.yearOfBirth);
//	};
	//console.log(this);
	}

//inheritance example - takes the method out of the function constructor itself and puts it in the function constructor's prototype property
Person.prototype.calculateAge = function(){
		console.log(2016-this.yearOfBirth);
};

//less common is to do the same with the function constructor's properties
Person.prototype.lastName = 'Smith';
	
//instantiation ie creating an instance of object (function constructor)
//the new operator first creates an empty object
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

//console.log(Person);

//call the method from with Person
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

//lastName is not in the function constructor but is in it's prototype and so can be inherited
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


//another function constructor
var Car = function(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
	
}

//and it's prototypes

Car.prototype.isClassic = function(){
	if(this.year <= 1960){
		console.log("Classic");
	} else {
		console.log("non-Classic");
	}
};

var blackCar = new Car('Ford', 'T5', 1960);
var silverCar = new Car('VW', 'C1', 1990);
var goldCar = new Car('BMW', 'A3', 2000);

//can't console.log
blackCar.isClassic();
silverCar.isClassic();
goldCar.isClassic();

var carSelected = document.querySelector('.car');
carSelected.textContent = blackCar.make + ' ' + blackCar.model;
*/

/*
// Object.create - alternative way of creating an object

//no longer requires the capital first letter as this is not a function constructor
var personProto = {
	calculateAge: function(){
		console.log(2016 - this.yearOfBirth);
	}
};
//1st way
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';
//2nd way
var jane = Object.create(personProto, {
	name: {value: 'Jane'},
	yearOfBirth: {value: 1969},
	job: {value:'designer'}
});


// IMPORTANT:
//difference between Object.create and Function Constructor is:
//Object.create builds object by inheritting directly from the one passed in through the first argument.
//Function Constructor inherits from the functions prototype property
//Object.create allows programmers to implement complex inheritance structures in an easier way than Function Constructors
//Funcation Constructors are the most common though.

*/

/*
// Primitives vs Objects

//Primitive variable store the actual value
//Object variables store a reference to where the object is in memory

//Primitives

var a = 23;
var b = a;
a = 46;
console.log(a); //46
console.log(b); //23

//Objects

var obj1 = {
	name: 'John',
	age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); //30 
console.log(obj2.age); //30 but if these were primitive we'd expect 26 here

//Functions

var age = 27; 	//primitive
var obj = {		//object
	name: 'Jonas',
	city: 'Lisbon'
};

function change (a, b){
	a = 30;
	b.city = 'San Francisco';
}

change(age, obj);

console.log(age); 		//30 - primitive changes -  copy is created and doesn't change on the outside
console.log(obj.city);	//San Francisco - object -  the reference is passed so is still reflected on the outside

*/
/*
// -- Section 5 - Lecture 56: Creating Objects: First Class Functions: Passing Functions as Arguments

var years = [1990, 1965, 1937, 2005, 1998];
 
//generic function which loops through an input array and also accepting a function input
function arrayCalc(arr, fn){
	var arrRes = [];
	for(var i = 0; i < arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

//callback functions to be passed into the main function above
//by keeping these functions separate and only doing one task each the code becomes modular, reusable, readable and easier to manage

function calculateAge(el){
	return 2016 - el;
}

function isFullAge(el){
	return el >= 19;
}

function maxHeartRate(el){
	if (el >= 18 && el <= 81){
	return Math.round(206.9 - (0.67 * el));
	} else {
		return -1;
	}
}

var ages = arrayCalc(years, calculateAge);//calculateAge here doesn't need parentheses as it a callback function ie another function has called it
var fullAges = arrayCalc (ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);

*/

// -- Section 5 - Lecture 56: Creating Objects: First Class Functions: Functions Returning Functions

/*

//generic function

function interviewQuestion(job){
	if(job==='designer'){
		return function(name){
			console.log(name + ', can you please explain what UX design is?');
		}
	} else if (job==='teacher'){
		return function(name){
			console.log('What subject do you teach, ' + name + '?');
		}

	} else {
		return function(name){
			console.log('Hello ' + name + ', what do you do?');
		}
	}
}

//specific functions

//function(name) is returned so teacherQuestion is assigned the function(name)
var teacherQuestion = interviewQuestion('teacher');

//teacherQuestion('John') passes the argument 'John' as the parameter name of function(name)
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('John');

//easier way to understand it and an alternative way to write
//the function call is read from left to right so the interviewQuestion receives the argument 'teacher' and returns a function which receives the argument 'Mark'

interviewQuestion('teacher')('Mark');

*/

// -- Section 5 - Lecture 58: Creating Objects: Immediately Invoked Function Expressions (IIFE)
/*
function game(){
	var score = Math.random() * 10;
	console.log(score);
	console.log(score >= 5);
}
game();

//the same function written in IIFE format
//thsi helps achieve data privacy (preventing data from being accessed outside of the function) and modularity/resuability

(function(){
	var score = Math.random() * 10;
	console.log(score);
	console.log(score >= 5);
})();

//IIFE functions can accepts arguments and receive parameters

(function(goodLuck){
	var score = Math.random() * 10;
	console.log(score);
	console.log(score >= 5 - goodLuck);
})(1);
*/

// -- Section 5 - Lecture 59: Creating Objects: Closures

/*
//closures are built in to JavaScript so we don't have to declare them
//An inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.

//generic function
function retirement(retirementAge){
	var a = ' years left until retirement.';
	return function(yearOfBirth) {
		var age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}
//call 1
var retirementUS = retirement(66);
retirementUS(1990);

//call 2
retirement(66)(1990);

//Think of it in this order although it is a little confusing
//1-the result of calling the retirement(66) function is 66 is passed in as retirementAge and variable a is declared then the anonymous function is returned
//2-the returning function is stored as a function variable - retirementUS
//3-the call to retirementUS(1990) where 1990 is passed into the anonymous function((yearOfBirth)
//or you can read it as
//1-the retirementUS(1990) is the call to the anonymous function(yearOfBirth) so variable age is assigned a value
//2-the retirement(66) call passes in the 66 as retirementAge so all values are now available in the console.log

//more specific functions which use the generic function
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

//using the same yearOfBirth

retirementGermany(1990);
retirementIceland(1990);

*/

//mini challenge
//rewrite this earlier function using closures
/*
function interviewQuestion(job){
	if(job==='designer'){
		return function(name){
			console.log(name + ', can you please explain what UX design is?');
		}
	} else if (job==='teacher'){
		return function(name){
			console.log('What subject do you teach, ' + name + '?');
		}

	} else {
		return function(name){
			console.log('Hello ' + name + ', what do you do?');
		}
	}
}

var designerQuestion = interviewQuestion('designer');
designerQuestion('John');
*/

//generic function
/*
function interviewQuestion(job){
	if(job === 'designer'){
		var a = ' can you please explain what UX design is?';
		return function(name){
			console.log(name + a);
		}
	} else 
	if(job === 'teacher'){
		var a = 'What subject do you teach, ';
		var b = ' ?';
		return function(name){
			console.log(a + name + b);
		}
		
	} else {
		return function(name){
			console.log('Hello ' + name + ', what do you do?');
		}
	}
}

//specific functions
var designerQuestion = interviewQuestion('designer');
designerQuestion('John');

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Jane');

*/
//Jonas solution - write functions this way using the power of closures 
/*
function interviewQuestion(job){
	return function(name){
		if(job === 'designer'){
			console.log(name + ', can you please explain what UX design is?');
		} else if(job === 'teacher'){
			console.log('What subject do you teach, ' + name + '?');
		}else {
			console.log('Hello ' + name + ', what do you do?');
		}
	}
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Jane');

//1-interviewQuestion('teacher')('John') returns the anonymous function(name) passing in 'John'
//2-once closed in 'teacher' is passed in as job

*/
// -- Section 5 - Lecture 60: Creating Objects: Bind, Call and Apply
/*
//allows us to call the 'this' variable manually

var john = {
	name: 'John',
	age: 26,
	job: 'teacher',
	presentation: function(style, timeOfDay){
		if(style === 'formal'){
			console.log('Good ' + timeOfDay + ' ladies and gentlemen. I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
		}else if(style === 'friendly'){
			console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
		}
	}
}

john.presentation('formal', 'morning');

//using the call() function to perform method borrowing
//the presentation function isn't present in the emily obect but we can borrow it from the john object using the call() function
var emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'
}

john.presentation.call(emily, 'friendly', 'afternoon');

//a similar function is the apply() function which would accept an array
//eg john.presentation.apply(emily, ['friendly, 'afternoon']); the presentation function currently accepts standard variables not arrays so this would need to be changed in order for it to work

//also similar is the bind() function which has preset arguments but returns a function

var johnFriendly = john.presentation.bind(john, 'friendly');//preset 'friendly'
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');//preset 'formal'
emilyFormal('afternoon');

//amending a previous example with the bind() function
var years = [1990, 1965, 1937, 2005, 1998];
 
//generic function which loops through an input array and also accepting a function input
function arrayCalc(arr, fn){
	var arrRes = [];
	for(var i = 0; i < arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

//callback functions to be passed into the main function above
//by keeping these functions separate and only doing one task each the code becomes modular, reusable, readable and easier to manage

function calculateAge(el){
	return 2016 - el;
}

function isFullAge(limit, el){ //adding a 'limit' parameter
	return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20)); //preset the value to be passed to the 'limit' parameter
console.log(ages);
console.log(fullJapan);
*/

// -- Section 5 - Lecture 61: Creating Objects: Coding Challenge 4

//no idea

// -- Section 5 - Lecture 62: Coding Challenge 4: Solution, Part 1

//Janas solution

(function(){ //immediately invoked function defined
	
	
	function Question(question, answers, correct){
	this.question = question;
	this.answers = answers;
	this.correct = correct;
	}

	Question.prototype.displayQuestion = function(){
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++){
			console.log(i + ': ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans){
		if (ans === this.correct){
			console.log('Correct answer!');
		} else {
			console.log('Wrong answer. Try again.');
		}
	}

	var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes','No'], 0);

	var q2 = new Question('What is the name of this course\'s teacher?', ['John','Michael', 'Jonas'],2);

	var q3 = new Question('What describes coding best?',['Boring','Hard','Fun', 'Tedious'],2);

	var questions = [q1, q2, q3];

	var n = Math.floor(Math.random() * questions.length);

	questions[n].displayQuestion();

	var answer = parseInt(prompt('Please select the correct answer.'));

	questions[n].checkAnswer(answer);

})

();//immediately invoke the function


