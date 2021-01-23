
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var superhero;

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;

  superhero = createSprite(200, 200, 10, 10);
  superhero.shapeColor = "yellow";

}

function draw() {
  background("lightblue");
  drawSprites
}

