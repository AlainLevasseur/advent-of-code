/*
    <div class="day1">
        <p> Day 1 </p>
        <label for="day1">Elf List</label>
        <input type="text" name="day1" id="day1">
        <p class="answer"></p>
        <script src="day1.js"></script>
    </div>
*/
const NUM_DAYS = 25;
let days = [];

createDay(1);

function createDay(dayNumber) {
    const dayContainer = document.createElement('div');
    dayContainer.className = "day-container";
    dayContainer.id = `${dayNumber}`;

    const dayHeader = document.createElement('h2');
    dayHeader.innerText = `Day ${dayNumber}`;
    dayContainer.append(dayHeader);

    const dayInput = document.createElement('input');
    dayInput.type = "text";
    dayInput.id = `${dayNumber}`;
    const inputLabel = document.createElement('label');
    inputLabel.htmlFor = dayInput.id;
    inputLabel.innerText = "${name}\n"
    dayContainer.append(inputLabel);
    dayContainer.append(dayInput);

    const answerContainer = document.createElement('div');
    answerContainer.className = "answer-container";
    dayContainer.append(answerContainer);

    const dayAnswerPart1 = document.createElement('p');
    dayAnswerPart1.innerText = "Part 1: ${answer[0]}";
    answerContainer.append(dayAnswerPart1);

    const dayAnswerPart2 = document.createElement('p');
    dayAnswerPart2.innerText = "Part 2: ${answer[1]}";
    answerContainer.append(dayAnswerPart2);

    document.querySelector('body').append(dayContainer);
}