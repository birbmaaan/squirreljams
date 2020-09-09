import MovingObject from './moving_object';
import Util from './util';

const COLOR = 'orange';
const RADIUS = 20;
const POS = [80, 840];
const SPEED = 10;

class Squirrel extends MovingObject {
  constructor() {
    let options = {};
    options.radius = RADIUS;
    options.color = COLOR;
    options.pos = POS;
    options.speed = SPEED;
    super(options);
    this.moving = false;
    Util.inherits(Squirrel, MovingObject);
  }

  step(direction) {
    if (direction === 'left' && this.pos[0] > 25) {
      debugger
      this.pos[0] -= 10;
    } else if (direction === 'right' && this.pos[0] < 275) {
      this.moveRight();
    } else if (direction === 'left' && this.pos[0] <= 25 && this.moving === false) {
      this.moving = true;
      this.jumpLeft();
    } else if (direction === 'right' && this.pos[0] >= 275 && this.moving === false) {
      debugger
      this.moving = true;
      this.jumpRight();
    }
  }
  
  moveRight() {
    while (this.pos[0] <= 175 && this.pos[0] >= 75) {
      this.pos[0] += 10
      this.moveAnimationRight = requestAnimationFrame(this.moveRight.bind(this))
    }
    this.pos[0] = 175;
    cancelAnimationFrame(this.moveAnimationRight);
  }
  
  jumpRight() {
    this.pos[0] += 10
    this.jumpAnimationRight = requestAnimationFrame(this.jumpRight.bind(this))
    if (this.pos[0] > 350) {
      cancelAnimationFrame(this.jumpAnimationRight);
      this.jumpBack(-5, 275);
    }
  }
  
  jumpLeft() {
    this.pos[0] -= 5
    this.jumpAnimationLeft = requestAnimationFrame(this.jumpLeft.bind(this))
    if (this.pos[0] < -50) {
      cancelAnimationFrame(this.jumpAnimationLeft);
      this.jumpBack();
    }
  }
  
  jumpBack() {
    debugger
    let distance = this.pos[0] < 100 ? 5 : -5
    this.pos[0] += distance;
    this.jumpAnimationBack = requestAnimationFrame(this.jumpBack.bind(this))
    if (this.pos[0] === 275 || this.pos[0] === 25) {
      cancelAnimationFrame(this.jumpAnimationBack);
      this.moving = false;
    }
  }
  
  jump() {
    if (direction === 'left' && this.pos[0] >= -25) {
      this.pos[0] -= 5;
      requestAnimationFrame(this.jump(direction))
      // this.pos[0] += 50;
    } else if (direction === 'right' && this.pos[0] <= 325) {
      debugger
      this.pos[0] += 1;
      requestAnimationFrame(this.jump(direction))
      // this.pos[0] -= 50;
    } 
  }
}
  
export default Squirrel;