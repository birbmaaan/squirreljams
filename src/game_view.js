import Game from './game.js';
import Menu from './menu.js';
import Pause from './pause.js';
import SquirrelSprite from './sprites/squirrel_sprite';

class GameView {
  constructor(ctx) {
    this.game = new Game(ctx);
    this.timeOuts = {};
    this.ctx = ctx;
    this.paused = false;
    this.playing = false;
    this.activeSquirrels = 0;
    this.startMenu = new Menu(ctx);
    this.pauseMenu = new Pause();

    this.bindKeyHandlers();
  }

  drawSprite() {
    const sprite = new SquirrelSprite(this.ctx);
    // debugger;
    sprite.draw();
  }

  menu() { 
    if (!this.playing) {
      this.startMenu.draw();
      requestAnimationFrame(this.menu.bind(this));
    }
  }

  start() {
    this.game.squirrels[0].active = true;
    this.activeSquirrels++;
    this.timeOuts[3] = setTimeout(() => {
      this.game.liveObstacles[0] = true;
    }, 2500);
    this.animate();

    this.timeOuts[1] = setTimeout(() => {
      this.game.squirrels[1].active = true;
      this.activeSquirrels++;
      this.timeOuts[4] = setTimeout(() => {
        this.game.liveObstacles[1] = true;
      }, 2500);
    }, 10000);

    this.timeOuts[2] = setTimeout(() => {
      this.game.squirrels[2].active = true;
      this.activeSquirrels++;
      this.timeOuts[5] = setTimeout(() => {
        this.game.liveObstacles[2] = true;
      }, 2500);
    }, 20000);
  }

  restart() {
    this.clearScreen();
    this.clearCache();
    this.menu();
  }

  clearScreen() {
    this.ctx.clearRect(0, 0, this.game.DIM_X, this.game.DIM_Y);
    this.game.trees[0].ctx.clearRect(0, 0, this.game.DIM_X, this.game.DIM_Y);
    this.game.background.clear();
    this.game.sqrlCtx.clearRect(0, 560, this.game.DIM_X, this.game.DIM_Y);
  }

  animate() {
    if (!this.paused && this.playing) {
      if (this.game.detectCollision()) {
        alert('you died');
        this.restart();
      }

      for (let i = 0; i <= 2; i++) {
        if (this.game.squirrels[i].active && this.game.liveObstacles[i]) {
          this.game.addObstacle(i);
        }
      }
      this.game.moveObjects();
      this.game.removeObjects();
      this.game.draw(this.ctx);
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  clearCache() {
    Object.keys(this.timeOuts).forEach((timeout) => {
      clearTimeout(this.timeOuts[timeout]);
    })
    this.game = new Game(this.ctx);
    this.game.background.clear();
    this.game.squirrels.forEach(squirrel => {
      squirrel.active = false;
    })
    this.game.liveObstacles.forEach(obstacle => { obstacle = false })
    this.playing = false;
    this.paused = false;
    this.activeSquirrels = 0;
  }

  bindKeyHandlers() {
    document.addEventListener('keypress', this.controlButtons.bind(this))
  }

  controlButtons(e) {
    if (this.playing) {
      switch (e.key) {
        case " ":
          if (this.paused) {
            this.paused = false;
            this.pauseMenu.ctx.clearRect(0, 0, 1280, 720);
            this.animate();
          } else {
            this.paused = true;
            this.pauseMenu.draw(this.activeSquirrels);
          }
          break;
     
        case "d":
          if (this.game.squirrels[0].active && !this.paused) {
            this.game.squirrels[0].step("left");
          }
          break;
        case "f":
          if (this.game.squirrels[0].active && !this.paused) {
            this.game.squirrels[0].step("right");
          }
          break;
        case "a":
          if (this.game.squirrels[1].active && !this.paused) {
            this.game.squirrels[1].step("left");
          }
          break;
        case "s":
          if (this.game.squirrels[1].active && !this.paused) {
            this.game.squirrels[1].step("right");
          }
          break;
        case "j":
          if (this.game.squirrels[2].active && !this.paused) {
            this.game.squirrels[2].step("left");
          }
          break;
        case "k":
          if (this.game.squirrels[2].active && !this.paused) {
            this.game.squirrels[2].step("right");
          }
          break;

          default:
            break;
          }
    } else {
      switch (e.key) {
        case " ":
          this.playing = true;
          this.start();
          break;
        default:
          break;
      }
    }
  }

}

export default GameView;