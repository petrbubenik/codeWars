//String repeat
//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

function repeatStr (n, s) {
    let newStr = '';
    for(let i = 1; i <= n; i++){
        newStr += s;
    }
    return newStr;
  }


//Examples:
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
