const MovingObject = require('./moving_object.js');
const Squirrel = require('./squirrel');
const Obstacle = require('./obstacles');
const Game = require('./game');

window.MovingObject = MovingObject;
window.Squirrel = Squirrel;
window.Obstacle = Obstacle;
window.Game = Game;

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  console.log("It's working! It's working!");
  const ctx = canvas.getContext('2d')
  window.ctx = ctx;

})