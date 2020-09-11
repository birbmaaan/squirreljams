import Game from './game.js';
import GameView from './game_view.js'
import SquirrelSprite from './sprites/squirrel_sprite';
import BranchSprite from './sprites/branch_sprite';

window.BranchSprite = BranchSprite;
window.SquirrelSprite = SquirrelSprite;

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  console.log("It's working! It's working!");
  const ctx = canvas.getContext('2d')
  window.ctx = ctx;

  const newGame = new GameView(ctx);
  newGame.bindKeyHandlers();
  newGame.menu();
})