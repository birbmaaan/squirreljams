import MovingObject from './moving_object';
import Squirrel from './squirrel';
import Obstacle from './obstacles';
import Game from './game';
import GameView from './game_view'

window.MovingObject = MovingObject;
window.Squirrel = Squirrel;
window.Obstacle = Obstacle;
window.Game = Game;
window.GameView = GameView;

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  console.log("It's working! It's working!");
  const ctx = canvas.getContext('2d')
  window.ctx = ctx;

  const game = new Game();
  const newGame = new GameView(game, ctx);
  newGame.start();
})