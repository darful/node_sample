const playerOneKey = 'Player1';
const playerTwoKey = 'Player2';

const playerMap = {};
playerMap[playerOneKey] = -1;
playerMap[playerTwoKey] = 1;

class Game {
  constructor(size) {
    this.size = size;
    this.stateMap = {};
    this.board = [];

    for(let i = 0; i < this.size; i++) {
      this.board[i] = [];
      this.stateMap['row' + i] = 0;
      for(let j = 0; j < this.size; j++) {
        this.board[i][j] = 0;
        this.stateMap['column' + j] = 0;
      }
    }

    this.stateMap['diagonal'] = 0;
  }

  move(row, column, playerKey) {
    this.board[row][column] = playerMap[playerKey];
    updateStateMap(row, column, playerMap[playerKey], this.stateMap);

    printBoard(this.board, this.stateMap, this.size);

    if(foundWinner(row, column, playerMap[playerKey], this.size, this.stateMap)) {
      console.log(playerKey + " WINS!");
      process.exit(0);
    }
  }

  getPlayerOne() {
    return playerOneKey;
  }

  getPlayerTwo() {
    return playerTwoKey;
  }
}

function updateStateMap(row, column, playerMarker, stateMap) {
  stateMap['row' + row] = stateMap['row' + row] + playerMarker;
  stateMap['column' + column] = stateMap['column' + column] + playerMarker;

  if(row === column) {
    stateMap['diagonal'] = stateMap['diagonal'] + playerMarker
  }
}

function foundWinner(row, column, playerMarker, size, stateMap) {
  if(stateMap['row' + row] === (size * playerMarker) ||
    stateMap['diagonal'] === (size * playerMarker)) {

    return true;
  } else {
    return false;
  }
}

function printBoard(board, stateMap, size) {
  console.log('Game Board');

  for(let i = 0; i < size; i++) {
    console.log(board[i]);
  }

  console.log('\n');
  console.log('State Map');
  console.log(stateMap);
  console.log('\n');
}

let game = new Game(3);

game.move(0,0,game.getPlayerOne());
game.move(0,1,game.getPlayerTwo());
game.move(1,0,game.getPlayerOne());
game.move(2,1,game.getPlayerTwo());
game.move(1,1,game.getPlayerOne());
game.move(2,2,game.getPlayerTwo());
game.move(1,2,game.getPlayerOne());