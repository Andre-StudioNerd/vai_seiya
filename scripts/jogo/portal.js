class Portal {
  constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, w, h){
    
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.variacaoY = variacaoY;
    this.x = x;
    this.y = height - this.altura - this.variacaoY;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;

    this.frameAtual = 0;

    this.qtdCol = int((w / this.larguraSprite));
    this.qtdLine = int((h / this.alturaSprite));
    
    this.posX = 0;
    this.posY = 0;
    
    this.velocidade = 15;
    
    /*
    console.log('this.imagem: ' +  this.imagem)
    console.log('this.largura: ' +  this.largura)
    console.log('this.altura: ' +  this.altura)
    console.log('this.variacaoY: ' +  this.variacaoY)
    console.log('this.x: ' +  this.x)
    console.log('this.y: ' +  this.y)
    console.log('this.larguraSprite: ' +  this.larguraSprite)
    console.log('this.alturaSprite: ' +  this.alturaSprite)


    
    console.log('this.qtdCol: ' +  this.qtdCol)
    console.log('this.qtdLine: ' +  this.qtdLine)
    */
  }
  
  move() {
    this.x = this.x - this.velocidade;
    if(this.x < -this.largura){
      this.x = width;
    }
  }
  
  exibePortal() {
    this.posX = this.frameAtual % this.qtdCol * this.larguraSprite;
    this.posY = Math.floor(this.frameAtual / this.qtdCol) * this.alturaSprite;
    
    //image(this.imagem, this.x, this.y)
    
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