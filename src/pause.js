class Pause {
  constructor() {
    const pauseCanvas = document.getElementById('game-pause');
    this.ctx = pauseCanvas.getContext('2d');
    this.pauseImage = document.getElementById('pause-image');

    this.score = 0;
  }

  draw(active) {
    // this.ctx.beginPath();
    // this.ctx.fillStyle = '#333333';
    // this.ctx.fillRect(340, 100, 600, 420);
    // this.ctx.stroke();
    this.ctx.drawImage(this.pauseImage, 340, 100, 600, 420);

    this.ctx.fillStyle = "white";
    this.ctx.font = 'bold 30px titlefont';
    this.ctx.textAlign = 'center';
    if (active === 1) {
      this.ctx.fillText('~ Avoid the branches! ~', 640, 130);
      this.ctx.fillText('press d and f to move left and right', 640, 240);
      this.ctx.fillText('move all the way to one side', 640, 300);
      this.ctx.fillText('to jump off the tree!', 640, 360);

    } else {
      this.ctx.fillText('~ Controls ~', 640, 130);

      this.ctx.fillText('Left Squirrel: a s', 640, 240);
      this.ctx.fillText('Middle Squirrel: d f', 640, 300);
      if (active === 3) {
        this.ctx.fillText('Right Squirrel: j k', 640, 360);
      }
    }
    this.ctx.fillText("press space to continue", 640, 510);
  }

}

export default Pause;