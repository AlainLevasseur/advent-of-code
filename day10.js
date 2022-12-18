let cycleCounter = 0;
let registerX = 1;
let signalStrength = [];

function executeInstruction(instruction) {
    return parseInt(instruction);
}

function incrementCycle(){
    cycleCounter++;
    console.log(`Cycle: ${cycleCounter}, X: ${registerX}`);
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

function part2(inputString) {
    let solution = inputString;
    return solution;
}

export function day10(string) {
    return [part1(string), part2(string)];
}