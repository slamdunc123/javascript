// Section 9: Variables and Data Types

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

// Section 10: Variable Mutation and Type Coercion

/*
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

// Section: Operators

/*
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

// Section: If / else Statements

/*
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






