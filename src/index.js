import GameView from './game_view.js'
import Squirrelicon from './sprites/squirrelicon';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d')
  window.ctx = ctx;

  const favicon = new Squirrelicon(true);
  window.onload = () => {
    const newGame = new GameView(ctx);
    newGame.drawControlsMenu();
    setInterval(() => {favicon.step(0, 0)}, 300);
  }
})