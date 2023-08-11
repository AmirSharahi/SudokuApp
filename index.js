var nav = document.createElement("nav");
nav.classList.add('nav');
document.getElementById('body').appendChild(nav);

function SudokuBox() {
    this.Value;
    this.createBox = function(numberOfBoxes , ali){
        let boxes = [];
        for (let i = 1; i <= numberOfBoxes; i++) {
            let box = document.createElement("div");
            box.classList.add('box');
            box.setAttribute(`${ali}` , `${i}`);
            boxes.push(box);
        }
        return boxes;
    };
}

const Sudoku = new SudokuBox();
var mainboxes = Sudoku.createBox(9 , 'MainBox');

for (let box of mainboxes) 
    nav.appendChild(box);

for (let j = 0; j < mainboxes.length; j++) {
    var babyBoxes = Sudoku.createBox(9 , 'BabyBox');
    for (let box of babyBoxes) 
        mainboxes[j].appendChild(box);
}

function getRandomNumber(max , min) {
    let number = Math.random() * (max - min) + min;
    return number.toFixed(0);
}


function mustChekTables(mBox) {
    var tablesToCheck = [];
    let numbers = [[] , [1 , 2 , 3 , 4 , 7] , [2 , 1 , 3 , 5 , 8] , [3 , 1 , 2 , 6 , 9] , [4 , 1 , 6 , 5 , 7] , [5 , 2 , 4 , 6 , 8] , [6 , 3 , 4 , 5 , 9] , [7 , 1 , 4 , 8 , 9] , [8 , 2 , 5 , 7 , 9] , [9 , 3 , 6 , 7 , 8]];
    for (let i = 1; i <= 9; i++) {
        if (mBox === `[mainbox='${i}']`) {
            let numbersOfRows = numbers[i];
            for (let number of numbersOfRows) {
                tablesToCheck.push(`[mainbox='${number}']`); 
                return tablesToCheck;
            }
        }
    }
}

function checkValidInput(mustChekTables , bBox) {
    let valid = true;
    let selectedTable = mustChekTables[0];
    for (let i = 0; i < mustChekTables.length; i++) {
        for (let j = 1; j <= 9; j++) {
            let firstIput = document.querySelector(`${mustChekTables[i]}> [babybox='${j}']`).innerHTML;
            let SecondInput = document.querySelector(`${selectedTable} > [babybox='${j}']`).innerHTML;
            if (firstIput === SecondInput && !(selectedTable === mustChekTables[i])) {
                bBox.innerHTML = ``;
                valid = false;
            }
        }
    }
    return valid;
}


for (let i = 0; i < 50; i++) {
    var selectRandomMainbox = `[mainbox='${getRandomNumber(9 , 1)}']`;
    console.log(selectRandomMainbox);

    var selectRandomBabyBox = `[babybox='${getRandomNumber(9 , 1)}']`;
    let MCTables = mustChekTables(selectRandomMainbox);
    let valid = checkValidInput(MCTables , selectRandomBabyBox);
    if (valid){
        document.querySelector(`${selectRandomMainbox} > ${selectRandomBabyBox}`).innerHTML = `${getRandomNumber(9 , 1)}`;
    }
    else{
        continue;
    }
}
// function getRandomBox(){
//     return document.getElementById(getRandomNumber(9 , 1).toString);
// }
// console.log(getRandomNumber(9 , 1));

// let parent = getRandomBox();

// parent.parentNode.replaceChild(getRandomBox(),getRandomBox().innerHTML = '<a></a>');

// getRandomBox();