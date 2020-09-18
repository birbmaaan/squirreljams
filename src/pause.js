class Pause {
  constructor() {
    const pauseCanvas = document.getElementById('game-pause');
    this.ctx = pauseCanvas.getContext('2d');
    this.pauseImage = document.getElementById('pause-image');

    this.score = 0;
  }

  draw() {
    this.ctx.drawImage(this.pauseImage, 340, 100, 600, 420);

    this.ctx.fillStyle = "white";
    this.ctx.font = 'bold 30px titlefont';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('~ Controls ~', 640, 130);
    this.ctx.fillText('First Squirrel............d f', 640, 200);
    this.ctx.fillText('Second Squirrel........j k', 640, 240);
    this.ctx.fillText('Third Squirrel..........a s', 640, 280);

    this.ctx.fillText('Pause.....................space', 640, 380);
    this.ctx.fillText('Sound on/off................m', 640, 420);
    this.ctx.fillText("press space to continue", 640, 510);
  }

  gameOver() {
    this.ctx.drawImage(this.pauseImage, 340, 100, 600, 420);
    this.ctx.fillStyle = "white";
    this.ctx.font = 'bold 30px titlefont';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('you died', 640, 300);
    this.ctx.fillText("press space to continue", 640, 510);
  }

}

export default Pause;