
//ator



function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  movimentaAtor();
  movimentaCarro();
  mostraAtor();
  mostraCarro();
  voltaCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}