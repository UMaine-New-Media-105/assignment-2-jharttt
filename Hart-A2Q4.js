function setup() {
  createCanvas(600, 400);
}

function draw() {
  backRect(0, 0, 600, 400, color(255, 0, 0), color(0, 0, 200));
  fill (255, 0, 0); // red ellipse for Japan
  ellipse (300, 200, 200);
}
function backRect(x, y, w, h, c1, c2) { // function that creates 2 rectangles representing Haiti
  fill(c1);
  rect(x, y, w, h);
  fill(c2);
  rect(x, y, w, h/2);

}
