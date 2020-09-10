
class Background {
  constructor() {
    debugger;
    const gameLevel = document.getElementById("game-level");
    this.ctx = gameLevel.getContext("2d");
    this.treeImage = document.getElementById('tree-image');
    this.imgHeight = 0;
  }
  
  draw() {
    const scrollSpeed = 5;
    debugger;
    this.ctx.drawImage(this.treeImage, 485, this.imgHeight, 300, 1000);
    this.ctx.drawImage(this.treeImage, 485, this.imgHeight - 1000, 300, 1000);
    this.imgHeight += scrollSpeed;
    if (this.imgHeight === 1000) this.imgHeight = 0;
  }
}

export default Background;