//variáveis dos carros
let xCarros = [600,600,600,600,600,600];
let yCarros = [40,96,150,210,270,318];
let velCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let compCarro = 50;
let altCarro = 40;

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velCarros[i];
  }
}

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], compCarro, altCarro);
  }
}

function voltaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if (saiuDaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function saiuDaTela(xCarro){
  return xCarro < -50;
}