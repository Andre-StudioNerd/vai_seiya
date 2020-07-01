class Inimigo extends Animacao {
  constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
    super(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    //this.x = 0;
    
    this.velocidade = velocidade;
    this.x = width;
    this.isShow = true;
    this.jaColidiu = false;
  }

  move() {
    this.x = this.x - this.velocidade
    //console.log(this.x);
    if (this.x < -this.largura) {
      this.x = width
      this.isShow = false;
      this.jaColidiu = false;
    }
  }
}