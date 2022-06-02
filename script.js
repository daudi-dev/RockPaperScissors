console.log("Hello World");

function computerPlay(game) {
    return game[Math.floor(Math.random()*game.length)];
}

const game = ["Rock", "Paper", "Scissors"];
console.log(computerPlay(game));

function playRound(playerSelection, computerSelection) {
        
}
const playerSelection = "rock";
const computerSelection = computerPlay (game);
console.log(playRound (playerSelection, computerSelection));