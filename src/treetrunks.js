const COLUMNS = [500, 80, 920];

class Treetrunk {
  constructor(num) {
    debugger;
    const gameLevel = document.getElementById("game-level");
    this.ctx = gameLevel.getContext("2d");
    this.treeImage = document.getElementById('tree-trunks');
    this.imgHeight = 0;
    this.column = COLUMNS[num];
  }
  
  draw() {
    const scrollSpeed = 5;
    debugger;
    // this.ctx.clearRect(0, 0, 1280, 720);
    this.ctx.drawImage(this.treeImage, this.column, this.imgHeight, 280, 1000);
    this.ctx.drawImage(this.treeImage, this.column, this.imgHeight - 1000, 280, 1000);
    this.imgHeight += scrollSpeed;
    if (this.imgHeight === 1000) this.imgHeight = 0;
  }
}

export default Treetrunk;