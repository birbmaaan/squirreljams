const MovingObject = require('./moving_object');
const Util = require('./util');
const COLOR = 'blue';
const RADIUS = 10;

function Obstacle(options) {
  const vector = Util.randomVector(5);
  options.vel = Util.scale(vector, 5);
  options.radius = RADIUS;
  options.color = COLOR;

  MovingObject.call(this, options);
}

Util.inherits(Obstacle, MovingObject);

module.exports = Obstacle;