
var movingRect;
var fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite (100,100,30,80)
  fixedRect = createSprite(400,200,50,60)
  movingRect.shapeColor= "green"
  fixedRect.shapeColor = "green"

 

}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
console.log(movingRect.x-fixedRect.x)
  console.log(movingRect.width/2 + fixedRect.width/2)

  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)
{
  movingRect.shapeColor= "red"
  fixedRect.shapeColor = "red"
}
else{
  movingRect.shapeColor= "green"
  fixedRect.shapeColor = "green"


}


  drawSprites();
}