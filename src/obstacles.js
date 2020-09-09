import MovingObject from './moving_object.js';
import Util from './util.js';

const COLOR = 'blue';
const POS = {
  1: [515, 665],
  2: [95, 245],
  3: [935, 1185]}


class Obstacle extends MovingObject {
  constructor(obstacleNo) {
    super();
    this.speed = 5;
    this.color = COLOR;
    this.pos = this.randomPosition(obstacleNo)
    this.size = [100, 40]
    Util.inherits(Obstacle, MovingObject);
  }

  randomPosition(obstacleNo) {
    let x = Math.random();
    x = x > 0.5 ? POS[obstacleNo][1] : POS[obstacleNo][0];
    let pos = [x, -70];

    return pos;
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