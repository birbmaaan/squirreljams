class MovingObject {
  constructor() {
  }
  
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  move() {
    let position = this.pos;
    let speed = this.speed;
  
    this.pos = [position[0], position[1] + speed];
  }

}

export default MovingObject;