class Sound {
  constructor(src, sfx) {
    // this.sound = document.createElement("audio");
    // this.sound.src = src;
    this.sound = new Audio(src);
    this.sound.setAttribute("preload", "auto");
    if (!sfx) {  
      this.sound.setAttribute("loop", true);
    }
    this.sound.setAttribute("muted", true);
    this.sound.style.display = 'none';
    this.sound.crossOrigin = 'anonymous';
    document.body.appendChild(this.sound);
  }
  
  play() {
    this.sound.play();
  }

  playSFX() {
    this.sound.play();
    this.restart();
  }

  stop() {
    this.sound.pause();
  }

  restart() {
    this.sound.currentTime = 0;
  }

}

export default Sound;
// 57.46