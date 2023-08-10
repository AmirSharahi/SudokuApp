
function SudokuBox() {
    this.Value;
    this.createBox = function(numberOfBoxes){
        let boxes = [];
        for (let i = 1; i <= numberOfBoxes; i++) {
            let box = document.createElement("div");
            box.classList.add('box');
            box.setAttribute(`main` , `${i}`);
            boxes.push(box);
        }
        return boxes;
    };
}

const Sudoku = new SudokuBox();
var mainboxes = Sudoku.createBox();

var nav = document.createElement("nav");
nav.classList.add('nav');

document.getElementById('body').appendChild(nav);
for (let box of mainboxes) {
    nav.appendChild(box);
}


let boxesClass = document.querySelectorAll('.box');
console.log(boxesClass);
for (let boxClass of boxesClass) {
    for (let box of boxes) {
        boxClass.appendChild(box);
    }
}


// function getRandomBox(){
//     return document.getElementById(getRandomNumber(9 , 1).toString);
// }
// function getRandomNumber(max , min) {
//     let number = Math.random() * (max - min) + min;
//     return number.toFixed(0);
// }
// console.log(getRandomNumber(9 , 1));

// let parent = getRandomBox();

// parent.parentNode.replaceChild(getRandomBox(),getRandomBox().innerHTML = '<a></a>');

// getRandomBox();