
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bin,bin1,bin2,ball,ground,sling1;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bin = new Dustbin(600,640,200,10);

	bin1 = new Dustbin(500,555,10,200);
	
	bin2 = new Dustbin(700,555,10,200);
	
	ball = new Paper(100,200);
	
	sling1 = new Launcher(ball.body,{x:200,y:400});
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true,restitution:1.0} );
	 World.add(world, ground);
	 
	 


	Engine.run(engine);
	}
  
	function draw() {
  background("blue");
  Engine.update(engine);
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,width,10);

  ball.display();
	bin.display();
	bin1.display();
	bin2.display();
	sling1.display();

	strokeWeight(5);
  line(ball.body.position.x,ball.body.position.y,100,300)

}

	function mouseDragged(){
   // if (gameState!=="launched"){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
    }
//}


	function mouseReleased(){
    sling1.fly();
 //   gameState = "launched";
}
