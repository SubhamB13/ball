const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball;
var rope;
var ball1;
var ball2;
var ball3;
var ball4;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

    var ball_option = {
		restitution: 0.8,
		isStatic:true,
	}
	roof = Bodies.rectangle(395,100,190,20,roof_options);
    World.add(world,roof);

	ball = Bodies.circle(425,220,35,ball_option);
	World.add(world,ball);

	ball1 = Bodies.circle(460,220,35,ball_option);
	World.add(world,ball1);

	ball2 = Bodies.circle(390,220,35,ball_option);
	World.add(world,ball2);

	ball3 = Bodies.circle(355,220,35,ball_option);
	World.add(world,ball3);

	ball4 = Bodies.circle(320,220,35,ball_option);
	World.add(world,ball4);

	Engine.run(engine);
	
	rope1 = new Rope(ball,20,100,20)
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,190,20);

  //call display() to show ropes here
    rope1.display();
  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,35);
  ellipse(ball1.position.x,ball1.position.y,35);
  ellipse(ball2.position.x,ball2.position.y,35);
  ellipse(ball3.position.x,ball3.position.y,35);
  ellipse(ball4.position.x,ball4.position.y,35);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
