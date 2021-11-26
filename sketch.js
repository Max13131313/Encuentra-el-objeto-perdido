const Engine = Matter.Engine;
const World = Matter.World;
const Bodies  = Matter.Bodies;

var engine;
var world;
var body;

var malo1,detective1,bueno2,objeto1;
var ground1;
var fondo;
var canvas;
var score = 200;

function preload(){
   // fondo = loadImage("bg1.png");
}

function setup(){
    canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    detective1 = new detective(300,320);
    malo1 = new ladron(700,240);
    bueno2 = new buenos(500,350);
    objeto1 = new objetos(50,80);
    ground1 = new ground(600,390,1200,20);

}

function draw(){
    background(0);
    textSize(30);
    fill ("white");
    text("Score"+score,width-300,50);

    Engine.update(engine);
    console.log(detective1.body.position.x);
    console.log(malo1.body.position.x);
    console.log(bueno2.body.position.x);
    console.log(objeto1.body.position.x);
    detective1.display();
    malo1.display();
    bueno2.display();
    objeto1.display();
    ground1.display();

    if(Matter.Detector.canCollide(detective1,bueno2)){
        score+=50;
        textSize(20);
        text("hola",600,200);
    }

    if(Matter.Detector.canCollide(detective1,malo1)){
        score-=100;
        textSize(20);
        text("hoola",600,200);
    }
}
