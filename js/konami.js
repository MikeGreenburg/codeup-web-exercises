 "use strict";
window.onload=function() {
    document.getElementById("pop").play();
};

$(document).ready(function(){


    var keys = {
        13: 'Enter',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        65: 'a',
        66: 'b'
    };

    var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
    var userInput = 0;

    $('backgroundImage').html('contra');
    document.addEventListener('keydown', function (e) { // starts 2nd code

        var key = keys[e.keyCode];
        var requiredKey = konamiCode[userInput];

        if (key === requiredKey) {
            userInput++;
            if (userInput === konamiCode.length) {
                activateCheats();
                userInput = 0;
            }
        } else {
            userInput = 0;
        }
    });
    function activateCheats() {
        // $('body').css();

        $('h1').html("You Have 30 Extra Lives");

        // $('body').css('background-size', '100px 100px');


    }
});
