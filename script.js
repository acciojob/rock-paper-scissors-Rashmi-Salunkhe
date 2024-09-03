//your code here
let userPoints = 0;
let computerPoints = 0;
let roundsLeft = 0;

const choices = ["ROCK", "PAPER", "SCISSORS"];

document.getElementById("play").addEventListener("click", function() {
    const turns = parseInt(document.getElementById("turns").value);
    if (turns > 0) {
        roundsLeft = turns;
        userPoints = 0;
        computerPoints = 0;
        document.getElementById("rounds-left").textContent = roundsLeft;
        document.getElementById("user-points").textContent = userPoints;
        document.getElementById("computer-points").textContent = computerPoints;
        document.getElementById("game-result").textContent = "";
        document.getElementById("round-result").textContent = "";
        document.getElementById("computer-choice").textContent = "";
    }
});

function playRound(userChoice) {
    if (roundsLeft > 0) {
        const computerChoiceIndex = Math.floor(Math.random() * 3);
        window.computerChoose = computerChoiceIndex;
        const computerChoice = choices[computerChoiceIndex];
        document.getElementById("computer-choice").textContent = computerChoice;

        let result = "";

        if (userChoice === computerChoice) {
            result = "TIE";
        } else if (
            (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
            (userChoice === "PAPER" && computerChoice === "ROCK") ||
            (userChoice === "SCISSORS" && computerChoice === "PAPER")
        ) {
            result = "WON";
            userPoints++;
        } else {
            result = "LOSE";
            computerPoints++;
        }

        document.getElementById("round-result").textContent = result;
        document.getElementById("user-points").textContent = userPoints;
        document.getElementById("computer-points").textContent = computerPoints;

        roundsLeft--;
        document.getElementById("rounds-left").textContent = roundsLeft;

        if (roundsLeft === 0) {
            let gameResult = "";
            if (userPoints > computerPoints) {
                gameResult = "WON";
            } else if (userPoints < computerPoints) {
                gameResult = "LOSE";
            } else {
                gameResult = "TIE";
            }
            document.getElementById("game-result").textContent = gameResult;
        }
    }
}

document.querySelector("[data-ns-test='rock']").addEventListener("click", () => playRound("ROCK"));
document.querySelector("[data-ns-test='paper']").addEventListener("click", () => playRound("PAPER"));
document.querySelector("[data-ns-test='scissors']").addEventListener("click", () => playRound("SCISSORS"));
