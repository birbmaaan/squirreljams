/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Background {
  constructor() {
    const background = document.getElementById("game-background");
    this.ctx = background.getContext('2d');
    this.backgroundImage = document.getElementById('background-image');
    this.imgHeight = 0;
  }

  draw() {
    const scrollSpeed = 0.25;
    this.ctx.clearRect(0, 0, 1280, 720);
    this.ctx.drawImage(this.backgroundImage, 0, this.imgHeight, 1280, 720);
    this.ctx.drawImage(this.backgroundImage, 0, this.imgHeight - 720, 1280, 720);
    this.imgHeight += scrollSpeed;
    if (this.imgHeight === 720) this.imgHeight = 0;
  }

  clear() {
    this.ctx.clearRect(0, 0, 1280, 720);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Background);

/***/ }),

/***/ "./src/controls_menu.js":
/*!******************************!*\
  !*** ./src/controls_menu.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ControlsMenu {
  constructor() {
    const pauseCanvas = document.getElementById('game-pause');
    this.ctx = pauseCanvas.getContext('2d');
  }

  draw() {
    ctx.beginPath();
    ctx.rect(0, 0, 1280, 720);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();

    this.ctx.fillStyle = "white";
    this.ctx.font = 'bold 30px titlefont';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Take control of your squirrel and avoid the branches', 640, 80);
    this.ctx.fillText("Be careful! Where there's one squirrel, there are bound to be more", 640, 140);
    this.ctx.fillText('Move all the way to one side to jump off the tree and around branches', 640, 200);
    
    this.ctx.fillText('~ Controls ~', 640, 280);
    this.ctx.fillText('First Squirrel............d f', 640, 320);
    this.ctx.fillText('Second Squirrel........j k', 640, 360);
    this.ctx.fillText('Third Squirrel..........a s', 640, 400);
    
    this.ctx.fillText('Pause.....................space', 640, 460);
    this.ctx.fillText('Sound on/off................m', 640, 500);
    this.ctx.fillText('Pause anytime for controls', 640, 600);
    this.ctx.fillText("press space to continue", 640, 680);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ControlsMenu);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _obstacles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obstacles.js */ "./src/obstacles.js");
/* harmony import */ var _squirrel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squirrel.js */ "./src/squirrel.js");
/* harmony import */ var _treetrunks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./treetrunks.js */ "./src/treetrunks.js");
/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background.js */ "./src/background.js");





class Game {
  constructor(ctx, paused) {
    this.DIM_X = 1280;
    this.DIM_Y = 720;
    this.NUM_OBSTACLES = 30;
    this.paused = paused;

    this.liveObstacles = [false, false, false];
    this.squirrels = [];
    this.trees = [];
    this.background = new _background_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.obstacles = {
      0: [],
      1: [],
      2: []
    };
    this.frameCount = 0;
    this.currentLoopIndex = 0;
    this.sqrlCtx = this.getSquirrelCanvas();
    this.ctx = ctx;
    for (let i = 0; i <= 2; i++) {
      this.add(new _squirrel_js__WEBPACK_IMPORTED_MODULE_1__["default"](i, this.sqrlCtx, paused));
      this.trees.push(new _treetrunks_js__WEBPACK_IMPORTED_MODULE_2__["default"](i));
    };
  }

  getSquirrelCanvas() {
    const squirrelCanvas = document.getElementById('game-squirrels')
    const ctx = squirrelCanvas.getContext('2d');
    return ctx;
  }
  
  add(object) {
    if (object instanceof _obstacles_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      this.obstacles[object.num].push(object);
    } else if (object instanceof _squirrel_js__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      this.squirrels.push(object);
    } else {
      throw new Error('unknown object');
    }
  }
  
  addObstacle(num) {
    const that = this;
    let length = this.obstacles[num].length;
    let minDistance = Math.floor((Math.random() * 200) + 200);
    if (that.obstacles[num].length === 0 ||
        (length < that.NUM_OBSTACLES/3 &&
        that.obstacles[num][length - 1].pos[1] > minDistance)) {
      that.add(new _obstacles_js__WEBPACK_IMPORTED_MODULE_0__["default"](num, that.ctx));
    }
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.background.draw();
    Object.keys(this.obstacles).forEach(num => {
      this.obstacles[num].forEach(tree => tree.draw(ctx)); 
    });

    for (let i = 0; i < 3; i++) {
      if (this.squirrels[i].active) this.trees[i].draw();
    }

    this.frameCount++;
    if (this.frameCount === 5) {
      this.sqrlCtx.clearRect(0, 560, 1280, 720);
      for (let i = 0; i < 3; i++) {
        if (this.squirrels[i].active) {
          this.squirrels[i].draw(ctx);
        };
      }
      this.frameCount = 0;
    }
  }
  
