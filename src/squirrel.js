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
  MovingObject.call(this, options);
}

Util.inherits(Squirrel, MovingObject);

module.exports = Squirrel;