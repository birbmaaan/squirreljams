const Game = require("./game");

function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
  // this.game.addObstacles();
}

GameView.prototype.start = function() {
   const that = this;
   setInterval( function() {
     that.game.moveObjects();
     that.game.removeObjects();
    //  that.game.addObstacles();
     that.game.draw(that.ctx);
   }, 20);

   setInterval( function() {
     that.game.addObstacle()
   }, 1000)
}

module.exports = GameView;