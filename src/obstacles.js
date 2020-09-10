import Util from './util.js';

const COLOR = 'blue';
const POS = {
  0: [515, 665],
  1: [95, 245],
  2: [935, 1085]}


class Obstacle {
  constructor(obstacleNo) {
    this.speed = 5;
    this.num = obstacleNo;
    this.color = COLOR;
    this.pos = this.randomPosition(obstacleNo)
    this.size = [100, 40]
  }

  move() {
    let position = this.pos;
    let speed = this.speed;

    this.pos = [position[0], position[1] + speed];
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