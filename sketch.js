
var r = 15;
var g = 150;
var b=350;


function setup(){

  createCanvas(1200,400);
}


function draw(){
  r=map(mouseX,0,1200,0,300);
  g =map(mouseX,50,900,100,200);
  b= map(mouseX,0,1200,300,0);
  background(r,g,b);
  fill(180);
  ellipse(mouseX,100,100,100);
}