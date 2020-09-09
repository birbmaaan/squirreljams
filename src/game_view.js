const Game = require("./game");

function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
  this.squirrel = this.game.addSquirrel();
}

GameView.MOVES = {
  d: 'left',
  f: 'right',   
}

GameView.prototype.bindKeyHandlers = function bindKeyHandlers() {
  const squirrel = this.squirrel;
  document.addEventListener('keypress', (e) => {
    Object.keys(GameView.MOVES).forEach((k) => {
      const move = GameView.MOVES[k];
      if (k === e.key) {squirrel.step(move)};
    });
  })
}

GameView.prototype.start = function() {
  this.bindKeyHandlers();
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