class Menu {
  constructor(ctx) {
    this.ctx = ctx;
    this.menuImage = document.getElementById('menu-image');
  }

  draw() {
    debugger;
    this.ctx.drawImage(this.menuImage, 0, 0, 300, 720);
    this.ctx.font = "bold 100px titlefont";
    // this.ctx.fontStyle = 'oblique';
    this.ctx.fillStyle = "white";
    this.ctx.fillText("Squirrel jamS", 372, 300);

    this.ctx.font = 'bold 35px titlefont';
    this.ctx.fillText("press space to start", 517, 400)
    debugger;
  }
}

export default Menu;