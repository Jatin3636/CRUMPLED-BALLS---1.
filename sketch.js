
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;
var ground;
var dustbinPart1,dustbinPart2,dustbinPart3;
function preload()
{
	
}

function setup() {
	createCanvas(820, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = new Ground(600,height,1200,40);
	paperObject = new Paper(70,200,40);
	dustbinPart1 = new Dustbin(width/2 + 275, height-60,150,20);
	dustbinPart2 = new Dustbin(width/2 + 200, height-125,20,150);
	dustbinPart3 = new Dustbin(width/2 + 350, height-125,20,150);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");

  console.log(paperObject.y);
  if(keyDown(UP_ARROW)) {
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:100,y:-100});
  }
  drawSprites();
  ground.display();
	paperObject.display();
	dustbinPart1.display();
	dustbinPart2.display();
	dustbinPart3.display();
}



