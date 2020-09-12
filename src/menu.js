class Menu {
  constructor(ctx) {
    this.ctx = ctx;
    this.menuImage = document.getElementById('menu-image');
    this.imgWidth = 1440;
  }

  draw() {
    const scrollSpeed = .5;
    this.ctx.drawImage(this.menuImage, this.imgWidth, 0, 1440, 720);
    this.ctx.drawImage(this.menuImage, this.imgWidth - 1440, 0, 1440, 720);

    this.imgWidth -= scrollSpeed;
    if (this.imgWidth === 0) this.imgWidth = 1440;
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = 'center';
    this.ctx.font = "bold 100px titlefont";
    this.ctx.fillText("Squirrel jamS", 640, 300);

    this.ctx.font = 'bold 35px titlefont';
    this.ctx.fillText("press space to start & pause", 640, 400)
  }
}

export default Menu;