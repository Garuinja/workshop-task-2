function setup() {
  createCanvas(400, 400);
  background(220);
  setInterval(makePacman, 500);
}

function mousePressed(){
  setTimeout(makeButterfly, 2000);
}

// function draw() {
//   background(220);
//   quad(20,20, 40,20, 40,40, 20,40);

//   // noStroke();
//   // quad(100,200,140,350,260,350,300,200);
//   // circle(200,200,200);
//   // triangle(200,200,180,240,220,240);
//   // triangle(120,170,130,210,170,200);
// }
function makeButterfly(){
  noStroke();
  fill(237, 129, 29);
  let y = random(0,height);
  let x = random(0,width);
  quad(x,y, x+20,y+50, x+60,y, x+40,y+50);
}
function makePacman(){
  noStroke();
  fill(255,255,0);
  let y = random(0, height);
  let x = random(0, width);
  arc(x,y,80,80,0,6,PIE);
  fill(220);
  arc(x, y, 80, 80, 0, 0.6, PIE);
  stroke();
}