class BotaoPassaFase {
  constructor(texto, posX, posY) {
    this.texto = texto;
    this.posX = posX;
    this.posY = posY;
    this.botao = createButton(this.texto);
    this.botao.mousePressed(() => this._passaFase());
    this.botao.addClass("botao-tela-inicial");
  }

  draw() {
    this.botao.position(this.posX, this.posY);
    this.botao.center('horizontal');
  }
  
 
  _passaFase() {
    this.botao.hide();
    passaFase.stop();
    jogo.faseFim = false;
    jogo.faseAtual++;
    jogo.fases = fita.fases[jogo.faseAtual];
    jogo.setup();
    trilhaSonoras[jogo.faseAtual].loop();
  }
}