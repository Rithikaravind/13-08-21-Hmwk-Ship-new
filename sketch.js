var ship;
var sea;
function preload(){
seaImg = loadImage("sea.png");
shipimg1 = loadAnimation("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200)
  sea.addImage("sea", seaImg);
  sea.scale = 0.5
  sea.velocityX = -2

  
}

function draw() {
  background("blue"); 
 
  if (sea.x < 100){
   sea.x = 200;
  }
 drawSprites()
} 