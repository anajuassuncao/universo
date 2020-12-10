var img;
var tela = 1;
var largura = 260;
var altura = 60;
var xMenu = 170;
var yMenu1 = 220;
var yMenu2 = 295;
var yMenu3 = 370;

var x = 300;
var y = 410;
var vida = 3;
var score = 1;
var recorde = -1;
var ym = [];
var xm = [];
var velm = [];
var velocidadey = 5;
var leftWall = 3;
var rightWall = 533;
var xt = x;

var estrelasX = [];
var estrelasY = [];
var estrelasVel = [];
var estrelasTam = [];    
var qtEstrelas = 50;
var qtMeteoros = 6;

function preload(){
  img = loadImage('backgroundtest1.jpg');
  img2 = loadImage('anajulia.jpg');
  img3 = loadImage('julya.jpg');
  terra = loadImage('terra.png');
  meteoro = loadImage('meteoroc.png')
  universo = loadImage('universo.png')
}

function setup() {
  createCanvas(600, 500);
  frameRate(60);
  for (i = 0; i < qtEstrelas; i++) {
		estrelasX[i] = random(0,width);
		estrelasY[i] = random(0,height); 
		estrelasVel[i] = 2+random(0,10)/10; 
		estrelasTam[i] = random(2,4);
  }
  for(i=0;i<6;i++){
    ym[i] = random(-350,-50);
    xm[i] = random(10,60)+(i*random(70,140));
    velm[i]= random(3,7); 
  }
}
function draw() {
  textStyle(NORMAL);
  //Tela de Menu
  
  if(vida==0){
    tela = 5;
  }
  
  if (tela == 1){
  
    background(20);
    image(img, 0, 0)
   
    //Menu com três opções
    //Iniciar o jogo
    textAlign(CENTER);
    textSize(35);
    image (universo,145,100);
    
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura ){   
    stroke(200);
    fill(10);
    rect(xMenu, yMenu1, largura, altura, 15);
      if (mouseIsPressed) {
        tela = 2;
      }
    }
    fill(240);
    noStroke();
    text('Iniciar', 300, 265)
    
    //Informações do jogo
  
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura ){
    stroke(200);
    fill(10);
    rect(xMenu, yMenu2, largura, altura, 15);
       if (mouseIsPressed) {
        tela = 3;
      }
    }
  
    fill(240);
    noStroke();
    text('Informações', 300, 340)
  
    //Créditos do jogo
  
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura ){
    stroke(200);
    fill(10);
    rect(xMenu, yMenu3, largura, altura, 15);
       if (mouseIsPressed) {
        tela = 4;
      }
    }
  
    fill(240);
    noStroke();
    text('Créditos', 300, 415)
}
  
  //Jogo em ação
  if (tela == 2){ 
    var xc = constrain (xt, leftWall, rightWall);
    
    background(0)
    score = score +1;
    contS = parseInt (score/3);
    
   //movimento meteoro
    movMeteoros();
    

  // desenha as estrelas 
  for(i = 0; i < qtEstrelas; i++) {
  fill(255);
  stroke(255);
  rect(estrelasX[i],estrelasY[i],estrelasTam[i],estrelasTam[i])
  
  // movimenta as estrelas

	  estrelasY[i] = estrelasY[i] + estrelasVel[i]; 
	  if (estrelasY[i] > height) {
		estrelasX[i] = random(0,width);
		estrelasY[i] = -random(0,height); 		  
	  }
  }
    
    textAlign(CENTER);
    textSize(26);   
    stroke(10);
    fill(0);
    rect(0,0, 600, 40);
    fill(240);
    text('Fase Infinita',80,30);
    text('Pontos: ',310,30);
    text('Vidas: ' + vida,540,30);
    text(contS,400,30);
    
    noStroke(0);
    line(leftWall, 0, leftWall, height);
    line(rightWall, 0, rightWall, height);
    fill(220);
    
    image (terra,xc,y);
    noFill();
    noStroke(255,0,0)
    ellipse(xc+33,y+33,65,65);
    
    if ( keyIsDown(LEFT_ARROW) ){
      xt = xt - 10;
    }
    if ( keyIsDown(RIGHT_ARROW) ){
      xt = xt + 10;
    }
    
  }
  //Informações sobre o jogo
  if (tela == 3){
  
    background(0);
    textSize(30);
    textAlign(LEFT);
    text("Informações: ",40,80);
    textSize(22);
    textAlign(LEFT);
    text('No 9º ano do ensino fundamental uma das matérias trabalhadas é ciências, onde é abordado assuntos como, o universo e sua origem, as galáxias, as estrelas e por fim o Sistema Solar (Habilidade: (EF09CI14). Tal qual é composto por uma estrela, oito planetas e seus satélites, e outros pequenos corpos que se movimentam nele, os asteroides, meteoros e cometas. O objetivo desse jogo é não deixar um desses planetas, a Terra, ser atingida por meteoros, usando as setas esquerda e direita do teclado.', 40,120,530,450);
  }
  
  //Créditos do jogo
  if (tela == 4){
    
    background(0);
    image(img2, 80, 150)
    image(img3, 350,150)
    textSize(35);
    text("Créditos: ",150,100);
    textSize(20);
    text("Programadora: Ana Júlia",160,400);
    text("Educadora: Julya Viegas",430,400)
    
  }
  
  // Game Over 
 if (tela == 5){
    
   if(score>recorde){
      recorde = score;
      }
   
    background(0);
    textSize(55);
    fill(220)
    textAlign(CENTER);
    text("GAME OVER ",300,270);
    textSize(26)
    text("Pontos: "+score,200,320);
    text("Recorde: "+recorde,380,320)
   
   // desenha as estrelas 
  for(i = 0; i < qtEstrelas; i++) {
  fill(255);
  stroke(255);
  rect(estrelasX[i],estrelasY[i],estrelasTam[i],estrelasTam[i])
  }
  
  // movimenta as estrelas
  for(i = 0; i < qtEstrelas; i++) { 
	  estrelasY[i] = estrelasY[i] + estrelasVel[i]; 
	  if (estrelasY[i] > height) {
		estrelasX[i] = random(0,width);
		estrelasY[i] = -random(0,height); 		  
	  }
  }
 }


}

function keyPressed() {
    if(key=='Escape'){
      tela = 1;
      vida = 3;
      score = 1;
    }
}

function colisao(i){
  if(dist(xm[i], ym[i], xt, y)<(41)){
    vida--;
    ym[i] = random(-350,-50);
    xm[i] = random(10,60)+(i*random(70,140));
  }
}


function movMeteoros(){
  for(i=0;i<qtMeteoros;i++){
      image(meteoro,xm[i], ym[i]);
      noFill();
      stroke(255,0,0)
      //ellipse(xm[i]+40,ym[i]+40,20,20);
      //ym[i] = ym[i] + velocidadey;
      ym[i]+=velm[i]; 
      
      colisao(i);
      if(ym[i]>height+21){
        ym[i] = random(-350,-50);
        xm[i] = random(10,60)+(i*random(70,140));
      }
  }
}
