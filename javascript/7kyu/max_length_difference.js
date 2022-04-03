//Maximum length difference
//https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

function mxdiflg(a1,a2) {
    if (a1 == 0 || a2 == 0) return -1;
    else{
    let minA1 = a1.reduce((acc,c) =>{
        return acc.length >= c.length ? c : acc;
    })

    let maxA1 = a1.reduce((acc,c) =>{
        return acc.length >= c.length ? acc : c;
    })

    let minA2 = a2.reduce((acc,c) =>{
        return acc.length >= c.length ? c : acc;
    })

    let maxA2 = a2.reduce((acc,c) =>{
        return acc.length >= c.length ? acc : c;
    })
    return Math.max((maxA1.length - minA2.length),(maxA2.length - minA1.length));
    }
}