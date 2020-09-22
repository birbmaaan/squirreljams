class Squirrelicon {
  constructor(favicon) {
    this.faviconCanvas = document.getElementById('favicon-canvas');
    this.ctx = this.faviconCanvas.getContext('2d');
    this.spriteSheet = document.getElementById('squirrelicon');
    this.favicon = document.getElementById("favicon");
    if (favicon) {
      this.width = 32;
      this.height = 32;
    } else {
      this.width = 100;
      this.height = 100;
    }
    this.spriteCycle = [0, 27];
    this.currentLoopIndex = 0;
    this.faviconFrames = {};
  }

  draw() {
    debugger;
    const { width, height } = this;
    this.ctx.clearRect(0, 0, 100, 100);
    this.ctx.drawImage(this.spriteSheet, 
      this.spriteCycle[this.currentLoopIndex], 0, 22, 22, 
      0, 0, width, height);

    this.faviconFrames[this.currentLoopIndex] = this.faviconCanvas.toDataURL('image/x-icon');
  }

  step() {
    if (!this.faviconFrames[this.currentLoopIndex]) {
      this.draw();
    }
    this.favicon.href = this.faviconFrames[this.currentLoopIndex];
    
    this.currentLoopIndex++;
    if (this.currentLoopIndex >= this.spriteCycle.length) {
      this.currentLoopIndex = 0;
    }
  }
}

export default Squirrelicon;