(function () {
  if(typeof SnakeGame === "undefined") {
    window.SnakeGame = {};
  }
  
  var Board = SnakeGame.Board = function () {
    // this.createBoard();
    this.snake = new SnakeGame.Snake();
  };
  
  Board.prototype.createGrid = function () {
     var grid = [];
     for (var i = 0; i < 16; i++) {
       grid.push(new Array(16));
     }
     for (var j = 0; j < this.snake.segments.length; j++) {
       var segment = this.snake.segments[j]; 
       grid[segment[0]][segment[1]] = "S";
     }
     return grid;
  };
  
  Board.prototype.render = function () {
    var str = '';
    var grid = this.createGrid();
    
    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 16; j++) {
        if (typeof grid[i][j] === 'undefined') {
          str += '.';
        } else {
          str += grid[i][j];
        }
      }
      str += "\n";
    }
    console.log(str);
  };
})();