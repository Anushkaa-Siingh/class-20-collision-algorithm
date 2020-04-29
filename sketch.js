
var fixedrect;
var movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect= createSprite(400, 200, 50, 50);
  movingrect= createSprite(345,150,50,50);
fixedrect.shapeColor="yellow";
movingrect.shapeColor="yellow";
fixedrect.debug=true;
movingrect.debug=true;


}

function draw() {
  background(0);  
movingrect.x=World.mouseX;
movingrect.y=World.mouseY;

if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 
  && movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
  && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2
  && movingrect.y-fixedrect.y<movingrect.height/2+movingrect.height/2){ 
fixedrect.shapeColor="blue";
movingrect.shapeColor="blue";

   } else{
    fixedrect.shapeColor="yellow";
    movingrect.shapeColor="yellow";
   }



  drawSprites();
}