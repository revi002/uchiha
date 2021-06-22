var gamestate="play"
function preload(){
  groundimg=loadImage("ground.jpg")
boyimg=loadAnimation("0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","13.png","14.png","16.png","17.png","18.png","19.png","20.png","21.png","22.png","23.png","24.png","25.png")
bulletImg=loadImage("RASENGAN.png")
enemy1=loadImage("zabuza.png")
enemy2=loadImage("gaara.png")
enemy3=loadImage("orochimaru.jpg")
enemy4=loadImage("pain.png")
enemy5=loadImage("obito.jpg")
enemy6=loadImage("madara.png")
enemy7=loadImage("kaguya.png")

}
function setup() {
  createCanvas(700,400);

boy=createSprite(100,320,20,20)
boy.addAnimation("boy",boyimg)
boy.scale=1
ground=createSprite(600,400,1200,20)
  //ground.addImage(groundimg)
 ground.scale=1.5
 enemygroup=new Group()
 bulletgroup=new Group()
}
function draw() {
  background(56,44,44);
  drawSprites() 
  ground.velocityX=-4 
  if(gamestate==="play"){
 if(ground.x<0){
   ground.x=ground.width/4

 }
 
 if(keyDown("up_arrow")){
   boy.velocityY=-4
 }
 boy.velocityY=boy.velocityY+0.8
 boy.collide(ground)
 if(keyWentDown("space")){
  bullet=createSprite(50,350,10,10)
  bullet.velocityX=3
  bullet.y=boy.y
  bullet.addImage(bulletImg)
  bullet.scale=0.1
  bulletgroup.add(bullet)
}
 for(var i=0;i<enemygroup.length;i++){
  if(enemygroup.get(i).isTouching(bulletgroup))
  {
    enemygroup.get(i).destroy()
  }  
 }
 if(boy.isTouching(enemygroup)){
  boy.destroy()
  enemygroup.destroyEach()
  gamestate="end"
 
}
 spawnenemy()
}
if(gamestate==="end")
{
  enemygroup.setVelocityXEach(0)
  bulletgroup.setVelocityXEach(0)
  bulletgroup.destroyEach()
  textSize(25)
  fill("green")
  text("Game over",350,200)
}
}
function spawnenemy(){
  if(frameCount%200===0){
    var enemy=createSprite(1000,200,10,10)
    enemy.y=Math.round(random(100,350))
    enemy.velocityX=-3
    enemy.scale=0.1 
    var rand=Math.round(random(1,7))
    switch(rand){
      case 1:enemy.addImage(enemy1)
      break
      case 2:enemy.addImage(enemy2)
      break
      case 3:enemy.addImage(enemy3)
      break
      case 4:enemy.addImage(enemy4)
      break
      case 5:enemy.addImage(enemy5)
      break
      case 6:enemy.addImage(enemy6)
      break
      case 7:enemy.addImage(enemy7)
      break
      default:break
    }
    enemygroup.add(enemy)
  }
}