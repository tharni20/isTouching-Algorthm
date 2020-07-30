var rect1
var rect2
function setup() {
  createCanvas(800,400);
 rect1 = createSprite (150,200,50,50);
 rect2 = createSprite (80,300,60,100);

 rect1.shapeColor = "green";
 rect2.shapeColor = "green";

 rect1.debug = true;
 rect2.debug = true;
}


function draw() {
  background("black");  

 rect2.x = World.mouseX;
 rect2.y = World.mouseY; 

 if ((rect2.x - rect1.x < rect1.width/2 + rect2.width/2) && 
 (rect1.x - rect2.x < rect1.width/2 + rect2.width/2) &&
 (rect2.y - rect1.y < rect1.height/2 + rect2.height/2) &&
 (rect1.y - rect2.y < rect1.height/2 + rect2.height/2)) {
 rect1.shapeColor = "red";
 rect2.shapeColor = "red";
}
 else {
 rect1.shapeColor = "green";
 rect2. shapeColor = "green";
}

  drawSprites();
}