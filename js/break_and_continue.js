//1. prompt user for odd number between 1 and 50
//2. use a loop and a break statement to continue prompting user if they input an invalid entry
//3. Use a loop and the continue statement
//4. output all the odd numbers between 1 and 50
// 5. except for the number the user entered.
// Output should look like this

//Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49

// Version 1

// do{
//     var userNumber = Number(prompt(" Enter a number between 1 and 50"));
//
//     if (userNumber < 1 || userNumber > 50){
//         alert(userNumber + " is not between 1 and 50, please pick another number");
//     } else if(userNumber % 2 === 0){ // means it is an even number and they need to put a new number in
//         alert(userNumber + " is not odd! Please enter again.");
//     } else if (isNaN(userNumber)){ // means if they enter a string or anything other than a number they need to put a new number in
//         alert(userNumber + " is not a number! Please enter again!")
//     } else {
//         alert("Congrats, you picked the right number!");
//         break; // once all conditions are met the loop stops with this code
//     }
//
// }while (true); // will force the loop to run until we hit a break statement
//
//
// for (var i = 1; i <= 50; i++){
//     console.log("Current iteration #: " + i);
//
//     if (i % 2 === 0){
//         continue; // if the number is even then we tell it to continue to run the rest of the code
//     }
//
//     if (i === userNumber){
//         console.log("Yikes! Skipping number: " + userNumber)
//     } else {
//         console.log("Here is an odd number: " + i);
//     }
// }

// Version 2

// another approach to writing the above statement
// for (var i = 1; i<=50; i+=2){
//     if (i === userNumber) {
//         console.log("Yikes! Skipping number: " + i);
//         continue;
//     }
//     console.log("Here's an odd number: " + i);
// }