
var box;



function setup() {
  createCanvas(900, 400);

  box= createSprite(200,200,20,20);
  
}

function draw() {
  background("black");


  if(keyDown(RIGHT_ARROW)){
    box.velocityX=5;
  }

  if(keyDown(LEFT_ARROW)){
    box.velocityX= -5;
  }
  if(keyDown(UP_ARROW)){
    box.velocityY=-5;
  }
  if(keyDown(DOWN_ARROW)){
    box.velocityY =5;
  }
  




  drawSprites();
}