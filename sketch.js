const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ground


function setup() {
	createCanvas(1600, 700);
	
    
    ground=new Ground(680,800,1800,20);

	//engine = Engine.create();
	//world = engine.world;
	
	

	//Engine.run(engine);
  
}


function draw() {
 
  background(230);
 
  ground.display();
 
}

