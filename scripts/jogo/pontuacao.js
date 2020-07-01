class Pontuacao {
  constructor() {
    this.pontos = 0;
    this.cristais = 0;
    this.cristaisVida = 0;
    this.fonte = loadFont('imagens/assets/fonteTelaInicial.otf');
  }

  exibe() {
    textFont(this.fonte);
    fill(color('#FFFFFF'));
    strokeWeight(0);
    textSize(32);
    textAlign(RIGHT, CENTER);
    let cWidth = textWidth('00000');
    
    let txtCristal = text('CRISTAIS: ', windowWidth - cWidth, 40);
    let txtScore   = text('   SCORE: ', windowWidth - cWidth, 80);
    
    let txtValorCristal = text(int(this.cristais), windowWidth-5, 40);
    let txtValorPontos = text(int(this.pontos), windowWidth-5, 80);
    //, windowWidth - cWidth, 40);
    //int(this.pontos), windowWidth - cWidth, 80);
  };

  adicionarPonto() {
    this.pontos = this.pontos + 0.3;
  }
  
  adicionarCristal() {
    this.cristais++;
    this.cristaisVida++;
  }

  exibePontuacaoFinal(altura) {
    textAlign(CENTER, CENTER);
    fill(color('#FFFFFF'));
    text('FINAL SCORE: ' + int(this.pontos), ((windowWidth / 2)), (windowHeight / 2) + (altura));
    text('CRISTAIS COLETADOS: ' + int(this.cristais), ((windowWidth / 2)), ((windowHeight / 2) + (altura))+50);
    text('APERTE ENTER PARA RECOMECAR', ((windowWidth / 2)), ((windowHeight / 2) + (altura))+100);
  
  }
}