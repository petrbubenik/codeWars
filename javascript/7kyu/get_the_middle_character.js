//Get the middle character
//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s){
    let middle = s.length / 2;
    return Number.isInteger(middle) ? s.slice(middle - 1, middle + 1) : s.slice(middle, middle + 1);
}