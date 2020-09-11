import BranchSprite from "./sprites/branch_sprite";

const COLOR = 'blue';
const POS = {
  0: [515, 665, 565],
  1: [95, 245, 145],
  2: [935, 1085, 985]}


class Obstacle {
  constructor(obstacleNo, ctx) {
    this.speed = 5;
    this.num = obstacleNo;
    this.color = COLOR;

    this.setRandomBranch(obstacleNo);

    this.sprite = new BranchSprite(ctx, this.side);
  }

  move() {
    let position = this.pos;
    let speed = this.speed;

    this.pos = [position[0], position[1] + speed];
  }

  setRandomBranch(obstacleNo) {
    let side;
    let x = Math.floor(Math.random() * 3);
    if (x === 0)  {
      x = POS[obstacleNo][0];
      side = 'Left';
      this.size = [100, 40];
    } else if (x === 1) {
      x = POS[obstacleNo][1];
      side = 'Right';
      this.size = [100, 40];
    } else {
      x = POS[obstacleNo][2];
      side = 'Middle';
      this.size = [150, 30];
    }

    let size = Math.random();
    size = size > 0.5 ? "big" : "small";
    this.side = size + side;
    this.pos = [x, -70];
  }


  draw(ctx) {
    // this.drawHitBox(ctx);
    this.sprite.draw(this.pos[0], this.pos[1]);
  }

  drawHitBox(ctx) {
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