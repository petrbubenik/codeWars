//Sum of Numbers
//https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum( a,b ){
    let output = []
    for(i = Math.min(a,b); i <= Math.max(a,b); i++){
      output.push(i)
    }
   return output.reduce((acc,c) => acc + c,0)
 }