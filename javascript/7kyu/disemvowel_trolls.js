//Disemvowel Trolls
//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
    vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let output = Array.from(str).filter(x => vowels.indexOf(x) === -1);
    return output.join("");
}