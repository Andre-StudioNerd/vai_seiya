class Npc extends Animacao {
  constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    
    this.y = height - this.altura - this.variacaoY;
    this.velocidade = 5;
  }
  
  move() {
    this.x = this.x - this.velocidade;
    //console.log(this.y);
    if(this.x < -this.largura){
      this.y = 200 + Math.floor((700 - 200) * Math.random());
      //console.log(this.y);
      this.x = width;
    }
  }
}