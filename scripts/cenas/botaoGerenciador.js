class BotaoGerenciador {
  constructor(texto, posX, posY, idBtn) {
    this.texto = texto;
    this.posX = posX;
    this.posY = posY;
    this.botao = createButton(this.texto);
    this.idBtn = idBtn;
    this.botao.mousePressed(() => this._alteraCena());
    this.botao.addClass("botao-tela-inicial");
  }

  draw() {
    this.botao.position(this.posX, this.posY);
    this.botao.center('horizontal');
  }

  _alteraCena() {
    //console.log(this.idBtn);
    switch (this.idBtn) {
      case 'iniciar':
        this.botao.remove();
        somEntrada.stop();
        trilhaSonoras[jogo.faseAtual].loop();
        cenaAtual = 'jogo';
        break;
      case 'continuar':
        this._passaFase();
        break;
    }
  }

  _passaFase() {
    botaoPassaFase.botao.remove();
    passaFase.stop();
    jogo.faseFim = false;
    jogo.faseAtual++;
    jogo.fases = fita.fases[jogo.faseAtual];

    jogo.setup();
    trilhaSonoras[jogo.faseAtual].loop();
  }
}