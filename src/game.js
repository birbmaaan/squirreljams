import Obstacles from './obstacles';
import Squirrel from './squirrel';

class Game {
  constructor() {
    this.DIM_X = 900;
    this.DIM_Y = 900;
    this.NUM_OBSTACLES = 10;
    this.OBSTACLES = [];
    this.squirrels = [];
  }
  
  add(object) {
    if (object instanceof Obstacle) {
      this.OBSTACLES.push(object);
    } else if (object instanceof Squirrel) {
      this.squirrels.push(object);
    } else {
      throw new Error('unknown object');
    }
  }
  
  addSquirrel() {
    const squirrel = new Squirrel();
    
    this.add(squirrel);
    return squirrel;
  }
  
  addObstacles(){
    if (this.OBSTACLES.length < this.NUM_OBSTACLES) {
      for (let i = this.OBSTACLES.length; i < this.NUM_OBSTACLES; i++) {
        let pos = this.randomPosition();
        this.add(new Obstacle({pos, game: this}));
      }
    }
  }
  
  addObstacle() {
    if (this.OBSTACLES.length < this.NUM_OBSTACLES) {
      let pos = this.randomPosition();
      this.add(new Obstacle({pos, game: this}));
    }
  }
  
  randomPosition() {
    let x = Math.random();
    x = x > 0.5 ? 535 : 685;
    let pos = [x, -70];
    
    return pos;
  }
  
  draw(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.OBSTACLES.forEach(tree => tree.draw(ctx)); 
    this.squirrels.forEach(squirrel => squirrel.draw(ctx));
  }
  
  moveObjects() {
    this.OBSTACLES.forEach(tree => tree.move());
  }
  
  removeObjects() {
    let currentObstacles = [];
    this.OBSTACLES.forEach(tree => {
      if (tree.pos[1] < this.DIM_Y + tree.radius) {
        currentObstacles.push(tree);
      }
    })
    this.OBSTACLES = currentObstacles;
  }

  detectCollision() {
    const squirrel = this.squirrels[0];
    let dead = false;
    this.OBSTACLES.forEach(tree => {
      if (this.beenHit(squirrel, tree)) {
        dead = true;
      }
    })
    return dead;
  }

  beenHit(squirrel, tree) {
    if (squirrel.pos[0] < tree.pos[0] + tree.size[0] &&
        squirrel.pos[0] + squirrel.size[0] > tree.pos[0] &&
        squirrel.pos[1] < tree.pos[1] + tree.size[1] &&
        squirrel.pos[1] + squirrel.size[1] > tree.pos[1]) {
      debugger;
      return true;
    }
  }
  
}

export default Game;