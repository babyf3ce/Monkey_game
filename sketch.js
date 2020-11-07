var monkey , monkey_running;
var banana ,bananaImage, rock, rockImage;
var bananaGroup, obstacleGroup;
var ground;

var score,survivalTime;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var rand;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  rockImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(50,140,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.15;
  
  ground = createSprite(300,190,600,10)
  if(ground.x===0){
   ground.x=200;
   
  }
  ground.velocityX = -4;
  ground.x=ground.width/2;
  
  
  bananaGroup = new Group();
}


function draw() {
  createCanvas(600,200);

  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  if (keyDown("space") && monkey.y >= 135) {
      monkey.velocityY = -9;
    
    
    
    }

 food(); 
 obstacle();
 drawSprites(); 
}


function food(){
if(frameCount % 80 ===0  ){
   banana. addImage(bananaImage);
   
   
   banana.velocityX = 4;
   banana.lifeTime=50;
   banana.y =Math.round(random(120, 120));
}


}

   function obstacle(){
if(frameCount % 80 ===0  ){
   rock. addImage(rockImage);
   
   
   rock.velocityX = 4;
   rock.lifeTime=50;
   rock.y =Math.round(random(120, 120));
}
    }