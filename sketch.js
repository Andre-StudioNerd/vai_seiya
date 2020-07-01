function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(40);
  masterVolume(0.1);

  botaoGerenciador = new BotaoGerenciador('JOGAR', width / 2, height / 2, 'iniciar');
  telaInicial = new TelaInicial();
  jogo = new Jogo();

  jogo.setup();

  cenas = {
    jogo: jogo,
    telaInicial: telaInicial
  };


}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}

/*
  if (stage == 0) {
    splashGame.draw();
  }

  if (stage == 1) {
    jogo.draw();
  }
*/