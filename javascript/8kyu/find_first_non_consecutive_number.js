// Find the first non-consecutive number
//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

function firstNonConsecutive (arr) {
    let nc_number = null;
    for (i = arr.length - 1; i > 0; i--){
      if(arr[i] - arr[i-1] !== 1) nc_number = arr[i];
    }
    return nc_number;
}