const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var blower, blowerMouth, ball;






function setup() 
{

  createCanvas(500,700);



  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }

  var balloptions = {
    restitution : 0.8
  }
  blowerMouth = Bodies.rectangle(220,300,150,20,options)
  blower = Bodies.rectangle(300,290,80,80,options);
  ball = Bodies.circle(300, 50, 20, balloptions);

  World.add(world, blowerMouth);
  World.add(world, blower);
  World.add(world,ball);
  
  button = createButton("Click to Blow");
  button.position(width/2, height-100);
  button.mouseClicked(blow);

}




function draw() 
{

  background(220);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  Engine.update(engine);
  
  rect(blowerMouth.position.x, blowerMouth.position.y,150, 20);
  rect(blower.position.x, blower.position.y, 80,80);
  ellipse(ball.position.x, ball.position.y, 20);



}


function blow(){
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0, y:0.05} );
}