  moveObjects() {
    Object.keys(this.obstacles).forEach(num => {
      this.obstacles[num].forEach(branch => branch.move());
    })
  }
  
  removeObjects() {
    Object.keys(this.obstacles).forEach(num => {
      let currentObstacles = [];
      this.obstacles[num].forEach(branch => {
        if (branch.pos[1] < 800) {
          currentObstacles.push(branch);
        }
      })
      this.obstacles[num] = currentObstacles;
    })
  }

  detectCollision() {
    let dead = false;
    this.squirrels.forEach(squirrel => {
      Object.keys(this.obstacles).forEach(num => {
        this.obstacles[num].forEach(branch => {
          if (this.beenHit(squirrel, branch)) {
            dead = true;
          }
        })
      })
    })
    return dead;
  }

  beenHit(squirrel, branch) {
    if (squirrel.pos[0] < branch.pos[0] + branch.size[0] &&
        squirrel.pos[0] + squirrel.size[0] > branch.pos[0] &&
        squirrel.pos[1] < branch.pos[1] + branch.size[1] &&
        squirrel.pos[1] + squirrel.size[1] > branch.pos[1]) {
      return true;
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _pause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pause.js */ "./src/pause.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sound */ "./src/sound.js");
/* harmony import */ var _controls_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls_menu */ "./src/controls_menu.js");






class GameView {
  constructor(ctx) {
    this.paused = false;
    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, this.paused);
    this.ctx = ctx;
    this.playing = false;
    this.dead = false;
    this.startMenu = new _menu_js__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
    this.pauseMenu = new _pause_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.controlsMenu = new _controls_menu__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.frames = 0;
    this.muted = false;
    this.firstClick = 0;

    this.gameMusic = new _sound__WEBPACK_IMPORTED_MODULE_3__["default"]("game-music");
    this.menuMusic = new _sound__WEBPACK_IMPORTED_MODULE_3__["default"]("menu-music");
    this.beep = new _sound__WEBPACK_IMPORTED_MODULE_3__["default"]("beep-music", "sfx");
    this.boop = new _sound__WEBPACK_IMPORTED_MODULE_3__["default"]('lose-music', "sfx");

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
    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx);
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
    this.ctx.fillText(`distance: ${currentScore}`, 80, 40);
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

/* harmony default export */ __webpack_exports__["default"] = (GameView);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view.js */ "./src/game_view.js");
/* harmony import */ var _sprites_squirrelicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprites/squirrelicon */ "./src/sprites/squirrelicon.js");



document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d')
  window.ctx = ctx;

  const favicon = new _sprites_squirrelicon__WEBPACK_IMPORTED_MODULE_1__["default"](true);
  window.onload = () => {
    const newGame = new _game_view_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
    newGame.drawControlsMenu();
    setInterval(() => {favicon.step(0, 0)}, 300);
  }
})

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Menu {
  constructor(ctx) {
    this.ctx = ctx;
    this.menuImage = document.getElementById('menu-image');
    this.imgWidth = 1440;
  }

  draw() {
    const scrollSpeed = .5;
    this.ctx.drawImage(this.menuImage, this.imgWidth, 0, 1440, 720);
    this.ctx.drawImage(this.menuImage, this.imgWidth - 1440, 0, 1440, 720);

    this.imgWidth -= scrollSpeed;
    if (this.imgWidth === 0) this.imgWidth = 1440;
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = 'center';
    this.ctx.font = "bold 100px titlefont";
    this.ctx.fillText("Squirrel jamS", 640, 300);

    this.ctx.font = 'bold 35px titlefont';
    this.ctx.fillText("press space to start", 640, 400)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/obstacles.js":
/*!**************************!*\
  !*** ./src/obstacles.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sprites_branch_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites/branch_sprite */ "./src/sprites/branch_sprite.js");


const COLOR = 'blue';
const POS = {
  0: [540, 665, 565],
  1: [120, 245, 145],
  2: [960, 1085, 985]}


class Obstacle {
  constructor(obstacleNo, ctx) {
    this.speed = 5;
    this.num = obstacleNo;
    this.color = COLOR;

    this.setRandomBranch(obstacleNo);

    this.sprite = new _sprites_branch_sprite__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, this.side);
  }

  move() {
    let position = this.pos;
    let speed = this.speed;

    this.pos = [position[0], position[1] + speed];
  }

  setRandomBranch(obstacleNo) {
    let side;
    let x = Math.floor(Math.random() * 3);
    if (x === 0)  {
      x = POS[obstacleNo][0];
      side = 'Left';
      this.size = [80, 30];
    } else if (x === 1) {
      x = POS[obstacleNo][1];
      side = 'Right';
      this.size = [80, 30];
    } else {
      x = POS[obstacleNo][2];
      side = 'Middle';
      this.size = [150, 30];
    }

    let size = Math.random();
    size = size > 0.5 ? "big" : "small";
    this.side = size + side;
    this.pos = [x, -70];
  }


  draw(ctx) {
    // this.drawHitBox(ctx);
    this.sprite.draw(this.pos[0], this.pos[1]);
  }

  drawHitBox(ctx) {
    ctx.beginPath();
    ctx.rect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Obstacle);

/***/ }),

