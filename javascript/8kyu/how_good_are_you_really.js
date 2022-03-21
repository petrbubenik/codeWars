//How good are you really?
//https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    classPoints.forEach(x => sum += x);
    let average = (sum + yourPoints) / (classPoints.length + 1);
    if(yourPoints > average) return true
    else return false;
  }