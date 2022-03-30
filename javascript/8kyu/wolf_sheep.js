//A wolf in sheep's clothing
//https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

function warnTheSheep(queue) {
    let wolf = queue.length - 1 - queue.indexOf("wolf");
    return wolf === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!`;
  }