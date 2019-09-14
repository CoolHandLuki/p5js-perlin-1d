let pixels = [];
let y;

function setup() {
	createCanvas(800, 800);	
	y = width / 2;
}

function draw() {
  // put drawing code here
	update();
	
	background(0);
	noFill();
	stroke(255);
	
	beginShape();
	for (let p of pixels) {
		vertex(p.x, p.y);
	}
	endShape();
}

function update() {
	y = constrain(mouseY, 0, height);	
	
	let p = createVector(width / 2, y);
	pixels.push(p);
	
	for (let i = pixels.length - 1; i >= 0; i--) {
		pixels[i].x -= 1;
		if (pixels[i].x < 0) {
			pixels.splice(i, 1);
		}
	}
}
