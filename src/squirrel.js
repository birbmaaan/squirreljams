const MovingObject = require('./moving_object');
const Util = require('./util');
const COLOR = 'black';
const RADIUS = 5;

function Squirrel(options) {
  const vector = Util.randomVector(5);
  options.vel = Util.scale(vector, 5);
  options.radius = RADIUS;
  options.color = COLOR;

  MovingObject.call(this, options);
}

Util.inherits(Squirrel, MovingObject);

module.exports = Squirrel;