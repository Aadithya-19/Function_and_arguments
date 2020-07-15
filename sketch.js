var fixedRect, movingRect;
var a, b;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";

  //movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  
  a = createSprite(800, 100, 50, 80);
  a.shapeColor = "green";
  //a.debug = true;

  b = createSprite(800, 800,80,30);
  b.shapeColor = "green";

  //b.debug = true;

  b.velocityY = -5;
  a.velocityY = +5;
}

function draw() {
  background(0,0,0);  



  bounceOff(fixedRect, movingRect);
  bounceOff(a, b);
  drawSprites();
}

