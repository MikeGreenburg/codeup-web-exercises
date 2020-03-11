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

const wait = num => {
    return new Promise((resolve) =>{
        setTimeout(resolve, num);
    });
};

// function wait() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 resolve('Here is your data: ...');
//             }
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
