//código do ator 
let xAtor = 50;
let yAtor = 366;
let colisao = false;
let meusPts = 0;

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeAndar()){
      yAtor += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    if(podeAndarEsq()){
      xAtor -= 3;
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    if(podeAndarDir()){
      xAtor += 3;
    }
  }
}

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function verificaColisao(){
  //colisao = collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);
  for (i = 0;i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], compCarro, altCarro, xAtor, yAtor, 15);
    if (colisao){
      retornaAtor();
      tiraPonto();
      somColisao.play();
    }
  }
}

function retornaAtor(){
  xAtor = 50;
  yAtor = 366;
}

function incluiPontos(){
  textSize(25);
  textAlign(CENTER);
  fill(color(255,240,60));
  text(meusPts, width/5, 27);
}

function marcaPonto(){
  if(yAtor <10){
    meusPts += 1;
    retornaAtor();
    somPonto.play();
  }
}

function tiraPonto(){
  if (meusPts > 0){
    meusPts -= 1;
  }
}

function podeAndar(){
  return yAtor < 366;
}

function podeAndarEsq(){
  return xAtor > 0;
}

function podeAndarDir(){
  return xAtor < 470;
}