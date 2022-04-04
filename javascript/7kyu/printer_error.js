//Printer Error
//https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

function printerError(s) {
    let array = s.split("");
    let output = array.filter(x => x.charCodeAt(0) > 109)   //ASCII code for 'm' = 109
    return `${output.length}/${array.length}`;
}