//Sum of odd numbers
//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

function rowSumOddNumbers(n) {
    let startNumber = 0
    let total = 0
    for(i = 1; i < n; i++){
      startNumber += i
    }
    for(i = startNumber * 2 + 1; i <= (startNumber * 2 + 1) + (n - 1) * 2; i += 2){
      total += i
    }
    return total
  }