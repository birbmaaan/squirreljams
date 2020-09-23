import Game from './game.js';
import Menu from './menu.js';
import Pause from './pause.js';
import Sound from './sound';
import ControlsMenu from './controls_menu';

class GameView {
  constructor(ctx) {
    this.paused = false;
    this.game = new Game(ctx, this.paused);
    this.ctx = ctx;
    this.playing = false;
    this.dead = false;
    this.startMenu = new Menu(ctx);
    this.pauseMenu = new Pause();
    this.controlsMenu = new ControlsMenu();
    this.frames = 0;
    this.muted = false;
    this.firstClick = 0;

    this.gameMusic = new Sound("game-music");
    this.menuMusic = new Sound("menu-music");
    this.beep = new Sound("beep-music", "sfx");
    this.boop = new Sound('lose-music', "sfx");

    this.bindKeyHandlers();
  }

  muteSound() {
    const sounds = document.querySelectorAll('video, audio')
    this.beep.playSFX();
    this.muted = this.muted ? false : true;
    sounds.forEach(sound => sound.muted = this.muted);
  }

  drawControlsMenu()  {
    this.controlsMenu.draw();
  }

  menu() { 
    if (!this.playing) {
      if (this.firstClick > 0) this.menuMusic.play();
      this.startMenu.draw();
      requestAnimationFrame(this.menu.bind(this));
    }
  }

  start() {
    this.menuMusic.stop();
    this.gameMusic.restart();
    this.gameMusic.play();
    this.game.squirrels[0].active = true;
    this.animate();
  }

  restart() {
    this.clearScreen();
    this.clearCache();
    this.boop.stop();
    this.menuMusic.restart();
    this.menu();
  }

  clearScreen() {
    this.ctx.clearRect(0, 0, this.game.DIM_X, this.game.DIM_Y);
    this.pauseMenu.ctx.clearRect(0, 0, this.game.DIM_X, this.game.DIM_Y);
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
    this.dead = false;
    this.frames = 0;
  }

  gameOver() {
    this.gameMusic.stop();
    this.boop.play();
    this.dead = true;
    this.paused = true;
    this.pauseMenu.gameOver();
  }

  animate() {
    if (!this.paused && this.playing) {
      if (this.game.detectCollision()) {
        this.gameOver();
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
      if (this.frames <= 1900) this.checkActives();
      this.frames++;
      requestAnimationFrame(this.animate.bind(this));

    }
  }

  checkActives() {
    switch (this.frames) {
      case 570:
        this.game.squirrels[2].active = true;
        break;
      case 1720:
        this.game.squirrels[1].active = true;
        break;
      case 150:
        this.game.liveObstacles[0] = true;
        break
      case 720:
        this.game.liveObstacles[2] = true;
        break;
      case 1870:
        this.game.liveObstacles[1] = true;
      default:
        break;
    }
  }

  drawScore() {
    this.ctx.fillStyle = 'white';
    this.ctx.textAlign = 'left';
    const currentScore = Math.floor(this.frames / 60);
    // this.ctx.fillText(`distance: ${currentScore}`, 80, 40);
    this.ctx.fillText(`distance: ${currentScore}`, 340, 710);
  }

  bindKeyHandlers() {
    document.addEventListener('keypress', this.controlButtons.bind(this))
  }

  controlButtons(e) {
    if (e.key === 'm') {
      this.muteSound();
    }

    if (this.firstClick === 0) {
      switch (e.key) {
        case " ":
          this.firstClick++;
          this.controlsMenu.ctx.clearRect(0, 0, 1280, 720);
          this.menu();
          break;
        default:
          break;
      }
    } else if (this.dead) {
      switch (e.key) {
        case " ":
          this.beep.playSFX();
          this.restart();
          break;
        default:
          break;
      }
    } else if (this.playing) {
      switch (e.key) {
        case " ":
          this.beep.playSFX();
          if (this.paused) {
            this.paused = false;
            this.pauseMenu.ctx.clearRect(0, 0, 1280, 720);
            this.animate();
            this.gameMusic.play();
          } else {
            this.paused = true;
            this.pauseMenu.draw();
            this.gameMusic.stop();
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
          this.beep.playSFX();
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