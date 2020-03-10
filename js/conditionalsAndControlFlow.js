//Conditionals & Control Flow (If Statements, Logical Operators)

//If statements are used in Programming to check conditions or a test.
//So if some condition or test is true then perform a specific action
//And if it is not true then do something else.

// If Statements
//Equality Operators and Assignment Operators
//Logical Operators

//First Example

//1. Define a function that determines if a number is positive or negative.
// Positive number

var num = 20;


if (num > 0){
    console.log("The number is positive.")
}// this runs because it is true

if(num < 0) {
    console.log("The number is a negative.")
}//Will return The number is positive.
/*****************************************************************************/
// Negative number

var nums = -4;

if (nums > 0){
    console.log("The number is Positive")
}

if (nums < 0){
    console.log("The number is Negative")
}
/*****************************************************************************/
// Negative number if else

var a = -3;

if (a > 0){//if the number is 0 it will return negative!, with only if else.
    console.log("The number is positive.")
}else if (a < 0){
    console.log("The number is negative")
} else {
    console.log("The number is zero.")
}

/******************************************************************************/

var nun = prompt("Enter a number!!");//gives a pop up to give an input

if (nun > 0){
    alert("The number is a positive")
} else if (nun < 0){
    alert("The number is a negative")
}else {
    alert("The number is a zero")
}
/*****************************************************************************/
// Simple yes/no statement

var isRaining = prompt("Is it raining?");

if (isRaining === "yes"){
    alert("Go take an umbrella");
}else {
    alert("It's ok. You don't need anything.")
}

//console.log(2 !== 2);

//two equal sign or three equal signs are for comparison or equality checking

// one equal sign is for assigning values to a variable.

//Logical Operators

//&& (and), || (or), ! (not)

/*
true && true == true
true && false == false
false && true == false
false && false == false

true || true == true
true || false == true
false || true == true
false || false == false

!true == false
!false == true
 */

var name = "lexi";
var age = 17;
var highSchools = true;

//JOB AT APPLE
//Job requirements : over 18 and high school degree

if (age >= 18 && highSchools === true){
    alert("You may apply for this job.")
}// returns false because the age is 17 and both conditions have to be true


var newGuy = "john";
var age1 = 28;
var highSchool = false;

//JOB AT AMAZON
//Job requirements : over 18 or high school degree
if(age >= 18 || highSchool === true){
    alert("You can apply!")
}

