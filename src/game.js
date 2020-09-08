const Obstacle = require("./obstacles");

function Game() {
  this.DIM_X = 500;
  this.DIM_Y = 500;
  this.NUM_OBSTACLES = 10;
  this.OBSTACLES = [];
}

Game.prototype.addObstacles = function () {
  for (let i = 0; i < this.NUM_OBSTACLES; i++) {
    let pos = this.randomPosition(this.DIM_X, this.DIM_Y);
    let tree = new Obstacle({pos, game: this});
    this.OBSTACLES.push(tree);
  }
}

Game.prototype.randomPosition = function(x, y) {
  let pos = [];
  pos.push(Math.floor(Math.random() * x));
  pos.push(Math.floor(Math.random() * y));
  return pos;
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.OBSTACLES.forEach(tree => tree.draw(ctx));
}

module.exports = Game;