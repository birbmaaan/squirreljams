class ControlsMenu {
  constructor() {
    const pauseCanvas = document.getElementById('game-pause');
    this.ctx = pauseCanvas.getContext('2d');
  }

  draw() {
    ctx.beginPath();
    ctx.rect(0, 0, 1280, 720);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();

    this.ctx.fillStyle = "white";
    this.ctx.font = 'bold 30px titlefont';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Take control of your squirrel and avoid the branches', 640, 80);
    this.ctx.fillText("Be careful! Where there's one squirrel, there are bound to be more", 640, 140);
    this.ctx.fillText('Move all the way to one side to jump off the tree and around branches', 640, 200);
    
    this.ctx.fillText('~ Controls ~', 640, 280);
    this.ctx.fillText('First Squirrel............d f', 640, 320);
    this.ctx.fillText('Second Squirrel........j k', 640, 360);
    this.ctx.fillText('Third Squirrel..........a s', 640, 400);
    
    this.ctx.fillText('Pause.....................space', 640, 460);
    this.ctx.fillText('Sound on/off................m', 640, 500);
    this.ctx.fillText('Pause anytime to see the controls', 640, 600);
    this.ctx.fillText("press space to continue", 640, 680);
  }
}

export default ControlsMenu;