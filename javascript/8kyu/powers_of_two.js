//Powers of 2
//https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

function powersOfTwo(n){
    let output = [];
    for(i = 0; i <= n; i++) output.push(2**i);
    return output;
  }