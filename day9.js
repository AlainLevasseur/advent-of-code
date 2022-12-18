function parseMoves(string) {
    return string.split(' ');
}

function moveHead(position, direction, amount) {
    switch(direction) {
        case 'R':
            return [position[0] + amount, position[1]];
        case 'L':
            return [position[0] - amount, position[1]];
        case 'U':
            return [position[0], position[1] + amount];
        case 'D':
            return [position[0], position[1] - amount];
    }
}

function moveTail(head, tail){
    let horizontalDistance = Math.abs(tail[0] - head[0]);
    let verticalDistance = Math.abs(tail[1] - head[1]);
    let newTailPosition = [tail[0], tail[1]];

    if(horizontalDistance > 1) {
        head[0] > tail[0] ? newTailPosition[0]++ : newTailPosition[0]--;
        if(verticalDistance > 0) {
            head[1] > tail[1] ? newTailPosition[1]++ : newTailPosition[1]--;
        }
    }
    if(verticalDistance > 1) {
        head[1] > tail[1] ? newTailPosition[1]++ : newTailPosition[1]--;
        if(horizontalDistance > 0) {
            head[0] > tail[0] ? newTailPosition[0]++ : newTailPosition[0]--;
        }
    }
    return newTailPosition;
}

function uniqueTailMove(tailPosition, tailHistory) {
    return !tailHistory.includes(`${tailPosition}`);
}

function part1(inputString) {
    let solution = 1;
    let moveList = parseMoves(inputString);
    let headPosition = [0,0];
    let tailPosition = [0,0];
    let tailHistory = [`${tailPosition}`];

    for(let move = 0; move < moveList.length; move += 2) {
        let moveDirection = moveList[move];
        let moveAmount = moveList[move + 1];
        for(let step = 0; step < moveAmount; step++) {
            headPosition = moveHead(headPosition, moveDirection, 1);
            tailPosition = moveTail(headPosition, tailPosition);
            if(uniqueTailMove(tailPosition, tailHistory)) {
                solution++;
                tailHistory.push(`${tailPosition}`);
            };
        }
    }

    return solution;
}

function part2(inputString) {
    let solution = inputString;
    return solution;
}

export function day9(string) {
    return [part1(string), part2(string)];
}