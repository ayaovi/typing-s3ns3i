function setup() {
	/**
	 * displayWindow and windowHeight are p5.js variables.
	 */
	var container = document.getElementById('container');
	container.style.left = (displayWidth - 800) / 2 + 'px';
	container.style.top = (windowHeight - 600) / 2 + 'px';
	
	var canvas = createCanvas(800, 600);
	canvas.parent('container');
}

function draw() {
	background(0);
}