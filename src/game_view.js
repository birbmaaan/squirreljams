import Game from './game.js';
import Menu from './menu.js';
import Pause from './pause.js';
import SquirrelSprite from './sprites/squirrel_sprite';

class GameView {
  constructor(ctx) {
    this.paused = false;
    this.game = new Game(ctx, this.paused);
    this.ctx = ctx;
    this.playing = false;
    this.activeSquirrels = 0;
    this.startMenu = new Menu(ctx);
    this.pauseMenu = new Pause();
    this.frames = 0;
    this.bindKeyHandlers();
  }

  drawSprite() {
    const sprite = new SquirrelSprite(this.ctx);
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
    this.animate();
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

  clearCache() {
    this.game = new Game(this.ctx);
    this.game.background.clear();
    this.game.squirrels.forEach(squirrel => {
      squirrel.active = false;
    })
    this.game.liveObstacles.forEach(obstacle => { obstacle = false })
    this.playing = false;
    this.paused = false;
    this.activeSquirrels = 0;
    this.score = 0;
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
      this.drawScore();
      if (this.frames <= 1350) this.checkActives();
      this.frames++;
      requestAnimationFrame(this.animate.bind(this));

    }
  }

  checkActives() {
    switch (this.frames) {
      case 600:
        this.game.squirrels[1].active = true;
        this.activeSquirrels++;
        break;
      case 1200:
        this.game.squirrels[2].active = true;
        this.activeSquirrels++;
        break;
      case 150:
        this.game.liveObstacles[0] = true;
        break;
      case 750:
        this.game.liveObstacles[1] = true;
        break;
      case 1350:
        this.game.liveObstacles[2] = true;
      default:
        break;
    }
  }

  drawScore() {
    this.ctx.fillStyle = 'white';
    this.ctx.textAlign = 'left';
    const currentScore = Math.floor(this.frames / 60);
    this.ctx.fillText(`distance: ${currentScore}`, 80, 40);
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