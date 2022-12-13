//"100"         -> 100
//"1200 1200"   -> 2400
//"1200 \n 1200"-> 1200

let first = 0;
let second = 0;
let third = 0;

const inputForm = document.getElementById("day1");
inputForm.addEventListener('change', () => {
    console.log(countMaxCalories(inputForm.value));
})

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
    first = 0;
    second = 0;
    third = 0;
    return sumTop3;
}