
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var ground;
var left;
var right;

function preload()
{
	
}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

     var ball_option={

		 isStatic:false,
		 restitution:0.3,
		 friction:0,
		density:1.2,
	 }
	 ball = Bodies.circle(200,200,20,ball_option);
	 World.add(world,ball)

	Engine.run(engine);
  
	ground =new Ground(700,490,1500,10);
	left = new Ground(900,450,10,70);
	right = new Ground(1050,450,10,70);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.show();
  left.show();
  right.show();

  ellipse(ball.position.x,ball.position.y,20)
  Engine.update(engine);


  drawSprites();
 
}

function keyPressed (){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:5.0,y:0})
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-5.0})
	}
}


