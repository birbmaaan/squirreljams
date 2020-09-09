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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _obstacles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obstacles */ \"./src/obstacles.js\");\n/* harmony import */ var _squirrel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squirrel */ \"./src/squirrel.js\");\n\n\n\nclass Game {\n  constructor() {\n    this.DIM_X = 900;\n    this.DIM_Y = 900;\n    this.NUM_OBSTACLES = 10;\n    this.OBSTACLES = [];\n    this.squirrels = [];\n  }\n  \n  add(object) {\n    if (object instanceof Obstacle) {\n      this.OBSTACLES.push(object);\n    } else if (object instanceof _squirrel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.squirrels.push(object);\n    } else {\n      throw new Error('unknown object');\n    }\n  }\n  \n  addSquirrel() {\n    const squirrel = new _squirrel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    \n    this.add(squirrel);\n    return squirrel;\n  }\n  \n  addObstacles(){\n    if (this.OBSTACLES.length < this.NUM_OBSTACLES) {\n      for (let i = this.OBSTACLES.length; i < this.NUM_OBSTACLES; i++) {\n        let pos = this.randomPosition();\n        this.add(new Obstacle({pos, game: this}));\n      }\n    }\n  }\n  \n  addObstacle() {\n    if (this.OBSTACLES.length < this.NUM_OBSTACLES) {\n      let pos = this.randomPosition();\n      this.add(new Obstacle({pos, game: this}));\n    }\n  }\n  \n  randomPosition() {\n    let x = Math.random();\n    x = x > 0.5 ? 225 : 75;\n    let pos = [x, -70];\n    \n    return pos;\n  }\n  \n  draw(ctx) {\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n    this.OBSTACLES.forEach(tree => tree.draw(ctx)); \n    this.squirrels.forEach(squirrel => squirrel.draw(ctx));\n  }\n  \n  moveObjects() {\n    this.OBSTACLES.forEach(tree => tree.move());\n  }\n  \n  removeObjects() {\n    let currentObstacles = [];\n    this.OBSTACLES.forEach(tree => {\n      if (tree.pos[1] < this.DIM_Y + tree.radius) {\n        currentObstacles.push(tree);\n      }\n    })\n    this.OBSTACLES = currentObstacles;\n  }\n  \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass GameView {\n  constructor(game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n    this.squirrel = this.game.addSquirrel();\n    this.moves = {\n      d: 'left',\n      f: 'right',\n    }\n  }\n\n\n  bindKeyHandlers() {\n    const squirrel = this.squirrel;\n    document.addEventListener('keypress', (e) => {\n      debugger\n      Object.keys(this.moves).forEach((k) => {\n        const move = this.moves[k];\n        if (k === e.key) {squirrel.step(move)};\n      });\n    })\n  }\n\n  start() {\n    this.bindKeyHandlers();\n    const that = this;\n    setInterval( function() {\n      that.game.moveObjects();\n      that.game.removeObjects();\n      //  that.game.addObstacles();\n      that.game.draw(that.ctx);\n    }, 20);\n  \n    setInterval( function() {\n      that.game.addObstacle()\n    }, 1000)\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _squirrel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squirrel */ \"./src/squirrel.js\");\n/* harmony import */ var _obstacles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obstacles */ \"./src/obstacles.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\n\n\n\n\nwindow.MovingObject = _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nwindow.Squirrel = _squirrel__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nwindow.Obstacle = _obstacles__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nwindow.Game = _game__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nwindow.GameView = _game_view__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById('game-canvas');\n  console.log(\"It's working! It's working!\");\n  const ctx = canvas.getContext('2d')\n  window.ctx = ctx;\n\n  const game = new _game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  const newGame = new _game_view__WEBPACK_IMPORTED_MODULE_4__[\"default\"](game, ctx);\n  newGame.start();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass MovingObject {\n  constructor(options) {\n    this.pos = options.pos;\n    this.speed = options.speed;\n    this.radius = options.radius;\n    this.color = options.color;\n  }\n  \n  draw(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.strokeStyle = 'black';\n    ctx.lineWidth = 1;\n    ctx.stroke();\n  }\n\n  move() {\n    let position = this.pos;\n    let speed = this.speed;\n  \n    this.pos = [position[0], position[1] + speed];\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/obstacles.js":
/*!**************************!*\
  !*** ./src/obstacles.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_util__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst COLOR = 'blue';\nconst RADIUS = 70;\n\nclass Obstacle extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options) {\n    options.speed = 5;\n    options.radius = RADIUS;\n    options.color = COLOR;\n    super(options);\n    _util__WEBPACK_IMPORTED_MODULE_1___default.a.inherits(Obstacle, _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Obstacle);\n\n//# sourceURL=webpack:///./src/obstacles.js?");

/***/ }),

