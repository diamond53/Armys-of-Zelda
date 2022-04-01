window.Game = {};
Game.saves = {'slot1':{}, 'slot2':{}, 'slot3':{}};
Game.init = function() {
	Game.setScreen("#start")
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
}
Game.save = function() {
	localStorage.setItem('psim-save', btoa(JSON.stringify(Game.saves)));
}
Game.loadSave = function() {
	Game.saves = JSON.parse(atob(localStorage.getItem('psim-save')));
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
