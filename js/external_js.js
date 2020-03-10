"use strict";

//console.log("hello from external javascript");

// 1. Use the alert function to show a message that says 'Welcome to my Website!'.


//alert("Welcome to my Website!");

// 2. Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.

    // For example, if the user enters "blue", your code should alert a message that says: "Great, blue is my favorite color too!"

//var userPrompt = prompt("What is your favorite color?");
// var alertMessage = "Great, " + userPrompt + " is my favorite color too!";
//alert(alertMessage);

// 3. Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.

    // When the exercise asks you to use a number, instead use a prompt to ask the user for that number
    // Use an alert to show the results of each problem.

// 1. Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
//
//     You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

// Pseudo code logic (*** write out how you are going to solve the problem before starting to code ***)
// 3.1. movie rental question
// 1. ask user what the rental fee is -> prompt & variable
// 2. ask user how many days for LM -> prompt & variable
// 3. ask user how many days for BB -> prompt & variable
// 4. ask user how many days for H -> prompt & variable
// 5. calculate -> rental fee * total days
// 6. alert the total cost

// var dailyRentalRate = Number(prompt("What is the rental price per night?"));
// var littleMermaid = Number(prompt("How many nights do you want to rent The Little Mermaid?");
// var brotherBear = Number(prompt("How many nights do you want to rent Brother Bear?"));
// var hercules = Number(prompt("How many nights do you want to rent Hercules?"));
// var totalCost = (littleMermaid + brotherBear + hercules) * dailyRentalRate;
// alert("You owe :$" + totalCost);

// 2. Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

// var amaRate = Number(prompt("How much did you make per hour at Amazon?")); //380//
// var amaHours = Number(prompt("How many hours did you work at Amazon?")); //10//
// var googRate = Number(prompt("How much did you make per hour at Google?")); //400//
// var googHours = Number(prompt("How many hours did you work at Google?")); //6//
// var fbRate = Number(prompt("How much did you make per hour at Facebook?")); //350//
// var fbHours = Number(prompt("How many hours did you work at Facebook?")); //4//
// var totalPay = (amaRate * amaHours) + (fbRate * fbHours) + (googRate * googHours);
// var totalPay;
// var alertMessage = "Your total pay is $" + totalPay;
// alert(alertMessage)

// 3. A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

// var classIsNotFull = confirm("Class is not full?");
// var noScheduleConflicts = confirm("Schedules do not conflict");
//
// var studentEnrollmentStatus = classIsNotFull && noScheduleConflicts;
// alert("Student can enroll: " + studentEnrollmentStatus);

// 4. A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

// var numberOfItems = Number(prompt("How many items are you buying?"));
// var offerIsValid = confirm("Is the offer valid?");
// var isPremiumMember = confirm("Are you a premium member?");
//
// var discountAppliedStatus = offerIsValid && (isPremiumMember === true || numberOfItems > 2);
// alert("Can use discount: " + discountAppliedStatus);