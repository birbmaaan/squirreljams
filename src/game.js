import Obstacle from './obstacles.js';
import Squirrel from './squirrel.js';

class Game {
  constructor() {
    this.DIM_X = 1280;
    this.DIM_Y = 720;
    this.NUM_OBSTACLES = 30;
    this.obstacles = {
      1: [],
      2: [],
      3: []
    }
    this.squirrels = [];

    this.add(new Obstacle(1));
  }
  
  add(object) {
    if (object instanceof Obstacle) {
      this.obstacles[object.num].push(object);
    } else if (object instanceof Squirrel) {
      this.squirrels.push(object);
    } else {
      throw new Error('unknown object');
    }
  }
  
  addSquirrel(squirrelNo) {
    const squirrel = new Squirrel(squirrelNo);
    
    this.add(squirrel);
    return squirrel;
  }
  
  addObstacles(num){
    if (this.obstacles.num.length < this.NUM_OBSTACLES) {
      for (let i = this.obstacles.num.length; i < this.NUM_OBSTACLES; i++) {
        let pos = this.randomPosition();
        this.add(new Obstacle({pos, game: this}));
      }
    }
  }
  
  addObstacle(num) {
    const that = this;
    let length = this.obstacles[num].length;
    let minDistance = Math.floor((Math.random() * 200) + 200);
    debugger;
    if (that.obstacles[num].length === 0 ||
        (length < that.NUM_OBSTACLES/3 &&
        that.obstacles[num][length - 1].pos[1] > minDistance)) {
      that.add(new Obstacle(num));
    }
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    Object.keys(this.obstacles).forEach(num => {
      this.obstacles[num].forEach(tree => tree.draw(ctx)); 
    });
    this.squirrels.forEach(squirrel => squirrel.draw(ctx));
  }
  
  moveObjects() {
    Object.keys(this.obstacles).forEach(num => {
      this.obstacles[num].forEach(tree => tree.move());
    })
  }
  
  removeObjects() {
    Object.keys(this.obstacles).forEach(num => {
      let currentObstacles = [];
      this.obstacles[num].forEach(tree => {
        if (tree.pos[1] < this.DIM_Y + tree.size[1]) {
          currentObstacles.push(tree);
        }
      })
      this.obstacles[num] = currentObstacles;
    })
  }

  detectCollision() {
    let dead = false;
    this.squirrels.forEach(squirrel => {
      this.obstacles.forEach(tree => {
        if (this.beenHit(squirrel, tree)) {
          dead = true;
        }
      })
    })
    return dead;
  }

  beenHit(squirrel, tree) {
    if (squirrel.pos[0] < tree.pos[0] + tree.size[0] &&
        squirrel.pos[0] + squirrel.size[0] > tree.pos[0] &&
        squirrel.pos[1] < tree.pos[1] + tree.size[1] &&
        squirrel.pos[1] + squirrel.size[1] > tree.pos[1]) {
      return true;
    }
  }

}

export default Game;