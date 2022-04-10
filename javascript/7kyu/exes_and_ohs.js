//Exes and Ohs
//https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function XO(str) {
    let output = str.toLowerCase().split('').reduce((acc,c) => {
        if(!acc[c]) acc[c] = 0;
        acc[c]++;
        return acc
    },{})
    return output.x === output.o
}

// //Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
