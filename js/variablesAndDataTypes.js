// Variables and Data Types

//7 Data types in Javascript
//String - anything inside " " or ' ' is a string "The walking dog is messed up"
//Number - 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
//Boolean -
//Null -
//Undefined -
//Symbol -
//Object -

//String Data Type
console.log("Charles is amazing!");

//Number Data Type
console.log(48382);//is a whole number
console.log(3.14159); //is an integer

// Boolean Data Type  used to check if something is true or not!

console.log(true);
console.log(false);

//Variable  are things in programming that stores temporary information // You can call that information by calling the variables name // Think of it as an empty box to store values!

var sentence = "john is walking home";
var num = 23;
console.log(sentence);
console.log(num);

//Null Data Type
//more like the absence of any real value like number, string boolean etc...

var emptyStuff = null;
console.log(emptyStuff); // prints out null!

//Undefined Data Type
//means that a variable is not defined!

var japan = "Japan is very beautiful."; // defines a variable! Has a value of "Japan is very beautiful."
console.log(japan);
//
var cat; // declares a variable not define it! So it has a value of undefined!!!
console.log(cat); // prints out undefined!!

//Symbol Data Type


//Objects
// are more advanced data types

//Arrays
// Array is an object
//An array is a way to store multiple things

var fruits = ["apple", "cherry", "banana", true, false, 3.1415, sentence]; // you can even put variables in arrays!
var nums = [1, 2, 3];
console.log(fruits);

//object
//everything is an object!
//An object is another way to store multiple things!
//Are very flexible data types/structures

var john = { // variable that stores an object
    "name": "johny bones jones",
    "age": 31,
    "profession": "UFC fighter",
    "hobbies": ["chess", "snooker", "fighting"] // a value can be an array inside of the object
};
console.log(john);


