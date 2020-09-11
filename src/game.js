import Obstacle from './obstacles.js';
import Squirrel from './squirrel.js';
import Treetrunk from './treetrunks.js';
import Background from './background.js';

class Game {
  constructor(ctx) {
    this.DIM_X = 1280;
    this.DIM_Y = 720;
    this.NUM_OBSTACLES = 30;
    this.liveObstacles = [false, false, false];
    this.squirrels = [];
    this.trees = [];
    this.background = new Background();
    this.obstacles = {
      0: [],
      1: [],
      2: []
    };
    this.frameCount = 0;
    this.currentLoopIndex = 0;
    this.sqrlCtx = this.getSquirrelCanvas();
    this.ctx = ctx;
    for (let i = 0; i <= 2; i++) {
      this.add(new Squirrel(i, this.sqrlCtx));
      this.trees.push(new Treetrunk(i));
    };
  }

  getSquirrelCanvas() {
    const squirrelCanvas = document.getElementById('game-squirrels')
    const ctx = squirrelCanvas.getContext('2d');
    return ctx;
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
  
  addObstacle(num) {
    const that = this;
    let length = this.obstacles[num].length;
    let minDistance = Math.floor((Math.random() * 200) + 200);
    if (that.obstacles[num].length === 0 ||
        (length < that.NUM_OBSTACLES/3 &&
        that.obstacles[num][length - 1].pos[1] > minDistance)) {
      that.add(new Obstacle(num, that.ctx));
    }
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.background.draw();
    Object.keys(this.obstacles).forEach(num => {
      this.obstacles[num].forEach(tree => tree.draw(ctx)); 
    });

    for (let i = 0; i < 3; i++) {
      if (this.squirrels[i].active) this.trees[i].draw();
    }

    this.frameCount++;
    if (this.frameCount === 5) {
      this.sqrlCtx.clearRect(0, 560, 1280, 720);
      for (let i = 0; i < 3; i++) {
        if (this.squirrels[i].active) {
          this.squirrels[i].draw(ctx);
        };
      }
      this.frameCount = 0;
    }
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
        if (tree.pos[1] < 800) {
          currentObstacles.push(tree);
        }
      })
      this.obstacles[num] = currentObstacles;
    })
  }

  detectCollision() {
    let dead = false;
    this.squirrels.forEach(squirrel => {
      Object.keys(this.obstacles).forEach(num => {
        this.obstacles[num].forEach(tree => {
          if (this.beenHit(squirrel, tree)) {
            dead = true;
          }
        })
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