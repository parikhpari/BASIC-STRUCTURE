//namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//declaring global variables
var engine, world;
var ground;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup(){
    //created a canvas for the ABG game
    var canvas = createCanvas(1200,400);
    //created ABG engine from the main Engine class
    engine = Engine.create();
    // the world of ABG is same as Engine's world
    world = engine.world;
 
    //to create new objects from their respective classes
    ground = new Ground(600,390,1200,20);
    
    box1 = new Box(730,350,50,50);
    pig1 = new Pig(800,350);
    box2 = new Box(870,350,50,50);
    log1 = new Log(800,310,200,PI/2);

    box3 = new Box(730,270,50,50);
    pig2 = new Pig(800,270);
    box4 = new Box(870,270,50,50);
    log2 = new Log(800,230,200,PI/2);

    box5 = new Box(800,190,50,50);
    log3 = new Log(750,150,130,PI/7);
    log4 = new Log(850,150,130,-PI/7);

    bird = new Bird(200,200);

    //180 degrees = PI 
}

function draw(){

    //to clear the screen and give it color
    background(0);

    //to keep updating the ABG engine
    Engine.update(engine);
    
    //to display all the objects
    ground.display();

    box1.display();
    pig1.display();
    box2.display();
    log1.display();
    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();

}