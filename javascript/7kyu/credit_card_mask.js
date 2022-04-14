//Credit Card Mask
//https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

function maskify(cc) {

    let array = cc.split("")
   
    let output = array.length <= 4 ? array : array.slice(array.length - 4)
   
    let final = []
   
    for(i = 0;i < array.length - 4;i++){
   
    final.push("#")
   
    }
   
    return final.concat(output).join("")
   
   }