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
    x = x > 0.5 ? 225 : 75;
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
  
}

export default Game;