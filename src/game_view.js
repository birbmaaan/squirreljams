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
      debugger
      Object.keys(this.moves).forEach((k) => {
        const move = this.moves[k];
        if (k === e.key) {squirrel.step(move)};
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