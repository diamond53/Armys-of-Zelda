window.Game = {}; // Initiate Game object
Game.saves = {'slot1':{}, 'slot2':{}, 'slot3':{}}; // Initiate save structure
Game.init = function() { // Function called when page start
	Game.setScreen("#load");
	Game.loadSave()
	Game.main()
}
$(document).ready(function() { // jQuery code. Fires when page ready and responsive. Do not edit
	Game.init()
})
Game.load = function(slot) { // WIP. Save loading function
	if (slot === 0) {
		Game.setScreen("#saves")
		return
	}
}
Game.new = function(slot) { // Creates a new save using Game.slot() object constructor
	if (slot === 0) {
		Game.setScreen("#saves")
		return
	}
	Game.saves["slot"+slot] = new Game.slot()
}
Game.save = function() { // Save
	localStorage.setItem('psim-save', btoa(JSON.stringify(Game.saves)));
}
Game.loadSave = function() { // Load Save
	if (localStorage.getItem('psim-save')) {
		Game.saves = JSON.parse(atob(localStorage.getItem('psim-save')));
	}
}
Game.setScreen = function(tab) { // Sets Screen. Usage: Game.setScreen("#[id attribute of <div> tag]")
	$(".screen").removeClass('hidden visible');
	$(".screen").addClass('hidden');
	$(tab).addClass('visible');
	$(tab).removeClass('hidden');
}
Game.slot = function() { // Object constructor for new save
	this.time = 0;
}
Game.main = function() { // Game loop function. Runs before each frame. 30fps = 30 runs a second. 60fps = 60 runs a second. Saves game.
	window.requestAnimationFrame(Game.main);
	Game.save()
}
