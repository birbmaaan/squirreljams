class Menu {
  constructor(ctx) {
    this.ctx = ctx;
    this.menuImage = document.getElementById('menu-image');
  }

  draw() {
    debugger;
    this.ctx.drawImage(this.menuImage, 0, 0, 300, 720);
    debugger;
  }
}

export default Menu;