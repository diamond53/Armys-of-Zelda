window.Game = {};
Game.saves = {'slot1':{}, 'slot2':{}, 'slot3':{}};
Game.init = function() {
	Game.setScreen("#start");
	Game.loadSave()
	Game.main()
}
$(document).ready(function() {
	Game.init()
})
Game.load = function(slot) {
	if (slot === 0) {
		Game.setScreen("#saves")
		return
	}
}
Game.new = function(slot) {
	if (slot === 0) {
		Game.setScreen("#saves")
		return
	}
	Game.saves["slot"+slot] = new Game.slot()
	Game.save()
}
Game.save = function() {
	localStorage.setItem('psim-save', btoa(JSON.stringify(Game.saves)));
}
Game.loadSave = function() {
	if (localStorage.getItem('psim-save')) {
		Game.saves = JSON.parse(atob(localStorage.getItem('psim-save')));
	}
}
Game.setScreen = function(tab) {
	$(".screen").removeClass('hidden visible');
	$(".screen").addClass('hidden');
	$(tab).addClass('visible');
	$(tab).removeClass('hidden');
}
Game.slot = function() {
	this.time = 0;
}
Game.main = function() {
	window.requestAnimationFrame(Game.main);
	Game.save()
}
