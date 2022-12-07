function setup() {
  createCanvas(720,720) 
  //the canvas size is 360*2 * 360*2
  // background(220,100,100);
  angleMode(DEGREES);
  // rectMode(CENTER);
}

function draw() {
  background(245);//background color is white
  // translate(200,200);
  // rotate(-90);

  //define the hr mn sc function
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  //colors are picked from Mondrian New York City 1
  //blue one is second
  strokeWeight(15);
  stroke(65,61,133,200); //stroke(v1, v2, v3, [alpha])
  noFill();
  let end1 = map(sc,0,60,0,720); //map(value, start1, stop1, start2, stop2)
  rect(width, 0, -end1, end1); //the rectangle will gradually take up the page
  push();
  
  //yellow one is minute
  pop();
  strokeWeight(15);
  noFill();
  stroke(248,231,78,200);
  let end2 = map(mn,0,60,0,720);
  rect(0, width, end2, -end2);
  push();
  
  //red one is hour
  pop();
  strokeWeight(15);
  noFill();
  stroke(191,43,38,200);
  let end3 = map(hr,0,24,0,720);
  rect(0, 0, end3, end3);
  push();
  
  
  // //grey rectangle: mouse hoving 
  // pop();
  // xpos = width-mouseX; //opposite way
  // ypos = width-mouseY;
  // strokeWeight(15);
  // noFill();
  // stroke(200,200,200,200);
  // rect(width, width, -xpos, -ypos); //the starting point is bottom right
  // push();
  
  //Plot the numbers
  pop();
  // rotate(90);
  stroke(200,200,200,90);
  strokeWeight(15)
  fill(255);
  textSize(70);
  textFont("monospace");
  //text(str, x, y, [x2], [y2])
  text(nf(hr,2),hr*30,hr*30); // 720/24=30 x/y axis is divided into 24
  textSize(60);
  text(nf(mn,2),mn*12,(width-mn*12+20)); // 720/60=12
  textSize(50);
  text(nf(sc,2), (width-sc*12-40) , sc*12); // 720/60=12
  
}  
