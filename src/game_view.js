import Game from './game.js';
import Menu from './menu.js';

class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.timeOuts = {};
    this.ctx = ctx;
    this.paused = false;
    this.playing = false;
    this.startMenu = new Menu(ctx);
  }

  menu() { 
    this.startMenu.draw();
  }

  start() {
    this.game.squirrels[0].active = true;
    this.timeOuts[3] = setTimeout(() => {
      this.game.liveObstacles[0] = true;
    }, 2500);
    this.animate();

    this.timeOuts[1] = setTimeout(() => {
      this.game.squirrels[1].active = true;
      this.timeOuts[4] = setTimeout(() => {
        this.game.liveObstacles[1] = true;
      }, 2500);
    }, 10000);

    this.timeOuts[2] = setTimeout(() => {
      this.game.squirrels[2].active = true;
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
    debugger;
    this.game.background.ctx.clearRect(0, 0, this.game.DIM_X, this.game.DIM_Y);
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
    this.game = new Game();
    this.game.squirrels.forEach(squirrel => {
      squirrel.active = false;
    })
    this.game.liveObstacles.forEach(obstacle => { obstacle = false })
    this.playing = false;
    this.paused = false;
  }

  bindKeyHandlers() {
    document.addEventListener('keypress', this.menuButtons.bind(this))
  }

  menuButtons(e) {
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