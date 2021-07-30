var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,orangeImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX

  var select_sprites = Math.round(random(1,2));

  if (frameCount%80===0){
    if (select_sprites==1){
      spawnApples()
    }
    else {
      spawnLeaf()
    }
  }

  drawSprites();
}


function spawnApples(){
    apple=createSprite(random(50,350),10,40,10);
    apple.velocityY=4;
    apple.scale=0.1
    rabbit.depth = apple.depth
    rabbit.depth = rabbit.depth+1
    apple.addImage("apple", appleImg)
  }
    
  function spawnLeaf(){
    leaf=createSprite(random(30,350),10,40,10);
    leaf.velocityY=4;
    leaf.scale=0.1
    rabbit.depth = leaf.depth
    rabbit.depth = rabbit.depth+1
    leaf.addImage("leaf", orangeImg)
  }

  
