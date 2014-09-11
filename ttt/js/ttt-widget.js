(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var Widget = TTT.Widget = function (game, $el) {
    this.game = game;
    this.$el = $el;
    this.color = 'red';
  };

  Widget.prototype.bindEvents = function () {
    var $squares = $(".square");
    var that = this;
    $squares.on("click", function(event) {
      var $currentTarget = $(event.currentTarget);
      that.makeMove($currentTarget);
    });
  };
  
  Widget.prototype.convertToCoord = function (number) {
    return[
      Math.floor(number / 3),
      number % 3
    ];
  };

  Widget.prototype.makeMove = function ($square) {
    var pos = this.convertToCoord($square.data("id"));
    // console.log("id: " + $square.data("id") + " pos: " + pos);
    if (this.game.board.isEmptyPos(pos) && !this.game.isOver()) {
      $square.css("background-color", this.color);
      this.swapColor();
      this.game.playMove(pos);
      if (this.game.isOver()) {
        // console.log(this.game.board.winner());
        if (this.game.winner() === 'x') {
          this.$el.append("<span>Red is the winner.</span>");
        } else if (this.game.winner() === 'o') {
          this.$el.append("<span>Green is the winner.</span>");
        } else {
          this.$el.append("<span>YOU BOTH LOSE.</span>");
        }
      }
    }
  };

  Widget.prototype.play = function () {
    this.setupBoard();
    this.bindEvents();
  };

  Widget.prototype.setupBoard = function () {
    this.$el.empty();
    for (var i = 0; i < 9; i++) {
      var $square = $("<div class='square' data-id='" + i + "'></div>");
      this.$el.append($square);
    }
  };
  
  Widget.prototype.swapColor = function () {
    if (this.color === 'red') {
      this.color = 'green';
    } else {
      this.color = 'red';
    }
  };
})();
