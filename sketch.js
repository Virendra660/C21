var fixedRect,movingRect;

function setup() 
{
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="red";
  movingRect= createSprite(400, 200, 80, 30);
  movingRect.shapeColor="red";
  R1=createSprite(700,100,50,50);
  movingRect.velocityX=-2;
}

function draw() 
{
  
  background(255,255,255);  
  //movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;
  
 //console.log(movingRect.x-fixedRect.x)
  
 //if(isTouching(movingRect,R1)){
 // movingRect.width=200;
  //movingRect.shapeColor="green";
 //}else{
 // text("not touched",50,50);
 //}
 bounceOff(movingRect,fixedRect);
  drawSprites();
}