/***/ "./src/squirrel.js":
/*!*************************!*\
  !*** ./src/squirrel.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_util__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst COLOR = 'orange';\nconst RADIUS = 20;\nconst POS = [80, 840];\nconst SPEED = 10;\n\nclass Squirrel extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    let options = {};\n    options.radius = RADIUS;\n    options.color = COLOR;\n    options.pos = POS;\n    options.speed = SPEED;\n    super(options);\n    this.moving = false;\n    _util__WEBPACK_IMPORTED_MODULE_1___default.a.inherits(Squirrel, _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n\n  step(direction) {\n    if (direction === 'left' && this.pos[0] > 25) {\n      debugger\n      this.pos[0] -= 10;\n    } else if (direction === 'right' && this.pos[0] < 275) {\n      this.moveRight();\n    } else if (direction === 'left' && this.pos[0] <= 25 && this.moving === false) {\n      this.moving = true;\n      this.jumpLeft();\n    } else if (direction === 'right' && this.pos[0] >= 275 && this.moving === false) {\n      debugger\n      this.moving = true;\n      this.jumpRight();\n    }\n  }\n  \n  moveRight() {\n    while (this.pos[0] <= 175 && this.pos[0] >= 75) {\n      this.pos[0] += 10\n      this.moveAnimationRight = requestAnimationFrame(this.moveRight.bind(this))\n    }\n    this.pos[0] = 175;\n    cancelAnimationFrame(this.moveAnimationRight);\n  }\n  \n  jumpRight() {\n    this.pos[0] += 10\n    this.jumpAnimationRight = requestAnimationFrame(this.jumpRight.bind(this))\n    if (this.pos[0] > 350) {\n      cancelAnimationFrame(this.jumpAnimationRight);\n      this.jumpBack(-5, 275);\n    }\n  }\n  \n  jumpLeft() {\n    this.pos[0] -= 5\n    this.jumpAnimationLeft = requestAnimationFrame(this.jumpLeft.bind(this))\n    if (this.pos[0] < -50) {\n      cancelAnimationFrame(this.jumpAnimationLeft);\n      this.jumpBack();\n    }\n  }\n  \n  jumpBack() {\n    debugger\n    let distance = this.pos[0] < 100 ? 5 : -5\n    this.pos[0] += distance;\n    this.jumpAnimationBack = requestAnimationFrame(this.jumpBack.bind(this))\n    if (this.pos[0] === 275 || this.pos[0] === 25) {\n      cancelAnimationFrame(this.jumpAnimationBack);\n      this.moving = false;\n    }\n  }\n  \n  jump() {\n    if (direction === 'left' && this.pos[0] >= -25) {\n      this.pos[0] -= 5;\n      requestAnimationFrame(this.jump(direction))\n      // this.pos[0] += 50;\n    } else if (direction === 'right' && this.pos[0] <= 325) {\n      debugger\n      this.pos[0] += 1;\n      requestAnimationFrame(this.jump(direction))\n      // this.pos[0] -= 50;\n    } \n  }\n}\n  \n/* harmony default export */ __webpack_exports__[\"default\"] = (Squirrel);\n\n//# sourceURL=webpack:///./src/squirrel.js?");

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