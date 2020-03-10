"use strict"

// Not widely used anymore with modern frameworks
// Alert makes a popup show up first on a page
alert("You are a winner");

// Confirm allows a user to select an option before an action happens
confirm("Would you like to exit");
// set to a variable to capture what they want to do
var userConfirm = confirm("Would you like to exit");
    console.log(userConfirm);
   alert("The user selected: " + userConfirm);

// Prompt is used to require the user to input something
var userPrompt = prompt("What is your favorite animal");
   // alert(userPrompt);

