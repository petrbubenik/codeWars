//Number of People in the Bus
//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

function numberoOfPeopleInBus(arr){
    return arr.map(x => x[0] - x[1]).reduce((acc,c) => acc + c, 0)
}

