const Obstacle = require("./obstacles");
const Squirrel = require('./squirrel');

function Game() {
  this.DIM_X = 300;
  this.DIM_Y = 900;
  this.NUM_OBSTACLES = 10;
  this.OBSTACLES = [];
  this.SQUIRREL = new Squirrel();
}

Game.prototype.addObstacles = function () {
  if (this.OBSTACLES.length < this.NUM_OBSTACLES) {
    for (let i = this.OBSTACLES.length; i < this.NUM_OBSTACLES; i++) {
      let pos = this.randomPosition();
      let tree = new Obstacle({pos, game: this});
      this.OBSTACLES.push(tree);
    }
  }
}

Game.prototype.addObstacle = function () {
  if (this.OBSTACLES.length < this.NUM_OBSTACLES) {
    let pos = this.randomPosition();
    let tree = new Obstacle({pos, game: this});
    this.OBSTACLES.push(tree);
  }
}

Game.prototype.randomPosition = function() {
  let x = Math.random();
  x = x > 0.5 ? 225 : 75;
  let pos = [x, -70];

  return pos;
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.OBSTACLES.forEach(tree => tree.draw(ctx)); 
  this.SQUIRREL.draw(ctx);
}

Game.prototype.moveObjects = function() {
  this.OBSTACLES.forEach(tree => tree.move());
}

Game.prototype.removeObjects = function() {
  let currentObstacles = [];
  this.OBSTACLES.forEach(tree => {
    if (tree.pos[1] < this.DIM_Y + tree.radius) {
      currentObstacles.push(tree);
    }
  })
  this.OBSTACLES = currentObstacles;
}

module.exports = Game;