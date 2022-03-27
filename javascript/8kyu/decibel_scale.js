//Decibel Scale
//https://www.codewars.com/kata/5612a42e746aa62de100001a/train/javascript

function dBScale(intensity) {
    return (Math.round(10 * Math.log10(intensity/10**-12)))
}