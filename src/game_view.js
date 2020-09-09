import Game from './game.js';

class GameView {
  constructor(game, ctx) {
    this.game = game;
    // this.game2 = new Game();
    // this.game3 = new Game();
    this.ctx = ctx;
    this.squirrel = this.game.addSquirrel(1);
    this.gameId = '';
    this.obstacleId = '';
    this.moves = {
      f: 'left',
      j: 'right',
    },
    this.moves2 = {
      s: 'left',
      d: 'right',
    },
    this.moves3 = {
      k: 'left',
      l: 'right'
    }
  }

  restart() {
    this.game = new Game(1);
    this.squirrel = this.game.addSquirrel();
    this.squirrel2 = this.game.addSquirrel(2);
    // this.squirrel3 = this.game3.addSquirrel(3);
  }

  bindKeyHandlers() {
    const squirrel = this.squirrel;
    document.addEventListener('keypress', (e) => {
      Object.keys(this.moves).forEach((k) => {
        if (k === e.key) {squirrel.step(this.moves[k])};
      });
    })
  }

  bindKeyHandlers2() {
    const squirrel = this.squirrel2;
    document.addEventListener('keypress', (e) => {
      Object.keys(this.moves2).forEach((k) => {
        if (k === e.key) {squirrel.step(this.moves2[k])};
      });
    })
  }

  bindKeyHandlers3() {
    const squirrel = this.squirrel3;
    document.addEventListener('keypress', (e) => {
      Object.keys(this.moves3).forEach((k) => {
        if (k === e.key) {squirrel.step(this.moves3[k])};
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

    setTimeout(() => {
      this.squirrel2 = this.game.addSquirrel(2);
      this.bindKeyHandlers2();
    }, 1000);
    
    setTimeout(() => {
      this.squirrel3 = this.game.addSquirrel(3);
      this.bindKeyHandlers3();
    }, 2000);
    this.obstacleId = setInterval( function() {
      that.game.addObstacle(1)
    }, 1000)

  }

}

export default GameView;