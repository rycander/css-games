(function () {
  if(typeof SnakeGame === "undefined") {
    window.SnakeGame = {};
  }
  
  var Snake = SnakeGame.Snake = function () {
    this.DIRS = {
      'N': [ 0, -1],
      'S': [ 0,  1],
      'E': [ 1,  0],
      'W': [-1,  0]
    };
    this.dir = 'N';
    this.segments = [[10, 10]];
  };
  
  Snake.prototype.move = function () {
    var headPos = this.segments[0];
    var newPos = this.coordPlus(headPos, this.DIRS[this.dir]);
    this.segments.shift(newPos);
    this.segments.pop();
  };
  
  Snake.prototype.turn = function (newDir) {
    this.dir = newDir;
  };
  
  Snake.prototype.coordPlus = function (coord1, coord2) {
    var x = coord2[0] + coord2[0];
    var y = coord2[1] + coord2[1];
    return [x, y];
  };
})();