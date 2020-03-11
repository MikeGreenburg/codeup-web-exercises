// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

//     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let skilledProfs = users.filter(user => user.languages.length >= 3);
//     Use .map to create an array of strings where each element is a user's email address
 let emailAddies = users.map(user => user.email);
 console.log(emailAddies);
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let totalExpYears = users.reduce((total, user) => total + user.yearsOfExperience, 0);
 console.log("Average years of experience: ");
 console.log((totalExpYears/users.length) + 'years');

let longestEmail = users.reduce((currentLongest, user) => user.email.length > currentLongest.length ? user.email : currentLongest,'j');
console.log(longestEmail);

//     Use .reduce to get the longest email from the list of users.
// let longestEmail = users.reduce(function(currentlLongest, user){ //another way to write the above function
//     if(user.email.length > currentlLongest.length){
//         return user.email;
//     } else {
//         return currentlLongest;
//     }
// });
//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let names = users.reduce((sentence, user) => sentence === '' ? user.name : sentence + ', ' + user.name, '');
console.log("Your instructors are: " + names + '.');

// let names = users.reduce(function(sentence, user){ // another way to run the above function
//     if(sentence === ''){
//         //this means we are on our first run through
//         return user.name; //this eans user.name is being reutned to 'sentence'
//     }else {
//         //we are on our 2nd run through last run through
//         return sentence + ', ' + user.name; // ie 2nd rung through 'ryan' + ', ' + 'zach'
//                                             // 3rd run through 'ryan, zach' + ', ' + 'luis'
//     }
// });