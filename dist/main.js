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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Obstacle = __webpack_require__(/*! ./obstacles */ \"./src/obstacles.js\");\nconst Squirrel = __webpack_require__(/*! ./squirrel */ \"./src/squirrel.js\");\n\nfunction Game() {\n  this.DIM_X = 900;\n  this.DIM_Y = 900;\n  this.NUM_OBSTACLES = 10;\n  this.OBSTACLES = [];\n  this.squirrels = [];\n}\n\nGame.prototype.add = function add(object) {\n  if (object instanceof Obstacle) {\n    this.OBSTACLES.push(object);\n  } else if (object instanceof Squirrel) {\n    this.squirrels.push(object);\n  } else {\n    throw new Error('unknown object');\n  }\n}\n\nGame.prototype.addSquirrel = function() {\n  const squirrel = new Squirrel();\n\n  this.add(squirrel);\n  return squirrel;\n}\n\nGame.prototype.addObstacles = function () {\n  if (this.OBSTACLES.length < this.NUM_OBSTACLES) {\n    for (let i = this.OBSTACLES.length; i < this.NUM_OBSTACLES; i++) {\n      let pos = this.randomPosition();\n      this.add(new Obstacle({pos, game: this}));\n    }\n  }\n}\n\nGame.prototype.addObstacle = function () {\n  if (this.OBSTACLES.length < this.NUM_OBSTACLES) {\n    let pos = this.randomPosition();\n    this.add(new Obstacle({pos, game: this}));\n  }\n}\n\nGame.prototype.randomPosition = function() {\n  let x = Math.random();\n  x = x > 0.5 ? 225 : 75;\n  let pos = [x, -70];\n\n  return pos;\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n  this.OBSTACLES.forEach(tree => tree.draw(ctx)); \n  this.squirrels.forEach(squirrel => squirrel.draw(ctx));\n}\n\nGame.prototype.moveObjects = function() {\n  this.OBSTACLES.forEach(tree => tree.move());\n}\n\nGame.prototype.removeObjects = function() {\n  let currentObstacles = [];\n  this.OBSTACLES.forEach(tree => {\n    if (tree.pos[1] < this.DIM_Y + tree.radius) {\n      currentObstacles.push(tree);\n    }\n  })\n  this.OBSTACLES = currentObstacles;\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(game, ctx) {\n  this.game = game;\n  this.ctx = ctx;\n  this.squirrel = this.game.addSquirrel();\n}\n\nGameView.MOVES = {\n  d: 'left',\n  f: 'right',   \n}\n\nGameView.prototype.bindKeyHandlers = function bindKeyHandlers() {\n  const squirrel = this.squirrel;\n  document.addEventListener('keypress', (e) => {\n    Object.keys(GameView.MOVES).forEach((k) => {\n      const move = GameView.MOVES[k];\n      if (k === e.key) {squirrel.step(move)};\n    });\n  })\n}\n\nGameView.prototype.start = function() {\n  this.bindKeyHandlers();\n   const that = this;\n   setInterval( function() {\n     that.game.moveObjects();\n     that.game.removeObjects();\n    //  that.game.addObstacles();\n     that.game.draw(that.ctx);\n   }, 20);\n\n   setInterval( function() {\n     that.game.addObstacle()\n   }, 1000)\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Squirrel = __webpack_require__(/*! ./squirrel */ \"./src/squirrel.js\");\nconst Obstacle = __webpack_require__(/*! ./obstacles */ \"./src/obstacles.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\nwindow.MovingObject = MovingObject;\nwindow.Squirrel = Squirrel;\nwindow.Obstacle = Obstacle;\nwindow.Game = Game;\nwindow.GameView = GameView;\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById('game-canvas');\n  console.log(\"It's working! It's working!\");\n  const ctx = canvas.getContext('2d')\n  window.ctx = ctx;\n\n  const game = new Game();\n  const newGame = new GameView(game, ctx);\n  newGame.start();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nfunction MovingObject(options) {\n  this.pos = options.pos;\n  this.speed = options.speed;\n  this.radius = options.radius;\n  this.color = options.color;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n  ctx.fillStyle = this.color;\n  ctx.fill();\n  ctx.strokeStyle = 'black';\n  ctx.lineWidth = 1;\n  ctx.stroke();\n}\n\nMovingObject.prototype.move = function() {\n  let position = this.pos;\n  let speed = this.speed;\n\n  this.pos = [position[0], position[1] + speed];\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/obstacles.js":
/*!**************************!*\
  !*** ./src/obstacles.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst COLOR = 'blue';\nconst RADIUS = 70;\n\nfunction Obstacle(options) {\n  options.speed = 5;\n  options.radius = RADIUS;\n  options.color = COLOR;\n  MovingObject.call(this, options);\n}\n\n \nUtil.inherits(Obstacle, MovingObject);\n\nmodule.exports = Obstacle;\n\n//# sourceURL=webpack:///./src/obstacles.js?");

/***/ }),

