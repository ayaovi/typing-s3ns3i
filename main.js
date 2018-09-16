var keys;

function preload() {
	readFile("config.json", function(text){
    data = JSON.parse(text);
		keys = data.keys;
	});
}

function readFile(path, callback) {
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open("GET", path, true);
	xobj.onreadystatechange = function() {
		if (xobj.readyState === 4 && xobj.status == "200") {
			callback(xobj.responseText);
		}
	}
	xobj.send(null);
}

function setup() {
	/**
	 * displayWindow and windowHeight are p5.js variables.
	 */
	var container = document.getElementById('container');
	container.style.left = (displayWidth - 800) / 2 + 'px';
	container.style.top = (windowHeight - 600) / 2 + 'px';
	
	var canvas = createCanvas(800, 600);
	canvas.parent('container');
	
	keys = [];
}

function draw() {
	background(0);
}