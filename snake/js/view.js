(function () {
  if(typeof SnakeGame === "undefined"){
    window.SnakeGame = {};
  }
  
  var View = SnakeGame.View = function (game, $el){
    this.game = game;
    this.$el = $el;
  };
})();