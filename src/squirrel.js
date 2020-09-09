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
    if (this.pos[0] === 75) {
      this.jumpLeft();
    } else {
      this.moveLeft();
    }
  }
  
  rightMovement() {
    if (this.pos[0] === 225) {
      this.jumpRight();
    } else {
      this.moveRight();
    }
  }

  jumpLeft() {
    this.pos[0] -= 7
    this.jumpAnimationLeft = requestAnimationFrame(this.jumpLeft.bind(this))
    if (this.pos[0] < -50) {
      this.pos[0] = -50;
      cancelAnimationFrame(this.jumpAnimationLeft);
      this.jumpBack();
    }
  }

  moveLeft() {
    this.pos[0] -= 7
    this.moveAnimationLeft = requestAnimationFrame(this.moveLeft.bind(this))

    if (this.pos[0] <= 75) {
      this.pos[0] = 75;
      this.moving = false;
      cancelAnimationFrame(this.moveAnimationLeft);
    }
  }
  
  jumpRight() {
    this.pos[0] += 7
    this.jumpAnimationRight = requestAnimationFrame(this.jumpRight.bind(this))
    if (this.pos[0] > 350) {
      this.pos[0] = 350;
      cancelAnimationFrame(this.jumpAnimationRight);
      this.jumpBack();
    }
  }
  
  moveRight() {
    this.pos[0] += 7
    this.moveAnimationRight = requestAnimationFrame(this.moveRight.bind(this))

    if (this.pos[0] >= 225) {
      this.pos[0] = 225;
      this.moving = false;
      cancelAnimationFrame(this.moveAnimationRight);
    }
  }
  
  jumpBack() {
    debugger
    let distance;
    let location;
    if (this.pos[0] < 150) {
      distance = 5;
      location = 75;
    } else {
      distance = -5;
      location = 225;
    } 

    this.pos[0] += distance;
    this.jumpAnimationBack = requestAnimationFrame(this.jumpBack.bind(this))
    if ((distance === -5 && this.pos[0] <= 225) || (distance === 5 && this.pos[0] >= 75)) {
      this.pos[0] = location;
      this.moving = false;
      cancelAnimationFrame(this.jumpAnimationBack);
    }
  }
}
  
export default Squirrel;