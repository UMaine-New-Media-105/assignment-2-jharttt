function setup() {
  createCanvas(400, 400);
}

function drawLetterJ(x, y, scaleValue) {
  push();
  translate(x, y);
  scale(scaleValue);
  // Letter J drawn with vertexes
  beginShape();
  vertex(0, 0);
  vertex(160, 0);
  vertex(160, 30);
  vertex(100, 30);
  vertex(100, 180);
  vertex(20, 180);
  vertex(20, 155);
  vertex(60, 155);
  vertex(60, 30);
  vertex(0, 30);
  endShape(CLOSE);
  pop();
}

function draw() {
  background(255);
  // can change x y and scale here
  drawLetterJ(0, 0, 1);
}

