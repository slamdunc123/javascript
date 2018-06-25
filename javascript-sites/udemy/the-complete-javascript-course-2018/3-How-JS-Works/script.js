///////////////////////////////////////
// // -- Section 3 - Lecture 30: Hoisting in Practice

//functions - hoisting for functions only works with function declarations and not function expressions

//this example shows call can come before or after the function 'declaration' as function is stored before excecution
/*
function calculateAge(year){
	console.log(2016 - year);
}

calculateAge(1990);

calculateAge2(2000);

function calculateAge2(year){
	console.log(2016 - year);
}


//this example shows the call must come after the function 'expression' to avoid error
var retirement =  function(year){
	console.log(65 - (2016 - year));
}

retirement(1990);

retirement2(2000);

var retirement2 =  function(year){
	console.log(65 - (2016 - year));
}


//variables - need to be declared before use in all cases
//hoisting sets all variables to undefined initally

//var age2 = 32;
//console.log(age2); //23

console.log(age); //undefined
var age = 23; //this var age is stored in the global exectution object

function foo(){
	console.log(age);//undefined
	var age = 65;//this var age is stored in the foo() function  exectution object
	console.log(age);//65
}

foo()
console.log(age);//23


*/




///////////////////////////////////////
// -- Section 3 - Lecture 31: Scoping and the Scope Chain


// each function creates a scope
// lexical - scope chain where JavaScript variables in the parent scope are visible in the child scope and lower

// First scoping example

/*
var a = 'Hello!';
first();
//console.log(a + b + c);//this doesn't work this way from child up

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d); //can only acess variables a and d
}

*/


///////////////////////////////////////
// -- Section 3 - Lecture 32: The 'this' Keyword

//regular function call - the this keyword by default points to the global object
//method call - the this keyword points to the object which is calling the method

//the this keyword is only assigned a value when the function is called


// -- Section 3 - Lecture 33: The 'this' Keyword in Practice

//console.log(this); //this keyword here refers to the window object which is the default object
/*
function calculateAge(year){
	console.log(2016 - year);
	console.log(this); //this keyword here again refers to the window object because this is a regular function of the window object and not a method
}

calculateAge(1985);

*/
/*
var john = {
	name: "John",
	yearOfBirth: 1990,
	calculateAge: function(){
		console.log(this);//this keyword here refers to the object this method is inside of - the object john - because it is a function expression
		console.log(2016 - this.yearOfBirth);
		
		function innerFunction(){
			console.log(this);//this keyword here though refers to  the window object which is the default object - because it is a regular function declaration
		}
		innerFunction();
		
	}
}

john.calculateAge();


var mike = {
	name: "Mike",
	yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge; //function borrowing - no parenthesis required as not calling the function

mike.calculateAge();

*/















