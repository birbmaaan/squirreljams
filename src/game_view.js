import Game from './game';

class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.squirrel = this.game.addSquirrel();
    this.moves = {
      d: 'left',
      f: 'right',
    }
  }


  bindKeyHandlers() {
    const squirrel = this.squirrel;
    document.addEventListener('keypress', (e) => {
      Object.keys(this.moves).forEach((k) => {
        if (k === e.key) {squirrel.step(this.moves[k])};
      });
    })
  }

  start() {
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

}

export default GameView;