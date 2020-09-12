import GameView from './game_view.js'
import SquirrelSprite from './sprites/squirrel_sprite';
import BranchSprite from './sprites/branch_sprite';
import Pause from './pause';

window.BranchSprite = BranchSprite;
window.SquirrelSprite = SquirrelSprite;
window.Pause = Pause;

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  console.log("It's working! It's working!");
  const ctx = canvas.getContext('2d')
  window.ctx = ctx;

  const newGame = new GameView(ctx);
  newGame.menu();
})