/***/ "./src/pause.js":
/*!**********************!*\
  !*** ./src/pause.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Pause {
  constructor() {
    const pauseCanvas = document.getElementById('game-pause');
    this.ctx = pauseCanvas.getContext('2d');
    this.pauseImage = document.getElementById('pause-image');

    this.score = 0;
  }

  draw() {
    this.ctx.drawImage(this.pauseImage, 340, 100, 600, 420);

    this.ctx.fillStyle = "white";
    this.ctx.font = 'bold 30px titlefont';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('~ Controls ~', 640, 130);
    this.ctx.fillText('First Squirrel............d f', 640, 200);
    this.ctx.fillText('Second Squirrel........j k', 640, 240);
    this.ctx.fillText('Third Squirrel..........a s', 640, 280);

    this.ctx.fillText('Pause.....................space', 640, 380);
    this.ctx.fillText('Sound on/off................m', 640, 420);
    this.ctx.fillText("press space to continue", 640, 510);
  }

  gameOver() {
    this.ctx.drawImage(this.pauseImage, 340, 100, 600, 420);
    this.ctx.fillStyle = "white";
    this.ctx.font = 'bold 30px titlefont';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('you died', 640, 300);
    this.ctx.fillText("press space to continue", 640, 510);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Pause);

/***/ }),

/***/ "./src/sound.js":
/*!**********************!*\
  !*** ./src/sound.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Sound {
  constructor(name, sfx) {
    this.sound = document.getElementById(name);
    this.sound.muted = false;
  }
  
  play() {
    this.sound.play();
  }
  playSFX() {
    this.sound.play();
    this.restart();
  }
  stop() {
    this.sound.pause();
  }
  restart() {
    this.sound.currentTime = 0;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Sound);


/***/ }),

/***/ "./src/sprites/branch_sprite.js":
/*!**************************************!*\
  !*** ./src/sprites/branch_sprite.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const BRANCHES = {
  'smallLeft': [3, 3, 67, 26, 300, 120, 190, 40],
  'smallRight': [74, 3, 66, 26, 300, 120, 10, 40],
  'bigLeft': [3, 33, 66, 44, 300, 200, 200, 115],
  'bigRight': [74, 33, 66, 44, 300, 200, 5, 115],
  'smallMiddle': [3, 81, 47, 18, 220, 60, 38, 10],
  'bigMiddle': [3, 81, 47, 18, 220, 60, 38, 10],
}

class BranchSprite {
  constructor(ctx, branchSize) {
    this.ctx = ctx;
    this.spriteSheet = document.getElementById('branches');
    this.side = BRANCHES[branchSize];
    this.width = BRANCHES[branchSize][4];
    this.height = BRANCHES[branchSize][5];
    this.cycleLoop = [];
    this.currentLoopIndex = 0;
  }

  draw(canvasX, canvasY) {
    const {width, height} = this;
    this.ctx.drawImage(
      this.spriteSheet, 
      this.side[0], this.side[1], 
      this.side[2], this.side[3], 
      canvasX - this.side[6], canvasY - this.side[7], 
      width, height);
  }

  step(canvasX, canvasY) {
    this.draw(this.cycleLoop[this.currentLoopIndex], 1, canvasX - 30, canvasY - 5);
    this.currentLoopIndex++;
    if (this.currentLoopIndex >= this.cycleLoop.length) {
      this.currentLoopIndex = 0;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BranchSprite);

/***/ }),

