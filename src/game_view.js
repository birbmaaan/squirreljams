import Game from './game.js';

class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.gameState = {};
    this.ctx = ctx;
    this.paused = false;
    this.moves = {
      d: 'left',
      f: 'right',
    },
    this.moves2 = {
      a: 'left',
      s: 'right',
    },
    this.moves3 = {
      j: 'left',
      k: 'right'
    }
  }

  restart() {
    debugger
    this.ctx.clearRect(0, 0, this.game.DIM_X, this.game.DIM_Y);
    this.start();
  }

  keyPress(e, squirrel, moves) {
    Object.keys(moves).forEach((k) => {
      if (k === e.key && !this.paused) { squirrel.step(moves[k]) };
    });
  }

  pauseGame(e) {
    debugger
    if (e.key === " " && this.paused === true) {
      this.paused = false
      this.animate();
    } else if (e.key === ' ' && this.paused === false) {
      this.paused = true;
    }
  }

  bindKeyHandlers() {
    const squirrel = this.game.squirrels[0];
    document.addEventListener(
      'keypress', 
      (e) => this.keyPress(e, squirrel, this.moves),
      false)
    document.addEventListener('keypress', (e) => this.pauseGame(e));
  }

  bindKeyHandlers2() {
    const squirrel = this.game.squirrels[1];
    document.addEventListener(
      'keypress', 
      (e) => this.keyPress(e, squirrel, this.moves2),
      false)
  }

  bindKeyHandlers3() {
    const squirrel = this.game.squirrels[2];
    document.addEventListener(
      'keypress',
      (e) => this.keyPress(e, squirrel, this.moves3),
      false)
  }

  reviveSquirrel() {

  }

  // waitWhilePaused() {
  //   while (this.paused) {
    
  //   }
  //   this.animate();
  // }

  animate() {
    const that = this;
    if (!this.paused) {
      this.game.addObstacle(1);
      if (this.game.squirrels[1]) this.game.addObstacle(2);
      if (this.game.squirrels[2]) this.game.addObstacle(3);
      this.game.moveObjects();
      this.game.removeObjects();
      this.game.draw(this.ctx);
      requestAnimationFrame(this.animate.bind(this));
    }

  }

  start() {
    this.squirrel = this.game.addSquirrel(1);
    this.bindKeyHandlers();
    const that = this;
    // this.gameState[1] = setInterval( function() {
    //   if (!that.paused) {
    //     that.game.moveObjects();
    //     that.game.removeObjects();
    //     that.game.draw(that.ctx);
    //   }
    //   // if (that.game.detectCollision()) {
    //   //   alert('you died');
    //   //   debugger;
    //   //   that.restart();
    //   // }
    // }, 20);
    this.animate();

    this.gameState[2] = setTimeout(() => {
      this.squirrel2 = this.game.addSquirrel(2);
      this.bindKeyHandlers2();
    }, 10000);
    
    this.gameState[4] = setTimeout(() => {
      this.squirrel3 = this.game.addSquirrel(3);
      this.bindKeyHandlers3();
    }, 20000);
  }

}

export default GameView;