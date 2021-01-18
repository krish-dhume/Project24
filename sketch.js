
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine,myworld;
var ground;
var stone;
var rubber;
var hammer;
var sand;
var iron;
function preload()
{
	
}

function setup() {
	createCanvas(1200,500);


	myengine = Engine.create();
	myworld = myengine.world;

	//Create the Bodies Here.
  ground=new Ground(600,500,1200,50);
  stone=new Stone(600,450,70,70);
	rubber=new Rubber(900,450,30)
   hammer=new Hammer(700,320,30);
   sand=new Sand(500,400);
   sand1=new Sand(470,400);
   sand2=new Sand(450,400);
   sand3=new Sand(430,400);
   iron=new Iron(365,400,100,50);
   sand4=new Sand(300,400);
   sand5=new Sand(200,400);
   sand6=new Sand(50,400);
}


function draw() {
	background(0,255,255);
	Engine.update(myengine);
  

	ground.display();
  stone.display();
 rubber.display();
 hammer.display();
 sand.display();
sand1.display();
sand2.display();
sand3.display();
iron.display();
sand4.display();
sand5.display();
sand6.display();
  drawSprites();
 
}



