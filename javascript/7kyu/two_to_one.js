//Two to One
//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
    let array = [...s1,...s2]
    let output = [...new Set(array)].sort((a,b) => a > b ? 1 : -1)
    return output.join("")
  }