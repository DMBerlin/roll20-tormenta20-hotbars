# Magias — 5º Círculo (Tormenta20 v1.3)

> Fonte: Capítulo 4 do PDF enviado. Cada magia segue um bloco YAML parseável.

## Índice

- [Alterar Destino](#alterar-destino)
- [Aprisionamento](#aprisionamento)
- [Aura Divina](#aura-divina)
- [Barragem elemental de Vectorius](#barragem-elemental-de-vectorius)
- [Chuva de Meteoros](#chuva-de-meteoros)
- [Controlar o Tempo](#controlar-o-tempo)
- [Deflagração de Mana](#deflagracao-de-mana)
- [Desejo](#desejo)
- [Engenho de Mana](#engenho-de-mana)
- [Fúria do Panteão](#furia-do-panteao)
- [Intervenção Divina](#intervencao-divina)
- [Lágrimas de Wynna](#lagrimas-de-wynna)
- [Legião](#legiao)
- [Mata-Dragão](#mata-dragao)
- [PM: aumenta o dano em +1d8+4. Possessão](#pm-aumenta-o-dano-em-1d84-possessao)
- [Reanimação Impura](#reanimacao-impura)
- [Réquiem](#requiem)
- [Segunda Chance](#segunda-chance)
- [Semiplano](#semiplano)
- [Sombra Assassina](#sombra-assassina)


## Alterar Destino {#alterar-destino}

```yaml
id: alterar-destino
nome: "Alterar Destino"
pagina_pdf: 185
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 185
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane02.jpg"
  alt: "adivinhação"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 5
  escola: "Adivinhação"
  tradicoes: ["Arcana"]
  palavras_chave: ["adivinhação"]
execucao:
  acao: "reação"
  alcance: "pessoal"
  alvo: "você"
  duracao: "instantânea"
  resistencia: "—"
mecanica:
  descricao_resumida: "Sua mente visualiza todas as possibilidades de um evento, permitindo a você escolher o melhor curso de ação."
  efeito_detalhado: |
    Sua mente visualiza todas as possibilidades de um evento, permitindo a você escolher o melhor curso de ação. Você pode rolar novamente um teste de resistência com um bônus de +10 ou um inimigo deve rolar no vamente um ataque contra você com uma penalidade de –10.
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


## Aprisionamento {#aprisionamento}

```yaml
id: aprisionamento
nome: "Aprisionamento"
pagina_pdf: 186
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 186
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/ability_ensnare.jpg"
  alt: "armadilha/teia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 5
  escola: "Abjuração"
  tradicoes: ["Arcana"]
  palavras_chave: ["abjuração"]
execucao:
  acao: "completa"
  alcance: "curto"
  alvo: "1 criatura"
  duracao: "permanente"
  resistencia: "Vontade anula"
mecanica:
  descricao_resumida: "Resistência: Vontade anula."
  efeito_detalhado: |
    Resistência: Vontade anula. Você cria uma prisão mágica para aprisionar uma criatura. Se falhar no teste de resistência, o alvo sofre o efeito da magia; se passar, fica imune a esta magia por uma semana. Enquanto estiver aprisionada, a criatura não precisa respirar e alimentar-se, e não envelhece. Magias de adivinhação não conseguem localizar ou perceber o alvo. Ao lançar a magia, você escolhe uma das seguintes formas de prisão. O componente material varia, mas todos custam T$ 1.000. Acorrentamento: o alvo é preso por cor rentes firmemente enraizadas no chão, que o mantém no lugar. O alvo fica paralisado e não pode se mover ou ser movido por qualquer meio. Componente Material: uma fina corrente de mitral. Contenção Mínima: o alvo diminui para 2 cm de altura e é preso dentro de uma pedra preciosa ou objeto semelhante. Luz passa através da pedra, permitin do que o alvo veja o lado de fora e seja visto, mas nada mais pode passar, nem por meio de teletransporte ou viagem planar. A pedra não pode ser quebrada enquanto o alvo estiver dentro. Componente Material: uma pedra preciosa, como um diamante ou rubi. Prisão Dimensional: o alvo é transportado para um semiplano protegido contra teletransporte e viagens planares. Pode ser um labirinto, uma gaiola, uma torre ou qualquer estrutura ou área confinada e pequena a sua escolha. Componente Material: uma representação em miniatura da prisão, feita de jade. Sepultamento: o alvo é sepultado nas profundezas da terra, em uma esfera mágica. Nada pode destruir ou atravessar a esfera, nem mesmo teletranspor -te ou viagens planares. Componente Material: um pequeno orbe de adamante. Sono Eterno: o alvo adormece e não pode ser acordado. Componente Material: fruta preparada com ervas soníferas raras. Quando a magia é lançada, você deve especificar uma condição que fará com que ela termine e solte o alvo. A condição pode ser tão específica ou elaborada quanto você quiser, mas deve ser possível de acontecer. As condições podem se basear no nome, identidade ou divindade padroeira de uma criatu ra, ou em ações ou qualidades observáveis, mas nunca em estatísticas intangíveis, como nível, classe ou pontos de vida. O mestre tem a palavra final so bre se uma condição é válida ou não.
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


## Aura Divina {#aura-divina}

```yaml
id: aura-divina
nome: "Aura Divina"
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
  circulo: 5
  escola: "Abjuração"
  tradicoes: ["Divina"]
  palavras_chave: ["abjuração"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  alvo: "1 criatura"
  area: "esfera com 9m de raio"
  duracao: "cena"
  resistencia: "Vontade parcial"
mecanica:
  descricao_resumida: "cena; Resistência: Vontade parcial."
  efeito_detalhado: |
    cena; Resistência: Vontade parcial. Você se torna um conduíte da energia de sua divindade, emanando uma aura brilhante. Você e aliados devotos da mesma divindade ficam imunes a encantamento e recebem +10 na Defesa e em testes de resistência. Aliados não devotos da mesma divindade recebem +5 na Defesa e em testes de resistência. Além disso, inimigos que entrem na área devem fazer um teste de Vontade; em caso de falha, recebem uma condição a sua escolha entre esmorecido, debilitado ou lento até o fim da cena. O teste deve ser refeito cada vez que a criatura entrar novamente na área. +2 PM: aumenta os bônus na Defesa e em testes de resistência em +1.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "aumenta o alcance em um fator de 10 (90m para 900m, 900m para  9km e assim por diante)"
  - custo: 1
    efeito: "se escolher mensagem, o alvo  pode enviar uma resposta de até 25 palavras para você até o fim de seu pró ximo turno"
  - custo: 2
    efeito: "se escolher localização, muda  a duração para cena. O alvo sabe onde  você está mesmo que você mude de  posição"
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


## Barragem elemental de Vectorius {#barragem-elemental-de-vectorius}

```yaml
id: barragem-elemental-de-vectorius
nome: "Barragem elemental de Vectorius"
pagina_pdf: 188
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 188
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningbolt.jpg"
  alt: "evocação/energia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 5
  escola: "Evocação"
  tradicoes: ["Arcana"]
  palavras_chave: ["evocação"]
execucao:
  acao: "padrão"
  alcance: "longo"
  efeito: "4 esferas elementais"
  duracao: "instantânea"
  resistencia: "Reflexos parcial"
mecanica:
  descricao_resumida: "xos parcial."
  efeito_detalhado: |
    xos parcial. Criada pelo arquimago Vectorius, esta magia produz quatro esferas, de ácido, eletricidade, fogo e frio, que voam até um ponto a sua escolha. Quando atingem o ponto escolhido, explodem causando 6d6 pontos de dano de seu respectivo tipo numa área com 12m de raio. Um teste de Reflexos reduz o dano à metade. Você pode mirar cada esfera em uma criatura ou ponto dife rente. Uma criatura ao alcance da explosão de mais de uma esfera deve fazer um teste de resistência para cada uma. Além disso, as esferas causam os seguintes efeitos em criaturas que falharem em seus testes de resistência: • Ácido: vulnerável até o fim da cena. • Elétrica: atordoado por 1 rodada (apenas uma vez por cena). • Fogo: em chamas. • Frio: lento até o fim da cena. +5 PM: aumenta o dano de cada esfe ra em +2d6. +5 PM: muda o tipo de dano de todas as esferas para essência (mas elas ainda causam os outros efeitos como se
  dano_ou_cura:
    formulas: ["2d6", "6d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 5
    efeito: "muda o tipo de dano de todas  as esferas para essência (mas elas ainda causam os outros efeitos como se  seu tipo de dano não mudasse)"
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


## Chuva de Meteoros {#chuva-de-meteoros}

```yaml
id: chuva-de-meteoros
nome: "Chuva de Meteoros"
pagina_pdf: 189
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 189
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg"
  alt: "ícone padrão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 5
  escola: "Convocação"
  tradicoes: ["Arcana"]
  palavras_chave: []
execucao:
  acao: "completa"
  alcance: "longo"
  area: "quadrado com 18m de lado"
  duracao: "instantânea"
  resistencia: "Reflexos parcial"
mecanica:
  descricao_resumida: "Meteoros caem dos céus, devastando  a área afetada."
  efeito_detalhado: |
    Meteoros caem dos céus, devastando  a área afetada. Criaturas na área so frem 15d6 pontos de dano de
    impacto, 15d6 pontos de dano de fogo e ficam caídas e presas sob os escombros  (agarradas). Uma
    criatura que passe  no teste de resistência sofre metade  do dano total e não fica caída e agarrada.
    Uma criatura agarrada pode escapar gastando uma ação padrão e passando em um teste de Atletismo.
    Toda  a área afetada fica coberta de escombros, sendo considerada terreno difícil, e imersa numa
    nuvem de poeira (camuflagem leve). Esta magia só  pode ser utilizada a céu aberto. +2 PM: aumenta o
    número de meteo ros que atingem a área, o que aumen ta o dano em +2d6 de impacto e +2d6  de fogo.
  dano_ou_cura:
    formulas: ["15d6", "2d6"]
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


## Controlar o Tempo {#controlar-o-tempo}

```yaml
id: controlar-o-tempo
nome: "Controlar o Tempo"
pagina_pdf: 193
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 193
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_polymorph.jpg"
  alt: "transmutação"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 5
  escola: "Transmutação"
  tradicoes: ["Arcana"]
  palavras_chave: ["transmutação"]
execucao:
  acao: "padrão"
  alcance: "veja texto"
  alvo: "veja texto"
  duracao: "veja texto"
  resistencia: "—"
mecanica:
  descricao_resumida: "Escolha um dos efeitos a seguir."
  efeito_detalhado: |
    Escolha um dos efeitos a seguir. Congelar o tempo: você gera uma bolha do seu tamanho na qual o tempo passa mais lentamente. Para outras criaturas, a bolha surge e desaparece instantaneamente, mas, para você, ela dura 3 rodadas (o que fornece 2 turnos extras após o atual), durante as quais você pode agir e não é afetado por efeitos contínuos (como chamas). Porém, durante essas 3 rodadas, você e quaisquer efeitos que você gerar não podem sair da área que você ocupava quando lançou esta magia. Efeitos de área com duração maior que a da bolha voltam a agir normalmente quando ela termina. Você não pode congelar o tempo nem preparar ações enquanto está sob esse efeito. Saltar no tempo: você e até 5 criaturas voluntárias são transportadas de 1 a 24 horas para o futuro, desaparecendo com um brilho. Vocês ressurgem no mesmo lugar, com a mesma velo cidade e orientação; do seu ponto de 187 Kellyanne Pontes kelly.ayame@gmail.com
    
    Capítulo Quatro vista, nenhum tempo se passou. Se um objeto sólido agora ocupa o espaço de uma criatura, ela ressurge na área vazia mais próxima. Voltar no tempo: você revive os últimos segundos. Todas as ações da ro dada anterior são desfeitas (incluindo perda de PV e PM — exceto os gastos nesta magia). Tudo retorna à posição em que estava no início do seu turno na última rodada e você é o único que sabe o que acontecerá. Outros per sonagens devem repetir as mesmas ações — exceto se você fizer algo a respeito (como avisar seus aliados so bre o que vai acontecer). Você só pode reviver uma mesma rodada uma vez.
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


## Deflagração de Mana {#deflagracao-de-mana}

```yaml
id: deflagracao-de-mana
nome: "Deflagração de Mana"
pagina_pdf: 195
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 195
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningbolt.jpg"
  alt: "evocação/energia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 5
  escola: "Evocação"
  tradicoes: ["Arcana"]
  palavras_chave: ["evocação"]
execucao:
  acao: "completa"
  alcance: "pessoal"
  area: "esfera com 15m de raio"
  duracao: "instantânea"
  resistencia: "Fortitude parcial"
mecanica:
  descricao_resumida: "Fortitude parcial."
  efeito_detalhado: |
    Fortitude parcial. Após concentrar seu mana, você emana energia, como uma estrela em plena terra. Todas as criaturas na área so frem 150 pontos de dano de essência e todos os itens mágicos (exceto artefa tos) tornam-se mundanos. Você não é afetado pela magia. Alvos que passem no teste de Fortitude sofrem metade do dano e seus itens mágicos voltam a funcionar após um dia. 189 Kellyanne Pontes kelly.ayame@gmail.com
    
    Capítulo Quatro +1 PM: aumenta o dano em +10. +5 PM: afeta apenas criaturas a sua escolha.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 5
    efeito: "afeta apenas criaturas a sua  escolha"
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


## Desejo {#desejo}

```yaml
id: desejo
nome: "Desejo"
pagina_pdf: 196
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 196
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_polymorph.jpg"
  alt: "transmutação"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 5
  escola: "Transmutação"
  tradicoes: ["Arcana"]
  palavras_chave: ["transmutação"]
execucao:
  acao: "completa"
  alcance: "veja  texto"
  alvo: "veja texto"
  duracao: "veja  texto"
  resistencia: "veja texto"
mecanica:
  descricao_resumida: "texto; Resistência: veja texto."
  efeito_detalhado: |
    texto; Resistência: veja texto. Esta é a mais poderosa das magias ar canas, permitindo alterar a realidade a seu bel-prazer. Você pode: • Dissipar os efeitos de qualquer magia de 4º círculo ou menor. • Transportar até 10 criaturas voluntárias em alcance longo para qualquer outro local, em qualquer plano. • Desfazer um acontecimento recente. A magia permite que um teste realizado por uma criatura em alcance longo na última rodada seja realizado novamente. Por exemplo, se um aliado morreu na última rodada devido ao ataque de um inimigo, você pode obrigar o inimigo a refazer esse ataque. Você pode desejar por algo ainda mais poderoso. Nesse caso, a magia requer o sacrifício de 2 PM e pode fazer coi sas como: • Criar um item mundano de até T$ 30.000. • Duplicar os efeitos de qualquer magia de até 4º círculo. Caso a magia precise de um componente material para ser lançada, ainda é necessário providenciar o componente. • Aumentar um atributo de uma criatura em +1. Cada atributo só pode ser aumentado uma vez com Desejo. Desejo pode gerar efeitos ainda mais poderosos, mas cuidado! Desejar a for tuna de um rei pode transportá-lo para a sala de tesouro real, onde você po derá ser preso ou morto; desejar ser imortal pode transformá-lo em mor to-vivo, e assim por diante. Qualquer efeito que não se encaixe na lista acima deve ser decidido pelo mestre.
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


## Engenho de Mana {#engenho-de-mana}

```yaml
id: engenho-de-mana
nome: "Engenho de Mana"
pagina_pdf: 198
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 198
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg"
  alt: "abjuração/escudo"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 5
  escola: "Abjuração"
  tradicoes: ["Arcana"]
  palavras_chave: ["abjuração"]
execucao:
  acao: "padrão"
  alcance: "médio"
  efeito: "disco de energia com 1,5m de  diâmetro"
  duracao: "sustentada"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você cria um disco de energia que lembra uma roda de engenho e flutua no ponto em que foi conjurado."
  efeito_detalhado: |
    Você cria um disco de energia que lembra uma roda de engenho e flutua no ponto em que foi conjurado. O disco é imune a dano, não pode ser movido e faz uma contramágica automática con tra qualquer magia lançada em alcance médio dele (exceto as suas), usando seu teste de Misticismo. Caso vença o teste, o engenho não só anula a magia como absorve os PM usados para lançá-la, acumulando PM temporários. No seu turno, se estiver ao alcance do disco, você pode gastar PM nele para lançar magias. +1 PM: em vez de flutuar no ponto em que foi conjurado, o disco flutua atrás de você, mantendo-se sempre adjacente. +4 PM: muda a duração para um dia.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "em vez de flutuar no ponto em  que foi conjurado, o disco flutua atrás de  você, mantendo-se sempre adjacente"
  - custo: 4
    efeito: "muda a duração para um dia"
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


## Fúria do Panteão {#furia-do-panteao}

```yaml
id: furia-do-panteao
nome: "Fúria do Panteão"
pagina_pdf: 200
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 200
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningbolt.jpg"
  alt: "evocação/energia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 5
  escola: "Evocação"
  tradicoes: ["Divina"]
  palavras_chave: ["evocação"]
execucao:
  acao: "completa"
  alcance: "longo"
  area: "cubo de 90m"
  efeito: "1 globo"
  duracao: "sustentada"
  resistencia: "veja texto"
mecanica:
  descricao_resumida: "tada; Resistência: veja texto."
  efeito_detalhado: |
    tada; Resistência: veja texto. Você cria uma nuvem de tempesta de violenta. Os ventos tornam ataques à distância impossíveis e fazem a área contar como condição terrível para lançar magia. Além disso, inimi gos na área têm a visibilidade reduzida (como a magia Névoa). Uma vez por turno, você pode gastar uma ação de movimento para gerar um dos efeitos a seguir. Nevasca. Inimigos na área sofrem 10d6 pontos de dano de frio (Fortitude reduz à metade). A área fica coberta de neve, virando terreno difícil até o fim da cena ou até você usar siroco. Raios. Até 6 inimigos a sua escolha na área sofrem 10d8 pontos de dano de eletricidade (Reflexos reduz à metade). Siroco. Transforma a chuva em uma tempestade de areia escaldante. Inimigos na área sofrem 10d6 pontos de dano (metade corte, metade fogo) e ficam sangrando (Fortitude reduz o dano à metade e evita a condição). Trovões. Inimigos sofrem 10d6 pontos de dano de impacto e ficam desprevenidos por uma rodada (Fortitude reduz o dano à metade e evita a condição).Globo da verdade de gwen divina 2 (adivinhação) Execução: padrão; Alcance: curto; Efeito: 1 globo; Duração: cena. Cria um globo flutuante e intangível, com 50cm de diâmetro. O globo mostra uma cena vista até uma semana atrás por você ou por uma criatura que você toque ao lançar a magia (mediante uma pergunta; a criatura pode fazer um teste de Vontade para anular o efeito), permitindo que outras pessoas a vejam. +1 PM: o globo mostra uma cena vista até um mês atrás. +2 PM: como acima, até um ano atrás. +2 PM: ao lançar a magia, você pode tocar um cadáver. O globo mostra a última cena vista por essa criatura. +4 PM: muda o alcance para longo e o efeito para 10 globos. Todos mostram a mesma cena.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "o globo mostra uma cena vista  até um mês atrás"
  - custo: 2
    efeito: "como acima, até um ano atrás"
  - custo: 2
    efeito: "ao lançar a magia, você pode  tocar um cadáver. O globo mostra a última cena vista por essa criatura"
  - custo: 4
    efeito: "muda o alcance para longo e o  efeito para 10 globos. Todos mostram  a mesma cena"
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


## Intervenção Divina {#intervencao-divina}

```yaml
id: intervencao-divina
nome: "Intervenção Divina"
pagina_pdf: 201
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 201
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg"
  alt: "ícone padrão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 5
  escola: "Convocação"
  tradicoes: ["Divina"]
  palavras_chave: []
execucao:
  acao: "completa"
  alcance: "veja  texto"
  alvo: "veja texto"
  duracao: "veja  texto"
  resistencia: "veja texto"
mecanica:
  descricao_resumida: "texto; Resistência: veja texto."
  efeito_detalhado: |
    texto; Resistência: veja texto. Você pede a sua divindade para inter ceder diretamente. Você pode: • Curar todos os PV e condições de até 10 criaturas em alcance longo (este efeito cura mortos-vivos, em vez de causar dano). • Dissipar os efeitos de qualquer magia de 4º círculo ou menor. Você pode implorar por algo ainda mais poderoso. Nesse caso, a magia requer o sacrifício de 2 PM e pode fazer coisas como: • Criar um item mundano de até T$ 30.000. • Duplicar os efeitos de qualquer magia de até 4º círculo. Caso a magia precise de um componente material para ser lançada, ainda é necessário providenciar o componente. • Proteger uma cidade de um desastre, como uma erupção vulcânica, enchente ou terremoto. • Ressuscitar uma criatura em alcance longo que tenha morrido há até uma rodada. A criatura acorda com 1 PV . • Qualquer outra coisa que o mestre autorize, conforme os desejos e objeti
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


## Lágrimas de Wynna {#lagrimas-de-wynna}

```yaml
id: lagrimas-de-wynna
nome: "Lágrimas de Wynna"
pagina_pdf: 202
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 202
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg"
  alt: "abjuração/escudo"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 5
  escola: "abjuração"
  tradicoes: ["Divina"]
  palavras_chave: ["abjuração"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 criatura"
  duracao: "instantânea"
  resistencia: "Vontade parcial"
mecanica:
  descricao_resumida: "Resistência: Vontade parcial."
  efeito_detalhado: |
    Resistência: Vontade parcial. Se falhar no teste de resistência, o alvo perde a habilidade de lançar magias ar canas até o fim da cena. Se passar, per de a habilidade por uma rodada. +2 PM: muda a área para esfera com 6m de raio e o alvo para criaturas escolhidas. +5 PM: muda a execução para um dia e adiciona custo adicional (sacrifício de 1 PM). O alvo da magia precisa ser mantido em alcance curto do conjurador durante toda a execução. Ao término, faz um teste de Vontade. Se falhar, perde a habilidade de lançar magias arcanas permanentemente. Se passar, resiste, mas ainda pode ser alvo da magia no dia seguinte. Nenhum poder mortal é capaz de rever ter essa perda. Os clérigos de Wynna dizem que a deusa chora cada vez que este ritual é realizado.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "muda a área para esfera com  6m de raio e o alvo para criaturas escolhidas"
  - custo: 5
    efeito: "muda a execução para um  dia e adiciona custo adicional (sacrifício de 1 PM). O alvo da magia precisa ser mantido em alcance curto do  conjurador durante toda a execução.  Ao término, faz um teste de Vontade.  Se falhar, perde a habilidade de lançar magias arcanas permanentemente. Se passar, resiste, mas ainda pode  ser alvo da magia no dia seguinte. Nenhum poder mortal é capaz de rever ter essa perda. Os clérigos de Wynna  dizem que a deusa chora cada vez que  este ritual é realizado"
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


## Legião {#legiao}

```yaml
id: legiao
nome: "Legião"
pagina_pdf: 202
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 202
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_charm.jpg"
  alt: "encantamento"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 5
  escola: "Encantamento"
  tradicoes: ["Arcana"]
  palavras_chave: ["encantamento"]
execucao:
  acao: "padrão"
  alcance: "médio"
  alvo: "até 10 criaturas na área"
  duracao: "sustentada"
  resistencia: "Vontade parcial"
mecanica:
  descricao_resumida: "de parcial."
  efeito_detalhado: |
    de parcial. Você domina a mente dos alvos. Os alvos obedecem cegamente a seus co mandos, exceto ordens claramente suicidas. Um alvo tem direito a um teste no final de cada um de seus turnos para se livrar do efeito. Alvos que passarem no teste ficam abalados por 1 rodada enquanto recuperam a consciência. +1 PM: aumenta o número de alvos em +1.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 4
    efeito: "muda a execução para um dia,  o alcance para ilimitado e adiciona componente material (cuba de ouro cheia  d’água e ingredientes mágicos, no valor de T$ 1.000). Você ainda precisa ter  alguma informação sobre o alvo, como  um nome, descrição ou localização"
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


## Mata-Dragão {#mata-dragao}

```yaml
id: mata-dragao
nome: "Mata-Dragão"
pagina_pdf: 204
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 204
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningbolt.jpg"
  alt: "evocação/energia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 5
  escola: "Evocação"
  tradicoes: ["Arcana"]
  palavras_chave: ["evocação"]
execucao:
  acao: "duas rodadas"
  alcance: "pessoal"
  area: "cone de 30m"
  duracao: "instantânea"
  resistencia: "Reflexos reduz à metade"
mecanica:
  descricao_resumida: "instantânea; Resistência: Reflexos reduz à metade."
  efeito_detalhado: |
    instantânea; Resistência: Reflexos reduz à metade. Esta é uma das mais poderosas magias de destruição existentes. Após entoar longos cânticos, o conjurador dispara uma carga de energia que var re uma enorme área à sua frente, causando 20d12 pontos de dano de essên -cia em todas as criaturas, construções e objetos livres atingidos. Sempre que rola um resultado 12 em um dado de dano, a magia causa +1d12 pontos de dano. Apesar de seu poder destrutivo, esta magia é lenta, tornando seu uso difícil em combate. +1 PM: aumenta o dano em +1d12.
  dano_ou_cura:
    formulas: ["1d12", "20d12"]
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


## PM: aumenta o dano em +1d8+4. Possessão {#pm-aumenta-o-dano-em-1d84-possessao}

```yaml
id: pm-aumenta-o-dano-em-1d84-possessao
nome: "PM: aumenta o dano em +1d8+4. Possessão"
pagina_pdf: 207
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 207
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_charm.jpg"
  alt: "encantamento"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 5
  escola: "Encantamento"
  tradicoes: ["Arcana"]
  palavras_chave: ["encantamento"]
execucao:
  acao: "padrão"
  alcance: "longo"
  alvo: "1 criatura"
  duracao: "1 dia"
  resistencia: "Vontade anula"
mecanica:
  descricao_resumida: "Você projeta sua consciência no corpo  do alvo."
  efeito_detalhado: |
    Você projeta sua consciência no corpo  do alvo. Enquanto possuir uma criatu ra, você assume o
    controle total do cor po dela. O seu próprio corpo fica inconsciente e a consciência do alvo fica
    inerte. Em termos de jogo, você con tinua usando a sua ficha, mas com os  atributos físicos e
    deslocamento da  criatura. Se o alvo passar no teste de  resistência, sabe que você tentou possuí-lo
    e fica imune a esta magia por um  dia. Caso o corpo da criatura morra enquanto você a possui, a
    criatura morre  e você deve fazer um teste de Vontade  contra a CD da sua própria magia. Se  passar,
    sua consciência retorna para o  seu corpo (contanto que esteja dentro  do alcance). Do contrário,
    você também morre. Retornar para o seu cor po voluntariamente é uma ação livre.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 5
    efeito: "você ganha acesso às habilidades de raça e classe da criatura"
  - custo: 5
    efeito: "enquanto a magia durar e você  estiver dentro do alcance do seu corpo  original, pode “saltar” de uma criatura  possuída para outra. O novo alvo tem  direito a um teste de Vontade. Se falhar,  você assume o controle do corpo dele  e o alvo anterior recobra a consciência"
  - custo: 5
    efeito: "muda a duração para permanente, mas destrói seu corpo original  no processo. Uma criatura possuída  pode fazer um teste de Vontade no co meço do dia para retomar seu corpo.  Se passar, recobra a consciência (e a  sua própria consciência fica inerte). O  teste se repete no início de cada dia. Se  o corpo de uma criatura possuída mor rer e houver outra criatura em alcance  curto, você pode tentar possuí-la. Enquanto houver novos corpos para possuir, você é imortal!"
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


## Reanimação Impura {#reanimacao-impura}

```yaml
id: reanimacao-impura
nome: "Reanimação Impura"
pagina_pdf: 209
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 209
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowbolt.jpg"
  alt: "sombra/necromancia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 5
  escola: "Necromancia"
  tradicoes: ["Divina"]
  palavras_chave: ["necromancia"]
execucao:
  acao: "completa"
  alcance: "toque"
  alvo: "1 criatura"
  duracao: "cena"
  resistencia: "—"
mecanica:
  descricao_resumida: "centemente (dentro da mesma cena), trazendo sua alma de volta ao cor po de forma forçada."
  efeito_detalhado: |
    centemente (dentro da mesma cena), trazendo sua alma de volta ao cor po de forma forçada. O tipo da criatu ra muda para morto-vivo, mas ela retém suas memórias e habilidades de quando estava viva, podendo inclusi ve lançar magias. A criatura pode pensar e falar livremente, mas obedece cegamente a seus comandos. Quando a cena termina, a criatura volta a ficar morta, mas muitos clérigos malignos usam meios para guardar e preservar o corpo de criaturas poderosas para serem reanimadas dessa forma quando necessário. Se for destruída, a criatu ra não pode ser reanimada novamente com esta magia.
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


## Réquiem {#requiem}

```yaml
id: requiem
nome: "Réquiem"
pagina_pdf: 210
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 210
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_invisibility.jpg"
  alt: "ilusão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 5
  escola: "Ilusão"
  tradicoes: ["Arcana"]
  palavras_chave: ["ilusão"]
execucao:
  acao: "completa"
  alcance: "curto"
  alvo: "criaturas escolhidas"
  duracao: "sustentada"
  resistencia: "Vontade anula"
mecanica:
  descricao_resumida: "sustentada; Resistência: Vontade anula."
  efeito_detalhado: |
    sustentada; Resistência: Vontade anula. Esta magia cria uma ilusão particular para cada uma das criaturas que atingir. Enquanto a magia durar, no início de cada um de seus turnos, cada criatu ra afetada deve fazer um teste de Vontade; se falhar, acha que não tomou as ações que realmente fez no turno anterior e é obrigada a repetir as mesmas ações neste turno, com uma penalidade cumulativa de –5 em todos os testes para cada vez que se repetir (a penalidade não se aplica ao teste de Vontade contra esta magia). Por exemplo, se a criatura se aproximou de um alvo e o atacou, precisa se aproximar desse mesmo alvo e atacar novamente. A ação repetida consome PM e recursos normalmente e, caso exija um teste de resistência, qualquer alvo faz esse tes te com um bônus igual ao da penalidade desta magia.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "muda a duração para um dia.  Requer 2º círculo"
  - custo: 5
    efeito: "muda o alcance para curto e o  alvo para criaturas escolhidas. Requer  3º círculo"
  - custo: 5
    efeito: "muda o efeito para redução de  dano contra todos os tipos listados na  magia. Requer 3º círculo"
  - custo: 9
    efeito: "muda o efeito para imunida de a um tipo listado na magia. Requer  4º círculo"
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


## Segunda Chance {#segunda-chance}

```yaml
id: segunda-chance
nome: "Segunda Chance"
pagina_pdf: 211
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 211
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningbolt.jpg"
  alt: "evocação/energia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 5
  escola: "Evocação"
  tradicoes: ["Divina"]
  palavras_chave: ["evocação"]
execucao:
  acao: "padrão"
  alcance: "toque"
  alvo: "1 criatura"
  duracao: "instantânea"
  resistencia: "—"
mecanica:
  descricao_resumida: "Um brilho de luz, na forma de asas de fênix, emana do alvo."
  efeito_detalhado: |
    Um brilho de luz, na forma de asas de fênix, emana do alvo. Ele recupera 200 pontos de vida e se cura de qualquer das seguintes condições: abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, envene nado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofus cado, paralisado, pasmo ou surdo. +1 PM: aumenta a cura em +20 PV . +2 PM: muda o alcance para curto e o alvo para até 5 criaturas. +5 PM: muda o alvo para uma criatura que tenha morrido há até uma rodada. Esta magia pode curá-la.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "muda o alcance para curto e o  alvo para até 5 criaturas"
  - custo: 5
    efeito: "muda o alvo para uma criatura  que tenha morrido há até uma rodada.  Esta magia pode curá-la. Selo de Mana Universal 3 (Encantamento) Execução : padrão; Alcance : toque;  Alvo: 1 criatura; Duração : cena; Resis tência : Vontade parcial. Seu toque manifesta um selo mágico  na pele do alvo, que atrapalha o fluxo  de mana. Pela duração da magia, sem pre que o alvo realizar qualquer ação  que gaste PM, deve fazer um teste de Vontade; se passar, faz a ação normalmente. Se falhar, a ação não tem efeito  (mas os PM são gastos mesmo assim)"
  - custo: 4
    efeito: "muda o alcance para curto e  o alvo para criaturas escolhidas dentro  do alcance. Requer 4º círculo"
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


## Semiplano {#semiplano}

```yaml
id: semiplano
nome: "Semiplano"
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
  circulo: 5
  escola: "Convocação"
  tradicoes: ["Arcana"]
  palavras_chave: []
execucao:
  acao: "completa"
  alcance: "curto"
  efeito: "semiplano com 30m de lado"
  duracao: "1 dia"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você cria uma dimensão particular."
  efeito_detalhado: |
    Você cria uma dimensão particular. Você pode entrar no semiplano gastando uma ação padrão e 10 PM, desaparecendo do plano material como se tivesse se teletransportado. Você pode levar criaturas voluntárias que esteja tocando, ao custo de 1 PM por criatura extra. Você também pode levar objetos que esteja tocando, ao custo de 1 PM por objeto Médio ou menor, 2 PM por objeto Grande, 5 PM por Enorme e 10 PM por Colossal. Uma vez no semiplano, pode gastar uma ação completa para voltar ao plano material, no mesmo local onde estava. Caso conheça a magia Viagem Planar, pode lançá-la para voltar ao plano material em outro local. Você escolhe a forma e a aparência do semiplano — uma caverna, um aste roide que singra o éter, um palacete de cristal etc. Ele contém ar, luz e calor, mas além disso é vazio. Entretan to, você pode levar itens (mobília, fer ramentas etc.) a cada viagem. +2 PM: adiciona alvo (1 criatura). Você cria uma semiplano labiríntico e expulsa o alvo para ele. A cada rodada, a vítima tem direito a um teste de Investigação ou Sobrevivência, com bônus cumulativo de +1 para cada teste já realizado, para escapar do labirinto. Quando o alvo escapa, a magia termina e o alvo reaparece no plano material no mesmo local onde estava quando a magia foi lançada. Magias como Salto Dimensional e Teletrans porte não ajudam a escapar do labirinto, mas Viagem Planar, sim. +5 PM: muda a duração para permanente e adiciona componente material (maquete do semiplano feita de mate riais preciosos no valor de T$ 5.000). Você pode lançar a magia diversas vezes para aumentar as dimensões do semiplano em +30m de lado a cada vez.
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


## Sombra Assassina {#sombra-assassina}

```yaml
id: sombra-assassina
nome: "Sombra Assassina"
pagina_pdf: 213
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 213
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_invisibility.jpg"
  alt: "ilusão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 5
  escola: "Ilusão"
  tradicoes: ["Arcana"]
  palavras_chave: ["ilusão", "sombra"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 criatura"
  duracao: "cena"
  resistencia: "Vontade parcial"
mecanica:
  descricao_resumida: "sistência: Vontade parcial."
  efeito_detalhado: |
    sistência: Vontade parcial. Esta magia cria uma duplicata ilusória do alvo na forma de uma silhueta, ligada a ele como se fosse uma manifes tação sólida de sua própria sombra. A duplicata de sombras segue automati camente o alvo. Sempre que o alvo faz uma ação hostil — fazer um ataque, usar uma habilidade, lançar uma magia — a sombra imediatamente realiza a mesma ação contra o alvo, usando as mesmas estatísticas e rolagens. A sombra pode ser atacada, tem as mesmas estatísticas do alvo e é destruída quando chega a 0 PV . Se o alvo passar no teste de resistência, a sombra desaparece no final do turno do alvo, depois de copiar sua ação dessa rodada. +10 PM: muda o alvo para criaturas escolhidas na área.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 10
    efeito: "muda o alvo para criaturas  escolhidas na área"
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