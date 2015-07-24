// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var game = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  window.game = game;
  
  window.moveUp = function(){
	game.inputManager.emit("move", 0);
  }
  
  window.moveDown = function(){
	game.inputManager.emit("move", 2);
  }
   
  window.moveRight = function(){
	game.inputManager.emit("move", 1);
  }
  
  window.moveLeft = function(){
	game.inputManager.emit("move", 3);
  }
});
