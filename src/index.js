import GameView from './game_view.js'

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d')
  window.ctx = ctx;
  window.onload = () => {
    const newGame = new GameView(ctx);
    newGame.drawControlsMenu();
  }
})