/***/ "./src/sprites/squirrel_sprite.js":
/*!****************************************!*\
  !*** ./src/sprites/squirrel_sprite.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SQUIRREL_COLUMN = [[440, 890],[0, 480],[860, 1280]]

class SquirrelSprite {
  constructor(ctx, squirrelNo) {
    this.ctx = ctx;
    this.spriteSheet = document.getElementById('squirrel');
    this.width = 100;
    this.height = 100;
    this.column = SQUIRREL_COLUMN[squirrelNo];
    this.cycleLoop = [55, 81];
    this.jumpLoop = [28, 80]
    this.currentLoopIndex = 0;
  }

  draw(sheetX, sheetY, canvasX, canvasY) {
    const {width, height} = this;
    this.ctx.drawImage(this.spriteSheet, sheetX, sheetY, 22, 22, canvasX, canvasY, width, height);
  }

  step(canvasX, canvasY) {
    this.draw(this.cycleLoop[this.currentLoopIndex], 1, canvasX - 30, canvasY - 5);
    this.currentLoopIndex++;
    if (this.currentLoopIndex >= this.cycleLoop.length) {
      this.currentLoopIndex = 0;
    }
  }

  jump(canvasX, canvasY, direction) {
    let jumpPos;
    let newX;
    if (direction === 'left') {
      jumpPos = 55;
      newX = canvasX - 30;
    } else {
      jumpPos = 81;
      newX = canvasX - 10;
    }
    this.draw(jumpPos, this.jumpLoop[this.currentLoopIndex], newX, canvasY - 5);
    this.currentLoopIndex++;
    if (this.currentLoopIndex >= this.cycleLoop.length) {
      this.currentLoopIndex = 0;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (SquirrelSprite);

/***/ }),

/***/ "./src/sprites/squirrelicon.js":
/*!*************************************!*\
  !*** ./src/sprites/squirrelicon.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Squirrelicon {
  constructor(favicon) {
    this.faviconCanvas = document.getElementById('favicon-canvas');
    this.ctx = this.faviconCanvas.getContext('2d');
    this.spriteSheet = document.getElementById('squirrelicon');
    this.favicon = document.getElementById("favicon");
    if (favicon) {
      this.width = 32;
      this.height = 32;
    } else {
      this.width = 100;
      this.height = 100;
    }
    this.spriteCycle = [0, 27];
    this.currentLoopIndex = 0;
    this.faviconFrames = {};
  }

  draw() {
    const { width, height } = this;
    this.ctx.clearRect(0, 0, 100, 100);
    this.ctx.drawImage(this.spriteSheet, 
      this.spriteCycle[this.currentLoopIndex], 0, 22, 22, 
      0, 0, width, height);

    this.faviconFrames[this.currentLoopIndex] = this.faviconCanvas.toDataURL('image/x-icon');
  }

  step() {
    if (!this.faviconFrames[this.currentLoopIndex]) {
      this.draw();
    }
    this.favicon.href = this.faviconFrames[this.currentLoopIndex];

    this.currentLoopIndex++;
    if (this.currentLoopIndex >= this.spriteCycle.length) {
      this.currentLoopIndex = 0;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Squirrelicon);

/***/ }),

/***/ "./src/squirrel.js":
/*!*************************!*\
  !*** ./src/squirrel.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sprites_squirrel_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites/squirrel_sprite */ "./src/sprites/squirrel_sprite.js");


const COLOR = 'orange';
const POS = { 0: [545, 600], 1: [125, 600], 2: [965, 600] };
const SIZE = [35, 60]
const SPEED = 10;
const POSITIONS = {
  farleft: [420, 0, 840],
  left: [545, 125, 965],
  middle: [620, 200, 1040],
  right: [695, 275, 1115],
  farright: [820, 400, 1240],
}


