const BRANCHES = {
  'smallLeft': [3, 3, 67, 26, 300, 120, 190, 40],
  'smallRight': [74, 3, 66, 26, 300, 120, 10, 40],
  'bigLeft': [3, 33, 66, 44, 300, 200, 200, 115],
  'bigRight': [74, 33, 66, 44, 300, 200, 5, 115],
  'smallMiddle': [3, 81, 47, 18, 220, 60, 38, 10],
  'bigMiddle': [3, 81, 47, 18, 220, 60, 38, 10],
}

class BranchSprite {
  constructor(ctx, branchSize) {
    this.ctx = ctx;
    this.spriteSheet = document.getElementById('branches');
    this.side = BRANCHES[branchSize];
    this.width = BRANCHES[branchSize][4];
    this.height = BRANCHES[branchSize][5];
    this.cycleLoop = [];
    this.currentLoopIndex = 0;
  }

  draw(canvasX, canvasY) {
    const {width, height} = this;
    this.ctx.drawImage(
      this.spriteSheet, 
      this.side[0], this.side[1], 
      this.side[2], this.side[3], 
      canvasX - this.side[6], canvasY - this.side[7], 
      width, height);
  }

  step(canvasX, canvasY) {
    this.draw(this.cycleLoop[this.currentLoopIndex], 1, canvasX - 30, canvasY - 5);
    this.currentLoopIndex++;
    if (this.currentLoopIndex >= this.cycleLoop.length) {
      this.currentLoopIndex = 0;
    }
  }
}

export default BranchSprite;