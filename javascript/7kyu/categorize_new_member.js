//Categorize New Member
//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

function openOrSenior(data){
    let output = [];
    data.forEach(item => {
        (item[0] >= 55) & (item[1] > 7) ? output.push('Senior') : output.push('Open')
    });
    return output;
}


// Example

// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
