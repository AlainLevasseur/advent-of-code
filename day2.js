const OPPONENT_ROCK = 'A';
const OPPONENT_PAPER = 'B';
const OPPONENT_SCISSORS = 'C';
const PLAYER_ROCK = 'X';
const PLAYER_PAPER = 'Y';
const PLAYER_SCISSORS = 'Z';
const CHOICE_ROCK = 'r';
const CHOICE_PAPER = 'p';
const CHOICE_SCISSORS = 's';
const WIN_POINTS = 6;
const DRAW_POINTS = 3;
const LOSE_POINTS = 0;
const ROCK_POINTS = 1;
const PAPER_POINTS = 2;
const SCISSORS_POINTS = 3;

const LOSS = 'X';
const DRAW = 'Y';
const WIN = 'Z';

const answerDay2 = document.querySelector('.day2 .answer');
const inputFormDay2 = document.getElementById("day2");
inputFormDay2.addEventListener('change', () => {
    answerDay2.textContent = `Answer: ${parseCorrectStrategyGuide(inputFormDay2.value)}`;
})

function getPlayerChoiceScore(playerChoice) {
    switch(playerChoice){
        case CHOICE_ROCK:
            return ROCK_POINTS;
        case CHOICE_PAPER:
            return PAPER_POINTS;
        case CHOICE_SCISSORS:
            return SCISSORS_POINTS;
    }
}

function getRoundScore(playerChoice, opponentChoice) {
    if(playerChoice === opponentChoice) { return DRAW_POINTS; }
    if(playerChoice === CHOICE_ROCK && opponentChoice === CHOICE_SCISSORS ||
       playerChoice === CHOICE_PAPER && opponentChoice === CHOICE_ROCK ||
       playerChoice === CHOICE_SCISSORS && opponentChoice === CHOICE_PAPER) { return WIN_POINTS; }
    return LOSE_POINTS;
}

function getChoiceID(choice) {
    switch(choice){
        case PLAYER_ROCK:
        case OPPONENT_ROCK:
            return CHOICE_ROCK;
        case PLAYER_PAPER:
        case OPPONENT_PAPER:
            return CHOICE_PAPER;
        case PLAYER_SCISSORS:
        case OPPONENT_SCISSORS:
            return CHOICE_SCISSORS;
    }
}

function parseStrategyGuide(string) {
    let guideArray = string.split(" ");
    let myMove;
    let opponentMove;
    let myScore = 0;
    for(let i = 0; i < guideArray.length; i += 2){
        myMove = getChoiceID(guideArray[(i + 1)]);
        opponentMove = getChoiceID(guideArray[(i)]);

        myScore += getPlayerChoiceScore(myMove) + getRoundScore(myMove, opponentMove);
    }
    return myScore;
}

function getPlayerChoice(outcome, opponentChoice) {
    if(outcome === DRAW) { return opponentChoice; }
    switch(opponentChoice) {
        case CHOICE_ROCK:
            return outcome === WIN ? CHOICE_PAPER : CHOICE_SCISSORS;
        case CHOICE_PAPER:
            return outcome === WIN ? CHOICE_SCISSORS : CHOICE_ROCK;
        case CHOICE_SCISSORS:
            return outcome === WIN ? CHOICE_ROCK : CHOICE_PAPER;
    }
}

function parseCorrectStrategyGuide(string) {
    let guideArray = string.split(" ");
    let outcome;
    let myMove;
    let opponentMove;
    let myScore = 0;
    for(let i = 0; i < guideArray.length; i += 2){
        outcome = guideArray[i + 1];
        opponentMove = getChoiceID(guideArray[i]);
        myMove = getPlayerChoice(outcome, opponentMove);

        myScore += getPlayerChoiceScore(myMove) + getRoundScore(myMove, opponentMove);
    }
    return myScore;
}