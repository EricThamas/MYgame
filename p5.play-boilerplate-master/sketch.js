var backgroundimage,background1;
var Goldcoin,GoldcoinsImage;
var Jerico,JericoImage;
var invisibleGround;
var Spikes,spikesimage;

function preload(){
  backgroundimage = loadImage("Images/Background1.png");
  Jericoimage = loadAnimation("Images/C1.png","Images/C2.png","Images/C3.png","Images/C4.png","Images/C5.png","Images/C6.png");
  GoldcoinImage = loadImage("Images/Coin.png");
  SpikeImage = loadImage("Images/spikes2.png");
}

function setup() {
  createCanvas(800,800);
  background1 = createSprite(500,250);
  background1.addImage("bg",backgroundimage);
  background1.scale = 3;
  background1.velocityX = -3.3;

  Jerico = createSprite(90,480,50,50);
  Jerico.addAnimation("Jerico",Jericoimage);
  Jerico.scale = 0.8;

  invisibleGround = createSprite(400,500,width,25);
  invisibleGround.visible = false;

 

}

function draw() {
  background(0);
  if(background1.x<0){
    background1.x = 800;

  }
  if(keyDown("space")&&Jerico.y>=420){
    Jerico.velocityY = -10;
  }
  //console.log(Jerico.y);
  Jerico.collide(invisibleGround);
  Jerico.velocityY = Jerico.velocityY+0.2;
  drawSprites();
  Goldcoins();
  spikes();
}  
function Goldcoins(){

  if(frameCount%100===0){
    Goldcoin = createSprite(780,20);
    Goldcoin.addImage("GoldCoin",GoldcoinImage);
    Goldcoin.scale = 0.2;
    Goldcoin.velocityX = -7;
    Goldcoin.y = Math.round(random(80,300));
  }
  
} 
function spikes(){
  
  if(frameCount%120===0){
    spike = createSprite(400,495);
  spike.addImage("spikes",SpikeImage);
  spike.velocityX = -5;

  }

}                                                                                                                                                                                                