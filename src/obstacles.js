const MovingObject = require('./moving_object');
const Util = require('./util');
const COLOR = 'blue';
const RADIUS = 70;

function Obstacle(options) {
  options.speed = 5;
  options.radius = RADIUS;
  options.color = COLOR;
  MovingObject.call(this, options);
}

 
Util.inherits(Obstacle, MovingObject);

module.exports = Obstacle;