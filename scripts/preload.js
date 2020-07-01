function preload() {
  /*** TELA INICIAL - SPLASH ***/
  imagemSplash = loadImage('imagens/cenario/fundo_game.png');
  //controles = loadImage('imagens/cenario/splash/arrows.png');
  imagemTelaInicial = loadImage('imagens/cenario/telavs.png');
  fontPrincipal = loadFont('imagens/assets/fonteTelaInicial.otf');

  /*** PERSONAGEM ***/
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');

  /*** VIDA ***/
  imagemVida = loadImage('imagens/assets/coracao.png')


  /*** OBJETOS TELA NPC E COLETAVEIS ***/
  imagemCristal = loadImage('imagens/coletaveis/crystal.png');
  imagemNpc = loadImage('imagens/cenario/npc/bee.png');

  /*** SONS ***/
  somDoPulo = loadSound('sons/somPulo.mp3');
  gg = loadSound('sons/GameOver.ogg');
  gc = loadSound('sons/crystal.wav');
  gameover = loadImage('imagens/assets/game-over.png');
  passaFase = loadSound('sons/winner.mp3');
  somEntrada = loadSound('sons/telainicial.mp3');
  somPerdeVida = loadSound('sons/hit.wav');
  somGanhaVida = loadSound('sons/vida.wav');
  somVitoria = loadSound('sons/final.ogg');

  trilhaSonora = loadSound('sons/trilha_jogo.mp3');
  trilhaSonora2 = loadSound('sons/fase2.ogg');
  trilhaSonora3 = loadSound('sons/fase3.mp3');
  trilhaSonora4 = loadSound('sons/fase41.mp3');

  trilhaSonoras.push(trilhaSonora, trilhaSonora2, trilhaSonora3, trilhaSonora4);

  /*** INIMIGOS ***/
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoTroll = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');

  fita = loadJSON('fita/fita.json');

  imagemCenario1 = loadImage('imagens/cenario/fundo_game.png');
  imagemCenario2 = loadImage('imagens/cenario/fase01/6.png');
  imagemCenario3 = loadImage('imagens/cenario/fase01/5.png');
  imagemCenario4 = loadImage('imagens/cenario/fase01/4.png');
  imagemCenario5 = loadImage('imagens/cenario/fase01/3.png');
  imagemCenario6 = loadImage('imagens/cenario/fase01/2.png');
  imagemCenario7 = loadImage('imagens/cenario/fase01/1.png');

  imgCnrFs021 = loadImage('imagens/cenario/fase02/7.png');
  imgCnrFs022 = loadImage('imagens/cenario/fase02/6.png');
  imgCnrFs023 = loadImage('imagens/cenario/fase02/5.png');
  imgCnrFs024 = loadImage('imagens/cenario/fase02/4.png');
  imgCnrFs025 = loadImage('imagens/cenario/fase02/3.png');
  imgCnrFs026 = loadImage('imagens/cenario/fase02/2.png');
  imgCnrFs027 = loadImage('imagens/cenario/fase02/1.png');

  imgCnrFs031 = loadImage('imagens/cenario/fase03/7.png');
  imgCnrFs032 = loadImage('imagens/cenario/fase03/6.png');
  imgCnrFs033 = loadImage('imagens/cenario/fase03/5.png');
  imgCnrFs034 = loadImage('imagens/cenario/fase03/4.png');
  imgCnrFs035 = loadImage('imagens/cenario/fase03/3.png');
  imgCnrFs036 = loadImage('imagens/cenario/fase03/2.png');
  imgCnrFs037 = loadImage('imagens/cenario/fase03/1.png');

  imgCnrFs041 = loadImage('imagens/cenario/fase04/7.png');
  imgCnrFs042 = loadImage('imagens/cenario/fase04/6.png');
  imgCnrFs043 = loadImage('imagens/cenario/fase04/5.png');
  imgCnrFs044 = loadImage('imagens/cenario/fase04/4.png');
  imgCnrFs045 = loadImage('imagens/cenario/fase04/3.png');
  imgCnrFs046 = loadImage('imagens/cenario/fase04/2.png');
  imgCnrFs047 = loadImage('imagens/cenario/fase04/1.png');
}