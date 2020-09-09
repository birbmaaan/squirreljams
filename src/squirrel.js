const MovingObject = require('./moving_object');
const Util = require('./util');
const COLOR = 'orange';
const RADIUS = 20;
const POS = [75, 840];
const SPEED = 10;

function Squirrel() {
  options = {};
  options.radius = RADIUS;
  options.color = COLOR;
  options.pos = POS;
  options.speed = SPEED;
  this.jumping = false;
  MovingObject.call(this, options);
}

Util.inherits(Squirrel, MovingObject);

Squirrel.prototype.step = function step(direction) {
  if (direction === 'left' && this.pos[0] > 25) {
    debugger
    this.pos[0] -= 10;
  } else if (direction === 'right' && this.pos[0] < 275) {
    this.pos[0] += 10;
  } else if (direction === 'left' && this.pos[0] <= 25 && this.jumping === false) {
    this.jumping = true;
    this.jumpLeft();
  } else if (direction === 'right' && this.pos[0] >= 275 && this.jumping === false) {
    debugger
    this.jumping = true;
    this.jumpRight();
  }
}

Squirrel.prototype.jumpRight = function jumpRight() {
  this.pos[0] += 10
  this.jumpAnimationRight = requestAnimationFrame(this.jumpRight.bind(this))
  if (this.pos[0] > 350) {
    cancelAnimationFrame(this.jumpAnimationRight);
    this.jumpBack(-5, 275);
  }
}

Squirrel.prototype.jumpLeft = function jumpLeft() {
  this.pos[0] -= 5
  this.jumpAnimationLeft = requestAnimationFrame(this.jumpLeft.bind(this))
  if (this.pos[0] < -50) {
    cancelAnimationFrame(this.jumpAnimationLeft);
    this.jumpBack(5, 25);
  }
}

Squirrel.prototype.jumpBack = function jumpBack() {
  debugger
  let distance = this.pos[0] < 100 ? 5 : -5
  this.pos[0] += distance;
  this.jumpAnimationBack = requestAnimationFrame(this.jumpBack.bind(this))
  if (this.pos[0] === 275 || this.pos[0] === 25) {
    cancelAnimationFrame(this.jumpAnimationBack);
    this.jumping = false;
  }
}

Squirrel.prototype.jump = function jump(direction) {
  if (direction === 'left' && this.pos[0] >= -25) {
    this.pos[0] -= 5;
    requestAnimationFrame(this.jump(direction))
    // this.pos[0] += 50;
  } else if (direction === 'right' && this.pos[0] <= 325) {
    debugger
    this.pos[0] += 1;
    requestAnimationFrame(this.jump(direction))
    // this.pos[0] -= 50;
  } 
}

module.exports = Squirrel;