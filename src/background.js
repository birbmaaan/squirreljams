class Background {
  constructor() {
    const background = document.getElementById("game-background");
    this.ctx = background.getContext('2d');
    this.backgroundImage = document.getElementById('background-image');
    this.imgHeight = 0;
  }

  draw() {
    const scrollSpeed = 0.5;
    this.ctx.drawImage(this.backgroundImage, 0, this.imgHeight, 1280, 720);
    this.ctx.drawImage(this.backgroundImage, 0, this.imgHeight - 720, 1280, 720);
    this.imgHeight += scrollSpeed;
    if (this.imgHeight === 720) this.imgHeight = 0;
  }

  clear() {
    this.ctx.clearRect(0, 0, 1280, 720);
  }
}

export default Background;