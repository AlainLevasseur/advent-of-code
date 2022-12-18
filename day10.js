let cycleCounter = 0;
let registerX = 1;
let signalStrength = [];

function executeInstruction(instruction) {
    return parseInt(instruction);
}

function incrementCycle(){
    cycleCounter++;
    //console.log(`Cycle: ${cycleCounter}, X: ${registerX}`);
    switch(cycleCounter) {
        case 20:
            signalStrength.push(registerX * cycleCounter);
            break;
        case 60:
            signalStrength.push(registerX * cycleCounter);
            break;
        case 100:
            signalStrength.push(registerX * cycleCounter);
            break;
        case 140:
            signalStrength.push(registerX * cycleCounter);
            break;
        case 180:
            signalStrength.push(registerX * cycleCounter);
            break;
        case 220:
            signalStrength.push(registerX * cycleCounter);
            break;
    }
}

function part1(inputString) {
    let solution = 0;
    let instructions = inputString.split(' ');
    let currentInstruction;
    cycleCounter = 0;
    registerX = 1;
    signalStrength = [];
    while(instructions.length !== 0) {
        currentInstruction = instructions.shift();
        if(currentInstruction === "noop") { 
            incrementCycle(); 
        } else {
            incrementCycle(); 
            incrementCycle(); 
            registerX += executeInstruction(instructions.shift());
        }
    }
    signalStrength.forEach((signal) => {
        solution += signal; 
    });
    return solution;
}

function drawPixel() {
    let pixel = (registerX - 1 <= cycleCounter && cycleCounter <= registerX + 1) ? '#' : '.';
    console.log(`Cycle: ${cycleCounter}, X: ${registerX}`);
    if(cycleCounter === 39) {
        pixel += '\n';
        cycleCounter = -1;
    }
    cycleCounter++;
    return pixel;
}

function part2(inputString) {
    let solution = '\n';
    let instructions = inputString.split(' ');
    let currentInstruction;
    cycleCounter = 0;
    registerX = 1;
    signalStrength = [];
    while(instructions.length !== 0) {
        currentInstruction = instructions.shift();
        if(currentInstruction === "noop") { 
            solution += drawPixel(); 
        } else {
            solution += drawPixel(); 
            solution += drawPixel(); 
            registerX += executeInstruction(instructions.shift());
        }
    }
    return solution;
}

export function day10(string) {
    return [part1(string), part2(string)];
}