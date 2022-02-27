//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//variáveis da raquete
let raqueteComprimento = 10;
let raqueteAltura = 90;
let colisao = false;

//variáveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 155;
let velocidadeYOponente;
let chanceDeErrar = 0;

//variáveis da raquete  do jogador
let xRaqueteJogador = 5;
let yRaqueteJogador = 155;

//variáveis de pontuação
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  trilha = loadSound("trilha.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBolinha();
  mostraRaquete(xRaqueteJogador,yRaqueteJogador);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteJogador();
  movimentaRaqueteOponente();
  verificaColliderRaquete(xRaqueteJogador,yRaqueteJogador);
  verificaColliderRaquete(xRaqueteOponente,yRaqueteOponente);
  mostraPlacar();
  marcaPonto();
}

function mostraBolinha(){  
  circle(xBolinha,yBolinha,diametro);
}
function movimentaBolinha(){ 
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function verificaColisaoBolinha(){     
  if((xBolinha + raio >  width) || 
     (xBolinha - raio  < 0)){
      velocidadeXBolinha *= -1;
      }
  
  if((yBolinha + raio  >  height) || 
     (yBolinha - raio < 0)){
      velocidadeYBolinha *= -1;
      }
}
function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaRaqueteJogador(){
  if(keyIsDown(UP_ARROW)){
    yRaqueteJogador -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaqueteJogador += 10;
  }
}

//AI single-player

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
  calculaChanceDeErrar();
}

//multiplayer
/*
function movimentaRaqueteOponente(){
  if(keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}
*/

function verificaColliderRaquete(x,y){
  colisao = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colisao){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function mostraPlacar(){
  stroke(255);
  textAlign(CENTER);  
  textSize(16);
  fill(color(255,140,0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 28); 
  fill(color(255,140,0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 28); 
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
}

function calculaChanceDeErrar(){
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}