//Ones and Zeros
//https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

const binaryArrayToNumber = arr => {
    let binary = arr.join("");
    let decimal = parseInt(binary, 2);
    return decimal;
  }