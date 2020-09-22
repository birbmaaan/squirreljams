const SQUIRREL_COLUMN = [[440, 890],[0, 480],[860, 1280]]

class SquirrelSprite {
  constructor(ctx, squirrelNo) {
    this.ctx = ctx;
    this.spriteSheet = document.getElementById('squirrel');
    this.width = 100;
    this.height = 100;
    this.column = SQUIRREL_COLUMN[squirrelNo];
    this.cycleLoop = [55, 81];
    this.jumpLoop = [28, 80]
    this.currentLoopIndex = 0;
  }

  draw(sheetX, sheetY, canvasX, canvasY) {
    const {width, height} = this;

    this.ctx.drawImage(this.spriteSheet, sheetX, sheetY, 22, 22, canvasX, canvasY, width, height);
    // this.ctx.drawImage(this.spriteSheet, 55, 1, 22, 22, 400, 400, width, height);
    // this.ctx.drawImage(this.spriteSheet, 81, 1, 22, 22, 500, 400, width, height);
  }

  step(canvasX, canvasY) {
    debugger;
    this.draw(this.cycleLoop[this.currentLoopIndex], 1, canvasX - 30, canvasY - 5);
    this.currentLoopIndex++;
    if (this.currentLoopIndex >= this.cycleLoop.length) {
      this.currentLoopIndex = 0;
    }
  }

  jump(canvasX, canvasY, direction) {
    let jumpPos;
    let newX;
    if (direction === 'left') {
      jumpPos = 55;
      newX = canvasX - 30;
    } else {
      jumpPos = 81;
      newX = canvasX - 10;
    }
    this.draw(jumpPos, this.jumpLoop[this.currentLoopIndex], newX, canvasY - 5);
    this.currentLoopIndex++;
    if (this.currentLoopIndex >= this.cycleLoop.length) {
      this.currentLoopIndex = 0;
    }
  }
}

export default SquirrelSprite;