const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var abEngine, abWorld;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    abEngine = Engine.create();
    abWorld = abEngine.world;
    box1= new Box(100,200,50,50);//create object,
    box2= new Box(200,200,40,50);
    
 
}

function draw(){
    background(0);
    Engine.update(abEngine);
    box1.display();
    box2.display();

   
}