
function preload(){
    
}

function setup() {
  createCanvas(1500,700);
  player = createSprite(300,650,30,30);
  movinggate1 = createSprite(100,600,150,33);
  movinggate2 = createSprite(495,600,150,33);
  supporterwall1 = createSprite(25,600,5,30);
  supporterwall2 = createSprite(573,600,5,30);
  boundrywall1 = createSprite(600,350,5,700);
  attacherwall1 = createSprite(522,600,150,40);
  attacherwall2 = createSprite(50,600,200,40);
  invisiblwall1 = createSprite(300,550,400,5);
  invisiblwall1.visible = false;

  movinggate1.velocityX = 1
  movinggate2.velocityX = -1


  
  

  
  
  


}

function draw() {
  background(0);
  drawSprites();

  
  movinggate1.shapeColor = "red"
  movinggate2.shapeColor = "red"
  
  
   
  
  movinggate1.bounceOff(supporterwall1);
  movinggate2.bounceOff(supporterwall2);


  if (movinggate2.isTouching(movinggate1)){
    movinggate1.velocityX = -1
    movinggate2.velocityX = 1
  }

  if (player.isTouching(invisiblwall1)){
    movinggate1.velocityX = 0
    movinggate2.velocityX = 0
  }

  if (keyDown("up")){
    player.velocityY = -2;
    }

    if (player.isTouching(movinggate1)){
      player.y = 650
      player.x = 300
    }
    
  
  

  
}

 


  