class Splash {
  constructor(imagem) {
    this.imagem = imagem;
    this.fonte = loadFont('imagens/assets/fonteTelaInicial.otf');
  }

  draw() {

    image(this.imagem, 0, 0, windowWidth, windowHeight);
    
    /***   ***/
    textFont(this.fonte);
    textSize(72);
    stroke(color("#000"));
    strokeWeight(6);
    let s = 'AS AVENTURAS DE HIPSTA';
    fill(color('#FFFFFF'));
    textAlign(CENTER, CENTER);
    text(s, 50, 50, windowWidth-20, windowHeight-400);
    

    /***   ***/
    textFont(this.fonte);
    textSize(32);
    stroke(color("#000"));
    strokeWeight(6);
    s = 'AJUDE HIPSTA A ACHAR TODOS ITENS MAGICOS';
    fill(color('#FFFFFF'));
    textAlign(CENTER, CENTER);
    text(s, 50, 50, windowWidth-20, windowHeight-300);
    
    
    /***   ***/
    textFont(this.fonte);
    textSize(42);
    stroke(color("#000"));
    strokeWeight(6);
    s = 'APERTE ENTER PARA COMECAR';
    fill(color('#FFFFFF'));
    textAlign(CENTER, CENTER);
    text(s, 50, 50, windowWidth-20, windowHeight-100);

  }
}

function changeStage() {
  stage = 1;
}
