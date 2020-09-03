const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var nameEntry;

var avatar1,avatar2,avatar3,avatar4,avatar5;

var avatar1I,avatar2I,avatar3I,avatar4I,avatar5I;
var level1 ,level2,level3,level4

var level2_btn , level1_btn ,level3_btn

var thiruvaluvar,thiruvaluvarimg;

var colour,bg1,bg2,bg3;

var v11,v12,v13,v14,v15,v16,v17;
var v11i,v12i,v13i,v14i,v15i,v16i,v17i;

var v21,v22,v23,v24,v25,v26,v27;
var v21i,v22i,v23i,v24i,v25i,v26i,v27i;

var v31,v22,v23,v24,v25,v26,v27;
var v21i,v22i,v23i,v24i,v25i,v26i,v27i;

function preload(){
  avatar1I=loadImage("images/avatar1.png");
  avatar2I=loadImage("images/avatar2.png");
  thiruvaluvarimg = loadImage("images/thiruvalluvar1.jpg");
  
  v11i = loadImage("verse1/1.png");
  v12i = loadImage("verse1/2.png");
  v13i = loadImage("verse1/3.png");
  v14i = loadImage("verse1/4.png");
  v15i = loadImage("verse1/5.png");
  v16i = loadImage("verse1/6.png");
  v17i = loadImage("verse1/7.png");
  
  
  v21i = loadImage("verse2/1.png");
  v22i = loadImage("verse2/2.png");
  v23i = loadImage("verse2/3.png");
  v24i = loadImage("verse2/4.png");
  v25i = loadImage("verse2/5.png");
  v26i = loadImage("verse2/6.png");
  v27i = loadImage("verse2/7.png");
  
  bg2 = loadImage("images/oldbg.jpg")
}
function setup() {
  createCanvas(1700,800);
  engine = Engine.create();
    world = engine.world;

  nameEntry = new Form();
 
}

function draw() {
 //background(colour);  
 background(bg2);

 nameEntry.display();
  drawSprites();
}
function mousePressed() { ellipse(mouseX, mouseY, 5, 5);  }