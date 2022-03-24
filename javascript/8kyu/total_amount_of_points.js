//Total amount of points
//https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function points(game) {
    let totalPoints = 0
    for(let i = 0; i < game.length; i++){                       //for each result of the game from array
        let result = game[i].split(':');                        // create new array containing just two numbers (splitted by ':') - [1,0]
        if (result[0] > result [1]) totalPoints += 3            // if first number higher than second - increase totalPoints by 3
        else if (result[0] === result[1]) totalPoints += 1      // if first number equals second - increase totalPoints by 1
        // (result[0] > result[1]) ? totalPoints += 3 : (result[0] === result[1]) ? totalPoints += 1 : 0    //other option of if/else on one row
    }
    return totalPoints
}

points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"];