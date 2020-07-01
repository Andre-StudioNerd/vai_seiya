function GameOver() {
  trilhaSonora.stop();

  createCanvas(windowWidth, windowHeight);
  image(gameover, ((windowWidth / 2) - (gameover.width / 2)), ((windowHeight / 2) - (gameover.height / 2)));
  pontuacao.exibePontuacaoFinal(gameover.height);
  noLoop();
  gg.play();

}

function getNumber(prev, max){
  var min = 0;
  var next;
  
  next = Math.floor(Math.random() * (max - min)) + min;
  
  if (next===prev) {
    next = getNumber(prev, max); //recursive
  }
  
  return next;
}