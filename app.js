let userScore = 0;

let computerScore = 0;

const userScore_span = document.getElementById("user-score");

const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".players_score");

const result_div = document.querySelector(".result");

const scissors_div = document.getElementById("scissor");

const paper_div = document.getElementById("paper");

const rock_div = document.getElementById("rock");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function lose(){
     computerScore++;
}

function draw(){
    console.log("DRAW");
}
 

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
                win();
            break;
            
        case "rp":
        case "rp":
        case "ps":
                lose();
                break;
            
        case "ss":
        case "rr":
        case "pp":
                draws();
                break;
    }
    
}





function main(){

rock_div.addEventListener('click', function(){
    game("r");
})

paper_div.addEventListener('click', function(){
    game("p");
})

scissors_div.addEventListener('click', function(){
    game("s");
})
}

main();

