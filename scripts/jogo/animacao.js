class Animacao {
  constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.variacaoY = variacaoY;
    this.x = x;
    this.y = windowHeight - this.altura - this.variacaoY;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;

    this.frameAtual = 0;

    this.qtdCol = int((this.imagem.width / this.larguraSprite));
    this.qtdLine = int((this.imagem.height / this.alturaSprite));
    
    this.posX = 0;
    this.posY = 0;
  }

  exibe() {
    this.posX = this.frameAtual % this.qtdCol * this.larguraSprite;
    this.posY = Math.floor(this.frameAtual / this.qtdCol) * this.alturaSprite;
    
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.posX, this.posY, this.larguraSprite, this.alturaSprite);

    this.anima();
  }

  anima() {
    this.frameAtual++;

    if (this.frameAtual===((this.qtdCol * this.qtdLine)-1)){
      this.frameAtual = 0;
    }
  }
}