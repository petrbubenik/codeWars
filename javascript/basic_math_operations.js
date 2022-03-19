//Basic Mathematical Operations
//https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

function basicOp(operation, value1, value2){
    switch(operation){
        case '+':
            return(value1 + value2);
            break;
        case '-':
            return(value1 - value2);
            break;
        case '*':
            return(value1 * value2);
            break;
        case '/':
            return(value1 / value2);
            break;
    }
}





// Examples(Operator, value1, value2) --> output

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
