import Game from './game';

class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.squirrel = this.game.addSquirrel();
    this.gameId = '';
    this.obstacleId = '';
    this.moves = {
      d: 'left',
      f: 'right',
    }
  }

  restart() {
    this.game = new Game();
    this.squirrel = this.game.addSquirrel();
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
    this.gameId = setInterval( function() {
      that.game.moveObjects();
      that.game.removeObjects();
      that.game.draw(that.ctx);
      if (that.game.detectCollision()) {
        alert('you died');
        that.restart();
      }
    }, 20);

    this.obstacleId = setInterval( function() {
      that.game.addObstacle()
    }, 1000)

  }

}

export default GameView;