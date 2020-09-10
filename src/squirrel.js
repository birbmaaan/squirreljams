import MovingObject from './moving_object.js';
import Util from './util.js';

const COLOR = 'orange';
const POS = {1: [545, 600], 2: [125, 600], 3: [965, 600]};
const SIZE = [40, 80]
const SPEED = 10;
const POSITIONS = {
  farleft: [0, 420, 0, 840],
  left: [0, 545, 125, 965],
  middle: [0, 620, 200, 1040],
  right: [0, 695, 275, 1115],
  farright: [0, 820, 400, 1240],
}


class Squirrel extends MovingObject {
  constructor(squirrelNo) {
    super();
    this.active = false;
    this.color = COLOR;
    this.pos = POS[squirrelNo];
    this.speed = SPEED;
    this.moving = false;
    this.size = SIZE; 
    this.positions = {
      farleft: POSITIONS.farleft[squirrelNo],
      left: POSITIONS.left[squirrelNo],
      middle: POSITIONS.middle[squirrelNo],
      right: POSITIONS.right[squirrelNo],
      farright: POSITIONS.farright[squirrelNo]
    }
    Util.inherits(Squirrel, MovingObject);
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

  step(direction) {
    if (direction === 'left' && this.moving === false) {
      this.moving = true;
      this.leftMovement();
    } else if (direction === 'right' && this.moving === false) {
      this.moving = true;
      this.rightMovement();
    }
  }

  leftMovement() {
    if (this.pos[0] === this.positions.left) {
      this.jumpLeft();
    } else {
      this.moveLeft();
    }
  }
  
  rightMovement() {
    if (this.pos[0] === this.positions.right) {
      this.jumpRight();
    } else {
      this.moveRight();
    }
  }

  jumpLeft() {
    this.pos[0] -= 7
    this.jumpAnimationLeft = requestAnimationFrame(this.jumpLeft.bind(this))
    if (this.pos[0] < this.positions.farleft) {
      this.pos[0] = this.positions.farleft;
      cancelAnimationFrame(this.jumpAnimationLeft);
      this.jumpApex(0);
      // setTimeout(() => this.jumpBack(), 300);
    }
  }
  
  moveLeft() {
    this.pos[0] -= 7
    this.moveAnimationLeft = requestAnimationFrame(this.moveLeft.bind(this))
    
    if (this.pos[0] <= this.positions.left) {
      this.pos[0] = this.positions.left;
      this.moving = false;
      cancelAnimationFrame(this.moveAnimationLeft);
    }
  }
  
  jumpRight() {
    this.pos[0] += 7
    this.jumpAnimationRight = requestAnimationFrame(this.jumpRight.bind(this))
    if (this.pos[0] > this.positions.farright) {
      this.pos[0] = this.positions.farright;
      cancelAnimationFrame(this.jumpAnimationRight);
      this.jumpApex(0);
      // setTimeout(() => this.jumpBack(), 300);
    }
  }
  
  moveRight() {
    this.pos[0] += 7
    this.moveAnimationRight = requestAnimationFrame(this.moveRight.bind(this))

    if (this.pos[0] >= this.positions.right) {
      this.pos[0] = this.positions.right;
      this.moving = false;
      cancelAnimationFrame(this.moveAnimationRight);
    }
  }

  jumpApex(frames) {
    if (frames < 12) {
      frames += 1;
      this.jumpAnimationApex = requestAnimationFrame(this.jumpApex.bind(this, frames));
    } else {
      cancelAnimationFrame(this.jumpAnimationApex);
      this.jumpBack();
    }

  }
  
  jumpBack() {
    let distance;
    let location;
    if (this.pos[0] < this.positions.middle) {
      distance = 7;
      location = this.positions.left;
    } else {
      distance = -7;
      location = this.positions.right;
    } 

    this.pos[0] += distance;
    this.jumpAnimationBack = requestAnimationFrame(this.jumpBack.bind(this))
    if ((distance === -7 && this.pos[0] <= this.positions.right) || 
        (distance === 7 && this.pos[0] >= this.positions.left)) {
      this.pos[0] = location;
      this.moving = false;
      cancelAnimationFrame(this.jumpAnimationBack);
    }
  }
}
  
export default Squirrel;