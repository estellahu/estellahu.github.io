var x = [],
  y = [],
  segNum = 160,
  segLength = 4;

for (var i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  var canvas = createCanvas(windowWidth, windowWidth);
      canvas.parent('squig');

  strokeWeight(5);
  stroke('red');
}

function draw() {
  background(255);
  dragSegment(0, mouseX, mouseY);
  for( var i=0; i<x.length-1; i++) {
    dragSegment(i+1, x[i], y[i]);
  }
}

function dragSegment(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}