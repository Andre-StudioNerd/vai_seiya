class Fases {
  constructor(fase) {
    this.fase = fase;
    this.cenarios = [];
    this.portalChegou = false;
    this.TocarPassaFase = true;
    this.exibeBotao = true;
  }

  setup() {


    switch (this.fase) {
      case 1:
        /*** CENARIOS PARALAX ***/
        cenario1 = new Cenario(imagemCenario1, 5);
        cenario2 = new Cenario(imagemCenario2, 5);
        cenario3 = new Cenario(imagemCenario3, 2);
        cenario4 = new Cenario(imagemCenario4, 2);
        cenario5 = new Cenario(imagemCenario5, 5);
        cenario6 = new Cenario(imagemCenario6, 7);
        cenario7 = new Cenario(imagemCenario7, 7);
        imagemPortal = loadImage('imagens/cenario/portal.png');
        portal = new Portal(imagemPortal, width, 58 - jogo.variationY, 100, 239, 250, 598, 1000, 1794);
        jogo.variationY = 0;
        break;
      case 2:
        /*** CENARIOS PARALAX ***/
        cenario1 = new Cenario(imgCnrFs021, 5);
        cenario2 = new Cenario(imgCnrFs022, 5);
        cenario3 = new Cenario(imgCnrFs023, 2);
        cenario4 = new Cenario(imgCnrFs024, 2);
        cenario5 = new Cenario(imgCnrFs025, 5);
        cenario6 = new Cenario(imgCnrFs026, 7);
        cenario7 = new Cenario(imgCnrFs027, 7);
        imagemPortal = loadImage('imagens/cenario/portal.png');
        portal = new Portal(imagemPortal, width, 58 - jogo.variationY, 100, 239, 250, 598, 1000, 1794);
        jogo.variationY = 20;
        break;
      case 3:
        /*** CENARIOS PARALAX ***/
        cenario1 = new Cenario(imgCnrFs031, 5);
        cenario2 = new Cenario(imgCnrFs032, 5);
        cenario3 = new Cenario(imgCnrFs033, 2);
        cenario4 = new Cenario(imgCnrFs034, 2);
        cenario5 = new Cenario(imgCnrFs035, 5);
        cenario6 = new Cenario(imgCnrFs036, 7);
        cenario7 = new Cenario(imgCnrFs037, 7);
        imagemPortal = loadImage('imagens/cenario/portal.png');
        portal = new Portal(imagemPortal, width, 58 - jogo.variationY, 100, 239, 250, 598, 1000, 1794);
        jogo.variationY = 4;
        break;
      case 4:
        /*** CENARIOS PARALAX ***/
        cenario1 = new Cenario(imgCnrFs041, 5);
        cenario2 = new Cenario(imgCnrFs042, 5);
        cenario3 = new Cenario(imgCnrFs043, 2);
        cenario4 = new Cenario(imgCnrFs044, 2);
        cenario5 = new Cenario(imgCnrFs045, 5);
        cenario6 = new Cenario(imgCnrFs046, 7);
        cenario7 = new Cenario(imgCnrFs047, 7);
        imagemPortal = loadImage('imagens/cenario/MagicBroom.png');
        portal = new Portal(imagemPortal, width, 58 - jogo.variationY+15, 100, 139, 385, 412, 1540, 1236);
        jogo.variationY = -15;
        break;
    }

    this.cenarios.push(cenario1, cenario2, cenario3, cenario4, cenario5, cenario6, cenario7);

        


  }

  fimDeFase() {
    this.faseFim = true;
    if (personagem.estaColidindo(portal)) {
      this.splashFase();
    }
    fase.cenarios.map(function(cenario) {
      cenario.exibe();
      cenario.move();
    });

    portal.exibePortal()

    if (portal.x >= windowWidth / 2) {
      portal.move();
    }

    pontuacao.exibe();
    personagem.exibe();
    personagem.aplicaGravidade();

    if (portal.x <= windowWidth / 2) {
      this.portalChegou = true;
      if (!personagem.estaColidindo(portal)) {
        personagem.anda(1);
      }

      if (personagem.estaColidindo(portal)) {
        this.splashFase();
      }
    }



    if ((personagem.x > 0) && (this.portalChegou === false)) {
      personagem.anda(0);
    }
  }

  splashFase() {
    if (this.TocarPassaFase === true) {
      trilhaSonoras[jogo.faseAtual].stop();
      passaFase.play();
      this.TocarPassaFase = false;
    }

    this.fase++;
    this.faseFim = false;
    this.portalChegou = false;

    //Canv = createCanvas(windowWidth, windowHeight);
    //myDiv.addClass("DivNextLevel");

    rectMode(CENTER); // Set rectMode to CENTER
    fill(100);
    myDiv = rect(width / 2, height / 2, 700, 500);

    if(jogo.faseAtual != 3) {
      fill(color('#FFF'));
      textAlign(CENTER, CENTER);
      textSize(27);
      text("PARABENS HIPSTA, VOCE PASSOU PELA FASE!", (width / 2)-5, (height / 7) * 1.9);
      textSize(20);
      text("CONTINUE EM BUSCA DA VASSOURA MAGICA.\n\n COLETE TODOS OS CRISTAIS PODEROSOS PELO CAMINHO.", width / 2, (height / 7) * 3);

      if (this.exibeBotao === true) {


        botaoPassaFase = new BotaoGerenciador('PROXIMA FASE', width / 2, height / 2, 'continuar');
        botaoPassaFase.posY = height / 7 * 4.5;
        botaoPassaFase.draw();
        this.exibeBotao = false;
      }
      
    } else {
    
      fill(color('#FFF'));
      textAlign(CENTER, CENTER);
      textSize(40);
      text("PARABENS HIPSTA!!\nVOCE COMPLETOU O JOGO!", (width / 2), (height / 7) * 2.5);
      textSize(32);
      text("AGORA COM SUA VASSOURA MAGICA PODERA \n EXPLORAR NOVOS MUNDOS E \n NOVOS PODERS NA SUA PROXIMA AVENTURA!! \n\n DESENVOLVIDO POR: TIAGO JAQUES", width / 2, (height / 7) * 4);
      
    }
    



    /*
    jogo.faseAtual++;
    jogo.fases = fita.fases[jogo.faseAtual];
    jogo.setup();
    */
  }

  draw() {
    this.cenarios.map(function(cenario) {
      cenario.exibe();
      cenario.move();
    });
  }
}