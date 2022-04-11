//Jaden Casing Strings
//https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

String.prototype.toJadenCase = function () {
    let output = this.split(" ").map((x,i) => x.charAt(0).toUpperCase() + x.slice(1));
    return output.join(" ");
  };