/***/ "./src/squirrel.js":
/*!*************************!*\
  !*** ./src/squirrel.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst COLOR = 'orange';\nconst RADIUS = 20;\nconst POS = [75, 840];\nconst SPEED = 10;\n\nfunction Squirrel() {\n  options = {};\n  options.radius = RADIUS;\n  options.color = COLOR;\n  options.pos = POS;\n  options.speed = SPEED;\n  this.jumping = false;\n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Squirrel, MovingObject);\n\nSquirrel.prototype.step = function step(direction) {\n  if (direction === 'left' && this.pos[0] > 25) {\n    debugger\n    this.pos[0] -= 10;\n  } else if (direction === 'right' && this.pos[0] < 275) {\n    this.pos[0] += 10;\n  } else if (direction === 'left' && this.pos[0] <= 25 && this.jumping === false) {\n    this.jumping = true;\n    this.jumpLeft();\n  } else if (direction === 'right' && this.pos[0] >= 275 && this.jumping === false) {\n    debugger\n    this.jumping = true;\n    this.jumpRight();\n  }\n}\n\nSquirrel.prototype.jumpRight = function jumpRight() {\n  this.pos[0] += 10\n  this.jumpAnimationRight = requestAnimationFrame(this.jumpRight.bind(this))\n  if (this.pos[0] > 350) {\n    cancelAnimationFrame(this.jumpAnimationRight);\n    this.jumpBack(-5, 275);\n  }\n}\n\nSquirrel.prototype.jumpLeft = function jumpLeft() {\n  this.pos[0] -= 5\n  this.jumpAnimationLeft = requestAnimationFrame(this.jumpLeft.bind(this))\n  if (this.pos[0] < -50) {\n    cancelAnimationFrame(this.jumpAnimationLeft);\n    this.jumpBack(5, 25);\n  }\n}\n\nSquirrel.prototype.jumpBack = function jumpBack() {\n  debugger\n  let distance = this.pos[0] < 100 ? 5 : -5\n  this.pos[0] += distance;\n  this.jumpAnimationBack = requestAnimationFrame(this.jumpBack.bind(this))\n  if (this.pos[0] === 275 || this.pos[0] === 25) {\n    cancelAnimationFrame(this.jumpAnimationBack);\n    this.jumping = false;\n  }\n}\n\nSquirrel.prototype.jump = function jump(direction) {\n  if (direction === 'left' && this.pos[0] >= -25) {\n    this.pos[0] -= 5;\n    requestAnimationFrame(this.jump(direction))\n    // this.pos[0] += 50;\n  } else if (direction === 'right' && this.pos[0] <= 325) {\n    debugger\n    this.pos[0] += 1;\n    requestAnimationFrame(this.jump(direction))\n    // this.pos[0] -= 50;\n  } \n}\n\nmodule.exports = Squirrel;\n\n//# sourceURL=webpack:///./src/squirrel.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });