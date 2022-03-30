//Twice as old
//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return dadYearsOld === 2 * sonYearsOld ? 0 : Math.abs(dadYearsOld - 2 * sonYearsOld);
  }