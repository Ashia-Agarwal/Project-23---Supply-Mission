var helicopterIMG, helicopterSprite, packageSprite, packageIMG, red1, red2, red3;
var packageBody, ground, redb, redl, redr;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  helicopterIMG = loadImage("helicopter.png");
  packageIMG = loadImage("package.png");
}

function setup() {
  createCanvas(800, 500);

  packageSprite = createSprite(width / 2, 80, 10, 10);
  packageSprite.addImage(packageIMG);
  packageSprite.scale = 0.2;

  helicopterSprite = createSprite(width / 2, 200, 10, 10);
  helicopterSprite.addImage(helicopterIMG);
  helicopterSprite.scale = 0.6;

  groundSprite = createSprite(width / 2, height - 5, width, 10);
  groundSprite.shapeColor = color(0,0,255);

  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(width / 2, height - 5, width, 10, {isStatic: true});
  World.add(world, ground);

  packageBody = Bodies.circle(width / 2, 200, 5, {restitution: 0.75, isStatic: true, friction: 0.8});
  World.add(world, packageBody);
  
  redb = Bodies.rectangle(width/2, ground.position.y-15, 200, 20);
  redl = Bodies.rectangle(width/2-100, ground.position.y-55, 20, 100);
  redr = Bodies.rectangle(width/2+100, ground.position.y-55, 20, 100);
  World.add(world, redb);
  World.add(world, redl);
  World.add(world, redr);

  red1 = createSprite(width/2, ground.position.y-15, 200, 20);
  red2 = createSprite(width/2-100, ground.position.y-55, 20, 100);
  red3 = createSprite(width/2+100, ground.position.y-55, 20, 100);
  red1.shapeColor = color(255, 0, 0);
  red2.shapeColor = color(255, 0, 0);
  red3.shapeColor = color(255, 0, 0);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  keyPressed();
  drawSprites();
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    Body.setStatic(packageBody, false);
  }
}