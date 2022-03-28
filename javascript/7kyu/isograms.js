//Isograms
//https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str){
    let array = str.toLowerCase().split("");                    //converts the original string to string of lower case characters
    let newArray = [...new Set(array)];                         //creates newArray of non-duplicate characters
    return (array.length === newArray.length) ? true : false;   //if the length of both arrays match, there were no duplicates (true), otherwise false
  }