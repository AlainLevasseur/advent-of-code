let first;
let second;
let third;

function setTopThree(newValue) {
    if(newValue > first) {
        third = second;
        second = first;
        first = newValue;
    } else if (newValue > second) {
        third = second;
        second = newValue;
    } else if (newValue > third) {
        third = newValue;
    }
}

function countMaxCalories(string) {
    let inputArray = string.split(" ");
    let elfCount = 0;
    let sumTop3 = 0;
    first = 0;
    second = 0;
    third = 0;
    inputArray.forEach(element => {
        if(element === ""){
            setTopThree(elfCount);
            elfCount = 0;
        } else {
            elfCount += parseInt(element);
        }
    });

    setTopThree(elfCount);
    sumTop3 = (first + second + third);
    return [first, sumTop3];
}

export function day1(string) {
    return countMaxCalories(string);
}