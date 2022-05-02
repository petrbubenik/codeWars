//Find the divisors!
//https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

function divisors(integer) {
    let output = []
    for(i = 2; i < integer; i++){
        if(integer % i === 0) output.push(i)
    }
    if(output.length === 0) return `${integer} is prime`;
    else return output;
};