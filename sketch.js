var plinkos = []
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = []
var divisions = []
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,10)

	for(var i = 0; i<=width; i=i+100){
		divisions.push(new Division(i,550,10,300))
	}

	for(var i = 0; i<=width; i=i+50){
		plinkos.push(new Plinko(i,350))
	}

	for(var i = 0; i<=width; i=i+70){
		plinkos.push(new Plinko(i,250))
	}
    for(var i = 0; i<=width; i=i+50){
		plinkos.push(new Plinko(i,150)) 
	}
	

		
		Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  ground.display()
  
  for(var each in divisions){
	console.log(each)
	divisions[each].display()
  }

  for(var each in plinkos){
    plinkos[each].display()
  }
  if(mouseIsPressed){
	  createParticles()
  }

  for(var each in particles){
    particles[each].display()
  }
  
 
}

function createParticles(){
	//if(frameCount % 50 === 0)
	particles.push(new Particle(mouseX,10))
}

