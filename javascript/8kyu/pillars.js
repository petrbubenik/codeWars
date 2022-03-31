//Pillars
//https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript

function pillars(num_pill, dist, width) {
    return num_pill === 1 ? 0 : (dist * (num_pill - 1) * 100) + (width * (num_pill -2))
  }