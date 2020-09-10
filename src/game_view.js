import Game from './game.js';
import Menu from './menu.js';

class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.gameState = {};
    this.ctx = ctx;
    this.paused = false;
    this.playing = false;
    this.squirrel = this.game.squirrels[0];
    this.squirrel2 = this.game.squirrels[1];
    this.squirrel3 = this.game.squirrels[2];
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

  menu() { 
    // const menu = new Menu();
    console.log('this is the menu')
    // menu.showText();
  }

  start() {
    this.squirrel.active = true;
    this.animate();

    this.gameState[2] = setTimeout(() => {
      this.squirrel2.active = true;
    }, 10000);

    this.gameState[4] = setTimeout(() => {
      this.squirrel3.active = true;
    }, 20000);
  }

  restart() {
    debugger
    this.ctx.clearRect(0, 0, this.game.DIM_X, this.game.DIM_Y);
    this.game = new Game();
    this.playing = false;
    this.paused = false;
    this.menu();
  }

  menuButtons(e) {
    debugger;
    if (this.playing) {
      switch (e.key) {
        case " ":
          if (this.paused) {
            this.paused = false;
            this.animate();
          } else {
            this.paused = true;
          }
          break;
     
        case "d":
          if (this.squirrel.active && !this.paused) {
            this.squirrel.step("left");
          }
          break;
        case "f":
          if (this.squirrel.active && !this.paused) {
            this.squirrel.step("right");
          }
          break;
        case "a":
          if (this.squirrel2.active && !this.paused) {
            this.squirrel2.step("left");
          }
          break;
        case "s":
          if (this.squirrel2.active && !this.paused) {
            this.squirrel2.step("right");
          }
          break;
        case "j":
          if (this.squirrel3.active && !this.paused) {
            this.squirrel3.step("left");
          }
          break;
        case "k":
          if (this.squirrel3.active && !this.paused) {
            this.squirrel3.step("right");
          }
          break;

          default:
            break;
          }
    } else {
      switch (e.key) {
        case " ":
          debugger;
          this.playing = true;
          this.start();
          break;
        default:
          break;
      }
    }
  }

  bindKeyHandlers() {
    document.addEventListener('keypress', this.menuButtons.bind(this))
  }

  animate() {
    if (!this.paused && this.playing) {
      if (this.squirrel.active) this.game.addObstacle(1);
      if (this.squirrel2.active) this.game.addObstacle(2);
      if (this.squirrel3.active) this.game.addObstacle(3);
      this.game.moveObjects();
      this.game.removeObjects();
      this.game.draw(this.ctx);
      requestAnimationFrame(this.animate.bind(this));
    }
  }


}

export default GameView;