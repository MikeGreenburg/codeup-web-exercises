// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

//1. create a function named showMultiplicationTable
//2. that accepts a number
//3. console.logs the table for the number used (1 - 10)

//input * "x" i "=" input * i

// function showMultiplicationTable(input) {
//     for (var i = 1; i <= 10; i++) {
//         var answer = input * i; // creates a variable to calculate the answer
//
//         // var returnMessage = input + " x " + i + " = " + answer; / another way to write your console message
//
//         console.log(input + " x " + i + " = " + answer);
//     }
// } // another way to write this out

// function showMultiplicationTable() {
//     var randomNumber = Math.floor(Math.random() * 50) + 1;
//     for (var i = 1; i <= 10; i++){
//         var result = randomNumber * i;
//     console.log(randomNumber + ' x ' + i + " = " + result);
//  }
// }
// (showMultiplicationTable());

// For (initialization/; condition/; increment/) {
// }

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
//
//     123 is odd
// 80 is even
// 24 is even
// 199 is odd

//1. create a for loop
//2. generate 10 random numbers between 20 and 200
//3. output to the console whether each number is odd or even

// New Pseudo code
//1. for loop --> var i = 0; i < 10; i++;
//2. generate a random number between 20 & 200 --> Math.floor
//3. we need to check the randomNumber
//  if it is even --> console.log(randomNumber is even) --> randomNumber % 2 === 0
//  else its odd -->  console.log(randomNumber is odd) --> randomNumber % 2 === 1

// for(var i = 0; i < 10; i++) {
//     var randomNumber = Math.floor(Math.random() * 180);// denotes the difference between the 20 and the 200 (where we are ending)) + 20 // denotes where we are starting;
//
//     if (randomNumber % 2 === 0) {
//         console.log(randomNumber + " is even");
//     } else {
//         console.log(randomNumber + " is odd");
//     }
// } // another way to write it

// for (var i = 0; i < 5; i++) {
//         var randomNumber = Math.floor(Math.random() * 200) + 20;
//
//         if (randomNumber % 2 === 0) {
//             console.log(randomNumber + " is even");
//         } else {
//             console.log(randomNumber + " is odd");
//         }
// }

// Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

//1. create a for loop
//2. uses console.log for the output

// for(var i = 0; i <= 999999999; i++) {
//     if(i === Number(1)) {
//         console.log(i);
//     } else if(i === Number(22)) {
//         console.log(i);
//     } else if(i === Number(333)) {
//         console.log(i);
//     } else if(i === Number(4444)) {
//         console.log(i);
//     } else if(i === Number(55555)) {
//         console.log(i);
//     } else if(i === Number(666666)) {
//         console.log(i);
//     } else if(i === Number(7777777)) {
//         console.log(i);
//     } else if(i === Number(88888888)) {
//         console.log(i);
//     } else if(i === Number(999999999)) {
//         console.log(i);
//     }
// }


// cleaner way to write it

// for (var i = 1; i <= 9; i++) {
//     var result = '';
//     for (var j = 1; j <= i; j++) {
//         result += i;
//     }
//     console.log(result);
// }


// ***** another way to write this much cleaner ***** //

//for(var i = 1; i < 10; i++){  < == less than > = More than
//  console.log(i.toString().repeat(i));

// ***** the easiest way to write it and cleanest^ ***** //

// Written as a nested loop. Breaks down by outer loop and inner loop.

// for(var outer = 1; outer < 10; outer++){
//  console.log("outer loop");
//  var output = "";
//  for(var inner = 1; inner <= outer // to make it dynamic instead of hard coding; inner++){
//      console.log("inside inner loop");
//      output += outer;
//  }
//  console.log(output);
// }

//Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

//1. create a for loop
//2. that uses console.log to decrement by 5

// for (var i = 100; i >= 5; i--) {
//     if(i % 5 === 0) {
//         console.log(i);
//     }
// }

// Another cleaner way to write this
// 100 --> 5 down by 5

// for(var i = 100; i >= 5; i-=5){
//     console.log(i)
// }

// Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.

var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

dogs.forEach(function(dog) {
    console.log(dog.breed + " " + dog.age)
    // dogs.forEach(function (dog) {
    // console.log(dog.age + 1);
    })
});



// var test = {
//     thingToSay: "hi",
//     number: 3
// };
//
// var testArray = [{thingToSay: "hello", number: 27}, 8, 4, test];

// forEach loop layout
//1. array name in plural/
//2. .forEach/
//3. ( inside the parenthsis is function/
//4. ( inside the parenthsis is your array in singular form close the inner parenthsis )/
//5. close the outer parenthsis )/
//6. { which starts the function portion where you want to write your code dog calling the array and what element are you looking for/
//7. ex dog.breed will return that dogs breed/
//8. then }); to close the curly braces and the loop out.
//9. dogs.forEach(function(){
//  console.log(dog.breed + " " + dog.age)
//  }); will return

// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.

//1 write a function
//2 named filterNumbers()
//3 takes in an array of mixed data types
//4 and returns an array of only the numbers
//5 in ascending order



// var array1 = [3,6, true, "blues", 5, 21];
// function filterNumbers(array1){
//     for (var i = 0; i <= array1.length; i++){
//         if (array1 === "string"){
//
//         }
//     }
//
// }
//
//         filterNumbers(["fred", true, 5, 3]) //[3, 5]