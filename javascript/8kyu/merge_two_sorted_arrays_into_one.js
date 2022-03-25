//Merge two sorted arrays into one
//https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

function mergeArrays(arr1, arr2) {
    let newArray = arr1.concat(arr2);
    let uniqueArray = [...new Set(newArray)]
    return uniqueArray.sort((a,b) => a-b);
}


// Examples

// arr1 = [1, 2, 3, 4, 5];
// arr2 = [6, 7, 8, 9, 10];
// mergeArrays(arr1, arr2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr3 = [1, 3, 5, 7, 9];
// arr4 = [10, 8, 6, 4, 2];
// mergeArrays(arr3, arr4);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr5 = [1, 3, 5, 7, 9, 11, 12];
// arr6 = [1, 2, 3, 4, 5, 10, 12];
// mergeArrays(arr5, arr6);  // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
