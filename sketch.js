let pixels = [];
let yoff = 0;
let offset = 0.01;
let ROYGBIV = [];
let lerpColors = [0,1];
let lerpColorSpeed = 120;

function setup() {
	createCanvas(800, 800);	
	ROYGBIV = [color(255, 0, 0),
		color(255, 165, 0),
		color(255, 255, 0),
		color(0, 255, 0),
		color(0, 0, 255),
	 	color(75, 0, 130),
	 	color(238, 130, 238)
	]
}

function draw() {
  // put drawing code here
	update();
	
	background(51);
	noFill();
	stroke(changeColor());
	strokeWeight(5);

	beginShape();
	for (let p of pixels) {
		vertex(p.x, p.y);
	}
	endShape();
}

function update() {
	let y = noise(yoff) * height;
	let p = createVector(width / 2, y);
	pixels.push(p);
	
	for (let i = pixels.length - 1; i >= 0; i--) {
		pixels[i].x -= 1;
		if (pixels[i].x < 0) {
			pixels.splice(i, 1);
		}
	}
	yoff += offset;
}

function changeColor() {
	if (frameCount % lerpColorSpeed == 0) {
		if (lerpColors[0] == ROYGBIV.length - 1) {
			lerpColors[0] = 0;
			lerpColors[1] += 1;
		} else if (lerpColors[1] == ROYGBIV.length - 1) {
			lerpColors[0] += 1;
			lerpColors[1] = 0;
		}	else {
			lerpColors[0] += 1;
			lerpColors[1] += 1;
		}
	}
	let amt = map((frameCount % lerpColorSpeed), 0, lerpColorSpeed, 0, 1);
	let color = lerpColor(ROYGBIV[lerpColors[0]], ROYGBIV[lerpColors[1]], amt);
	return color;
}
