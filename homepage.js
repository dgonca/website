function setup(){
  createCanvas(windowWidth, windowHeight);

}

function draw(){
  noStroke();
  var randomX = random(5, (windowWidth -5));
  var randomY = random(5, (windowHeight -5));
  fill(random(160, 250), random(40, 116), random(0, 140));
  ellipse(randomX, randomY, 30, 30);
}
