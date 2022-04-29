//Is this a triangle?
//https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

function isTriangle(a,b,c){
      let triangle = [a,b,c].sort((a,b) => a-b)
      return (triangle[0] + triangle[1] > triangle[2])
    }