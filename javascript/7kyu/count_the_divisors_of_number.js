//Count the dicisors of a number
//https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

function getDivisorsCnt(n){
    let output = 0  
    for(i = 1; i <= n; i++){
        if(n % i === 0) output++
      }
    return output
  }