function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playGame() {
    const die1 = getRandomNumber(1, 6);
    const die2 = getRandomNumber(1, 6);

    const sum = die1 + die2;

    const resultElement = document.getElementById("outcome");

    if (sum == 7 || sum == 11) {
        resultElement.innerHTML = "YOU LOSE!!!";
    } else if (die1 == die2 && die1 % 2 == 0) {
        resultElement.innerHTML = "YOU WIN!!!!!!";
    } else {
        resultElement.innerHTML = "You Pushed!!";
    }
}

document.getElementById("openButton").addEventListener("click", playGame);