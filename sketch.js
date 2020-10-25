const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand;
var engine,world;

var box1, box2, box3,box4,box5,box6,box7;
var box8, box9, box10,box11, box12;
var box13, box14,box15;

var polygon_Img;

var ball,slingShot;

function preload() {
  polygon_Img=loadImage("polygon.png")
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
  ground = new Ground(450,370, 260, 20);
  box1 = new Box(360, 342, 30,40 );
  box2 = new Box(390, 342, 30,40 );
  box3 = new Box(420, 342, 30,40 );
  box4 = new Box(450, 342, 30,40 );
  box5 = new Box(480, 342, 30,40 );
  box6 = new Box(510, 342, 30,40 );
  box7 = new Box(540, 342, 30,40);

  box8 = new Box(390,302,30,40);
  box9 = new Box(420,302,30,40);
  box10 = new Box(450,302,30,40);
  box11 = new Box(480,302,30,40);
  box12 = new Box(510,302,30,40);

  box13 = new Box(420,262,30,40);
  box14 = new Box(450,262,30,40);
  box15 = new Box(480,262,30,40);

  box16 = new Box(450, 222,30,40);

  ball = Bodies.circle(50,200, 20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball, {x:100,y:200});
}

function draw() {
  background(0);  
  ground.display();
  fill(150,200, 50);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill(150,100, 90);
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill(250,100, 90);
  box13.display();
  box14.display();
  box15.display();

  fill(60,100, 250);
  box16.display();
  
  fill(60,200,60);
  imageMode(CENTER);
  image(polygon_Img, ball.position.x, ball.position.y, 40, 40);

  slingShot.display();


}

function mouseDragged(){
 Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
  
}

function keyPressed() {
  if(keyCode === 32){
    console.log("space");
    slingShot.attach(this.ball);
  }
}