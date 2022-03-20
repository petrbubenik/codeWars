//Sum Arrays
//https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

function sum (numbers) {
    let sum = 0;
    numbers.forEach(x => sum += x);
    return sum;
};



// Examples

// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398