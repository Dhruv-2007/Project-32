const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight = 300;

var score = 0;

function preload(){
}

function setup() {
	createCanvas(480, 800);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	ground = new Ground (240, 785, 480, 30);

	for (var k = 0; k <=width; k = k + 80) {
	   divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
	}

	for (var j = 40; j <=width; j=j+50){
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 15; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 40; j <=width; j=j+50){
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 15; j <=width-10; j=j+50){ 
       plinkos.push(new Plinko(j,375));
    }

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  /*push();
  fill("#70d1f4");
  textSize(20);
  stroke("cyan");
  strokeWeight(4);
  text("Score - "+ score,30,300);
  pop();*/
  
  ground.display();

  for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

   if(frameCount % 60 === 0){
	particles.push(new Particles(random(20, 380), 10,10));
  }

 for (var j = 0; j < particles.length; j++) { 
  particles[j].display();
  }

  drawSprites();
}

function Score(){
  if(particles[i].body.position.y >500 && particles[i].body.velocity.y > 4  && particles[i].body.position.y <710){
     score = score + 200;
   } 
 }
