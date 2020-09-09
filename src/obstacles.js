import MovingObject from './moving_object';
import Util from './util';

const COLOR = 'blue';
const RADIUS = 70;

class Obstacle extends MovingObject {
  constructor(options) {
    options.speed = 5;
    options.radius = RADIUS;
    options.color = COLOR;
    super(options);
    Util.inherits(Obstacle, MovingObject);
  }
}

export default Obstacle;