# Magias — 3º Círculo (Tormenta20 v1.3)

> Fonte: Capítulo 4 do PDF enviado. Cada magia segue um bloco YAML parseável.

## Índice

- [Âncora Dimensional](#ancora-dimensional)
- [Anular a Luz](#anular-a-luz)
- [Banimento](#banimento)
- [Coluna de Chamas](#coluna-de-chamas)
- [Comunhão com a Natureza](#comunhao-com-a-natureza)
- [Contato Extraplanar](#contato-extraplanar)
- [Controlar Água](#controlar-agua)
- [Controlar Terra](#controlar-terra)
- [Convocação Instantânea](#convocacao-instantanea)
- [Despertar Consciência](#despertar-consciencia)
- [Dificultar Detecção](#dificultar-deteccao)
- [Requer 2º círculo.Dispersar as Trevas](#requer-2o-circulodispersar-as-trevas)
- [Enxame Rubro de Ichabod](#enxame-rubro-de-ichabod)
- [Erupção Glacial](#erupcao-glacial)
- [Ferver Sangue](#ferver-sangue)
- [Globo de Invulnerabilidade](#globo-de-invulnerabilidade)
- [Heroísmo](#heroismo)
- [Ilusão Lacerante](#ilusao-lacerante)
- [Lança Ígnea de Aleph](#lanca-ignea-de-aleph)
- [Miragem](#miragem)
- [Missão Divina](#missao-divina)
- [Muralha Elemental](#muralha-elemental)
- [Poeira da Podridão](#poeira-da-podridao)
- [Potência Divina](#potencia-divina)
- [Proteção contra Magia](#protecao-contra-magia)
- [Servo Divino](#servo-divino)
- [Sopro da Salvação](#sopro-da-salvacao)
- [Telecinesia](#telecinesia)
- [Teletransporte](#teletransporte)
- [Tentáculos de Trevas](#tentaculos-de-trevas)
- [Transformação de Guerra](#transformacao-de-guerra)
- [Viagem Arbórea](#viagem-arborea)
- [Voo](#voo)


## Âncora Dimensional {#ancora-dimensional}

```yaml
id: ancora-dimensional
nome: "Âncora Dimensional"
pagina_pdf: 185
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 185
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg"
  alt: "abjuração/escudo"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Abjuração"
  tradicoes: ["Arcana"]
  palavras_chave: ["abjuração"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 criatura ou objeto"
  duracao: "cena"
  resistencia: "—"
mecanica:
  descricao_resumida: "O alvo é envolvido por um campo de  força cor de esmeralda que impede  qualquer movimento planar."
  efeito_detalhado: |
    O alvo é envolvido por um campo de  força cor de esmeralda que impede  qualquer movimento planar.
    Isso inclui magias de convocação (como Salto Dimensional  e Teletransporte), viagens  astrais e a
    habilidade incorpóreo.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "muda o alcance para médio,  a área para esfera com 3m de raio e o  alvo para criaturas escolhidas"
  - custo: 2
    efeito: "muda o efeito para criar um  fio de energia cor de esmeralda que  prende o alvo a um ponto no espaço  dentro do alcance. O ponto precisa ser  fixo, mas não precisa de nenhum apoio  ou superfície (pode simplesmente flutuar no ar). O alvo não pode se afastar mais de 3m do ponto, nem fisica mente, nem com movimento planar.  O fio possui 20 PV e redução de dano  20 (mas pode ser dissipado por efei tos que libertam criaturas, como o Julgamento Divino: Libertação do paladino)"
  - custo: 4
    efeito: "como acima, mas em vez de  um fio, cria uma corrente de energia,  com 20 PV e redução de dano 40"
  - custo: 4
    efeito: "muda o alvo para área de cubo  de 9m, a duração para permanente e  adiciona componente material (chave  de esmeralda no valor de T$ 2.000).  Em vez do normal, nenhum tipo de  movimento planar pode ser feito para  entrar ou sair da área"
  - custo: 9
    efeito: "muda o alcance para médio,  a área para esfera com 3m de raio e o  alvo para criaturas escolhidas. Cria um  fio de energia (veja acima) que prende  todos os alvos ao centro da área"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Anular a Luz {#anular-a-luz}

```yaml
id: anular-a-luz
nome: "Anular a Luz"
pagina_pdf: 186
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 186
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowbolt.jpg"
  alt: "sombra/necromancia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Necromancia"
  tradicoes: ["Divina"]
  palavras_chave: ["necromancia"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  area: "esfera com 6m de raio"
  duracao: "ver texto"
  resistencia: "—"
mecanica:
  descricao_resumida: "Esta magia cria uma onda de escuridão que causa diversos efeitos."
  efeito_detalhado: |
    Esta magia cria uma onda de escuridão que causa diversos efeitos. Magias de até 3º círculo na área são dissipadas se você passar num teste de Religião contra a CD de cada uma. Seus aliados na área são protegidos por uma aura sombria e recebem +4 na Defesa até o fim da cena. Inimigos na área ficam enjoados por 1d4 rodadas (apenas uma vez por cena). Anular a Luz anula Dispersar as Trevas (este efeito tem duração instantânea). +2 PM: aumenta o bônus na Defesa em +1. +4 PM: muda as magias dissipadas para até 4º círculo. Requer 4º círculo. +9 PM: muda as magias dissipadas para até 5º círculo. Requer 5º círculo.
  dano_ou_cura:
    formulas: ["1d4"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 4
    efeito: "muda as magias dissipadas  para até 4º círculo. Requer 4º círculo"
  - custo: 9
    efeito: "muda as magias dissipadas  para até 5º círculo. Requer 5º círculo"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Banimento {#banimento}

```yaml
id: banimento
nome: "Banimento"
pagina_pdf: 188
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 188
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg"
  alt: "abjuração/escudo"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Abjuração"
  tradicoes: ["Divina"]
  palavras_chave: ["abjuração"]
execucao:
  acao: "1d3+1 rodadas"
  alcance: "curto"
  alvo: "1 criatura"
  duracao: "instantânea"
  resistencia: "Vontade parcial"
mecanica:
  descricao_resumida: "tantânea; Resistência: Vontade parcial."
  efeito_detalhado: |
    tantânea; Resistência: Vontade parcial. Você expulsa uma criatura não nativa de Arton. Um alvo nativo de outro mundo (como muitos espíritos), é teletransportado de volta para um lugar aleatório de seu mundo de origem. Já um alvo morto-vivo tem sua conexão com as energias negativas rompidas, sendo reduzido a 0 PV . Se passar na resistência, em vez dos efeitos acima, o alvo fica enjoado por 1d4 rodadas. Se você tiver um ou mais itens que se oponham ao alvo de alguma maneira, a CD do teste de resistência aumenta em +2 por item. Por exemplo, se lançar a magia contra demônios do frio (vulneráveis a água benta e que odeiam luz e calor) enquanto segura um frasco de água benta e uma tocha acesa, a CD aumenta em +4. O mestre decide se determinado item é forte o bastante contra a criatura para isso. +0 PM: muda a resistência para nenhum. Em vez do normal, devolve automaticamente uma criatura conjurada (como por uma magia de convocação) para seu plano de origem.
  dano_ou_cura:
    formulas: ["1d4"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 0
    efeito: "muda a resistência para nenhum. Em vez do normal, devolve automaticamente uma criatura conjurada  (como por uma magia de convocação)  para seu plano de origem"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Coluna de Chamas {#coluna-de-chamas}

```yaml
id: coluna-de-chamas
nome: "Coluna de Chamas"
pagina_pdf: 190
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 190
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_fire_fireball02.jpg"
  alt: "magia de fogo"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Evocação"
  tradicoes: ["Divina"]
  palavras_chave: ["evocação"]
execucao:
  acao: "padrão"
  alcance: "longo"
  area: "cilindro com 3m de raio e 30m  de altura"
  duracao: "instantânea"
  resistencia: "Reflexos reduz à metade"
mecanica:
  descricao_resumida: "sistência: Reflexos reduz à metade."
  efeito_detalhado: |
    sistência: Reflexos reduz à metade. Um pilar de fogo sagrado desce dos céus, causando 6d6 pontos de dano de fogo mais 6d6 pontos de dano de luz nas criaturas e objetos livres na área. +1 PM: aumenta o dano de fogo em +1d6. +1 PM: aumenta o dano de luz em +1d6.
  dano_ou_cura:
    formulas: ["1d6", "6d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm: []
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Comunhão com a Natureza {#comunhao-com-a-natureza}

```yaml
id: comunhao-com-a-natureza
nome: "Comunhão com a Natureza"
pagina_pdf: 190
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 190
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_protectionformnature.jpg"
  alt: "natureza"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Adivinhação"
  tradicoes: ["Divina"]
  palavras_chave: ["adivinhação", "natureza"]
execucao:
  acao: "completa"
  alcance: "pessoal"
  alvo: "você"
  duracao: "1 dia"
  resistencia: "—"
mecanica:
  descricao_resumida: "Após uma breve união com a natureza local, você obtém informações e intuições sobre a região em que está, numa distância equivalente a um dia de viagem."
  efeito_detalhado: |
    Após uma breve união com a natureza local, você obtém informações e intuições sobre a região em que está, numa distância equivalente a um dia de viagem. Você recebe 6d4 dados de auxílio. Enquanto a magia durar, sempre que for realizar um teste de perícia em áreas naturais, você pode gastar 2d4 (mais 2d4 para cada círculo de magias acima do 3º que puder lançar) e adicionar o resultado rolado como bônus no teste. A magia termina se você ficar sem dados. +1 PM: muda a execução para 1 minuto e a duração para instantânea. Em vez do normal, você descobre 1d4+1 infor mações sobre os seguintes temas: terreno, animais, vegetais, minerais, cursos d’água e presença de criaturas antinaturais numa região natural em que você esteja. Você pode, por exemplo, desco brir a quantidade de cavernas (terreno), se uma planta rara existe (vegetais) e se há mortos-vivos (criaturas antinaturais) na região. +3 PM: aumenta o número de dados de auxílio em +2. +4 PM: muda o tipo dos dados de auxílio para d6. +8 PM: muda o tipo dos dados de auxílio para d8.
  dano_ou_cura:
    formulas: ["1d4+1", "2d4", "6d4"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 4
    efeito: "muda o tipo dos dados de  auxílio para d6"
  - custo: 8
    efeito: "muda o tipo dos dados de  auxílio para d8"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Contato Extraplanar {#contato-extraplanar}

```yaml
id: contato-extraplanar
nome: "Contato Extraplanar"
pagina_pdf: 192
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 192
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_magic_featherfall.jpg"
  alt: "queda/leveza"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Adivinhação"
  tradicoes: ["Arcana"]
  palavras_chave: ["adivinhação"]
execucao:
  acao: "completa"
  alcance: "pessoal"
  alvo: "você"
  duracao: "1 dia"
  resistencia: "—"
mecanica:
  descricao_resumida: "Sua mente viaja até outro plano de existência, onde entra em contato com seres como gênios e demônios."
  efeito_detalhado: |
    Sua mente viaja até outro plano de existência, onde entra em contato com seres como gênios e demônios. Você firma um contrato com uma dessas entidades para que o auxilie, em troca de se alimentar de seu mana. Quando a magia é lançada, você recebe 6d6 dados de auxílio. Enquanto a magia durar, sempre que for realizar um teste de perícia, você pode gastar 1d6 (mais 1d6 para cada círculo de magias acima do 3º que puder lançar) e adicionar o resultado como bônus no teste. No entanto, sempre que rolar um “6” num desses dados, a entidade “suga” 1 PM de você. A magia termina se você gastar todos os dados, ficar sem PM ou no fim do dia (o que acontecer primeiro). +2 PM: aumenta o número de dados de auxílio em +1. +8 PM: Muda os dados de auxílio para d12. Sempre que rolar um resultado 12 num desses dados, a entidade “suga” 2 PM de você. Requer 4º círculo.
  dano_ou_cura:
    formulas: ["1d6", "6d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 8
    efeito: "Muda os dados de auxílio para  d12. Sempre que rolar um resultado 12  num desses dados, a entidade “suga” 2  PM de você. Requer 4º círculo"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Controlar Água {#controlar-agua}

```yaml
id: controlar-agua
nome: "Controlar Água"
pagina_pdf: 192
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 192
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_polymorph.jpg"
  alt: "transmutação"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Transmutação"
  tradicoes: ["Divina"]
  palavras_chave: ["transmutação"]
execucao:
  acao: "padrão"
  alcance: "longo"
  alvo: "uma embarcação"
  area: "esfera com 30m de raio"
  duracao: "cena"
  resistencia: "veja texto"
mecanica:
  descricao_resumida: "Você controla os movimentos e com portamentos da água."
  efeito_detalhado: |
    Você controla os movimentos e com portamentos da água. Ao lançar a magia, escolha um dos efeitos abaixo. Congelar: toda a água mundana na área é congelada. Criaturas nadando na área ficam imóveis; escapar exige gastar uma ação padrão e passar num tes te de Atletismo ou Acrobacia. Derreter: gelo mundano na área vira água e a magia termina. A critério do mestre, isso pode criar terreno difícil. Enchente: eleva o nível da água mundana na área em até 4,5m. A sua escolha, muda área para alvo: uma embarcação. O alvo recebe +3m em seu desloca mento pela duração do efeito. Evaporar: toda a água e gelo mundano na área evaporam instantaneamente e a magia termina. Elementais da água, plantas monstruosas e criaturas com imunidade a frio na área sofrem 10d8 pontos de dano de fogo; outras criatu ras vivas recebem metade desse dano (Fortitude reduz à metade). 186 Kellyanne Pontes kelly.ayame@gmail.com
    
    Magia Partir: diminui o nível de toda água mundana na área em até 4,5m. Em um corpo d’água raso, isso abre um cami nho seco, que pode ser atravessado a pé. Em um corpo d’água profundo, cria um redemoinho que pode prender bar cos (um teste de Pilotagem permite ao piloto livrar a embarcação). Elemen tais da água na área ficam lentos. +2 PM: aumenta o dano em +2d8.
  dano_ou_cura:
    formulas: ["10d8", "2d8"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm: []
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Controlar Terra {#controlar-terra}

```yaml
id: controlar-terra
nome: "Controlar Terra"
pagina_pdf: 194
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 194
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_polymorph.jpg"
  alt: "transmutação"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Transmutação"
  tradicoes: ["Divina"]
  palavras_chave: ["transmutação"]
execucao:
  acao: "padrão"
  alcance: "longo"
  area: "9 cubos com 1,5m de lado"
  duracao: "instantânea"
  resistencia: "veja texto"
mecanica:
  descricao_resumida: "Você manipula a densidade e a forma de  toda terra, pedra, lama, argila ou areia  na área."
  efeito_detalhado: |
    Você manipula a densidade e a forma de  toda terra, pedra, lama, argila ou areia  na área. Ao lançar
    a magia, escolha. Amolecer: se afetar o teto, uma coluna  ou suporte, provoca um desabamen to que
    causa 10d6 pontos de dano de  impacto às criaturas na área (Reflexos  reduz à metade). Se afetar um
    piso de  terra ou pedra, cria terreno difícil de  areia ou argila, respectivamente.  Modelar: pode
    usar pedra ou argila para  criar um ou mais objetos simples de tamanho Enorme ou menor (sem meca
    nismos ou partes móveis). Por exem plo, pode transformar um tijolo em  uma maça, criar uma passagem
    onde  antes havia apenas uma parede ou levantar uma ou mais paredes que ofe recem cobertura total
    (RD 8 e 50 PV  para cada 3m).  Solidificar: transforma lama ou areia em  terra ou pedra. Criaturas
    com os pés  na superfície ficam agarradas. Elas po dem se soltar com uma ação padrão e  um teste de
    Acrobacia ou Atletismo. +1 PM: aumenta o número de cubos  de 1,5m em +2.
  dano_ou_cura:
    formulas: ["10d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "muda o alcance para pessoal, o  alvo para você e a duração para um dia.  Você e seu equipamento fundem-se a  uma superfície ou objeto adjacente fei to de pedra, terra, argila ou areia que  possa acomodá-lo. Você pode voltar ao  espaço adjacente como uma ação livre,  dissipando a magia. Enquanto mescla do, você não pode falar ou fazer ações  físicas, mas consegue perceber seus ar redores normalmente. Pequenos danos  não o afetam, mas se o objeto (ou o  trecho onde você está imerso) for destruído, a magia é dissipada, você volta a um espaço livre adjacente e sofre  10d6 pontos de dano de impacto"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Convocação Instantânea {#convocacao-instantanea}

```yaml
id: convocacao-instantanea
nome: "Convocação Instantânea"
pagina_pdf: 194
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 194
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg"
  alt: "ícone padrão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Convocação"
  tradicoes: ["Arcana"]
  palavras_chave: []
execucao:
  acao: "padrão"
  alcance: "ilimitado"
  alvo: "1 objeto de até 2 espaços"
  duracao: "instantânea"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você invoca um objeto de qualquer lugar para sua mão."
  efeito_detalhado: |
    Você invoca um objeto de qualquer lugar para sua mão. O item deve ter sido previamente preparado com uma runa pessoal sua (ao custo de T$ 5).A magia não funciona se o objeto estiver com outra criatura, mas você saberá onde ele está e quem o está car regando (ou sua descrição física, caso não conheça a criatura). +1 PM: além do normal, até 1 hora após ter lançado a magia, você pode gastar uma ação de movimento para enviar o objeto de volta para o local em que ele estava antes. +1 PM: muda o alvo para um baú Médio, a duração para permanente e adiciona sacrifício de 1 PM. Em vez do nor mal, você esconde o baú no Éter Entre Mundos, com até 20 espaços de equipamento. A magia faz com que qualquer objeto caiba no baú, independentemente do seu tamanho. Uma vez escondido, você pode convocar o baú para um espaço livre adjacente, ou de volta para o Éter, com uma ação padrão. Componente material: baú construído com matéria-prima da melhor qualidade (T$ 1.000). Você deve ter em mãos uma miniatura do baú, no valor de T$ 100, para invo car o baú verdadeiro. +2 PM: aumenta o número de alvos em +1. +2 PM: muda o alvo para 1 objeto de até 10 espaços. Um objeto muito grande ou pesado para aparecer em suas mãos surge em um espaço adjacente a sua escolha.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "além do normal, até 1 hora  após ter lançado a magia, você pode  gastar uma ação de movimento para  enviar o objeto de volta para o local em  que ele estava antes"
  - custo: 1
    efeito: "muda o alvo para um baú Médio, a duração para permanente e adiciona sacrifício de 1 PM. Em vez do nor mal, você esconde o baú no Éter Entre  Mundos, com até 20 espaços de equipamento. A magia faz com que qualquer  objeto caiba no baú, independentemente do seu tamanho. Uma vez escondido,  você pode convocar o baú para um espaço livre adjacente, ou de volta para o  Éter, com uma ação padrão. Componente material: baú construído com matéria-prima da melhor qualidade (T$ 1.000).  Você deve ter em mãos uma miniatura  do baú, no valor de T$ 100, para invo car o baú verdadeiro"
  - custo: 2
    efeito: "muda o alvo para 1 objeto de  até 10 espaços. Um objeto muito grande ou pesado para aparecer em suas  mãos surge em um espaço adjacente a  sua escolha"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Despertar Consciência {#despertar-consciencia}

```yaml
id: despertar-consciencia
nome: "Despertar Consciência"
pagina_pdf: 196
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 196
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_charm.jpg"
  alt: "encantamento"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Encantamento"
  tradicoes: ["Divina"]
  palavras_chave: ["encantamento"]
execucao:
  acao: "completa"
  alcance: "toque"
  alvo: "1 animal ou planta"
  duracao: "1 dia"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você desperta a consciência de um animal ou planta."
  efeito_detalhado: |
    Você desperta a consciência de um animal ou planta. O alvo se torna um par ceiro veterano de um tipo
    a sua esco lha entre ajudante, combatente, fortão,  guardião, médico, perseguidor ou vigilante. Se
    usar esta magia em outro par ceiro que já possua, o nível de poder de  um de seus tipos aumenta em
    um passo (apenas uma vez por parceiro). Se já  for um parceiro mestre, recebe o bônus  de outro tipo
    de parceiro iniciante (entre as escolhas acima). O alvo se torna  uma criatura racional, com
    Inteligência  –1, e pode falar.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 4
    efeito: "muda o alvo para 1 escultura  mundana inanimada. Além do normal,  o alvo tem as mesmas características de  um construto"
  - custo: 4
    efeito: "muda a duração para permanente e adiciona penalidade de –3 PM"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Dificultar Detecção {#dificultar-deteccao}

```yaml
id: dificultar-deteccao
nome: "Dificultar Detecção"
pagina_pdf: 196
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 196
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg"
  alt: "abjuração/escudo"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Abjuração"
  tradicoes: ["Arcana"]
  palavras_chave: ["abjuração"]
execucao:
  acao: "padrão"
  alcance: "toque"
  alvo: "1 criatura ou objeto"
  duracao: "1 dia"
  resistencia: "—"
mecanica:
  descricao_resumida: "1 dia."
  efeito_detalhado: |
    1 dia. 190 Kellyanne Pontes kelly.ayame@gmail.com
    
    Magia Esta magia oculta a presença do alvo contra qualquer meio mágico de detec ção, inclusive detectar magia. Um con jurador que lance uma magia de adivinhação para detectar a presença ou localização do alvo deve fazer um teste de Vontade. Se falhar, a magia não funciona, mas os PM são gastos mesmo assim. Se for lançada sobre uma criatura, Dificultar Detecção protege tanto a criatura quanto seu equipamento. +4 PM: muda o alvo para área de cubo de 9m. Qualquer criatura ou objeto na área recebe o efeito da magia enquanto estiver dentro dela. +4 PM: muda a duração para 1 semana.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 4
    efeito: "muda o alvo para área de cubo  de 9m. Qualquer criatura ou objeto na  área recebe o efeito da magia enquanto  estiver dentro dela"
  - custo: 4
    efeito: "muda a duração para 1 semana"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Requer 2º círculo.Dispersar as Trevas {#requer-2o-circulodispersar-as-trevas}

```yaml
id: requer-2o-circulodispersar-as-trevas
nome: "Requer 2º círculo.Dispersar as Trevas"
pagina_pdf: 197
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 197
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningbolt.jpg"
  alt: "evocação/energia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Evocação"
  tradicoes: ["Divina"]
  palavras_chave: ["evocação"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  area: "esfera com 6m de raio"
  duracao: "veja texto"
  resistencia: "—"
mecanica:
  descricao_resumida: "Esta magia cria um forte brilho (multicolorido ou de uma cor que remeta a  sua divindade) que causa diversos efei tos."
  efeito_detalhado: |
    Esta magia cria um forte brilho (multicolorido ou de uma cor que remeta a  sua divindade) que causa
    diversos efei tos. Todas as magias de 3º círculo ou  menor ativas na área são dissipadas se  você
    passar num teste de Religião con tra a CD de cada magia. Seus aliados  na área recebem +4 em testes
    de resistência e redução de trevas 10 até o  fim da cena, protegidos por uma aura  sutil da mesma
    cor. Inimigos na área  ficam cegos por 1d4 rodadas (apenas  uma vez por cena). Dispersar as Trevas
    anula Anular a Luz (este efeito tem duração instantânea). +2 PM: aumenta o bônus nas resistên cias
    em +1.
  dano_ou_cura:
    formulas: ["1d4"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 4
    efeito: "muda o alcance para curto, a  área para alvo 1 criatura e a duração  para cena. O alvo fica imune a efeitos  de trevas"
  - custo: 4
    efeito: "muda o círculo máximo de  magias dissipadas para 4º. Requer 4º  círculo"
  - custo: 9
    efeito: "muda o círculo máximo de  magias dissipadas para 5º. Requer 5º  círculo. Dissipar Magia Universal 2 (Abjuração) Execução: padrão; Alcance: médio;  Alvo ou Área: 1 criatura ou 1 objeto mágico ou esfera com 3m de raio;  Duração: instantânea. Você dissipa outras magias que estejam ativas, como se sua duração tivesse acabado. Note que efeitos de magias  instantâneas não podem ser dissipados  (não se pode dissipar uma Bola de Fogo  ou Relâmpago depois que já causaram  dano...). Se lançar essa magia em uma  criatura ou área, faça um teste de Misticismo; você dissipa as magias com CD  igual ou menor que o resultado do teste. Se lançada contra um item mágico, o  transforma em um item mundano por  1d6 rodadas (Vontade anula)"
  - custo: 12
    efeito: "muda a área para esfera com  9m de raio. Em vez do normal, cria um  efeito de disjunção. Todas as magias na  área são automaticamente dissipadas e  todos os itens mágicos na área, exceto aqueles que você estiver carregando,  viram itens mundanos por uma cena  (com direito a um teste de Vontade para  evitar esse efeito)"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Enxame Rubro de Ichabod {#enxame-rubro-de-ichabod}

```yaml
id: enxame-rubro-de-ichabod
nome: "Enxame Rubro de Ichabod"
pagina_pdf: 198
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 198
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg"
  alt: "ícone padrão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Convocação"
  tradicoes: ["Arcana"]
  palavras_chave: []
execucao:
  acao: "padrão"
  alcance: "médio"
  efeito: "1 enxame Grande (quadrado  de 3m)"
  duracao: "sustentada"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você conjura um enxame de pequenas  criaturas da Tormenta."
  efeito_detalhado: |
    Você conjura um enxame de pequenas  criaturas da Tormenta. O enxame pode  passar pelo espaço de
    outras criaturas  e não impede que outras criaturas entrem no espaço dele. No final de cada  um de
    seus turnos, o enxame causa  4d12 pontos de dano de ácido a qualquer criatura em seu espaço (Refle
    xos reduz à metade). Você pode gastar  uma ação de movimento para mover o  enxame com deslocamento
    de 12m. +2 PM: aumenta o dano em +1d12.
  dano_ou_cura:
    formulas: ["1d12", "4d12"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "além do normal, uma criatura  que falhe no teste de Reflexos fica agar rada (o enxame escala e cobre o corpo  dela). A criatura pode gastar uma ação  padrão e fazer um teste de Acrobacia  ou Atletismo para escapar. Se você mo ver o enxame, a criatura fica livre"
  - custo: 2
    efeito: "muda o dano para trevas"
  - custo: 3
    efeito: "o enxame vira Enorme (quadrado de 6m de lado)"
  - custo: 3
    efeito: "o enxame ganha deslocamento  de voo 18m e passa a ocupar um cubo  ao invés de um quadrado"
  - custo: 4
    efeito: "o enxame inclui parasitas que  explodem e criam novos enxames. No  início de cada um de seus turnos, role  1d6. Em um resultado 5 ou 6, um novo  enxame surge adjacente a um já existente à sua escolha. Você pode mo ver todos os enxames com uma única  ação de movimento, mas eles não po dem ocupar o mesmo espaço. Requer  4º círculo"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Erupção Glacial {#erupcao-glacial}

```yaml
id: erupcao-glacial
nome: "Erupção Glacial"
pagina_pdf: 198
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 198
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningbolt.jpg"
  alt: "evocação/energia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Evocação"
  tradicoes: ["Arcana"]
  palavras_chave: ["evocação"]
execucao:
  acao: "padrão"
  alcance: "médio"
  area: "quadrado de 6m de lado"
  duracao: "instantânea"
  resistencia: "Refle xos parcial"
mecanica:
  descricao_resumida: "xos parcial."
  efeito_detalhado: |
    xos parcial. Estacas de gelo irrompem do chão. Criaturas na área sofrem 4d6 de dano de corte, 4d6 de dano de frio e ficam caídas. Passar no teste de Reflexos evita o dano de corte e a queda. As esta cas duram pela cena, o que torna a área afetada terreno difícil, e concedem co bertura leve para criaturas dentro da área ou atrás dela. As estacas são destruídas caso sofram qualquer quantidade de dano por fogo mágico. +3 PM: aumenta o dano de frio em +2d6 e o dano de corte em +2d6. +4 PM: muda a área para cilindro com 6m de raio e 6m de altura e a duração para sustentada. Em vez do normal, a magia cria uma tempestade de granizo que causa 3d6 pontos de dano de impacto e 3d6 pontos de dano de frio em todas as criaturas na área (sem tes te de resistência). A tempestade forne ce camuflagem leve às criaturas dentro dela e deixa o piso escorregadio. Piso escorregadio conta como terreno difícil e obriga criaturas na área a fazer testes de Acrobacia para equilíbrio (veja o Capítulo 2). Requer 4º círculo.
  dano_ou_cura:
    formulas: ["2d6", "4d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 4
    efeito: "muda a área para cilindro com  6m de raio e 6m de altura e a duração  para sustentada. Em vez do normal, a  magia cria uma tempestade de granizo que causa 3d6 pontos de dano de  impacto e 3d6 pontos de dano de frio  em todas as criaturas na área (sem tes te de resistência). A tempestade forne ce camuflagem leve às criaturas dentro  dela e deixa o piso escorregadio. Piso  escorregadio conta como terreno difícil  e obriga criaturas na área a fazer testes de Acrobacia para equilíbrio (veja o  Capítulo 2). Requer 4º círculo"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Ferver Sangue {#ferver-sangue}

```yaml
id: ferver-sangue
nome: "Ferver Sangue"
pagina_pdf: 199
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 199
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowbolt.jpg"
  alt: "sombra/necromancia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Necromancia"
  tradicoes: ["Arcana"]
  palavras_chave: ["necromancia"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 criatura"
  duracao: "sustenta da"
  resistencia: "Fortitude parcial"
mecanica:
  descricao_resumida: "da; Resistência: Fortitude parcial."
  efeito_detalhado: |
    da; Resistência: Fortitude parcial. O sangue do alvo aquece até entrar em ebulição. Quando a magia é lançada, e no início de cada um de seus turnos, o alvo sofre 4d8 pontos de dano de fogo e fica enjoado por uma rodada (Fortitude reduz o dano à metade e evita a condição). Se o alvo passar em dois testes de Fortitude seguidos, dissipa a magia. Se o alvo for reduzido a 0 PV pelo dano desta magia, seu corpo explode, matando-o e causando 6d6 pontos de dano de fogo em todas as criaturas a até 3m (Reflexos reduz à metade). Essa magia não afeta criaturas sem sangue, como construtos ou mortos-vivos. +2 PM: aumenta o dano em +1d8. +9 PM: muda alvo para criaturas esco
  dano_ou_cura:
    formulas: ["1d8", "4d8", "6d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 9
    efeito: "muda alvo para criaturas esco lhidas"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Globo de Invulnerabilidade {#globo-de-invulnerabilidade}

```yaml
id: globo-de-invulnerabilidade
nome: "Globo de Invulnerabilidade"
pagina_pdf: 200
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 200
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg"
  alt: "abjuração/escudo"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Abjuração"
  tradicoes: ["Arcana"]
  palavras_chave: ["abjuração"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  alvo: "você"
  duracao: "sustentada"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você é envolto por uma esfera mágica brilhante com 3m de raio, que detém qualquer magia de 2º círculo ou menor."
  efeito_detalhado: |
    Você é envolto por uma esfera mágica brilhante com 3m de raio, que detém qualquer magia de 2º círculo ou menor. Nenhuma magia pode ser lançada contra um alvo dentro do globo e magias de área não têm efeito dentro dele. No entanto, magias ainda po dem ser lançadas de dentro para fora. Uma magia que dissipe outras magias só dissipa o globo se for usada diretamente sobre você, não o afetando se usada em área. Efeitos mágicos não são dissipados quando entram na esfera, apenas suprimidos (voltam a funcionar fora do globo, caso sua duração não tenha acabado). O globo é imóvel e não tem efeito sobre criaturas ou objetos. Após lançá-lo, você pode entrar ou sair livremente. +4 PM: muda o efeito para afetar magias de até 3º círculo. Requer 4º círculo. +9 PM: muda o efeito para afetar magias de até 4º círculo. Requer 5º círculo.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 4
    efeito: "muda o efeito para afetar magias de até 3º círculo. Requer 4º círculo"
  - custo: 9
    efeito: "muda o efeito para afetar magias de até 4º círculo. Requer 5º círculo"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Heroísmo {#heroismo}

```yaml
id: heroismo
nome: "Heroísmo"
pagina_pdf: 200
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 200
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_charm.jpg"
  alt: "encantamento"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Encantamento"
  tradicoes: ["Divina"]
  palavras_chave: ["encantamento"]
execucao:
  acao: "padrão"
  alcance: "toque"
  alvo: "1 criatura"
  duracao: "cena"
  resistencia: "Vontade anula"
mecanica:
  descricao_resumida: "Esta magia imbui uma criatura com coragem e valentia."
  efeito_detalhado: |
    Esta magia imbui uma criatura com coragem e valentia. O alvo fica imune a medo e recebe 40 PV temporários e +4 em testes de ataque e rolagens de dano contra o inimigo de maior ND na cena. +2 PM: muda o bônus para +6. Hipnotismo arcana 1 (Encantamento) Execução: padrão; Alcance: curto; Alvos: 1 animal ou humanoide; Duração: 1d4 rodadas; Resistência: Vontade anula. Suas palavras e movimentos ritmados deixam o alvo fascinado. Esta magia só afeta criaturas que possam perceber você. Se usar esta magia em combate, o alvo recebe +5 em seu teste de resis tência. Se a criatura passar, fica imune a este efeito por um dia. Truque: muda a duração para 1 ro dada. Em vez de fascinado, o alvo fica pasmo (apenas uma vez por cena). +1 PM: como o normal, mas alvos que passem na resistência não sabem que foram vítimas de uma magia. +2 PM: muda o alvo para animais ou humanoides escolhidos. +2 PM: muda a duração para susten tada. +2 PM: também afeta espíritos e monstros na área. Requer 2º círculo. +5 PM: também afeta construtos, espíritos, monstros e mortos-vivos na área. Requer 3º círculo. 194 Kellyanne Pontes kelly.ayame@gmail.com
    
    Magia
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "como o normal, mas alvos que  passem na resistência não sabem que  foram vítimas de uma magia"
  - custo: 2
    efeito: "muda o alvo para animais ou  humanoides escolhidos"
  - custo: 2
    efeito: "muda a duração para susten tada"
  - custo: 2
    efeito: "também afeta espíritos e  monstros na área. Requer 2º círculo"
  - custo: 5
    efeito: "também afeta construtos, espíritos, monstros e mortos-vivos na  área. Requer 3º círculo. 194  Kellyanne Pontes kelly.ayame@gmail.com  Magia"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Ilusão Lacerante {#ilusao-lacerante}

```yaml
id: ilusao-lacerante
nome: "Ilusão Lacerante"
pagina_pdf: 201
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 201
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_invisibility.jpg"
  alt: "ilusão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Ilusão"
  tradicoes: ["Arcana"]
  palavras_chave: ["ilusão"]
execucao:
  acao: "padrão"
  alcance: "médio"
  area: "cubo de 9m"
  duracao: "sustenta da"
  resistencia: "Vontade anula"
mecanica:
  descricao_resumida: "da; Resistência: Vontade anula."
  efeito_detalhado: |
    da; Resistência: Vontade anula. Você cria uma ilusão de algum perigo mortal. Quando a magia é lançada, criaturas na área devem fazer um teste de Vontade; uma falha signifi ca que a criatura acredita que a ilusão é real e sofre 3d6 pontos de dano psíquico não letal. Sempre que uma criatura iniciar seu turno dentro da área, deve repetir o teste de Vontade. Se falhar, sofre o dano novamente. Somen te criaturas que falham veem a ilusão, e racionalizam o efeito sempre que falham no teste (por exemplo, acredita que o mesmo teto pode cair sobre ela várias vezes). +3 PM: aumenta o dano em +2d6. +4 PM: muda a área para um cubo de 90m. Requer 4º círculo.
  dano_ou_cura:
    formulas: ["2d6", "3d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 4
    efeito: "muda a área para um cubo de  90m. Requer 4º círculo"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Lança Ígnea de Aleph {#lanca-ignea-de-aleph}

```yaml
id: lanca-ignea-de-aleph
nome: "Lança Ígnea de Aleph"
pagina_pdf: 202
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 202
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningbolt.jpg"
  alt: "evocação/energia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Evocação"
  tradicoes: ["Arcana"]
  palavras_chave: ["evocação"]
execucao:
  acao: "padrão"
  alcance: "médio"
  alvo: "1 criatura"
  duracao: "instantâ nea"
  resistencia: "Reflexos parcial"
mecanica:
  descricao_resumida: "nea; Resistência: Reflexos parcial."
  efeito_detalhado: |
    nea; Resistência: Reflexos parcial. Esta magia foi desenvolvida pelo mago imortal Aleph Olhos Vermelhos, um entusiasta dos estudos vulcânicos. Ela dispara um projétil de magma contra o alvo, que sofre 4d6 pontos de dano de fogo e 4d6 pontos de dano de perfuração e fica em chamas. As chamas causam 2d6 pontos de dano por rodada, em vez do dano normal. Se passar no teste de resistência, o alvo sofre meta de do dano e não fica em chamas. Respingos de rocha incandescente se espalham com a explosão, atingindo todas as criaturas adjacentes ao alvo, que devem fazer um teste de Reflexos. Se falharem, ficam em chamas, como descrito acima. +3 PM: aumenta o dano inicial em +2d6 e o dano do efeito em chamas em +1d6. +4 PM: muda a duração para cena ou até ser descarregada. Em vez do efeito normal, a magia cria quatro dardos de lava que flutuam ao lado do conjurador. Uma vez por rodada, como uma ação livre, você pode disparar um dos dar dos em uma criatura, causando o efeito normal da magia. Requer 4º círculo.
  dano_ou_cura:
    formulas: ["1d6", "2d6", "4d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 4
    efeito: "muda a duração para cena ou  até ser descarregada. Em vez do efeito  normal, a magia cria quatro dardos de  lava que flutuam ao lado do conjurador.  Uma vez por rodada, como uma ação  livre, você pode disparar um dos dar dos em uma criatura, causando o efeito normal da magia. Requer 4º círculo"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Miragem {#miragem}

```yaml
id: miragem
nome: "Miragem"
pagina_pdf: 205
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 205
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_invisibility.jpg"
  alt: "ilusão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Ilusão"
  tradicoes: ["Arcana"]
  palavras_chave: ["ilusão"]
execucao:
  acao: "padrão"
  alcance: "longo"
  area: "cubo de até 90m de lado"
  duracao: "1 dia"
  resistencia: "Vontade  desacredita"
mecanica:
  descricao_resumida: "Você faz um terreno parecer outro, incluindo sons e cheiros."
  efeito_detalhado: |
    Você faz um terreno parecer outro, incluindo sons e cheiros. Uma planície  pode parecer um pântano,
    uma floresta  pode parecer uma montanha etc. Esta  magia pode ser usada para criar armadilhas: areia
    movediça pode parecer  terra firme ou um precipício pode parecer um lago. Você pode alterar, incluir
    e esconder estruturas dentro da área,  mas não criaturas (embora elas possam  se esconder nas
    estruturas ilusórias).
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 4
    efeito: "além do normal, pode alterar  a aparência de criaturas escolhidas na  área, como se usando Disfarce Ilusório"
  - custo: 9
    efeito: "muda a duração para permanente e adiciona componente material  (pó de diamante no valor de T$ 1.000).  Requer 4º círculo"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Missão Divina {#missao-divina}

```yaml
id: missao-divina
nome: "Missão Divina"
pagina_pdf: 205
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 205
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_charm.jpg"
  alt: "encantamento"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Encantamento"
  tradicoes: ["Divina"]
  palavras_chave: ["encantamento"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 criatura"
  duracao: "1 semana  ou até ser descarregada"
  resistencia: "Vontade anula (veja texto)  Esta magia obriga o alvo a cumprir uma  tarefa a sua escolha"
mecanica:
  descricao_resumida: "ou até ser descarregada; Resistência: Vontade anula (veja texto) Esta magia obriga o alvo a cumprir uma tarefa a sua escolha."
  efeito_detalhado: |
    ou até ser descarregada; Resistência: Vontade anula (veja texto) Esta magia obriga o alvo a cumprir uma tarefa a sua escolha. Ela dura uma semana ou até o alvo cumprir a tarefa, o que vier primeiro. O alvo pode recusar a missão — mas, no fim de cada dia em que não se esforçar para cumprir a tarefa, deve fazer um teste de Vontade; se falhar, sofre uma penalidade cumulativa de –2 em todos os testes e rolagens. A Missão Divina não pode forçar um ato suicida, nem uma missão impossível (como matar um ser que não existe). +2 PM: muda o alcance para toque, a duração para permanente e adiciona penalidade de –1 PM. Em vez do nor mal, você inscreve uma marca (como uma tatuagem) na pele do alvo e esco lhe um tipo de ação que ativará a mar ca. Normalmente, será cometer um crime (roubar, matar...) ou outra coisa contrária às Obrigações & Restrições de sua divindade. Sempre que a marca é ativada, o alvo recebe uma penalidade cumulativa de –2 em todos os testes. Muitas vezes, portar essa marca é um estigma por si só, já que esta magia normalmente é lançada em criminosos ou traidores. Uma magia que dissipe outras suprime a marca e suas penalidades por um dia; elas só podem ser totalmente removidas pelo conjurador original ou pela magia Purificação. +4 PM: muda a duração para 1 ano ou até ser descarregada.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "muda o alcance para toque, a  duração para permanente e adiciona  penalidade de –1 PM. Em vez do nor mal, você inscreve uma marca (como  uma tatuagem) na pele do alvo e esco lhe um tipo de ação que ativará a mar ca. Normalmente, será cometer um  crime (roubar, matar...) ou outra coisa  contrária às Obrigações & Restrições  de sua divindade. Sempre que a marca  é ativada, o alvo recebe uma penalidade cumulativa de –2 em todos os testes. Muitas vezes, portar essa marca é  um estigma por si só, já que esta magia  normalmente é lançada em criminosos  ou traidores. Uma magia que dissipe  outras suprime a marca e suas penalidades por um dia; elas só podem ser totalmente removidas pelo conjurador  original ou pela magia Purificação"
  - custo: 4
    efeito: "muda a duração para 1 ano ou  até ser descarregada"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Muralha Elemental {#muralha-elemental}

```yaml
id: muralha-elemental
nome: "Muralha Elemental"
pagina_pdf: 206
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 206
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningbolt.jpg"
  alt: "evocação/energia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Evocação"
  tradicoes: ["Arcana"]
  palavras_chave: ["evocação"]
execucao:
  acao: "padrão"
  alcance: "médio"
  efeito: "muralha de energia"
  duracao: "cena"
  resistencia: "veja texto"
mecanica:
  descricao_resumida: "Resistência: veja texto."
  efeito_detalhado: |
    Resistência: veja texto. Uma muralha de um elemento a sua escolha se eleva da terra. Ela pode ser um muro de até 30m de comprimento e 3m de altura (ou o contrário) ou uma cúpula de 3m de raio. Os efeitos variam conforme o elemento escolhido. Fogo. Faz surgir uma violenta cortina de chamas. Um lado da muralha (a sua escolha) emite ondas de calor, que causam 2d6 pontos de dano de fogo em criaturas a até 6m quando você lança a magia e no início de seus turnos. Atravessar a muralha causa 8d6 pontos de dano de fogo. Caso seja criada em uma área onde existem criaturas, elas sofrem dano como se estivessem atravessando a muralha, mas podem fazer um teste de Reflexos para reduzir o dano à metade e escapar para um lado (a criatura es colhe, mas se escapar para o lado quente sofrerá mais 2d6 pontos de dano). Gelo. Evoca uma parede grossa de gelo denso com 15cm de espessura. Na for ma de cúpula, pode prender uma ou mais criaturas, mas elas têm direito a um teste de Reflexos para escapar antes que a cúpula se forme. Cada trecho de 3m da muralha tem Defesa 8, 40 PV e RD 5. Um trecho da muralha que atinja 0 PV será rompido. Qualquer efeito de fogo causa dano dobrado à muralha. Uma criatura que atravesse um trecho rompido da muralha sofre 4d6 pontos de dano de frio. +2 PM: aumenta o dano por atravessar a muralha em +2d6. +2 PM: aumenta o comprimento em +15m e altura em +3m, até 60m de comprimento e 9m de altura. +4 PM: muda a duração para susten tada e adiciona uma nova escolha, Essência. A muralha é invisível e indes trutível — imune a qualquer forma de dano e não afetada por nenhuma magia. Ela não pode ser atravessada nem mesmo por criaturas incorpóreas. No entanto, magias que teletransportam criaturas, como Salto Dimensional, po dem atravessá-la. Magias e efeitos de dano, como Bola de Fogo e o sopro de um dragão, não vencem a muralha, mas magias lançadas diretamente so bre uma criatura ou área, como Sono, podem ser lançadas contra alvos que estejam no outro lado como se tivessem linha de efeito. Requer 4º círculo.
  dano_ou_cura:
    formulas: ["2d4", "2d6", "4d6", "8d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 4
    efeito: "muda a duração para susten tada e adiciona uma nova escolha, Essência. A muralha é invisível e indes trutível — imune a qualquer forma de  dano e não afetada por nenhuma magia. Ela não pode ser atravessada nem  mesmo por criaturas incorpóreas. No  entanto, magias que teletransportam  criaturas, como Salto Dimensional, po dem atravessá-la. Magias e efeitos de  dano, como Bola de Fogo e o sopro de  um dragão, não vencem a muralha,  mas magias lançadas diretamente so bre uma criatura ou área, como Sono,  podem ser lançadas contra alvos que  estejam no outro lado como se tivessem linha de efeito. Requer 4º círculo. Névoa Universal 1 (Convocação) Execução: padrão; Alcance: curto;  Efeito: nuvem com 6m de raio e 6m  de altura; Duração: cena.  Uma névoa espessa eleva-se de um ponto a sua escolha, obscurecendo toda a  visão — criaturas a até 1,5m têm camuflagem leve e criaturas a partir de 3m  têm camuflagem total. Um vento for te dispersa a névoa em 4 rodadas e um  vendaval a dispersa em 1 rodada. Esta  magia não funciona sob a água"
  - custo: 1
    efeito: "a magia também funciona sob  a água, criando uma nuvem de tinta"
  - custo: 2
    efeito: "você pode escolher criaturas  no alcance ao lançar a magia; elas enxergam através do efeito. Requer 2º  círculo"
  - custo: 2
    efeito: "a nuvem tem um cheiro horrível. No início de seus turnos, qualquer  criatura dentro dela, ou qualquer criatura com faro em alcance curto da nuvem, deve fazer um teste de Fortitude.  Se falhar, fica enjoada por uma rodada"
  - custo: 2
    efeito: "a nuvem tem um tom esver deado e se torna cáustica. No início de  seus turnos, criaturas dentro dela so frem 2d4 pontos de dano de ácido"
  - custo: 5
    efeito: "além do normal, a nuvem fica  espessa, quase sólida. Qualquer criatura dentro dela tem seu deslocamento  reduzido para 3m (independentemente  de seu deslocamento normal) e sofre –2  em testes de ataque e rolagens de dano"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Poeira da Podridão {#poeira-da-podridao}

```yaml
id: poeira-da-podridao
nome: "Poeira da Podridão"
pagina_pdf: 207
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 207
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowbolt.jpg"
  alt: "sombra/necromancia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Necromancia"
  tradicoes: ["Divina"]
  palavras_chave: ["necromancia"]
execucao:
  acao: "padrão"
  alcance: "médio"
  area: "nuvem com 6m de raio"
  duracao: "cena"
  resistencia: "Fortitude (veja  texto)"
mecanica:
  descricao_resumida: "sistência: Vontade anula."
  efeito_detalhado: |
    sistência: Vontade anula. Você projeta sua consciência no corpo do alvo. Enquanto possuir uma criatu ra, você assume o controle total do cor po dela. O seu próprio corpo fica inconsciente e a consciência do alvo fica inerte. Em termos de jogo, você con tinua usando a sua ficha, mas com os atributos físicos e deslocamento da criatura. Se o alvo passar no teste de resistência, sabe que você tentou possuí-lo e fica imune a esta magia por um dia. Caso o corpo da criatura morra enquanto você a possui, a criatura morre e você deve fazer um teste de Vontade contra a CD da sua própria magia. Se passar, sua consciência retorna para o seu corpo (contanto que esteja dentro do alcance). Do contrário, você também morre. Retornar para o seu cor po voluntariamente é uma ação livre. +5 PM: você ganha acesso às habilidades de raça e classe da criatura. +5 PM: enquanto a magia durar e você estiver dentro do alcance do seu corpo original, pode “saltar” de uma criatura possuída para outra. O novo alvo tem direito a um teste de Vontade. Se falhar, você assume o controle do corpo dele e o alvo anterior recobra a consciência. +5 PM: muda a duração para permanente, mas destrói seu corpo original no processo. Uma criatura possuída pode fazer um teste de Vontade no co meço do dia para retomar seu corpo. Se passar, recobra a consciência (e a sua própria consciência fica inerte). O teste se repete no início de cada dia. Se o corpo de uma criatura possuída mor rer e houver outra criatura em alcance curto, você pode tentar possuí-la. Enquanto houver novos corpos para possuir, você é imortal!
  dano_ou_cura:
    formulas: ["2d8+8"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm: []
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Potência Divina {#potencia-divina}

```yaml
id: potencia-divina
nome: "Potência Divina"
pagina_pdf: 207
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 207
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_polymorph.jpg"
  alt: "transmutação"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Transmutação"
  tradicoes: ["Divina"]
  palavras_chave: ["transmutação"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  alvo: "você"
  duracao: "sustentada"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você canaliza o poder de sua divindade."
  efeito_detalhado: |
    Você canaliza o poder de sua divindade. Você aumenta uma categoria de tamanho (seu equipamento muda de acordo) e recebe Força +4 e RD 10. Você não pode lançar magias enquanto estiver sob efeito de Potência Divina. +2 PM: aumenta o bônus de Força em +1. +5 PM: aumenta a RD em +5.+2 PM: muda o alcance para toque e o alvo para 1 criatura. A magia falha se você e o alvo não forem devotos da mesma divindade.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "muda o alcance para toque e  o alvo para 1 criatura. A magia falha  se você e o alvo não forem devotos da  mesma divindade"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Proteção contra Magia {#protecao-contra-magia}

```yaml
id: protecao-contra-magia
nome: "Proteção contra Magia"
pagina_pdf: 208
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 208
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_devotionaura.jpg"
  alt: "proteção/escudo"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Abjuração"
  tradicoes: ["Divina"]
  palavras_chave: ["abjuração", "proteção"]
execucao:
  acao: "padrão"
  alcance: "toque"
  alvo: "1 criatura"
  duracao: "cena"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você protege o alvo contra efeitos mágicos nocivos."
  efeito_detalhado: |
    Você protege o alvo contra efeitos mágicos nocivos. O alvo recebe +5 em  testes de resistência
    contra magias. +4 PM: muda o bônus para +10. Requer 4º círculo.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 4
    efeito: "em vez do normal, o alvo fica  imune a uma escola de magia a sua escolha. Requer 4º Círculo"
  - custo: 9
    efeito: "em vez do normal, o alvo fica  imune a duas escolas de magia a sua  escolha. Requer 5º Círculo"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Servo Divino {#servo-divino}

```yaml
id: servo-divino
nome: "Servo Divino"
pagina_pdf: 211
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 211
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg"
  alt: "ícone padrão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Convocação"
  tradicoes: ["Divina"]
  palavras_chave: []
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 cadáver"
  efeito: "criatura conjurada"
  duracao: "cena ou até ser descarregada"
  resistencia: "—"
mecanica:
  descricao_resumida: "cena ou até ser descarregada."
  efeito_detalhado: |
    cena ou até ser descarregada. 205 Kellyanne Pontes kelly.ayame@gmail.com
    
    Capítulo Quatro Você pede a sua divindade que envie um espírito para ajudá-lo. Esse espírito realiza uma tarefa a sua escolha que possa ser cumprida em até uma hora — desde algo simples como “use suas asas para nos levar até o topo da montanha” até algo complexo como “escolte esses camponeses até o castelo”. A magia é descarregada quando a criatura cumpre a tarefa, retornando a seu plano natal. O tipo de criatura é esco lhido pelo mestre, de acordo com as necessidades da tarefa. Componente material: um pagamento de T$ 100 ao espírito. A forma de pagamento varia — doações a um templo, um item mágico ou mesmo dinheiro. +4 PM: muda a duração para um dia ou até ser descarregada. O espírito realiza uma tarefa a sua escolha que exija até um dia. O custo do pagamento aumenta para T$ 500. O resto segue normal. +9 PM: muda a duração para 1 semana ou até ser descarregada. O espírito realiza uma tarefa que exija até uma semana. O custo do pagamento aumenta para T$ 1.000. O resto segue normal.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 3
    efeito: "muda o componente material  para pó de ônix negro (T$ 500). Em  vez de um zumbi ou esqueleto, cria um  carniçal. Ele pode funcionar como um  parceiro veterano, escolhido entre ajudante, atirador, combatente, fortão ou  guardião. O resto segue normal"
  - custo: 3
    efeito: "muda o componente material  para pó de ônix negro (T$ 500). Em  vez de um zumbi ou esqueleto, cria uma sombra. Ela pode funcionar como  um parceiro veterano, escolhido entre  assassino, combatente ou perseguidor.  O restante da magia segue normal"
  - custo: 7
    efeito: "muda o componente material  para ferramentas de embalsamar (T$  1.000). Em vez de um zumbi ou esque leto, cria uma múmia. Ela pode funcio nar como um parceiro mestre, escolhi do entre ajudante, destruidor, guardião  ou médico. O restante da magia segue  normal. Requer 4º círculo"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Sopro da Salvação {#sopro-da-salvacao}

```yaml
id: sopro-da-salvacao
nome: "Sopro da Salvação"
pagina_pdf: 213
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 213
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningbolt.jpg"
  alt: "evocação/energia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Evocação"
  tradicoes: ["Divina"]
  palavras_chave: ["evocação"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  area: "cone de 9m"
  duracao: "instan tânea"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você enche seus pulmões de luz e energia positiva e sopra um cone de poeira reluzente."
  efeito_detalhado: |
    Você enche seus pulmões de luz e energia positiva e sopra um cone de poeira reluzente. O sopro afeta apenas seus aliados na área, curando 2d8+4 pontos de vida e removendo uma das seguintes condições de todos os alvos: abalado, atordoado, apavorado, alquebrado, cego, confuso, debilitado, enfei tiçado, enjoado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, paralisado, pasmo e surdo. +2 PM: aumenta a cura em +1d8+2. +4 PM: além do normal, se um aliado estiver com PV negativos, seus PV são levados a 0 e então a cura é aplicada. +4 PM: remove todas as condições listadas, em vez de apenas uma.
  dano_ou_cura:
    formulas: ["1d8+2", "2d8+4"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 4
    efeito: "além do normal, se um aliado  estiver com PV negativos, seus PV são  levados a 0 e então a cura é aplicada"
  - custo: 4
    efeito: "remove todas as condições listadas, em vez de apenas uma"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Telecinesia {#telecinesia}

```yaml
id: telecinesia
nome: "Telecinesia"
pagina_pdf: 214
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 214
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_polymorph.jpg"
  alt: "transmutação"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Transmutação"
  tradicoes: ["Arcana"]
  palavras_chave: ["transmutação"]
execucao:
  acao: "padrão"
  alcance: "médio"
  alvo: "veja texto"
  duracao: "sustentada  ou instantânea (veja texto)"
  resistencia: "—"
mecanica:
  descricao_resumida: "ou instantânea (veja texto)."
  efeito_detalhado: |
    ou instantânea (veja texto). Você move objetos ou criaturas se con centrando. Ao lançar a magia, escolha uma das opções a seguir. Força Contínua: você move uma criatura Média ou menor, ou objeto de até 10 espaços, a até 6m por rodada. Uma criatura pode anular o efeito sobre ela, ou sobre um objeto que possua, passando num teste de Vontade. O alvo pode ser movido em qualquer direção dentro do alcance. Ele cai no chão se sair do alcance ou a magia terminar. Duração: sustentada. Empurrão Violento: nesta versão a ener gia mágica é expelida de uma única vez e arremessa até 10 objetos (no máximo 10 espaços). Os objetos devem estar a até 3m uns dos outros e podem ser ar remessados até o alcance da magia. Objetos arremessados podem atingir criaturas em seu caminho, causando de 1 ponto de dano de impacto por espaço (objetos macios, sem pontas ou sem fio) até 1d6 pontos de dano por espaço (objetos duros, pontudos ou afiados). Criaturas atingidas têm direito a um teste de Reflexos para reduzir o dano à metade.Criaturas Médias ou menores podem ser arremessadas, mas têm direito a um teste de Vontade para evitar o efei to (em si mesmas ou em objetos que estejam segurando). Uma criatura ar remessada contra uma superfície só lida sofre 1d6 pontos de dano de impacto para cada 3m que “voou” no deslocamento (incluindo outras criaturas; nesse caso, ambas sofrem o dano). Duração: instantânea. +3 PM: aumenta o tamanho máximo da criatura em uma categoria (para Grande, Enorme e Colossal) ou dobra a quantidade de espaços do objeto.
  dano_ou_cura:
    formulas: ["1d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 3
    efeito: "aumenta o tamanho máximo  da criatura em uma categoria (para  Grande, Enorme e Colossal) ou dobra  a quantidade de espaços do objeto"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Teletransporte {#teletransporte}

```yaml
id: teletransporte
nome: "Teletransporte"
pagina_pdf: 214
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 214
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg"
  alt: "ícone padrão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Convocação"
  tradicoes: ["Arcana"]
  palavras_chave: []
execucao:
  acao: "padrão"
  alcance: "toque"
  alvo: "até 5 criaturas voluntárias"
  duracao: "instantânea"
  resistencia: "—"
mecanica:
  descricao_resumida: "Execução: padrão; Alcance: toque; Alvo: até 5 criaturas voluntárias; Duração: instantânea."
  efeito_detalhado: |
    Execução: padrão; Alcance: toque; Alvo: até 5 criaturas voluntárias; Duração: instantânea. Esta magia transporta os alvos para um lugar a sua escolha a até 1.000km. Você precisa fazer um teste de Misticismo, com dificuldade que depende de seu conhecimento sobre o local de destino. CD 20. Um lugar familiar, que você visita com frequência. CD 30. Um lugar conhecido, que você já visitou pelo menos uma vez. CD 40. Um lugar que você nunca visitou e só conhece a partir da descrição de outra pessoa que esteve lá. Você não pode se teletransportar para um lugar que nunca visitou sem a descrição de alguém. Ou seja, não pode se transportar para a “sala de tesouro do rei” se nunca esteve nela nem falou com alguém que esteve. Se passar no teste, os alvos chegam ao lugar desejado. Se falhar, os alvos sur gem 1d10 x 10km afastados em qualquer direção (se o destino é uma cidade costeira, você pode surgir em alto-mar). Se falhar por 5 ou mais, você chega em um lugar parecido, mas errado. E se você rolar 1 natural no teste a magia falha (mas você gasta os PM) e fica atordoado por 1d4 rodadas. +2 PM: aumenta o número de alvos em +5. +2 PM: em vez do normal, a magia teletransporta os alvos para seu santuá rio — um local familiar e previamente preparado. A magia pode ser usada sem limite de distância ou necessidade de testes, mas apenas dentro do mesmo plano. Preparar um local como seu santuário exige um ritual de um dia e o gasto de T$ 1.000. Você só pode ter um santuário por vez.+9 PM: muda a execução para ação completa, a duração para cena e adiciona sacrifício de 1 PM. Em vez do normal, você cria um círculo de 1,5m de diâmetro no chão, que transpor ta qualquer criatura que pisar nele. O destino é escolhido quando a magia é lançada e pode ser qualquer lugar, em qualquer mundo, sem a necessidade de testes, desde que seja conhecido por você. O círculo é tênue e praticamente invisível. Você pode marcá-lo de alguma forma (por exemplo, lançando-o sobre uma plataforma elevada). Se não fizer isso, alguém pode pisar nele por acidente. Junte isso a um destino hostil e você terá uma armadilha bastante eficaz! Requer 5º círculo.
  dano_ou_cura:
    formulas: ["1d10", "1d4"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "em vez do normal, a magia teletransporta os alvos para seu santuá rio — um local familiar e previamente preparado. A magia pode ser usada  sem limite de distância ou necessidade  de testes, mas apenas dentro do mesmo plano. Preparar um local como seu  santuário exige um ritual de um dia e  o gasto de T$ 1.000. Você só pode ter  um santuário por vez"
  - custo: 9
    efeito: "muda a execução para ação  completa, a duração para cena e adiciona sacrifício de 1 PM. Em vez do  normal, você cria um círculo de 1,5m  de diâmetro no chão, que transpor ta qualquer criatura que pisar nele. O  destino é escolhido quando a magia  é lançada e pode ser qualquer lugar,  em qualquer mundo, sem a necessidade de testes, desde que seja conhecido por você. O círculo é tênue e praticamente invisível. Você pode marcá-lo  de alguma forma (por exemplo, lançando-o sobre uma plataforma elevada). Se não fizer isso, alguém pode pisar nele por acidente. Junte isso a um  destino hostil e você terá uma armadilha bastante eficaz! Requer 5º círculo"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Tentáculos de Trevas {#tentaculos-de-trevas}

```yaml
id: tentaculos-de-trevas
nome: "Tentáculos de Trevas"
pagina_pdf: 215
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 215
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowbolt.jpg"
  alt: "sombra/necromancia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Necromancia"
  tradicoes: ["Arcana"]
  palavras_chave: ["necromancia"]
execucao:
  acao: "padrão"
  alcance: "médio"
  area: "esfera com 6m de raio"
  duracao: "cena"
  resistencia: "—"
mecanica:
  descricao_resumida: "Um círculo de energias sombrias se abre no chão, de onde surgem tentácu los feitos de treva viscosa."
  efeito_detalhado: |
    Um círculo de energias sombrias se abre no chão, de onde surgem tentácu los feitos de treva viscosa. Ao lançar a magia e no início de cada um de seus turnos, você faz um teste da manobra agarrar (usando seu valor de Misticis mo) contra cada criatura na área. Se você passar, a criatura é agarrada; se a vítima já está agarrada, é esmagada, sofrendo 4d6 pontos de dano de trevas. A área conta como terreno difícil. Os tentáculos são imunes a dano. +2 PM: aumenta o raio da área em +3m. +2 PM: aumenta o dano dos tentácu los em +2d6.
  dano_ou_cura:
    formulas: ["2d6", "4d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm: []
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Transformação de Guerra {#transformacao-de-guerra}

```yaml
id: transformacao-de-guerra
nome: "Transformação de Guerra"
pagina_pdf: 216
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 216
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_polymorph.jpg"
  alt: "transmutação"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Transmutação"
  tradicoes: ["Arcana"]
  palavras_chave: ["transmutação"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  alvo: "você"
  duracao: "sustentada"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você se torna uma máquina de comba te, ficando mais forte, rápido e resis tente."
  efeito_detalhado: |
    Você se torna uma máquina de comba te, ficando mais forte, rápido e resis tente. Você recebe +6 na Defesa, tes tes de ataque e rolagens de dano corpo a corpo, e 30 PV temporários. Durante a Transformação de Guerra você não pode lançar magias, mas se torna proficiente em todas as armas. +2 PM: aumenta os bônus na Defe sa, testes de ataque e rolagens de dano corpo a corpo em +1, e os PV tempo rários em +10. +2 PM: adiciona componente mate rial (barra de adamante no valor de T$ 100). Sua forma de combate ganha um aspecto metálico e sem expressões. Além do normal, você recebe redução de dano 10 e imunidade a atordoamen to e efeitos de cansaço, encantamento, metabolismo, trevas e veneno, e não
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "adiciona componente mate rial (barra de adamante no valor de  T$ 100). Sua forma de combate ganha  um aspecto metálico e sem expressões.  Além do normal, você recebe redução  de dano 10 e imunidade a atordoamen to e efeitos de cansaço, encantamento,  metabolismo, trevas e veneno, e não  precisa respirar"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Viagem Arbórea {#viagem-arborea}

```yaml
id: viagem-arborea
nome: "Viagem Arbórea"
pagina_pdf: 216
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 216
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg"
  alt: "ícone padrão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Convocação"
  tradicoes: ["Divina"]
  palavras_chave: []
execucao:
  acao: "completa"
  alcance: "pessoal"
  alvo: "você"
  duracao: "cena"
  resistencia: "Vontade anula"
mecanica:
  descricao_resumida: "Como parte da execução, você entra em uma árvore adjacente que seja maior do que você."
  efeito_detalhado: |
    Como parte da execução, você entra em uma árvore adjacente que seja maior do que você. Você pode permanecer dentro da árvore, percebendo os arredores de forma normal (mas sem poder fazer ações). Você pode gastar uma ação de movimento para sair dessa árvore, ou de qualquer outra dentro de 1km. Se estiver dentro de uma ár vore que seja destruída, a magia termi na e você sofre 10d6 pontos de dano de impacto. Enquanto a magia durar você pode gastar uma ação de movimento e 1 PM para entrar em outras árvores. 210 Kellyanne Pontes kelly.ayame@gmail.com
    
    Magia +2 PM: muda o alcance para toque, o alvo para até cinco criaturas e a duração para instantânea. Os alvos entram em uma planta (de tamanho Médio ou maior) e saem em outra planta do mesmo tamanho a até 100km de distância, especificada em direção e distância aproximadas (como “50km ao norte”).
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "muda o alcance para toque e o  alvo para 1 criatura"
  - custo: 4
    efeito: "além do normal, o alvo enxer ga através de paredes e barreiras com  30cm de espessura ou menos (as paredes e barreiras parecem translúcidas). Visão Mística Universal 1 (Adivinhação) Execução: padrão; Alcance: pessoal;  Alvo: você; Duração: cena.  Seus olhos brilham com uma luz azul e  passam a enxergar auras mágicas. Este  efeito é similar ao uso de Misticismo  para detectar magia, mas você detecta  todas as auras mágicas em alcance médio e recebe todas as informações so bre elas sem gastar ações. Além disso,  você pode gastar uma ação de movimento para descobrir se uma criatura  que possa perceber em alcance médio  é capaz de lançar magias e qual a aura  gerada pelas magias de círculo mais  alto que ela pode lançar"
  - custo: 1
    efeito: "recebe visão no escuro"
  - custo: 2
    efeito: "muda a duração para um dia"
  - custo: 2
    efeito: "também pode enxergar objetos e criaturas invisíveis. Eles aparecem como formas translúcidas"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```


## Voo {#voo}

```yaml
id: voo
nome: "Voo"
pagina_pdf: 217
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 217
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_polymorph.jpg"
  alt: "transmutação"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 3
  escola: "Transmutação"
  tradicoes: ["Arcana"]
  palavras_chave: ["transmutação"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  alvo: "você"
  duracao: "cena"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você recebe deslocamento de voo 12m."
  efeito_detalhado: |
    Você recebe deslocamento de voo 12m. Voar por meio desta magia é simples como andar — você pode atacar e lançar magias normalmente enquanto voa. Quando a magia termina, você desce lentamente até o chão, como se estivesse sob efeito de Queda Suave. +1 PM: muda o alcance para toque e o alvo para 1 criatura. +4 PM: muda a duração para um dia. Requer 4º círculo. +4 PM: muda o alcance para curto e o alvo para até 10 criaturas. Requer 4° círculo.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "muda o alcance para toque e o  alvo para 1 criatura"
  - custo: 4
    efeito: "muda a duração para um dia.  Requer 4º círculo"
  - custo: 4
    efeito: "muda o alcance para curto e  o alvo para até 10 criaturas. Requer 4°  círculo"
componentes_materiais:
  requer: false
  lista: []
  custo: "—"
limites_e_notas:
  concentracao: false
  manutencao: "—"
  observacoes: "—"
referencias_cruzadas:
  magias_relacionadas: []
  itens_relacionados: []
metadados:
  revisado_por: "—"
  revisado_em: "2025-08-09"
  confianca: "média"
```