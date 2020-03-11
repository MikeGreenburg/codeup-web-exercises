// Create a file named promises.js inside of your js directory.
//
//     Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//  function wait(num){
//     return wait();
//  }
// wait(2);

// const wait = num;
//     return new Promise(gets a defined function(resolve) => {
//         setTimeout(a defined function resolve, num);//without the () it gives it the definition of the defined function
//     });
// };

// const wait = num => {
//     return new Promise((resolve) =>{
//         setTimeout(resolve, num);
//     });
// };
//
// // function wait() {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             if (Math.random() > 0.1) {
// //                 resolve('Here is your data: ...');
// //             }
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// fetch('https://swapi.co/api/people/88')
//     .then(response => {
//         return response.json();
//     }).then(data => {
//         console.log(data);
// }).catch(error =>{
//     // console.log(`Error: ${error}`)
// });

// ================== Promise.race()
// const color1PROMISE = new Promise((resolve) => {
//     setTimeout(resolve, 2000, fetch('.data/color.json'));
// });
//
// const color2Promise = new Promise((resolve) => {
//     setTimeout(resolve, 1000, fetch('.data/color.json'));
// });
//
// const getColor = () => Promise.race([color1PROMISE, color2Promise]);
// getColor().then(response => response.json()).then(data => console.log(data));

//=========================== Exercise 2 ===================================//
// Generate a Personal Access Token for the GitHub API.

    // We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests like this:


// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

// Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

// const gitHub = userName => {
//     fetch(url, {headers: {'Authorization': gitHubKey}});
//     return new Promise((resolve) =>{
//         setTimeout(resolve, userName);
//     });
// };

// const gitHub = () => Promise.race([userName]);
// userName().then(response => response.json()).then(data => console.log(data));
// fetch(url, {headers: {'Authorization': gitHubKey}});
// function getGithubUsernames() {
//     return fetch('b48c101eb866a02cdef2f9763282b3e9564e3578\n' +
//         '\n')
//         .then(response => response.json())
//         .then(users => users.map(user => user.login));
// }
//
// // later on...
//
// getGithubUsernames().then((usernames) => {
//     usernames.forEach((username) => {
//         // do something with each username
//     });
// }).catch(error => console.error(error));

// var token = "b48c101eb866a02cdef2f9763282b3e9564e3578";

fetch('https://cors-anywhere.herokuapp.com/https://api.github.com/users/MikeGreenburg/events', {headers: {'Authorization': gitHubKey}})//this is the core of the fetch request
    .then(response => {
        return response.json();//returns the response into a json object
    })
    .then(jsonResponse => {//this returns the json response data at the specified location .created_at is the time portion within the payload section of the json object.
        return console.log(new Date(jsonResponse[0].created_at));
    });



