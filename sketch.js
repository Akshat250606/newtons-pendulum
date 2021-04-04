const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var world, engine, canvas;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var mConstraint;
var ground


function setup() {
  canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  pendulum1 = new Pendulum(340, 450, "green");
  pendulum2 = new Pendulum(400, 450, "yellow");
 

  sling1 = new Sling(pendulum1.body, { x: 340, y: 200 });
  sling2 = new Sling(pendulum2.body, { x: 400, y: 200 });

  ground = new Ground(360,177,200,100);
  
}
function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}


function draw() {
  background(0);
  Engine.update(engine);

  pendulum1.display();
  pendulum2.display();
  
  
  sling1.display();
  sling2.display();

  ground.display();
  
  
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(pendulum1.body,pendulum1.body.position,{x:-100,y:-100}); } 
} 
