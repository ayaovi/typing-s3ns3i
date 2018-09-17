var keys;
var multiplier = 40;

function preload() {
	readFile("config.json", function(text){
    data = JSON.parse(text);
		data.keys.forEach(key => {
			keys.push(new Key(key.coord, key.width, key.length, key.code, key.name, key.values));
		});
	});
}

class Key {
	constructor(coord, width, length, code, name, values) {
		this.coord = coord;
		this.width = width;
		this.length = length;
		this.code = code;
		this.name = name;
		this.values = values;
	}

	draw () {
		fill(255);
		rect(this.coord.x * multiplier, this.coord.y * multiplier, this.length * multiplier, this.width * multiplier);
	}
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
	var container = document.getElementById('container');
	container.style.left = (displayWidth - 800) / 2 + 'px';
	container.style.top = (windowHeight - 600) / 2 + 'px';
	
	var canvas = createCanvas(800, 600);
	canvas.parent('container');
	
	keys = [];
}

function draw() {
	background(0);
	keys.forEach(key => {
		key.draw();
	});
}