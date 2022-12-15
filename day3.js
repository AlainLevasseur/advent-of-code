const ALPHABET = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function sumOfBadgePriorities(rucksackList) {
    const badges = getBadgeItems(rucksackList).split('');
    let sum = 0;
    badges.map((badge) => {
        sum += getItemTypePriorityValue(badge);
    })
    return sum;
}

function getBadgeItems(rucksackList) {
    const rucksackArray = rucksackList.split(' ');
    let badges = '';
    let elf1;
    let elf2;
    let elf3;
    for(let i = 0; i < rucksackArray.length; i += 3){
        elf1 = rucksackArray[i];
        elf2 = rucksackArray[i+1];
        elf3 = rucksackArray[i+2];
        for(let j = 0; j < elf1.length; j++) {
            let itemType = elf1[j];
            if (elf2.includes(itemType) && elf3.includes(itemType)){
                badges += itemType;
                break;
            }
        }
    }
    return badges;
}

function sumOfCommonPriorities(rucksackList) {
    let duplicates = getDuplicateItems(rucksackList).split('');
    let sum = 0;
    duplicates.map((duplicate) => {
        sum += getItemTypePriorityValue(duplicate);
    })
    return sum;
}

function getDuplicateItems(rucksackList) {
    const rucksackArray = rucksackList.split(' ');
    let duplicates = '';
    rucksackArray.map((sack) => {
        const compartmentSize = sack.length / 2;
        for(let i = 0; i < compartmentSize; i++) {
            if (sack.includes(sack[i], compartmentSize)) {
                duplicates += sack[i];
                break;
            }
        }
    })
    return duplicates;
}

function getItemTypePriorityValue(itemType) {
    return ALPHABET.indexOf(itemType);
}

export function day3(string) {
    return [sumOfCommonPriorities(string), sumOfBadgePriorities(string)];
}