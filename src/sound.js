class Sound {
  constructor(name, sfx) {
    this.sound = document.getElementById(name);
    this.sound.muted = false;
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
