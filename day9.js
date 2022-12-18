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
    } else if(verticalDistance > 1) {
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

function displayRope(rope) {
    const DIAGRAM_SIZE = 6;
    let displayString = '';
    for(let i = -DIAGRAM_SIZE; i < DIAGRAM_SIZE; i++) {
        for(let j = -DIAGRAM_SIZE; j < DIAGRAM_SIZE; j++) {
            let sameSpot = '';
            rope.forEach((element, index) => {
                sameSpot += element[0] === i && element[1] === j ? `${index}` : '';
            });
            displayString += sameSpot.length > 0 ? sameSpot[0] : '*';
        }
        displayString += '\n';
    }
    console.log(displayString);
}

function part2(inputString) {
    let solution = 1;
    let moveList = parseMoves(inputString);
    let rope = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
    const HEAD = 0;
    const TAIL = 9;
    let tailHistory = [`${rope[TAIL]}`];

    for(let move = 0; move < moveList.length; move += 2) {
        let moveDirection = moveList[move];
        let moveAmount = moveList[move + 1];
        for(let step = 0; step < moveAmount; step++) {
            rope[HEAD] = moveHead(rope[HEAD], moveDirection, 1);
            for(let knot = 1; knot < rope.length; knot++){
                rope[knot] = moveTail(rope[knot - 1], rope[knot]);
                //displayRope(rope);
            }
            if(uniqueTailMove(rope[TAIL], tailHistory)) {
                solution++;
                tailHistory.push(`${rope[TAIL]}`);
                // console.log(tailHistory);
            };
        }
    }
    return solution;
}

export function day9(string) {
    return [part1(string), part2(string)];
}