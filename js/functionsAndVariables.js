// Functions and Variables practice
//In programming everything is about input and output
//Functions are the perfect example for that
//Functions takes an input and it is supposed to return an output.

var people = ["joe", "john"]; // when we make a variable we can assign it an array.
//
console.log(people); // this is how we print out that variable AKA: array, to the console.

for (var person of people) {
    console.log(person);  // This is how we can search through that array using the variable.
}

//Variables store static information, arrays, strings, numbers.
// Think of variables as nouns (person, place, or thing,)

//Functions store specific tasks.
//Think of functions as verbs (actions)

//Function definition

function catGreeter() {
    // function logic goes here
    console.log("Hey Cat! You're a fine animal!");
    console.log("Meooowwww!!!");
}

//Run, call, invoke, execute function.

catGreeter();

//More personalized

function specialGreeter(name){
    console.log("Hey " + name + "! You have a cool attitude.")
}

specialGreeter("Bill");

//Functions can have multiple inputs
//
function adderMultiple(a, b, c, d){
    console.log(a + b + c + d);
}
adderMultiple(2,2,2,2);

//Arrays
//You just loop through this array with this function and print anything you want from it

function printerArray(mango){
    for (var i=0; i<mango.length; i++) {
        console.log(mango[i]);// here you should have return instead!
    }
}

printerArray(["cat", "kangaroo", "spider", "raccoon", "joe"]);

//Console.log statements

//are cool but not so cool
//When you console.log it only prints to the console but does not output anything! It just prints it out so you can see it
//You can use console.log for learning or debugging
//Ex:

var result = adder(2, 4);

console.log(result); //returns 6

function adder(num1, num2){
    console.log(num1 + num2);
}
var result = adder(2, 4);// returns 6

console.log(result); //returns undefined because console.log does not output anything!

//Ex: function should check if nums exist in num?

function doesExist(nums, num){
    for (var i = 0; i < nums.length; i++){
        // if(num === nums[i]){//nums[i] is every element in the array!
        console.log(nums[i]);
        // }
    }
}
doesExist([1, 3, 5, 7], 2);// should be false because 2 is not in the array
doesExist([1, 3, 5, 7], 1);// should return true because 1 does exist inside the array!
//
// prints  1, 3, 5, 7 to the console!

//Return Statements

// You use return statements for functions
//When you use return statements for functions the function is actually giving you an output!
//Returns go inside of functions.
//return "hello" will not work!
//You want return inside of functions

function adder(num1, num2){
    return num1 + num2;
}

var result = adder(2, 4) + 2;

console.log("The result is: " + result);//without this statement you will not see anything in the console!

//Ex: function should check if nums exist in num?

function doesExist(nums, num) {
    for (var i=0; i<nums.length; i++){
        if (nums[i] === num){ // need logic or if statement
        return true;
        }
    }

    return false;//outside the loop

}

console.log(doesExist([2, 2, 5, 7], 2));//true if it is false it is because the number is outside the array!

