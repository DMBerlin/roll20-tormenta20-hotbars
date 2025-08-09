# Magias — 4º Círculo (Tormenta20 v1.3)

> Fonte: Capítulo 4 do PDF enviado. Cada magia segue um bloco YAML parseável.

## Índice

- [Alterar Memória](#alterar-memoria)
- [Animar Objetos](#animar-objetos)
- [Assassino Fantasmagórico](#assassino-fantasmagorico)
- [Campo Antimagia](#campo-antimagia)
- [Círculo da Restauração](#circulo-da-restauracao)
- [Conceder Milagre](#conceder-milagre)
- [Conjurar Elemental](#conjurar-elemental)
- [Controlar a Gravidade](#controlar-a-gravidade)
- [Controlar o Clima](#controlar-o-clima)
- [Cúpula de Repulsão](#cupula-de-repulsao)
- [Desintegrar](#desintegrar)
- [Requer 5º círculo.Duplicata Ilusória](#requer-5o-circuloduplicata-ilusoria)
- [Explosão Caleidoscópica](#explosao-caleidoscopica)
- [Forma Etérea](#forma-eterea)
- [Guardião Divino](#guardiao-divino)
- [Ligação Sombria](#ligacao-sombria)
- [Manto do Cruzado](#manto-do-cruzado)
- [Mão Poderosa de Talude](#mao-poderosa-de-talude)
- [Marionete](#marionete)
- [Premonição](#premonicao)
- [Raio Polar](#raio-polar)
- [Relâmpago Flamejante de Reynard](#relampago-flamejante-de-reynard)
- [Sonho](#sonho)
- [Talho Invisível de Edauros](#talho-invisivel-de-edauros)
- [Terremoto](#terremoto)


## Alterar Memória {#alterar-memoria}

```yaml
id: alterar-memoria
nome: "Alterar Memória"
pagina_pdf: 185
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 185
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_charm.jpg"
  alt: "encantamento"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Encantamento"
  tradicoes: ["Arcana"]
  palavras_chave: ["encantamento"]
execucao:
  acao: "padrão"
  alcance: "toque"
  alvo: "1 criatura"
  duracao: "instantânea"
  resistencia: "Vontade anula"
mecanica:
  descricao_resumida: "Resistência: Vontade anula."
  efeito_detalhado: |
    Resistência: Vontade anula. Você invade a mente do alvo e altera ou apaga suas memórias da última hora. +2 PM: muda o alcance para pessoal e o alvo para área cone de 4,5m. +5 PM: você pode alterar ou apagar as memórias das últimas 24 horas.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "muda o alcance para pessoal e  o alvo para área cone de 4,5m"
  - custo: 5
    efeito: "você pode alterar ou apagar as  memórias das últimas 24 horas"
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


## Animar Objetos {#animar-objetos}

```yaml
id: animar-objetos
nome: "Animar Objetos"
pagina_pdf: 185
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 185
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_polymorph.jpg"
  alt: "transmutação"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Transmutação"
  tradicoes: ["Arcana"]
  palavras_chave: ["transmutação"]
execucao:
  acao: "padrão"
  alcance: "médio"
  alvo: "até 8 objetos Minúsculos ou Pequenos, 4 objetos Médios, 2 objetos  Grandes ou 1 objeto Enorme"
  duracao: "cena"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você concede vida a objetos inanima dos."
  efeito_detalhado: |
    Você concede vida a objetos inanima dos. Cada objeto se torna um parceiro sob seu controle. O tipo dele é escolhi do da lista de tamanho e ele não conta em seu limite de parceiros. Com uma ação de movimento, você pode coman dar mentalmente qualquer objeto animado dentro do alcance para que auxilie você ou outra criatura. Outros usos criativos para os objetos ficam a cargo do mestre. Objetos animados 179 Kellyanne Pontes kelly.ayame@gmail.com
    
    Capítulo Quatro são construtos com valores de Força, Destreza e PV de acordo com seu tamanho. Todos os outros atributos são nulos, eles não têm valor de Defesa ou testes de resistência e falham automaticamente em qualquer teste oposto. Di ferente de parceiros comuns, um objeto pode ser alvo de ações hostis. Esta magia não afeta itens mágicos, nem objetos que estejam sendo carregados por outra criatura. +5 PM: muda a duração para permanente e adiciona componente material (prataria no valor de T$ 1.000). Você pode ter um máximo de objetos animados igual à metade do seu nível. Estatísticas de objetos animados Minúsculo: For –3, Des 4, 5 PV; Assassino ou Combatente Iniciante. Pequeno: For –2, Des 2, 10 PV; Combatente ou Guardião Iniciante. Médio: For 0, Des 1, 20 PV; Combaten te ou Guardião Veterano. Grande: For 2, Des 0, 40 PV; Fortão, Guardião ou Montaria (cavalo) Veterano. Enorme: For 4, Des –2, 80 PV; Fortão, Guardião ou Montaria (cavalo) Mestre.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 5
    efeito: "muda a duração para permanente e adiciona componente material  (prataria no valor de T$ 1.000). Você  pode ter um máximo de objetos animados igual à metade do seu nível. Estatísticas de objetos animados Minúsculo: For –3, Des 4, 5 PV; Assassino ou Combatente Iniciante. Pequeno:  For –2, Des 2, 10 PV; Combatente ou Guardião Iniciante. Médio:  For 0, Des 1, 20 PV; Combaten te ou Guardião Veterano. Grande:  For 2, Des 0, 40 PV; Fortão,  Guardião ou Montaria (cavalo) Veterano. Enorme: For 4, Des –2, 80 PV; Fortão,  Guardião ou Montaria (cavalo) Mestre"
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


## Assassino Fantasmagórico {#assassino-fantasmagorico}

```yaml
id: assassino-fantasmagorico
nome: "Assassino Fantasmagórico"
pagina_pdf: 187
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 187
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowbolt.jpg"
  alt: "sombra/necromancia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Necromancia"
  tradicoes: ["Arcana"]
  palavras_chave: ["necromancia"]
execucao:
  acao: "padrão"
  alcance: "longo"
  alvo: "1 criatura"
  duracao: "cena, até  ser descarregada"
  resistencia: "Vonta de anula, Fortitude parcial"
mecanica:
  descricao_resumida: "ser descarregada; Resistência: Vonta de anula, Fortitude parcial."
  efeito_detalhado: |
    ser descarregada; Resistência: Vonta de anula, Fortitude parcial. Usando os medos subconscientes do alvo, você cria uma imagem daquilo que ele mais teme. Apenas a própria vítima pode ver o Assassino Fantasmagó rico com nitidez; outras criaturas presentes (incluindo o conjurador) enxer gam apenas um espectro sombrio. Quando você lança a magia, o espec tro surge adjacente a você e a vítima faz um teste de Vontade. Se ela passar, percebe que o espectro é uma ilusão e a magia é dissipada. Se falhar, acredi ta na existência do espectro, que então flutua 18m por rodada em direção à vítima, sempre no fim do seu turno. Ele é incorpóreo e imune a magias (exceto magias que dissipam outras). Se o espectro terminar seu turno adjacente à vítima, ela deve fazer um teste de Fortitude. Se passar, sofre 6d6 pontos de dano de trevas (este dano não pode reduzir o alvo a menos de 0 PV e não o deixa sangrando). Se falhar, so fre um colapso, ficando imediatamente com –1 PV e sangrando. O espectro persegue o alvo implacavel mente. Ele desaparece se o alvo ficar inconsciente ou se afastar além de al
  dano_ou_cura:
    formulas: ["6d6"]
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


## Campo Antimagia {#campo-antimagia}

```yaml
id: campo-antimagia
nome: "Campo Antimagia"
pagina_pdf: 189
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 189
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg"
  alt: "abjuração/escudo"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
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
  descricao_resumida: "Você é cercado por uma barreira invisível com 3m de raio que o acompanha."
  efeito_detalhado: |
    Você é cercado por uma barreira invisível com 3m de raio que o acompanha. Qualquer habilidade mágica ou item mágico que entre na área da barreira é suprimida enquanto estiver lá. Criaturas convocadas que entrem em um Campo Antimagia desaparecem. Elas reaparecem na mesma posição quando a duração do Campo termina — supondo que a duração da magia que as con vocou ainda não tenha terminado.Criaturas mágicas ou imbuídas com magia durante sua criação não são diretamente afetadas pelo Campo Antimagia. Entretanto, como qualquer criatura, não poderão usar magias ou habilidades mágicas dentro dele. Uma magia que dissipa outras não dissipa um Campo Anti magia, e dois Campos na mesma área não se neutralizam. Artefatos e deuses maiores não são afetados por um Campo Antimagia.
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


## Círculo da Restauração {#circulo-da-restauracao}

```yaml
id: circulo-da-restauracao
nome: "Círculo da Restauração"
pagina_pdf: 190
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 190
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/inv_potion_76.jpg"
  alt: "cura/vida"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Evocação"
  tradicoes: ["Divina"]
  palavras_chave: ["evocação"]
execucao:
  acao: "padrão"
  alcance: "curto"
  area: "esfera com 3m de raio"
  duracao: "5 rodadas"
  resistencia: "Reflexos par cial"
mecanica:
  descricao_resumida: "Você evoca um círculo de luz que emana uma energia poderosa."
  efeito_detalhado: |
    Você evoca um círculo de luz que emana uma energia poderosa. Qualquer criatura viva que termine o tur no dentro do círculo recupera 3d8+3 PV e 1 PM. Mortos-vivos e criaturas que sofrem dano por luz perdem PV e PM na mesma quantidade. Uma criatura pode recuperar no máximo 5 PM por dia com esta magia. +2 PM: aumenta a regeneração de PV em 1d8+1.
  dano_ou_cura:
    formulas: ["10d6", "10d8", "1d4", "2d6", "2d8"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 5
    efeito: "a luz purificadora do Deus-Sol  dissipa todas as magias de necroman cia ativas na área. Requer 5º círculo"
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


## Conceder Milagre {#conceder-milagre}

```yaml
id: conceder-milagre
nome: "Conceder Milagre"
pagina_pdf: 190
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 190
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_charm.jpg"
  alt: "encantamento"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Encantamento"
  tradicoes: ["Divina"]
  palavras_chave: ["encantamento"]
execucao:
  acao: "padrão"
  alcance: "toque"
  alvo: "1 criatura"
  duracao: "permanente até ser descarregada"
  resistencia: "—"
mecanica:
  descricao_resumida: "te até ser descarregada."
  efeito_detalhado: |
    te até ser descarregada. Você transfere um pouco de seu poder divino a outra criatura. Escolha uma magia de até 2º círculo que você co nheça; o alvo pode lançar essa magia uma vez, sem pagar o custo dela em PM (aprimoramentos podem ser usados, mas o alvo deve gastar seus pró prios PM). Você sofre uma penalidade de –3 PM até que o alvo lance a magia. +4 PM: muda o círculo da magia concedida para 3º e a penalidade de PM para –6. 184 Kellyanne Pontes kelly.ayame@gmail.com
    
    Magia
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 4
    efeito: "muda o círculo da magia concedida para 3º e a penalidade de PM  para –6. 184  Kellyanne Pontes kelly.ayame@gmail.com  Magia"
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


## Conjurar Elemental {#conjurar-elemental}

```yaml
id: conjurar-elemental
nome: "Conjurar Elemental"
pagina_pdf: 191
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 191
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg"
  alt: "ícone padrão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Convocação"
  tradicoes: ["Arcana"]
  palavras_chave: []
execucao:
  acao: "completa"
  alcance: "médio"
  efeito: "parceiro elemental"
  duracao: "sustentada"
  resistencia: "—"
mecanica:
  descricao_resumida: "Esta magia transforma uma porção de um elemento inerte em uma criatura elemental Grande do tipo do elemen to alvo."
  efeito_detalhado: |
    Esta magia transforma uma porção de um elemento inerte em uma criatura elemental Grande do tipo do elemen to alvo. Por exemplo, lançar esta magia numa fogueira ou tocha cria um elemental do fogo. Você pode criar elementais do ar, água, fogo e terra com essa magia. O elemental obedece a to dos os seus comandos e pode funcio -nar como um parceiro do tipo destrui dor (cuja habilidade custa apenas 2 PM para ser usada) e mais um tipo entre os indicados na lista abaixo, ambos mes tres. O elemental auxilia apenas você e não conta em seu limite de parceiros. Ar: assassino, perseguidor ou vigilante. Dano de eletricidade. Água: ajudante, guardião ou médico. Dano de frio. Fogo: atirador, combatente ou fortão. Dano de fogo. Terra: combatente, guardião ou montaria. Dano de impacto. +5 PM: o elemental muda para Enor me e recebe dois tipos de parceiro indicados no seu elemento. +5 PM:  você convoca um elemental de cada tipo. Quando lança a magia, você pode escolher se cada elemental vai auxiliar você ou um aliado no alcance. Requer 5º círculo.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 5
    efeito: "o elemental muda para Enor me e recebe dois tipos de parceiro indicados no seu elemento"
  - custo: 5
    efeito: "você convoca um elemental  de cada tipo. Quando lança a magia,  você pode escolher se cada elemental  vai auxiliar você ou um aliado no alcance. Requer 5º círculo"
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


## Controlar a Gravidade {#controlar-a-gravidade}

```yaml
id: controlar-a-gravidade
nome: "Controlar a Gravidade"
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
  circulo: 4
  escola: "Transmutação"
  tradicoes: ["Arcana"]
  palavras_chave: ["transmutação"]
execucao:
  acao: "padrão"
  alcance: "médio"
  area: "cubo de 12m de lado"
  duracao: "sustentada"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você controla os efeitos da gravidade dentro da área."
  efeito_detalhado: |
    Você controla os efeitos da gravidade dentro da área. Ao lançar a magia, escolha um dos efeitos abaixo. Enquanto a magia durar, você pode gastar uma ação padrão para mudar o efeito.Aumentar: no início de seus turnos, cada criatura na área deve fazer um teste de Atletismo. Se passar, fica fatigada. Se falhar, fica fatigada e caída. Inverter: inverte a gravidade da área, fazendo com que criaturas e objetos “caiam” para cima, atingindo o topo (12m) em uma rodada. Se um obstáculo (como um teto) impedir o movimento das criaturas, elas sofrem 1d6 pontos de dano de impacto para cada 1,5m de “queda”. Elas podem então se levantar e caminhar no obstáculo, de cabeça para baixo. Se não houver obstáculo, as criaturas e objetos ficam flutuando no topo da área afetada, sem poder sair do lugar. Criaturas voado ras podem se movimentar normalmen te. Alguém adjacente a algo que possa agarrar tem direito a um teste de Refle xos para evitar a “queda”. A criatura deve permanecer presa pela duração da magia; caso contrário “cairá”. Reduzir: criaturas ou objetos livres Médios ou menores flutuam para cima e para baixo conforme sua vontade, com deslocamento de voo 6m. Criaturas na área recebem +20 em testes de Atletismo para escalar e saltar. Uma criatu ra levitando fica instável, sofrendo –2 em testes de ataque.
  dano_ou_cura:
    formulas: ["1d6"]
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


## Controlar o Clima {#controlar-o-clima}

```yaml
id: controlar-o-clima
nome: "Controlar o Clima"
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
  circulo: 4
  escola: "Transmutação"
  tradicoes: ["Divina"]
  palavras_chave: ["transmutação"]
execucao:
  acao: "completa"
  alcance: "2km"
  area: "esfera com 2km de raio"
  duracao: "4d12 horas"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você muda o clima da área onde se encontra, podendo criar qualquer condição climática: chuva, neve, ventos, névoas."
  efeito_detalhado: |
    Você muda o clima da área onde se encontra, podendo criar qualquer condição climática: chuva, neve, ventos, névoas... Veja o Capítulo 6: O Mestre para os efeitos do clima. +1 PM (Apenas Druidas): muda o raio da área para 3km e duração para 1d4 dias.
  dano_ou_cura:
    formulas: ["1d4"]
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


## Cúpula de Repulsão {#cupula-de-repulsao}

```yaml
id: cupula-de-repulsao
nome: "Cúpula de Repulsão"
pagina_pdf: 195
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 195
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg"
  alt: "abjuração/escudo"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Abjuração"
  tradicoes: ["Divina"]
  palavras_chave: ["abjuração"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  alvo: "você"
  duracao: "sustentada"
  resistencia: "Vontade anula"
mecanica:
  descricao_resumida: "sistência: Vontade anula."
  efeito_detalhado: |
    sistência: Vontade anula. Uma cúpula de energia invisível o cer ca, impedindo a aproximação de cer tas criaturas. Escolha um tipo de cria-tura (animais, espíritos, monstros...) ou uma raça de humanoides (elfos, go blins, minotauros..). Criaturas do grupo escolhido que tentem se aproximar a menos de 3m de você (ou seja, que tentem ficar adjacentes a você) devem fazer um teste de Vontade. Se falharem, não conseguem, gastam a ação e só podem tentar novamente na rodada seguinte. Isso impede ataques corpo a corpo, mas não ataques ou outros efei tos à distância. Se você tentar se apro ximar além do limite de 3m, rompe a cúpula e a magia é dissipada. +2 PM: a cúpula impede criaturas de se aproximarem a menos de 4,5m de você (ou seja, deve haver dois quadrados entre você e as criaturas). +5 PM: além do normal, criaturas afetadas também precisam fazer o teste de resistência se fizerem um ataque ou efeito à distância você. Se falharem, o efeito é desviado pela cúpula. Requer 5º círculo.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "a cúpula impede criaturas de  se aproximarem a menos de 4,5m de  você (ou seja, deve haver dois quadrados entre você e as criaturas)"
  - custo: 5
    efeito: "além do normal, criaturas afetadas também precisam fazer o teste  de resistência se fizerem um ataque  ou efeito à distância você. Se falharem, o efeito é desviado pela cúpula.  Requer 5º círculo"
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


## Desintegrar {#desintegrar}

```yaml
id: desintegrar
nome: "Desintegrar"
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
  circulo: 4
  escola: "Transmutação"
  tradicoes: ["Arcana"]
  palavras_chave: ["transmutação"]
execucao:
  acao: "padrão"
  alcance: "médio"
  alvo: "1 criatura ou objeto"
  duracao: "instantânea"
  resistencia: "Fortitude  parcial"
mecanica:
  descricao_resumida: "instantânea; Resistência: Fortitude parcial."
  efeito_detalhado: |
    instantânea; Resistência: Fortitude parcial. Você dispara um raio fino e esverdeado que causa 10d12 pontos de dano de essência. Se o alvo passar no teste de resistência, em vez disso sofre 2d12 pontos de dano. Independentemente do resultado do teste de Fortitude, se os PV do alvo fo rem reduzidos a 0 ou menos, ele será completamente desintegrado, restando apenas pó. +4 PM: aumenta o dano total em +2d12 e o dano mínimo em +1d12.
  dano_ou_cura:
    formulas: ["10d12", "1d12", "2d12"]
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


## Requer 5º círculo.Duplicata Ilusória {#requer-5o-circuloduplicata-ilusoria}

```yaml
id: requer-5o-circuloduplicata-ilusoria
nome: "Requer 5º círculo.Duplicata Ilusória"
pagina_pdf: 197
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 197
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_invisibility.jpg"
  alt: "ilusão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Ilusão"
  tradicoes: ["Arcana"]
  palavras_chave: ["ilusão"]
execucao:
  acao: "padrão"
  alcance: "médio"
  efeito: "cópia ilusória"
  duracao: "cena"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você cria uma cópia ilusória semir real de."
  efeito_detalhado: |
    Você cria uma cópia ilusória semir real de... você mesmo! Ela é idêntica  em aparência, som e
    cheiro, mas é intangível. A cada turno, você escolhe se  verá e ouvirá através da duplicata ou  de
    seu corpo original. A cópia repro duz todas as suas ações, incluindo fala.  Qualquer magia com
    alcance de toque  ou maior que você lançar pode se originar da duplicata, em vez do seu corpo
    original. As magias afetam outros alvos normalmente, com a única diferen ça de se originarem da
    cópia, em vez  de você. Se quiser que a duplicata faça  algo diferente de você, você deve gastar uma
    ação de movimento. Qualquer  criatura que interagir com a cópia tem  direito a um teste de Vontade
    para per ceber que é uma ilusão. As magias que  se originam dela, no entanto, são reais.  A cópia
    desaparece se sair do alcance.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 3
    efeito: "cria uma cópia adicional"
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


## Explosão Caleidoscópica {#explosao-caleidoscopica}

```yaml
id: explosao-caleidoscopica
nome: "Explosão Caleidoscópica"
pagina_pdf: 199
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 199
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_fire_fireball02.jpg"
  alt: "magia de fogo"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Ilusão"
  tradicoes: ["Arcana"]
  palavras_chave: ["ilusão"]
execucao:
  acao: "padrão"
  alcance: "curto"
  area: "esfera com 6m de raio"
  duracao: "instantânea"
  resistencia: "Fortitude parcial"
mecanica:
  descricao_resumida: "Resistência: Fortitude parcial."
  efeito_detalhado: |
    Resistência: Fortitude parcial. Esta magia cria uma forte explosão de luzes estroboscópicas e sons cacofôni cos que desorientam as criaturas atingidas. O efeito que cada criatura sofre depende do nível ou ND dela. Nível ou ND 4 ou menor: se falhar no tes te de resistência, fica inconsciente. Se passar, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena. Nível ou ND entre 5 e 9: se falhar no teste de resistência, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena. Se passar, fica atordoada por 1 rodada e enjoada por 1d4 rodadas.Nível ou ND 10 ou maior: se falhar no teste de resistência, fica atordoada por 1 rodada e enjoada por 1d4 rodadas. Se passar, fica desprevenida e enjoada por 1 rodada. Uma criatura só pode ser atordoada por esta magia uma vez por cena.
  dano_ou_cura:
    formulas: ["1d4"]
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


## Forma Etérea {#forma-eterea}

```yaml
id: forma-eterea
nome: "Forma Etérea"
pagina_pdf: 199
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 199
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_polymorph.jpg"
  alt: "transmutação"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Transmutação"
  tradicoes: ["Arcana"]
  palavras_chave: ["transmutação"]
execucao:
  acao: "completa"
  alcance: "pessoal"
  alvo: "você"
  duracao: "sustentada"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você e todo o equipamento que está com você são transportados para o plano etéreo, que existe paralelamente ao plano material (o mundo físico)."
  efeito_detalhado: |
    Você e todo o equipamento que está com você são transportados para o plano etéreo, que existe paralelamente ao plano material (o mundo físico). Na prática, é como ser transformado em um fantasma (mas você ainda é con siderado uma criatura viva). Uma criatura etérea é invisível (pode alterar en193 Kellyanne Pontes kelly.ayame@gmail.com
    
    Capítulo Quatro tre visível e invisível como ação livre), incorpórea e capaz de se mover em qualquer direção, inclusive para cima e para baixo. Ela enxerga o plano material, mas tudo parece cinza e insubstancial, reduzindo o alcance da visão e audição para 18m. Magias de abjuração e essência afetam criaturas eté reas, mas outras magias, não. Da mes ma forma, uma criatura etérea não pode atacar nem lançar magias contra criaturas no plano material. Duas criaturas etéreas podem se afetar normalmente. Uma criatura afetada pode se materializar como uma ação de movimento, encerrando a magia. Uma criatura etérea que se materialize em um espaço ocupado é jogada para o espaço não ocupado mais próximo e sofre 1d6 pontos de dano de impacto para cada 1,5m de deslocamento. +5 PM: muda o alcance para toque e o alvo para até 5 criaturas voluntárias que estejam de mãos dadas. Depois que a magia é lançada, as criaturas po dem soltar as mãos. Requer 5º círculo.
  dano_ou_cura:
    formulas: ["1d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 5
    efeito: "muda o alcance para toque e  o alvo para até 5 criaturas voluntárias  que estejam de mãos dadas. Depois  que a magia é lançada, as criaturas po dem soltar as mãos. Requer 5º círculo"
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


## Guardião Divino {#guardiao-divino}

```yaml
id: guardiao-divino
nome: "Guardião Divino"
pagina_pdf: 200
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 200
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg"
  alt: "ícone padrão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Convocação"
  tradicoes: ["Divina"]
  palavras_chave: []
execucao:
  acao: "padrão"
  alcance: "curto"
  efeito: "elemental de luz invocado"
  duracao: "cena ou até ser descarregado"
  resistencia: "—"
mecanica:
  descricao_resumida: "A magia invoca um elemental Pequeno, com a forma de um orbe feito de luz di-vina."
  efeito_detalhado: |
    A magia invoca um elemental Pequeno, com a forma de um orbe feito de luz di-vina. A criatura é incorpórea, imune a dano e ilumina como uma tocha. O elemental tem 100 pontos de luz. Uma vez por rodada, durante o seu turno, o elemental pode se movimen tar (deslocamento de voo 18m) e gastar quantos pontos de luz quiser para curar dano ou condições de criaturas em alcance curto, à taxa de 1 PV por 1 ponto de luz ou uma condição por 3 pontos de luz (entre abalado, apavorado, alquebrado, atordoado, cego, con fuso, debilitado, enjoado, esmoreci do, exausto, fascinado, fatigado, fraco, frustrado, ofuscado, pasmo, sangrando, surdo ou vulnerável). A magia é encerrada quando o elemental fica sem pontos de luz.
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


## Ligação Sombria {#ligacao-sombria}

```yaml
id: ligacao-sombria
nome: "Ligação Sombria"
pagina_pdf: 202
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 202
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowbolt.jpg"
  alt: "sombra/necromancia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Necromancia"
  tradicoes: ["Divina"]
  palavras_chave: ["necromancia"]
execucao:
  acao: "padrão"
  alcance: "longo"
  alvo: "1 criatura"
  duracao: "1 dia"
  resistencia: "—"
mecanica:
  descricao_resumida: "sistência : Fortitude anula."
  efeito_detalhado: |
    sistência : Fortitude anula. Cria uma conexão entre seu corpo e o da criatura alvo, deixando uma mar ca idêntica na pele de ambos. Enquanto a magia durar, sempre que você so frer qualquer dano ou condição, o alvo desta magia deve fazer um teste de For titude; se falhar, sofre o mesmo dano que você ou adquire a mesma condição. 196 Kellyanne Pontes kelly.ayame@gmail.com
    
    Magia A magia termina se o alvo chegar a 0 pontos de vida. +5 PM: a magia não termina se o alvo chegar a 0 PV (o que significa que dano causado por essa magia pode matá-lo).
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 5
    efeito: "a magia não termina se o alvo  chegar a 0 PV (o que significa que dano  causado por essa magia pode matá-lo)"
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


## Manto do Cruzado {#manto-do-cruzado}

```yaml
id: manto-do-cruzado
nome: "Manto do Cruzado"
pagina_pdf: 203
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 203
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningbolt.jpg"
  alt: "evocação/energia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Evocação"
  tradicoes: ["Divina"]
  palavras_chave: ["evocação"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  alvo: "você"
  duracao: "sustentada"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você invoca o poder de sua divindade na forma de um manto de energia que reveste seu corpo."
  efeito_detalhado: |
    Você invoca o poder de sua divindade na forma de um manto de energia que reveste seu corpo. Esta magia tem duas versões. Você escolhe qual versão pode lançar quando aprende esta magia. Ela não pode ser mudada. Manto de Luz: um manto dourado e luminoso. No início de cada um de seus turnos, você e todos os seus aliados em alcance curto recuperam 2d8 PV . Você recebe imunidade a dano de trevas e seus ataques corpo a corpo causam +2d8 pontos de dano de luz. Manto de Trevas: um manto negro como a noite. No início de cada um de seus turnos, todos os inimigos em alcance curto sofrem 4d8 pontos de dano de trevas. Você cura metade de todo o dano causado pela magia.
  dano_ou_cura:
    formulas: ["2d8", "4d8"]
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


## Mão Poderosa de Talude {#mao-poderosa-de-talude}

```yaml
id: mao-poderosa-de-talude
nome: "Mão Poderosa de Talude"
pagina_pdf: 203
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 203
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg"
  alt: "ícone padrão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Convocação"
  tradicoes: ["Arcana"]
  palavras_chave: []
execucao:
  acao: "padrão"
  alcance: "médio"
  efeito: "mão gigante de energia"
  duracao: "sustentada"
  resistencia: "—"
mecanica:
  descricao_resumida: "Esta magia cria uma mão flutuante Grande que sempre se posiciona entre você e um oponente a sua escolha."
  efeito_detalhado: |
    Esta magia cria uma mão flutuante Grande que sempre se posiciona entre você e um oponente a sua escolha. A mão fornece cobertura leve (+5 na De fesa) contra esse oponente. Nada é capaz de enganar a mão — coisas como escuridão, invisibilidade, metamorfose e disfarces mundanos não a impedem de protegê-lo. A mão tem Defesa 20 e PV e resistências iguais aos seus. Com 197 Kellyanne Pontes kelly.ayame@gmail.com
    
    Capítulo Quatro uma ação de movimento, você pode comandar a mão para que o proteja de outro oponente ou para que realize uma das ações a seguir. Agarrar: a mão usa uma manobra agar rar contra o oponente, usando o seu Misticismo com um bônus adicional de +10. A mão mantém o oponente agarrado, mas não causa dano. Esmagar: a mão esmaga um oponente agarrado, causando 2d6+10 pontos de dano de impacto. Empurrar: a mão afasta o oponente (manobra empurrar usando o seu Misticismo com um bônus adicional de +10). A mão acompanha o oponente para empurrá-lo o máximo que conse guir, dentro do alcance da magia. +2 PM: aumenta o dano em +1d6+5. +5 PM: muda o bônus adicional em Misticismo para +20. Requer 5º círculo.
  dano_ou_cura:
    formulas: ["1d6+5", "2d6+10"]
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


## Marionete {#marionete}

```yaml
id: marionete
nome: "Marionete"
pagina_pdf: 204
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 204
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_charm.jpg"
  alt: "encantamento"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Encantamento"
  tradicoes: ["Arcana"]
  palavras_chave: ["encantamento"]
execucao:
  acao: "padrão"
  alcance: "médio"
  alvo: "1 criatura"
  duracao: "sustenta da"
  resistencia: "Fortitude anula"
mecanica:
  descricao_resumida: "da; Resistência: Fortitude anula."
  efeito_detalhado: |
    da; Resistência: Fortitude anula. Esta magia manipula o sistema ner voso do alvo. Ao sofrer a magia, e no início de cada um de seus turnos, a vítima faz um teste de Fortitude. Se passar, a magia é anulada. Se falhar, todas as suas ações físicas naquele turno estarão sob controle do conjurador. A vítima ainda tem consciência de tudo que acontece à sua volta, po dendo ver, ouvir e até falar com certo esforço (mas não para lançar magias). Contudo, seu corpo realiza apenas os movimentos que o conjurador deseja. A vítima pode ser manipulada para se movimentar, lutar, usar habilidades de combate... Enfim, qualquer coisa de que seja fisicamente capaz. Você precisa de linha de efeito para controlar a vítima. Se perder o contato, não poderá controlá-la — mas ela esta rá paralisada até que o conjurador recupere o controle ou a magia termine.
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


## Premonição {#premonicao}

```yaml
id: premonicao
nome: "Premonição"
pagina_pdf: 207
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 207
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane02.jpg"
  alt: "adivinhação"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Adivinhação"
  tradicoes: ["Divina"]
  palavras_chave: ["adivinhação"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  alvo: "você"
  duracao: "cena"
  resistencia: "—"
mecanica:
  descricao_resumida: "Vislumbres do futuro permitem que você reavalie suas ações."
  efeito_detalhado: |
    Vislumbres do futuro permitem que você reavalie suas ações. Uma vez por rodada, você pode rolar novamente um teste recém realizado, mas deve aceitar o resultado da nova rolagem. +3 PM: muda a execução para reação, o alcance para curto, o alvo para 1 criatura e a duração para instantânea. Esta magia só pode ser usada em uma criatura que tenha acabado de fazer um teste. Obriga a criatura a fazer uma nova rolagem de dados e aceitar o novo resultado, seja ele um sucesso ou falha. Criaturas involuntárias têm direito a um teste de Vontade para negar o efeito. +10 PM: muda a duração para um dia.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 3
    efeito: "muda a execução para reação,  o alcance para curto, o alvo para 1 criatura e a duração para instantânea. Esta  magia só pode ser usada em uma criatura que tenha acabado de fazer um teste.  Obriga a criatura a fazer uma nova rolagem de dados e aceitar o novo resultado, seja ele um sucesso ou falha. Criaturas involuntárias têm direito a um  teste de Vontade para negar o efeito"
  - custo: 10
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


## Raio Polar {#raio-polar}

```yaml
id: raio-polar
nome: "Raio Polar"
pagina_pdf: 209
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 209
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg"
  alt: "eletricidade"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Evocação"
  tradicoes: ["Arcana"]
  palavras_chave: ["evocação", "raio"]
execucao:
  acao: "padrão"
  alcance: "médio"
  alvo: "1 criatura"
  duracao: "instantânea"
  resistencia: "Fortitude parcial"
mecanica:
  descricao_resumida: "Resistência : Fortitude parcial."
  efeito_detalhado: |
    Resistência : Fortitude parcial. Você dispara um raio azul esbranquiçado de gelo e ar congelante. O alvo sofre 10d8 pontos de dano de frio e fica preso em um bloco de gelo (paralisado). Se passar no teste de resistência, sofre metade do dano e, em vez de paralisado, fica lento por uma rodada. É possível quebrar o gelo para libertar uma criatura presa: o bloco tem 20 PV , RD 10 e é vulnerável a fogo. Uma criatura presa pode gastar uma ação com pleta para fazer um teste de Atletismo e se libertar do gelo; cada vez que passar no teste causa 10 pontos de dano ao bloco, ignorando a RD. +3 PM: aumenta o dano em +2d8. +5 PM: muda o alvo para área de esfe ra com 6m de raio. Em vez de um raio, você dispara uma bola de gelo que explode, causando o efeito da magia em todas as criaturas na área.
  dano_ou_cura:
    formulas: ["10d8", "2d8"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 5
    efeito: "muda o alvo para área de esfe ra com 6m de raio. Em vez de um raio,  você dispara uma bola de gelo que explode, causando o efeito da magia em  todas as criaturas na área"
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


## Relâmpago Flamejante de Reynard {#relampago-flamejante-de-reynard}

```yaml
id: relampago-flamejante-de-reynard
nome: "Relâmpago Flamejante de Reynard"
pagina_pdf: 209
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 209
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg"
  alt: "eletricidade"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Evocação"
  tradicoes: ["Arcana"]
  palavras_chave: ["evocação"]
execucao:
  acao: "duas rodadas"
  alcance: "médio"
  efeito: "bolas de fogo e relâmpagos"
  duracao: "sustentada"
  resistencia: "—"
mecanica:
  descricao_resumida: "tência: Reflexos reduz à metade."
  efeito_detalhado: |
    tência: Reflexos reduz à metade. Esta é uma magia poderosa, desenvolvida pelo metódico e impassível arquimago Reynard. Você invoca as energias elementais do fogo e do relâmpago, fazendo com que uma de suas mãos fi203 Kellyanne Pontes kelly.ayame@gmail.com
    
    Capítulo Quatro que em chamas e a outra mão eletrificada. Pela duração da magia, você pode gastar uma ação de movimento para disparar uma bola de fogo (10d6 pontos de dano de fogo numa esfera com 6m de raio) ou um relâmpago (10d6 pontos de dano de eletricidade numa linha). Você também pode, como uma ação padrão, usar as duas mãos num ataque de energia mista (20d12 pontos de dano, metade de fogo e metade de eletricidade, numa esfera com 9m de raio). Você precisa estar com as duas mãos livres para invocar o efeito misto e isso consome toda a energia da magia, terminando-a imediatamente. Por se tratar de um ritual complexo, o tempo de execução dessa magia não pode ser reduzido. +2 PM: aumenta o dano das rajadas em +1d6 e o dano da rajada mista em +2d12.
  dano_ou_cura:
    formulas: ["10d6", "1d6", "20d12", "2d12"]
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


## Sonho {#sonho}

```yaml
id: sonho
nome: "Sonho"
pagina_pdf: 213
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 213
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane02.jpg"
  alt: "adivinhação"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Adivinhação"
  tradicoes: ["Arcana"]
  palavras_chave: ["adivinhação"]
execucao:
  acao: "10 minutos"
  alcance: "ilimitado"
  alvo: "1 criatura viva"
  duracao: "veja texto"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você entra nos sonhos de uma criatura."
  efeito_detalhado: |
    Você entra nos sonhos de uma criatura. Uma vez lá, pode conversar com ela até que ela acorde. Se o alvo não estiver dormindo quando você lançar a magia, você pode permanecer em transe até que ele adormeça. Durante o transe, você fica indefeso e sem consciência dos arredores. Você pode sair do transe quando quiser, mas a magia termina. +2 PM: transforma o sonho do alvo em um pesadelo. A vítima deve fazer um teste de Vontade. Se falhar, não recupera PV ou PM pela noite, sofre 1d10 pontos de dano de trevas e acor da fatigada. A vítima recebe bônus ou penalidades em seu teste de resistên cia, dependendo do conhecimento que você tiver dela. Use os mesmos modi ficadores da magia Vidência .+1 PM: aumenta o número de alvos em +1. Todos os alvos compartilham um mesmo sonho (ou pesadelo) entre si e com você.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "transforma o sonho do alvo  em um pesadelo. A vítima deve fazer  um teste de Vontade. Se falhar, não  recupera PV ou PM pela noite, sofre  1d10 pontos de dano de trevas e acor da fatigada. A vítima recebe bônus ou  penalidades em seu teste de resistên cia, dependendo do conhecimento que  você tiver dela. Use os mesmos modi ficadores da magia Vidência"
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


## Talho Invisível de Edauros {#talho-invisivel-de-edauros}

```yaml
id: talho-invisivel-de-edauros
nome: "Talho Invisível de Edauros"
pagina_pdf: 213
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 213
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_magic_lesserinvisibilty.jpg"
  alt: "invisibilidade/ilusão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Evocação"
  tradicoes: ["Arcana"]
  palavras_chave: ["evocação"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  area: "cone de 9m"
  duracao: "instan tânea"
  resistencia: "Fortitude parcial"
mecanica:
  descricao_resumida: "tânea; Resistência: Fortitude parcial."
  efeito_detalhado: |
    tânea; Resistência: Fortitude parcial. Esta magia cruel foi desenvolvida pelo mago de combate Edauros, quando ainda era um bípede. Você faz um gesto rápido e dispara uma lâmina de ar em alta velocidade. Criaturas na área sofrem 10d8 pontos de dano de corte e ficam sangrando. Alvos que passem no teste de resistência sofrem metade do dano e não ficam sangrando. +2 PM: aumenta o dano em +2d8. +2 PM: muda o alvo para você, a duração para sustentada e o efeito para uma vez por rodada, como uma ação de mo vimento, você pode disparar uma lâmina de ar contra um alvo em alcance médio, causando 6d8 pontos de dano de corte (Fortitude reduz à metade). 207 Kellyanne Pontes kelly.ayame@gmail.com
    
    Capítulo Quatro
  dano_ou_cura:
    formulas: ["10d8", "2d8"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "muda o alvo para você, a duração para sustentada e o efeito para uma  vez por rodada, como uma ação de mo vimento, você pode disparar uma lâmina de ar contra um alvo em alcance  médio, causando 6d8 pontos de dano  de corte (Fortitude reduz à metade). 207  Kellyanne Pontes kelly.ayame@gmail.com  Capítulo Quatro"
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


## Terremoto {#terremoto}

```yaml
id: terremoto
nome: "Terremoto"
pagina_pdf: 215
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 215
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningbolt.jpg"
  alt: "evocação/energia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 4
  escola: "Evocação"
  tradicoes: ["Divina"]
  palavras_chave: ["evocação"]
execucao:
  acao: "padrão"
  alcance: "longo"
  area: "esfera com 30m de raio"
  duracao: "1 rodada"
  resistencia: "veja texto"
mecanica:
  descricao_resumida: "Esta magia cria um tremor de terra que rasga o solo."
  efeito_detalhado: |
    Esta magia cria um tremor de terra que rasga o solo. O terremoto dura uma ro dada, durante a qual criaturas sobre o solo ficam atordoadas (apenas uma vez por cena). Barreiras físicas não inter rompem a área de Terremoto. O efeito exato depende do terreno. Caverna ou subterrâneo: a magia derruba o teto, causando 12d6 pontos de dano de impacto e agarrando todas as criaturas na área. Um teste de Reflexos reduz o dano à metade e evita a condição. Construção: todas as estruturas na área sofrem 200 pontos de dano de impacto, o suficiente para derrubar constru ções de madeira ou alvenaria simples, mas não de alvenaria reforçada. Criaturas em uma construção que desmo rone sofrem o mesmo efeito de criatu ras em uma caverna (veja acima). Espaço aberto: fendas se abrem no chão. Cada criatura na área precisa ro lar um dado; em um resultado ímpar, uma fenda se abre sob ela e ela precisa fazer um teste de Reflexos; se falhar, cai na fenda. A criatura pode escapar gastando uma ação completa e passando em um teste de Atletismo. No início do seu próximo turno as fendas se fecham, matando todos que estejam dentro delas.Penhasco: o penhasco racha, criando um desmoronamento que percorre uma distância horizontal igual à distância da queda. Por exemplo, um penhasco com 30m de altura desmorona em uma área de 30m de comprimento além da base. Qualquer criatura no caminho sofre 12d6 pontos de dano de impacto e fica agarrada. Um teste de Reflexos reduz o dano à metade e evita ficar agarrado. Rio, lago ou pântano: fissuras se abrem sob a água, drenando-a e formando um lamaçal. Criaturas na área precisam fazer um teste de Reflexos para não afundarem na lama e ficarem agarradas. No início do seu próximo turno as fissuras se fecham, possivelmente afogando as criaturas que ficaram agarradas. Criaturas agarradas (efeito possível de caverna, construção, penhasco e rio, lago ou pântano) sofrem 1d6 pontos de dano por rodada até serem libertadas, o que exige uma ação completa e um teste de Atletismo (por parte da própria criatura ou de um aliado adjacente).
  dano_ou_cura:
    formulas: ["12d6", "1d6"]
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