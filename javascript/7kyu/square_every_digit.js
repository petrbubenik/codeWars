//Square every digit
//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num){
    let array = num.toString().split("");
    let output = array.map(x => x * x)
    return Number(output.join(""))
}

