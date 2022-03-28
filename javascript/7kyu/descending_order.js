//Descending Order
//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(n){
    let array = n.toString().split("");
    let sortedArray = array.map(x => Number(x)).sort((a,b) => b-a);
    let number = "";
    sortedArray.forEach(x => number += x);
    return Number(number);
};
