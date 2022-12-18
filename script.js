import { day1 } from "./day1.js";
import { day2 } from "./day2.js";
import { day3 } from "./day3.js";
import { day4 } from "./day4.js";
import { day5 } from "./day5.js";
import { day6 } from "./day6.js";
import { day7 } from "./day7.js";
import { day8 } from "./day8.js";
import { day9 } from "./day9.js";
import { day10 } from "./day10.js";
import { day11 } from "./day11.js";
import { day12 } from "./day12.js";
import { day13 } from "./day13.js";
import { day14 } from "./day14.js";
import { day15 } from "./day15.js";
import { day16 } from "./day16.js";
import { day17 } from "./day17.js";
import { day18 } from "./day18.js";
import { day19 } from "./day19.js";
import { day20 } from "./day20.js";
import { day21 } from "./day21.js";
import { day22 } from "./day22.js";
import { day23 } from "./day23.js";
import { day24 } from "./day24.js";
import { day25 } from "./day25.js";

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
    },
    {
        inputName: "Suply Stacks",
        answers: day5
    },
    {
        inputName: "Datastream",
        answers: day6
    },
    {
        inputName: "Terminal Output",
        answers: day7
    },
    {
        inputName: "Tree Grid",
        answers: day8
    },
    {
        inputName: "Rope Movements",
        answers: day9
    },
    {
        inputName: "CPU Instructions",
        answers: day10
    },
    {
        inputName: "",
        answers: day11
    },
    {
        inputName: "",
        answers: day12
    },
    {
        inputName: "",
        answers: day13
    },
    {
        inputName: "",
        answers: day14
    },
    {
        inputName: "",
        answers: day15
    },
    {
        inputName: "",
        answers: day16
    },
    {
        inputName: "",
        answers: day17
    },
    {
        inputName: "",
        answers: day18
    },
    {
        inputName: "",
        answers: day19
    },
    {
        inputName: "",
        answers: day20
    },
    {
        inputName: "",
        answers: day21
    },
    {
        inputName: "",
        answers: day22
    },
    {
        inputName: "",
        answers: day23
    },
    {
        inputName: "",
        answers: day24
    },
    {
        inputName: "",
        answers: day25
    },
];

const SOLVING = 10;

if(SOLVING === 26) {
    showAllDays();
}

createDay(SOLVING);

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