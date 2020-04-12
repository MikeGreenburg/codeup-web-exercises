let userScore = 0;
let computerScore = 0;

//caching the DOM//
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['s', 'r', 'p'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();//changes the user word to small text and puts it below the main text
    const smallCompWord = "comp".fontsize(3).sub();//changes the comp word to small text and puts it below the main text
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats ${convertToWord(computerChoice)}${smallCompWord}. You Win! `;

}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();//changes the user word to small text and puts it below the main text
    const smallCompWord = "comp".fontsize(3).sub();//changes the comp word to small text and puts it below the main text
    result_p.innerHTML = `${convertToWord()}${smallUserWord} loses to ${convertToWord()}${smallCompWord}. You Lose!`
}

function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();//changes the user word to small text and puts it below the main text
    const smallCompWord = "comp".fontsize(3).sub();//changes the comp word to small text and puts it below the main text
    result_p.innerHTML = `${convertToWord()}${smallUserWord} equals ${convertToWord()}${smallCompWord}. It's A Draw!`
}

function game(userChoice) {
    // console.log(":poop :poop :poop" + userChoice);
    const computerChoice = getComputerChoice();
    // console.log(computerChoice); checks to make sure function works
    // console.log("user choice => " + userChoice);
    // console.log("computer choice => " + computerChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }


}

function main() {

    rock_div.addEventListener('click', function () {
        // console.log("hey you clicked on rock"); tests if buttons work
        game("r");
    });

    paper_div.addEventListener('click', function () {
        // console.log("hey you clicked on paper") tests if buttons work
        game("p");
    });

    scissors_div.addEventListener('click', function () {
        // console.log("hey you clicked on scissors") tests if buttons work
        game("s");
    });
}
main();