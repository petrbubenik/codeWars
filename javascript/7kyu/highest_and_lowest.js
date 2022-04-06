//Highest and Lowest
//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers){
    let numArr = numbers.split(" ").sort((a,b) => b - a);
    return `${numArr[0]} ${numArr[numArr.length - 1]}`
}