class Squirrel {
  constructor(squirrelNo, ctx) {
    this.active = false;
    this.color = COLOR;
    this.pos = POS[squirrelNo];
    this.speed = SPEED;
    this.moving = false;
    this.jumping = null;
    this.size = SIZE;
    this.positions = {
      farleft: POSITIONS.farleft[squirrelNo],
      left: POSITIONS.left[squirrelNo],
      middle: POSITIONS.middle[squirrelNo],
      right: POSITIONS.right[squirrelNo],
      farright: POSITIONS.farright[squirrelNo]
    }
    this.sprite = new _sprites_squirrel_sprite__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, squirrelNo);
  }

  draw(ctx) {
    // this.drawHitBox(ctx);
    if (!this.jumping) {
      this.sprite.step(this.pos[0], this.pos[1]);
    } else {
      this.sprite.jump(this.pos[0], this.pos[1], this.jumping);
    }
  }

  drawHitBox(ctx) {
    ctx.beginPath();
    ctx.rect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  step(direction) {
    if (direction === 'left' && this.moving === false) {
      this.moving = true;
      this.leftMovement();
    } else if (direction === 'right' && this.moving === false) {
      this.moving = true;
      this.rightMovement();
    }
  }

  leftMovement() {
    if (this.pos[0] === this.positions.left) {
      this.jumpLeft();
    } else {
      this.moveLeft();
    }
  }

  rightMovement() {
    if (this.pos[0] === this.positions.right) {
      this.jumpRight();
    } else {
      this.moveRight();
    }
  }

  jumpLeft() {
    this.pos[0] -= 7
    this.jumpAnimationLeft = requestAnimationFrame(this.jumpLeft.bind(this))
    if (this.pos[0] < this.positions.farleft) {
      this.jumping = 'left';
      this.pos[0] = this.positions.farleft;
      cancelAnimationFrame(this.jumpAnimationLeft);
      this.jumpApex(0);
    }
  }

  moveLeft() {
    this.pos[0] -= 7
    this.moveAnimationLeft = requestAnimationFrame(this.moveLeft.bind(this))

    if (this.pos[0] <= this.positions.left) {
      this.pos[0] = this.positions.left;
      this.moving = false;
      cancelAnimationFrame(this.moveAnimationLeft);
    }
  }

  jumpRight() {
    this.pos[0] += 7
    this.jumpAnimationRight = requestAnimationFrame(this.jumpRight.bind(this))
    if (this.pos[0] > this.positions.farright) {
      this.jumping = 'right';
      this.pos[0] = this.positions.farright;
      cancelAnimationFrame(this.jumpAnimationRight);
      this.jumpApex(0);
    }
  }

  moveRight() {
    this.pos[0] += 7
    this.moveAnimationRight = requestAnimationFrame(this.moveRight.bind(this))

    if (this.pos[0] >= this.positions.right) {
      this.pos[0] = this.positions.right;
      this.moving = false;
      cancelAnimationFrame(this.moveAnimationRight);
    }
  }

  jumpApex(frames) {
    if (frames < 12) {
      frames += 1;
      this.jumpAnimationApex = requestAnimationFrame(this.jumpApex.bind(this, frames));
    } else {
      cancelAnimationFrame(this.jumpAnimationApex);
      this.jumpBack();
    }

  }

  jumpBack() {
    let distance;
    let location;
    if (this.pos[0] < this.positions.middle) {
      distance = 7;
      location = this.positions.left;
    } else {
      distance = -7;
      location = this.positions.right;
    }

    this.pos[0] += distance;
    this.jumpAnimationBack = requestAnimationFrame(this.jumpBack.bind(this))
    if ((distance === -7 && this.pos[0] <= this.positions.right) ||
      (distance === 7 && this.pos[0] >= this.positions.left)) {
      this.pos[0] = location;
      this.moving = false;
      this.jumping = null;
      cancelAnimationFrame(this.jumpAnimationBack);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Squirrel);

/***/ }),

/***/ "./src/treetrunks.js":
/*!***************************!*\
  !*** ./src/treetrunks.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const COLUMNS = [500, 80, 920];

class Treetrunk {
  constructor(num) {
    const gameLevel = document.getElementById("game-level");
    this.ctx = gameLevel.getContext("2d");
    this.treeImage = document.getElementById('tree-trunks');
    this.imgHeight = 0;
    this.column = COLUMNS[num];
  }
  
  draw() {
    const scrollSpeed = 5;
    this.ctx.drawImage(this.treeImage, this.column, this.imgHeight, 280, 1000);
    this.ctx.drawImage(this.treeImage, this.column, this.imgHeight - 1000, 280, 1000);
    this.imgHeight += scrollSpeed;
    if (this.imgHeight === 1000) this.imgHeight = 0;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Treetrunk);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map