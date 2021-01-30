var hr 
var mn 
var sc 

var scAngle;
var mnAngle;
var hrAngle;

function setup() {
  createCanvas(800,400);
  hr = hour()
  mn = minute()
  sc = second()
}

function draw() {
  background("black");  
  scAngle = map(sc, 0, 60, 0, 360)
  mnAngle = map(mn, 0, 60, 0, 360)
  hrAngle = map(hr, 0, 12, 0, 360)

 
  push()
  rotate(scAngle)
  translate(0,0)
  stroke("red")
  strokeWeight(7)
  line(400,200,480,170)
  pop()

  push()
  rotate(mnAngle)
  translate(0,0)
  stroke("yellow")
  strokeWeight(7)
  line(400,200,450,160)
  pop()

  push()
  rotate(hrAngle)
  translate(0,0)
  stroke("blue")
  strokeWeight(7)
  line(400,200,440,200)
  pop()

  stroke("red")
 strokeWeight("7")
 fill("black")
  arc(405,200,100,150,0,scAngle)

  stroke("yellow")
 strokeWeight("7")
 fill("black")
  arc(394,200,110,150,0,mnAngle)

  stroke("blue")
 strokeWeight("7")
 fill("black")
  arc(392,190,100,150,0,hrAngle)


}