function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
// Letter J drawn with vertexes
  beginShape();
    vertex(120, 120);
    vertex(280, 120);
    vertex(280, 150);
    vertex(220, 150);
    vertex(220, 300);
    vertex(140, 300);
    vertex(140, 275);
    vertex(180, 275);
    vertex(180, 150);
    vertex(120, 150);
  
  
  endShape(CLOSE);
}
