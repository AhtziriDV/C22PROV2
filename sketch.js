const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;
var score = 0;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
//CREA MUNDO
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }
//CREA CUERPO GROUND
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);
//CREA CUERDO TOWER
  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);
//CREA OBJ CANNON
  cannon = new Cannon(180, 110, 130, 100, angle);
}

function draw() {
//FONDO
  image(backgroundImg, 0, 0, width, height);
//ACTUALIZA MOTOR
  Engine.update(engine);
//MUESTRA SUELO
  rect(ground.position.x, ground.position.y, width * 2, 1);
//CARGA TORRE
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();
//MUESTRA CANNON
  cannon.display();
}
