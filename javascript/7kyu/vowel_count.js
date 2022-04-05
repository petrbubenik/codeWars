//Vowel count
//https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
    let vowels = ['a','e','i','o','u'];
    let strVowels = str.split("").filter(x => vowels.indexOf(x) !== -1)     //split str to array and filter only vowels (their index in vowels is some number) to strVowels
    return strVowels.length;
}