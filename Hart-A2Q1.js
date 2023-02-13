function setup() {
  let offset = 40;
  let current = 100;
  let current2 = 50;
  let increment = 20;
  let increment2 = 10;
  createCanvas(400, 400);
  background(225, 135, 155);

  // Background tiles
  fill("hsla(39, "+current+"%, 50%, 1)");
  drawRow(offset);
  current = current - increment;
  fill("hsla(39, "+current+"%, 50%, 1)");
  drawRow(offset * 3);
  current = current - increment;
  fill("hsla(39, "+current+"%, 50%, 1)");
  drawRow(offset * 5);
  current = current - increment;
  fill("hsla(39, "+current+"%, 50%, 1)");
  drawRow(offset * 7);
  current = current - increment;
  fill("hsla(39, "+current+"%, 50%, 1)");
  drawRow(offset * 9);

  // J tiles
  fill("hsla(180, 100%, "+current2+"%, 1)")
  ellipse(offset * 3, offset * 3, 80, 80);
  ellipse(offset * 5, offset * 3, 80, 80);
  ellipse(offset * 7, offset * 3, 80, 80);
  current2 = current2 - increment2;
  fill("hsla(180, 100%, "+current2+"%, 1)")
  ellipse(offset * 5, offset * 5, 80, 80);
  current2 = current2 - increment2;
  fill("hsla(180, 100%, "+current2+"%, 1)")
  ellipse(offset * 5, offset * 7, 80, 80);
  current2 = current2 - increment2;
  fill("hsla(180, 100%, "+current2+"%, 1)")
  ellipse(offset * 3, offset * 9, 80, 80);
  ellipse(offset * 5, offset * 9, 80, 80);
}
// Row drawing function
function drawRow(y) {
  let offset = 40;
  ellipse(offset, y, 80, 80);
  ellipse(offset * 3, y, 80, 80);
  ellipse(offset * 5, y, 80, 80);
  ellipse(offset * 7, y, 80, 80);
  ellipse(offset * 9, y, 80, 80);
}
