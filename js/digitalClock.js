"use strict";


function clock() {
    const fullDate = new Date(); //this gives us the full date and does not change with the const setting
    let hour = fullDate.getHours(); // this sets only the hour variable and allows it to change using the let method
    let minute = fullDate.getMinutes(); // this sets only the minute variable allows it to change using the let method
    let second = fullDate.getSeconds(); // this sets only the second variable allows it to change using the let method

    if (hour < 10) { // this tells the function that if the hours are less than 10 to add a 0 to the front of the hour
        hour = "0" + hour;
    }

    if (minute < 10) { // this tells the function that if the minutes are less than 10 to add a 0 to the front of the minute
        minute = "0" + minute;
    }

    if (second < 10) { // this tells the function that if the seconds are less than 10 to add a 0 to the front of the second
        second = "0" + second;
    }

    document.getElementById('hour').innerHTML = hour + ":"; // this grabs the element hour by its id hour and sets the html to display the variable hour + : added after
    document.getElementById('minute').innerHTML = minute + ":"; // this grabs the element minute by its id minute and sets the html to display the variable minute + : added after
    document.getElementById('second').innerHTML = second; // this grabs the element second by its id second and sets the html to display the variable second on the document.


    setInterval(clock, 1000); // this sets the whole function to refresh after every second and to display the new updated info
}

clock();
// console.log(new Date());