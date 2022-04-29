//Binary Addition
//https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript

function addBinary(a,b) {
      let number = a + b;
      let output = [];
      while (number > 0){
        number % 2 === 0 ? output.unshift(0) : output.unshift(1);
        number = Math.floor(number/2);
      }
      return output.join("")
    }