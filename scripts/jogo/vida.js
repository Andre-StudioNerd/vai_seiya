class Vida {
  constructor(vidaMaxima, VidaInicial) {
    this.vidaMaxima = vidaMaxima;
    this.VidaInicial = VidaInicial;
    this.vidaAtual = VidaInicial;
    this.largura = 30;
    this.altura = 30;
    this.xInicial = 20;
    this.y = 20;
  }


  draw() {
    let aspect = windowWidth/windowHeight;
    for (let i = 0; i < this.vidaAtual; i++) {
      const margem = i * 5;
      const posicao = (this.largura) * (i*aspect + 1)

      image(imagemVida, posicao + margem, this.y, this.largura*aspect, this.altura*aspect)
    }
  }

  ganhaVida() {
    if (this.vidaAtual < this.vidaMaxima) {
      this.vidaAtual++;
    }
  }

  perdeVida() {
    this.vidaAtual--;
  }
}