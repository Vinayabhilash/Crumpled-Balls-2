
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ball1;
var Ground1;
var wallleft, wallright;
var wallbase;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Ball1 = new Ball(50,600);
	Ground1 = new Ground(400,700,width,20);
	wallleft = new Box(450,625,20,100);
	wallright = new Box(700,625,20,100);
	wallbase = new Box(575,680,250,20);
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background("white");


  Ball1.display();
  Ground1.display();
  wallbase.display();
  wallleft.display();
  wallright.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
if (keyCode === RIGHT_ARROW){
	Matter.Body.applyForce(Ball1.body, Ball1.body.position, {x:85, y:-85})
}	
}



