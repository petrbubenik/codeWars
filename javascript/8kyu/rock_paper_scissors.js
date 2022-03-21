//Rock, Paper, Scissors!
//https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

let game = {
    'rock' : {
      'rock' : 'Draw!',
      'scissors' : 'Player 1 won!',
      'paper' : 'Player 2 won!',
    },
    'scissors' : {
      'rock' : 'Player 2 won!',
      'scissors' : 'Draw!',
        'paper' : 'Player 1 won!',
    },
    'paper' : {
      'rock' : 'Player 1 won!',
      'scissors' : 'Player 2 won!',
      'paper' : 'Draw!',
    }
  };

const rps = (p1, p2) => {return game[p1][p2]};
