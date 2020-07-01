class Personagem extends Animacao {
  constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

    this.variacaoY = variacaoY
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.alturaDoPulo = -30;
    this.gravidade = 3;
    this.limitePulo = 2;
    this.contaPulo = 0;
    this.colisao = false;
  }

  pula(somDoPulo) {
    if (this.contaPulo < this.limitePulo) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      somDoPulo.play();
      this.contaPulo++;
      if (this.contaPulo === 1) {
        Pontuacao = (Pontuacao + 10);
      }
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.velocidadeDoPulo = 0;
      this.contaPulo = 0;
    }
  }

  estaColidindo(inimigo) {
    let precisaoAlt = 0.8;
    let precisaoLar = 0.8;
    let precisao = 0.7;

    //collideDebug(true);
    //fill(100);
    //rect(this.x+20, this.y, this.largura*precisao, this.altura);
    //circle((inimigo.x + (inimigo.largura/2))+25, (inimigo.y + (inimigo.altura/2)), inimigo.largura*precisao);
    
    
    const colisao = collideRectCircle(this.x+20, this.y, this.largura*precisao, this.altura, (inimigo.x + (inimigo.largura/2))+25, (inimigo.y + (inimigo.altura/2)), inimigo.largura*0.6);
    
    /*
    if (colisao===true){
      noLoop();
    }
    */
    this.colisao = colisao;
    return(colisao);
  }

  anda(direcao) {

    if (direcao === 1) {
      if (this.x < windowWidth-this.largura) {
        this.x += 10;
      }
    }
    else if (direcao === 0)
      if (this.x > 0) {
        this.x -= 10;
      }
  }

}