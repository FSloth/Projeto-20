
var Cat,imgCat,imgCat1,imgCat2,imgMouse2,Mouse,imgMouse1,imgMouse,fundoimg,fundo

function preload() {
    //carregue as imagens aqui
    fundoimg = loadImage("images/garden.png")
    imgCat = loadImage("images/cat1.png")
    imgCat1 = loadAnimation("images/cat2.png","images/cat3.png")
    imgCat2 = loadAnimation("images/cat4.png")
    
    imgMouse = loadImage("images/mouse1.png") 
    imgMouse1 = loadAnimation("images/mouse2.png","images/mouse3.png")
    imgMouse2 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    fundo = createSprite(500,400) 
    fundo.addImage("fundinho",fundoimg)

    Cat = createSprite(870,600)
    Cat.addAnimation("GatoSentado",imgCat)
    Cat.scale = 0.2

    Mouse = createSprite(170,600)
    Mouse.addAnimation("RatoParado",imgMouse)
    Mouse.scale = 0.1
    
}

function draw() {

    background(225);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(Cat.x - Mouse.x < (Cat.width - Mouse.width)/2){
        Cat.velocityX = 0
        Cat.addAnimation("GatoParado",imgCat2)
        Cat.changeAnimation("GatoParado")

        Mouse.addAnimation("RatoDestraido",imgMouse2)
        Mouse.changeAnimation("RatoDestraido")
    }
    
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
     if(keyCode === LEFT_ARROW){
     Mouse.addAnimation("RatoProvocas", imgMouse1)
     Mouse.changeAnimation("RatoProvocas")
     Mouse.frameDelay = 25;

     Cat.addAnimation("GatoCorrendo",imgCat1)
     Cat.changeAnimation("GatoCorrendo")
       
      Cat.velocityX = -5
     }
     

}
