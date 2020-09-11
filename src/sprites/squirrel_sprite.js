class SquirrelSprite {
  constructor(ctx) {
    this.ctx = ctx;
    this.spriteSheet = document.getElementById('squirrel');
    this.width = 100;
    this.height = 100;
    this.cycleLoop = [55, 81];
    this.currentLoopIndex = 0;
    this.frameCount = 0;
  }

  draw(sheetX, sheetY, canvasX, canvasY) {
    const {width, height} = this;

    this.ctx.drawImage(this.spriteSheet, sheetX, sheetY, 22, 22, canvasX, canvasY, width, height);
    // this.ctx.drawImage(this.spriteSheet, 55, 1, 22, 22, 400, 400, width, height);
    // this.ctx.drawImage(this.spriteSheet, 81, 1, 22, 22, 500, 400, width, height);
  }

  step() {
    this.frameCount++;
    if (this.frameCount < 5) {
      requestAnimationFrame(this.step.bind(this));
      return;
    }

    this.frameCount = 0;
    this.ctx.clearRect(0, 0, 1280, 720);
    this.draw(this.cycleLoop[this.currentLoopIndex], 1, 400, 400);
    this.currentLoopIndex++;
    if (this.currentLoopIndex >= this.cycleLoop.length) {
      this.currentLoopIndex = 0;
    }
    requestAnimationFrame(this.step.bind(this));
  }
}

export default SquirrelSprite;