//Shortest word
//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s){
    let output = s.split(" ").map(x => x.length);
    return Math.min(...output);
}