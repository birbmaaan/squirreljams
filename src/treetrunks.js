
class Treetrunk {
  constructor() {
    debugger;
    const gameLevel = document.getElementById("game-level");
    this.ctx = gameLevel.getContext("2d");
    this.treeImage = document.getElementById('tree-trunks');
    this.imgHeight = 0;
  }
  
  draw() {
    const scrollSpeed = 5;
    debugger;
    this.ctx.clearRect(0, 0, 1280, 720);
    this.ctx.drawImage(this.treeImage, 500, this.imgHeight, 280, 1000);
    this.ctx.drawImage(this.treeImage, 500, this.imgHeight - 1000, 280, 1000);
    this.imgHeight += scrollSpeed;
    if (this.imgHeight === 1000) this.imgHeight = 0;
  }
}

export default Treetrunk;