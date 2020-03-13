//Convert the next 4 functions into an ES6 arrow function
//     really useful when you need to use an annoymous function or when using functions that have no name such as passing a function to another function

// 1.
// function sum(a, b) {
//     return a + b;
// }
//
// let sum = (a, b) => a + b;
// console.log(sum(2, 5));

// breakdown

// - function sum(a, b) remove the function keyword because with => notation a function is assumed
// sum(a, b) {
//  return a + b;
// }
//
// - sum(a, b) gets turned into a variable using let keyword
// let sum = (a, b) {
//  return a + b;
// }
//
// - () get kept when more than one parameter is being made using => notation
// let sum = (a, b) {
//  return a + b;
// }
//
// - *{} remove curly braces because they are not needed in => notation // this is optional but mostly used to shorten notation
// let sum = (a, b)
//
// - => get put in to denote that it is in fact a function and we put the function syntax inside the {}
// let sum = (a, b) => {
//     return a + b;
// };
// -----------------------------------------Further reduction----------------------------------------------------
// - to reduce code even further you can remove {} and return statement
// let sum = (a, b) => a + b
//
// - it is just assumed that whatever comes after => is going to be returned from the function

// 2.
// function isPositive(number) {
//     return number >= 0;
// }
//
// let isPositive = number => number >= 2;
// console.log(isPositive(1));

//breakdown

// - function isPositive(number) remove the function keyword because with => notation a function is assumed
// isPositive(number) {
//     return number >= 0;
// }
//
// - isPositive(number) gets turned into a variable using let keyword
// let isPositive = (number) {
//     return number >= 0;
// }
//
// - () around the number parameter is not needed since there is only one parameter being stated
// let isPositive = number {
//     return number >= 0;
// }
// -----------------------------------------Further reduction----------------------------------------------------
//  - reduce code further by eliminating the return and {} and adding => notation after function parameter named number
//  let isPositive = number => number >= 0;

// 3.
// function randomNumber() {
//     return Math.random();
// }
//
// let randomNumber = () => Math.random();
// console.log(randomNumber());

//breakdown

// remove the function keyword
// randomNumber() {
//     return Math.random();
// }
//
// randomNumber gets turned into a variable using the let keyword
// let randomNumber = () {
//     return Math.random();
// }
//
// reduce code further by eliminating the return and {} and adding => notation after function parameter ()
// let randomNumber = () => Math.random();
//
// () remain empty for a function with no parameters defined

// 4.
// document.addEventListener('click', function() {
//     console.log('click');
// });
//
// document.addEventListener('click', () => console.log('click'));


//breakdown

// remove the keyword function
// document.addEventListener('click', () {
//     console.log('click');
// })
//
// add in => notation
// document.addEventListener('click', () => {
//     console.log('click');
// });
//
// in this case you do not have to assign it to a variable the () => defines it as a function
//
// reduce code further by eliminating the return and {} and adding => notation after function parameter ()
// document.addEventListener('click', () => console.log('click'));


// Using this and => notation

// class Person {
//     constructor(name) {
//         this.name = name
//     }
//
//     printNameArrow() {
//         setTimeout(() => {
//             console.log('Arrow: ' + this.name)
//         }, 100)
//     }
//
//     printNameFunction() {
//         setTimeout(function() {
//             console.log('Function: ' + this.name)
//         }, 100)
//     }
// }
//
// let person = new Person('Henry');
// person.printNameArrow();
// person.printNameFunction();

// breakdown
//
// the printNameArrow function using the => notation will print out Arrow: Henry to the console
// the printNameFunction will just print out Function: to the console
//
// this is different inside of a function and an => function
// it defines this based on where the function is called
// if you console.log (this.name) it will not print out because this.name is undefined
//
// when it is called in the printNameFunction it is a global scoped based on where it is at.
// this does not get redefined when using => notation function and that is why it prints out Arrow: Henry
// normal standard function redefines this keyword inside of javascript so you cannot really use this.name or anything else you define on your this object inside a normal function
// because it redefines to whatever scope you call the function in and in this case it is a global scope.