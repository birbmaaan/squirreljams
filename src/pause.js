class Pause {
  constructor() {
    const pauseCanvas = document.getElementById('game-pause');
    this.ctx = pauseCanvas.getContext('2d');
  }

  draw(active) {
    debugger;
    this.ctx.beginPath();
    this.ctx.fillStyle = '#333333';
    this.ctx.fillRect(340, 100, 600, 420);
    this.ctx.stroke();

    this.ctx.fillStyle = "white";
    this.ctx.font = 'bold 30px titlefont';
    this.ctx.textAlign = 'center';
    if (active === 1) {
      this.ctx.fillText('~ Avoid the branches! ~', 640, 140);
      this.ctx.fillText('press d and f to move left and right', 640, 240);
      this.ctx.fillText('you can even jump off the tree!', 640, 300);
    } else {
      this.ctx.fillText('~ Controls ~', 640, 140);

      this.ctx.fillText('Left Squirrel: a s', 640, 240);
      this.ctx.fillText('Middle Squirrel: d f', 640, 300);
      if (active === 3) {
        this.ctx.fillText('Right Squirrel: j k', 640, 360);
      }
    }
    this.ctx.fillText("press space to continue", 640, 500);
  }
}

export default Pause;