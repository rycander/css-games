(function () {
  if (typeof Hanoi === "undefined") {
    window.Hanoi = {};
  }
  
  var Widget = window.Hanoi.Widget = function (game, $el) {
    this.game = game;
    this.$el = $el;
    this.from = false;
  };
  
  Widget.prototype.bindEvents = function () {
    var that = this;
    $(".pile").on("click", function (event) {
      var $currentTarget = $(event.currentTarget);
      if (typeof that.from === 'number') {
        that.makeMove($currentTarget.data('id'));
      } else {
        that.from = $currentTarget.data('id');
      }
    });
  };
  
  Widget.prototype.makeMove = function (endPileId) {
    this.game.move(this.from, endPileId);
    this.render();
    this.from = false;
  };
  
  Widget.prototype.play = function () {
    this.render();
  };
  
  Widget.prototype.render = function () {
    this.$el.empty();
    for (var i = 0; i < 3; i++) {
      var $pile = $("<div class='pile' data-id='" + i + "'></div>");
      for (var j = this.game.towers[i].length - 1; j >= 0; j--) {
        var size = this.game.towers[i][j];
        var $disk = $(
          "<div class='disk' data-id='" + size + "'></div>"
        );
        $disk.css("width", size * 30);
        $disk.css(
          "background-color",
          "rgb(" + (255 - size * 55) + "," + 0 + "," + size * 80 + ")"
        );
        $pile.append($disk);
      }
      this.$el.append($pile);
    }
    if (this.game.isWon()) {
      this.$el.append("<span>You've won!</span>");
    }
    this.bindEvents();
  };
})();