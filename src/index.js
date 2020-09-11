import Squirrel from './squirrel.js';
import Obstacle from './obstacles.js';
import Game from './game.js';
import GameView from './game_view.js'
import SquirrelSprite from './sprites/squirrel_sprite';

window.SquirrelSprite = SquirrelSprite;

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  console.log("It's working! It's working!");
  const ctx = canvas.getContext('2d')
  window.ctx = ctx;

  const sprite = new SquirrelSprite(ctx);
  const game = new Game();
  const newGame = new GameView(game, ctx);
  newGame.bindKeyHandlers();

  // newGame.menu();
})