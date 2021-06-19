var helicopterIMG, helicopter, package,packageIMG;
var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	//boxPosition=width/2-100
 	//boxY=610;


 	box1=new Box(562,600-2.5,25,170);
	 box2=new Box(400,670,300,25);
 	box3=new Box(240,600-2.5,25,170);

 
	 console.log(packageBody)
 
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 

  Engine.update(engine);
  
  drawSprites();
  box1.display();
  box2.display();
 box3.display();
 
 
}
function keyPressed(){
	
	if(keyCode===RIGHT_ARROW){
		helicopter.x=helicopter.x+100
		translation={x:100,y:0}
		if(packageBody.position.y===200){
		Matter.Body.translate(packageBody,translation)}
		 
	 }
	  if(keyCode===LEFT_ARROW){
		helicopter.x=helicopter.x-100
		translation={x:-100,y:0}
		if(packageBody.position.y===200){
		Matter.Body.translate(packageBody,translation)
	  }
	}
	if(keyCode===DOWN_ARROW){
	
		Matter.Body.setStatic(packageBody,false)
	
	}
}
