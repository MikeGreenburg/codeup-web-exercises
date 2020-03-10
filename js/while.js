// Create a while loop that uses console.log() to create the output shown below.
// var i = 2;
// while(i <= 65536){
//     console.log(i);
//     i*=2; // i = i++ * 2 is another way to write it
// }

//An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers.
//
//
// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

//1. write a js program that generates a random number between 50 & 100
//2. write a js program that generates numbers between 1 - 5
//3. write a do-while loop to log the amount of cones sold to each person

// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//     var conesSold = Math.floor(Math.random() *5) + 1;
//     if (conesSold > allCones) {
//         console.log("I do not have " + conesSold + " cones");
//     } else {
//         allCones -= conesSold;
//         console.log("I sold " + conesSold + " cones");
//     }
//
// } while(allCones > 0);
// console.log("I have sole all of my cones");
