//Mumbling
//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
	let array = s.toLowerCase().split("");
    let output = []
    for(i=0;i<array.length;i++){
        output.push(array[i].toUpperCase() + array[i].repeat(i))
    }
    return output.join("-")
}
