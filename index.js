function getRandomBox(){
    return document.getElementById(getRandomNumber(9 , 1).toString);
}
function getRandomNumber(max , min) {
    let number = Math.random() * (max - min) + min;
    return number.toFixed(0);
}
console.log(getRandomNumber(9 , 1));

getRandomBox();