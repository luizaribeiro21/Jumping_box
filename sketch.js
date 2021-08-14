var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;


function setup(){
    tela = createCanvas(1000,600);
    

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4
    bloco3 = createSprite(580,580,200,30);
    bloco3.shapeColor = "green";

    bloco4 = createSprite(875,580,200,30);
    bloco4.shapeColor = "red";

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = "black";
    bola.velocityY = 5; 
    bola.velocityX = 2; 
    //escreva o código para adicionar velocityX e velocityY

}

function draw() {
    background(rgb(169,169,169));
    arestas=createSprite(0,0,5000,20);
    arestas.shapeColor = "gray";
    arestas2=createSprite(0,0,20,5000);
    arestas3=createSprite(0,600,5000,20);
    arestas4=createSprite(1000,0,20,5000);

    bola.bounceOff(arestas);
    bola.bounceOff(arestas2);
    bola.bounceOff(arestas3);
    bola.bounceOff(arestas4);
    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        
    }


    if(bloco2.isTouching(bola)){
        bola.shapeColor = "blue";
        
    
    }

    //escreva o código de ricochete de bola para bloco3
    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
        bola.shapeColor = "blue";
      
    }

    //escreva o código de ricochete de bola para bloco4
    if(bloco3.isTouching(bola) && bola.bounceOff(bloco4)){
        bola.shapeColor = "blue";
        
    }
    drawSprites();
}