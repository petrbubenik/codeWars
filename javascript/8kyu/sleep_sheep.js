//If you can't sleep, just count sheep!!
//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

var countSheep = function (num){
    let output = "";
    for(i = 1; i <= num; i++){
      output += i + ' sheep...';
    };
    return output;
  }