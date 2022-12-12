let img;
let cnv;


function preload(){
  img = loadImage('ku.jpg')
}

function setup() {
  cnv = createCanvas(img.width,img.height);
  // print(img.width, img.height)
  let newCanvasX = (windowWidth - img.width)/2
  let newCanvasY = (windowHeight - img.height)/2;
  // cnv.position(newCanvasX,newCanvasY);
  
}

function draw(){
      for(let col = 0; col<img.width;col+=6){
      for (let row = 0; row<img.height;row+=6){
      let c = img.get(col,row) //get color
      stroke(color(c));

      strokeWeight(random(10));
      rect(col,row,10,mouseY);

      // close the screen

      pop();
      xpos = width-mouseX; //opposite way
      ypos = width-mouseY;
      // strokeWeight(15);
      fill(0);
      // stroke(200,200,200,200);
      rect(width, width, -xpos, -ypos); //the starting point is bottom right
      push()
    }
  }
}
