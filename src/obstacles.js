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
    this.size = [100, 40]
    Util.inherits(Obstacle, MovingObject);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

export default Obstacle;