const skillsData = {
  'Acrobacia': {
      descricao: 'Você consegue fazer proezas acrobáticas.',
      usos: [
          {
              titulo: 'Amortecer Queda',
              descricao: 'Reduz o dano de queda (reação). Reduz 1d6 + 1d6 por 5 pontos acima da CD. Se reduzir a 0, cai de pé.',
              cd: 'CD 15, Apenas Treinado'
          },
          {
              titulo: 'Equilíbrio',
              descricao: 'Andar sobre superfícies precárias (CD 10 a 20). Pode avançar total com –5. Se sofrer dano, deve fazer novo teste ou cai.',
              cd: 'CD 10 para piso escorregadio, CD 15 para superfície estreita, CD 20 para superfície muito estreita'
          },
          {
              titulo: 'Escapar',
              descricao: 'Fugir de amarras (corda, rede, algemas; CD 20 a 30). Ação completa.',
              cd: 'CD 20 para redes, CD 30 para algemas'
          },
          {
              titulo: 'Levantar-se Rapidamente',
              descricao: 'Levanta como ação livre com sucesso. Se falhar, gasta a ação e continua caído.',
              cd: 'CD 20, Apenas Treinado'
          },
          {
              titulo: 'Passar por Espaço Apertado',
              descricao: 'Ação completa. Move-se por espaços para criaturas uma categoria menor.',
              cd: 'CD 25, Apenas Treinado'
          },
          {
              titulo: 'Passar por Inimigo',
              descricao: 'Teste oposto (Acrobacia/Iniciativa/Luta). Se vencer, atravessa espaço ocupado (terreno difícil).',
              cd: 'Teste oposto'
          }
      ]
  },
  'Adestramento': {
      descricao: 'Você sabe lidar com animais.',
      usos: [
          {
              titulo: 'Acalmar Animal',
              descricao: 'Ação completa. Acalma um animal nervoso/agressivo.',
              cd: 'CD 25'
          },
          {
              titulo: 'Manejar Animal',
              descricao: 'Faz um animal executar tarefa treinada. Também usado como Pilotagem para veículos de tração animal. Ação de movimento.',
              cd: 'CD 15'
          }
      ]
  },
  'Atletismo': {
      descricao: 'Você pode realizar façanhas atléticas.',
      usos: [
          {
              titulo: 'Corrida',
              descricao: 'Ação completa. Move 1,5m por ponto no teste. Modificador ±2 por cada 1,5m de deslocamento acima/abaixo de 9m. Pode correr por (1 + Constituição) rodadas. Depois, teste de Fortitude por rodada (CD crescente) ou fica fatigado.',
              cd: 'CD baseada na distância'
          },
          {
              titulo: 'Escalar',
              descricao: 'Ação de movimento. CD 10 (apoios), 15 (árvore), 20 (ruína), 25 (muro liso). Falha por 5+ = queda. Pode sofrer –5 para avançar total. Se sofrer dano ou aliado cair próximo, novo teste.',
              cd: 'CD 10 para superfícies com apoios, CD 15 para árvore, CD 20 para muro com reentrâncias, CD 25 para muro liso'
          },
          {
              titulo: 'Natação',
              descricao: 'Ação de movimento. CD 10 (calma), 15 (agitada), 20+ (tempestuosa). Falha por 5+ = afunda. Pode fazer segundo teste com nova ação de movimento.',
              cd: 'CD 10 para água calma, CD 15 para agitada, CD 20 ou mais para tempestuosa'
          },
          {
              titulo: 'Saltar',
              descricao: 'Longo (CD 5 por 1,5m) ou altura (CD 15 por 1,5m). Sem impulso (6m), +10 na CD. Parte do movimento.',
              cd: 'CD 5 por 1,5m para salto longo, CD 15 por 1,5m para salto em altura'
          }
      ]
  },
  'Atuação': {
      descricao: 'Você sabe fazer apresentações artísticas, como música, dança ou teatro.',
      usos: [
          {
              titulo: 'Apresentação',
              descricao: 'Teste para ganhar dinheiro (T$ 1d6 + 1d6 por 5 pontos acima). Leva um dia. Lugar propício (festival) dobra valor; inadequado (rua) reduz pela metade.',
              cd: 'CD 20'
          },
          {
              titulo: 'Impressão',
              descricao: 'Teste oposto contra Vontade. Sucesso = +2 em Carisma contra o alvo. Falha = –2. Não pode repetir no mesmo dia. Se múltiplos alvos, o mestre faz teste único.',
              cd: 'Teste oposto contra Vontade'
          }
      ]
  },
  'Cavalgar': {
      descricao: 'Você sabe conduzir animais de montaria (como cavalos, trobos e grifos).',
      usos: [
          {
              titulo: 'Conduzir',
              descricao: 'Teste para obstáculos. CD 15 (ruins), 25 (perigosos). Falha = queda e 1d6 dano.',
              cd: 'CD 15 para obstáculos ruins, CD 25 para perigosos'
          },
          {
              titulo: 'Galopar',
              descricao: 'Ação completa. Move 1,5m por ponto no teste. Modificador ±2 por cada 1,5m além/aquém de 9m.',
              cd: 'CD baseada na distância'
          },
          {
              titulo: 'Montar Rapidamente',
              descricao: 'Monta ou desmonta como ação livre. Falha por 5+ = cai. Nota: sem sela = –5 no teste.',
              cd: 'CD 20'
          }
      ]
  },
  'Conhecimento': {
      descricao: 'Você estudou diversos campos do saber, como aritmética, astronomia, dialética, geografia, história.',
      usos: [
          {
              titulo: 'Idiomas',
              descricao: 'Você pode entender idiomas desconhecidos. Se falhar por 5 ou mais, você tira uma conclusão falsa. Idiomas exóticos ou muito antigos têm CD 30.',
              cd: 'CD 20, idiomas exóticos CD 30'
          },
          {
              titulo: 'Informação',
              descricao: 'Você responde dúvidas gerais. Questões simples, como o ano de fundação de um reino, não exigem testes. Questões complexas, como saber o antídoto de um veneno, tem CD 20. Por fim, mistérios e enigmas, como a origem de uma antiga maldição, tem CD 30.',
              cd: 'CD 20 para questões complexas, CD 30 para mistérios'
          }
      ]
  },
  'Cura': {
      descricao: 'Você sabe tratar ferimentos, doenças e venenos.',
      usos: [
          {
              titulo: 'Cuidados Prolongados',
              descricao: 'Você trata uma pessoa para que ela se recupere mais rapidamente. Se passar, ela aumenta sua recuperação de PV em +1 por nível nesse dia. Este uso leva uma hora e o número máximo de pessoas que você pode cuidar é igual ao seu nível.',
              cd: 'CD 15, Apenas Treinado'
          },
          {
              titulo: 'Necropsia',
              descricao: 'Você examina um cadáver para determinar a causa e o momento aproximado da morte. Causas raras ou extraordinárias, como um veneno ou maldição, possuem CD 30. Este uso leva dez minutos.',
              cd: 'CD 20, Apenas Treinado. Causas raras CD 30'
          },
          {
              titulo: 'Primeiros Socorros',
              descricao: 'Você estabiliza um personagem adjacente que esteja sangrando. Este uso gasta uma ação padrão.',
              cd: 'CD 15'
          },
          {
              titulo: 'Tratamento',
              descricao: 'Você ajuda a vítima de uma doença ou veneno com efeito contínuo. Gaste uma ação completa e faça um teste de Cura contra a CD da doença ou veneno. Se você passar, o paciente recebe +5 em seu próximo teste de Fortitude contra esse efeito. Esta perícia exige uma maleta de medicamentos. Sem ela, você sofre –5 no teste. Você pode usar a perícia Cura em si mesmo, mas sofre –5 no teste.',
              cd: 'CD da doença ou veneno, Apenas Treinado'
          }
      ]
  },
  'Diplomacia': {
      descricao: 'Você convence pessoas com lábia e argumentação. Usos de Diplomacia são efeitos mentais.',
      usos: [
          {
              titulo: 'Barganha',
              descricao: 'Comprando ou vendendo algo, você pode barganhar. Seu teste de Diplomacia é oposto pelo teste de Vontade do negociante. Se passar, você muda o preço em 10% a seu favor. Se passar por 10 ou mais, muda em 20%. Se falhar por 5 ou mais, você ofende o negociante — ele não voltará a tratar com você durante pelo menos uma semana.',
              cd: 'Teste oposto contra Vontade'
          },
          {
              titulo: 'Mudar Atitude',
              descricao: 'Você muda a categoria de atitude de um NPC em relação a você ou a outra pessoa. Faça um teste de Diplomacia oposto pelo teste de Vontade do alvo. Se você passar, muda a atitude dele em uma categoria para cima ou para baixo, à sua escolha (ou, se passar por 10 ou mais, em duas categorias). Se falhar por 5 ou mais, a atitude do alvo muda uma categoria na direção oposta.',
              cd: 'Teste oposto contra Vontade'
          },
          {
              titulo: 'Persuasão',
              descricao: 'Você convence uma pessoa a fazer algo, como responder uma pergunta ou prestar um favor. Se essa coisa for custosa você sofre –5 em seu teste. Se for perigosa você sofre –10 ou falha automaticamente.',
              cd: 'CD 20'
          }
      ]
  },
  'Enganação': {
      descricao: 'Você manipula pessoas com blefes e trapaças.',
      usos: [
          {
              titulo: 'Disfarce',
              descricao: 'Você muda sua aparência ou a de outra pessoa. Faça um teste de Enganação oposto pelo teste de Percepção de quem prestar atenção no disfarçado. Se você passar, a pessoa acredita no disfarce; caso contrário, percebe que há algo errado. Disfarces muito complexos (como uma raça diferente) impõem –5 no seu teste.',
              cd: 'Teste oposto contra Percepção'
          },
          {
              titulo: 'Falsificação',
              descricao: 'Você falsifica um documento. Faça um teste de Enganação oposto pelo teste de Percepção de quem examinar o documento. Se você passar, a pessoa acredita na falsificação; caso contrário, percebe que é falso. Se o documento é muito complexo, ou inclui uma assinatura ou carimbo específico, você sofre –10 no teste.',
              cd: 'Teste oposto contra Percepção'
          },
          {
              titulo: 'Fintar',
              descricao: 'Você pode gastar uma ação padrão e fazer um teste de Enganação oposto a um teste de Reflexos de um ser em alcance curto. Se você passar, ele fica desprevenido contra seu próximo ataque, se realizado até o fim de seu próximo turno.',
              cd: 'Teste oposto contra Reflexos'
          },
          {
              titulo: 'Insinuação',
              descricao: 'Você fala algo para alguém sem que outras pessoas entendam do que você está falando. Se você passar, o receptor entende sua mensagem. Se você falhar por 5 ou mais, ele entende algo diferente do que você queria.',
              cd: 'CD 20'
          },
          {
              titulo: 'Intriga',
              descricao: 'Você espalha uma fofoca. Por exemplo, pode dizer que o dono da taverna está aguando a cerveja, para enfurecer o povo contra ele. Intrigas muito improváveis têm CD 30.',
              cd: 'CD 20, intrigas improváveis CD 30'
          },
          {
              titulo: 'Mentir',
              descricao: 'Você faz uma pessoa acreditar em algo que não é verdade. Seu teste é oposto pelo teste de Intuição da vítima. Mentiras muito implausíveis impõem uma penalidade de –10 em seu teste.',
              cd: 'Teste oposto contra Intuição'
          }
      ]
  },
  'Fortitude': {
      descricao: 'Você usa esta perícia para resistir a efeitos que exigem vitalidade, como doenças e venenos. A CD é determinada pelo efeito. Você também usa Fortitude para manter seu fôlego quando está correndo ou sem respirar. A CD é 15 +1 por teste anterior.',
      usos: [
          {
              titulo: 'Resistir Veneno',
              descricao: 'Para resistir aos efeitos de venenos.',
              cd: 'CD igual ao veneno'
          },
          {
              titulo: 'Resistir Doença',
              descricao: 'Para resistir aos efeitos de doenças.',
              cd: 'CD 15 para doenças leves, CD 20+ para doenças graves'
          },
          {
              titulo: 'Resistir Fadiga',
              descricao: 'Para resistir à fadiga extrema ou condições adversas.',
              cd: 'CD 15 para condições normais, CD 20+ para condições extremas'
          }
      ]
  },
  'Furtividade': {
      descricao: 'Você sabe ser discreto e sorrateiro.',
      usos: [
          {
              titulo: 'Esconder-se',
              descricao: 'Faça um teste de Furtividade oposto pelos testes de Percepção de qualquer um que possa notá-lo. Todos que falharem não conseguem percebê-lo (você tem camuflagem total contra eles). Esconder-se é uma ação livre que você só pode fazer no final do seu turno.',
              cd: 'Teste oposto contra Percepção'
          },
          {
              titulo: 'Seguir',
              descricao: 'Faça um teste de Furtividade oposto ao teste de Percepção da pessoa sendo seguida. Você sofre –5 se estiver em um lugar sem esconderijos ou sem movimento, como uma descampado ou rua deserta.',
              cd: 'Teste oposto contra Percepção'
          }
      ]
  },
  'Guerra': {
      descricao: 'Você foi educado em tática, estratégia e logística.',
      usos: [
          {
              titulo: 'Analisar Terreno',
              descricao: 'Como uma ação de movimento, você pode observar o campo de batalha. Se passar, descobre uma vantagem, como cobertura, camuflagem ou terreno elevado, se houver.',
              cd: 'CD 20'
          },
          {
              titulo: 'Plano de Ação',
              descricao: 'Como uma ação padrão, você orienta um aliado em alcance médio. Se passar, fornece +5 na Iniciativa dele. Se ele ficar com uma Iniciativa maior do que a sua e ainda não tiver agido nesta rodada, age imediatamente após seu turno.',
              cd: 'CD 20'
          }
      ]
  },
  'Iniciativa': {
      descricao: 'Esta perícia determina sua velocidade de reação em situações de perigo. Quando uma cena de ação começa, cada personagem envolvido faz um teste de Iniciativa. Eles então agem em ordem decrescente dos resultados.',
      usos: [
          {
              titulo: 'Ordem de Combate',
              descricao: 'Para determinar quem age primeiro em combate.',
              cd: 'Teste oposto contra outros combatentes'
          }
      ]
  },
  'Intimidação': {
      descricao: 'Você pode assustar ou coagir outras pessoas. Usos de Intimidação são efeitos de medo.',
      usos: [
          {
              titulo: 'Assustar',
              descricao: 'Gaste uma ação padrão e faça um teste de Intimidação oposto pelo teste de Vontade de uma criatura em alcance curto. Se você passar, ela fica abalada pelo resto da cena. Se você passar por 10 ou mais, ela fica apavorada por uma rodada e então abalada pelo resto da cena.',
              cd: 'Teste oposto contra Vontade'
          },
          {
              titulo: 'Coagir',
              descricao: 'Faça um teste de Intimidação oposto pelo teste de Vontade de uma criatura inteligente (Int –3 ou maior) adjacente. Se você passar, ela obedece uma ordem sua (como fazer uma pequena tarefa, deixar que você passe por um lugar que ela estava protegendo...). Se você mandá-la fazer algo perigoso ou que vá contra a natureza dela, ela recebe +5 no teste ou passa automaticamente.',
              cd: 'Teste oposto contra Vontade'
          }
      ]
  },
  'Intuição': {
      descricao: 'Esta perícia mede sua empatia e "sexto sentido".',
      usos: [
          {
              titulo: 'Perceber Mentira',
              descricao: 'Você descobre se alguém está mentindo (veja a perícia Enganação).',
              cd: 'Teste oposto contra Enganação'
          },
          {
              titulo: 'Pressentimento',
              descricao: 'Você analisa uma pessoa, para ter uma noção de sua índole ou caráter, ou uma situação, para saber se há algo anormal (por exemplo, se os habitantes de uma vila estão agindo de forma estranha). Este uso apenas indica se há algo anormal, mas não revela a causa.',
              cd: 'CD 20, Apenas Treinado'
          }
      ]
  },
  'Investigação': {
      descricao: 'Você sabe encontrar pistas e informações.',
      usos: [
          {
              titulo: 'Interrogar',
              descricao: 'Você descobre informações perguntando ou indo para um lugar movimentado e mantendo os ouvidos atentos. Informações gerais ("Quem é o guerreiro mais forte da aldeia?") não exigem teste. Informações restritas, que poucas pessoas conhecem ("Quem é o ancião que está sempre ao lado do rei?"), têm CD 20. Informações confidenciais ou que podem colocar em risco quem falar sobre elas ("Quem é o líder da guilda dos ladrões?"), têm CD 30. Este uso gasta uma hora e T$ 3d6 (para comprar bebidas, subornar oficiais etc.), mas esses valores podem variar de acordo com o mestre.',
              cd: 'CD 20 para informações restritas, CD 30 para informações confidenciais'
          },
          {
              titulo: 'Procurar',
              descricao: 'Você examina um local em busca de algo. A CD varia: 15 para um item ou no meio de uma bagunça, mas não necessariamente escondido; 20 para um item escondido (cofre atrás de um quadro, documento no fundo falso de uma gaveta); 30 para um item muito bem escondido (passagem secreta ativada por um botão, documento escrito com tinta invisível). Este uso gasta desde uma ação completa (examinar uma escrivaninha) até um dia (pesquisar uma biblioteca).',
              cd: 'CD 15 para item em bagunça, CD 20 para item escondido, CD 30 para item muito bem escondido'
          }
      ]
  },
  'Jogatina': {
      descricao: 'Você sabe jogar jogos de azar.',
      usos: [
          {
              titulo: 'Apostar',
              descricao: 'Para resolver uma noite de jogatina, pague T$ 1d10, faça um teste de perícia e consulte a tabela para determinar quanto você ganha. O mestre pode variar o valor da aposta básica. De T$ 1d3, para uma taverna no porto frequentada por marujos e estivadores, a 1d10 x T$ 1.000, para um cassino de luxo em Valkaria.',
              cd: 'CD variável conforme o jogo',
              tabela: {
                  titulo: 'Tabela de Lucros da Jogatina',
                  linhas: [
                      { teste: '9 ou menos', ganho: 'Nenhum.' },
                      { teste: '10 a 14', ganho: 'Metade da aposta.' },
                      { teste: '15 a 19', ganho: 'Valor da aposta (você "empata").' },
                      { teste: '20 a 29', ganho: 'Dobro da aposta.' },
                      { teste: '30 a 39', ganho: 'Triplo da aposta.' },
                      { teste: '40 ou mais', ganho: 'Quíntuplo da aposta.' }
                  ]
              }
          }
      ]
  },
  'Ladinagem': {
      descricao: 'Você sabe exercer atividades ilícitas.',
      usos: [
          {
              titulo: 'Abrir Fechadura',
              descricao: 'Você abre uma fechadura trancada. A CD é 20 para fechaduras simples (porta de loja), 25 para fechaduras médias (prisão, baú) e 30 para fechaduras superiores (cofre, câmara do tesouro). Este uso exige uma ação completa e uma gazua. Sem ela, você sofre –5 em seu teste.',
              cd: 'CD 20 para fechaduras simples, CD 25 para médias, CD 30 para superiores'
          },
          {
              titulo: 'Ocultar',
              descricao: 'Você esconde um objeto em você mesmo. Gaste uma ação padrão e faça um teste de Ladinagem oposto pelo teste de Percepção de qualquer um que possa vê-lo. Objetos discretos ou pequenos fornecem +5 no teste; objetos desajeitados ou grandes impõem –5.',
              cd: 'Teste oposto contra Percepção'
          },
          {
              titulo: 'Punga',
              descricao: 'Você pega um objeto de outra pessoa (ou planta um objeto nas posses dela). Gaste uma ação padrão e faça um teste de Ladinagem. Se passar, você pega (ou coloca) o que queria. A vítima tem direito a um teste de Percepção (CD igual ao resultado de seu teste de Ladinagem).',
              cd: 'CD 20'
          },
          {
              titulo: 'Sabotar',
              descricao: 'Você desabilita um dispositivo mecânico. Uma ação simples (emperrar uma fechadura, desativar uma armadilha básica, sabotar uma roda de carroça para que quebre 1d4 rodadas após o uso) tem CD 20. Uma ação complexa (desativar uma armadilha avançada, sabotar um canhão para explodir quando utilizado) tem CD 30.',
              cd: 'CD 20 para ações simples, CD 30 para ações complexas'
          }
      ]
  },
  'Luta': {
      descricao: 'Você usa Luta para fazer ataques corpo a corpo. A CD é a Defesa do alvo. Se você acertar, causa dano de acordo com a arma utilizada. Veja o Capítulo 5: Jogando para as regras completas de combate.',
      usos: [
          {
              titulo: 'Ataque Corpo a Corpo',
              descricao: 'Para atacar com armas brancas ou desarmado.',
              cd: 'CD igual à Defesa do oponente'
          }
      ]
  },
  'Misticismo': {
      descricao: 'Esta perícia envolve o conhecimento de magias, itens mágicos e fenômenos sobrenaturais.',
      usos: [
          {
              titulo: 'Detectar Magia',
              descricao: 'Como uma ação completa, você detecta a presença e intensidade de auras mágicas em alcance curto (mas não suas localizações exatas). A intensidade de uma aura depende do círculo da magia ou categoria do item mágico que a gerou.',
              cd: 'CD 15'
          },
          {
              titulo: 'Identificar Criatura',
              descricao: 'Você analisa uma criatura mágica (construto, dragão, fada, morto-vivo etc.) que possa ver. Se passar, lembra uma característica da criatura, como um poder ou vulnerabilidade. Para cada 5 pontos pelos quais o resultado do teste superar a CD, você lembra outra característica.',
              cd: 'CD 15 + ND da Criatura'
          },
          {
              titulo: 'Identificar Item Mágico',
              descricao: 'Você estuda um item mágico para identificar seus poderes. A CD é 20 para itens mágicos menores, 25 para médios e 30 para itens mágicos maiores. Este uso gasta uma hora.',
              cd: 'CD 20 para itens menores, CD 25 para médios, CD 30 para maiores'
          },
          {
              titulo: 'Identificar Magia',
              descricao: 'Quando alguém lança uma magia, você pode adivinhar qual é através de seus gestos e palavras. Este uso é uma reação.',
              cd: 'CD 15 + Custo em PM da Magia'
          },
          {
              titulo: 'Informação',
              descricao: 'Você responde dúvidas relativas a magias, itens mágicos, fenômenos sobrenaturais, runas, profecias, planos de existência etc. Questões simples não exigem teste. Questões complexas tem CD 20. Por fim, mistérios e enigmas tem CD 30.',
              cd: 'CD 20 para questões complexas, CD 30 para mistérios'
          },
          {
              titulo: 'Lançar Magia de Armadura',
              descricao: 'Lançar uma magia arcana usando armadura exige um teste. Esse teste sofre penalidade de armadura. Se falhar, a magia não funciona, mas gasta pontos de mana mesmo assim.',
              cd: 'CD 20 + Custo em PM da Magia'
          }
      ]
  },
  'Nobreza': {
      descricao: 'Você recebeu a educação de um nobre.',
      usos: [
          {
              titulo: 'Etiqueta',
              descricao: 'Você sabe se portar em ambientes aristocráticos, como bailes e audiências.',
              cd: 'CD 15'
          },
          {
              titulo: 'Informação',
              descricao: 'Você responde dúvidas relativas a leis, tradições, linhagens e heráldica. Questões simples não exigem teste. Questões complexas tem CD 20. Por fim, mistérios e enigmas tem CD 30.',
              cd: 'CD 20 para questões complexas, CD 30 para mistérios'
          }
      ]
  },
  'Ofício': {
      descricao: 'Ofício na verdade são várias perícias diferentes. Cada uma permite fabricar itens de certas categorias: Armeiro (armas e armaduras), Artesão (equipamento de aventura, ferramentas, esotéricos e veículos), Alquimista (alquímicos), Cozinheiro (alimentação), Alfaiate (vestuário).',
      usos: [
          {
              titulo: 'Consertar',
              descricao: 'Reparar um item destruído tem a mesma CD para fabricá-lo. Cada tentativa consome uma hora de trabalho e um décimo do preço original do item. Em caso de falha, o tempo e o dinheiro são perdidos (mas você pode tentar novamente).',
              cd: 'CD igual à fabricação'
          },
          {
              titulo: 'Fabricar',
              descricao: 'Você produz um item gastando matéria-prima e tempo de trabalho. A matéria-prima custa um terço do preço do item. O tempo de trabalho depende do tipo de item: um dia para consumíveis, uma semana para não consumíveis comuns e um mês para não consumíveis superiores e/ou mágicos.',
              cd: 'CD 15 para itens simples, CD 20 para itens complexos'
          },
          {
              titulo: 'Identificar',
              descricao: 'Você pode identificar itens raros e exóticos ligados ao seu Ofício. Se passar, descobre as propriedades do item e seu preço. Este uso gasta uma ação completa.',
              cd: 'CD 20'
          },
          {
              titulo: 'Sustento',
              descricao: 'Com uma semana de trabalho e um teste de Ofício, você ganha T$ 1, mais T$ 1 por ponto que seu teste exceder a CD. Por exemplo, com um resultado 20, ganha T$ 6 pela semana de trabalho.',
              cd: 'CD 15'
          }
      ]
  },
  'Percepção': {
      descricao: 'Você nota coisas usando seus sentidos.',
      usos: [
          {
              titulo: 'Observar',
              descricao: 'Você vê coisas discretas ou escondidas. A CD varia de 15, para algo difícil de ser visto (um livro específico em uma estante) a 30, para algo quase invisível (uma gota de sangue em uma folha no meio de uma floresta à noite). Para pessoas ou itens escondidos, a CD é o resultado do teste de Furtividade ou Ladinagem feito para esconder a pessoa ou o item. Você também pode ler lábios (CD 20).',
              cd: 'CD 15 para algo difícil de ver, CD 20 para item escondido, CD 30 para algo quase invisível'
          },
          {
              titulo: 'Ouvir',
              descricao: 'Você escuta barulhos sutis. Uma conversa casual próxima tem CD 0 — ou seja, a menos que exista alguma penalidade, você passa automaticamente. Ouvir pessoas sussurrando tem CD 15. Ouvir do outro lado de uma porta aumenta a CD em +10. Você pode fazer testes de Percepção para ouvir mesmo que esteja dormindo, mas sofre –10 no teste; um sucesso faz você acordar.',
              cd: 'CD 0 para conversa casual, CD 15 para sussurros, CD 20 para criaturas invisíveis'
          }
      ]
  },
  'Pilotagem': {
      descricao: 'Você sabe operar veículos como carroças, barcos e balões. Ações simples não exigem testes — você pode atrelhar seus trobos a sua carroça e conduzi-la pela estrada, ou levantar âncora e velejar seu navio em águas tranquilas, automaticamente.',
      usos: [
          {
              titulo: 'Conduzir em Situações Difíceis',
              descricao: 'Conduzir um veículo em situações ruins (terreno acidentado para veículos terrestres, chuva ou ventania para veículos aquáticos ou aéreos, ou aéreos) exige uma ação de movimento e um teste de Pilotagem contra CD 15 por turno ou cena, de acordo com o mestre. Se falhar, você avança metade do deslocamento. Se falhar por 5 ou mais, se acidenta de alguma forma. Situações extremas (terreno com obstáculos, tempestade...) aumentam a CD para 25.',
              cd: 'CD 15 para situações ruins, CD 25 para situações extremas'
          }
      ]
  },
  'Pontaria': {
      descricao: 'Você usa Pontaria para fazer ataques à distância. A CD é a Defesa do alvo. Se você acertar, causa dano de acordo com a arma utilizada. Veja o Capítulo 5: Jogando para as regras completas de ataque.',
      usos: [
          {
              titulo: 'Ataque à Distância',
              descricao: 'Para atacar com armas de longo alcance.',
              cd: 'CD igual à Defesa do oponente'
          }
      ]
  },
  'Reflexos': {
      descricao: 'Você usa esta perícia para resistir a efeitos que exigem reação rápida, como armadilhas e explosões. A CD é determinada pelo efeito. Você também usa Reflexos para evitar fintas.',
      usos: [
          {
              titulo: 'Esquivar',
              descricao: 'Para se esquivar de ataques ou perigos.',
              cd: 'CD igual ao ataque ou perigo'
          },
          {
              titulo: 'Reação Rápida',
              descricao: 'Para reagir rapidamente a situações inesperadas.',
              cd: 'CD 15 para reações normais, CD 20+ para reações complexas'
          },
          {
              titulo: 'Agarrar',
              descricao: 'Para agarrar objetos em queda ou em movimento.',
              cd: 'CD 15 para objetos lentos, CD 20+ para objetos rápidos'
          }
      ]
  },
  'Religião': {
      descricao: 'Você possui conhecimento sobre os deuses e as religiões de Arton.',
      usos: [
          {
              titulo: 'Identificar Criatura',
              descricao: 'Você pode identificar uma criatura com origem divina (anjos, demônios, alguns mortos-vivos e construtos etc.). Veja a perícia Misticismo.',
              cd: 'CD 15 + ND da Criatura'
          },
          {
              titulo: 'Identificar Item Mágico',
              descricao: 'Você pode identificar um item mágico de origem divina. Veja a perícia Misticismo.',
              cd: 'CD 20 para itens menores, CD 25 para médios, CD 30 para maiores'
          },
          {
              titulo: 'Informação',
              descricao: 'Você responde dúvidas relativas a deuses, profecias, planos de existência etc. Questões simples não exigem teste. Questões complexas tem CD 20. Por fim, mistérios e enigmas tem CD 30.',
              cd: 'CD 20 para questões complexas, CD 30 para mistérios'
          },
          {
              titulo: 'Rito',
              descricao: 'Você realiza uma cerimônia religiosa, como um batizado, casamento ou funeral. Isso inclui a cerimônia de penitência para redimir um devoto que tenha descumprido as Obrigações & Restrições de sua divindade. Uma cerimônia de penitência exige um sacrifício de T$ 100 por nível de personagem do devoto ou a realização de uma missão sagrada, de acordo com o mestre.',
              cd: 'CD 20'
          }
      ]
  },
  'Sobrevivência': {
      descricao: 'Você está em casa nos ermos.',
      usos: [
          {
              titulo: 'Acampamento',
              descricao: 'Você consegue abrigo e alimento para você e seu grupo por um dia (caçando, pescando, colhendo frutos...). A CD depende do terreno: 15 para planícies e colinas, 20 para florestas e pântanos, 25 para desertos ou montanhas e 30 para regiões planares perigosas ou áreas de Tormenta. Regiões muito áridas ou estéreis e clima ruim (neve, tempestade etc.) impõem penalidade cumulativa de –5. Dormir ao relento sem um acampamento e um saco de dormir diminui sua recuperação de PV e PM. Este uso exige equipamento de viagem. Sem ele, você sofre –5 em seu teste.',
              cd: 'CD 15 para planícies e colinas, CD 20 para florestas e pântanos, CD 25 para desertos ou montanhas, CD 30 para regiões planares perigosas'
          },
          {
              titulo: 'Identificar Criatura',
              descricao: 'Você pode identificar um animal ou monstro. Veja a perícia Misticismo.',
              cd: 'CD 15 + ND da Criatura'
          },
          {
              titulo: 'Orientar-se',
              descricao: 'Um personagem viajando pelos ermos precisa fazer um teste de Sobrevivência por dia para avançar. A CD depende do tipo de terreno (veja em "Acampamento"). Se passar, você avança seu deslocamento normal. Se falhar, avança apenas metade. Se falhar por 5 ou mais, se perde e não avança pelo dia. Num grupo, um personagem deve ser escolhido como guia. Personagens treinados em Sobrevivência podem ajudá-lo. Entretanto, se mais de um personagem quiser fazer o teste por si só, todos deverão rolar em segredo. Os jogadores devem decidir qual guia seguir antes de verem o resultado! Este teste é exigido apenas em jornadas perigosas (de acordo com o mestre).',
              cd: 'CD 15 para planícies e colinas, CD 20 para florestas e pântanos, CD 25 para desertos ou montanhas, CD 30 para regiões planares perigosas'
          },
          {
              titulo: 'Rastrear',
              descricao: 'Você pode identificar e seguir rastros. A CD é 15 para solo macio (neve, lama), 20 para solo comum (grama, terra) e 25 para solo duro (rocha ou piso de interiores). A CD diminui em –5 se você estiver rastreando um grupo grande (dez ou mais indivíduos) ou criaturas Enormes ou Colossais, mas aumenta em +5 em visibilidade precária (noite, chuva, neblina...). Enquanto rastreia, seu deslocamento é reduzido à metade. Se falhar, pode tentar novamente gastando mais um dia. Porém, a cada dia desde a criação dos rastros, a CD aumenta em +1.',
              cd: 'CD 15 para solo macio, CD 20 para solo comum, CD 25 para solo duro, Apenas Treinado'
          }
      ]
  },
  'Vontade': {
      descricao: 'Você usa esta perícia para resistir a efeitos que exigem determinação, como intimidação e encantamentos. A CD é determinada pelo efeito. Testes de Vontade são testes de resistência.',
      usos: [
          {
              titulo: 'Resistir Encantamento',
              descricao: 'Para resistir a magias de encantamento.',
              cd: 'CD igual à magia'
          },
          {
              titulo: 'Resistir Ilusão',
              descricao: 'Para resistir a magias de ilusão.',
              cd: 'CD igual à magia'
          },
          {
              titulo: 'Resistir Medo',
              descricao: 'Para resistir a efeitos de medo ou terror.',
              cd: 'CD 15 para medo simples, CD 20+ para terror extremo'
          }
      ]
  }
};

module.exports = skillsData;