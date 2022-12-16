function part1(inputString) {
    let solution;
    for(let index = 3; index < inputString.length; index++){
        let current = inputString[index];
        let oneBack = inputString[index - 1];
        let twoBack = inputString[index - 2];
        let threeBack = inputString[index - 3];
        if( current !== oneBack && current !== twoBack && current !== threeBack &&
            oneBack !== twoBack && oneBack !== threeBack && twoBack !== threeBack) {
                solution = index + 1;
                break;
        }
    }
    return solution;
}

function part2(inputString) {
    let solution = inputString;
    return solution;
}

export function day6(string) {
    return [part1(string), part2(string)];
}