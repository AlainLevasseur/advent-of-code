import { day1 } from "./day1.js";
import { day2 } from "./day2.js";
import { day3 } from "./day3.js";
import { day4 } from "./day4.js";

const day = 0;
const days = [
    {
        inputName: "",
        answers: day
    }, 
    {
        inputName: "Elf List",
        answers: day1
    }, 
    {
        inputName: "Strategy Guide",
        answers: day2
    },
    {
        inputName: "Rucksack Contents",
        answers: day3
    },
    {
        inputName: "Range Pairs",
        answers: day4
    }
];

showAllDays();

function showAllDays() {
    for(let i = 1; i < days.length; i++) {
        createDay(i);
    }
}

function updateAnswer(dayNumber, input) {
    const answer = days[dayNumber].answers(input);
    const part1 = document.querySelector(`.day-container.day${dayNumber} .one`);
    part1.innerText = `Part 1: ${answer[0]}`;
    const part2 = document.querySelector(`.day-container.day${dayNumber} .two`);
    part2.innerText = `Part 2: ${answer[1]}`;
}

function createDay(dayNumber) {
    const dayContainer = document.createElement('div');
    dayContainer.classList = `day-container day${dayNumber}`;
    dayContainer.id = `${dayNumber}`;

    const dayHeader = document.createElement('h2');
    dayHeader.innerText = `Day ${dayNumber}`;
    dayContainer.append(dayHeader);

    const dayInput = document.createElement('input');
    dayInput.type = "text";
    dayInput.id = `${dayNumber}`;
    dayInput.onchange =  () => updateAnswer(dayNumber, dayInput.value);
    const inputLabel = document.createElement('label');
    inputLabel.htmlFor = dayInput.id;
    inputLabel.innerText = `${days[dayNumber].inputName}\n`;
    dayContainer.append(inputLabel);
    dayContainer.append(dayInput);

    const answerContainer = document.createElement('div');
    answerContainer.className = "answer-container";
    dayContainer.append(answerContainer);

    const dayAnswerPart1 = document.createElement('p');
    dayAnswerPart1.className = 'one';
    dayAnswerPart1.innerText = "Part 1: ";
    answerContainer.append(dayAnswerPart1);

    const dayAnswerPart2 = document.createElement('p');
    dayAnswerPart2.className = 'two';
    dayAnswerPart2.innerText = "Part 2: ";
    answerContainer.append(dayAnswerPart2);

    document.querySelector('body').append(dayContainer);
}