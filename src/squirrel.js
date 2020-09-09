import MovingObject from './moving_object';
import Util from './util';

const COLOR = 'orange';
const RADIUS = 40;
const POS = [565, 660];
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
    debugger
    if (direction === 'left' && this.moving === false) {
      this.moving = true;
      this.leftMovement();
    } else if (direction === 'right' && this.moving === false) {
      this.moving = true;
      this.rightMovement();
    }
  }

  leftMovement() {
    if (this.pos[0] === 565) {
      this.jumpLeft();
    } else {
      this.moveLeft();
    }
  }
  
  rightMovement() {
    if (this.pos[0] === 715) {
      this.jumpRight();
    } else {
      this.moveRight();
    }
  }

  jumpLeft() {
    this.pos[0] -= 7
    this.jumpAnimationLeft = requestAnimationFrame(this.jumpLeft.bind(this))
    if (this.pos[0] < 440) {
      this.pos[0] = 440;
      cancelAnimationFrame(this.jumpAnimationLeft);
      setTimeout(() => this.jumpBack(), 200);
    }
  }
  
  moveLeft() {
    this.pos[0] -= 7
    this.moveAnimationLeft = requestAnimationFrame(this.moveLeft.bind(this))
    
    if (this.pos[0] <= 565) {
      this.pos[0] = 565;
      this.moving = false;
      cancelAnimationFrame(this.moveAnimationLeft);
    }
  }
  
  jumpRight() {
    this.pos[0] += 7
    this.jumpAnimationRight = requestAnimationFrame(this.jumpRight.bind(this))
    if (this.pos[0] > 840) {
      this.pos[0] = 840;
      cancelAnimationFrame(this.jumpAnimationRight);
      setTimeout(() => this.jumpBack(), 200);
    }
  }
  
  moveRight() {
    this.pos[0] += 7
    this.moveAnimationRight = requestAnimationFrame(this.moveRight.bind(this))

    if (this.pos[0] >= 715) {
      this.pos[0] = 715;
      this.moving = false;
      cancelAnimationFrame(this.moveAnimationRight);
    }
  }
  
  jumpBack() {
    let distance;
    let location;
    if (this.pos[0] < 640) {
      distance = 7;
      location = 565;
    } else {
      distance = -7;
      location = 715;
    } 

    this.pos[0] += distance;
    this.jumpAnimationBack = requestAnimationFrame(this.jumpBack.bind(this))
    if ((distance === -7 && this.pos[0] <= 715) || (distance === 7 && this.pos[0] >= 565)) {
      this.pos[0] = location;
      this.moving = false;
      cancelAnimationFrame(this.jumpAnimationBack);
    }
  }
}
  
export default Squirrel;