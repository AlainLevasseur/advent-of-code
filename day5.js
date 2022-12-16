function part1(inputString) {
    let solution;
    let currentStackArrangement;
    inputString
        .split('move')
        .forEach((element, index) => {
            if(index === 0) { 
                currentStackArrangement = getStacks(element); 
            } else {

                currentStackArrangement = processMove(currentStackArrangement, getMove(element));
            }
        });
    solution = getStackTop(currentStackArrangement);
    return solution;
}

//getStacks() -> array of strings ['NZ', 'DCM', 'P', ...]
function getStacks(input) {
    let [ inputStacks, stackCount ] = formatStackInput(input);
    let counter = 1;
    let stacks = Array(stackCount + 1).fill('');
    inputStacks.forEach((item) => {
        stacks[counter] += item;
        counter++;
        if (counter > stackCount) {
            counter = 1;
        }
    })
    return stacks;
}

function formatStackInput(input) {
    let stackArray = [];
    let item = '';
    for(let index = 0; index < input.length; index++) {
        let character = input[index];
        if( (index + 1) % 4 === 0 ) {
            stackArray.push(item);
            item = '';
            continue;
        }
        if( character === '[' || character === ']' || character === ' ' ) { 
            continue;
        }
        item += input[index];
    }
    let numStacks = parseInt(stackArray.pop());
    for(let index = numStacks; index > 1; --index ) {
        stackArray.pop();
    }
    return [stackArray, numStacks];
}

//getMoves() -> array of move objects [{ amount: 1, from: 2, to: 1}, ...]
function getMove(input) {
    let processedMove = input.split(" ");
    let move = {
        amount: processedMove[1],
        from: processedMove[3],
        to: processedMove[5]
    };
    return move;
}

//processMove(stacks, move) -> ['NZ', 'DCM', 'P', ...]
function processMove(stacks, move) {
    let newStacks = Array.from(stacks);
    //Items moved need to be reversed
    let movedItems = stacks[move.from].substring(0, move.amount).split('').reverse().join('');
    newStacks[move.from] = newStacks[move.from].substring(move.amount);
    newStacks[move.to] = movedItems + stacks[move.to];
    return newStacks;
}

//getStackTop()
function getStackTop(stacks) {
    let tops = '';
    stacks.forEach((stack) => {
        if(stack[0]) tops += stack[0];
    })
    return tops;
}

function part2(inputString) {
    let solution = inputString;
    return solution;
}

export function day5(string) {
    return [part1(string), part2(string)];
}