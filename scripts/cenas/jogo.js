class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
    this.faseAtual = 0;
    this.fases = fita.fases[this.faseAtual];
    this.cfgVida = fita.configuracao;
    this.fase = 1;
    this.faseFim = false;
    this.variationY = 0;
  }

  setup() {

    fase = new Fases(this.fases.fase);
    fase.setup();

    splashGame = new Splash(imagemSplash);

    personagem = new Personagem(imagemPersonagem, 0, 72 - this.variationY, 132, 162, 220, 270);
    const inimigo = new Inimigo(imagemInimigo, width - 52, 72 - this.variationY, 70, 67, 105, 100, 10);
    const inimigoTroll = new Inimigo(imagemInimigoTroll, width + 300, 30 - this.variationY, 250, 250, 400, 400, 10);
    const inimigoVoador = new Inimigo(imagemInimigoVoador, width + 300, 300 - this.variationY, 120, 90, 200, 150, 10);


    npc1 = new Npc(imagemNpc, width - 401, -100, 28, 25.33, 28, 25.33);
    npc2 = new Npc(imagemNpc, width - 208, -200, 28, 25.33, 28, 25.33);
    npc3 = new Npc(imagemNpc, width - 108, -350, 28, 25.33, 28, 25.33);
    npc4 = new Npc(imagemNpc, width - 302, -100, 28, 25.33, 28, 25.33);

    npcs.push(npc1, npc2, npc3, npc4);

    crystal = new Crystal(imagemCristal, width - 28, -500, 33, 70, 17.37, 29.33);

    inimigos.push(inimigo, inimigoTroll, inimigoVoador);

    if (!pontuacao) {
      pontuacao = new Pontuacao();
    }

    vida = new Vida(this.cfgVida.vidaMaxima, this.cfgVida.vidaInicial);

  }

  draw() {

    if (this.faseFim === false) {
      fase.draw();
    }

    npcs.map(function(npc) {
      npc.exibe();
      npc.move();
    });

    if (pontuacao.pontos > this.fases.pontuacaoMax) {
      this.faseFim = true;
      fase.fimDeFase();
      if (inimigos[this.inimigoAtual].isShow == true) {
        inimigos[this.inimigoAtual].exibe();
        inimigos[this.inimigoAtual].move();
      }
    } else {
      if (keyIsDown(LEFT_ARROW))
        personagem.anda(0);
      if (keyIsDown(RIGHT_ARROW))
        personagem.anda(1);

      if (personagem.colisao === true) {
        tint(color("#ff0000"));
      }
      personagem.exibe();
      if (personagem.colisao === true) {
        noTint()
        personagem.colisao = false;
      }

      personagem.aplicaGravidade();

      crystal.exibe();
      crystal.move();

      pontuacao.exibe();
      pontuacao.adicionarPonto();

      if (personagem.estaColidindo(crystal)) {
        pontuacao.adicionarCristal();

        if (pontuacao.cristaisVida == this.cfgVida.limiteCristais) {
          pontuacao.cristaisVida = 0;
          somGanhaVida.play();
          vida.ganhaVida();
        }

        crystal.remove();
        gc.play();
      }

      if (inimTela == false) {
        this.inimigoAtual = getNumber(this.inimigoAtual, inimigos.length)
      }

      inimigos[this.inimigoAtual].velocidade = (10 + Math.floor((20 - 10) * Math.random())) * this.fases.velocidadeMob;
      inimigos[this.inimigoAtual].exibe();
      inimigos[this.inimigoAtual].move()

      if (personagem.estaColidindo(inimigos[this.inimigoAtual])) {

        if (inimigos[this.inimigoAtual].jaColidiu === false) {
          vida.perdeVida();
          somPerdeVida.play();
          inimigos[this.inimigoAtual].jaColidiu = true;
        }

        if (vida.vidaAtual <= 0) {
          GameOver();
        }
      }

      inimTela = true;

      if (inimigos[this.inimigoAtual].isShow == false) {
        inimigos[this.inimigoAtual].isShow = true;
        inimTela = false;
      }
    }

    vida.draw();
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      if (this.faseFim === false) {
        personagem.pula(somDoPulo);
      }
    }
    if (key === 'Enter') {
      if (stage === 1) {
        window.location.reload();
      } else {
        stage = 1;
      }
    }
  }
}