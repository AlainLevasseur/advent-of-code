
function part1(inputString) {
    let solution = 0;
    getPairs(inputString)
        .map((pair) => {
            let formattedPair = getPairSectionIDs(pair);
            if (containsEntireSection(formattedPair)) { solution++ }
        });

    return solution;
}

function containsEntireSection(pair) {
    let firstFullyContained = (
        pair.firstElfSections.start >= pair.secondElfSections.start &&
        pair.firstElfSections.end <= pair.secondElfSections.end
    );
    
    let secondFullyContained = (
        pair.firstElfSections.start <= pair.secondElfSections.start &&
        pair.firstElfSections.end >= pair.secondElfSections.end
    );

    return firstFullyContained || secondFullyContained;
}

function getPairSectionIDs(pair) {
    let pairIDs = {
        firstElfSections:  {
            start: 0,
            end: 0
        }, 
        secondElfSections: {
            start: 0,
            end: 0
        }
    };
    let startID = true;
    let firstElf = true;
    let sectionNumber = '';
    for(let i = 0 ; i <= pair.length; i++) {
        let currentCharacter = pair[i];
        if (currentCharacter === "-") {
            firstElf ? pairIDs.firstElfSections.start = parseInt(sectionNumber) : pairIDs.secondElfSections.start = parseInt(sectionNumber);
            sectionNumber = '';
            startID = false;
            continue;
        }
        if(currentCharacter === ",") {
            pairIDs.firstElfSections.end = parseInt(sectionNumber);
            sectionNumber = '';
            firstElf = false;
            startID = true;
            continue;
        }
        if(i === pair.length) {
            pairIDs.secondElfSections.end = parseInt(sectionNumber);
            break;
        }
        sectionNumber += currentCharacter;
    }
    return pairIDs;
}

function getPairs(rangePairs) {
    return rangePairs.split(" ");
}

function part2(inputString) {
    let solution = 0;
    getPairs(inputString)
        .map((pair) => {
            let formattedPair = getPairSectionIDs(pair);
            if (containsOverlappingSection(formattedPair)) { solution++ }
        });

    return solution;
}

function containsOverlappingSection(pair) {
    let firstOverlaps = (
        pair.firstElfSections.start >= pair.secondElfSections.start &&
        pair.firstElfSections.start <= pair.secondElfSections.end ||
        pair.firstElfSections.end >= pair.secondElfSections.start &&
        pair.firstElfSections.end <= pair.secondElfSections.end
    )
    let secondOverlaps = (
        pair.firstElfSections.start <= pair.secondElfSections.start &&
        pair.firstElfSections.end >= pair.secondElfSections.start ||
        pair.firstElfSections.start <= pair.secondElfSections.end &&
        pair.firstElfSections.end >= pair.secondElfSections.end
    )
    return firstOverlaps || secondOverlaps;
}

export function day4(string) {
    return [part1(string), part2(string)];
}