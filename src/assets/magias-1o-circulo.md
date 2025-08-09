# Magias — 1º Círculo (Tormenta20 v1.3)

> Fonte: Capítulo 4 (PDF), extraído automaticamente do arquivo fornecido. Cada magia abaixo segue um bloco YAML parseável.

## Índice

- [Abençoar Alimentos](#abencoar-alimentos)
- [Acalmar Animal](#acalmar-animal)
- [Adaga Mental](#adaga-mental)
- [Alarme](#alarme)
- [Amedrontar](#amedrontar)
- [Área Escorregadia](#area-escorregadia)
- [Arma Espiritual](#arma-espiritual)
- [Armadura Arcana](#armadura-arcana)
- [Armamento da Natureza](#armamento-da-natureza)
- [Bênção](#bencao)
- [Caminhos da Natureza](#caminhos-da-natureza)
- [Comando](#comando)
- [Concentração de Combate](#concentracao-de-combate)
- [Conjurar Monstro](#conjurar-monstro)
- [Consagrar](#consagrar)
- [Controlar Plantas](#controlar-plantas)
- [Criar Elementos](#criar-elementos)
- [Criar Ilusão](#criar-ilusao)
- [Curar Ferimentos](#curar-ferimentos)
- [Despedaçar](#despedacar)
- [Detectar Ameaças](#detectar-ameacas)
- [Disfarce Ilusório](#disfarce-ilusorio)
- [Enfeitiçar](#enfeiticar)
- [Escudo da Fé](#escudo-da-fe)
- [Explosão de chamas](#explosao-de-chamas)
- [Imagem Espelhada](#imagem-espelhada)
- [Infligir Ferimentos](#infligir-ferimentos)
- [Leque Cromático](#leque-cromatico)
- [Orientação](#orientacao)
- [Perdição](#perdicao)
- [Primor Atlético](#primor-atletico)
- [Profanar](#profanar)
- [Proteção Divina](#protecao-divina)
- [Queda Suave](#queda-suave)
- [Raio do Enfraquecimento](#raio-do-enfraquecimento)
- [Santuário](#santuario)
- [Seta Infalível de Talude](#seta-infalivel-de-talude)
- [Sono](#sono)
- [Suporte Ambiental](#suporte-ambiental)
- [Teia](#teia)
- [Toque Chocante](#toque-chocante)
- [Tranca Arcana](#tranca-arcana)
- [Tranquilidade](#tranquilidade)
- [Transmutar Objetos](#transmutar-objetos)
- [Vitalidade Fantasma](#vitalidade-fantasma)


## Abençoar Alimentos {#abencoar-alimentos}

```yaml
id: abencoar-alimentos
nome: "Abençoar Alimentos"
pagina_pdf: 184
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 184
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_prayerofspirit.jpg"
  alt: "bênção"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Transmutação"
  tradicoes: ["Divina"]
  palavras_chave: ["transmutação"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "alimento para 1 criatura"
  duracao: "cena"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você purifica e abençoa uma porção de  comida ou dose de bebida."
  efeito_detalhado: |
    Você purifica e abençoa uma porção de  comida ou dose de bebida. Isso torna  um alimento sujo,
    estragado ou envenenado próprio para consumo. Além  disso, se for consumido até o final da  duração,
    o alimento oferece 5 PV temporários ou 1 PM temporário (além de  quaisquer bônus que já oferecesse).
    Bônus de alimentação duram um dia e  cada personagem só pode receber um  bônus de alimentação por
    dia.  Truque: o alimento é purificado (não  causa nenhum efeito nocivo se estava  estragado ou
    envenenado), mas não  fornece bônus ao ser consumido.  +1 PM: aumenta o número de alvos  em +1.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "muda a duração para permanente, o alvo para 1 frasco com água e  adiciona componente material (pó de  prata no valor de T$ 5). Em vez do nor mal, cria um frasco de água benta"
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


## Acalmar Animal {#acalmar-animal}

```yaml
id: acalmar-animal
nome: "Acalmar Animal"
pagina_pdf: 184
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 184
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_mindsteal.jpg"
  alt: "dominação/encantamento"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Encantamento"
  tradicoes: ["Divina"]
  palavras_chave: ["animal", "encantamento"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 animal"
  duracao: "cena"
  resistencia: "—"
mecanica:
  descricao_resumida: "O animal fica prestativo em relação a  você."
  efeito_detalhado: |
    O animal fica prestativo em relação a  você.  Ele não fica sob seu controle, mas  percebe suas
    palavras e ações da maneira mais favorável possível. Você recebe  +10 nos testes de Adestramento e
    Diplomacia que fizer contra o animal. Um alvo hostil ou que esteja envolvido  em um combate recebe
    +5 em seu teste  de resistência. Se você ou seus aliados  tomarem qualquer ação hostil contra o
    alvo, a magia é dissipada e ele retorna à  atitude que tinha antes (ou piorada, de  acordo com o
    mestre). Se tratar bem o  alvo, a atitude pode permanecer mesmo  após o término da magia. +2 PM:
    aumenta o número de alvos  em +1.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "muda o alcance para médio"
  - custo: 1
    efeito: "muda o alvo para 1 monstro ou  espírito com Inteligência –5 ou –4. Descrição das magias"
  - custo: 5
    efeito: "muda o alvo para 1 monstro  ou espírito. Requer 3º círculo"
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


## Adaga Mental {#adaga-mental}

```yaml
id: adaga-mental
nome: "Adaga Mental"
pagina_pdf: 184
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 184
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_charm.jpg"
  alt: "encantamento"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Encantamento"
  tradicoes: ["Arcana"]
  palavras_chave: ["encantamento"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 criatura"
  duracao: "instantâ nea"
  resistencia: "Vontade parcial"
mecanica:
  descricao_resumida: "Você manifesta e dispara uma adaga  imaterial contra a mente do alvo, que  sofre 2d6 pontos de dano psíquico e  fica atordoado por uma rodada."
  efeito_detalhado: |
    Você manifesta e dispara uma adaga  imaterial contra a mente do alvo, que  sofre 2d6 pontos de dano
    psíquico e  fica atordoado por uma rodada. Se passar no teste de resistência, sofre apenas metade do
    dano e evita a condição.  Uma criatura só pode ficar atordoada  por esta magia uma vez por cena. +2
    PM: aumenta o dano em +1d6.
  dano_ou_cura:
    formulas: ["1d6", "2d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "você lança a magia sem gesticular ou pronunciar palavras (o que per mite lançar esta magia de armadura) e  a adaga se torna invisível. Se o alvo falhar no teste de resistência, não percebe  que você lançou uma magia contra ele"
  - custo: 2
    efeito: "muda a duração para um dia.  Além do normal, você “finca” a adaga  na mente do alvo. Enquanto a magia  durar, você sabe a direção e localização  do alvo, desde que ele esteja no mes mo mundo"
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


## Alarme {#alarme}

```yaml
id: alarme
nome: "Alarme"
pagina_pdf: 184
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 184
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg"
  alt: "abjuração/escudo"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Abjuração"
  tradicoes: ["Arcana"]
  palavras_chave: ["abjuração"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 animal prestativo"
  area: "esfera com 9m de raio"
  duracao: "1 dia"
  resistencia: "Vontade anula"
mecanica:
  descricao_resumida: "Você invade a mente do alvo e altera ou  apaga suas memórias da última hora."
  efeito_detalhado: |
    Você invade a mente do alvo e altera ou  apaga suas memórias da última hora. +1 PM: aumenta o número
    de alvos  em +1. +2 PM: muda o alcance para toque e  o alvo para 1 criatura. Em vez do nor mal, o
    alvo aumenta uma categoria de  tamanho (seu equipamento se ajusta  ao novo tamanho). O alvo também
    recebe Força +2. Um alvo involuntário  pode fazer um teste de Fortitude para  negar o efeito. +3 PM:
    muda o alcance para toque e  o alvo para 1 criatura. Em vez do nor mal, o alvo diminui uma categoria
    de  tamanho (seu equipamento se ajusta ao novo tamanho). O alvo também  recebe Destreza +2. Um alvo
    involuntário pode fazer um teste de Fortitude  para negar o efeito. Requer 3º círculo.+2 PM: aumenta
    o número de alvos  em +1. +2 PM: aumenta o número de laços em  um alvo a sua escolha em +1 (bônus
    máximo limitado pelo círculo máximo  de magia que você pode lançar). +3 PM: em vez do normal, cada
    laço  é destruído automaticamente com um  único ataque bem-sucedido; porém,  cada laço destruído
    libera um choque  de energia que causa 1d8+1 pontos de  dano de essência na criatura amarrada.
    Requer 3º círculo.
  dano_ou_cura:
    formulas: ["1d8+1"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "muda o alcance para pessoal e  o alvo para área cone de 4,5m"
  - custo: 5
    efeito: "você pode alterar ou apagar as  memórias das últimas 24 horas. Alterar Tamanho Arcana 2 (Transmutação) Execução: padrão; Alcance: curto;  Alvo: 1 objeto; Duração: 1 dia.  Esta magia aumenta ou diminui o  tamanho de um item mundano em  até três categorias (um objeto Enor me vira Pequeno, por exemplo). Você  também pode mudar a consistência  do item, deixando-o rígido como pedra ou flexível como seda (isso não altera sua RD ou PV , apenas suas pro priedades físicas). Se lançar a magia  num objeto de uma criatura involuntária, ela pode fazer um teste de Vontade para anulá-la"
  - custo: 7
    efeito: "muda o alcance para toque, o  alvo para 1 criatura, a duração para per manente e a resistência para Fortitude  anula. Em vez do normal, se falhar na  resistência o alvo e seu equipamento  têm seu tamanho mudado para Minúsculo. O alvo tem seu valor de Força reduzido a –5 e seus deslocamentos reduzidos a 3m. Requer 4º círculo. Amarras Etéreas Arcana 2 (Convocação) Execução: padrão; Alcance: médio;  Alvo: 1 criatura; Duração: cena; Resistência: Reflexos anula.  Três laços de energia surgem e se enroscam no alvo, deixando-o agarrado. A vítima pode tentar se livrar, gastando uma ação padrão para fazer um  teste de Atletismo. Se passar, destrói  um laço, mais um laço adicional para  cada 5 pontos pelos quais superou a  CD. Os laços também podem ser atacados e destruídos: cada um tem Defesa 10, 10 PV , RD 5 e imunidade a  dano mágico. Se todos os laços forem  destruídos, a magia é dissipada. Por  serem feitos de energia, os laços afetam criaturas incorpóreas"
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


## Amedrontar {#amedrontar}

```yaml
id: amedrontar
nome: "Amedrontar"
pagina_pdf: 185
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 185
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_possession.jpg"
  alt: "medo/assombração"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Necromancia"
  tradicoes: ["Arcana"]
  palavras_chave: ["necromancia"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 animal ou humanoide"
  area: "esfera com 6m de raio"
  duracao: "cena"
  resistencia: "Vontade  parcial"
mecanica:
  descricao_resumida: "Esta magia cria uma onda de escuridão  que causa diversos efeitos."
  efeito_detalhado: |
    Esta magia cria uma onda de escuridão  que causa diversos efeitos. Magias de  até 3º círculo na área
    são dissipadas se  você passar num teste de Religião contra  a CD de cada uma. Seus aliados na área
    são protegidos por uma aura sombria e  recebem +4 na Defesa até o fim da cena.  Inimigos na área
    ficam enjoados por  1d4 rodadas (apenas uma vez por cena).  Anular a Luz anula Dispersar as Trevas
    (este  efeito tem duração instantânea). +2 PM: aumenta o bônus na Defesa  em +1. +9 PM: muda as
    magias dissipadas  para até 5º círculo. Requer 5º círculo. Aparência Perfeita Arcana 2 (Ilusão)
    Execução: padrão; Alcance: pessoal;  Alvo: você; Duração: cena.  Esta magia lhe concede um rosto
    idealizado, porte físico garboso, voz melodiosa e olhar sedutor. Caso seu Carisma seja 5 ou mais,
    você recebe +2  neste atributo. Do contrário, ele se tor -na 5 (isso conta como um bônus). Além
    disso, você recebe +5 em Diplomacia e Enganação. Quando a magia acaba, quaisquer observadores
    percebem a  mudança e tendem a suspeitar de você.  Da mesma maneira, pessoas que o viram sob o
    efeito da magia sentirão que  “algo está errado” ao vê-lo em condições normais. Quando a cena
    acabar,  você pode gastar os PM da magia novamente como uma ação livre para mantê-la ativa. Este
    efeito não fornece PV  ou PM adicionais.
  dano_ou_cura:
    formulas: ["1d4"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 4
    efeito: "muda as magias dissipadas  para até 4º círculo. Requer 4º círculo"
  - custo: 1
    efeito: "muda o alcance para toque e o  alvo para 1 humanoide. Aprisionamento Arcana 5 (Abjuração) Execução:  completa; Alcance:  curto;  Alvo: 1 criatura; Duração: permanente;  Resistência:  Vontade anula. Você cria uma prisão mágica para aprisionar uma criatura. Se falhar no teste  de resistência, o alvo sofre o efeito da  magia; se passar, fica imune a esta magia por uma semana. Enquanto estiver  aprisionada, a criatura não precisa respirar e alimentar-se, e não envelhece.  Magias de adivinhação não conseguem  localizar ou perceber o alvo. Ao lançar a  magia, você escolhe uma das seguintes  formas de prisão. O componente material varia, mas todos custam T$ 1.000. Acorrentamento:  o alvo é preso por cor rentes firmemente enraizadas no chão,  que o mantém no lugar. O alvo fica paralisado e não pode se mover ou ser  movido por qualquer meio. Componente  Material: uma fina corrente de mitral. Contenção Mínima:  o alvo diminui para  2 cm de altura e é preso dentro de uma  pedra preciosa ou objeto semelhante.  Luz passa através da pedra, permitin do que o alvo veja o lado de fora e seja  visto, mas nada mais pode passar, nem  por meio de teletransporte ou viagem  planar. A pedra não pode ser quebrada  enquanto o alvo estiver dentro. Componente Material: uma pedra preciosa,  como um diamante ou rubi. Prisão Dimensional: o alvo é transportado para um semiplano protegido contra  teletransporte e viagens planares. Pode  ser um labirinto, uma gaiola, uma torre  ou qualquer estrutura ou área confinada e pequena a sua escolha. Componente  Material: uma representação em miniatura da prisão, feita de jade. Sepultamento: o alvo é sepultado nas  profundezas da terra, em uma esfera  mágica. Nada pode destruir ou atravessar a esfera, nem mesmo teletranspor -te ou viagens planares. Componente Material: um pequeno orbe de adamante. Sono Eterno: o alvo adormece e não pode  ser acordado. Componente Material: fruta  preparada com ervas soníferas raras. Quando a magia é lançada, você deve  especificar uma condição que fará com  que ela termine e solte o alvo. A condição pode ser tão específica ou elaborada quanto você quiser, mas deve  ser possível de acontecer. As condições  podem se basear no nome, identidade  ou divindade padroeira de uma criatu ra, ou em ações ou qualidades observáveis, mas nunca em estatísticas intangíveis, como nível, classe ou pontos de  vida. O mestre tem a palavra final so bre se uma condição é válida ou não"
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


## Área Escorregadia {#area-escorregadia}

```yaml
id: area-escorregadia
nome: "Área Escorregadia"
pagina_pdf: 186
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 186
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg"
  alt: "ícone padrão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Convocação"
  tradicoes: ["Arcana"]
  palavras_chave: []
execucao:
  acao: "padrão"
  alcance: "curto"
  area: "quadrado de 3m ou 1  objeto"
  duracao: "cena"
  resistencia: "Reflexos (veja texto)"
mecanica:
  descricao_resumida: "Esta magia recobre uma superfície com  uma substância gordurosa e escorrega dia."
  efeito_detalhado: |
    Esta magia recobre uma superfície com  uma substância gordurosa e escorrega dia. Criaturas na área
    devem passar na  resistência para não cair. Nas rodadas  seguintes, criaturas que tentem movimentar-
    se pela área devem fazer testes  de Acrobacia para equilíbrio (CD 10). Área Escorregadia pode tornar
    um item  escorregadio. Uma criatura segurando um objeto afetado deve passar na  resistência para não
    deixar o item cair  cada vez que usá-lo. +1 PM: aumenta a área em +1 quadrado de 1,5m.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "muda a CD dos testes de  Acrobacia para 15"
  - custo: 5
    efeito: "muda a CD dos testes de Acro bacia para 20"
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


## Arma Espiritual {#arma-espiritual}

```yaml
id: arma-espiritual
nome: "Arma Espiritual"
pagina_pdf: 186
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 186
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/inv_sword_07.jpg"
  alt: "arma/armadura mágica"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Convocação"
  tradicoes: ["Divina"]
  palavras_chave: ["arma"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  alvo: "você"
  duracao: "cena"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você invoca a arma preferida de sua  divindade (caso sua divindade possua  uma), que surge flutuando a seu lado."
  efeito_detalhado: |
    Você invoca a arma preferida de sua  divindade (caso sua divindade possua  uma), que surge flutuando
    a seu lado.  Uma vez por rodada, quando você so fre um ataque corpo a corpo, pode  usar uma reação
    para que a arma cause automaticamente 2d6 pontos de  dano do tipo da arma — por exemplo,  uma espada
    longa causa dano de corte  — no oponente que fez o ataque. Esta  magia se dissipa se você morrer. +1
    PM: além do normal, a arma o pro tege. Você recebe +1 na Defesa. 180  Kellyanne Pontes
    kelly.ayame@gmail.com  Magia +2 PM: aumenta o bônus na Defesa  em +1.  +2 PM: aumenta o dano causado
    pela  arma em +1d6 (bônus máximo limitado pelo círculo máximo de magia que  você pode lançar). +5
    PM: invoca duas armas, permitin do que você contra-ataque (ou ataque,  se usar o aprimoramento
    acima) duas  vezes por rodada. Requer 3º círculo. Arma Mágica Universal 1 (Transmutação) Execução:
    padrão; Alcance: toque; Alvo:  1 arma empunhada; Duração: cena.  A arma é considerada mágica e
    fornece  +1 nos testes de ataque e rolagens de  dano (isso conta como um bônus de encanto). Caso
    você esteja empunhando a  arma, pode usar seu atributo-chave de  magias em vez do atributo original
    nos  testes de ataque (não cumulativo com  efeitos que somam este atributo). +2 PM: aumenta o bônus
    em +1  (bônus máximo limitado pelo círculo  máximo de magia que você pode lançar). +2 PM: a arma
    causa +1d6 de dano de  ácido, eletricidade, fogo ou frio, escolhido quando a magia é lançada. Este
    aprimoramento só pode ser usado uma vez. +3 PM: muda o bônus de dano do  aprimoramento acima para
    +2d6.
  dano_ou_cura:
    formulas: ["1d6", "2d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "muda a duração para susten tada. Além do normal, uma vez por ro dada, você pode gastar uma ação livre  para fazer a arma acertar automatica mente um alvo adjacente. Se a arma  atacar, não poderá contra-atacar até  seu próximo turno. Requer 2º círculo"
  - custo: 2
    efeito: "muda o tipo do dano para essência. Requer 2º círculo"
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


## Armadura Arcana {#armadura-arcana}

```yaml
id: armadura-arcana
nome: "Armadura Arcana"
pagina_pdf: 187
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 187
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/inv_sword_07.jpg"
  alt: "arma/armadura mágica"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Abjuração"
  tradicoes: ["Arcana"]
  palavras_chave: ["abjuração", "arma", "armadura"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  alvo: "você"
  duracao: "cena"
  resistencia: "—"
mecanica:
  descricao_resumida: "Esta magia cria uma película proteto ra invisível, mas tangível, fornecendo  +5 na Defesa."
  efeito_detalhado: |
    Esta magia cria uma película proteto ra invisível, mas tangível, fornecendo  +5 na Defesa. Esse
    bônus é cumula tivo com outras magias, mas não com  bônus fornecido por armaduras. +1 PM: muda a
    execução para reação.  Em vez do normal, quando sofre um  ataque, você cria um escudo mágico que
    fornece +5 na Defesa contra esse ataque (cumulativo com o bônus do efeito básico desta magia e de
    armaduras). +2 PM: aumenta o bônus na Defesa  em +1.  +2
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


## Armamento da Natureza {#armamento-da-natureza}

```yaml
id: armamento-da-natureza
nome: "Armamento da Natureza"
pagina_pdf: 187
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 187
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/inv_sword_07.jpg"
  alt: "arma/armadura mágica"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Transmutação"
  tradicoes: ["Divina"]
  palavras_chave: ["arma", "natureza", "transmutação"]
execucao:
  acao: "padrão"
  alcance: "toque"
  alvo: "1 arma (veja texto)"
  area: "esfera com 9m de raio"
  efeito: "4 esferas elementais"
  duracao: "cena"
  resistencia: "Vonta de anula, Fortitude parcial"
mecanica:
  descricao_resumida: "Criada pelo arquimago Vectorius, esta  magia produz quatro esferas, de ácido, eletricidade, fogo e frio, que voam  até um ponto a sua escolha."
  efeito_detalhado: |
    Criada pelo arquimago Vectorius, esta  magia produz quatro esferas, de ácido, eletricidade, fogo e
    frio, que voam  até um ponto a sua escolha. Quando  atingem o ponto escolhido, explodem  causando
    6d6 pontos de dano de seu  respectivo tipo numa área com 12m  de raio. Um teste de Reflexos reduz o
    dano à metade. Você pode mirar cada  esfera em uma criatura ou ponto dife rente. Uma criatura ao
    alcance da explosão de mais de uma esfera deve fazer um teste de resistência para cada  uma. Além
    disso, as esferas causam os  seguintes efeitos em criaturas que falharem em seus testes de
    resistência: • Ácido:  vulnerável até o fim da cena. • Elétrica: atordoado por 1 rodada  (apenas uma
    vez por cena). • Fogo: em chamas. • Frio: lento até o fim da cena. +5 PM: aumenta o dano de cada
    esfe ra em +2d6.
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


## Bênção {#bencao}

```yaml
id: bencao
nome: "Bênção"
pagina_pdf: 188
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 188
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_charm.jpg"
  alt: "encantamento"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Encantamento"
  tradicoes: ["Divina"]
  palavras_chave: ["encantamento"]
execucao:
  acao: "padrão"
  alcance: "curto"
  area: "esfera com 6m de raio"
  efeito: "buraco negro"
  duracao: "cena"
  resistencia: "Refle xos reduz à metade"
mecanica:
  descricao_resumida: "Esta magia cria um vácuo capaz de sugar tudo nas proximidades."
  efeito_detalhado: |
    Esta magia cria um vácuo capaz de sugar tudo nas proximidades. Escolha  um espaço desocupado para o
    buraco  negro. No início de cada um de seus  três turnos seguintes, todas as criatu ras a até
    alcance longo do buraco negro, incluindo você, devem fazer um  182  Kellyanne Pontes
    kelly.ayame@gmail.com  Magia teste de Fortitude. Em caso de falha,  ficam caídas e são puxadas 30m
    na direção do buraco. Objetos soltos também são puxados. Criaturas podem  gastar uma ação de
    movimento para se  segurar em algum objeto fixo, receben do +2 em seus testes de resistência.
    Criaturas e objetos que iniciem seu  turno no espaço do buraco negro devem gastar uma ação de
    movimento  e fazer um teste de Fortitude. Se passarem, podem escapar se arrastando  (deslocamento de
    1,5m) para longe  dele. Se falharem, perdem a ação (mas  podem gastar outra para tentar novamente).
    Se terminarem seu turno no  espaço do buraco negro, são sugadas,  desaparecendo para sempre. Não se
    conhece o destino das coisas  sugadas pelo buraco negro. Alguns estudiosos sugerem que são enviadas
    para outros mundos — provavelmente  Sombria, reino da deusa Tenebra.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 5
    efeito: "muda o efeito para que você  não seja afetado"
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


## Caminhos da Natureza {#caminhos-da-natureza}

```yaml
id: caminhos-da-natureza
nome: "Caminhos da Natureza"
pagina_pdf: 189
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 189
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_protectionformnature.jpg"
  alt: "natureza"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Convocação"
  tradicoes: ["Divina"]
  palavras_chave: ["natureza"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "criaturas escolhidas"
  area: "quadrado com 18m de lado"
  duracao: "1 dia"
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
    Círculo da Justiça Divina 2 (Abjuração) Execução: completa; Alcance: curto;  Área: esfera com 9m de
    raio; Duração:  1 dia; Resistência: Vontade parcial. Também conhecida como Lágrimas de  Hyninn ,
    esta magia é usada em tribunais e para proteger áreas sensíveis.  Criaturas na área sofrem –10 em
    testes de Acrobacia, Enganação, Furtividade e Ladinagem e não podem mentir  deliberadamente — mas
    podem tentar  evitar perguntas que normalmente responderiam com uma mentira (sendo  evasivas ou
    cometendo omissões, por  exemplo). Uma criatura que passe na  resistência tem as penalidades
    reduzidas para –5 e pode mentir. +7 PM: muda a duração para permanente e adiciona componente
    material  (balança de prata no valor de T$ 5.000). 183  Kellyanne Pontes kelly.ayame@gmail.com
    Capítulo Quatro Círculo da Restauração Divina 4 (Evocação) Execução:  padrão; Alcance:  curto;
    Área:  esfera com 3m de raio; Duração: 5 rodadas.  Você evoca um círculo de luz que  emana uma
    energia poderosa. Qualquer criatura viva que termine o tur no dentro do círculo recupera 3d8+3  PV e
    1 PM. Mortos-vivos e criaturas  que sofrem dano por luz perdem PV e  PM na mesma quantidade. Uma
    criatura pode recuperar no máximo 5 PM  por dia com esta magia. +2 PM: aumenta a regeneração de PV
    em 1d8+1. cólera de azgher Divina 4 (evocação) Execução : padrão; Alcance : médio;  Área : esfera
    com 6m de raio; Duração:  instantânea. Resistência : Reflexos par cial. Você cria um fulgor dourado
    e intenso.  Criaturas na área ficam cegas por 1d4  rodadas e em chamas, e sofrem 10d6  pontos de
    dano de fogo (mortos-vivos  sofrem 10d8 pontos de dano). Uma  criatura que passe no teste de
    resistên cia não fica cega nem em chamas e so fre metade do dano. +2 PM: aumenta o dano em +2d6
    (+2d8 contra mortos-vivos). +2 PM: aumenta a área em +6m de raio. +1 PM: aumenta o dano de fogo em
    +1d6. +1 PM: aumenta o dano de luz em +1d6.
  dano_ou_cura:
    formulas: ["10d6", "10d8", "15d6", "1d4", "1d6", "1d8+1", "2d6", "2d8", "3d8+3"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "muda a execução para ação  padrão, o alcance para pessoal, o alvo  para você, a duração para cena e a resistência para nenhuma. Em vez do  normal, qualquer criatura ou objeto  invisível em alcance curto se torna visível. Isso não dissipa o efeito mágico;  se sair do seu alcance, a criatura ou objeto voltam a ficar invisíveis"
  - custo: 3
    efeito: "muda a penalidade nas perícias para –10 (se passar na resistência)  e –20 (se falhar). Requer 4º círculo"
  - custo: 5
    efeito: "a luz purificadora do Deus-Sol  dissipa todas as magias de necroman cia ativas na área. Requer 5º círculo. Coluna de Chamas Divina 3 (Evocação) Execução: padrão; Alcance: longo;  Área: cilindro com 3m de raio e 30m  de altura; Duração: instantânea; Resistência: Reflexos reduz à metade.  Um pilar de fogo sagrado desce dos  céus, causando 6d6 pontos de dano de  fogo mais 6d6 pontos de dano de luz  nas criaturas e objetos livres na área"
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


## Comando {#comando}

```yaml
id: comando
nome: "Comando"
pagina_pdf: 190
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 190
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_mindsteal.jpg"
  alt: "dominação/encantamento"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Encantamento"
  tradicoes: ["Divina"]
  palavras_chave: ["encantamento"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 humanoide"
  duracao: "1 rodada"
  resistencia: "Vontade anula"
mecanica:
  descricao_resumida: "Você dá uma ordem irresistível, que o  alvo deve ser capaz de ouvir (mas não precisa entender)."
  efeito_detalhado: |
    Você dá uma ordem irresistível, que o  alvo deve ser capaz de ouvir (mas não precisa entender). Se
    falhar na resis tência, ele deve obedecer ao comando   em seu próprio turno da melhor maneira
    possível. Escolha um dos efeitos. Fuja: o alvo gasta seu turno se afastando  de você (usando todas
    as suas ações). Largue: o alvo solta quaisquer itens que  esteja segurando e não pode pegá-los
    novamente até o início de seu próximo  turno. Como esta é uma ação livre, ele  ainda pode executar
    outras ações (exceto pegar aquilo que largou). Pare: o alvo fica pasmo (apenas uma  vez por cena).
    Senta: com uma ação livre, o alvo senta  no chão (se estava pendurado ou voando, desce até o chão).
    Ele pode fazer  outras ações, mas não se levantar até o  início de seu próximo turno. Venha: o alvo
    gasta seu turno se apro ximando de você (usando todas as  suas ações). +2 PM: aumenta a quantidade
    de alvos  em +1. Compreensão Universal 1 (Adivinhação) Execução: padrão; Alcance: toque;  Alvo: 1
    criatura ou texto; Duração:  cena; Resistência: Vontade anula (veja  descrição). Essa magia lhe
    confere compreensão  sobrenatural. Você pode tocar um texto e entender as palavras mesmo que  não
    conheça o idioma. Se tocar numa  criatura inteligente, pode se comunicar  com ela mesmo que não
    tenham um  idioma em comum. Se tocar uma criatura não inteligente, como um animal,  pode perceber
    seus sentimentos. Você também pode gastar uma ação de  movimento para ouvir os pensamentos  de uma
    criatura tocada (você “ouve”  o que o alvo está pensando), mas um  alvo involuntário tem direito a
    um tes te de Vontade para proteger seus pensamentos e evitar este efeito. +1 PM: muda a execução
    para 1 minuto e a duração para instantânea. Em vez  do normal, você descobre 1d4+1 infor mações
    sobre os seguintes temas: terreno, animais, vegetais, minerais, cursos  d’água e presença de
    criaturas antinaturais numa região natural em que você  esteja. Você pode, por exemplo, desco brir a
    quantidade de cavernas (terreno),  se uma planta rara existe (vegetais) e  se há mortos-vivos
    (criaturas antinaturais) na região. +3 PM: aumenta o número de dados  de auxílio em +2.
  dano_ou_cura:
    formulas: ["1d4+1"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "muda o alvo para 1 criatura"
  - custo: 1
    efeito: "muda o alcance para curto"
  - custo: 2
    efeito: "muda o alcance para curto e  o alvo para criaturas escolhidas. Você  pode entender todas as criaturas afeta das, mas só pode ouvir os pensamen tos de uma por vez"
  - custo: 2
    efeito: "muda o alvo para 1 criatura.  Em vez do normal, pode vasculhar os  pensamentos do alvo para extrair informações. O alvo tem direito a um  teste de Vontade para anular este efei to. O mestre decide se a criatura sabe ou não a informação que você procura.  Requer 2º círculo"
  - custo: 5
    efeito: "muda o alcance para pessoal  e o alvo para você. Em vez do normal,  você pode falar, entender e escrever  qualquer idioma. Requer 3º círculo. Comunhão  com a Natureza Divina 3 (Adivinhação) Execução: completa; Alcance: pessoal; Alvo: você; Duração: 1 dia.  Após uma breve união com a natureza  local, você obtém informações e intuições sobre a região em que está, numa  distância equivalente a um dia de viagem. Você recebe 6d4 dados de auxílio.  Enquanto a magia durar, sempre que for  realizar um teste de perícia em áreas naturais, você pode gastar 2d4 (mais 2d4  para cada círculo de magias acima do 3º  que puder lançar) e adicionar o resultado rolado como bônus no teste. A magia  termina se você ficar sem dados"
  - custo: 4
    efeito: "muda o tipo dos dados de  auxílio para d6"
  - custo: 8
    efeito: "muda o tipo dos dados de  auxílio para d8. Conceder Milagre Divina 4 (Encantamento) Execução: padrão; Alcance: toque;  Alvo: 1 criatura; Duração: permanente até ser descarregada. Você transfere um pouco de seu poder  divino a outra criatura. Escolha uma  magia de até 2º círculo que você co nheça; o alvo pode lançar essa magia  uma vez, sem pagar o custo dela em  PM (aprimoramentos podem ser usados, mas o alvo deve gastar seus pró prios PM). Você sofre uma penalidade  de –3 PM até que o alvo lance a magia"
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


## Concentração de Combate {#concentracao-de-combate}

```yaml
id: concentracao-de-combate
nome: "Concentração de Combate"
pagina_pdf: 191
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 191
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane02.jpg"
  alt: "adivinhação"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Adivinhação"
  tradicoes: ["Arcana"]
  palavras_chave: ["adivinhação"]
execucao:
  acao: "livre"
  alcance: "pessoal"
  alvo: "você"
  efeito: "parceiro elemental"
  duracao: "1 rodada"
  resistencia: "—"
mecanica:
  descricao_resumida: "Esta magia transforma uma porção de  um elemento inerte em uma criatura  elemental Grande do tipo do elemen to alvo."
  efeito_detalhado: |
    Esta magia transforma uma porção de  um elemento inerte em uma criatura  elemental Grande do tipo do
    elemen to alvo. Por exemplo, lançar esta magia numa fogueira ou tocha cria um  elemental do fogo.
    Você pode criar elementais do ar, água, fogo e terra com  essa magia. O elemental obedece a to dos
    os seus comandos e pode funcio -nar como um parceiro do tipo destrui dor (cuja habilidade custa
    apenas 2 PM  para ser usada) e mais um tipo entre os  indicados na lista abaixo, ambos mes tres. O
    elemental auxilia apenas você e  não conta em seu limite de parceiros. Ar: assassino, perseguidor ou
    vigilante.  Dano de eletricidade. Água: ajudante, guardião ou médico.  Dano de frio. Fogo: atirador,
    combatente ou fortão.  Dano de fogo. Terra: combatente, guardião ou montaria.  Dano de impacto.
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


## Conjurar Monstro {#conjurar-monstro}

```yaml
id: conjurar-monstro
nome: "Conjurar Monstro"
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
  circulo: 1
  escola: "Convocação"
  tradicoes: ["Arcana"]
  palavras_chave: []
execucao:
  acao: "completa"
  alcance: "curto"
  efeito: "1 criatura conjurada"
  duracao: "sustentada"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você conjura um monstro Pequeno  que ataca seus inimigos."
  efeito_detalhado: |
    Você conjura um monstro Pequeno  que ataca seus inimigos. Você esco lhe a aparência do monstro e o
    tipo de  dano que ele pode causar, entre cor te, impacto e perfuração. No entanto, ele não é uma
    criatura real, e sim   uma criatura feita de energia. Se for  destruído, ou quando a magia acaba,
    desaparece com um brilho, sem deixar nada para trás. Você só pode ter  um monstro conjurado por esta
    magia por vez. O monstro surge em um espaço desocupado a sua escolha dentro do alcance e age no
    início de cada um de  seus turnos, a partir da próxima rodada. O monstro tem deslocamento 9m  e pode
    fazer uma ação de movimento por rodada. Você pode gastar uma  ação padrão para dar uma das seguintes
    ordens a ele. Mover: o monstro se movimenta o do bro do deslocamento nessa rodada. Atacar: o monstro
    causa 2d4+2 pontos  de dano  de corte, impacto ou perfuração a uma criatura adjacente. Lançar Magia:
    o monstro pode servir  como ponto de origem para uma magia lançada por você com execução de  uma
    ação padrão ou menor. Ele pode  descarregar um Toque Chocante em um inimigo distante, ou mesmo
    “cuspir”  uma Bola de Fogo! Você gasta PM nor malmente para lançar a magia.   Outros usos criativos
    para o monstro  conjurado ficam a critério do mestre.  Ele não age sem receber uma ordem. Para
    efeitos de jogo, o monstro conju rado tem For 2, Des 3 e todos os outros atributos nulos.  Ele tem
    Defesa  igual a sua, 20 PV ,  usa o seu valor em  Reflexos e é imune a efeitos que pedem um teste de
    Fortitude ou Vontade. +1 PM: aumenta o deslocamento do  monstro em +3m.  +2 PM: aumenta os PV do
    monstro  em +10 para cada categoria de tamanho a partir de Pequeno (+10 PV para  Pequeno, +20 PV
    para Médio etc.).  +2 PM: aumenta o tamanho do mons tro para Médio. Ele tem For 4, Des 3,  45 PV ,
    deslocamento 12m e seu ataque  causa 2d6+6 pontos de dano.  +5 PM: aumenta o tamanho do monstro para
    Grande. Ele tem For 7, Des 2,  75 PV , deslocamento 12m e seu ataque causa 4d6+10 pontos de dano
    com 3m de alcance. Requer 2º círculo. +9 PM: aumenta o tamanho do  monstro para Enorme. Ele tem For
    11, Des 1, 110 PV , deslocamento 15m  e seu ataque causa 4d8+15 pontos de  dano com 4,5m de alcance.
    Requer 4º  círculo. +14 PM: aumenta o tamanho do  monstro para Colossal. Ele tem For  15, Des 0, 180
    PV , deslocamento 15m  e seu ataque causa 4d12+20 pontos  de dano com 9m de alcance. Requer  5º
    círculo. 185  Kellyanne Pontes kelly.ayame@gmail.com  Capítulo Quatro Conjurar  Mortos-Vivos
    Universal 2 (Necromancia) Execução: completa; Alcance: curto; Efeito: 6 mortos-vivos; Duração:
    sustentada. Você conjura seis esqueletos capangas  de tamanho Médio feitos de energia  negativa em
    espaços desocupados dentro do alcance. Você pode gastar uma  ação de movimento para fazer os mor
    tos-vivos andarem (eles têm desloca mento 9m) ou uma ação padrão para  fazê-los causar dano a
    criaturas adjacentes (1d6+2 pontos de dano de trevas cada). Os esqueletos têm For 2,  Des 2, Defesa
    18 e todos os outros  atributos nulos; eles têm 1 PV e falham automaticamente em qualquer  teste de
    resistência ou oposto, mas são  imunes a atordoamento,  cansaço, dano  não letal, doença,
    encantamento , frio,  ilusão, paralisia, sono e veneno. Eles  desaparecem quando são reduzidos a  0
    PV ou no fim da cena. Os mortos -vivos não agem sem receber uma or dem. Usos criativos para capangas
    fora  de combate ficam a critério do mestre. +2 PM: aumenta o número de mortos -vivos conjurados em
    +1.  +7 PM: em vez de esqueletos, conjura  sombras. Requer 4º círculo. Carniçal: como esqueletos,
    mas têm  For 3, Des 3, Defesa 27 e causam  1d8+3 pontos de dano de trevas mais  perda de 1d8 PV por
    veneno. Além  disso, criaturas atingidas por um car niçal devem passar num teste de For titude ou
    ficam paralisadas por 1 ro dada. Uma criatura que passe no teste  de resistência fica imune à
    paralisia  dos carniçais por um dia. Sombra: como esqueletos, mas têm  Des 4, Defesa 35, são
    incorpóreas e  causam 2d10 pontos de dano de trevas. Além disso, criaturas vivas atingidas por uma
    sombra devem passar  num teste de Fortitude ou perdem 1d4  PM. Sombras perdem a habilidade
    incorpóreo quando expostas à luz do sol.
  dano_ou_cura:
    formulas: ["1d4", "1d6+2", "1d8", "1d8+3", "2d10", "2d4+2", "2d6+6", "4d12+20", "4d6+10", "4d8+15"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "o monstro ganha deslocamen to de escalada ou natação igual ao seu  deslocamento terrestre"
  - custo: 1
    efeito: "muda o tipo de dano do ataque do monstro para ácido, fogo, frio  ou eletricidade"
  - custo: 2
    efeito: "o monstro ganha  redução 5  contra dois tipos de dano (por exem plo, corte e frio)"
  - custo: 4
    efeito: "o monstro ganha uma nova  ordem: Arma de Sopro. Para dar essa or dem você gasta 1 PM, e faz o monstro  causar o dobro de seu dano de ataque  em um cone de 6m a partir de si (Reflexos reduz à metade)"
  - custo: 9
    efeito: "o monstro ganha deslocamento de voo igual ao dobro do deslocamento"
  - custo: 9
    efeito: "o monstro ganha imunidade  contra dois tipos de dano"
  - custo: 3
    efeito: "em vez de esqueletos, conjura  carniçais. Requer 3º círculo"
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


## Consagrar {#consagrar}

```yaml
id: consagrar
nome: "Consagrar"
pagina_pdf: 192
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 192
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningbolt.jpg"
  alt: "evocação/energia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Evocação"
  tradicoes: ["Divina"]
  palavras_chave: ["evocação"]
execucao:
  acao: "padrão"
  alcance: "longo"
  alvo: "você"
  area: "esfera com 9m de raio"
  duracao: "1 dia"
  resistencia: "veja texto"
mecanica:
  descricao_resumida: "Você controla os movimentos e com portamentos da água."
  efeito_detalhado: |
    Você controla os movimentos e com portamentos da água. Ao lançar a magia, escolha um dos efeitos
    abaixo. Congelar: toda a água mundana na área  é congelada. Criaturas nadando na  área ficam
    imóveis; escapar exige gastar uma ação padrão e passar num tes te de Atletismo ou Acrobacia.
    Derreter: gelo mundano na área vira  água e a magia termina. A critério do  mestre, isso pode criar
    terreno difícil. Enchente: eleva o nível da água mundana na área em até 4,5m. A sua escolha,  muda
    área para alvo: uma embarcação.  O alvo recebe +3m em seu desloca mento pela duração do efeito.
    Evaporar: toda a água e gelo mundano  na área evaporam instantaneamente e  a magia termina.
    Elementais da água,  plantas monstruosas e criaturas com  imunidade a frio na área sofrem 10d8
    pontos de dano de fogo; outras criatu ras vivas recebem metade desse dano  (Fortitude reduz à
    metade).  186  Kellyanne Pontes kelly.ayame@gmail.com  Magia Partir: diminui o nível de toda água
    mundana na área em até 4,5m. Em um  corpo d’água raso, isso abre um cami nho seco, que pode ser
    atravessado a  pé. Em um corpo d’água profundo, cria  um redemoinho que pode prender bar cos (um
    teste de Pilotagem permite ao  piloto livrar a embarcação). Elemen tais da água na área ficam
    lentos. +2 PM: aumenta o dano em +2d8. Controlar Fogo Divina 2 (Evocação) Execução: padrão; Alcance:
    curto;  Alvo: veja texto; Duração: cena.  Você pode criar, moldar, mover ou extinguir chamas e
    emanações de calor. Ao  lançar a magia, escolha um dos efeitos. Chamejar: o alvo é armas escolhidas.
    Elas causam +1d6 de dano de fogo.  Também afeta armas naturais e ataques desarmados. Esquentar: o
    alvo é 1 objeto, que come ça a esquentar. Ele sofre 1d6 pontos de  dano de fogo por rodada e causa o
    mes mo dano a qualquer criatura que o esteja segurando ou vestindo. A critério  do mestre, o objeto
    ou a criatura vestindo-o também podem ficar em chamas. Uma criatura pode gastar uma  ação completa
    para resfriar o objeto (jogando areia ou se jogando numa  fonte de água próxima, por exemplo) e
    cancelar o efeito da magia. Extinguir: o alvo é 1 chama de tamanho  Grande ou menor, que é apagada.
    Isso  cria uma nuvem de fumaça que ocu pa uma esfera com 3m de raio centra da onde estava a chama.
    Dentro da fumaça, criaturas têm camuflagem leve. Modelar: o alvo é 1 chama de tamanho Grande ou
    menor. A cada rodada, você pode gastar uma ação livre  para movimentá-la 9m em qualquer  direção. Se
    atravessar o espaço ocupado por uma criatura, causa 2d6 pontos de dano de fogo. Uma criatura só
    pode receber dano dessa maneira uma  vez por rodada. +2 PM: aumenta o dano em +1d6  (exceto do
    efeito chamejar). +3 PM: muda o alvo para 1 criatu ra composta principalmente por fogo,  lava ou
    magma (como um elemen tal do fogo) e a resistência para For titude parcial. Em vez do normal, se a
    criatura falhar no teste de resistência,  é reduzida a 0 PV . Se passar, sofre 5d6  pontos de dano.
    Controlar Madeira Divina 2 (Transmutação) Execução: padrão; Alcance: médio;  Alvo: 1 objeto de
    madeira Grande ou  menor; Duração: cena.  Você molda, retorce, altera ou repele  madeira. Se lançar
    esta magia num objeto de uma criatura involuntária, ela  tem direito a um teste de Vontade para
    anulá-la. Ao lançar a magia, escolha. Fortalecer: deixa o alvo mais resistente.  Armas têm seu dano
    aumentado em  um passo. Escudos têm seu bônus de  Defesa aumentado em +2 (isso é uma  melhoria no
    item, portanto é cumula tiva com outras magias). Esses e outros itens de madeira recebem +5 na  RD e
    dobram seus PV .  Modelar: muda a forma do alvo. Pode  transformar um galho em espada,  criar uma
    porta onde antes havia apenas uma parede, transformar um tronco em uma caixa... Mas não pode criar
    mecanismos complexos (como uma  besta) ou itens consumíveis.  Repelir: o alvo é repelido por você.
    Se  for uma arma, ataques feitos com ela  contra você falham automaticamente.  Se for uma porta ou
    outro objeto que  possa ser aberto, ele vai se abrir quando você se aproximar, mesmo que esteja
    trancado. Um objeto que vá atingi-lo, como uma carroça, tronco ou  barril, vai desviar ou parar
    adjacente a  você, sem lhe causar dano. Os efeitos  de regras em outros objetos de madeira ficam a
    cargo do mestre. Retorcer: estraga o alvo. Uma porta retorcida emperra (exigindo um teste  de Força
    contra CD 25 para ser aber ta). Armas e itens retorcidos impõem  –5 em testes de perícia. Escudos
    retor cidos deixam de oferecer bônus (mas  ainda impõem penalidades). Um barco  retorcido começa a
    afundar e naufraga  ao final da cena. Os efeitos de regras  em outros objetos de madeira ficam a
    cargo do mestre. +1 PM (Apenas Druidas): muda o  raio da área para 3km e duração para  1d4 dias.
    Controlar o Tempo Arcana 5 (Transmutação) Execução: padrão; Alcance:  veja texto;  Alvo: veja texto;
    Duração: veja texto.  Escolha um dos efeitos a seguir. Congelar o tempo: você gera uma bolha  do seu
    tamanho na qual o tempo passa  mais lentamente. Para outras criaturas,  a bolha surge e desaparece
    instantaneamente, mas, para você, ela dura 3 rodadas (o que fornece 2 turnos extras após  o atual),
    durante as quais você pode  agir e não é afetado por efeitos contínuos (como chamas). Porém, durante
    essas 3 rodadas, você e quaisquer efeitos que você gerar não podem sair da  área que você ocupava
    quando lançou  esta magia. Efeitos de área com duração maior que a da bolha voltam a agir
    normalmente quando ela termina.  Você  não pode congelar o tempo nem preparar  ações enquanto está
    sob esse efeito. Saltar no tempo: você e até 5 criaturas  voluntárias são transportadas de 1 a  24
    horas para o futuro, desaparecendo com um brilho. Vocês ressurgem  no mesmo lugar, com a mesma velo
    cidade e orientação; do seu ponto de  187  Kellyanne Pontes kelly.ayame@gmail.com  Capítulo Quatro
    vista, nenhum tempo se passou. Se  um objeto sólido agora ocupa o espaço de uma criatura, ela
    ressurge na  área vazia mais próxima. Voltar no tempo: você revive os últimos segundos. Todas as
    ações da ro dada anterior são desfeitas (incluindo  perda de PV e PM — exceto os gastos  nesta
    magia). Tudo retorna à posição  em que estava no início do seu turno  na última rodada e você é o
    único que  sabe o que acontecerá. Outros per sonagens devem repetir as mesmas  ações — exceto se
    você fizer algo a  respeito (como avisar seus aliados so bre o que vai acontecer). Você só pode
    reviver uma mesma rodada uma vez.
  dano_ou_cura:
    formulas: ["10d8", "1d4", "1d6", "2d6", "2d8", "5d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "muda a duração para sustentada e a resistência para Reflexos reduz à metade. Em vez do normal, você  deve escolher o seguinte efeito. Labaredas: a cada rodada, você pode gastar  uma ação de movimento para projetar uma labareda, acertando um alvo  em alcance curto a partir da chama. O  alvo sofre 4d6 pontos de dano de fogo  (Reflexos reduz à metade)"
  - custo: 1
    efeito: "muda o alcance para pessoal,  o alvo para você e a duração para um  dia. Você e seu equipamento se transformam em uma árvore de tamanho  Grande. Nessa forma, você não pode falar ou fazer ações físicas, mas con segue perceber seus arredores normalmente. Se for atacado nessa forma, a  magia é dissipada. Um teste de Sobrevivência (CD 30) revela que você não é  uma árvore verdadeira"
  - custo: 3
    efeito: "muda o alvo para área de quadrado com 9m de lado e a duração para  cena. Em vez do normal, qualquer  vegetação na área fica rígida e afiada. A área é considerada terreno difícil e criaturas que andem nela sofrem  1d6 pontos de dano de corte para cada  1,5m que avancem"
  - custo: 7
    efeito: "muda o tamanho do alvo para  Enorme ou menor. Requer 3º círculo"
  - custo: 12
    efeito: "muda o tamanho do alvo para  Colossal ou menor. Requer 4º círculo. Controlar o Clima Divina 4 (Transmutação) Execução:  completa; Alcance:  2km;  Área:  esfera com 2km de raio; Duração: 4d12 horas. Você muda o clima da área onde se  encontra, podendo criar qualquer  condição climática: chuva, neve, ventos, névoas... Veja o Capítulo 6: O  Mestre para os efeitos do clima"
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


## Controlar Plantas {#controlar-plantas}

```yaml
id: controlar-plantas
nome: "Controlar Plantas"
pagina_pdf: 194
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 194
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_protectionformnature.jpg"
  alt: "natureza"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Transmutação"
  tradicoes: ["Divina"]
  palavras_chave: ["planta", "transmutação"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 objeto de até 2 espaços"
  area: "quadrado com 9m de lado"
  duracao: "cena"
  resistencia: "Reflexos  anula"
mecanica:
  descricao_resumida: "Você invoca um objeto de qualquer lugar para sua mão."
  efeito_detalhado: |
    Você invoca um objeto de qualquer lugar para sua mão. O item deve ter sido  previamente preparado
    com uma runa  pessoal sua (ao custo de T$ 5).A magia não funciona se o objeto estiver com outra
    criatura, mas você saberá onde ele está e quem o está car regando (ou sua descrição física, caso
    não conheça a criatura). +2 PM: aumenta o número de alvos  em +1.  +2 PM: muda o alvo para 1 objeto
    de  até 10 espaços. Um objeto muito grande ou pesado para aparecer em suas  mãos surge em um espaço
    adjacente a  sua escolha. Crânio Voador  de Vladislav Arcana 2 (Necromancia) Execução: padrão;
    Alcance: médio;  Alvo: 1 criatura; Duração: instantânea;  Resistência: Fortitude parcial.  Esta
    magia cria um crânio envolto em  energia negativa. Quando atinge o  alvo, ele causa 4d8+4 pontos de
    dano  de trevas e se desfaz emitindo um som  horrendo, deixando abalado o alvo e  todos os inimigos
    num raio de 3m dele  (criaturas já abaladas ficam apavoradas  por 1d4 rodadas). Passar no teste de
    resistência diminui o dano à metade e  evita a condição (as demais criaturas  na área também tem
    direito ao teste  de resistência, para evitar a condição). +2 PM: aumenta o dano em +1d8+1. +2 PM:
    aumenta o número de alvos  em +1.
  dano_ou_cura:
    formulas: ["1d4", "1d8+1", "4d8+4"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "além do normal, até 1 hora  após ter lançado a magia, você pode  gastar uma ação de movimento para  enviar o objeto de volta para o local em  que ele estava antes"
  - custo: 1
    efeito: "muda o alvo para um baú Médio, a duração para permanente e adiciona sacrifício de 1 PM. Em vez do nor mal, você esconde o baú no Éter Entre  Mundos, com até 20 espaços de equipamento. A magia faz com que qualquer  objeto caiba no baú, independentemente do seu tamanho. Uma vez escondido,  você pode convocar o baú para um espaço livre adjacente, ou de volta para o  Éter, com uma ação padrão. Componente material: baú construído com matéria-prima da melhor qualidade (T$ 1.000).  Você deve ter em mãos uma miniatura  do baú, no valor de T$ 100, para invo car o baú verdadeiro"
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


## Criar Elementos {#criar-elementos}

```yaml
id: criar-elementos
nome: "Criar Elementos"
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
  circulo: 1
  escola: "Convocação"
  tradicoes: ["Divina"]
  palavras_chave: []
execucao:
  acao: "padrão"
  alcance: "curto"
  efeito: "elemento escolhido"
  duracao: "instantânea"
  resistencia: "—"
mecanica:
  descricao_resumida: "188  Kellyanne Pontes kelly."
  efeito_detalhado: |
    188  Kellyanne Pontes kelly.ayame@gmail.com  Magia Você cria uma pequena porção de um  elemento, a
    sua escolha. Os elemen tos criados são reais, não mágicos. Elementos físicos devem surgir em uma
    superfície. Em vez de um cubo, pode-se criar objetos simples (sem partes  móveis) feitos de gelo,
    terra ou pedra. Água: enche um recipiente de tamanho  Minúsculo (como um odre) com água  potável ou
    cria um cubo de gelo de tamanho Minúsculo. Ar: cria um vento fraco em um quadrado de 1,5m. Isso
    purifica a área de  qualquer gás ou fumaça, ou remove  névoa por uma rodada.  Fogo: cria uma chama
    que ilumina  como uma tocha. Você pode segurá-la  na palma de sua mão sem se queimar,  ou fazê-la
    surgir em um quadrado de  1,5m. Se uma criatura ou objeto esti ver no quadrado, sofre 1d6 pontos de
    dano de fogo; se falhar num teste de  Reflexos, fica em chamas.  Terra: cria um cubo de tamanho
    Minúsculo feito de terra, argila ou pedra.  +1 PM: aumenta a quantidade do elemento em um passo (uma
    categoria de  tamanho para água ou terra, +1 quadrado de 1,5m para ar e fogo).  +1 PM: se escolheu
    fogo, aumenta o  dano inicial de cada chama em +1d6.
  dano_ou_cura:
    formulas: ["1d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "muda o efeito para alvo 1 criatura ou objeto e a resistência para Reflexos reduz à metade. Se escolher  água ou terra, você arremessa o cubo  ou objeto criado no alvo, causando 2d4  pontos de dano de impacto. Para cada  categoria de tamanho acima de Minúsculo, o dano aumenta em um passo. O  cubo se desfaz em seguida"
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


## Criar Ilusão {#criar-ilusao}

```yaml
id: criar-ilusao
nome: "Criar Ilusão"
pagina_pdf: 195
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 195
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_invisibility.jpg"
  alt: "ilusão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Ilusão"
  tradicoes: ["Arcana"]
  palavras_chave: ["ilusão"]
execucao:
  acao: "padrão"
  alcance: "médio"
  alvo: "você"
  efeito: "ilusão que se estende a até 4  cubos de 1,5m"
  duracao: "cena"
  resistencia: "Vontade anula"
mecanica:
  descricao_resumida: "Uma cúpula de energia invisível o cer ca, impedindo a aproximação de cer tas criaturas."
  efeito_detalhado: |
    Uma cúpula de energia invisível o cer ca, impedindo a aproximação de cer tas criaturas. Escolha um
    tipo de cria-tura (animais, espíritos, monstros...)  ou uma raça de humanoides (elfos, go blins,
    minotauros..). Criaturas do grupo escolhido que tentem se aproximar  a menos de 3m de você (ou seja,
    que  tentem ficar adjacentes a você) devem  fazer um teste de Vontade. Se falharem, não conseguem,
    gastam a ação e  só podem tentar novamente na rodada  seguinte. Isso impede ataques corpo a  corpo,
    mas não ataques ou outros efei tos à distância. Se você tentar se apro ximar além do limite de 3m,
    rompe a  cúpula e a magia é dissipada.
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


## Curar Ferimentos {#curar-ferimentos}

```yaml
id: curar-ferimentos
nome: "Curar Ferimentos"
pagina_pdf: 195
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 195
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/inv_potion_76.jpg"
  alt: "cura/vida"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Evocação"
  tradicoes: ["Divina"]
  palavras_chave: ["cura", "evocação"]
execucao:
  acao: "padrão"
  alcance: "toque"
  alvo: "1 criatura"
  area: "esfera com 15m de raio"
  duracao: "instantânea"
  resistencia: "Fortitude parcial"
mecanica:
  descricao_resumida: "Após concentrar seu mana, você emana energia, como uma estrela em plena terra."
  efeito_detalhado: |
    Após concentrar seu mana, você emana energia, como uma estrela em plena terra. Todas as criaturas na
    área so frem 150 pontos de dano de essência e  todos os itens mágicos (exceto artefa tos) tornam-se
    mundanos. Você não é  afetado pela magia. Alvos que passem  no teste de Fortitude sofrem metade  do
    dano e seus itens mágicos voltam a  funcionar após um dia. 189  Kellyanne Pontes
    kelly.ayame@gmail.com  Capítulo Quatro +1 PM: aumenta o dano em +10. +5 PM: afeta apenas criaturas a
    sua  escolha. Desejo Arcana 5 (Transmutação) Execução:  completa; Alcance:  veja  texto; Alvo: veja
    texto; Duração:  veja  texto; Resistência:  veja texto. Esta é a mais poderosa das magias ar canas,
    permitindo alterar a realidade a  seu bel-prazer. Você pode: • Dissipar os efeitos de qualquer magia
    de 4º círculo ou menor. • Transportar até 10 criaturas voluntárias em alcance longo para qualquer
    outro local, em qualquer plano. • Desfazer um acontecimento recente. A magia permite que um teste
    realizado por uma criatura em alcance  longo na última rodada seja realizado  novamente. Por
    exemplo, se um aliado morreu na última rodada devido ao  ataque de um inimigo, você pode obrigar o
    inimigo a refazer esse ataque. Você pode desejar por algo ainda mais  poderoso. Nesse caso, a magia
    requer  o sacrifício de 2 PM e pode fazer coi sas como: • Criar um item mundano de até T$  30.000. •
    Duplicar os efeitos de qualquer magia de até 4º círculo. Caso a magia precise de um componente
    material para  ser lançada, ainda é necessário providenciar o componente. • Aumentar um atributo de
    uma criatura em +1. Cada atributo só pode ser  aumentado uma vez com Desejo. Desejo pode gerar
    efeitos ainda mais  poderosos, mas cuidado! Desejar a for tuna de um rei pode transportá-lo para  a
    sala de tesouro real, onde você po derá ser preso ou morto; desejar ser  imortal pode transformá-lo
    em mor to-vivo, e assim por diante. Qualquer  efeito que não se encaixe na lista acima  deve ser
    decidido pelo mestre. Desespero Esmagador Arcana 2 (Encantamento) Execução: padrão; Alcance:
    pessoal;  Área: cone de 6m; Duração: instantânea; Resistência: Vontade parcial. Humanoides na área
    são acometidos de  grande tristeza, ficando fracos e frustrados até o fim da cena (ou por uma
    rodada, se passarem no teste de resistência).+4 PM: aumenta o dano total em  +2d12 e o dano mínimo
    em +1d12.
  dano_ou_cura:
    formulas: ["1d12", "2d12"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "em vez do normal, as condições adquiridas são debilitado e esmorecido"
  - custo: 3
    efeito: "em vez do normal, afeta qualquer tipo de criatura"
  - custo: 3
    efeito: "além do normal, criaturas que  falhem na resistência ficam aos prantos (pasmos) por 1 rodada (apenas  uma vez por cena). Requer 3º círculo. Desintegrar Arcana 4 (Transmutação) Execução:  padrão; Alcance:  médio;  Alvo:  1 criatura ou objeto; Duração:   instantânea; Resistência:  Fortitude  parcial. Você dispara um raio fino e esverdeado  que causa 10d12 pontos de dano de  essência. Se o alvo passar no teste de  resistência, em vez disso sofre 2d12  pontos de dano. Independentemente do resultado do  teste de Fortitude, se os PV do alvo fo rem reduzidos a 0 ou menos, ele será  completamente desintegrado, restando  apenas pó"
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


## Despedaçar {#despedacar}

```yaml
id: despedacar
nome: "Despedaçar"
pagina_pdf: 196
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 196
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningbolt.jpg"
  alt: "evocação/energia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Evocação"
  tradicoes: ["Divina"]
  palavras_chave: ["evocação"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 criatura ou objeto mundano  Pequeno"
  area: "esfera com 6m de  raio"
  duracao: "instantânea"
  resistencia: "Fortitude parcial"
mecanica:
  descricao_resumida: "Esta magia emite um som alto e agudo."
  efeito_detalhado: |
    Esta magia emite um som alto e agudo. O alvo sofre 1d8+2 pontos de dano  de impacto (ou o dobro
    disso e igno ra RD se for um construto ou objeto  mundano) e fica atordoado por uma  rodada (apenas
    uma vez por cena). Um  teste de Fortitude reduz o dano à metade e evita o atordoamento.  Despeda çar
    anula Transmutar Objetos. +2 PM: aumenta o dano em +1d8+2.
  dano_ou_cura:
    formulas: ["1d8+2"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "muda o alvo para objeto mundano Médio. Requer 2º círculo"
  - custo: 5
    efeito: "muda o alvo para objeto mundano Grande. Requer 3º círculo"
  - custo: 9
    efeito: "muda o alvo para objeto mundano Enorme. Requer 4º círculo"
  - custo: 14
    efeito: "muda o alvo para objeto  mundano Colossal. Requer 5º círculo"
  - custo: 5
    efeito: "muda o alcance para pessoal  e  o alvo para área: esfera com 6m de  raio. Todas as criaturas e objetos mundanos na área são afetados.Despertar Consciência Divina 3 (Encantamento) Execução: completa; Alcance: toque;  Alvo: 1 animal ou planta; Duração:  1 dia. Você desperta a consciência de um animal ou planta. O alvo se torna um par ceiro veterano de um tipo a sua esco lha entre ajudante, combatente, fortão,  guardião, médico, perseguidor ou vigilante. Se usar esta magia em outro par ceiro que já possua, o nível de poder de  um de seus tipos aumenta em um passo (apenas uma vez por parceiro). Se já  for um parceiro mestre, recebe o bônus  de outro tipo de parceiro iniciante (entre as escolhas acima). O alvo se torna  uma criatura racional, com Inteligência  –1, e pode falar"
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


## Detectar Ameaças {#detectar-ameacas}

```yaml
id: detectar-ameacas
nome: "Detectar Ameaças"
pagina_pdf: 196
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 196
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane02.jpg"
  alt: "adivinhação"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Adivinhação"
  tradicoes: ["Divina"]
  palavras_chave: ["adivinhação"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  alvo: "1 criatura ou objeto"
  area: "esfera com 18m de raio"
  duracao: "cena, até ser descarregada"
  resistencia: "—"
mecanica:
  descricao_resumida: "190  Kellyanne Pontes kelly."
  efeito_detalhado: |
    190  Kellyanne Pontes kelly.ayame@gmail.com  Magia Esta magia oculta a presença do alvo  contra
    qualquer meio mágico de detec ção, inclusive detectar magia. Um con jurador que lance uma magia de
    adivinhação para detectar a presença ou  localização do alvo deve fazer um teste  de Vontade. Se
    falhar, a magia não funciona, mas os PM são gastos mesmo  assim. Se for lançada sobre uma criatura,
    Dificultar Detecção protege tanto a  criatura quanto seu equipamento.
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


## Disfarce Ilusório {#disfarce-ilusorio}

```yaml
id: disfarce-ilusorio
nome: "Disfarce Ilusório"
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
  circulo: 1
  escola: "Ilusão"
  tradicoes: ["Arcana"]
  palavras_chave: ["ilusão"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  alvo: "você"
  area: "esfera com 6m de raio"
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


## Enfeitiçar {#enfeiticar}

```yaml
id: enfeiticar
nome: "Enfeitiçar"
pagina_pdf: 197
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 197
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_mindsteal.jpg"
  alt: "dominação/encantamento"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Encantamento"
  tradicoes: ["Arcana"]
  palavras_chave: ["encantamento"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 humanoide"
  area: "quadrado de 6m de lado"
  efeito: "disco de energia com 1,5m de  diâmetro"
  duracao: "cena"
  resistencia: "Vontade anula"
mecanica:
  descricao_resumida: "Estacas de gelo irrompem do chão."
  efeito_detalhado: |
    Estacas de gelo irrompem do chão.  Criaturas na área sofrem 4d6 de dano  de corte, 4d6 de dano de
    frio e ficam  caídas. Passar no teste de Reflexos evita o dano de corte e a queda. As esta cas duram
    pela cena, o que torna a área  afetada terreno difícil, e concedem co bertura leve para criaturas
    dentro da  área ou atrás dela. As estacas são destruídas caso sofram qualquer quantidade de dano por
    fogo mágico. +3 PM: aumenta o dano de frio em  +2d6 e o dano de corte em +2d6.
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


## Escudo da Fé {#escudo-da-fe}

```yaml
id: escudo-da-fe
nome: "Escudo da Fé"
pagina_pdf: 198
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 198
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_devotionaura.jpg"
  alt: "proteção/escudo"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Abjuração"
  tradicoes: ["Divina"]
  palavras_chave: ["abjuração", "escudo"]
execucao:
  acao: "reação"
  alcance: "curto"
  alvo: "1 criatura"
  area: "esfera com 6m de raio"
  duracao: "1 turno"
  resistencia: "Vontade anula"
mecanica:
  descricao_resumida: "Resistência: Fortitude parcial."
  efeito_detalhado: |
    Resistência: Fortitude parcial. Esta magia cria uma forte explosão de  luzes estroboscópicas e sons
    cacofôni cos que desorientam as criaturas atingidas. O efeito que cada criatura sofre  depende do
    nível ou ND dela. Nível ou ND 4 ou menor: se falhar no tes te de resistência, fica inconsciente. Se
    passar, fica atordoada por 1d4 rodadas  e enjoada pelo resto da cena. Nível ou ND entre 5 e 9: se
    falhar no teste  de resistência, fica atordoada por 1d4  rodadas e enjoada pelo resto da cena.  Se
    passar, fica atordoada por 1 rodada  e enjoada por 1d4 rodadas.Nível ou ND 10 ou maior: se falhar no
    teste de resistência, fica atordoada por  1 rodada e enjoada por 1d4 rodadas.  Se passar, fica
    desprevenida e enjoada  por 1 rodada. Uma criatura só pode ser atordoada  por esta magia uma vez por
    cena.
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


## Explosão de chamas {#explosao-de-chamas}

```yaml
id: explosao-de-chamas
nome: "Explosão de chamas"
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
  circulo: 1
  escola: "Evocação"
  tradicoes: ["Arcana"]
  palavras_chave: ["evocação"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  alvo: "1 criatura"
  area: "cone de 6m"
  efeito: "1 globo"
  duracao: "instan tânea"
  resistencia: "Reflexos reduz à  metade"
mecanica:
  descricao_resumida: "Cria um globo flutuante e intangível,  com 50cm de diâmetro."
  efeito_detalhado: |
    Cria um globo flutuante e intangível,  com 50cm de diâmetro. O globo mostra  uma cena vista até uma
    semana atrás  por você ou por uma criatura que você  toque ao lançar a magia (mediante uma
    pergunta; a criatura pode fazer um teste  de Vontade para anular o efeito), permitindo que outras
    pessoas a vejam. +9 PM: muda o efeito para afetar magias de até 4º círculo. Requer 5º círculo.
    Guardião Divino Divina 4 (Convocação) Execução: padrão; Alcance: curto;  Efeito: elemental de luz
    invocado;  Duração: cena ou até ser descarregado. A magia invoca um elemental Pequeno,  com a forma
    de um orbe feito de luz di-vina. A criatura é incorpórea, imune a  dano e ilumina como uma tocha. O
    elemental tem 100 pontos de luz. Uma vez por rodada, durante o seu  turno, o elemental pode se
    movimen tar (deslocamento de voo 18m) e gastar quantos pontos de luz quiser para  curar dano ou
    condições de criaturas  em alcance curto, à taxa de 1 PV por  1 ponto de luz ou uma condição por 3
    pontos de luz (entre abalado, apavorado, alquebrado, atordoado, cego, con fuso, debilitado, enjoado,
    esmoreci do, exausto, fascinado, fatigado, fraco,  frustrado, ofuscado, pasmo, sangrando, surdo ou
    vulnerável). A magia é  encerrada quando o elemental fica sem  pontos de luz. Heroísmo Divina 3
    (Encantamento) Execução: padrão; Alcance: toque;  Alvo: 1 criatura; Duração: cena. Esta magia imbui
    uma criatura com  coragem e valentia. O alvo fica imune a  medo e recebe 40 PV temporários e +4  em
    testes de ataque e rolagens de dano  contra o inimigo de maior ND na cena. +2 PM: muda o bônus para
    +6. Hipnotismo arcana 1 (Encantamento) Execução: padrão; Alcance: curto;  Alvos: 1 animal ou
    humanoide; Duração: 1d4 rodadas; Resistência:  Vontade anula. Suas palavras e movimentos ritmados
    deixam o alvo fascinado. Esta magia só  afeta criaturas que possam perceber  você. Se usar esta
    magia em combate,  o alvo recebe +5 em seu teste de resis tência. Se a criatura passar, fica imune
    a este efeito por um dia. Truque: muda a duração para 1 ro dada. Em vez de fascinado, o alvo fica
    pasmo (apenas uma vez por cena). +3 PM: aumenta o dano em +2d6.
  dano_ou_cura:
    formulas: ["1d4", "2d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "o globo mostra uma cena vista  até um mês atrás"
  - custo: 2
    efeito: "como acima, até um ano atrás"
  - custo: 2
    efeito: "ao lançar a magia, você pode  tocar um cadáver. O globo mostra a última cena vista por essa criatura"
  - custo: 4
    efeito: "muda o alcance para longo e o  efeito para 10 globos. Todos mostram  a mesma cena. Globo de Invulnerabilidade Arcana 3 (Abjuração) Execução: padrão; Alcance: pessoal;  Alvo: você; Duração: sustentada.  Você é envolto por uma esfera mágica brilhante com 3m de raio, que detém qualquer magia de 2º círculo ou  menor. Nenhuma magia pode ser lançada contra um alvo dentro do globo  e magias de área não  têm efeito dentro dele. No entanto, magias ainda po dem ser lançadas de dentro para fora. Uma magia que dissipe outras magias  só dissipa o globo se for usada diretamente sobre você, não o afetando se  usada em área. Efeitos mágicos não  são dissipados quando entram na esfera, apenas suprimidos (voltam a funcionar fora do globo, caso sua duração  não tenha acabado). O globo é imóvel  e não tem efeito sobre criaturas ou objetos. Após lançá-lo, você pode entrar  ou sair livremente"
  - custo: 4
    efeito: "muda o efeito para afetar magias de até 3º círculo. Requer 4º círculo"
  - custo: 1
    efeito: "como o normal, mas alvos que  passem na resistência não sabem que  foram vítimas de uma magia"
  - custo: 2
    efeito: "muda o alvo para animais ou  humanoides escolhidos"
  - custo: 2
    efeito: "muda a duração para susten tada"
  - custo: 2
    efeito: "também afeta espíritos e  monstros na área. Requer 2º círculo"
  - custo: 5
    efeito: "também afeta construtos, espíritos, monstros e mortos-vivos na  área. Requer 3º círculo. 194  Kellyanne Pontes kelly.ayame@gmail.com  Magia Ilusão Lacerante Arcana 3 (Ilusão) Execução: padrão; Alcance: médio;  Área: cubo de 9m; Duração: sustenta da; Resistência: Vontade anula. Você cria uma ilusão de algum perigo mortal. Quando a magia é lançada, criaturas na área devem fazer um  teste de Vontade; uma falha signifi ca que a criatura acredita que a ilusão  é real e sofre 3d6 pontos de dano psíquico não letal. Sempre que uma criatura iniciar seu turno dentro da área,  deve repetir o teste de Vontade. Se falhar, sofre o dano novamente. Somen te criaturas que falham veem a ilusão,  e racionalizam o efeito sempre que falham no teste (por exemplo, acredita  que o mesmo teto pode cair sobre ela  várias vezes)"
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


## Imagem Espelhada {#imagem-espelhada}

```yaml
id: imagem-espelhada
nome: "Imagem Espelhada"
pagina_pdf: 201
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 201
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_magic_lesserinvisibilty.jpg"
  alt: "invisibilidade/ilusão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Ilusão"
  tradicoes: ["Arcana"]
  palavras_chave: ["ilusão"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  alvo: "você"
  duracao: "cena"
  resistencia: "Vontade parcial"
mecanica:
  descricao_resumida: "O alvo fica paralisado; se passar na resistência, em vez disso fica lento."
  efeito_detalhado: |
    O alvo fica paralisado; se passar na resistência, em vez disso fica lento. A  cada rodada, pode
    gastar uma ação  completa para fazer um novo teste de  Vontade. Se passar, se liberta do efeito.  +2
    PM: aumenta o número de alvos  em +1.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "muda o alvo para 1 espírito"
  - custo: 3
    efeito: "muda o alvo para 1 criatura.  Requer 4º círculo"
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


## Infligir Ferimentos {#infligir-ferimentos}

```yaml
id: infligir-ferimentos
nome: "Infligir Ferimentos"
pagina_pdf: 201
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 201
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowbolt.jpg"
  alt: "sombra/necromancia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Necromancia"
  tradicoes: ["Divina"]
  palavras_chave: ["necromancia"]
execucao:
  acao: "padrão"
  alcance: "toque"
  alvo: "1 criatura"
  duracao: "instantânea"
  resistencia: "Fortitude reduz à metade"
mecanica:
  descricao_resumida: "Você canaliza energia negativa contra  um alvo, causando 2d8+2 pontos de  dano de trevas (ou curando 2d8+2 PV ,  se for um morto-vivo)."
  efeito_detalhado: |
    Você canaliza energia negativa contra  um alvo, causando 2d8+2 pontos de  dano de trevas (ou curando
    2d8+2 PV ,  se for um morto-vivo). Infligir Ferimentos   anula Curar Ferimentos. +2 PM: aumenta o
    dano em +1d8+1. +5 PM: muda o alcance para curto e o  alvo para criaturas escolhidas. Intervenção
    Divina Divina 5 (Convocação) Execução:  completa; Alcance:  veja  texto; Alvo: veja texto; Duração:
    veja  texto; Resistência:  veja texto. Você pede a sua divindade para inter ceder diretamente. Você
    pode: • Curar todos os PV e condições de  até 10 criaturas em alcance longo (este  efeito cura
    mortos-vivos, em vez de  causar dano). • Dissipar os efeitos de qualquer magia de 4º círculo ou
    menor. Você pode implorar por algo ainda  mais poderoso. Nesse caso, a magia requer o sacrifício de
    2 PM e pode fazer  coisas como: • Criar um item mundano de até T$  30.000. • Duplicar os efeitos de
    qualquer magia de até 4º círculo. Caso a magia precise de um componente material para  ser lançada,
    ainda é necessário providenciar o componente. • Proteger uma cidade de um desastre, como uma erupção
    vulcânica, enchente ou terremoto. • Ressuscitar uma criatura em alcance  longo que tenha morrido há
    até uma  rodada. A criatura acorda com 1 PV . • Qualquer outra coisa que o mestre  autorize,
    conforme os desejos e objeti vos da divindade do conjurador.Invisibilidade Arcana 2 (Ilusão)
    Execução: livre; Alcance: pessoal;  Alvo: você; Duração: 1 rodada.  O alvo fica invisível (incluindo
    seu equipamento). Um personagem invisível recebe camuflagem total, +10 em testes  de Furtividade
    contra ouvir e criaturas  que não possam  percebê-lo ficam desprevenidas contra seus ataques. A
    magia termina se o alvo faz uma ação  hostil contra uma criatura. Ações con tra objetos livres não
    dissipam a Invisibilidade  (você pode tocar ou apanhar  objetos que não estejam sendo segurados por
    outras criaturas). Causar dano  indiretamente — por exemplo, acen dendo o pavio de um barril de
    pólvo ra que vai detonar mais tarde — não é  considerado um ataque. Objetos soltos pelo alvo voltam
    a ser  visíveis e objetos apanhados por ele ficam invisíveis. Qualquer parte de um  item carregado
    que se estenda além de  seu alcance corpo a corpo natural se  torna visível. Uma luz nunca fica
    invisível (mesmo que sua fonte seja). +3 PM: aumenta o dano inicial em  +2d6 e o dano do efeito em
    chamas  em +1d6.  +1 PM: aumenta o número de alvos  em +1. Lendas e Histórias Universal 3
    (Adivinhação) Execução: padrão; Alcance: toque;  Alvo: 1 criatura, objeto ou local; Duração:
    sustentada.  Você descobre informações sobre uma  criatura, objeto ou local que esteja to cando. O
    que exatamente você desco bre depende do mestre: talvez você não  descubra tudo que há para saber,
    mas  ganhe pistas para continuar a investi gação. A cada rodada que mantiver a  magia, você
    descobre: • Todas as informações sobre o alvo,  como se tivesse passado em todos os  testes de
    Conhecimento para tal. • Todas as habilidades do alvo. Se for  uma criatura, você sabe suas estatís
    ticas de jogo como raça, classe, nível,  atributos, magias, resistências e fraquezas. Se for um item
    mágico, aprende seu efeito e funcionamento. • Se o alvo está sob influência de alguma magia e todas
    as informações sobre  as magias ativas, se houver alguma.
  dano_ou_cura:
    formulas: ["1d6", "1d8+1", "2d6", "2d8+2"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "além do normal , o alvo fica fraco pela cena (passar no teste de resistência evita)"
  - custo: 2
    efeito: "muda a resistência para nenhum. Como parte da execução da magia, você pode fazer um ataque corpo a  corpo contra o alvo. Se acertar, causa o  dano do ataque e o efeito da magia"
  - custo: 1
    efeito: "muda a execução para ação padrão, o alcance para toque e o alvo para  1 criatura ou 1 objeto Grande ou menor"
  - custo: 3
    efeito: "muda a duração para cena.  Requer 3º círculo"
  - custo: 3
    efeito: "muda a duração para sustenta da. Em vez do normal, o alvo gera uma  esfera de invisibilidade. Não pode ser  usado em conjunto com outros aprimoramentos. O alvo e todas as criatu ras a até 3m dele se tornam invisíveis,  como no efeito normal da magia (ainda ficam visíveis caso façam uma ação  hostial). A esfera se move juntamen te com o alvo; qualquer coisa que saia  da esfera fica visível. Requer 3º círculo"
  - custo: 7
    efeito: "muda a execução para ação  padrão, o alcance para toque e o alvo  para 1 criatura. A magia não é dissipada caso o alvo faça uma ação hostil.  Requer 4º círculo. Invulnerabilidade Universal 5 (Abjuração) Execução:  padrão; Alcance:  pessoal;  Alvo:  você; Duração:  cena. Esta magia cria uma barreira mágica  impenetrável que protege você contra  efeitos nocivos mentais ou físicos, a  sua escolha. Proteção mental: você fica imune às con dições abalado, alquebrado, apavorado, atordoado, confuso, esmorecido,  195  Kellyanne Pontes kelly.ayame@gmail.com  Capítulo Quatro fascinado, frustrado e pasmo, além de  efeitos de encantamento e ilusão. Proteção física: você fica imune às con dições atordoado, cego, debilitado, enjoado, envenenado, exausto, fatigado, fraco, lento, ofuscado e paralisado,  além de acertos críticos, ataques furtivos e doenças"
  - custo: 5
    efeito: "muda o alcance para curto e o  alvo para 1 criatura. Lágrimas de Wynna Divina 5 (abjuração) Execução:  padrão; Alcance:  curto;  Alvo: 1 criatura; Duração:  instantânea;  Resistência:  Vontade parcial. Se falhar no teste de resistência, o alvo  perde a habilidade de lançar magias ar canas até o fim da cena. Se passar, per de a habilidade por uma rodada"
  - custo: 2
    efeito: "muda a área para esfera com  6m de raio e o alvo para criaturas escolhidas"
  - custo: 5
    efeito: "muda a execução para um  dia e adiciona custo adicional (sacrifício de 1 PM). O alvo da magia precisa ser mantido em alcance curto do  conjurador durante toda a execução.  Ao término, faz um teste de Vontade.  Se falhar, perde a habilidade de lançar magias arcanas permanentemente. Se passar, resiste, mas ainda pode  ser alvo da magia no dia seguinte. Nenhum poder mortal é capaz de rever ter essa perda. Os clérigos de Wynna  dizem que a deusa chora cada vez que  este ritual é realizado. Lança Ígnea  de Aleph Arcana 3 (Evocação) Execução: padrão; Alcance: médio;  Alvo: 1 criatura; Duração: instantâ nea; Resistência: Reflexos parcial.  Esta magia foi desenvolvida pelo mago  imortal Aleph Olhos Vermelhos, um  entusiasta dos estudos vulcânicos. Ela  dispara um projétil de magma contra o  alvo, que sofre 4d6 pontos de dano de  fogo e 4d6 pontos de dano de perfuração e fica em chamas. As chamas causam 2d6 pontos de dano por rodada,  em vez do dano normal. Se passar no  teste de resistência, o alvo sofre meta de do dano e não fica em chamas. Respingos de rocha incandescente se  espalham com a explosão, atingindo  todas as criaturas adjacentes ao alvo,  que devem fazer um teste de Reflexos.  Se falharem, ficam em chamas, como  descrito acima"
  - custo: 4
    efeito: "muda a duração para cena ou  até ser descarregada. Em vez do efeito  normal, a magia cria quatro dardos de  lava que flutuam ao lado do conjurador.  Uma vez por rodada, como uma ação  livre, você pode disparar um dos dar dos em uma criatura, causando o efeito normal da magia. Requer 4º círculo. Legião Arcana 5 (Encantamento) Execução: padrão; Alcance:  médio;  Alvo:  até 10 criaturas na área; Duração: sustentada. Resistência:  Vontade parcial. Você domina a mente dos alvos. Os alvos obedecem cegamente a seus co mandos, exceto ordens claramente suicidas. Um alvo tem direito a um teste  no final de cada um de seus turnos para  se livrar do efeito. Alvos que passarem  no teste ficam abalados por 1 rodada  enquanto recuperam a consciência"
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


## Leque Cromático {#leque-cromatico}

```yaml
id: leque-cromatico
nome: "Leque Cromático"
pagina_pdf: 202
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 202
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_invisibility.jpg"
  alt: "ilusão"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Ilusão"
  tradicoes: ["Arcana"]
  palavras_chave: ["ilusão"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  alvo: "1 criatura"
  area: "cone de 4,5m"
  efeito: "mão gigante de energia"
  duracao: "instan tânea"
  resistencia: "Vontade parcial"
mecanica:
  descricao_resumida: "Esta magia cria uma mão flutuante  Grande que sempre se posiciona entre  você e um oponente a sua escolha."
  efeito_detalhado: |
    Esta magia cria uma mão flutuante  Grande que sempre se posiciona entre  você e um oponente a sua
    escolha. A  mão fornece cobertura leve (+5 na De fesa) contra esse oponente. Nada é capaz de enganar
    a mão — coisas como  escuridão, invisibilidade, metamorfose  e disfarces mundanos não a impedem  de
    protegê-lo. A mão tem Defesa 20 e  PV e resistências iguais aos seus. Com  197  Kellyanne Pontes
    kelly.ayame@gmail.com  Capítulo Quatro uma ação de movimento, você pode  comandar a mão para que o
    proteja  de outro oponente ou para que realize  uma das ações a seguir. Agarrar: a mão usa uma
    manobra agar rar contra o oponente, usando o seu  Misticismo com um bônus adicional  de +10. A mão
    mantém o oponente  agarrado, mas não causa dano. Esmagar: a mão esmaga um oponente  agarrado,
    causando 2d6+10 pontos de  dano de impacto. Empurrar:  a mão afasta o oponente  (manobra empurrar
    usando o seu Misticismo com um bônus adicional de  +10). A mão acompanha o oponente  para empurrá-lo
    o máximo que conse guir, dentro do alcance da magia. +2 PM: aumenta o dano em +1d6+5. +5 PM: muda o
    bônus adicional em  Misticismo para +20. Requer 5º círculo. Mapear Arcana 2 (Adivinhação) Execução:
    padrão; Alcance: toque;  Alvo: superfície ou objeto plano, como  uma mesa ou papel; Duração: cena.
    Uma fagulha percorre a superfície afetada, queimando-a enquanto esboça  um mapa da região onde o
    conjurador  está. Se você conhece o lugar, o mapa  será completo. Caso contrário, apresentará apenas
    um esboço geral, além  de um ponto de referência (para possibilitar localização) e um lugar de
    interesse, ambos definidos pelo mestre.  A região representada no mapa tem tamanho máximo de um
    quadrado de  10km de lado. Caso você esteja dentro  de uma construção, o mapa mostrará o  andar no
    qual você se encontra. +3 PM: sempre que o alvo fizer o tes te de Vontade e falhar, a marca causa
    3d6 pontos de dano psíquico. Requer  3º círculo. Marionete Arcana 4 (Encantamento) Execução: padrão;
    Alcance: médio;  Alvo: 1 criatura; Duração: sustenta da; Resistência: Fortitude anula.  Esta magia
    manipula o sistema ner voso do alvo. Ao sofrer a magia, e no  início de cada um de seus turnos, a
    vítima faz um teste de Fortitude. Se  passar, a magia é anulada. Se falhar,  todas as suas ações
    físicas naquele  turno estarão sob controle do conjurador. A vítima ainda tem consciência  de tudo
    que acontece à sua volta, po dendo ver, ouvir e até falar com certo  esforço (mas não para lançar
    magias).  Contudo, seu corpo realiza apenas os  movimentos que o conjurador deseja. A vítima pode
    ser manipulada para  se movimentar, lutar, usar habilidades  de combate... Enfim, qualquer coisa  de
    que seja fisicamente capaz. Você precisa de linha de efeito para  controlar a vítima. Se perder o
    contato,  não poderá controlá-la — mas ela esta rá paralisada até que o conjurador recupere o
    controle ou a magia termine. Mata-Dragão Arcana 5 (Evocação) Execução:  duas rodadas; Alcance:
    pessoal; Área:  cone de 30m; Duração:   instantânea; Resistência:  Reflexos reduz à metade. Esta é
    uma das mais poderosas magias de destruição existentes. Após  entoar longos cânticos, o conjurador
    dispara uma carga de energia que var re uma enorme área à sua frente, causando 20d12 pontos de dano
    de essên -cia em todas as criaturas, construções  e objetos livres atingidos. Sempre que  rola um
    resultado 12 em um dado de  dano, a magia causa +1d12 pontos de  dano. Apesar de seu poder
    destrutivo,  esta magia é lenta, tornando seu uso  difícil em combate. +1 PM: aumenta o dano em
    +1d12. Mente Divina Divina 2 (Adivinhação) Execução: padrão; Alcance: toque;  Alvo: 1 criatura;
    Duração: cena.  Você fortalece a mente do alvo. Ele recebe +2 em Inteligência, Sabedoria  ou
    Carisma, a sua escolha. Esse aumento não oferece PV , PM ou perícias  adicionais. +3 PM: em vez do
    normal, o alvo recebe +2 nos três atributos mentais.  Requer 3º círculo. +7 PM: em vez do normal, o
    alvo recebe +4 no atributo escolhido. Requer  4º círculo. +12 PM: em vez do normal, o alvo recebe +4
    nos três atributos mentais.  Requer 5º círculo. Metamorfose Arcana 2 (Transmutação) Execução:
    padrão; Alcance: pessoal;  Alvo: você; Duração: cena.  Você muda sua aparência e forma — incluindo
    seu equipamento — para qualquer outra criatura, existente ou imaginada. Independentemente da forma
    escolhida, você recebe +20 em testes  de Enganação para disfarce. Caracte rísticas não mencionadas
    não mudam. Se mudar para uma forma humanoide, pode mudar o tipo de dano (entre  corte, impacto e
    perfuração) de suas  armas (se usa uma maça e transfor má-la em espada longa, ela pode causar dano
    de corte, por exemplo). Se  quiser, pode assumir uma forma humanoide com uma categoria de tamanho
    acima ou abaixo da sua; nesse caso aplique os modificadores em  Furtividade e testes de manobra. Se
    mudar para outras formas, você  pode escolher uma Forma Selvagem do  druida (veja no Capítulo 1).
    Nesse  caso você não pode atacar com suas ar mas, falar ou lançar magias até voltar  ao normal, mas
    recebe uma ou mais ar mas naturais e os bônus da forma selvagem escolhida. 198  Kellyanne Pontes
    kelly.ayame@gmail.com  Magia +12 PM: além do normal, no início  de seus turnos o alvo pode mudar de
    forma novamente, como uma ação livre, fazendo novas escolhas. Requer  5º círculo. Miasma Mefítico
    Divina 2 (Necromancia) Execução: padrão; Alcance: médio;  Área: nuvem com 6m de raio; Duração:
    instantânea; Resistência: Fortitude (veja texto).  A área é coberta por emanações letais. Criaturas
    na área sofrem 5d6  pontos de dano de ácido e ficam enjoadas por 1 rodada. Se passarem na
    resistência, sofrem metade do dano e  não ficam enjoadas. Truque: muda o alcance para toque,  a área
    para alvo (1 criatura com 0 PV  ou menos), a duração para instantânea, a resistência para Fortitude
    anula e adiciona componente material (pó  de ônix no valor de T$ 10). Em vez do  normal, você
    canaliza o Miasma contra  uma vítima. Se falhar na resistência,  ela morre e você recebe +2 na CD de
    suas magias por um dia. Se passar, fica  imune a este truque por um dia. +2 PM: aumenta o dano em
    +1d6. +3 PM: aumenta o comprimento em  +15m e a altura em +3m. +2 PM: aumenta o dano por atravessar
    a muralha em +2d6. +2 PM: aumenta o comprimento em  +15m e altura em +3m, até 60m de  comprimento e
    9m de altura. +3 PM: aumenta o dano de ácido em  +2d4. +5 PM: além do normal, a nuvem fica  espessa,
    quase sólida. Qualquer criatura dentro dela tem seu deslocamento  reduzido para 3m
    (independentemente  de seu deslocamento normal) e sofre –2  em testes de ataque e rolagens de dano.
    Oração Divina 2 (Encantamento) Execução: padrão; Alcance: curto;  Alvos: todas as criaturas (veja
    texto);  Duração: sustentada. Você e os seus aliados no alcance recebem +2 em testes de perícia e
    rolagens de dano, e todos os seus inimigos  no alcance sofrem –2 em testes de perícia e rolagens de
    dano. Esse efeito é  cumulativo com outras magias. Compo nente material: T$ 20 por PM gasto em
    incensos ou outras oferendas. +2 PM: aumenta os bônus em +1  (bônus máximo limitado pelo círculo
    máximo de magia que você pode lançar).
  dano_ou_cura:
    formulas: ["1d12", "1d6", "1d6+5", "20d12", "2d4", "2d6", "2d6+10", "3d6", "5d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 3
    efeito: "muda o alvo para 1 criatura e  a duração para 1 hora. Em vez do nor mal, a criatura tocada descobre o cami nho mais direto para entrar ou sair de  um lugar. Assim, a magia pode ser usada para descobrir a rota até o relicário  de uma catedral ou a saída mais próxima de uma masmorra (mas não para  encontrar a localização de uma criatura  ou objeto; a magia funciona apenas em  relação a lugares). Caso a criatura demore mais de uma hora para percorrer  o caminho, o conhecimento se perde. Marca da  Obediência Universal 2 (Encantamento) Execução: padrão; Alcance: toque;  Alvo: 1 criatura; Duração: cena; Resistência: Vontade anula. Você toca uma criatura, gravando uma  marca mística no corpo dela enquanto  profere uma ordem, como “não ataque  a mim ou meus aliados”, “siga-me” ou  “não saia desta sala”. A criatura deve  seguir essa ordem, gastando todas as  ações de seu turno para isso. A ordem  não pode ser genérica demais (como  “ajude-me”, por exemplo), nem forçar  o alvo a atos suicidas. A cada rodada,  o alvo pode fazer um teste de Vontade. Se passar, a magia é dissipada"
  - custo: 3
    efeito: "muda a duração para um dia.  Se não estiver em combate, a criatura  só pode fazer o teste de Vontade a cada  hora. Requer 3º círculo"
  - custo: 3
    efeito: "muda o alcance para curto e o  alvo para criaturas escolhidas"
  - custo: 1
    efeito: "a forma escolhida recebe uma  habilidade de sentidos entre faro, visão  na penumbra e visão no escuro"
  - custo: 3
    efeito: "a forma escolhida recebe per cepção às cegas. Requer 3º círculo"
  - custo: 3
    efeito: "muda o alcance para toque, o  alvo para 1 criatura e adiciona resistên cia (Vontade anula)"
  - custo: 3
    efeito: "muda o alcance para médio,  o alvo para 1 criatura e a resistência  para Vontade anula. Em vez do nor mal, transforma o alvo em uma criatura ou objeto inofensivo (ovelha,  sapo, galinha, pudim de ameixa etc.).  A criatura não pode atacar, falar e lançar magias; seu deslocamento vira 3m  e sua Defesa vira 10. Suas outras características não mudam. No início de  seus turnos, o alvo pode fazer um teste de Vontade; se passar, retorna à sua  forma normal e a magia termina. Requer 3º círculo"
  - custo: 5
    efeito: "se mudar para formas não  humanoides, pode escolher uma For ma Selvagem Aprimorada. Requer 3º  círculo"
  - custo: 9
    efeito: "se mudar para formas não humanoides, pode escolher uma Forma  Selvagem Superior. Requer 4º círculo"
  - custo: 3
    efeito: "muda o tipo do dano para  trevas.Miragem Arcana 3 (Ilusão) Execução: padrão; Alcance: longo;  Área: cubo de até 90m de lado; Duração: 1 dia; Resistência: Vontade  desacredita. Você faz um terreno parecer outro, incluindo sons e cheiros. Uma planície  pode parecer um pântano, uma floresta  pode parecer uma montanha etc. Esta  magia pode ser usada para criar armadilhas: areia movediça pode parecer  terra firme ou um precipício pode parecer um lago. Você pode alterar, incluir  e esconder estruturas dentro da área,  mas não criaturas (embora elas possam  se esconder nas estruturas ilusórias)"
  - custo: 4
    efeito: "além do normal, pode alterar  a aparência de criaturas escolhidas na  área, como se usando Disfarce Ilusório"
  - custo: 9
    efeito: "muda a duração para permanente e adiciona componente material  (pó de diamante no valor de T$ 1.000).  Requer 4º círculo. Missão Divina Divina 3 (Encantamento) Execução: padrão; Alcance: curto;  Alvo: 1 criatura; Duração: 1 semana  ou até ser descarregada; Resistência:  Vontade anula (veja texto)  Esta magia obriga o alvo a cumprir uma  tarefa a sua escolha. Ela dura uma semana ou até o alvo cumprir a tarefa, o  que vier primeiro. O alvo pode recusar  a missão — mas, no fim de cada dia em  que não se esforçar para cumprir a tarefa, deve fazer um teste de Vontade; se  falhar, sofre uma penalidade cumulativa de –2 em todos os testes e rolagens. A Missão Divina não pode forçar um ato  suicida, nem uma missão impossível  (como matar um ser que não existe)"
  - custo: 2
    efeito: "muda o alcance para toque, a  duração para permanente e adiciona  penalidade de –1 PM. Em vez do nor mal, você inscreve uma marca (como  uma tatuagem) na pele do alvo e esco lhe um tipo de ação que ativará a mar ca. Normalmente, será cometer um  crime (roubar, matar...) ou outra coisa  contrária às Obrigações & Restrições  de sua divindade. Sempre que a marca  é ativada, o alvo recebe uma penalidade cumulativa de –2 em todos os testes. Muitas vezes, portar essa marca é  um estigma por si só, já que esta magia  normalmente é lançada em criminosos  ou traidores. Uma magia que dissipe  outras suprime a marca e suas penalidades por um dia; elas só podem ser totalmente removidas pelo conjurador  original ou pela magia Purificação"
  - custo: 4
    efeito: "muda a duração para 1 ano ou  até ser descarregada. Montaria Arcana Arcana 2 (Convocação) Execução: padrão; Alcance: curto; Efeito: criatura conjurada; Duração: 1 dia. Esta magia convoca um parceiro cavalo (ou pônei) de guerra veterano. Sua  aparência é de um animal negro com  crina e cauda cinzentas e cascos feitos  de fumaça, mas você pode mudá-la se  quiser. Além dos benefícios normais, a  Montaria Arcana pode atravessar terreno difícil sem redução em seu deslo camento. Você pode usar Misticismo  no lugar de Cavalgar para efeitos desta montaria (incluindo ser considera do treinado)"
  - custo: 1
    efeito: "além do normal, criaturas do  tipo animal em alcance curto da montaria devem fazer um teste de Vontade.  Se passarem, ficam abaladas pela cena;  se falharem, ficam apavoradas por 1d4  rodadas, depois abaladas pela cena"
  - custo: 3
    efeito: "muda a duração para permanente e adiciona penalidade de –3 PM"
  - custo: 3
    efeito: "aumenta o tamanho da montaria em uma categoria. Isso também  aumenta o número de criaturas que ela  pode carregar — duas para uma criatura Enorme, seis para Colossal. Uma  única criatura controla a montaria; as  outras apenas são deslocadas"
  - custo: 3
    efeito: "muda o nível do parceiro para  mestre. Requer 3º círculo. Muralha de Ossos Universal 4 (Necromancia) Execução:  padrão; Alcance:  médio;  Efeito:  muro de ossos; Duração:  cena.  Uma parede de ossos se eleva da ter ra. A parede tem 15m de comprimento, 9m de altura e 1,5m de espessura. Ela pode ter qualquer forma — não  precisa ser uma linha reta —, mas sua  base precisa estar sempre tocando o  solo. Quando a parede surge, criaturas na área ocupada ou adjacentes so frem 4d8 pontos de dano de corte e  precisam fazer um teste de Reflexos  para não ficarem presas no emaranhado de ossos. Uma criatura presa dessa maneira fica agarrada, e pode gastar  uma ação padrão para fazer um teste  de Atletismo para se soltar. Se passar  no teste, sai da muralha para um dos  lados adjacentes. Se falhar, sofre 4d8  pontos de dano de corte. 199  Kellyanne Pontes kelly.ayame@gmail.com  Capítulo Quatro É possível destruir o muro para atravessá-lo ou libertar uma criatura agar rada. Cada trecho de 3m do muro tem  Defesa 8, 40 PV e redução de corte,  frio e perfuração 10. Também é possível escalar a parede. Isso exige um teste de Atletismo e causa 4d8 pontos de  dano de corte para cada 3m escalados"
  - custo: 5
    efeito: "o muro é feito de uma massa  de esqueletos animados. Sempre que  uma criatura iniciar seu turno adjacente ou escalando a muralha, deve fazer um teste de Reflexos. Se falhar fica  agarrada, sofrendo os efeitos normais  de estar agarrada pela magia. Muralha Elemental Arcana 3 (Evocação) Execução: padrão; Alcance: médio;  Efeito: muralha de energia; Duração:  cena. Resistência: veja texto.  Uma muralha de um elemento a sua  escolha se eleva da terra. Ela pode ser  um muro de até 30m de comprimento  e 3m de altura (ou o contrário) ou uma  cúpula de 3m de raio. Os efeitos variam conforme o elemento escolhido. Fogo. Faz surgir uma violenta cortina de  chamas. Um lado da muralha (a sua escolha) emite ondas de calor, que causam 2d6 pontos de dano de fogo em  criaturas a até 6m quando você lança a  magia e no início de seus turnos. Atravessar a muralha causa 8d6 pontos de  dano de fogo. Caso seja criada em uma  área onde existem criaturas, elas sofrem  dano como se estivessem atravessando  a muralha, mas podem fazer um teste  de Reflexos para reduzir o dano à metade e escapar para um lado (a criatura es colhe, mas se escapar para o lado quente  sofrerá mais 2d6 pontos de dano). Gelo. Evoca uma parede grossa de gelo  denso com 15cm de espessura. Na for ma de cúpula, pode prender uma ou  mais criaturas, mas elas têm direito a  um teste de Reflexos para escapar antes que a cúpula se forme. Cada trecho de 3m da muralha tem Defesa 8,  40 PV e RD 5. Um trecho da muralha  que atinja 0 PV será rompido. Qualquer efeito de fogo causa dano dobrado à muralha. Uma criatura que atravesse um trecho rompido da muralha  sofre 4d6 pontos de dano de frio"
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
  - custo: 2
    efeito: "aumenta as penalidades em  –1 (penalidade máxima limitada pelo  círculo máximo de magia que você  pode lançar)"
  - custo: 7
    efeito: "muda o alcance para médio.  Requer 3º círculo"
  - custo: 12
    efeito: "muda a duração para cena.  Requer 4º círculo"
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


## Orientação {#orientacao}

```yaml
id: orientacao
nome: "Orientação"
pagina_pdf: 206
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 206
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane02.jpg"
  alt: "adivinhação"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Adivinhação"
  tradicoes: ["Divina"]
  palavras_chave: ["adivinhação"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 criatura"
  duracao: "1 rodada"
  resistencia: "Vontade parcial"
mecanica:
  descricao_resumida: "Você pronuncia uma palavra do idioma  primordial da Criação, que causa um  dos efeitos abaixo, a sua escolha."
  efeito_detalhado: |
    Você pronuncia uma palavra do idioma  primordial da Criação, que causa um  dos efeitos abaixo, a sua
    escolha. Atordoar: a criatura fica atordoada por  1d4+1 rodadas (apenas uma vez por  cena). Se
    passar no teste de resistên cia, ou se já foi atordoada por esta magia, fica desprevenida por 1d4
    rodadas. Cegar: a criatura fica cega. Se passar no  teste de resistência, fica ofuscada por  1d4
    rodadas. 200  Kellyanne Pontes kelly.ayame@gmail.com  Magia Matar: a criatura morre. Além do tes te
    de Vontade, a criatura tem direito a  um teste de Fortitude se tiver mais da  metade de seus PV . Se
    passar em qualquer um deles, em vez de morrer perde  10d8 pontos de vida e fica sangrando. Pele de
    Pedra Universal 3 (Transmutação) Execução:  padrão; Alcance:  pessoal;  Alvo: você; Duração:  cena.
    Sua pele ganha aspecto e dureza de  rocha. Você recebe redução de dano 5.
  dano_ou_cura:
    formulas: ["10d8", "1d4", "1d4+1"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "muda o alcance para toque e o  alvo para 1 criatura"
  - custo: 4
    efeito: "muda a duração para um dia"
  - custo: 4
    efeito: "sua pele ganha aspecto e dureza de aço. Você recebe redução de dano  10. Requer 4º círculo"
  - custo: 4
    efeito: "muda o alcance para toque, o  alvo para 1 criatura, a duração para 1d4  rodadas e adiciona Resistência: Fortitude anula. Em vez do efeito normal,  a magia transforma o alvo e seu equipamento em uma estátua inerte e sem  consciência. A estátua possui os mes mos PV da criatura e redução de dano  8; se for quebrada, a criatura morrerá.  Requer 4º círculo"
  - custo: 9
    efeito: "como acima, mas com duração  permanente. Requer 5º círculo"
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


## Perdição {#perdicao}

```yaml
id: perdicao
nome: "Perdição"
pagina_pdf: 207
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 207
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_possession.jpg"
  alt: "medo/assombração"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Necromancia"
  tradicoes: ["Divina"]
  palavras_chave: ["necromancia"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 criatura"
  area: "nuvem com 6m de raio"
  duracao: "cena"
  resistencia: "nenhuma"
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
    você também morre. Retornar para o seu cor po voluntariamente é uma ação livre. +5 PM: muda a
    duração para permanente, mas destrói seu corpo original  no processo. Uma criatura possuída  pode
    fazer um teste de Vontade no co meço do dia para retomar seu corpo.  Se passar, recobra a
    consciência (e a  sua própria consciência fica inerte). O  teste se repete no início de cada dia. Se
    o corpo de uma criatura possuída mor rer e houver outra criatura em alcance  curto, você pode tentar
    possuí-la. Enquanto houver novos corpos para possuir, você é imortal! Potência Divina Divina 3
    (Transmutação) Execução: padrão; Alcance: pessoal;  Alvo: você; Duração: sustentada.  Você canaliza
    o poder de sua divindade. Você aumenta uma categoria de tamanho (seu equipamento muda de  acordo) e
    recebe Força +4 e RD 10.  Você não pode lançar magias enquanto estiver sob efeito de Potência
    Divina. +2 PM: aumenta o bônus de Força  em +1. +5 PM: aumenta a RD em +5.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 5
    efeito: "você ganha acesso às habilidades de raça e classe da criatura"
  - custo: 5
    efeito: "enquanto a magia durar e você  estiver dentro do alcance do seu corpo  original, pode “saltar” de uma criatura  possuída para outra. O novo alvo tem  direito a um teste de Vontade. Se falhar,  você assume o controle do corpo dele  e o alvo anterior recobra a consciência"
  - custo: 2
    efeito: "muda o alcance para toque e  o alvo para 1 criatura. A magia falha  se você e o alvo não forem devotos da  mesma divindade. Premonição Divina 4 (Adivinhação) Execução : padrão; Alcance : pessoal;  Alvo: você; Duração: cena. Vislumbres do futuro permitem que  você reavalie suas ações. Uma vez por  rodada, você pode rolar novamente um  teste recém realizado, mas deve aceitar  o resultado da nova rolagem"
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


## Primor Atlético {#primor-atletico}

```yaml
id: primor-atletico
nome: "Primor Atlético"
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
  circulo: 1
  escola: "Transmutação"
  tradicoes: ["Arcana"]
  palavras_chave: ["transmutação"]
execucao:
  acao: "padrão"
  alcance: "toque"
  alvo: "1 criatura"
  duracao: "cena"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você modifica os limites físicos do  alvo, que recebe deslocamento +9m e  +10 em testes de Atletismo."
  efeito_detalhado: |
    Você modifica os limites físicos do  alvo, que recebe deslocamento +9m e  +10 em testes de
    Atletismo.  +1 PM: além do normal, o alvo rece be um bônus adicional de +20 em tes tes de Atletismo
    para saltar (para um  bônus total de +30).
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "além do normal, o alvo pode  escalar paredes e tetos sem precisar  fazer testes de Atletismo. Para isso,  precisa estar com as mãos livres, mas  pode usar uma única mão se ficar parado no lugar. O alvo não fica desprevenido enquanto escala"
  - custo: 1
    efeito: "muda a execução para ação de  movimento, o alcance para pessoal, o  alvo para você e a duração para instan tânea. Você salta muito alto e pousa  em alcance corpo a corpo de uma criatura em alcance curto. Se fizer um ataque corpo a corpo contra essa criatura  neste turno, recebe os benefícios e penalidades de uma investida e sua arma  causa um dado extra de dano do mes mo tipo durante este ataque"
  - custo: 3
    efeito: "além do normal, ao fazer tes tes de perícias baseadas em Força,  Destreza ou Constituição, o alvo pode  rolar dois dados e escolher o melhor.  Não afeta testes de ataque ou resistên cia. Requer 2º círculo. 201  Kellyanne Pontes kelly.ayame@gmail.com  Capítulo Quatro"
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


## Profanar {#profanar}

```yaml
id: profanar
nome: "Profanar"
pagina_pdf: 208
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 208
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowbolt.jpg"
  alt: "sombra/necromancia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Necromancia"
  tradicoes: ["Divina"]
  palavras_chave: ["necromancia"]
execucao:
  acao: "padrão"
  alcance: "longo"
  alvo: "local ou criatura co nhecidos"
  area: "esfera com 9m de raio"
  duracao: "1 dia"
  resistencia: "—"
mecanica:
  descricao_resumida: "Esta magia faz com que sua consciência  deixe seu corpo e se transporte instantaneamente para um local ou para per to de uma criatura."
  efeito_detalhado: |
    Esta magia faz com que sua consciência  deixe seu corpo e se transporte instantaneamente para um
    local ou para per to de uma criatura. Se escolher um lo cal, ele precisa ser conhecido por você.  Se
    escolher uma criatura, você transporta sua consciência até onde ela estiver, desde que esteja no
    mesmo plano. Você adquire uma forma fantasmagórica  invisível, mas pode se mostrar usando  uma ação
    de movimento. Pode se mover  em qualquer direção com deslocamento de voo 18m e, por ser incorpóreo,
    é  capaz de atravessar objetos sólidos, mas  fica limitado a se mover dentro dos limites do local,
    ou dentro de alcance cur to da criatura alvo. Você pode ver e ouvir como se estivesse presente no
    local  e pode falar mentalmente com qualquer  criatura que possa ver, contanto que tenham um idioma
    em comum. +10 PM: além do normal, sua projeção é capaz de lançar magias que não  precisem de
    componentes materiais e  tenham duração diferente de sustenta da. Sua forma fantasmagórica funciona
    como na magia Forma Etérea, sendo afetada por magias de abjuração e essên cia, mas as magias que ela
    lança podem  afetar criaturas corpóreas.Proteção  contra Magia Divina 3 (Abjuração) Execução:
    padrão; Alcance: toque;  Alvo: 1 criatura; Duração: cena.  Você protege o alvo contra efeitos
    mágicos nocivos. O alvo recebe +5 em  testes de resistência contra magias. +4 PM: muda o bônus para
    +10. Requer 4º círculo.
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


## Proteção Divina {#protecao-divina}

```yaml
id: protecao-divina
nome: "Proteção Divina"
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
  circulo: 1
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
  descricao_resumida: "Esta magia cria uma barreira mística  invisível que fornece ao alvo +2 em  testes de resistência."
  efeito_detalhado: |
    Esta magia cria uma barreira mística  invisível que fornece ao alvo +2 em  testes de resistência. +2
    PM: aumenta o bônus concedido  em +1. +2 PM: muda a execução para reação,  o alcance para curto e a
    duração para 1  rodada. Em vez do normal, o alvo rece be +5 no próximo teste de resistência  que
    fizer (cumulativo com o efeito básico desta magia).
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "muda o alvo para área de esfera com 3m de raio. Todos os aliados  dentro do círculo recebem o bônus da  magia. Requer 2º círculo"
  - custo: 5
    efeito: "torna o alvo imune a efeitos  mentais e de medo. Requer 3º círculo. Purificação Divina 2 (evocação) Execução: padrão; Alcance: toque;  Alvo: 1 criatura; Duração: instantânea. Você purifica a criatura tocada, remo vendo uma condição dela entre abalado, apavorado, alquebrado, atordoado,  cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fasci nado, fatigado, fraco, frustrado, lento,  ofuscado, paralisado, pasmo ou surdo"
  - custo: 2
    efeito: "também recupera todos os PV  perdidos por veneno"
  - custo: 2
    efeito: "em vez de uma, remove todas  as condições listadas"
  - custo: 3
    efeito: "também permite que o alvo  solte qualquer item amaldiçoado que  esteja segurando (mas não remove a  maldição do item em si)"
  - custo: 7
    efeito: "também dissipa magias e efei tos prejudiciais de encantamento, necromancia e transmutação afetando o  alvo. Requer 3º círculo"
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


## Queda Suave {#queda-suave}

```yaml
id: queda-suave
nome: "Queda Suave"
pagina_pdf: 208
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 208
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_magic_featherfall.jpg"
  alt: "queda/leveza"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Transmutação"
  tradicoes: ["Arcana"]
  palavras_chave: ["transmutação"]
execucao:
  acao: "reação"
  alcance: "curto"
  duracao: "até chegar ao solo  ou cena, o que vier primeiro"
  resistencia: "—"
mecanica:
  descricao_resumida: "O alvo cai lentamente."
  efeito_detalhado: |
    O alvo cai lentamente. A velocidade da  queda é reduzida para 18m por rodada  — o suficiente para
    não causar dano.  Como lançar esta magia é uma reação,  você pode lançá-la rápido o bastante  para
    salvar a si ou um aliado de quedas  inesperadas. Lançada sobre um projétil  — como uma flecha ou uma
    rocha lar gada do alto de um penhasco —, a magia faz com que ele cause metade do  dano normal,
    devido à lentidão.  Queda Suave só funciona em criaturas e  objetos em queda livre; a magia não vai
    frear um golpe de espada ou o mergulho rasante de um atacante voador. Truque: muda o alvo para
    objeto  Minúsculo. Em vez do normal, você  pode gastar uma ação de movimento  para levitar o alvo
    até 4,5m em qualquer direção.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "muda o alvo para até 10 criaturas ou objetos adequados"
  - custo: 2
    efeito: "aumenta a categoria de tamanho do alvo em uma"
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


## Raio do Enfraquecimento {#raio-do-enfraquecimento}

```yaml
id: raio-do-enfraquecimento
nome: "Raio do Enfraquecimento"
pagina_pdf: 208
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 208
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg"
  alt: "eletricidade"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Necromancia"
  tradicoes: ["Arcana"]
  palavras_chave: ["necromancia", "raio"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 criatura"
  area: "linha de 30m"
  efeito: "domo com 6m de raio"
  duracao: "cena"
  resistencia: "Fortitude parcial"
mecanica:
  descricao_resumida: "Esta magia cria um domo imóvel e  quase opaco por fora, mas transparente pelo lado de dentro."
  efeito_detalhado: |
    Esta magia cria um domo imóvel e  quase opaco por fora, mas transparente pelo lado de dentro. Ele
    protege contra calor, frio e forças pequenas,  mas não contra qualquer coisa capaz  de causar dano.
    Assim, o domo pro tege contra neve e vento comuns, mas  não contra uma flecha ou Bola de Fogo.
    Porém, como o domo é quase opaco,  qualquer criatura dentro dele tem camuflagem total contra ataques
    vindos  de fora. Criaturas podem entrar e sair  do domo livremente. Descansar dentro  do Refúgio
    concede recuperação normal  de PV e PM. +2 PM: aumenta o dano em +2d6.  +2 PM: aumenta o dano das
    rajadas  em +1d6 e o dano da rajada mista em  +2d12. Réquiem Arcana 5 (Ilusão) Execução: completa;
    Alcance: curto;  Alvo: criaturas escolhidas; Duração:   sustentada; Resistência: Vontade anula. Esta
    magia cria uma ilusão particular  para cada uma das criaturas que atingir. Enquanto a magia durar,
    no início  de cada um de seus turnos, cada criatu ra afetada deve fazer um teste de Vontade; se
    falhar, acha que não tomou as  ações que realmente fez no turno anterior e é obrigada a repetir as
    mesmas  ações neste turno, com uma penalidade cumulativa de –5 em todos os testes  para cada vez que
    se repetir (a penalidade não se aplica ao teste de Vontade contra esta magia). Por exemplo,  se a
    criatura se aproximou de um alvo  e o atacou, precisa se aproximar desse mesmo alvo e atacar
    novamente. A  ação repetida consome PM e recursos  normalmente e, caso exija um teste de
    resistência, qualquer alvo faz esse tes te com um bônus igual ao da penalidade desta magia.
    Resistência  a Energia Universal 1 (Abjuração) Execução: padrão; Alcance: toque;  Alvo: 1 criatura;
    Duração: cena.  Ao lançar esta magia, escolha entre  ácido, eletricidade, fogo, frio, luz ou
    trevas. O alvo recebe redução de dano  10 contra o tipo de dano escolhido. +2 PM: aumenta a redução
    de dano  em +5. +3 PM: aumenta o número de efeitos  que você pode escolher em +1. Requer  3º
    círculo.  +1 PM: aumenta o dano em +2d6. +1 PM: muda o alvo para você e uma  criatura voluntária.
    Você pode esco lher este aprimoramento mais vezes  para aumentar o número de alvos adicionais em +1,
    mas deve estar tocando  todos os alvos. +2 PM: muda a execução para reação.  Em vez do normal, você
    recebe +5 na  Defesa e em testes de Reflexos contra  um ataque ou efeito que esteja prestes  a
    atingi-lo. Após a resolução do efeito,  salta para um espaço adjacente (1,5m). +3
  dano_ou_cura:
    formulas: ["1d6", "2d12", "2d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "além do normal, os limites do  domo são envoltos por uma fumaça escura e espessa, que impede criaturas do  lado de fora de enxergar ou ouvir o que  está dentro. Criaturas do lado de dentro  enxergam e ouvem normalmente o que  está do lado de fora. A fumaça também  bloqueia magias de adivinhação"
  - custo: 3
    efeito: "em vez do normal, cria uma  cabana que comporta até 10 criaturas  Médias. Descansar nesse espaço con cede recuperação confortável (recupe ra PV e PM igual ao dobro do nível).  Para todos os efeitos é uma cabana  normal, com paredes de madeira, telhado, uma porta, duas janelas e alguma mobília (camas, uma mesa com  bancos e uma lareira). A porta e as janelas têm 15 PV , RD 5 e são protegidas  por um efeito idêntico à magia Tranca  Arcana. As paredes têm 200 PV e RD 5"
  - custo: 3
    efeito: "em vez do normal, cria um espaço extradimensional, similar a uma caverna vazia e escura, que compor ta até 10 criaturas Médias. A entrada  para o espaço precisa estar desenhada  em um objeto fixo como uma grande  pedra ou árvore. Qualquer criatura que  atravesse a entrada consegue entrar  no espaço. Nenhum efeito a partir do  mundo real afeta o espaço e vice-ver sa, mas aqueles que estiverem dentro  podem observar o mundo real como  se uma janela de 1m estivesse centra da na entrada. Qualquer coisa que esteja no espaço extradimensional surge  no mundo real na área vazia mais pró xima da entrada quando a duração da  magia acaba. Requer 3º círculo"
  - custo: 9
    efeito: "em vez do normal, cria uma  mansão extradimensional que comporta até 100 criaturas Médias, com  quartos luxuosos, comida e bebida e  dez servos fantasmagóricos (como na  magia Servos Invisíveis). Descansar na  mansão concede recuperação luxuo sa (recupera PV e PM igual ao triplo  do nível). A mansão tem uma única entrada, uma porta feita de luz.  Você pode deixá-la visível ou invisível  como uma ação livre e apenas criaturas escolhidas por você podem passar.  Requer 4º círculo. Relâmpago Arcana 2 (Evocação) Execução: padrão; Alcance: pessoal;  Área: linha de 30m; Duração: instan tânea; Resistência: Reflexos reduz à  metade. Você dispara um poderoso raio que  causa 6d6 pontos de dano de eletrici dade em todas as criaturas e objetos livres na área"
  - custo: 3
    efeito: "muda  o alcance para médio  e  a área para  alvo: criaturas escolhidas.  Em vez do normal, você dispara vários  relâmpagos, um para cada alvo escolhi do, causando 6d6 pontos de dano de  eletricidade. Requer 3º círculo. Relâmpago Flamejante  de Reynard Arcana 4 (Evocação) Execução:  duas rodadas; Alcance:   médio; Efeito:  bolas de fogo e relâmpagos; Duração: sustentada; Resis tência:  Reflexos reduz à metade. Esta é uma magia poderosa, desenvolvida pelo metódico e impassível arquimago Reynard. Você invoca as energias  elementais do fogo e do relâmpago, fazendo com que uma de suas mãos fi203  Kellyanne Pontes kelly.ayame@gmail.com  Capítulo Quatro que em chamas e a outra mão eletrificada. Pela duração da magia, você pode  gastar uma ação de movimento para  disparar uma bola de fogo (10d6 pontos de dano de fogo numa esfera com  6m de raio) ou um relâmpago (10d6  pontos de dano de eletricidade numa  linha). Você também pode, como uma  ação padrão, usar as duas mãos num  ataque de energia mista (20d12 pontos de dano, metade de fogo e metade de eletricidade, numa esfera com  9m de raio). Você precisa estar com as  duas mãos livres para invocar o efeito  misto e isso consome toda a energia  da magia, terminando-a imediatamente. Por se tratar de um ritual complexo, o tempo de execução dessa magia  não pode ser reduzido"
  - custo: 2
    efeito: "muda a duração para um dia.  Requer 2º círculo"
  - custo: 5
    efeito: "muda o alcance para curto e o  alvo para criaturas escolhidas. Requer  3º círculo"
  - custo: 5
    efeito: "muda o efeito para redução de  dano contra todos os tipos listados na  magia. Requer 3º círculo"
  - custo: 9
    efeito: "muda o efeito para imunida de a um tipo listado na magia. Requer  4º círculo. Rogar Maldição Divina 2 (Necromancia) Execução: padrão; Alcance: curto;  Alvo: 1 criatura; Duração: sustenta da; Resistência: Fortitude anula.  Você entoa cânticos maléficos que  amaldiçoam uma vítima, criando efeitos variados. Ao lançar a magia, escolha  entre os seguintes. Debilidade: o alvo fica esmorecido e não  pode se comunicar ou lançar magias.  Ainda reconhece seus aliados e pode  segui-los e ajudá-los, mas sempre de  maneira simplória.  Doença: muda a duração para instantâ nea. O alvo contrai uma doença a sua  escolha, que o afeta imediatamente  (sem período de incubação). Fraqueza: o alvo fica debilitado e lento. Isolamento: o alvo perde o uso de um  de seus cinco sentidos a sua escolha.  Se perder a visão, fica cego. Se perder a  audição, fica surdo. Se perder o olfato  ou paladar, não pode usar a habilidade  faro. Se perder o tato, fica caído e não  pode se levantar. Você também pode inventar sua pró pria maldição, usando esses exemplos  como sugestões, mas o mestre tem a  palavra final sobre o efeito"
  - custo: 7
    efeito: "muda a duração para permanente e resistência para Fortitude par cial. Se passar, a criatura ainda sofre os  efeitos da maldição, mas por 1 rodada.  Requer 4º círculo. Roubar a Alma Universal 5 (Necromancia) Execução:  padrão; Alcance:  curto;  Alvo: 1 criatura; Duração: permanente;  Resistência:  Vontade parcial. Você rouba a alma da vítima, armazenando-a em um objeto. Se o alvo  passar no teste de resistência, sente o impacto de sua alma ser puxada para  fora do corpo e fica abalado por 1 rodada. Se falhar, seu corpo fica caído, inconsciente e inerte, enquanto sua alma  é transportada para dentro do objeto. O corpo não envelhece nem se decompõe, permanecendo em estase. Ele  pode ser atacado e destruído normalmente. O objeto escolhido deve custar  T$ 1.000 por nível ou ND da criatu ra e não possuir uma alma presa ou se  quebrará quando a magia for lançada  (embora personagens não conheçam  o conceito de “nível” dentro do mundo de jogo, podem ter noção do poder  geral de uma criatura, estimando assim o valor do objeto). Se o objeto for  destruído, a magia se esvai. Se o cor po ainda estiver disponível, a alma retorna para ele. Caso contrário, escapa  para os Mundos dos Deuses. Custo adicional: sacrifício de 1 PM"
  - custo: 5
    efeito: "o objeto que abriga a alma detém os mesmos PM totais que o alvo.  Se estiver empunhando o objeto, você  pode usar esses PM para pagar o cus to de PM para lançar magias. O objeto  recupera PM por dia como se o perso nagem estivesse em descanso normal"
  - custo: 10
    efeito: "como uma reação ao lançar  esta magia, você possui o corpo sem  alma do alvo, como na magia Possessão  (mesmo que não conheça a magia). Runa de Proteção Universal 2 (Abjuração) Execução: 1 hora; Alcance: toque;  Alvo: uma área de 6m de raio; Duração: permanente até ser descarregada.  Resistência:  varia (veja o texto). Você escreve uma runa pessoal em  uma superfície fixa, como uma parede  ou o chão, que protege uma pequena  área ao redor. Quando uma criatura  entra na área afetada a runa explode,  causando 6d6 pontos de dano em to dos os alvos a até 6m. A criatura que  ativa a runa não tem direi to a teste de  resistência; outras criatu ras na área  têm direito a um teste de Reflexos  para reduzir o dano à metade. Quando  lança a magia, você escolhe o tipo de  dano, entre ácido, eletricidade, fogo,  frio, luz ou trevas. Você pode determinar que a runa se  ative apenas em condições específicas  — por exemplo, apenas por goblins ou  apenas por mortos-vivos. Você também pode criar uma palavra mágica  que impeça a runa de se ativar. 204  Kellyanne Pontes kelly.ayame@gmail.com  Magia Um personagem pode encontrar a runa  com um teste de Investigação e desar má-la com um teste de Ladinagem. Componente material: pó de diamante no  valor de T$ 200, com o qual o conjurador desenha a runa, que brilha por alguns instantes e depois se torna praticamente invisível"
  - custo: 1
    efeito: "muda o alvo para “você” e o  alcance para “pessoal”. Ao invés do  normal, escolha uma magia de 1º cír culo que você conhece e pode lançar, com tempo de execução de uma  ação padrão ou menor. Você escreve a runa em seu corpo e especifica  uma condição de ativação como, por  exemplo, “quando eu for alvo de um  ataque” ou “quando for alvo de uma  magia”. Quando a condição for cumprida, você pode ativar a runa e lançar  a magia escolhida como uma reação.  Você só pode escrever uma runa em  seu corpo ao mesmo tempo"
  - custo: 3
    efeito: "como o aprimoramento anterior, mas você pode escolher magias de  2º círculo. Requer 3º círculo. Salto  Dimensional Arcana 2 (Convocação) Execução: padrão; Alcance: curto;  Alvo: você; Duração: instantânea.  Esta magia transporta você para outro  lugar dentro do alcance. Você não precisa perceber nem ter linha de efeito  ao seu destino, podendo simplesmen te imaginá-lo. Por exemplo, pode se  transportar 3m adiante para ultrapassar uma porta fechada. Uma vez transportadas, criaturas não podem agir até  a rodada seguinte. Esta magia não per mite que você apareça dentro de um  corpo sólido; se o ponto de chegada  não tem espaço livre, você ressurge na  área vazia mais próxima"
  - custo: 1
    efeito: "muda o alcance para médio"
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


## Santuário {#santuario}

```yaml
id: santuario
nome: "Santuário"
pagina_pdf: 211
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 211
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_devotionaura.jpg"
  alt: "proteção/escudo"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Abjuração"
  tradicoes: ["Divina"]
  palavras_chave: ["abjuração"]
execucao:
  acao: "padrão"
  alcance: "toque"
  alvo: "1 criatura"
  efeito: "semiplano com 30m de lado"
  duracao: "cena"
  resistencia: "Vontade anula"
mecanica:
  descricao_resumida: "Você cria uma dimensão particular."
  efeito_detalhado: |
    Você cria uma dimensão particular.  Você pode entrar no semiplano gastando uma ação padrão e 10 PM,
    desaparecendo do plano material como se tivesse se teletransportado. Você pode  levar criaturas
    voluntárias que esteja  tocando, ao custo de 1 PM por criatura extra. Você também pode levar objetos
    que esteja tocando, ao custo de 1  PM por objeto Médio ou menor, 2 PM  por objeto Grande, 5 PM por
    Enorme e  10 PM por Colossal. Uma vez no semiplano, pode gastar uma ação completa  para voltar ao
    plano material, no mesmo local onde estava. Caso conheça a  magia Viagem Planar, pode lançá-la para
    voltar ao plano material em outro local. Você escolhe a forma e a aparência do  semiplano — uma
    caverna, um aste roide que singra o éter, um palacete  de cristal etc. Ele contém ar, luz e calor,
    mas além disso é vazio. Entretan to, você pode levar itens (mobília, fer ramentas etc.) a cada
    viagem. +2 PM: adiciona alvo (1 criatura). Você  cria uma semiplano labiríntico e expulsa  o alvo
    para ele. A cada rodada, a vítima  tem direito a um teste de Investigação  ou Sobrevivência, com
    bônus cumulativo de +1 para cada teste já realizado,  para escapar do labirinto. Quando o alvo
    escapa, a magia termina e o alvo reaparece no plano material no mesmo local  onde estava quando a
    magia foi lançada. Magias como Salto Dimensional e Teletrans porte não ajudam a escapar do
    labirinto, mas Viagem Planar, sim. +5 PM: muda a duração para permanente e adiciona componente
    material  (maquete do semiplano feita de mate riais preciosos no valor de T$ 5.000).  Você pode
    lançar a magia diversas vezes para aumentar as dimensões do semiplano em +30m de lado a cada vez.
    Servo Divino Divina 3 (Convocação) Execução: padrão; Alcance: curto;  Efeito: criatura conjurada;
    Duração:  cena ou até ser descarregada.  205  Kellyanne Pontes kelly.ayame@gmail.com  Capítulo
    Quatro Você pede a sua divindade que envie  um espírito para ajudá-lo. Esse espírito realiza uma
    tarefa a sua escolha que  possa ser cumprida em até uma hora  — desde algo simples como “use suas
    asas para nos levar até o topo da montanha” até algo complexo como “escolte esses camponeses até o
    castelo”.  A magia é descarregada quando a criatura cumpre a tarefa, retornando a seu  plano natal.
    O tipo de criatura é esco lhido pelo mestre, de acordo com as  necessidades da tarefa. Componente
    material: um pagamento de  T$ 100 ao espírito. A forma de pagamento varia — doações a um templo,  um
    item mágico ou mesmo dinheiro. +7 PM: muda o componente material  para ferramentas de embalsamar (T$
    1.000). Em vez de um zumbi ou esque leto, cria uma múmia. Ela pode funcio nar como um parceiro
    mestre, escolhi do entre ajudante, destruidor, guardião  ou médico. O restante da magia segue
    normal. Requer 4º círculo. Servos Invisíveis Arcana 2 (Convocação) Execução: padrão; Alcance:
    longo;  Efeito: criaturas conjuradas; Duração: 1 cena.  Você cria até três servos invisíveis e
    silenciosos, capazes de realizar tarefas simples como apanhar lenha, co lher frutos, varrer o chão
    ou alimentar  um cavalo. Os servos podem ser usados para manter arrumada e organizada uma mansão ou
    pequena torre ou  para preparar um acampamento nos  ermos para você e seus aliados (veja a  perícia
    Sobrevivência, na página 123). Eles também podem ajudá-lo em tarefas mais complexas, como fazer uma
    pesquisa ou preparar uma poção, mas  isso consome sua energia mágica. Você  pode “gastar” um servo
    para receber  um bônus não cumulativo de +2 em  um teste de perícia (exceto testes de  ataque e
    resistência). Os servos não  são criaturas reais; não podem lutar,  nem resistir a qualquer dano ou
    efei to que exija um teste de resistência ou  teste oposto — falharão automatica mente no teste e
    serão destruídos. +3 PM: você pode comandar os servos  para realizar uma única tarefa no seu  lugar.
    Em termos de jogo, eles passam  automaticamente em um teste de perícia com CD máxima igual ao seu
    nível,  +2 para cada servo conjurado. O tem po necessário para realizar a tarefa é o  tempo do uso
    da perícia em questão.  Requer 3º círculo.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 4
    efeito: "muda a duração para um dia  ou até ser descarregada. O espírito realiza uma tarefa a sua escolha que exija até  um dia. O custo do pagamento aumenta para T$ 500. O resto segue normal"
  - custo: 9
    efeito: "muda a duração para 1 semana ou até ser descarregada. O espírito  realiza uma tarefa que exija até uma semana. O custo do pagamento aumenta para T$ 1.000. O resto segue normal. Servo Morto-Vivo Universal 3 (Necromancia) Execução: completa; Alcance: toque;  Alvo: 1 cadáver; Duração: instantânea. Esta magia transforma o cadáver de  um humanoide, animal ou monstro  em um esqueleto ou zumbi (conforme  o estado de conservação do corpo). O  morto-vivo então obedece a todos os  seus comandos, mesmo suicidas. Se  quiser que o morto-vivo o acompanhe,  ele funciona como um parceiro inician te, de um tipo a sua escolha entre ajudante, atirador, combatente, fortão,  guardião ou montaria. Uma vez por rodada, quando sofre  dano, você pode sacrificar um servo  morto-vivo e evitar esse dano. O ser vo é destruído no processo e não pode  ser reanimado Componente material: um ônix negro  (T$ 100), inserido na boca ou olho  do cadáver"
  - custo: 3
    efeito: "muda o componente material  para pó de ônix negro (T$ 500). Em  vez de um zumbi ou esqueleto, cria um  carniçal. Ele pode funcionar como um  parceiro veterano, escolhido entre ajudante, atirador, combatente, fortão ou  guardião. O resto segue normal"
  - custo: 3
    efeito: "muda o componente material  para pó de ônix negro (T$ 500). Em  vez de um zumbi ou esqueleto, cria uma sombra. Ela pode funcionar como  um parceiro veterano, escolhido entre  assassino, combatente ou perseguidor.  O restante da magia segue normal"
  - custo: 2
    efeito: "aumenta o número de servos  conjurados em 1"
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


## Seta Infalível de Talude {#seta-infalivel-de-talude}

```yaml
id: seta-infalivel-de-talude
nome: "Seta Infalível de Talude"
pagina_pdf: 212
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 212
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningbolt.jpg"
  alt: "evocação/energia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Evocação"
  tradicoes: ["Arcana"]
  palavras_chave: ["evocação"]
execucao:
  acao: "padrão"
  alcance: "médio"
  alvo: "1 criatura"
  area: "esfera com 6m de raio"
  duracao: "instantânea"
  resistencia: "Fortitude parcial"
mecanica:
  descricao_resumida: "Ninguém sabe se Mestre Arsenal foi  realmente o criador desta magia —  mas ele foi o primeiro a utilizá-la."
  efeito_detalhado: |
    Ninguém sabe se Mestre Arsenal foi  realmente o criador desta magia —  mas ele foi o primeiro a
    utilizá-la.  Você fecha o punho e gesticula como  se estivesse golpeando o alvo, causando dano de
    impacto igual a 4d6 + sua  Força. A vítima é empurrada 3m na  direção oposta à sua. Passar no teste
    de resistência reduz o dano à metade  e evita o empurrão. +2 PM: aumenta o dano em +1d6. +4 PM:
    aumenta o empurrão em +3m.  +1 PM: aumenta o número de alvos  em +1. Todos os alvos compartilham  um
    mesmo sonho (ou pesadelo) entre  si e com você.
  dano_ou_cura:
    formulas: ["1d6", "4d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "muda o alcance para pessoal,  o alvo para você, a duração para cena  206  Kellyanne Pontes kelly.ayame@gmail.com  Magia e a resistência para nenhuma. Em vez  do normal, seus ataques corpo a corpo  passam a acertar inimigos distantes.  Seu alcance natural aumenta em 3m;  uma criatura Média pode atacar adver sários a até 4,5m, por exemplo"
  - custo: 5
    efeito: "muda o tipo do dano para essência. Sombra Assassina Arcana 5 (Ilusão) Execução:  padrão; Alcance:  curto;  Alvo:  1 criatura; Duração:  cena; Resistência:  Vontade parcial. Esta magia cria uma duplicata ilusória  do alvo na forma de uma silhueta, ligada a ele como se fosse uma manifes tação sólida de sua própria sombra. A  duplicata de sombras segue automati camente o alvo. Sempre que o alvo faz  uma ação hostil — fazer um ataque,  usar uma habilidade, lançar uma magia — a sombra imediatamente realiza  a mesma ação contra o alvo, usando as  mesmas estatísticas e rolagens. A sombra pode ser atacada, tem as mesmas  estatísticas do alvo e é destruída quando chega a 0 PV . Se o alvo passar no  teste de resistência, a sombra desaparece no final do turno do alvo, depois  de copiar sua ação dessa rodada"
  - custo: 10
    efeito: "muda o alvo para criaturas  escolhidas na área. Sonho Arcana 4 (Adivinhação) Execução : 10 minutos; Alcance : ilimitado; Alvo: 1 criatura viva; Duração: veja texto. Você entra nos sonhos de uma criatura. Uma vez lá, pode conversar com  ela até que ela acorde. Se o alvo não  estiver dormindo quando você lançar  a magia, você pode permanecer em  transe até que ele adormeça. Durante o transe, você fica indefeso e sem  consciência dos arredores. Você pode  sair do transe quando quiser, mas a  magia termina"
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


## Sono {#sono}

```yaml
id: sono
nome: "Sono"
pagina_pdf: 213
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 213
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_sleep.jpg"
  alt: "induzir sono"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Encantamento"
  tradicoes: ["Arcana"]
  palavras_chave: ["encantamento", "sono"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 humanoide"
  area: "cone de 9m"
  duracao: "cena"
  resistencia: "Vontade parcial"
mecanica:
  descricao_resumida: "Você enche seus pulmões de luz e  energia positiva e sopra um cone de  poeira reluzente."
  efeito_detalhado: |
    Você enche seus pulmões de luz e  energia positiva e sopra um cone de  poeira reluzente. O sopro
    afeta apenas  seus aliados na área, curando 2d8+4  pontos de vida e removendo uma das  seguintes
    condições de todos os alvos:  abalado, atordoado, apavorado, alquebrado, cego, confuso, debilitado,
    enfei tiçado, enjoado, esmorecido, exausto,  fascinado, fatigado, fraco, frustrado,  lento,
    paralisado, pasmo e surdo. +2 PM: aumenta a cura em +1d8+2. +4 PM: remove todas as condições
    listadas, em vez de apenas uma. Sopro  das Uivantes Arcana 2 (Evocação) Execução: padrão; Alcance:
    pessoal;  Área: cone de 9m; Duração: instan tânea; Resistência: Fortitude parcial. Você sopra ar
    gélido que causa 4d6  pontos de dano de frio (Fortitude reduz à metade). Criaturas de tamanho  Médio
    ou menor que falhem na resis tência ficam caídas e são empurradas  6m na direção oposta. Se houver
    uma  parede ou outro objeto sólido (mas não uma criatura) no caminho, a criatura para de se mover,
    mas sofre +2d6  pontos de dano de impacto. +2 PM: aumenta o dano de frio em  +2d6.
  dano_ou_cura:
    formulas: ["1d8+2", "2d6", "2d8+4", "4d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 4
    efeito: "além do normal, se um aliado  estiver com PV negativos, seus PV são  levados a 0 e então a cura é aplicada"
  - custo: 3
    efeito: "aumenta o tamanho máximo  das criaturas afetadas em uma categoria.  Requer 3º círculo"
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


## Suporte Ambiental {#suporte-ambiental}

```yaml
id: suporte-ambiental
nome: "Suporte Ambiental"
pagina_pdf: 213
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 213
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_protectionformnature.jpg"
  alt: "natureza"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Abjuração"
  tradicoes: ["Divina"]
  palavras_chave: ["abjuração"]
execucao:
  acao: "padrão"
  alcance: "toque"
  alvo: "1 criatura"
  area: "cone de 9m"
  duracao: "1 dia"
  resistencia: "Vontade anula"
mecanica:
  descricao_resumida: "Esta magia cruel foi desenvolvida pelo  mago de combate Edauros, quando  ainda era um bípede."
  efeito_detalhado: |
    Esta magia cruel foi desenvolvida pelo  mago de combate Edauros, quando  ainda era um bípede. Você
    faz um gesto rápido e dispara uma lâmina de ar  em alta velocidade. Criaturas na área  sofrem 10d8
    pontos de dano de corte e  ficam sangrando. Alvos que passem no  teste de resistência sofrem metade
    do  dano e não ficam sangrando. +2 PM: aumenta o dano em +2d8.
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


## Teia {#teia}

```yaml
id: teia
nome: "Teia"
pagina_pdf: 214
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 214
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/ability_ensnare.jpg"
  alt: "armadilha/teia"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Convocação"
  tradicoes: ["Arcana"]
  palavras_chave: ["teia"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "veja texto"
  area: "cubo com 6m de lado"
  duracao: "cena"
  resistencia: "Reflexos anula"
mecanica:
  descricao_resumida: "Você move objetos ou criaturas se con centrando."
  efeito_detalhado: |
    Você move objetos ou criaturas se con centrando. Ao lançar a magia, escolha  uma das opções a
    seguir. Força Contínua: você move uma criatura Média ou menor, ou objeto de até  10 espaços, a até
    6m por rodada. Uma  criatura pode anular o efeito sobre ela,  ou sobre um objeto que possua,
    passando num teste de Vontade. O alvo  pode ser movido em qualquer direção  dentro do alcance. Ele
    cai no chão se  sair do alcance ou a magia terminar.  Duração: sustentada. Empurrão Violento: nesta
    versão a ener gia mágica é expelida de uma única vez  e arremessa até 10 objetos (no máximo  10
    espaços). Os objetos devem estar a  até 3m uns dos outros e podem ser ar remessados até o alcance da
    magia. Objetos arremessados podem atingir  criaturas em seu caminho, causando  de 1 ponto de dano de
    impacto por espaço (objetos macios, sem pontas ou  sem fio) até 1d6 pontos de dano por  espaço
    (objetos duros, pontudos ou  afiados). Criaturas atingidas têm direito a um teste de Reflexos para
    reduzir  o dano à metade.Criaturas Médias ou menores podem  ser arremessadas, mas têm direito a  um
    teste de Vontade para evitar o efei to (em si mesmas ou em objetos que  estejam segurando). Uma
    criatura ar remessada contra uma superfície só lida sofre 1d6 pontos de dano de impacto para cada 3m
    que “voou” no  deslocamento (incluindo outras criaturas; nesse caso, ambas sofrem o  dano). Duração:
    instantânea. +2 PM: aumenta o número de alvos  em +5.  +2 PM: aumenta o dano de raios (veja  acima)
    em +1d8. +2 PM: aumenta o raio da área em  +3m.  +2 PM: aumenta o dano dos tentácu los em +2d6.
    Terremoto Divina 4 (Evocação) Execução:  padrão; Alcance:  longo;  Área:  esfera com 30m de raio;
    Duração: 1 rodada; Resistência:  veja texto. Esta magia cria um tremor de terra que  rasga o solo. O
    terremoto dura uma ro dada, durante a qual criaturas sobre o  solo ficam atordoadas (apenas uma vez
    por cena). Barreiras físicas não inter rompem a área de Terremoto. O efeito exato depende do
    terreno. Caverna ou subterrâneo: a magia derruba o teto, causando 12d6 pontos de  dano de impacto e
    agarrando todas as  criaturas na área. Um teste de Reflexos reduz o dano à metade e evita a
    condição. Construção: todas as estruturas na área  sofrem 200 pontos de dano de impacto, o
    suficiente para derrubar constru ções de madeira ou alvenaria simples,  mas não de alvenaria
    reforçada. Criaturas em uma construção que desmo rone sofrem o mesmo efeito de criatu ras em uma
    caverna (veja acima). Espaço aberto: fendas se abrem no  chão. Cada criatura na área precisa ro lar
    um dado; em um resultado ímpar,  uma fenda se abre sob ela e ela precisa  fazer um teste de
    Reflexos; se falhar,  cai na fenda. A criatura pode escapar  gastando uma ação completa e passando
    em um teste de Atletismo. No  início do seu próximo turno as fendas  se fecham, matando todos que
    estejam dentro delas.Penhasco: o penhasco racha, criando um  desmoronamento que percorre uma
    distância horizontal igual à distância da  queda. Por exemplo, um penhasco com  30m de altura
    desmorona em uma área  de 30m de comprimento além da base.  Qualquer criatura no caminho sofre  12d6
    pontos de dano de impacto e fica  agarrada. Um teste de Reflexos reduz o  dano à metade e evita
    ficar agarrado. Rio, lago ou pântano: fissuras se abrem  sob a água, drenando-a e formando um
    lamaçal. Criaturas na área precisam fazer um teste de Reflexos para não afundarem na lama e ficarem
    agarradas. No  início do seu próximo turno as fissuras  se fecham, possivelmente afogando as
    criaturas que ficaram agarradas. Criaturas agarradas (efeito possível de  caverna, construção,
    penhasco e rio,  lago ou pântano) sofrem 1d6 pontos de  dano por rodada até serem libertadas,  o que
    exige uma ação completa e um  teste de Atletismo (por parte da própria  criatura ou de um aliado
    adjacente).
  dano_ou_cura:
    formulas: ["12d6", "1d6", "1d8", "2d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 3
    efeito: "aumenta o tamanho máximo  da criatura em uma categoria (para  Grande, Enorme e Colossal) ou dobra  a quantidade de espaços do objeto. Teletransporte Arcana 3 (Convocação) Execução: padrão; Alcance: toque;  Alvo: até 5 criaturas voluntárias; Duração: instantânea.  Esta magia transporta os alvos para um  lugar a sua escolha a até 1.000km. Você  precisa fazer um teste de Misticismo,  com dificuldade que depende de seu  conhecimento sobre o local de destino. CD 20. Um lugar familiar, que você  visita com frequência.  CD 30. Um lugar conhecido, que você  já visitou pelo menos uma vez.  CD 40. Um lugar que você nunca visitou e só conhece a partir da descrição  de outra pessoa que esteve lá. Você não pode se teletransportar para  um lugar que nunca visitou sem a descrição de alguém. Ou seja, não pode  se transportar para a “sala de tesouro  do rei” se nunca esteve nela nem falou  com alguém que esteve. Se passar no teste, os alvos chegam ao  lugar desejado. Se falhar, os alvos sur gem 1d10 x 10km afastados em qualquer direção (se o destino é uma cidade costeira, você pode surgir em  alto-mar). Se falhar por 5 ou mais,  você chega em um lugar parecido, mas  errado. E se você rolar 1 natural no  teste a magia falha (mas você gasta os  PM) e fica atordoado por 1d4 rodadas"
  - custo: 2
    efeito: "em vez do normal, a magia teletransporta os alvos para seu santuá rio — um local familiar e previamente preparado. A magia pode ser usada  sem limite de distância ou necessidade  de testes, mas apenas dentro do mesmo plano. Preparar um local como seu  santuário exige um ritual de um dia e  o gasto de T$ 1.000. Você só pode ter  um santuário por vez"
  - custo: 9
    efeito: "muda a execução para ação  completa, a duração para cena e adiciona sacrifício de 1 PM. Em vez do  normal, você cria um círculo de 1,5m  de diâmetro no chão, que transpor ta qualquer criatura que pisar nele. O  destino é escolhido quando a magia  é lançada e pode ser qualquer lugar,  em qualquer mundo, sem a necessidade de testes, desde que seja conhecido por você. O círculo é tênue e praticamente invisível. Você pode marcá-lo  de alguma forma (por exemplo, lançando-o sobre uma plataforma elevada). Se não fizer isso, alguém pode pisar nele por acidente. Junte isso a um  destino hostil e você terá uma armadilha bastante eficaz! Requer 5º círculo. Tempestade Divina Divina 2 (Evocação) Execução: completa; Alcance: longo;  Área: cilindro com 15m de raio e 15m  de altura; Duração: sustentada.  Esta magia só pode ser usada em ambientes abertos. A área fica sujeita a  um vendaval — ataques à distância  sofrem penalidade de –5, chamas são  apagadas e névoas são dissipadas. Você  também pode gerar chuva (–5 em testes de Percepção), neve (como chuva, e  a área se torna terreno difícil) ou granizo (como chuva, mais 1 ponto de dano  de impacto por rodada, no início de  seus turnos)"
  - custo: 1
    efeito: "além do normal, uma vez por  rodada você pode gastar uma ação padrão para fazer um raio cair sobre um  alvo na área, causando 3d8 pontos de  dano de eletricidade (Reflexos reduz  à metade)"
  - custo: 3
    efeito: "se escolheu causar chuva, ela  se torna mais grossa, revelando a silhueta de criaturas invisíveis na área.  Criaturas Médias ou menores ficam  lentas e criaturas voadoras precisam  passar num teste de Atletismo por ro dada ou caem ao solo (mas podem fazer testes de Acrobacia para reduzir o  dano de queda, como o normal)"
  - custo: 3
    efeito: "se escolheu causar granizo,  muda o dano para 2d6 por rodada"
  - custo: 3
    efeito: "se escolheu causar neve, criaturas na área sofrem 2d6 pontos de  dano de frio no início de seus turnos"
  - custo: 3
    efeito: "muda a área para cilindro com  90m de raio e 90m de altura. 208  Kellyanne Pontes kelly.ayame@gmail.com  Magia Tentáculos  de Trevas Arcana 3 (Necromancia) Execução: padrão; Alcance: médio;  Área: esfera com 6m de raio; Duração: cena.  Um círculo de energias sombrias se  abre no chão, de onde surgem tentácu los feitos de treva viscosa. Ao lançar a  magia e no início de cada um de seus  turnos, você faz um teste da manobra  agarrar (usando seu valor de Misticis mo) contra cada criatura na área. Se  você passar, a criatura é agarrada; se  a vítima já está agarrada, é esmagada,  sofrendo 4d6 pontos de dano de trevas. A área conta como terreno difícil.  Os tentáculos são imunes a dano"
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


## Toque Chocante {#toque-chocante}

```yaml
id: toque-chocante
nome: "Toque Chocante"
pagina_pdf: 215
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 215
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg"
  alt: "eletricidade"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Evocação"
  tradicoes: ["Arcana"]
  palavras_chave: ["evocação"]
execucao:
  acao: "padrão"
  alcance: "toque"
  alvo: "1 criatura"
  area: "esfera com 6m de  raio"
  duracao: "instantâ nea"
  resistencia: "Fortitude reduz à  metade"
mecanica:
  descricao_resumida: "Arcos elétricos envolvem sua mão,  causando 2d8+2 pontos de dano de  eletricidade."
  efeito_detalhado: |
    Arcos elétricos envolvem sua mão,  causando 2d8+2 pontos de dano de  eletricidade. Se o alvo usa
    armadura de  metal (ou carrega muito metal, a crité rio do mestre), sofre uma penalidade  de –5 no
    teste de resistência.  +1 PM: aumenta o dano em +1d8+1. +2 PM: muda o alcance para pessoal  e o alvo
    para área: esfera com 6m de  raio. Você dispara raios pelas pontas  dos dedos que afetam todas as
    criatu ras na área. Toque da Morte Universal 5 (Necromancia) Execução: padrão; Alcance: toque;
    Alvo: 1 criatura; Duração: instantâ nea; Resistência: veja texto.  Sua mão exala energias letais. A
    criatura sofre 10d8+10 pontos de dano de  trevas. Se estiver com menos da meta de de seus PV , em
    vez disso deve fazer  um teste de Fortitude. Se passar, sofre o dano normal. Se falhar, seus PV são
    reduzidos a –10. +2 PM: aumenta o dano em +2d6.
  dano_ou_cura:
    formulas: ["10d8+10", "1d8+1", "2d6", "2d8+2"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 2
    efeito: "muda a resistência para nenhum. Como parte da execução da magia, você faz um ataque corpo a corpo  contra o alvo. Se acertar, causa o dano  do ataque e da magia"
  - custo: 2
    efeito: "muda o alcance para curto.  Em vez de tocar no alvo, você dispara  um raio púrpura da ponta de seu dedo  indicador"
  - custo: 10
    efeito: "muda o alcance para curto  e o alvo para inimigos no alcance. Em  vez de tocar no alvo, você dispara raios  púrpuras da ponta de seus dedos. Toque Vampírico Arcana 2 (Necromancia) Execução: padrão; Alcance: toque;  Alvo: 1 criatura; Duração: instantâ nea; Resistência: Fortitude reduz à  metade.  Sua mão brilha com energia sombria,  causando 6d6 pontos de dano de trevas. Você recupera pontos de vida  iguais à metade do dano causado (se  causou algum dano)"
  - custo: 2
    efeito: "muda a  resistência para nenhum . Como parte da execução da magia, você pode fazer um ataque corpo  a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia, e recupera pontos de vida iguais à metade do  dano da magia"
  - custo: 2
    efeito: "muda o alcance para pessoal,  o alvo para você e a duração para cena.  Em vez do normal, a cada rodada você  pode gastar uma ação padrão para to car 1 criatura e causar 3d6 pontos de  dano. Você recupera pontos de vida  iguais à metade do dano causado. Requer 3º círculo"
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


## Tranca Arcana {#tranca-arcana}

```yaml
id: tranca-arcana
nome: "Tranca Arcana"
pagina_pdf: 215
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 215
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_devotionaura.jpg"
  alt: "proteção/escudo"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Abjuração"
  tradicoes: ["Arcana"]
  palavras_chave: ["abjuração", "tranca"]
execucao:
  acao: "padrão"
  alcance: "toque"
  alvo: "1 objeto Grande ou menor"
  duracao: "permanente"
  resistencia: "—"
mecanica:
  descricao_resumida: "Esta magia tranca uma porta ou outro  item que possa ser aberto ou fechado  (como um baú, caixa etc."
  efeito_detalhado: |
    Esta magia tranca uma porta ou outro  item que possa ser aberto ou fechado  (como um baú, caixa
    etc.), aumentan do a CD de testes de Força ou Ladinagem para abri-lo em +10. Você pode  abrir
    livremente sua própria tranca  sem problemas. Componente material: chave de bronze  no valor de T$
    25. Truque: muda o alcance para curto.  Em vez do normal, pode abrir ou fechar um objeto de tamanho
    Grande ou  menor, como uma porta ou baú. Não  afeta objetos trancados.  +5 PM: aumenta a CD para
    abrir o  alvo em +5.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "muda o alcance para curto e a  duração para instantânea. Em vez do  209  Kellyanne Pontes kelly.ayame@gmail.com  Capítulo Quatro normal, a magia abre portas, baús e janelas trancadas, presas, barradas ou  protegidas por Tranca Arcana (o efeito é  dissipado) a sua escolha. Ela também  afrouxa grilhões e solta correntes"
  - custo: 5
    efeito: "muda o alvo para 1 objeto de  qualquer tamanho, podendo afetar até  mesmo os portões de um castelo. Requer 3º círculo"
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


## Tranquilidade {#tranquilidade}

```yaml
id: tranquilidade
nome: "Tranquilidade"
pagina_pdf: 216
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 216
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_mindsteal.jpg"
  alt: "dominação/encantamento"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Encantamento"
  tradicoes: ["Divina"]
  palavras_chave: ["encantamento"]
execucao:
  acao: "padrão"
  alcance: "curto"
  alvo: "1 animal ou humanoide"
  duracao: "cena"
  resistencia: "Vontade parcial"
mecanica:
  descricao_resumida: "Você emana ondas de serenidade."
  efeito_detalhado: |
    Você emana ondas de serenidade. Se  falhar na resistência, o alvo tem sua  atitude mudada para
    indiferente (veja  a página 259) e não pode atacar ou realizar qualquer ação agressiva. Se passar,
    sofre –2 em testes de ataque. Qualquer ação hostil contra o alvo ou seus  aliados dissipa a magia e
    faz ele retor nar à atitude que tinha antes (ou pior,  de acordo com o mestre). +1 PM: aumenta o
    número de alvos  em +1. +5 PM: muda o alcance para médio e o  alvo para criaturas escolhidas. Requer
    3º círculo. Transformação  de Guerra Arcana 3 (Transmutação) Execução: padrão; Alcance: pessoal;
    Alvo: você; Duração: sustentada.  Você se torna uma máquina de comba te, ficando mais forte, rápido
    e resis tente. Você recebe +6 na Defesa, tes tes de ataque e rolagens de dano corpo  a corpo, e 30
    PV temporários. Durante  a Transformação de Guerra você não pode  lançar magias, mas se torna
    proficiente  em todas as armas. +2 PM: aumenta os bônus na Defe sa, testes de ataque e rolagens de
    dano  corpo a corpo em +1, e os PV tempo rários em +10.
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 1
    efeito: "muda o alvo para 1 criatura"
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


## Transmutar Objetos {#transmutar-objetos}

```yaml
id: transmutar-objetos
nome: "Transmutar Objetos"
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
  circulo: 1
  escola: "Transmutação"
  tradicoes: ["Arcana"]
  palavras_chave: ["transmutação"]
execucao:
  acao: "padrão"
  alcance: "toque"
  alvo: "matéria-prima, como madeira,  rochas, ossos"
  duracao: "cena"
  resistencia: "Vontade anula"
mecanica:
  descricao_resumida: "Através de uma superfície reflexiva (bacia de água benta para clérigos,  lago para druidas, bola de cristal para  magos, espelho para feiticeiros etc."
  efeito_detalhado: |
    Através de uma superfície reflexiva (bacia de água benta para clérigos,  lago para druidas, bola de
    cristal para  magos, espelho para feiticeiros etc.)  você pode ver e ouvir uma criatura escolhida e
    seus arredores (cerca de 6m  em qualquer direção), mesmo que ela  se mova. O alvo pode estar a
    qualquer  distância, mas se passar em um teste  de Vontade, a magia falha. A vítima recebe bônus ou
    penalidades em seu tes te de resistência, dependendo do co nhecimento que você tiver dela. • Não
    conhece o alvo: +10. • Ouviu falar do alvo: +5. • O alvo está em outro plano ou  mundo: +5. • Já
    encontrou o alvo pessoalmente: +0. • Tem uma pintura, escultura ou outra  representação do alvo: –2.
    • Conhece bem o alvo: –5. • Tem um pertence pessoal ou peça de  roupa do alvo: –5. • Tem uma parte
    do corpo do alvo  (unhas, cabelos...): –10.Visão da Verdade Universal 4 (Adivinhação) Execução:
    movimento; Alcance: pessoal; Alvo: você; Duração: cena.  Você enxerga a forma real das coisas.  Você
    pode ver através de camuflagem e  escuridão (normais e mágicas), assim  como efeitos de ilusão e
    transmutação  (enxergando a verdade como formas  translúcidas ou sobrepostas). +1 PM: além do
    normal, o alvo fica  com sentidos apurados; ele recebe +10  em todos os testes de Percepção.  +2 PM:
    além do normal, o alvo escuta  falsidades; ele recebe +10 em todos os  testes de Intuição.
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


## Vitalidade Fantasma {#vitalidade-fantasma}

```yaml
id: vitalidade-fantasma
nome: "Vitalidade Fantasma"
pagina_pdf: 217
fonte:
  livro: "Tormenta20 (v1.3)"
  capitulo: 4
  pagina_pdf: 217
icone_wowhead:
  url: "https://wow.zamimg.com/images/wow/icons/large/inv_potion_76.jpg"
  alt: "cura/vida"
  verificado_em: "2025-08-09"
classificacao:
  circulo: 1
  escola: "Necromancia"
  tradicoes: ["Arcana"]
  palavras_chave: ["necromancia"]
execucao:
  acao: "padrão"
  alcance: "pessoal"
  alvo: "você"
  area: "esfera com 6m de raio centrada em você  e a resistência para Fortitude reduz  à metade"
  duracao: "instantânea"
  resistencia: "—"
mecanica:
  descricao_resumida: "Você suga energia vital da terra, rece bendo 2d10 pontos de vida temporá rios."
  efeito_detalhado: |
    Você suga energia vital da terra, rece bendo 2d10 pontos de vida temporá rios. Os PV temporários
    desaparecem  ao final da cena. +2 PM: aumenta os PV temporários  recebidos em +1d10. Caso a magia
    cause dano, em vez disso aumenta o  dano causado em +1d10.+1 PM: você pode falar com plantas
    (normais ou monstruosas) e rochas.  Plantas e rochas têm percepção limitada de seus arredores e
    normalmente  fornecem respostas simplórias. 211  Kellyanne Pontes kelly.ayame@gmail.com  CAPÍTULO
    JogandoJogando5  Kellyanne Pontes kelly.ayame@gmail.com  “Aventureiros não ficam velhos! Apenas
    ficam experientes! Ou morrem  antes, né?” — Katabrok, o Filósofo  Kellyanne Pontes
    kelly.ayame@gmail.com  Capítulo Cinco Então você construiu seu personagem,  combinou a primeira
    sessão de jogo e  finalmente está sentado em volta da  mesa (ou conectado via internet) com  seus
    amigos. A aventura está para começar! E agora? Não deixe que o número de páginas deste livro o
    iluda: jogar Tormenta20 é simples. Como jogador,  você vai ouvir o que o mestre descreve, pensar em
    como seu personagem reagiria a isso e então declarar  uma ou mais ações. Também vai prestar atenção
    no  que os demais jogadores fazem e interagir com os  personagens deles. Uma sessão de Tormenta20 é
    essencialmente uma longa conversa, na qual você e  seus amigos contam uma história uns para os
    outros. Como jogador, suas responsabilidades são cuidar  de seu personagem, divertir seus colegas e
    se integrar  com o grupo, tanto no jogo quanto na vida real. Você  não precisa “adivinhar” para onde
    o mestre quer  levar a história — um dos melhores lados deste jogo  é justamente a liberdade que ele
    oferece! Contudo,  lembre-se de que o mestre tem a palavra final sobre  o resultado das ações e
    decisões dos personagens.  Assim como ele não decide tudo que vai acontecer na  história, você
    também não decide sozinho. Todos os  membros do grupo colaboram igualmente. Alguns mestres gostam de
    começar aventuras  com os personagens separados, jogando um pouco  com cada jogador. Outros preferem
    decretar que  os personagens já se conhecem de antemão ou que  pelo menos estão todos no mesmo lugar
    no início.  O rumo natural de uma narrativa de Tormenta20  é unir os personagens num grupo de heróis
    que se  aventura em conjunto. Você não precisa anular a  personalidade de seu personagem para se
    juntar aos  outros, mas deve colaborar tanto quanto possível. Uma aventura de Tormenta20 é como uma
    história numa série, filme, livro, HQ ou videogame. Se  tudo estiver fluindo e você estiver
    “assistindo a um  filme” na sua cabeça enquanto imagina o que você e  seus amigos descrevem, está no
    caminho certo. Você também vai usar as regras e rolar dados  para fazer testes quando o mestre
    pedir. Em Tor menta20, você não precisará fazer testes ou se  preocupar com regras a não ser em
    situações com  resultado incerto ou que tenham grande peso para  a história. Por exemplo, caminhar
    até o mercado  e perguntar os preços das especiarias vindas de  longe não exige um teste. Correr até
    o mercado,  desviando de dezenas de pessoas e animais, pelas  ruas labirínticas, chegando a tempo de
    impedir um  assassinato, exige um teste (ou vários).Não olhe para sua ficha tentando decidir quais
    ações são possíveis. Qualquer ação é possível, a não  ser que o mestre diga algo em contrário. Se
    você  acaba de se deparar com um nobre e quer conquistar a admiração dele, não procure na ficha de
    personagem alguma habilidade para impressionar  aristocratas. Apenas diga o que pretende fazer e
    deixe que o mestre decida qual teste você precisa  fazer para isso. Começar um discurso empolado?
    Fazer uma rápida exibição de suas habilidades com  a espada? Contar uma piada? Mentir, dizendo que
    você é um parente distante dele? Tudo é válido.  Algumas ações, como sair voando ou quebrar uma
    parede com um soco, serão impossíveis, ao menos  para personagens iniciantes. De novo, pense em
    séries, filmes, livros e videogames. Imagine se a  ação que você pensou teria lugar numa história
    bem  amarrada numa dessas mídias. Acima de tudo, tente imaginar se a ação é algo  que seu personagem
    faria. Uma clériga do Deus da  Justiça realmente tentaria engambelar o nobre com  uma mentira? Um
    menestrel simpático tentaria  ameaçá-lo? Mas estamos nos adiantando. Vamos começar do  começo. O
    papel  do Jogador Quase toda interação numa sessão de Tormen ta20 começa com o mestre estabelecendo
    uma cena.  Ele pode descrever um lugar, como uma taverna,  um castelo ou uma floresta. Ou pode
    narrar um  acontecimento, como uma caravana de mercadores  chegando à cidade ou um bando de orcs
    correndo  para atacar os personagens jogadores. Ele pode até  mesmo descrever uma sensação — por
    exemplo, um  ruído que o aventureiro acaba de ouvir num quarto  escuro e aparentemente vazio, ou a
    dor nauseante  quando o herói percebe ter sido envenenado. Muitas  vezes o mestre acaba sua fala com
    as palavras “O que  você faz?” ou “O que vocês fazem?”. Mesmo que ele  não diga isso, quando o
    mestre termina, os jogadores  estão convidados a declarar suas ações. Você não precisa decorar cada
    palavra que o  mestre disser. A descrição não é um enigma ou  “pegadinha” que você deve decifrar.
    Mas preste  atenção, tente imaginar o que está acontecendo.  Uma caravana de mercadores está
    chegando à  cidade? Imagine o burburinho de várias pessoas  falando ao mesmo tempo em línguas
    estrangeiras.  A visão impressionante de roupas exóticas e sem214  Kellyanne Pontes
    kelly.ayame@gmail.com  Jogando blantes desconhecidos. Pense na curiosidade de seu  personagem para
    bisbilhotar os novos produtos que  eles podem estar trazendo. Sinta o entusiasmo de  saber que pode
    haver notícias de terras estrangeiras  e fique ansioso, pensando em quanto dinheiro pode  gastar com
    as novidades que acabam de chegar. Um  bando de orcs está correndo para o ataque? Visualize seus
    rostos disformes, os dentes arreganhados  e os olhos apertados de ódio. Ouça o barulho das  lâminas
    saindo das bainhas. Sinta o cheiro do suor  azedo deles. Mais do que isso, entre em seu perso nagem
    e pense como ele: há um grupo de criaturas  selvagens tentando matá-lo e elas vão chegar em  questão
    de segundos! Embora seu personagem possa ser indiferente a  algumas cenas ou acontecimentos, tente
    achar um  ponto de conexão em tudo que o mestre diz. Imagine-se cercado por essas imagens, sons e
    cheiros.  Interpretar um personagem é estar no mundo de  jogo durante algumas horas. Declarando  Sua
    Ação Uma vez que o mestre tenha estabelecido a  cena, os jogadores reagem, dizendo o que vão fazer.
    Esta estrutura não é rígida — não há uma “fase do  mestre” e uma “fase dos jogadores”, apenas o
    fluxo  normal de uma conversa entre amigos. Também não  há uma ordem fixa para as ações, exceto em
    combate. Assim como em uma conversa em grupo, ouça  seus amigos, ache o momento certo para falar e
    declare sua ação sem interromper (demais) os outros.  O mestre vai ajudar nessa dinâmica,
    perguntando as  ações de todos caso um ou mais jogadores estejam  calados ou não consigam um espaço
    para falar. Não existe um formato único para declarar sua  ação. Você pode falar em primeira pessoa
    (“Eu vou  até os mercadores para perguntar as notícias do  Deserto da Perdição”) ou em terceira
    (“Sir Dragan saca a espada e ergue o escudo, avisando aos orcs  para ficarem longe”). Cada RPGista
    tem sua própria  mania para declarar suas ações: “Eu quero escutar  furtivamente a conversa na mesa
    ao lado”, “Meu  personagem vai se esconder no meio do feno”, “Se  o nobre é muito arrogante,
    Aethelric tentaria meter  medo nele”, “Então eu saltei para impedir que ele  tome o veneno!” são
    todos exemplos de jeitos válidos  de declarar sua ação. A maioria dos jogadores acaba  alternando
    entre vários jeitos. Você não precisa achar as palavras exatas para  declarar suas ações. Por
    exemplo, se você diz “Vou  sair do meu quarto”, todos vão presumir que você  levantou da cama, lavou
    o rosto e se vestiu, a não  ser que você diga especificamente que saiu pelado!  Da mesma forma, se
    você disser que vai comer uma  ração de viagem, todos presumirão que você primeiro  a desembrulhou.
    Tormenta20 não é um jogo de  minúcias e detalhes irritantes. Também não pense nas  ações que você
    declarou como uma “jogada” num jogo  competitivo. Se, por engano, você disser “Eu ataco o  elfo” em
    vez de “Eu ataco o orc”, não há problema;  você obviamente queria atacar o orc, não o elfo. Existe
    um equilíbrio sobre o que é grande demais e pequeno demais para ser uma “ação”. Em  cenas
    movimentadas como combates, perseguições e Declarando Suas Ações Para declarar suas ações, diga o
    que você  quer fazer e como. Por exemplo: “Eu vou tentar impressionar o nobre,  cantando uma música
    de sua terra.” “Eu vou tentar me esconder dos guardas,  me abaixando atrás dos barris.” “Eu vou
    atacar o lefeu com minha espada.” Não Seja Fominha! Ao declarar sua ação, tome  cuidado para não
    declarar  também a ação dos outros.  Você pode dizer “Vou até os  mercadores para perguntar
    notícias”, mas não “Vou até  os mercadores e eles me  contam notícias do Deserto da Perdição”. Ou
    pior: “Sir Dragan  saca a espada e Lucille fica para  trás, escondendo-se atrás das  árvores”.
    Tentar controlar os  personagens do mestre é irritante  e controlar os personagens dos  outros
    jogadores é pura falta de  educação. Mesmo que você ache  que tem ideias melhores que  outro
    jogador, contenha-se. Você pode no máximo dar sugestões.  Se alguém está fazendo isso com  você,
    peça para ele parar ou peça  ajuda do mestre. Lembre-se: sua  visão da história não é melhor  nem
    pior que a de ninguém.  Mesmo que você ache genial a  cena do cavaleiro defendendo  a ladina que se
    esconde nas  sombras, a decisão não é só sua. 215  Kellyanne Pontes kelly.ayame@gmail.com  Capítulo
    Cinco armadilhas, tudo isso está codificado em regras. Em  outras cenas, não há tanta rigidez, mas
    logo você vai  pegar o jeito. “Eu passo a tarde inteira conversando  com os mercadores” é uma ação
    ampla demais. Por  outro lado, “Eu caminho um metro” é uma ação  restrita demais. O ideal é que cada
    ação convide o  mestre e os outros jogadores a responder, criando  a interação e a narrativa. Além
    disso, o mestre vai  dar o tom da cena. Se você diz “Vou falar com os  mercadores”, o mestre pode
    responder com “Vocês  passam a tarde conversando e você descobre muitas  novidades...” ou com “O
    mercador olha para os lados,  desconfiado, e sussurra que tem coisas importantes a  contar, mas não
    aqui”. Interpretando Interpretar um personagem é um dos aspectos  mais importantes de Tormenta20.
    Mas como se  interpreta um personagem? Para interpretar, você deve primeiro conhecer  seu
    personagem. Vamos falar mais sobre isso daqui  a pouco, mas já podemos adiantar algo: seu personagem
    tem uma personalidade diferente da sua, pelo  menos em alguns aspectos. Assim, quando você se
    deparar com uma situação descrita pelo mestre ou  uma ação realizada por um dos outros jogadores,
    pense em como o personagem reagiria. A maioria das situações não vai provocar reações  extremas. Ao
    ver a caravana de mercadores chegando  à cidade, seu personagem dificilmente fugiria de  medo ou
    atacaria. Assim, é plenamente aceitável que  você tenha uma reação “comum”: olhar os produtos,
    puxar conversa, tentar notar algo suspeito, ignorar a  caravana... Contudo, às vezes haverá uma
    situação  capaz de provocar uma reação muito forte. Isso inclui  a maioria dos combates e muitas
    cenas cruciais de  interpretação. Sua resposta vai ser lógica: frente a uma batalha, você vai lutar
    ou fugir; frente a uma  acusação de assassinato, vai tentar se defender. Mas e se, por acaso, o
    mestre descreveu a caravana de mercadores do Deserto da Perdição, sem  lembrar que seu personagem é
    fascinado por essa  região? Como um detalhe de interpretação, você  incluiu que seu herói sempre
    sonhou em ser um  mercador rico, antes de ser chamado à aventura. E  agora? O que você faz? Na vida
    real, devemos agir com bom senso,  sempre medindo as consequências e sem ousar  muito. Em
    Tormenta20, não precisamos ter tanto  cuidado. Afinal, é só um jogo de faz de conta! Assim,  embora
    você não deva fazer ações absurdas, pode  jogar o bom senso pela janela por algum tempo,  para
    interpretar seu personagem. Talvez, ao ver a  caravana, você descreva seu personagem chorando  e se
    revoltando, por pura inveja dos mercadores.  Por que eles estão vivendo seu sonho e você está
    enfrentando monstros toda semana? Talvez você vá  até os mercadores e peça para integrar a caravana,
    para o choque dos outros jogadores! Talvez você  intempestivamente ofereça os serviços do grupo
    como guardas da caravana de graça, só pela honra  de acompanhar profissionais tão importantes! Tudo
    isso pode ser disruptivo e gerar alguns  problemas... Mas só para os personagens! Desde  que os
    jogadores (as pessoas reais em volta da mesa)  não estejam sendo prejudicados, esse tipo de ação
    meio louca pode ser muito divertida. Não estrague  a história que todos estão construindo em
    conjunto,  mas não tenha medo de adicionar novos elementos.  Talvez sua ação não dê certo... Mas, se
    der, pode levar  a toda uma nova linha narrativa! Parte de interpretar também é “falar dentro do
    personagem”. Ou seja, em vez de só declarar suas  ações, você assume a voz do personagem e fala  O
    Objetivo do RPG Por mais que se teorize e se fale  sobre Tormenta20 e outros  jogos do mesmo tipo, o
    objetivo  dos jogadores e do mestre é  apenas um: diversão. Essa diversão é alcançada através  de
    uma história e regras, mas  nenhum desses elementos  deve ser mais importante que a  verdadeira
    finalidade do jogo. Se você e seus amigos estão criando  uma narrativa memorável, cheia  de viradas
    surpreendentes e  personagens marcantes, ótimo.  Mas a qualidade da história não é  mais importante
    que a diversão  dos envolvidos. Se o grupo  alcança maestria em regras e os  jogadores triunfam
    sobre desafios  cada vez maiores, excelente! Mas  isso não vale de nada se todos não  estão se
    divertindo.Ao jogar Tormenta20,  priorize a troca entre as pessoas,  a descontração e o bem-estar
    dos  participantes. Em geral, os me lhores momentos narrativos não  vêm de tramas minuciosamente
    planejadas, mas das surpresas  criadas pela interação entre  os jogadores. Este é um jogo  baseado
    em relações pessoais e  nenhuma história ou regra valem  mais que uma amizade. 216  Kellyanne Pontes
    kelly.ayame@gmail.com  Jogando como se fosse ele: “Bem-vindos, mercadores do  Deserto! Sou Dragan.
    Vocês não imaginam como  é bom sentir o cheiro dos temperos que vocês  trazem!” Embora a maioria dos
    RPGistas goste  de fazer isso, não é obrigatório. Se você não se  sentir à vontade para falar como
    seu personagem,  pode apenas descrever ações (“Eu me apresento e  digo que é muito bom sentir o
    cheiro...”). Alguns  jogadores elevam isso a arte, criando uma voz, um  sotaque ou um conjunto de
    maneirismos para seus  personagens. De novo, isso não é obrigatório, mas  pode ser muito divertido.
    Não se preocupe em ter uma “boa” interpretação  no sentido teatral do termo. O objetivo de Tormen
    ta20 não é formar atores, muito menos promover  competições de atuação. Você não precisa ter vergo
    nha, apenas se divertir. Reagindo Esses “passos” informais se seguem, constituindo  o jogo em si. A
    partir de suas ações e sua interpretação, o mestre vai descrever novas situações e os  jogadores vão
    descrever suas próprias ações, para  que você narre sua nova ação e assim por diante.Em Tormenta20,
    diferente de videogames,  você não pode “salvar” o jogo ou voltar atrás. Deve  lidar com as
    consequências de suas ações — a não  ser no caso de ter se enganado com alguma coisa,  como já foi
    dito. Parte da graça do jogo é encontrar  dificuldades e ser obrigado a pensar no que fazer em
    situações desfavoráveis. Assim, se sua ação resultou  em desastre, não se desespere. O importante é
    que  a história esteja divertida, a interação entre o grupo  seja positiva e o jogo esteja
    interessante. Em algum ponto, a cena vai acabar. Deixe que o  mestre encerre as cenas, pois ele
    conhece o fluxo da  história melhor que os jogadores. Quem É Seu Personagem? Quando você construiu o
    personagem, deve ter  decidido seu nome, divindade padroeira, aparência  etc. Mas, quando chega a
    hora de interpretar, você  pode se deparar com uma dúvida: afinal, quem é esse  sujeito? Como ele
    reagiria às situações descritas  pelo mestre? Também pode descobrir que a perso A Guilda do Macaco.
    A Guilda do Macaco.  Decisões, rolagens Decisões, rolagens  e consequências e consequências  (nem
    todas ruins)(nem todas ruins) 217  Kellyanne Pontes kelly.ayame@gmail.com  Capítulo Cinco nalidade
    que você criou de antemão não se encaixa  bem com a narrativa da campanha ou simplesmente  não é
    divertida na prática. Sem problemas; corrigir  isso é muito fácil. Para criar uma personalidade
    marcante e que  apareça facilmente durante o jogo, comece por sua  classe de personagem. Lembre de
    heróis de séries,  livros, filmes etc. que poderiam ter essa classe se fos sem traduzidos em regras.
    Então ache características  em comum deles. Junte isso com a própria descrição  da classe. Pronto,
    aí está a base. Exemplos: temos vários paladinos na ficção. Rei  Artur, Capitão América, Luke
    Skywalker... O que  todos eles têm em comum? Lutam pelo bem, não  recuam frente a combates difíceis,
    tendem a confiar  nas pessoas, são otimistas... E quanto aos magos?  Gandalf, Dumbledore, Merlin,
    Doutor Estranho...  Eles costumam ser orgulhosos e misteriosos, preocupam-se com segredos antigos e
    muitas vezes  aconselham personagens mais intempestivos. O  que dizer dos ladinos? Han Solo, Faye
    Valentine,  Bilbo Bolseiro, Arya Stark, a Mulher-Gato... Ladinos  são espertos, desconfiados e
    irreverentes, preocupam-se primeiro consigo mesmos para depois dar  alguma atenção aos outros.
    Depois que tiver construído a base de sua  personalidade, escolha uma característica que seja
    contraditória a tudo isso — mas que não anule com pletamente tudo que você já decidiu. Uma paladina
    pode ser muito gulosa e esfomeada, um mago pode  ser um romântico incurável, um ladino pode ser
    pavio-curto, sempre achando motivos para brigar.  Junte isso às características padrão. Pronto. Você
    não precisa de mais nada se não  quiser. Sua paladina comilona acaba de encontrar a  caravana de
    mercadores? Pode não ser uma situa ção muito adequada para mostrar o lado heroico e  altruísta, mas
    talvez o estômago dela ronque. Então  ela imediatamente se interessa pelas guloseimas  exóticas que
    os mercadores trazem. O mago pode se  apaixonar à primeira vista por um dos mercadores. Já  o ladino
    acha que um dos estrangeiros chamou ele de  baixinho e agora está furioso. Seus atributos, perícias
    e poderes podem ajudá-lo a decidir suas ações e personalidade. Alguém  com alta Sabedoria
    provavelmente seria calmo e  controlado, um ladino treinado em Investigação tem  grande chance de
    ser desconfiado ou mesmo cínico  e qualquer um que possua Ataque Poderoso deve  gostar de resolver
    as coisas com a força bruta. A personalidade do seu personagem também vai  se formar naturalmente, à
    medida que o jogo avan-ça, tanto pelas decisões que você toma quanto pelo  acaso dos dados. Foi por
    puro azar que você falhou  em todos os testes contra aquela aranha gigante,  mas isso é oportunidade
    para que seu personagem  adquira medo de aranhas comuns. Você também  pode (com a permissão do
    mestre) inventar novas  características de personalidade na hora, para se  encaixar com uma cena
    específica. Quando os orcs  atacam, você inventa que seu personagem foi salvo  por um orc piedoso,
    então nunca mataria um deles.  Contudo, não exagere — crie características de  personalidade
    “improvisadas” no máximo uma ou  duas vezes na campanha, ou seu personagem virará  um maluco
    completo. Fazendo Testes Até agora, você não precisou se preocupar com  as regras, a não ser para
    construir o personagem.  Contudo, mais cedo ou mais tarde o mestre vai  pedir algum teste. As
    páginas a seguir trazem todas as regras que  você precisa conhecer como jogador. Porém, se você
    está começando, não se preocupe em decorar todas  as mecânicas do jogo ou as nuances dos testes que
    está fazendo. Não se preocupe nem mesmo com os  números e minúcias na ficha de personagem. Apenas
    preste atenção ao que o mestre diz, role o dado adequado e escute o resultado de sua ação. Um colega
    mais experiente pode lhe dar conselhos sobre como  melhorar suas chances nos testes, mas isso não é
    uma  desculpa para que ele tome as decisões por você. O  personagem é seu, quem manda é você... E é
    você que  vai ter que lidar com as consequências de suas ações! Alguns grupos gostam de otimizar
    seus personagens em termos de jogo, principalmente melhorando  suas chances em combate. Não há
    problema nenhum  em jogar assim. Na verdade, muitos heróis da ficção  seriam extremamente eficientes
    em regras. Construir  personagens poderosos faz parte tanto do aspecto  técnico quanto da narrativa
    do jogo. Contudo, Tormenta20 não é uma competição.  Se, na hora dos testes, você não se sai tão bem
    quanto os outros jogadores, isso não significa que  você é um membro menos valioso do grupo ou que
    tem menos direito de estar lá. Você pode pedir dicas  sobre como melhorar seu herói em termos de
    jogo,  mas isso não é obrigatório. Embora a interpretação seja encorajada, às vezes  testes são
    exigidos para resolver questões sociais. Se  você quer impressionar o nobre com um discurso,  não
    basta falar bonito por meia hora. Você efetiva 218  Kellyanne Pontes kelly.ayame@gmail.com  Jogando
    mente precisa rolar um dado para verificar o sucesso  da ação. Nenhum jogador deve tentar
    “engambelar”  o mestre com descrições mirabolantes ou atuação  teatral. Não interessa que você
    narrou o salto  acrobático de sua pirata, pousando atrás do vilão e  espetando-o com a espada. Você
    ainda terá que fazer  testes para que essa ação aconteça. Não importa que  você é muito eloquente,
    seu personagem só será  eloquente quando passar num teste. Saber falar bem não o torna melhor ou
    pior que  nenhum outro jogador de Tormenta20; todos  têm as mesmas chances. Isso também significa
    que um jogador tímido pode ter um personagem  falastrão e carismático. Escolhas e personalidade  são
    decididas em interpretação. Momentos com sucesso e fracasso incertos são decididos com testes.
    Vitórias  & Derrotas Quando estiver jogando Tormenta20, tenha  em mente que seu personagem não é
    você mesmo.  Nenhuma falha nos dados ou fracasso na história  diminui de forma alguma suas próprias
    vitórias pessoais. Da mesma forma, por maior que seja o triunfo  de seu personagem, isso tudo só
    existe na ficção. Não leve o que acontece no jogo para o lado pessoal. Tormenta20 é um jogo sobre
    contar histórias  que muitas vezes são longas. Essas histórias são  moldadas por meio de regras e
    dados, com resultados  bastante aleatórios. Por mais sorte que você tenha e  por melhores que sejam
    suas ideias, é impossível que  seu personagem sempre saia ganhando. Assim, não  meça seu
    divertimento pelo quanto você foi bem-sucedido. Seu guerreiro fortão foi nocauteado por um  kobold?
    Não fique com raiva. Os outros jogadores  estão rindo do personagem, da improbabilidade dos  dados e
    da situação, não de você. Ria também. Seu personagem também não será o protago nista sempre. Claro,
    o ideal é que o grupo divida  os holofotes igualmente o tempo todo, mas muitas  cenas ressaltam as
    habilidades e a personalidade  de um herói. A bucaneira brilha no mar, a clériga  se destaca quando
    o assunto é religião. Se o seu  personagem não tem nada para fazer numa cena  específica ou parece
    temporariamente inútil, relaxe e observe a interpretação de seus colegas. Seu  momento logo vai
    chegar. Seu personagem só existe enquanto parte de  uma experiência em grupo. Um grupo em que todos
    devem ser heróis, companheiros e amigos.Não Seja Babaca! Existem elementos em Tormenta20 que
    sugerem interações negativas. Por exemplo,  o mestre interpreta vilões e impõe desafios.  Os
    personagens podem fracassar. Existe  maldade no mundo de jogo — por isso há  necessidade de heróis!
    Contudo, qualquer relação de antagonismo  fica restrita aos personagens ficcionais .  Nunca há
    motivo para fazer as pessoas reais  se sentirem mal.  Nenhuma interação entre jogadores,  mesmo
    através de personagens, deve  romper os limites do conforto de cada um.  Nenhuma característica das
    pessoas reais  deve ser trazida para a mesa de jogo como  algo pejorativo ou para tornar o jogador/
    personagem vulnerável. Independentemente  da história e das regras, qualquer jogador, a  qualquer
    momento, pode (e deve) falar se  algo o está deixando desconfortável. Mas  isso não é dever apenas
    do jogador sentindo  o desconforto. Todos devem prestar atenção  às reações, comentários e postura
    dos  colegas, para garantir que ninguém esteja  passando dos limites. Uma sessão de  Tormenta20 é um
    espaço seguro. Não existe espaço para discriminação em  Tormenta20. Pessoas de todas as etnias,
    gêneros, orientações, crenças e estilos  de vida são bem-vindas. Nem mesmo  deve haver discriminação
    no mundo  ficcional de jogo. Você pode jogar com os  personagens mais diversos e provavelmente  vai
    encontrar pouca resistência dos  coadjuvantes interpretados pelo mestre.  As únicas exceções são
    vilões intolerantes,  mas mesmo nesses casos apenas se todos  estão confortáveis em enfrentar
    maldade  desse tipo. Não há por que repetir no jogo  preconceitos vivenciados na realidade. A
    inclusão é um tema prevalente em  Tormenta20 e deve ser praticada pelo  grupo. Nenhum jogador está
    acima dos  outros; nenhum personagem é mais ou  menos válido que os demais. Se você está  tendo
    dificuldade em encontrar um grupo  que o faça se sentir bem-vindo, não hesite  em procurar a
    comunidade de Tormenta  na internet — você vai encontrar jogadores  de todo o Brasil prontos a
    recebê-lo. 219  Kellyanne Pontes kelly.ayame@gmail.com  Capítulo Cinco Testes Sempre que um
    personagem tenta fazer uma ação  cujo resultado é incerto, o jogador faz um teste. Um teste  é uma
    rolagem de 1d20 + um modificador. Você passa  no teste se este resultado for igual ou maior que a
    CD. Testes são classificados pela característica utili zada (atributo ou perícia) e pelo que define
    sua CD  (comuns ou opostos). Testes de Atributo Você usa testes de atributo para tarefas básicas,
    para as quais nenhuma perícia se aplica. Para fazer  um teste de atributo, role 1d20 e some o valor
    do  atributo apropriado. Teste de Atributo =   1d20 + Atributo Aqui estão alguns exemplos de testes
    de atributo,  seguidos pelo atributo testado. • Erguer um objeto pesado (Força). • Amarrar cordas
    (Destreza). • Estabilizar sangramento (Constituição). • Resolver um enigma (Inteligência). • Decidir
    se algo é prudente (Sabedoria). • Causar boa impressão (Carisma). Testes de Perícia Um teste de
    perícia funciona como um teste  de atributo. Porém, você soma o valor da perícia  em questão. Teste
    de Perícia =   1d20 + Valor de Perícia O Capítulo 2: Perícias & Poderes explica  como calcular seu
    valor de cada perícia. Testes Comuns Testes comuns são usados quando um personagem está competindo
    contra o ambiente. Eles são  realizados contra uma CD determinada pelo mestre,  de acordo com a
    tarefa sendo realizada. Consulte a  Tabela 5-1: Dificuldades para exemplos.O mestre pode estipular
    as dificuldades de todos  os testes usando a tabela abaixo como guia. Porém,  o Capítulo 2 traz
    exemplos de dificuldades para  tarefas específicas nas descrições de cada perícia. Testes Opostos
    Testes opostos são usados quando dois ou mais  personagens estão competindo entre si. Cada per
    sonagem envolvido faz seu teste. Aquele com maior  valor é o vencedor. Em caso de empate, aquele com
    o  maior valor vence. Se os valores forem iguais, outra  rolagem deve ser feita. Misturando Testes
    Comuns e Opostos Um teste pode ser comum e oposto ao mesmo  tempo. Por exemplo, se três personagens
    estão disputando para ver quem atravessa um lago primeiro,  todos devem fazer um teste de Atletismo
    contra uma  CD. Aqueles que passarem atravessam o lago. Dentre  esses, aquele com o maior resultado
    chega primeiro. Regras do jogo Tabela 5-1: Dificuldades Tarefa CD Exemplo Fácil* 5 Subir uma encosta
    íngreme (Atletismo) Média 10 Ouvir um guarda se  aproximando (Percepção) Difícil 15 Estancar um
    sangramento (Cura) Desafiadora 20 Nadar contra uma  correnteza (Atletismo) Formidável 25 Sabotar uma
    armadilha  complexa (Ladinagem) Heroica 30 Decifrar um pergaminho  antigo em um idioma morto
    (Conhecimento) Quase  Impossível40 Fabricar uma “obra-prima” ,  ou seja, um item com  quatro
    melhorias (Ofício) *Testes fáceis aparecem na tabela para fornecer senso de  escala, mas normalmente
    não são exigidos — caso um  personagem tente uma tarefa fácil, o mestre pode considerar  que ele
    passa automaticamente, para acelerar o jogo. 220  Kellyanne Pontes kelly.ayame@gmail.com  Jogando
    Regras Adicionais  de testes A seguir, algumas regras que se aplicam a testes. Sucessos e Falhas
    Automáticos Ao fazer um teste, um 20 natural (quando o  resultado do d20 é 20) sempre é um sucesso,
    e um 1  natural (quando o resultado do d20 é 1) sempre é uma  falha, não importando o valor a ser
    alcançado. Condições Favoráveis  e Desfavoráveis Certas situações podem tornar um  teste mais fácil
    ou mais difícil. Para  representar isso, o mestre pode alterar  o teste de duas maneiras. • Conceder
    ao perso nagem um bônus de +2  ou mais para representar circunstâncias que  melhorem seu desem
    penho. Por exemplo, pro curar por um livro em uma  biblioteca bem organizada com  um teste de
    Investigação. • Impor ao personagem uma  penalidade de –2 ou mais para representar circunstâncias
    que atrapalham seu desempenho, como  procurar por um frasco específico em um laboratório bagunçado
    com um teste de Investigação. Novas  Tentativas Em geral, você pode  tentar um teste de novo  em
    caso de falha e conti nuar tentando por toda a  eternidade. Contudo, alguns testes acarretam
    penalidades (ou problemas!)  em caso de falha. Por exem plo, um personagem que falhe  em um teste de
    Atletismo para  subir uma encosta pode tentar novamente. Mas, se falhar  por 5 ou mais, cairá. Ele
    pode  se levantar e tentar de novo,  supondo que a queda não tenha sido muito dolorida...Ferramentas
    Algumas perícias requerem ferramentas. Se  isso for necessário, será mencionado na descrição  da
    perícia. Se você não possui o item apropriado,  ainda pode usar a perícia, mas sofre uma penalidade
    de –5 no teste. Ajudar Às vezes, os personagens trabalham juntos e se  ajudam. Um personagem
    (normalmente aquele com  o maior bônus) é considerado o líder, e faz o teste  normal, enquanto cada
    ajudante faz um teste contra  CD 10 (usando a mesma perícia ou outra que faça  sentido). Um teste de
    ajuda con cede ao líder um bônus de +1, e  +1 adicional para cada 10 pontos acima da CD (+2 para  um
    resultado 20, +3 para  30 e assim por diante). Em muitos casos,  ajuda externa não traz benefícios —
    você não pode  ajudar um colega a ser  mais silencioso em seu tes te de Furtividade. Ou então
    apenas um número limitado de ajudantes pode auxiliar alguém ao mes mo tempo (não há espaço para
    muitas  pessoas à volta de uma mesma fecha dura). O mestre limita a ajuda como  achar melhor, de
    acordo com a tarefa  e as condições. Testes  sem Rolagens Um teste representa a  realização de uma
    tarefa desafiadora —  com alta dificul dade ou feita em  situação de perigo.  Quando este não é o
    caso, você pode usar as opções a  seguir para dispensar as rolagens.  Elas são úteis para acelerar o
    jogo e  não interromper a história com ro lagens desnecessárias. Se precisar muito Se precisar muito
    passar em seu teste, passar em seu teste,  invente um jeito!invente um jeito! 221  Kellyanne Pontes
    kelly.ayame@gmail.com  Capítulo Cinco Escolher 0. Quando seu bônus total em um  teste é igual ou
    maior que a CD, você não precisa fazer o teste — você automaticamente passa. A tarefa é  trivial
    para alguém com suas habilidades. Por exemplo, um personagem com Sobrevivência +15 não precisa fazer
    testes para montar acampamento em uma  planície (uma tarefa com CD 15). Caso o teste tenha  variados
    graus de sucesso, você obtém o mínimo possível. Você ainda pode fazer uma rolagem para alcançar um
    grau maior de sucesso, se quiser, mas arrisca  falhar se rolar um 1 natural. Escolher 10. Quando não
    há pressão para realizar uma tarefa, você pode escolher 10. Isso significa  realizar a tarefa com
    calma, sem chance para erros.  Em vez de rolar 1d20, considere um resultado 10  automático. Isso
    costuma bastar para muitas tarefas. Escolher 20. Quando não há pressão e a tarefa não oferece
    nenhuma consequência ou penalidade  em caso de falha, você pode escolher 20. Isso significa gastar
    todo o tempo do mundo e tentar todas  as possibilidades, até passar. Em vez de rolar 1d20,
    considere um resultado 20 automático. Escolher  20 exige vinte vezes mais tempo que o normal para
    executar a perícia (ou, para simplificar, a cena inteira,  de acordo com o mestre).Testes Estendidos
    A maioria das tarefas pode ser resolvida com  um único teste. Se um personagem quer escalar um
    muro, o sucesso ou a falha são aparentes após um  único teste. Entretanto, para situações complexas
    e  que consomem tempo — como escalar uma monta nha —, ou quando o mestre quer criar clima de tensão,
    esta regra pode ser usada. Em um teste estendido, o grupo deve acumular uma  quantidade de sucessos
    antes de três falhas, o que indica  uma falha total. Quanto mais complexa a tarefa, mais  sucessos
    são exigidos — veja a tabela ao lado. Por exemplo, os personagens estão procurando  o esconderijo de
    uma guilda de ladrões. Para isso  precisam fazer perguntas na cidade. Pela complexidade da tarefa, o
    mestre pede um teste estendido  de Investigação com complexidade média e CD 20.  Isso significa que
    os heróis devem fazer testes de  Investigação contra CD 20 até acumularem cinco sucessos. Se
    conseguirem, descobrem as pistas. Porém,  se acumularem três falhas antes dos cinco sucessos,  têm
    uma falha total — nesse caso, o grupo pode ter  sido descuidado e alertado os membros da guilda,
    além de não conseguir a informação que queria. Para alguns testes, Para alguns testes,  não há
    perigo em falhar. não há perigo em falhar.  Mas só alguns...Mas só alguns... 222  Kellyanne Pontes
    kelly.ayame@gmail.com  Jogando Testes estendidos podem envolver mais de uma  perícia. Por exemplo,
    infiltrar-se em uma base purista pode exigir um sucesso em Atletismo, para escalar  o muro, e dois
    em Furtividade, para não ser visto  pelas sentinelas. Um julgamento pode exigir dois  sucessos em
    Nobreza, para conhecer a lei, mais três  em Diplomacia, para convencer o magistrado. Testes
    Estendidos Abertos O mestre pode permitir que os jogadores decidam  quais perícias vão usar em um
    teste estendido. O  jogador escolhe a perícia, então explica como vai  utilizá-la para resolver o
    desafio. Por exemplo, em um julgamento, um perso nagem poderia usar Enganação (“vou corromper o
    magistrado”); Intimidação (“vou assustar os jurados  para que decidam em meu favor”); Intuição (“vou
    analisar a situação para determinar qual o melhor  argumento”) etc. Permitir que os jogadores
    descrevam quais perícias vão usar irá envolvê-los mais com a cena. Se  o mestre permitir isso, cada
    teste avulso dentro do  teste estendido precisa ser feito com uma perícia diferente. Se combinada
    com as opções que dificultam  os testes estendidos (veja abaixo), essa opção exige  pensamento
    tático por parte do grupo! Testes Estendidos em Grupo Por serem feitos ao longo do tempo, testes
    esten didos podem ser feitos por mais de um personagem,  ou mesmo pelo grupo todo. De fato, colocar
    o grupo  inteiro para fazer um único teste estendido é uma  ótima forma de unir os jogadores! Caso
    mais de um personagem esteja participan do do teste estendido, resolva o teste por “rodadas”;  a
    cada rodada, cada jogador faz um teste. Some os  sucessos e falhas de todos para definir se o teste
    estendido é bem-sucedido ou não. Fazer testes estendidos em grupo é muito útil  em testes estendidos
    abertos (veja acima), nas quais  cada perícia só pode ser usada uma vez. Com vários  personagens
    participando do teste, a chance deles  terem mais perícias treinadas diferentes é maior. Ajuda e
    Testes Estendidos Personagens podem ajudar em testes estendidos,  usando a regra de ajuda padrão.
    Porém, uma perícia  usada para ajudar não poderá ser usada novamente  no teste estendido, seja para
    ajudar, seja para realizar  o teste principal.Dificultando testes estendidos Para testes estendidos
    especialmente desafia dores, o mestre pode usar dificuldades cumulativas e  penalidades por falhas.
    No primeiro caso, a CD aumenta em +2 a  cada teste (independentemente de o teste ser um  sucesso ou
    uma falha), representando a dificuldade  crescente. Por exemplo, num teste estendido para  se
    infiltrar até os aposentos reais do castelo, a CD  pode aumentar a cada teste, pois quanto mais
    perto  do quarto do rei, maior a segurança. No segundo caso, o mestre aplica uma penalidade para
    cada falha — isto é, além de chegar mais  perto da falha total. Digamos que um personagem  esteja
    envolvido em uma negociação intrincada com  um aristocrata, exigindo um teste estendido de
    Diplomacia. Cada vez que falha, pode sofrer uma  penalidade cumulativa de –2 nos testes seguintes —
    isso significa que o aristocrata está ficando cada vez  mais ofendido. Da mesma forma, um personagem
    escalando uma montanha com um teste estendido de  Atletismo pode sofrer 3d6 pontos de dano para cada
    falha, representando ferimentos durante a subida. Interrupções e  Novas Tentativas A maioria dos
    testes estendidos pode ser inter rompida sem problemas. Entretanto, o mestre pode  determinar que
    uma interrupção conte como uma  falha ou até mesmo como uma falha completa no  teste estendido.
    Normalmente pode-se fazer novas tentativas de  testes estendidos. Entretanto, da mesma forma que
    com testes normais, alguns testes estendidos têm  consequências que devem ser levadas em conta. Por
    exemplo, uma armadilha que exige um teste esten dido de Ladinagem pode disparar em caso de falha.
    Tabela 5-2:  Testes Estendidos Sucessos  exigidosComple-  xidade  Exemplos 3 Baixa Escalar um
    paredão  (Atletismo) 5 Média Atravessar o Pântano dos  Juncos (Sobrevivência) 7 Alta Compreender um
    ritual  antigo (Misticismo) 223  Kellyanne Pontes kelly.ayame@gmail.com  Capítulo Cinco Habilidades
    Além de atributos e perícias, personagens possuem habilidades fornecidas por sua raça, origem,
    classe, itens e outras fontes. Usando Habilidades Habilidades podem ser passivas (seus efeitos estão
    sempre funcionando) ou ativadas (precisam ser  usadas para gerar seus efeitos). O poder Coração da
    Selva, do druida é uma habilidade passiva, enquanto  a Fúria do bárbaro é uma habilidade ativada.
    Para  usar habilidades ativadas você precisa gastar uma  ação e, provavelmente, pontos de mana. Ação
    Necessária A descrição da habilidade determina a ação necessária para usá-la. Caso nada esteja
    descrito, usar a  habilidade é uma ação livre (exceto no caso abaixo). Habilidades Engatilhadas.
    Habilidades  ativadas por decorrência de outro evento (como  fazer um ataque), são ativadas como uma
    reação e  somente uma vez por instância do evento. A habilidade Frenesi, do bárbaro, diz que quando
    você usa a ação agredir, pode gastar 2 PM para realizar  um ataque adicional. Ativar Frenesi é uma
    reação que só  pode ser feita uma vez por ação agredir. Custo de Pontos de mana A descrição da
    habilidade determina se são  necessários PM para usá-la. Nesse caso, você gasta  os PM mesmo em caso
    de falha. Por exemplo, se um  guerreiro usa Ataque Especial e erra o ataque, ainda  assim gasta os
    pontos de mana. Para habilidades com custo variável, o máximo de  PM que você pode gastar por uso é
    igual ao seu nível  na classe que fornece a habilidade (mas você sempre  pode usar a habilidade em
    seu custo mínimo). Para  habilidades de raça, origem ou outras fontes e poderes gerais, o limite é o
    seu nível de personagem. Custos Especiais Alguns habilidades possuem custos além de PM. Componente
    Material. A habilidade exige  ingredientes para ser usada. Esses ingredientes devem estar na mão do
    personagem e são consumidos  com o uso (mesmo que a habilidade falhe). Penalidade de PM. A
    habilidade reduz seus  PM máximos enquanto estiver ativa (você não recupera esses PM até a duração
    da habilidade acabar).Sacrifício de PM. Certas habilidades poderosíssimas têm um custo ainda mais
    alto: você deve  sacrificar permanentemente  certa quantidade de PM  para usá-las. Alcance Muitas
    habilidades possuem um alcance, isto  é, a distância máxima a partir do personagem da  qual o efeito
    pode se originar. Caso alguma parte da  área da habilidade esteja além do alcance, a área é  afetada
    normalmente. Pessoal. A habilidade afeta somente o persona gem e/ou objetos que ele esteja
    carregando. Também  pode ser uma habilidade de área que se inicia a partir  do personagem e só o
    afeta se mencionar. Toque. O personagem precisa tocar o alvo em  seu alcance natural para afetá-lo,
    mas não precisa  gastar uma ação ou fazer testes para isso (tocar o  alvo faz parte da ação da
    habilidade). Curto. A habilidade alcança alvos a até 9m (6  quadrados em um mapa). Médio. A
    habilidade alcança alvos a até 30m  (20 quadrados em um mapa). Longo. A habilidade alcança alvos a
    até 90m  (60 quadrados em um mapa). Ilimitado. A habilidade alcança qualquer lugar no mesmo mundo. A
    maioria das habilidade com  este alcance exige que você conheça e/ou já tenha estado no ponto de
    origem da habilidade. Efeito Toda habilidade gera um efeito — causar dano  em um alvo, fornecer um
    bônus a você ou qualquer  outra coisa. A seguir estão regras gerais para efeitos.  Muitos efeitos
    possuem um tipo (veja a página 228). Alvos & Áreas A maior parte das habilidades atinge um ou mais
    alvos ou afeta uma área. Linha de Efeito. Um caminho direto e sem  obstruções até onde a habilidade
    pode ter efeito.  Você deve ter linha de efeito para qualquer alvo  ou ponto de origem da área que
    queira afetar, ou  para qualquer espaço onde queira criar um efeito.  Qualquer barreira sólida,
    visível ou não, anula a  linha de efeito. Alvo. A habilidade afeta um ou mais alvos, que  podem ser
    criaturas ou objetos. Você usa a habilidade sobre os alvos e deve ser capaz de percebê-los.  Uma
    habilidade usada sobre um tipo de alvo errado  224  Kellyanne Pontes kelly.ayame@gmail.com  Jogando
    falha automaticamente. Por exemplo, a magia Tranca  Arcana não tem efeito se lançada sobre algo que
    não  seja uma porta, baú ou semelhante. Objetos e Tamanhos. Algumas habilidades se referem a objetos
    em termos de espaços — consulte  o Capítulo 3. Outras habilidades se referem a  objetos em termos de
    categorias de tamanho. Nesse  caso, o mestre deve arbitrar a categoria do objeto  comparando-o com
    criaturas. Por exemplo, uma adaga é um objeto Minúsculo, uma carroça é um objeto  Grande e um galeão
    é um objeto Colossal. Área. A habilidade afeta uma área. Normalmente,  você escolhe um ponto dentro
    do alcance e que possa  perceber para ser a origem da área, mas não controla  quais criaturas ou
    objetos serão afetados — qualquer  coisa na área estará sujeita aos efeitos, incluindo você.  De
    acordo com o mestre, você pode usar uma habilidade numa área que não possa perceber com um teste  de
    Percepção (Misticismo no caso de magias) contra  CD 20 + custo em PM. Para habilidades com alcance
    pessoal, você é o ponto de origem e não é afetado (exceto quando dito o contrário). Áreas avançam
    até seu  limite ou até serem interrompidas por uma barreira  capaz de bloqueá-las. Em geral, áreas
    se enquadram  em uma das categorias a seguir. • Cilindro. Surge na interseção de quatro quadrados,
    estendendo-se pela largura indicada e subindo  até o fim da altura indicada.• Cone. Surge adjacente
    a você e se afasta de  você na direção escolhida, ficando mais largo com a  distância, conforme os
    modelos da ilustração abaixo. • Esfera. Surge na interseção de quatro quadrados, estendendo-se em
    todas as direções até o  limite de seu raio. • Linha. Surge adjacente a você e se afasta de  você
    reta até o fim do alcance. A menos que indicado  o contrário, uma linha tem 1,5m de largura. •
    Quadrado. Surge no quadrado ou quadrados  escolhidos, afetando o piso. Um “cubo” é como um
    quadrado, mas afeta também a altura. • Outros. Algumas habilidades podem ter áreas  específicas,
    citadas em sua descrição. Criação. Caso a habilidade crie ou invoque  alguma coisa, a coisa aparece
    em um local a sua  escolha dentro do alcance e para o qual você tenha  linha de efeito. Após surgir,
    a coisa pode se mover ou  ser movida para fora da linha de efeito. Por exemplo,  você não pode
    conjurar um monstro dentro de uma  sala fechada. Mas, uma vez conjurado, o monstro  pode entrar na
    sala, mesmo que você ainda não tenha  linha de efeito para o interior dela. Redirecionando Efeitos.
    Algumas habilidades permitem redi re cionar seu efeito para novos  alvos ou áreas após serem usadas.
    Quando isso for  possível, redirecionar a habilidade é uma ação padrão. 225  Kellyanne Pontes
    kelly.ayame@gmail.com  Capítulo Cinco Acumulando Efeitos A interação entre diferentes efeitos
    depende de  sua origem. As fontes de efeitos são habilidades ,  perícias , itens, magias, parceiros
    e o ambiente. Efeitos de habilidades e perícias acumulam entre  si, exceto quando vierem da mesma
    habilidade ou  perícia. Assim, o bônus na Defesa da Pele de Ferro do  bárbaro acumula com o bônus na
    Defesa da Esquiva  Sagaz do bucaneiro. Isso não inclui magias. Efeitos de itens, magias, parceiros e
    o ambiente  acumulam com os de outras fontes, mas não entre si.  Assim, um personagem com um item
    que forneça +1  em Fortitude e uma magia que também forneça +1  em Fortitude terá um bônus de +2
    nessa perícia. Po rém, um personagem com dois itens ou duas magias  que forneçam +1 em Fortitude não
    terá +2 — como  os efeitos são da mesma fonte, não acumulam. Armaduras. Bônus na Defesa e penalidade
    de  armadura de escudos e armaduras se acumulam com  os de um outro item adicional a sua escolha.
    Atributos. O valor de um mesmo atributo  não se acumula em características do personagem.  Ou seja,
    um clérigo/druida não soma duas vezes  sua Sabedoria nos pontos de mana, assim como um
    bucaneiro/nobre não soma duas vezes seu Carisma  na Defesa. A exceção são perícias: é possível somar
    um atributo a uma perícia que use este mesmo  atributo-chave, mas apenas uma vez. Por exemplo,  um
    caçador pode usar Explorador para somar sua  Sabedoria em Percepção e Sobrevivência (perícias  que
    usam Sabedoria).Clarificações de Regras Arredondando.  A menos  que indicado o contrário, sempre
    que um efeito indica uma  divisão, arredonde para baixo . Por  exemplo, se um ataque causa 7  pontos
    de dano e um efeito reduz  esse dano à metade, o ataque  causa apenas 3 pontos de dano. Ordem. Se
    mais de um efeito  afetar um valor, siga a ordem  de operações padrão. Ou seja,  aplique primeiro
    multiplicações  e divisões, depois somas e  subtrações. O resultado de um  teste de resistência é
    sempre o  primeiro a ser aplicado.Por exemplo: um guerreiro usando  uma armadura incandescente  (que
    fornece redução de fogo 10) é  atingido por uma Bola de Fogo  que causa 26 pontos de dano.
    Primeiro, ele faz seu teste de  Reflexos. Se passar, reduz o dano  à metade, para 13 (26/2=13).
    Então, o guerreiro pode usar  a habilidade Durão. Se tiver  passado no teste de resistência,
    sofrerá 6 pontos de dano  (13/2=6). Se tiver falhado,  sofrerá 13 pontos de dano  (26/2=13). Por
    fim, ele aplica sua RD 10.  Se tiver passado no teste de resistência e usado a habilidade  Durão,
    não sofrerá dano. Se tiver  passado no teste de resistência ou  usado a habilidade Durão, sofrerá  3
    pontos de dano (13–10=3).  Por fim, se não tiver passado no  teste nem usado Durão, sofrerá  16
    pontos de dano (26–10=16). Multiplicações. Se mais de  um efeito fizer você multiplicar  um valor,
    combine-os em  um único multiplicador, com  cada efeito além do primeiro  adicionando seu
    multiplicador  –1. Por exemplo, dois efeitos que  dobrem o valor (x2 + x2) irão  triplicar o valor
    (2 + [2–1] = 3)  em vez de quadruplicá-lo. Chance de Falha. Chance de falha nunca  acumula acima de
    75%. Sempre há no mínimo uma  chance de 1 em 4 de acertar o alvo. Reduções de Custo. Reduções no
    custo de  PM não são cumulativas. Uma habilidade nunca  pode ter seu custo reduzido para menos de 1
    PM. efeitos que Afetam Testes Efeitos que fornecem um bônus a um teste ou  modificam sua dificuldade
    devem ser usados antes  de rolar o dado. Efeitos que permitem que você  role novamente o dado devem
    ser usados antes de  o mestre declarar se você passou ou não no teste (e  você deve ficar com o
    segundo valor rolado, mesmo  que seja pior que o primeiro). A habilidade Orgulho, do nobre, que
    fornece um bônus  para um teste, deve ser usada antes de rolar o teste. A habilidade Mestre em Arma,
    do guerreiro, que permite que você  role novamente um ataque recém realizado, deve ser usada  antes
    de o mestre declarar se o ataque acertou ou não. Limites de Nível Algumas habilidades são limitadas
    pelo seu nível.   Para classes, use seu nível naquela classe. Para  outros casos, seu nível de
    personagem. A habilidade Insolência, do bucaneiro, permite que  você some seu Carisma na Defesa,
    limitado pelo seu nível.  Assim, um bucaneiro de 2º nível com Car 3 soma +2 na  Defesa. Quando subir
    para o 3º nível, passará a somar +3.  Da mesma forma, um lutador de 4º nível usando a habilidade
    Voadora soma no máximo +4d6 de dano, mesmo que  tenha se deslocado mais de 8 quadrados. 226
    Kellyanne Pontes kelly.ayame@gmail.com  Jogando Duração A duração indica por quanto tempo a
    habilidade  mantém seu efeito. Instantânea. O efeito da habilidade termina  assim que ela é usada,
    mas suas consequências  podem durar mais tempo. Por exemplo, uma magia  Curar Ferimentos age
    instantaneamente, mas os ferimentos continuam curados. Cena. A habilidade dura uma cena inteira,
    encerrando-se quando esse momento da história acaba.  Uma cena não tem uma medida fixa. Podem ser
    algumas rodadas (um combate), alguns minutos (uma  conversa entre personagens), horas (atravessar um
    bosque) ou até dias (uma viagem sem incidentes).  Veja mais sobre isso no Capítulo 6: O Mestre.
    Sustentada. A habilidade precisa de um fluxo constante de mana. O personagem deve gastar 1  PM como
    uma ação livre no início de cada turno seu  para manter o efeito ativo. Se não o fizer, a habilidade
    termina. Você pode manter diversas habilidades  sustentadas, pagando o custo de cada uma, mas
    apenas uma magia sustentada por vez.  Definida. A duração pode ser medida em  rodadas, horas, dias
    ou outra unidade de tempo. Permanente. A habilidade fica ativa para sempre, mas ainda pode ser
    encerrada de outras formas . Duração e Áreas. Caso a habilidade afete  uma área, seus efeitos
    permanecem nessa área pela  sua duração. Criaturas e objetos válidos que entrem  na área são
    afetados, deixando de sê-lo quando saem. Descarregar. Algumas habilidades duram  até serem ativadas
    e descarregadas. A habilidade  permanece “dormente” até que determinado evento  aconteça, quando é
    ativada e descarregada, ou até que  sua duração transcorra, quando se encerra sem efeito. Encerrando
    suas habilidades. Um per sonagem pode encerrar uma habilidade sua e seus  respectivos efeitos como
    uma ação livre. Morte e Duração. A morte de  um personagem não afeta suas habilidades (exceto
    sustentadas) —  elas permanecem até que sua  duração termine. Testes de Resistência Habilidades
    prejudiciais  normalmente permitem que  seus alvos façam um teste  de resistência para evitar ou
    reduzir seus efeitos. Se esse for o caso, o tipo de teste  (Fortitude, Reflexos ou Vontade) e a
    maneira como  ele altera o efeito serão descritos na habilidade. A CD do teste de resistência para
    qualquer efeito  gerado por um personagem  é 10 + metade do nível do personagem + seu valor num
    atributo. O  atributo aparecerá entre parênteses na descrição da  fonte do efeito (habilidade ou
    item; para magias, será  sempre o atributo-chave da magia). A habilidade Presença Aristocrática, do
    nobre, tem  CD Car, ou seja, a CD para resistir a ela é 10 + metade  do nível do personagem + seu
    Carisma. Para Marsha Yleus,  uma humana nobre de 10º nível com Carisma 4, a CD para  resistir a essa
    habilidade é 19 (10 + 5 + 4). Anula. A habilidade não tem efeito sobre um  alvo que passe em seu
    teste de resistência. Parcial. O efeito é menor em um alvo que  passe no teste de resistência. Reduz
    à Metade. O efeito é reduzido à metade em um alvo que passe no teste de resistência. Desacredita. Um
    termo específico para  efeitos de ilusão. Se uma criatura interagir com a  ilusão (exa minando-a de
    perto ou tocando-a; apenas  observá-la de longe não é suficiente) tem direito a  um teste para
    perceber que ela não é real. A ilusão  continua funcionando mesmo que uma criatura  perceba que ela
    não é real; essa criatura pode avisar  seus aliados como uma ação livre, permitindo que  eles façam
    testes para desacreditar. Objetos e Dano. A menos que a descrição do  efeito diga o contrário, itens
    carregados não sofrem  dano por habilidades (mesmo de área). Objetos soltos sofrem dano (mas somente
    de habilidades que  possam ter objetos como alvo ou afetem uma área). Objetos e Testes de
    Resistência. Para  habilidades capazes de afetar objetos e que permitem testes de resistência, itens
    mundanos soltos falham automaticamente e itens mundanos carregados podem fazer testes com o bônus de
    seu  portador. Itens mágicos sempre podem fazer teste de resistência, usando seu  próprio bônus
    (veja página 334)  ou de seu portador, se houver  (o que for maior). Testes de Perícia. Algumas
    habilidades incluem testes  de perícia para resistir a efeitos.  A menos que a descrição indique o
    contrário, a dificuldade  dos testes é igual à CD para  resistir à habilidade. 227  Kellyanne Pontes
    kelly.ayame@gmail.com  Capítulo Cinco Tipos de efeitos Muitos efeitos são categorizados em um (ou em
    mais de um) dos tipos a seguir. Por si só, a maioria  dos tipos não possui efeito em regras.
    Contudo,  indicam como o efeito interage com outros. Por  exemplo, uma criatura com imunidade a medo
    não  será afetada por efeitos do tipo medo. Arcano. Gerado pelas energias místicas de  Arton. Todos
    efeitos arcanos são mágicos. Atordoamento. Afeta a capacidade de agir  do alvo. Cansaço. Diminui as
    capacidades físicas do  alvo. Construtos e mortos-vivos são imunes a efeitos  de cansaço. Climático.
    Gerado pelas forças da natureza. Cura. Cura pontos de vida do alvo. Dano. Reduz os PV do alvo.
    Efeitos deste tipo  são subdivividos em tipos de dano (veja a página 230). Divino. Gerado pela
    energia de um deus, direta  ou indiretamente. Todos efeitos divinos são mágicos. Luz. Efeitos
    relacionados a dano e cura de luz,  iluminação e energia positiva (sinônimo de luz). Mágico.
    Energizados por forças arcanas ou  divinas, envolvem magias, efeitos gerados por itens  mágicos ou
    marcados com o símbolo e. Podem ser  subdivididos em escolas de magia (veja a página 172). Medo.
    Medo capaz de prejudicar o alvo. Criaturas com Inteligência nula são imunes a medo. Mental. Afeta a
    mente do alvo, diminuindo  suas capacidades ou influenciando-a. Criaturas com  Inteligência nula são
    imunes a efeitos mentais. Metabolismo. Afeta a fisiologia do alvo. Incluem doenças, sangramento e
    fome. Construtos e  mortos-vivos são imunes a efeitos de metabolismo. Metamorfose. Altera a forma ou
    composição  corporal do alvo. Inclui petrificação. Movimento. Afeta ou remove a capacidade de  se
    movimentar do alvo. Perda de Vida. Reduz os PV do alvo. Ao contrário de dano, não é afetado por
    redução de dano. Sentidos. Afeta os sentidos físicos do alvo, por  exemplo, deixando-o cego ou
    surdo. Trevas. Efeitos relacionados a necromancia,  escuridão e energia negativa (sinônimo de
    trevas). Veneno. Efeitos gerados por venenos. Constru tos e mortos-vivos são imunes a
    venenos.Habilidades  Gerais As habilidades a seguir podem ser fornecidas  por diversas fontes, como
    raça ou magias. Agarrar Aprimorado. Se a criatura acertar  um ataque com uma arma natural
    (especificada na  habilidade), poderá fazer a manobra agarrar com  esta arma como uma ação livre.
    Enquanto está  usando a arma natural para agarrar, a criatura não  pode usá-la para desferir outros
    ataques. Cura Acelerada. No início de seu turno, a  criatura recupera pontos de vida iguais ao seu
    valor  de cura acelerada (por exemplo, 5 PV com cura acelerada 5). Se houver algum tipo de dano
    listado após  uma barra, esta habilidade não recupera dano do tipo  listado. Por exemplo, uma
    criatura com cura acelerada 10/ácido recupera 10 PV no início de seu turno, a  menos que o dano
    tenha sido causado por ácido. Cura  acelerada não cura perda de PV , apenas dano. Deslocamento de
    Escalada. Pode caminhar por superfícies verticais e até mesmo de cabeça para baixo como se fossem o
    chão. O movimento  de escalada segue as demais regras de movimento  e é afetado pelas
    características da superfície (uma  parede acidentada pode ser considerada terreno difícil, por
    exemplo). Uma criatura que esteja escalando e perca seu deslocamento de escalada ou a  capacidade de
    realizar ações físicas (como por ficar  inconsciente ou paralisada) cai. Deslocamento de Escavação.
    Pode se  mover sob terreno granular, como terra e areia (mas  não atravessar rocha sólida). Após a
    passagem da  criatura, o terreno atrás dela se fecha devido aos  restos de material deixados para
    trás. Deslocamento  de escavação pode ser afetado pelas características  do solo: por exemplo, um
    solo pedregoso pode ser  considerado terreno difícil. Deslocamento de Natação. Pode se deslocar na
    água sem precisar fazer testes de Atletismo.  Porém, assim como criaturas terrestres precisam  fazer
    testes para se deslocar em certas circunstâncias (como em terreno escorregadio ou íngreme),  uma
    criatura com deslocamento de natação pode  precisar desses testes (como em uma correnteza  muito
    forte ou num redemoinho). Ela pode respirar  debaixo d’água, mas não fora dela, a menos que  tenha
    outra forma de deslocamento. A criatura não  sofre penalidades e limitações por estar submersa  (com
    exceção daquelas relacionadas às suas armas  — veja a página 269). 228  Kellyanne Pontes
    kelly.ayame@gmail.com  Jogando A medusa barda A medusa barda  Kir’zanaath “Kiki” Odello: Kir’zanaath
    “Kiki” Odello:  uma habilidade uma habilidade  para cada situaçãopara cada situaçãoDeslocamento de
    Voo. Pode voar. Uma  criatura com deslocamento de voo pode encerrar seu  deslocamento em pleno ar e
    pode se mover e atacar  como uma criatura terrestre. Uma criatura voando  que perca seu deslocamento
    de voo ou a capacidade  de realizar ações cai 150m por rodada. Uma criatura  voando que sofra uma
    manobra derrubar bem-suce dida cai 1d6 x 1,5 m antes de recuperar o voo. Faro. A criatura tem olfato
    apurado. Contra inimigos em alcance curto que não possa perceber, ela  não fica desprevenida e
    camuflagem total lhe causa  apenas 20% de chance de falha. Fortificação. A criatura tem uma chance
    de  ignorar o dano adicional de acertos críticos e ataques  furtivos (em caso de sucesso, trate-a
    como se tivesse  Imunidade a isso). Imunidade. A  criatura é imune a um  tipo de efeito ou outro
    elemento (como  um tipo de  dano, uma  condição ou  uma habilida de). Ela não sofre  nenhuma
    consequência  direta daquilo contra a qual ela é imune. Ela ainda pode ser  afetada indiretamente —
    por exemplo, uma  criatura imune a  efeitos mágicos  ainda é afetada  por terreno  difícil criado
    por magias.  Imunidade a  acertos críticos  os transforma em  acertos normais. Incorpóreo.   A
    criatura não tem corpo físico. Só pode ser  afetada por armas e efeitos mágicos (mesmo as  com
    alcance toque) ou criaturas incorpóreas.  Ela pode atravessar objetos sólidos, mas não  manipulá-los
    e tem Força nula. Percepção às Cegas. A criatura usa  sentidos diferentes da visão (como radar,
    sonar,  sensibilidade a vibrações etc.). Efeitos relacio nados à visão, como escuridão e
    invisibilidade,  não a afetam. Ela pode fazer testes de Percepção  para observar usando estes
    sentidos, ao invés da visão. Esta habilidade tem alcance curto (a menos  que especificado o
    contrário). Redução de Dano (RD). A criatura ignora  parte do dano que sofre. Por exemplo, se uma
    criatura com RD 5 sofre um ataque que causa 8  pontos de dano, perde apenas 3 PV . A redução pode
    ser contra um ou mais tipos de dano específicos.  Assim, uma criatura com redução de fogo 10 igno ra
    10 pontos de dano de fogo, mas sofre dano de  outros tipos normalmente. Caso haja um ou mais  tipos
    de dano listados após uma barra, a RD não se  aplica àqueles tipos. Por exemplo, uma criatura com
    RD 10/mágico ignora 10 pontos de dano de todos  os ataques que sofrer — exceto dano causado por
    habilidades e armas mágicas. Resistência a <Efeito>.   A criatura recebe um bônus em testes  de
    resistência contra efeitos do tipo  especificado no nome desta habilidade. Por  exemplo, uma
    criatura com resistência a magia +2 recebe +2 em testes  de Fortitude, Reflexos ou Vontade  contra
    habilidades mágicas. Visão na Penumbra.   A criatura enxerga em escuridão  leve em alcance curto
    (exceto  mágica). Ela ignora camuflagem  leve por esse tipo de escuridão  (veja a página 318). Visão
    no Escuro.   A criatura enxerga em  escuridão total em alcance  curto (exceto mágica). Ela  ignora
    camuflagem total por  esse tipo de escuridão (veja a  página 318). Vulnerabilidade a Dano.   A
    criatura sofre +50% a mais de  dano de um tipo específico. Por  exemplo, se uma criatura com
    vulnerabilidade a frio sofre  um ataque que causa 15  pontos de dano de frio,  ela sofre 22 pontos
    de  dano (15 x 1,5 = 22). 229  Kellyanne Pontes kelly.ayame@gmail.com  Capítulo Cinco Embora seja
    possível superar obstáculos e vencer  inimigos de muitas formas, às vezes os heróis ficam  sem
    escolha além de sacar suas armas, preparar suas  magias e partir para a batalha. Estatísticas  de
    combate A seguir estão as explicações das estatísticas  usadas em combate. Teste de Ataque Este é um
    tipo específico de teste de perícia, para  acertar um alvo com um ataque. Normalmente é um  teste de
    Luta, para um ataque corpo a corpo, ou de  Pontaria, para um ataque à distância. A dificuldade do
    teste é a Defesa do alvo. Se o  resultado é igual ou maior que a Defesa do alvo, você  acerta e
    causa dano (veja Dano, a seguir). Um teste de ataque pode sofrer modificadores  por habilidades,
    arma e condições. Dano Quando você acerta um ataque, causa dano.  Esse dano reduz os pontos de vida
    do inimigo (veja  Ferimentos & Morte, a seguir). Você rola dados para descobrir quanto dano  causou.
    O tipo de dado depende da arma ou ataque  utilizado — por exemplo, 1d4 para uma adaga ou  1d8 para
    uma espada longa. O dano de cada arma  é descrito no Capítulo 3: Equipamento. Para  ataques corpo a
    corpo ou com armas de arremesso,  você soma sua Força na rolagem de dano. Dano com Arma Corpo a
    Corpo   ou de Arremesso =  Dano da Arma + Força do Atacante Dano com Arma de Disparo  = Dano da Arma
    Assim, um personagem com Força 3 usando uma  espada longa causa 1d8+3 pontos de dano (1d8 da  espada
    longa mais 3 da Força).Tipos de Dano Cada arma ou efeito que causa dano possui um  tipo, conforme a
    lista a seguir. Por si só, o tipo de  dano não possui efeito em regras. Contudo, indica  a relação
    do dano com outros efeitos. Por exemplo,  uma criatura com redução de corte 5 reduz todo  dano de
    corte que sofre em 5. Ácido. Certos monstros e perigos naturais,  além de itens alquímicos, causam
    dano deste tipo.  Ácido é ligado ao elemento terra. Corte. Armas afiadas, como espadas, machados  e
    as garras de um monstro, causam dano de corte. Eletricidade. Algumas magias e perigos naturais, como
    um relâmpago, causam dano deste tipo.  Eletricidade é ligada ao elemento ar. Essência. Energia
    mágica pura, canalizada por  magias como Seta Infalível de Talude. Fogo. Causado por calor e chamas
    naturais e  mágicas. Fogo é ligado ao elemento... fogo! Frio. Algumas magias, além de clima severo,
    causam dano de frio. Ligado ao elemento água. Impacto. Causado por armas de contusão,  como clavas e
    maças, além de ondas de choque,  explosões, ataques sônicos e quedas. Luz. Magias e outros efeitos
    provenientes de  divindades bondosas causam dano de luz. Perfuração.  Armas pontudas, como lanças, e
    mordidas de monstros causam dano de perfuração. Psíquico. Ataques mentais e magias que afetam a
    mente da vítima causam dano deste tipo. Trevas. Causado por efeitos de necromancia e  ligados a
    divindades malignas. Acertos Críticos Um acerto crítico é um ataque especialmente  certeiro, que
    atinge pontos vitais ou vulneráveis. A tabela de armas do Capítulo 3: Equipamento possui uma coluna
    “Crítico”. Cada arma  tem uma margem de ameaça (que pode ser 18, 19 ou  20) e um multiplicador (que
    pode ser x2, x3 ou x4).  Quando nenhuma margem aparece, será 20. Quando  nenhum multiplicador
    aparece, será x2. Combate 230  Kellyanne Pontes kelly.ayame@gmail.com  Jogando Você faz um acerto
    crítico quando acerta um ataque rolando um valor igual ou maior que a margem  de ameaça da arma.
    Neste caso, multiplica os dados  de dano do ataque (incluindo quaisquer aumentos  por passos) pelo
    multiplicador da arma. Bônus numéricos de dano, assim como dados extras (como pela  habilidade
    Ataque Furtivo) não são multiplicados. Certas criaturas são imunes a acertos críticos.  Um alvo
    imune a acertos críticos ainda sofre o dano  de um ataque normal. Iniciativa A cada rodada, todo
    personagem tem um turno   — sua vez de agir. A Iniciativa determina a ordem  dos turnos dentro da
    rodada. Teste de Iniciativa. No início do  combate, cada jogador faz um teste de Inicia tiva para
    seu personagem. O mestre faz um  único teste para os inimigos (caso haja  inimigos com valor de
    Iniciativa  diferentes, o mestre usa o menor  valor). Aqueles com os resulta dos mais altos agem
    primeiro. No caso de empates, o  personagem com o maior valor  de perícia age primeiro. Se o  empate
    persistir, eles fazem um  novo teste de Iniciativa entre si,  para decidir quem age primeiro. Não é
    preciso fazer novos testes  de Iniciativa a cada rodada; a ordem  se mantém durante todo o combate.
    Entrando na Batalha.  Se um personagem entra na  batalha depois que ela come çou, faz um teste de
    Iniciativa e  age quando seu turno chegar, na  rodada seguinte. Surpresa. Quando o combate começa,
    se você não per cebeu seus inimigos, está surpreendido. Se você está ciente  de seus inimigos, mas
    eles  não estão cientes de você,  eles é que estão surpreendidos. Caso os dois lados tenham se
    percebido, ninguém  está surpreendido. E se nenhum lado percebe o outro... bem, nenhum combate
    acontece!Percebendo os Inimigos.   O mestre diz quem está ciente de  seus inimigos no começo do
    comba te. Em geral, ele diz aos jogadores para  fazerem testes de Percepção contra uma  dificuldade
    ou opostos pelo teste de Fur tividade dos inimigos (caso estes estejam  sendo cautelosos). Um
    personagem que nunca fica sur preendido (por exemplo, se tiver a habilidade  Esquiva Sobrenatural)
    pode rolar a Iniciativa  e agir mesmo que falhe em seu teste de Per cepção; de alguma maneira ele já
    esperava o  perigo, ou reage com reflexos impossi velmente rápidos.Como funciona o combate? O
    combate acontece em uma série de  rodadas. Uma rodada é o tempo necessário  para que todos os
    personagens no combate  tenham seu turno. Um turno é o tempo que  cada personagem tem para agir. Um
    combate obedece aos seguintes passos. Passo 1.  Cada personagem faz um teste  de Iniciativa. O
    mestre faz um único teste  para os inimigos. Passo 2.  O mestre diz quais perso nagens estão cientes
    de seus inimigos.  Aqueles que não percebem a presença  de inimigos começam o combate
    surpreendidos. Um personagem  surpreendido fica desprevenido e não  age na primeira rodada. Passo 3.
    Todos os personagens  têm seu turno na ordem da  Iniciativa (exceto aqueles  surpreendidos, que não
    agem  na primeira rodada). Passo 4.  Quando  todos os personagens  tiverem seu turno,  a rodada
    termina.  Uma outra  rodada se inicia,  com todos os  personagens agindo  novamente, na mesma ordem.
    Mesmo aqueles  que estavam surpreendidos  agora podem agir. Maquius Maquius  está sempre está sempre
    pronto para pronto para  rolarrolar IniciativaIniciativa 231  Kellyanne Pontes kelly.ayame@gmail.com
    Capítulo Cinco Crânio Negro, algoz da Tormenta, Crânio Negro, algoz da Tormenta,  contra Orion
    Drake, cavaleiro da Luzcontra Orion Drake, cavaleiro da Luz 232  Kellyanne Pontes
    kelly.ayame@gmail.com  Jogando A Rodada  de Combate Uma rodada representa cerca de seis segundos  no
    mundo de jogo. Durante a rodada, cada jogador  (incluindo o mestre) tem o seu turno, a sua vez de
    realizar ações. Pense em “rodada” como se fosse uma medida  de tempo, como “mês”: o mês representa
    os dias  marcados no calendário, mas também determina o  tempo entre um dia e o mesmo dia no mês
    seguinte. Assim, a rodada começa no turno do primeiro  personagem (aquele que teve Iniciativa mais
    alta)  e termina após o turno do último (aquele com  Iniciativa mais baixa). Mas a rodada também é o
    tempo entre uma Iniciativa e a mesma Iniciativa na  rodada seguinte. Efeitos que duram certo número
    de  rodadas terminam imediatamente antes do mesmo  resultado de Iniciativa quando se iniciaram, após
    o  número apropriado de rodadas. Tipos de Ações No seu turno, você pode fazer uma ação padrão e  uma
    ação de movimento, em qualquer ordem. Você pode trocar sua ação padrão por uma ação  de movimento,
    para fazer duas ações de movimento,  mas não pode fazer o inverso. Você também pode abrir mão das
    duas ações  (tanto a padrão quanto a de movimento) para fazer  uma ação completa. Portanto, em um
    turno você pode fazer: • Uma ação padrão e  uma ação de movimento; • Ou duas ações de movimento; •
    Ou uma ação completa. Você também pode executar qualquer quantidade  de ações livres e reações. Ação
    Padrão. Basicamente, uma ação padrão  permite que você execute uma tarefa. Fazer um  ataque ou
    lançar uma magia são as ações padrão  mais comuns. Ação de Movimento. Esta ação representa  algum
    tipo de movimento físico. Seu uso mais  comum é percorrer uma distância igual a seu deslocamento.
    Levantar-se, sacar uma arma, pegar um  item de sua mochila, abrir uma porta e subir numa  montaria
    também são ações de movimento.Ação Completa. Este tipo de ação exige todo o  tempo e esforço normal
    de uma rodada. Para uma ação  completa, você deve abrir mão de sua ação padrão e de  sua ação de
    movimento — mas, normalmente, você  ainda pode realizar ações extras, ações livres e reações. Ação
    Livre. Esta ação não exige quase nenhum  tempo e esforço, mas ainda só pode ser feita em seu  turno.
    Jogar-se no chão ou gritar uma ordem são  ações livres — mas o mestre pode decidir que algo  é
    complicado demais para ser livre. Dar uma ordem  curta é uma ação livre, explicar um plano inteiro,
    não! Reação. Uma reação acontece em resposta  a outra coisa. Como ações livres, reações tomam  tão
    pouco tempo que você pode realizar qualquer  quantidade delas. A diferença é que uma ação livre é
    uma escolha consciente, feita no seu turno. Já uma  reação é uma resposta automática, que pode
    ocorrer  mesmo fora do seu turno. Você pode reagir mesmo  se não puder realizar ações, como por
    estar atordoado. Um teste de Percepção para perceber um troll  escondido no pântano, ou um teste de
    Reflexos para  escapar de uma explosão, são exemplos de reações. Ações Padrão Sua ação padrão
    normalmente representa a coisa  mais importante que você vai fazer em seu turno. Agredir. Você faz
    um ataque com uma arma  corpo a corpo ou à distância.  Com uma arma corpo a corpo, você pode atacar
    qualquer inimigo dentro de seu alcance natural  (1,5m para criaturas Pequenas e Médias ou um inimigo
    adjacente no mapa). Personagens maiores, ou  usando certas armas, podem atacar mais longe. Você
    pode substituir um ataque corpo a corpo por uma  manobra de combate (veja a seguir). Com uma arma de
    ataque à distância, você pode  atacar qualquer inimigo que consiga ver e que esteja  no alcance da
    arma (ou até o dobro do alcance,  sofrendo uma penalidade de –5). • Atirando em Combate Corpo a
    Corpo. Quando  faz um ataque à distância contra uma criatura em  combate corpo a corpo, você sofre
    –5 no teste de  ataque. Uma criatura está em combate corpo a corpo  se estiver dentro do alcance
    natural de qualquer  inimigo (incluindo você). Atropelar. Você usa uma ação padrão durante  um
    movimento para avançar pelo espaço ocupado  por uma criatura (normalmente, você não pode fazer  uma
    ação padrão durante um movimento; isto é uma  exceção). A criatura pode lhe dar passagem ou
    resistir.  Se der passagem, você avança pelo espaço dela; ne233  Kellyanne Pontes
    kelly.ayame@gmail.com  Capítulo Cinco nhum teste é necessário. Se resistir, faça um teste  de
    manobra oposto; se você vencer, deixa a criatura  caída e continua seu avanço. Se o alvo vencer,
    conti nua de pé e detém seu avanço. Atropelar é uma ação  livre se tentada durante uma investida.
    Fintar. Faça um teste de Enganação oposto ao  teste de Reflexos de uma criatura em alcance curto. Se
    você passar, ela fica desprevenida contra seu próximo  ataque, mas apenas até o fim de seu próximo
    turno. Lançar uma Magia. A maioria das magias  exige uma ação padrão para ser executada. Preparar.
    Você prepara uma ação (padrão, de  movimento ou livre) para realizar mais tarde, após  seu turno,
    mas antes de seu turno na próxima rodada.  Diga a ação que vai fazer e em quais circunstâncias  (por
    exemplo, “disparar minha besta na primeira  criatura que passar pela porta”). A qualquer momen to
    antes de seu próximo turno, você pode fazer a ação  preparada como uma reação a essas
    circunstâncias. Se, no seu próximo turno, você ainda não tiver  realizado sua ação preparada, não
    pode mais realizá-la  (embora possa preparar a mesma ação de novo). Pelo resto do combate, sua
    Iniciativa fica ime diatamente acima da qual você fez a ação preparada. Usar Habilidade ou Item.
    Algumas habilidades e itens, como poções, exigem uma ação padrão  para serem usadas. Ações de
    Movimento Uma ação de movimento serve para mudar algo  de posição — seja você, seja um item.
    Levantar-se. Levantar do chão (ou de uma  cama, cadeira...) exige uma ação de movimento. Manipular
    Item. Muitas vezes, manipular um  item exige uma ação de movimento. Pegar um objeto  em uma mochila,
    abrir ou fechar uma porta e atirar  uma corda para alguém são ações de movimento. Mirar. Você mira
    em um alvo que possa ver,  dentro do alcance de sua arma. Isso anula a penalidade de –5 em testes de
    Pontaria realizados neste  turno contra aquele alvo caso ele esteja engajado em  combate corpo a
    corpo. Movimentar-se. Você percorre uma distância  igual a seu deslocamento (tipicamente 9m para
    raças  de tamanho Médio). Outros movimentos, como  nadar, escalar ou cavalgar, também usam esta
    ação. Sacar ou Guardar Item.  Sacar ou guardar  um item exige uma ação de movimento. Se puder  usar
    mais de uma arma (como por possuir Ambidestria), pode sacar todas elas.Manobras de Combate Uma
    manobra é um ataque corpo a corpo para fazer  algo diferente de causar dano — como arrancar a  arma
    do oponente ou empurrá-lo para um abismo.  Não é possível fazer manobras de combate com  ataques à
    distância. Faça um teste de manobra (um teste de ataque corpo  a corpo) oposto com a criatura. Mesmo
    que ela esteja  usando uma arma de ataque à distância, deve fazer o  teste usando seu valor de Luta.
    Em caso de empate,  o personagem com o maior bônus vence. Se os bônus  forem iguais, outro teste
    deve ser feito. Em geral,  você pode usar qualquer arma corpo a corpo para  fazer manobras de
    combate. Estas são as manobras que você pode fazer. • Agarrar. Você segura uma criatura (por seu
    braço, sua roupa etc.). Uma criatura agarrada fica  desprevenida e imóvel, sofre –2 nos testes de
    ataque  e só pode atacar com armas leves. Ela pode se soltar  com uma ação padrão, vencendo um teste
    de manobra oposto. Você só pode agarrar com um ataque  desarmado ou arma natural e, enquanto agarra,
    fica  com essa mão ou arma natural ocupada. Além disso,  move-se metade do deslocamento normal, mas
    arrasta a criatura que estiver agarrando. Você pode  soltá-la com uma ação livre. Você pode atacar
    uma  criatura agarrada com sua mão livre. Se preferir, pode  substituir um ataque por um teste de
    agarrar contra a  criatura. Se vencer, causa dano de impacto igual a um  ataque desarmado ou arma
    natural. Isso significa que  você está esmagando ou sufocando o inimigo. Um personagem fazendo um
    ataque à distância  contra um alvo envolvido na manobra agarrar tem  50% de chance de mirar no alvo
    errado! • Derrubar. Você deixa o alvo caído. Esta queda  normalmente não causa dano. Se você vencer
    o teste  oposto por 5 pontos ou mais, derruba o oponente  com tanta força que também o empurra um
    quadrado  em uma direção a sua escolha. Se isso o jogar além de  um parapeito ou precipício, ele
    pode fazer um teste  de Reflexos (CD 20) para se agarrar numa beirada. • Desarmar. Você derruba um
    item que a criatura  esteja segurando. Normalmente o item cai no mesmo  lugar em que o alvo está (a
    menos que o alvo esteja  voando, sobre uma ponte etc.). Se você vencer o teste  oposto por 5 pontos
    ou mais, derruba o item com  tanta força que também o empurra um quadrado em  uma direção a sua
    escolha. • Empurrar.  Você empurra a criatura 1,5m. Para  cada 5 pontos de diferença entre os
    testes, você  empurra o alvo mais 1,5m. Você pode gastar uma  ação de movimento para avançar junto
    com a criatura  (até o limite do seu deslocamento). • Quebrar. Você atinge um item que a criatura
    esteja segurando. Veja as estatísticas de objetos na  página 239. 234  Kellyanne Pontes
    kelly.ayame@gmail.com  Jogando Aventureiros contra tropas Aventureiros contra tropas  da Supremacia
    Puristada Supremacia PuristaAções Completas Ações completas exigem muito tempo e esforço.  Leia mais
    sobre isso na página 233. Corrida. Você corre mais rapidamente que seu  deslocamento normal. Veja a
    perícia Atletismo. Golpe de Misericórdia. Você desfere um  golpe letal em um oponente adjacente e
    indefeso. Um  golpe de misericórdia é um acerto crítico automático.  Além de sofrer dano, a vítima
    tem uma chance de  morrer instantaneamente. Esta chance é de 25% (1  em 1d4) para personagens e NPCs
    importantes e de  75% (1 a 3 em 1d4) para NPCs secundários. Investida. Você avança até o dobro de
    seu  deslocamento (e no mínimo 3m) em linha reta e,  no fim do movimento, faz um ataque corpo a
    corpo.  Você recebe +2 no teste de ataque, mas sofre –2 na  Defesa até o seu próximo turno, porque
    sua guarda  fica aberta. Você não pode fazer uma investida em  terreno difícil. Durante uma
    investida, você pode  fazer a manobra atropelar como uma ação livre (mas  não pode atropelar e
    atacar o mesmo alvo). Lançar uma Magia. Ao lançar magias com  execução maior do que uma ação
    completa, você  gasta uma ação completa a cada rodada.Ações Livres Uma ação livre demanda pouco ou
    nenhum  tempo, esforço ou atenção. Normalmente você pode  executar quantas ações livres quiser por
    turno, mas  o mestre pode limitar ou proibir ações complexas. Atrasar. Escolhendo atrasar sua ação,
    você  age mais tarde na ordem de Iniciativa, em relação  à Iniciativa que rolou. Isto é o mesmo que
    reduzir sua Iniciativa voluntariamente pelo resto do  combate. Quando sua nova Iniciativa chegar,
    você  age normalmente. Você pode especificar este novo  valor de Iniciativa ou apenas esperar até
    algum  momento e então agir, fixando sua nova Iniciativa  neste ponto. Atrasar é útil para ver o que
    seus  amigos ou inimigos farão, antes de decidir o que  você mesmo fará. • Limites para atrasar.
    Você pode atrasar sua Iniciativa até –10 menos seu valor de Iniciativa. Quando  a contagem de
    Iniciativa chega a esse ponto, você  deve agir ou abrir mão de qualquer ação na rodada.  Por
    exemplo, um personagem com um valor de Iniciativa +3 pode esperar até a contagem de Iniciativa
    chegar a –13. Nesse ponto, deve agir ou desistir de  seu turno. Isso importa quando vários
    personagens  atrasam suas ações. 235  Kellyanne Pontes kelly.ayame@gmail.com  Capítulo Cinco
    Variante: Mapa de Batalha Para auxiliar a visualização dos personagens  em combate, você pode usar
    um mapa  de batalha (uma superfície quadriculada,  como um tabuleiro de xadrez) e peças para
    representar cada criatura. Cada quadrado do  mapa de batalha deve ter 2,5 centímetros de  lado e
    representa 1,5m no mundo de jogo.  Assim, um personagem com deslocamento  9m pode percorrer 6
    quadrados com uma  ação de movimento. Para simplificar, você  pode se referir a distâncias no jogo
    em  “quadrados” (de 1,5m) em vez de metros. Usar mapas de batalha deixa o combate  mais complexo,
    exigindo que os jogadores  calculem suas ações e movimentos  levando em conta questões como
    flanquear, terreno difícil e distâncias  exatas das habilidades. Via de regra, é  uma opção
    divertida para grupos que  gostam do aspecto tático do jogo. A Jambô possui mapas de batalha e peças
    para representar criaturas em sua loja  online, em www.jamboeditora.com.br. Você  também pode
    encontrar mapas e peças na  internet ou, se for treinado em algum Ofício  relevante, criar os seus
    próprios! • Vários atrasos. Se vários personagens estão  atrasando suas ações, aquele com o maior
    valor de  Iniciativa (ou a maior Destreza, em caso de empate)  tem a vantagem. Se dois ou mais
    personagens que  estejam atrasando quiserem agir na mesma contagem  de Iniciativa, aquele com o
    maior valor age primeiro.  Se dois ou mais personagens estão tentando agir  um depois do outro,
    aquele com o maior valor de  Iniciativa tem o direito de agir depois. Falar. Em geral, falar é uma
    ação livre. Lançar  magias ou usar habilidades de classe que dependem  da voz não são ações livres.
    O mestre também pode  limitar aquilo que você consegue falar durante uma  rodada (vinte palavras são
    o limite padrão). Jogar-se no Chão. Jogar-se no chão é uma  ação livre. Você recebe os benefícios e
    penalidades  normais por estar caído, mas normalmente não sofre  dano ao se jogar no chão. Largar um
    Item.  Deixar cair um item que esteja segurando é uma ação livre. Mas deixar cair (ou  jogar) um
    item com a intenção de acertar algo é uma  ação padrão. E deixar cair (ou jogar) um item para  que
    outra pessoa agarre é uma ação de movimento.Ferimentos  & Morte Sempre que você sofre dano —
    golpeado pelo  tacape de um ogro, atingido por uma Bola de Fogo ou  caindo em uma armadilha —,
    subtrai este valor de  seus pontos de vida. Você anota seus pontos de vida  em sua ficha de
    personagem ou em qualquer papel  de rascunho. O dano pode deixar cicatrizes, amassar sua  armadura e
    sujar sua roupa de sangue, mas não o  impede de agir. Isso só muda quando seus pontos de  vida
    chegam a 0 ou menos. Se ficar com 0 PV ou menos, você cai inconsciente e fica sangrando. No início
    de seu turno, faça  um teste de Constituição (CD 15). Se passar, você  estabiliza e não precisa mais
    fazer esse teste (exceto  se perder mais PV). Se falhar, você perde 1d6 pontos  de vida. Você deve
    repetir o teste a cada rodada, até  estabilizar ou morrer. Um personagem sangrando  pode ser
    estabilizado com um teste de Cura (CD 15)  ou com qualquer efeito que cure pelo menos 1 PV . Um
    personagem com 0 ou menos pontos de vida  que recupere PV até um valor positivo (1 ou mais) por
    causa de uma habilidade, magia ou descanso, recobra  a consciência e pode agir normalmente. Quando
    seus pontos de vida chegam a –10 ou  a um número negativo igual à metade de seus PV  totais (o que
    for mais baixo), você morre. Por exemplo: Oberon, o Martelo, um arcanista  com 12 PV , morre se
    chegar a –10 PV . Mais tarde na  campanha, Oberon sobe vários níveis e chega a 30  PV . Agora, ele
    só morre se chegar a –15 PV . Dano Não Letal Dano não letal conta para determinar quando  você cai
    inconsciente, mas não para determinar  quando você começa a sangrar ou morre. Efeitos de  cura
    recuperam primeiro pontos de vida perdidos  por dano não letal. Quase todo dano causado em condições
    normais  (armas, armadilhas, magias...) é letal. Você pode  usar uma arma para causar dano não letal
    (batendo  com as partes não afiadas da arma, controlando a  força dos golpes ou evitando pontos
    vitais), mas  sofre uma penalidade de –5 no teste de ataque. Ataques desarmados e certas armas
    específicas  causam dano não letal. Você pode usar esses ataques  e armas para causar dano letal,
    mas sofre a mesma  penalidade de –5 no teste de ataque. 236  Kellyanne Pontes kelly.ayame@gmail.com
    Jogando 237  Kellyanne Pontes kelly.ayame@gmail.com  Capítulo Cinco Os soldados na muralha estão Os
    soldados na muralha estão  protegidos por cobertura leveprotegidos por cobertura leveMovimentação
    Deslocamento. Esta é a medida de quantos  metros você pode percorrer com uma ação de movimento. O
    deslocamento padrão é 9m, mas algumas  habilidades de raça e classe podem mudá-lo. Atravessar um
    Espaço Ocupado. Você  pode atravessar um espaço ocupado por um aliado.  No entanto, não pode
    atravessar um espaço ocupa do por um inimigo, a menos que ele esteja caído  ou indefeso, ou seja
    pelo menos três categorias de  tamanho maior ou menor que você. Você também  pode atravessar um
    espaço ocupado por um inimigo  com Acrobacia ou a ação atropelar. Espaço ocupado  por um inimigo
    conta como terreno difícil. Carga. Se você estiver sobrecarregado (veja a  página 141), seu
    deslocamento diminui em 3m. Diagonais. Em um mapa, mover-se na diago nal custa o dobro. Ou seja,
    andar 1,5m (1 quadrado)  na diagonal conta como 3m (2 quadrados). Outros Tipos de Movimento. Além de
    andar, você pode gastar uma ação de movimento  para se mover de outras maneiras. Consulte as
    perícias Acrobacia e Atletismo.Subir ou Mergulhar. Voando ou nadando,  movimentar-se na vertical
    custa o dobro na subida  (ou o triplo em diagonais) e metade na descida (ou o  normal em diagonais).
    Ou seja, voar 1,5m para cima  conta como 3m, enquanto voar 3m para baixo conta  como 1,5m. Terreno
    Difícil. Lugares onde é difícil andar,  como uma floresta cheia de raízes, neve profunda,  ruínas
    com destroços ou mesmo uma rua lotada de  pessoas, são terreno difícil. Mover-se em terreno  difícil
    custa o dobro. Ou seja, você se move metade  do deslocamento normal — ou gasta 3m de desloca mento
    por quadrado, em vez de 1,5m.  Situações Especiais Camuflagem. Você recebe camuflagem leve  quando
    um efeito dificulta a visão dos inimigos. Pode  ser escuridão leve, neblina, folhagens ou outro
    efeito  similar no local onde você está ou no espaço entre  você e o oponente. Ataques contra você
    têm 20%  de chance de falha (ao fazer um ataque, o atacante  rola 1d10 junto com o d20 do teste de
    ataque; se o  resultado desse d10 for 1 ou 2, o ataque erra, independentemente do resultado do teste
    de ataque). 238  Kellyanne Pontes kelly.ayame@gmail.com  Jogando Quebrando Objetos Tentar quebrar ou
    destruir um objeto — desde  uma porta fechada até uma espada empunhada por  um inimigo — é similar a
    atacar uma criatura. Para objetos soltos, faça um ataque contra a  Defesa do objeto, definida por
    sua categoria de tamanho. Se o objeto estiver em movimento, recebe  +5 na Defesa. Para um objeto
    segurado por outra  criatura, use a manobra quebrar (p. 234) Se você acerta o ataque, causa dano
    normal. Entretanto, objetos normalmente têm redução de dano,  dependendo de seu material. Um objeto
    reduzido a 0  ou menos PV é destruído.Você recebe camuflagem total quando um efeito  impede a visão
    dos inimigos — por exemplo, em  uma câmara em escuridão total. A chance de falha  em camuflagem
    total é 50% (1 a 5 no d10). Cobertura. Você recebe cobertura leve quando  está atrás de algo que
    bloqueia o ataque dos inimigos, como uma árvore, uma muralha de castelo,  a lateral de uma carroça
    ou uma criatura maior.  Cobertura leve fornece +5 na Defesa. No mapa, o atacante e o alvo escolhem,
    cada um, um  canto do quadrado onde estão. Trace uma linha reta entre os  cantos. Se a linha é
    interrompida por um obstáculo ou criatura, o alvo tem cobertura leve. O alvo não recebe cobertura
    se a linha seguir ao longo de um obstáculo ou apenas tocar a  ponta de um obstáculo. Você recebe
    cobertura total quando seus inimigos  não podem alcançá-lo — por exemplo, se estiver  atrás de uma
    parede. Cobertura total impede que  você seja atacado. Flanquear.  Quando você luta corpo a corpo
    contra um oponente e um aliado faz o mesmo no  lado oposto — ou seja, o inimigo está entre vocês —
    vocês estão flanqueando o alvo. Ambos recebem +2  em seus testes de ataque contra o alvo flanqueado.
    Não se pode flanquear à distância ou com ataques  desarmados (a menos que você possua as habilidades
    Briga ou Estilo Desarmado). Tabela 5-3: Situações Especiais O atacante  está...Modificador  no
    ataque Caído –5 (apenas para corpo a corpo) Cego 50% de chance de falha Em posição elevada +2
    Flanqueando o alvo +2 (apenas para corpo a corpo) Invisível O alvo sofre –5 na Defesa Ofuscado –2 O
    alvo  está...Modificador  na Defesa Caído –5 contra ataques corpo a corpo,  +5 contra ataques à
    distância Cego –5 Desprevenido –5 Sob camuflagem leve 20% de chance de falha Sob camuflagem total
    50% de chance de falha Sob cobertura leve +5 Sob cobertura total O alvo não pode ser atacado Tabela
    5-4:  Estatísticas de Objetos Exemplo Tamanho Def RD PV Objetos Gerais Pergaminho Minúsculo 15 0 1
    Corda Minúsculo 15 0 2 Corrente Minúsculo 15 10 2 Cadeira Pequeno 12 5 5 Barril Médio 10 5 10 Porta
    de madeira Grande 8 5 20 Porta de pedra Grande 8 8 100 Porta de ferro Grande 8 10 100 Carroça Grande
    8 5 50 Casebre Enorme 5 5 100 Celeiro Colossal 0 5 200 Armas, Armaduras e Escudos* Arma leve de
    madeira (machadinha) 5 2 Arma de uma mão de madeira (clava) 5 5 Arma de duas mãos de madeira
    (bordão) 5 10 Arma leve de metal (adaga) 10 2 Arma de uma mão de metal (espada longa) 10 5 Arma de
    duas mãos de metal (montante) 10 10 Escudo leve 5 10 Escudo pesado 10 20 Armadura leve 5 20 Armadura
    pesada 10 40 *Pontos de vida de itens comuns. Divida por 2 para itens  reduzidos, multiplique por 2
    para itens aumentados e  multiplique por 5 para itens gigantes. 239  Kellyanne Pontes
    kelly.ayame@gmail.com  CAPÍTULO O MestreO Mestre6  Kellyanne Pontes kelly.ayame@gmail.com  “É muito
    conveniente para vocês que as leis universais dos deuses sejam  reflexo da maneira de pensar dos
    humanos e dos elfos.” — Maryx Corta-Sangue  Kellyanne Pontes kelly.ayame@gmail.com  Capítulo Seis
    Existe uma figura indispensável para  qualquer jogo de Tormenta20:  o mestre. O mestre cria a base
    da  história que todos vão desenvolver,  descreve o mundo onde os personagens jogadores vivem,
    interpreta vilões e coadjuvantes e  toma decisões de regras. Embora o mestre não  esteja acima dos
    outros jogadores, o papel dele  é diferente. É possível haver uma aventura  sem um guerreiro ou um
    mago — mas, sem o  mestre, não há aventura alguma! A melhor maneira de entender o papel do mestre  é
    pensar nele como um jogador que interpreta tudo  que não são os personagens principais. Se o
    paladino  do grupo quer falar com a capitã da guarda, quem  interpreta a oficial é o mestre. Se a
    ladina quer se  esconder nos becos, quem descreve as ruelas é o  mestre. Se o caçador quer examinar
    o solo da floresta  para rastrear inimigos, quem explica as descobertas  do herói é o mestre. É
    claro, o mestre não apenas  reage às ações dos jogadores: ele pode dizer que  uma tempestade está se
    formando, que um bando de  hobgoblins ataca o grupo ou que um bardo irritante  começa a seguir os
    aventureiros. De um rato que  entra na mochila do druida até um deus que joga uma  maldição sobre a
    clériga, de um oceano tempestuoso  capaz de naufragar navios até uma pedrinha no sapato do
    bucaneiro, o mestre controla tudo no mundo de  jogo, exceto os personagens jogadores. O processo de
    narrar e arbitrar a história é chamado de “mestrar”. Uma das atribuições do mestre é atuar como
    juiz.  Você não é apenas um contador de histórias, é também o árbitro de um jogo. Deve conhecer as
    regras,  pelo menos para saber onde procurar caso tenha dúvida. Quando um jogador declara uma ação,
    você deve  decidir o resultado dela, usando as mecânicas ou seu  bom senso. Também deve julgar as
    reações dos NPCs  com base no comportamento dos heróis. Este equilíbrio entre julgamento de
    interpretação e arbitragem  de regras é a essência do “poder” do mestre. Quando  um RPGista diz que
    “quando essa pessoa é o mestre,  todos se divertem muito”, em geral está falando sobre  a habilidade
    de narração, talento para o improviso,  domínio de regras e bom senso de seu colega. Se tudo isso
    pareceu demais, relaxe. Quando  você começar a descrever os ambientes que imaginou  e levar sua
    história adiante, verá como tudo flui. E,  se cometer algum erro, não há problema. Ninguém  espera
    que você seja um diretor de cinema ou escri tor profissional. Você não tem obrigação de chegar  a
    nenhum padrão de qualidade. Está aqui para se  divertir com seus amigos.Como Mestrar O papel do
    mestre é variado e pode parecer confuso. A seguir vamos explicar as principais etapas do  trabalho
    desse contador de histórias. Preparação Diferente dos demais jogadores, boa parte do  trabalho do
    mestre acontece antes da sessão de  jogo. Na fase da preparação, o mestre lê as regras e  a
    ambientação do mundo de jogo, inventa a base da  história que quer contar com o grupo e estabelece
    as  linhas gerais do que vai acontecer. Preparar demais é um risco tão grande quanto  preparar de
    menos. Quanto mais amplo for o ele mento com o qual você está lidando, mais vago ele  deve ser em
    sua preparação. Em compensação, quanto mais imediato, mais você deve prestar atenção a  ele. Mas
    chega de teoria, vamos a um exemplo. Digamos que você, um mestre iniciante, decide  começar uma
    campanha clássica de Tormenta20.  Se você não sabe o que é uma campanha, não se  assuste, já vamos
    falar disso. Você decide que sua  história vai lidar com um mago maligno tentando  escravizar todos
    os dragões do mundo para usá-los  em um plano de dominação. Para isso, ele vai usar  um artefato
    mágico que você acabou de inventar: o  Coração de Kally. Kally, ou Kallyadranoch, é o Deus  dos
    Dragões, como você pode ver no Capítulo 1.  Embora nada seja dito sobre seu coração, você imagina
    uma enorme pedra preciosa escondida no fundo de uma montanha. Esta pedra é a forma física do
    coração do deus, contendo boa parte de seu poder.  O mago maligno (o vilão da história) sabe que
    este  artefato existe, mas não sabe onde está. O objetivo  dele é obtê-lo e, com o objeto, dominar
    os dragões  de Arton. Você visualiza uma grande batalha nos  céus, com os personagens jogadores
    montando  dragões, combatendo os dragões controlados pelo  mago. Também imagina uma cena em que os
    heróis  devem negociar com Kallyadranoch — ele é um  deus tirânico, mas está indefeso sem o Coração
    e  os heróis são sua única chance. Você inventou tudo  isso apenas porque pareceu divertido. A
    história  poderia ser qualquer coisa. Pronto. Isso é tudo que você precisa saber  sobre a trama
    geral, pois ela acontecerá ao longo  de meses ou anos, não semana que vem. Não há  necessidade de
    criar uma cadeia de eventos que  vai levar à batalha nos céus. Na verdade, fazer isso  só iria
    atrapalhar. Afinal, o desenrolar da história  depende das ações dos jogadores. Embora a batalha  242
    Kellyanne Pontes kelly.ayame@gmail.com  O Mestre seja uma cena instigante, você nem sabe se ela vai
    mesmo acontecer! Você precisa saber mais sobre o que é específico e imediato: a primeira sessão de
    jogo. Sua tarefa  na primeira sessão é criar uma história simples e  pequena que possa um dia levar
    à história mais  ampla que você quer compartilhar com o grupo, e  que dê oportunidades para os
    personagens jogado res brilharem. Essencialmente, esboçar o primeiro  episódio de uma série ou o
    primeiro capítulo de  um livro. Só o primeiro. Você decide que a primeira sessão vai ser  simples:
    os personagens estão numa aldeia, então  são contratados para se livrar de kobolds que estão
    saqueando viajantes nas estradas. Kobolds têm a  ver com dragões, então você acha que vai conseguir
    ligar tudo mais tarde. Não adianta tentar fazer uma  trama totalmente encadeada logo de início, pois
    os jogadores são imprevisíveis. Você decide que os  kobolds fazem parte de um bando maior, um grupo
    de mercenários humanoides monstruosos que se  chama “Coração Sombrio”. Antes da primeira sessão de
    jogo, você deve  conhecer as fichas de kobolds presentes neste livro  — afinal, eles serão os
    principais inimigos. Decida  quantos kobolds serão um bom desafio; lembre-se  de que, no início, é
    bom que os personagens vençam, para que não fiquem desencorajados. Imagine  a aldeia, a taverna, os
    habitantes da região. Anote  um punhado de nomes de aldeões para que o lugar  pareça vivo. Decida
    uma característica para a aldeia  (digamos que, na praça central, há uma árvore rara  com flores
    prateadas que florescem só uma vez a  cada dez anos). Crie dois ou três aldeões com per sonalidades
    simples: o taverneiro que está sempre  tentando alimentar os fregueses de graça (para  desespero de
    sua esposa), a prefeita que adora contar piadas sem graça, o garotinho que quer ser um  grande
    guerreiro. Pense num nome para a aldeia...  Digamos Vila Prateada, por causa da árvore. Pronto!
    Você já tem um ambiente vivo onde os jogadores  vão começar. Você não vai precisar de nenhuma
    profundidade adicional. Você não precisa de fichas para nenhum dos  aldeões, muito menos de
    descrições de cada casa da  aldeia. Se algum jogador perguntar sobre esses detalhes, improvise: as
    casas têm uma sala, um quarto  e uma cozinha, tudo com teto de sapé. A aldeã que  está passando na
    praça é alta e tem cabelos trançados.  Qualquer coisa serve. Vamos à história. Pense numa sequência
    de  eventos simples. Os personagens estão na taverna e recebem o chamado para lidar com os kobolds.
    Falam com a prefeita que vai contratá-los e desco brem informações. Então podem pensar sozinhos  num
    plano — talvez eles usem a si mesmos como  iscas na estrada, talvez tentem rastrear os kobolds.
    Eles então enfrentam os kobolds. Quando vencem,  descobrem uma carta escrita em linguagem humana.
    Ela diz: “Todo o ouro deve ser levado de volta  à fortaleza. Thurgann não tolera trapaceiros! O
    Coração Sombrio vencerá”. Quem é Thurgann? Onde é a fortaleza? Você  ainda não precisa saber nada
    disso, pois só vai  aparecer na segunda sessão de jogo. Basta que haja  algo instigante para levar a
    história para a frente.  A próxima cena envolve os personagens recebendo  a recompensa da prefeita,
    talvez falando com ela  sobre a carta. Contudo, o que exatamente eles vão  fazer fica por conta
    deles. O que podemos tirar desse exemplo? Uma boa  primeira sessão tem um local interessante (a
    aldeia),  dois ou três coadjuvantes (o taverneiro, a prefeita, o  garotinho), um tipo de inimigo (os
    kobolds) e um  mistério ou surpresa (a carta). Mais do que isso é  complicação desnecessária. Este é
    um exemplo de uma primeira sessão  com bastante preparação. Alguns mestres preferem  deixar as
    coisas mais em aberto. Mais à frente vamos  explorar melhor como criar aventuras, então não se
    desespere se ainda não entendeu. Por enquanto o  que você precisa saber é: prepare as bases gerais
    de  sua história, esteja pronto para lidar com as regras e  deixe os jogadores livres para agir.Quem
    É o Mestre? Se você tiver dificuldade para entender o  papel do mestre, pense num videogame.  Você
    joga com um personagem, mas  há muito mais acontecendo além dos  movimentos do protagonista, certo?
    Há  um cenário, inimigos, efeitos sonoros,  coadjuvantes, desafios... Em Tormenta20,  tudo isso é
    descrito pelo mestre e está sob  controle dele. Outra maneira de pensar  no mestre é como o narrador
    de um livro.  Ele estabelece o ambiente, situa o leitor  com imagens, sons, cheiros e sensações...
    Enfim, narra a história. A única diferença  é que o mestre não tem qualquer poder  de decisão sobre
    as ações dos heróis — os  personagens jogadores. 243  Kellyanne Pontes kelly.ayame@gmail.com
    Capítulo Seis Proposta Em algum ponto entre ter a ideia inicial e terminar  a preparação, você pode
    explicar aos jogadores como  será o jogo e verificar se eles gostam da proposta. Você  não vai
    estragar nenhuma surpresa, mas pode checar  para adequar a história aos interesses de todos. Usando
    o exemplo anterior, você pode perguntar  se todos gostariam de uma história épica envolvendo
    personagens clássicos de fantasia medieval. Se quiser  revelar um pouco mais, pode sugerir que tem
    algo a  ver com dragões. Propor a ideia antes de começar o  jogo tem duas vantagens. A primeira é
    retirar qualquer elemento que não seria divertido. Por exemplo,  um dos jogadores pode ter acabado
    de jogar uma  campanha com outro grupo, na qual o grande vilão  era o deus Kallyadranoch. Nesse
    caso, talvez você  decida mudar as coisas e fazer com que o deus seja  imediatamente preso, perdendo
    seu poder, para  que os jogadores não precisem interagir com ele.  A segunda vantagem é incorporar
    elementos pelos  quais os jogadores demonstrem interesse. Digamos  que um deles ache ótimo enfrentar
    vilões clássicos  do cenário, especialmente trolls nobres. Bem, talvez  o mago maligno na verdade
    seja um troll nobre… Ao discutir a proposta, o grupo também deve  combinar seus personagens, ou ao
    menos trocar  ideias sobre eles. Assim, você evita um grupo com  três magos e nenhum guerreiro, ou
    um grupo no  qual nenhum personagem irá se interessar pela  história que o mestre esboçou. Usando
    nosso exem plo, um bom grupo de personagens seria variado e  equilibrado (um guerreiro, um mago, um
    clérigo…).  Personagens cruéis ou egoístas não se encaixariam  bem, então todos combinam de
    interpretar heróis  — ou novatos tentando ser heróis. Você pode incluir  vínculos entre os
    personagens: todos se conhecem,  todos são naturais da mesma cidade, todos foram  presos
    injustamente pelo mesmo nobre...  Depois de ter a ideia, fazer a proposta e preparar  a primeira
    sessão, é hora de jogar! Início Na hora marcada, todos devem estar reunidos em  volta da mesa (ou
    conectados na internet) com suas  fichas prontas. Cabe ao mestre dar início à história. Caso seus
    jogadores não conheçam nada sobre  Arton, dê um resumo muito rápido (quatro ou cinco  frases) sobre
    o mundo. Fale que é um cenário de  fantasia medieval clássico, com cavaleiros, magos, elfos, anões e
    outros tipos do gênero. Explique que há  muitos reinos e muitos deuses, mas não se preocupe em citar
    cada um deles. Fale que existe uma grande  ameaça: a Tormenta, uma tempestade de sangue que
    corrompe e destrói áreas de Arton. Diga que Arton é  um mundo de heróis, onde há espaço para todos.
    Se  algum personagem pertencer a uma raça não humana,  você pode explicar um pouco mais sobre este
    povo  (“os elfos perderam seu reino e sua deusa, portanto  vivem espalhados pelos reinos humanos”).
    No caso  de algum clérigo ou paladino, ofereça um resumo  sobre sua divindade padroeira. Cuidado
    para não demorar demais nesta parte. Mesmo que os jogadores  façam perguntas, diga que os
    personagens não sabem  todos os detalhes e que eles descobrirão ao longo da  história. Os mais
    curiosos podem ler este livro ou  qualquer um dos vários materiais de Tormenta. Então comece a
    história em si, estabelecendo  uma cena. Diga onde os personagens estão — principalmente se você é
    um mestre iniciante, é recomen dado que o grupo já comece junto no mesmo lugar,  mesmo que os
    personagens ainda não se conheçam.  Fale uma ou duas frases sobre o reino ou região e so bre a
    aldeia, cidade, castelo ou outro local específico  onde todos estão. Explique de forma rápida como e
    por que cada um chegou lá (“o guerreiro estava pro curando trabalho como guarda de caravana e ouviu
    dizer que a Vila Prateada é ponto de parada de vários  mercadores da região...”). Então descreva a
    primeira  ação: algo acontece, exigindo uma reação de todos. O início mais clássico em jogos deste
    tipo é fazer  com que o grupo esteja numa taverna, então aparece  um velhinho aflito procurando
    aventureiros para resolver algum problema. Nesse caso, o surgimento do  velhinho é a primeira ação
    que exige uma reação dos  personagens. Você pode variar um pouco sobre este  tema, fazendo com que
    algo aconteça na taverna para  unir o grupo. Por exemplo, um valentão puxa briga  com um jovem
    indefeso e exige o dinheiro do coitado.  É claro que a taverna é só um clichê. Você pode  começar a
    sessão de qualquer forma que quiser. Talvez  todos os personagens estejam em um festival da
    colheita, comendo e se divertindo. Talvez estejam na corte  de um barão, respondendo a um chamado
    por aventureiros. Talvez estejam dentro de um navio, viajando a  uma ilha distante, ou perdidos numa
    encruzilhada na  estrada. O importante é que estejam no mesmo lugar  e sejam chamados à ação por
    alguma coisa. Este primeiro chamado à ação não precisa ter  a ver com a história. O importante é
    que, uma vez  que isso aconteça, ninguém pode ficar indiferente.  Depois de descrever esse
    acontecimento, muitos  mestres terminam com uma frase clássica:  “O que vocês fazem?” 244  Kellyanne
    Pontes kelly.ayame@gmail.com  O Mestre Ações dos Jogadores Os jogadores vão descrever as ações que
    querem  fazer. Cabe a você decidir e narrar o resultado. Lembre-se de insistir caso algum jogador
    esteja quieto  ou não se sinta confortável para falar. Nem sempre  todos os personagens precisam
    agir, mas no começo  é importante que todos se envolvam. Você rapidamente vai achar um meio-termo
    entre ouvir os desejos dos jogadores e descrever o  que acontece ou deixar que eles descrevam sem
    interferência. Algumas ações podem ser descritas pelo  jogador: “Eu caminho até lá”, “Eu olho pela
    janela”,  “Eu começo a rir” etc. Por outro lado, algumas ações  só podem ser decididas por você.
    Nenhum jogador  pode dizer “Eu me levanto e vou até o valentão. Ele  fica com medo e foge da
    taverna”. O jogador pode  tentar intimidar o valentão, mas vai precisar de testes  e o desenrolar da
    ação será decidido pelo mestre. Ações rotineiras (caminhar, sacar uma arma,  comprar itens no
    mercado, cavalgar sem pressa...)  não exigem testes. Ações com resultados incertos  (atacar um
    inimigo, negociar o preço de um item, arrombar uma porta, galopar por terreno difícil...)  exigem
    testes, pois têm chance de falhar. E, mais  importante, o sucesso ou a falha destas ações modifica o
    rumo da história. Se um personagem tropeça  num buraco na rua e apenas perde alguns segundos,  isso
    não tem nenhum peso na história. Assim, não é  preciso haver um teste. Contudo, se o mesmo per
    sonagem está procurando uma taverna clandestina  escondida no porto, isso exige um teste. Encontrar
    ou não a taverna é algo que muda a história. Cada jogador só pode descrever a ação do seu
    personagem. Ninguém pode decidir as ações dos  personagens dos outros. Mesmo que dois jogadores
    estejam jogando com aventureiros que tenham  uma relação hierárquica (digamos, um nobre e seu
    guarda-costas guerreiro), ninguém pode jogar com  o personagem de outra pessoa. O nobre pode dar
    uma ordem, mas se o guerreiro vai segui-la ou não  depende da decisão de seu jogador. “Eu recuo para
    o  fundo da taverna e o guerreiro avança para atacar o  valentão” não é uma ação válida. Contudo,
    “Eu recuo  para o fundo da taverna e peço para o guerreiro me  proteger do valentão” pode ser. Uma
    batalha será tão Uma batalha será tão  vibrante quanto o vibrante quanto o  mestre e os jogadores
    mestre e os jogadores  a descreverema descreverem 245  Kellyanne Pontes kelly.ayame@gmail.com
    Capítulo Seis Resultados Uma vez que uma ação seja declarada, você narra  o resultado. Pode ser algo
    simples: se o jogador disse  que vai andar até a barraca de tortas de vagem no  mercado, basta você
    dizer que ele chegou e que o  hynne vendedor oferece um pedaço de torta. Ou pode  ser algo mais
    complexo: se o jogador declarou que  vai atacar um inimigo, você pede um teste e descreve  o
    resultado com base no resultado da rolagem.  Uma das principais responsabilidades do mestre  é ser
    honesto com os dados. Tormenta20 é um  jogo em que uma história é contada em conjunto.  Você não é o
    dono da história. Assim, se o jogador  declarou uma ação que vai contra o que você imaginou, rolou o
    dado e teve sucesso, não force uma falha  apenas para manter a narrativa “nos eixos”. Da mes ma
    forma, se você estava esperando uma cena épica e  o jogador rolou um 1 natural, descreva a falha.
    Você  não sabe qual história está sendo contada até que ela  se mostre para todos, por meio da sua
    narrativa, das  ações do grupo e das rolagens. Você decide a dificuldade das rolagens com base  nos
    parâmetros da página 220. Na maior parte das  situações, se o personagem passa no teste, consegue
    fazer o que queria. Por exemplo, se o lutador diz que  quer saltar um muro, você pede a ele um teste
    de  Atletismo. Se ele passa no teste, salta o muro — sim ples assim. Porém, algumas situações,
    especialmente cenas de ação, exigem um detalhamento maior.  Nesses casos, consulte a descrição das
    perícias no  Capítulo 2 para regras aprofundadas. Tente ser consistente — se os personagens tentarem
    a mesma ação nas mesmas condições mais de  uma vez, a dificuldade deve ser a mesma. Às vezes  pode
    ser difícil lembrar da dificuldade de ações anteriores, principalmente em situações que você não
    tinha imaginado. Você achou que o grupo tentaria lutar  contra o valentão, mas a barda teve a ideia
    de fazê-lo  rir com uma piada. A jogadora rolou 15 no teste e você  descreveu a taverna toda caindo
    na risada. Mais tarde, a barda mais uma vez conta piadas, rola 17 e você diz  que ninguém ri. Você
    simplesmente não lembrava que  antes um resultado menor era suficiente para agradar  o público. Caso
    a jogadora reclame disso, você pode  admitir que se enganou e mudar o resultado da ação. De qualquer
    forma, o jogador narra sua intenção  e o mestre narra o que realmente acontece. Esta é a  dinâmica
    básica de Tormenta20. Reações Uma vez que as ações dos jogadores tenham  tido seus resultados, os
    coadjuvantes e o ambiente  reagem. Por exemplo, se o grupo se meteu contra o  valentão, a vítima
    dele pode aproveitar para fugir. O  taverneiro pode subir no balcão e gritar que não quer  confusão
    na taverna. Se alguém resolveu virar uma  mesa, os fregueses pulam das cadeiras e se afastam,
    tentando não se molhar com a cerveja derramada. Tenha em mente as coisas que você já tinha  decidido
    que iriam acontecer e mantenha o plano,  mas adapte tudo ao que os personagens fazem. Por  exemplo:
    você tinha decidido que o velhinho ia chegar  no exato momento em que os personagens se mostravam
    heroicos ao defender a vítima do valentão, então  pediria que eles resolvessem o problema dos
    kobolds.  Mas eles não parecem heróis — a barda está contando  piadas, a bárbara virou uma mesa
    cheia de canecas, o  nobre está se escondendo atrás de todos e o guerreiro  só está interessado em
    proteger seu patrão. Enquanto  isso, o taverneiro está tentando botar ordem na casa e  o valentão
    está gargalhando no chão. E agora? O velhinho pode chegar nesse instante. Mas,  em vez de se
    impressionar com o heroísmo dos  aventureiros, ele diz: “Oh, não! Eu esperava encontrar heróis, mas
    aqui só há piadistas e arruaceiros!  Será que ninguém vai aparecer para salvar nossa  vila dos
    kobolds?”. Seja honesto com as ações dos jogadores. Dei xe que eles arranjem problemas, cometam
    erros,  tenham sucessos, sofram fracassos e façam coisas  Narrando Falhas Sempre que possível, tente
    transformar as falhas dos heróis  em algo interessante. Às vezes,  a única resposta possível para
    uma falha num teste é “você  não conseguiu”. Mas você  também pode introduzir uma consequência, uma
    reação  dos NPCs ou uma dificuldade  adicional que mova a história  adiante. Por exemplo, se a
    caçadora tenta rastrear um  monstro e falha, você pode decidir  que ela na verdade encontra um
    rastro falso, que vai levar a uma  armadilha. Tome cuidado apenas para não transformar falhas em
    sucessos. Se o ladino falha ao  tentar arrombar uma fechadura,  não diga “você consegue, mas  quebra
    suas ferramentas”. O  que estava em jogo não era a  necessidade de comprar novas  ferramentas, mas a
    tentativa de  abrir a fechadura! 246  Kellyanne Pontes kelly.ayame@gmail.com  O Mestre Talvez o
    garoto que estava sendo intimidado pelo  valentão apareça. Ele seguiu o grupo escondido e viu  que
    eles derrotaram os kobolds. Ele pede desculpas  pelos outros aldeões — estão todos desconfiados de
    estranhos por causa dos ataques. Mas ele garante  que a prefeita não vai se importar com a bagunça
    na  taverna e pode oferecer uma boa recompensa se os  heróis acabarem com a ameaça kobold. Então
    começa outra cena, com outras ações e  assim por diante.inesperadas. Se a ladina quiser aproveitar
    para roubar o taverneiro, não se desespere. Deixe que ela  tente. Não era nada do que você esperava,
    mas esta  é a história que vocês estão contando em conjunto.  Você achou que seria a história de um
    grupo honrado  se voluntariando para defender uma aldeia, mas é a  história de como um bando de
    desordeiros acabou se  metendo sem querer num conflito entre kobolds e  aldeões. Também pode ser
    interessante, não? Não se perca em minúcias, nem deixe que os  jogadores se percam. Ao narrar os
    resultados, não se  prenda a coisas como as palavras exatas que foram  ditas, não tente achar
    “pegadinhas” para frustrar o  grupo. Se o nobre diz que vai recuar até o fundo da  taverna, não
    importa que ele não descreveu que esta va desviando das cadeiras. Obviamente ele faria isso.  Se a
    bárbara declara que vai virar a mesa, não diga  que toda a cerveja foi derramada sobre ela — é claro
    que ela ia virá-la para o outro lado. Deixe o fluxo das  ações e reações tão dinâmico e ágil quanto
    possível.  O clima deve ser o de uma conversa entre amigos,  não de um formulário de imposto de
    renda. Improviso A partir das ações e reações, conduza a história.  Cada conjunto de reações vai
    levar a uma nova  situação que você deve descrever. Pergunte constan temente o que os jogadores
    querem fazer. A chance de algo inesperado surgir logo no  início é muito alta. Não seguir o que você
    pensou  não é “jogar errado”. Tente achar o próximo ponto  de contato entre o que está acontecendo e
    o que você  tinha planejado. Digamos que, com toda a bagunça  na taverna, não exista o menor
    contexto para que os  aventureiros sejam contratados. Os aldeões expulsam-nos da vila, jogando
    tomates podres. Mas você  conseguiu duas coisas: unir todos na mesma situação  (expulsos, sem ter
    para onde ir) e colocá-los num  lugar onde possam encontrar a próxima situação  planejada: o ataque
    dos kobolds na estrada! Desorientados e sujos, os personagens agora  precisam se defender contra os
    saqueadores kobolds.  Eles vencem ou perdem, com base nos dados — mas  você planejou o primeiro
    combate para que eles  sejam capazes de vencer. Então eles agora têm evidências de que há kobolds
    saqueando a região (os  monstrinhos tinham em suas bolsas moedas de ouro  típicas desta região, que
    só são usadas por humanos)  e alguma pista sobre o local de onde eles vêm (um  mapa ou rastro).
    Falta uma motivação para continu ar. Você imaginava que eles seriam contratados pelos  aldeões, mas
    e agora?Improviso na Pior das Hipóteses Às vezes, os jogadores podem declarar ações  muito
    diferentes do que você esperava.  Ações que não são muito dignas de heróis.  O que fazer? Lembre os
    jogadores de seus próprios  personagens. Aventureiros heroicos não  fariam algo assim. Jogadores
    iniciantes  podem simplesmente não lembrar da  moralidade de seus personagens. Deuses  padroeiros,
    traços de personalidade e  detalhes de histórico podem ser usados para  puxar o grupo de volta para
    o tipo de história  que havia sido proposto: o Deus da Justiça  reprovaria ataques covardes, um
    cavaleiro  honrado não atacaria um velhinho, uma  bárbara que perdeu a tribo para um ataque de
    gnolls não destruiria uma aldeia sem motivo. Pode ser que os jogadores achem que o  jogo é como um
    videogame, no qual é  comum atacar personagens sem nenhuma  consequência. Lembre a eles que não é
    possível “salvar” em Tormenta20.  Se nada disso funcionar, você pode encerrar  a sessão mais cedo e
    conversar com o  grupo. Por que todos decidiram realizar  ações malignas se haviam concordado com  a
    proposta de uma campanha heroica? Por  que resolveram mudar a personalidade  de seus aventureiros? É
    possível que  esteja acontecendo algum mal-entendido  que pode ser resolvido com um pouco  de
    sinceridade. Lembre os jogadores da  proposta da campanha. Tormenta20 é um jogo sobre heróis que
    combatem o mal e tornam o mundo um  lugar melhor. Ser maligno é fácil e pouco  recompensador. O
    grupo todo vai se divertir  muito mais com personagens heroicos. 247  Kellyanne Pontes
    kelly.ayame@gmail.com  Capítulo Seis Até agora falamos em como conduzir o jogo  numa história
    coerente e usamos os termos “sessões”, “aventuras” e “campanhas”. Mas afinal, o que  é tudo isso?
    Uma “sessão” é um encontro do grupo para jo gar. Não tem duração fixa, nem relevância nas regras,
    apenas na vida real. Se vocês se encontram numa tar de por duas horas para jogar uma ou duas cenas,
    isso  é uma sessão. Se o grupo marca um jogo enorme, que  começa no início da noite e só acaba com o
    raiar do  sol, isso também é uma sessão. Alguns grupos gostam de acabar as sessões com alguma cena
    marcante  ou gancho para a próxima parte da história, mas  isso não é necessário. Comece e termine
    as sessões  quando e como ficar mais conveniente para todos. Uma “aventura” é uma história inteira.
    Alguns  grupos só jogam aventuras isoladas, levando os heróis de um incidente a outro sem nenhuma
    ligação  entre eles. Contudo, a maioria acaba encadeando  as aventuras em campanhas — já vamos falar
    mais  sobre isso. Uma aventura precisa ter começo, meio  e fim definidos. Muitos mestres tentam
    fazer com  que cada aventura dure exatamente uma sessão de  jogo, mas na maior parte dos casos isso
    é difícil,  pois os jogadores tomam decisões inesperadas e a  narrativa se estende mais do que o
    planejado. Pense  numa aventura como um episódio de uma série.  Pode ter conexão direta com os
    outros episódios ou  pode ser uma história isolada com personagens recorrentes, mas está claro para
    todos que é uma parte  da narrativa maior. Muitas vezes aventuras oferecem  algum tipo de resolução,
    vitória ou desenvolvimento  de história no final: um mistério é desvendado, um  inimigo é derrotado,
    uma descoberta importante  é feita etc. Vários mestres gostam de distribuir XP  apenas no final de
    cada aventura. Leia mais sobre  isso no Capítulo 8: Recompensas. Uma “campanha” é um conjunto de
    aventuras  contando uma mesma história. Em geral, a campanha terá o mesmo vilão ou grupo de vilões
    do início  ao fim — como nas boas narrativas épicas, o vilão  começa muito mais poderoso que os
    heróis, que só  conseguem enfrentar seus capangas... Mas então os  protagonistas ficam mais
    poderosos e o derrotam no  final. A campanha também deve ter um “tema” geral  e uma pergunta ou
    questionamento que é proposto no início e resolvido no fim. No nosso exemplo anterior, o tema era a
    guerra dos dragões controlados  pelo mago maligno e o questionamento era se ele iria  triunfar ou se
    seria vencido. Se uma aventura é um  episódio de uma série, a campanha é a série inteira.  Embora os
    mesmos personagens possam jogar mais  de uma campanha, em geral os grupos aposentam  seus heróis
    após o fim de uma, começando com per sonagens novos na próxima. Alguns mestres não se  preocupam
    muito com aventuras fechadas, concen trando-se só na narrativa maior, tecida naturalmente  ao longo
    da campanha. Idealmente, cada sessão deve contribuir pelo menos um pouco para a história que vocês
    estão criando  juntos, mesmo que seja só um combate emocionante  ou uma piada memorável. De qualquer
    forma, ao  se preparar para mestrar, tente pensar em todos os  níveis da narrativa: o grande épico
    que está tomando  forma (a campanha), a história sendo contada no  momento (a aventura) e os eventos
    que vão acon tecer agora (a sessão). Quanto mais imediato, mais  você precisa estar pronto. Quanto
    mais longínquo e  amplo, mais vago e incerto pode ser. Estruturando  uma Aventura Você pode ter uma
    ótima ideia para uma aventura, pensar em desafios e situações interessantes...  Mas não conseguir
    colocar isso em prática. Não há  problema. Montar uma aventura, assim como planejar qualquer
    história, é uma técnica, não algo que  depende de talento especial ou inspiração. A seguir  está uma
    explicação sobre como estruturar aventuras  boas tanto para iniciantes quanto para veteranos.  Fase
    1: Normalidade Introduza os jogadores a uma situação normal,  que não exige ação imediata e que não
    oferece  perigo de qualquer tipo. Pode ser qualquer coisa:  talvez o grupo ainda não se conheça e
    todos estejam por acaso na mesma taverna, ouvindo um  bardo desafinado. Talvez eles já sejam um
    grupo  estabelecido e estão viajando por uma floresta. Talvez estejam numa mesa de banquete ou numa
    cela  Sessões, aventuras e campanhas 248  Kellyanne Pontes kelly.ayame@gmail.com  O Mestre de
    prisão. O objetivo aqui é deixar os jogadores  à vontade. Eles podem fazer basicamente o que
    quiserem por alguns minutos (incluindo não fazer  nada) e não haverá grandes consequências. Esta
    fase também serve para mostrar ao grupo como é  o cotidiano normal que eles estão vivendo, para
    depois contrastar com a ação da história principal.  Tome cuidado para não forçar os personagens a
    situações que só são boas ou interessantes para  você — se o grupo começa numa cela de prisão,  eles
    devem ter sido presos na aventura anterior, a  menos que esta seja a primeira aventura. Fase 2:
    Motivação Algo acontece para tirar o grupo da situação nor mal e jogá-lo à ação. A motivação mais
    clássica é uma  combinação de altruísmo e lucro: um velhinho chega  na taverna pedindo por
    aventureiros para resolver um  perigo que assola a região. Em troca, os aventureiros  serão pagos.
    Contudo, pode ser apenas autopreservação (um garoto avista um batalhão de hobgoblins se
    aproximando), necessidade (uma grande tempestade  começa e o único abrigo é um castelo próximo) ou
    algo totalmente fora do controle dos heróis (eles são  teletransportados e surgem num lugar
    estranho). O importante aqui é que haja um objetivo claro (por  exemplo, acabar com os gnolls que
    assolam a aldeia)  e que os jogadores tenham razões suficientes para  agir. Nesta fase, é útil
    oferecer um curso de ação bem  claro e óbvio. O velhinho não só pede para que os  aventureiros
    enfrentem os gnolls, mas também sabe  onde eles costumam se reunir. Fase 3: Vitória Parcial O grupo
    parte para a ação e encontra o primeiro  desafio. Pode ser um combate contra capangas da  ameaça
    principal ou contra uma parte da ameaça  principal. O mais importante é que a aventura deixa  de ser
    sobre o que vai acontecer e passa a ser sobre o  que está acontecendo. Planeje esta fase de forma
    que  os heróis tenham uma vitória nítida, mas não total.  Assim, eles vão perceber que têm
    capacidade para  resolver o problema principal e terão chance de apro veitar as habilidades de seus
    personagens. Caso esta  fase não envolva combate, tenha certeza de que as  interações acabam
    favoráveis ao grupo, as pistas são  descobertas, os itens são encontrados etc. Ou seja, os  heróis
    vencem. É claro que você não deve trapacear  em favor dos jogadores: se eles tiverem muito azar  ou
    ideias muito ruins, podem fracassar aqui. Ninguém se Ninguém se  arriscará no arriscará no
    Labirinto de Labirinto de  Tapista sem um Tapista sem um  bom motivobom motivo 249  Kellyanne Pontes
    kelly.ayame@gmail.com  Capítulo Seis Fase 4: Informações e Desenvolvimento A grande recompensa da
    fase anterior é a desco berta de um curso de ação para resolver o problema  principal. Isso pode ser
    uma informação sobre onde  está a ameaça a ser combatida (os gnolls tinham um  mapa de sua tribo).
    Também pode ser um acontecimento: talvez, quando os heróis estavam enfrentando  estes gnolls, um
    outro bando atacou a aldeia e sequestrou o clérigo, gritando o nome de um deus maligno.  Agora o
    grupo sabe que eles são cultistas do tal deus.  Use aqui cenas de interpretação e de exploração
    (veja  mais sobre isso neste capítulo) para que os jogadores  cheguem à conclusão sobre o que fazer
    a seguir. Fase 5: Derrota Parcial Uma narrativa linear rumo ao sucesso sem  nenhum revés seria
    chata. Assim, planeje o próximo encontro para que os personagens sofram uma  derrota, sejam
    obrigados a fugir ou simplesmente  notem como a ameaça é mais complicada do que  eles imaginavam.
    Pode ser apenas um combate  mais difícil: eles achavam que bastaria chegar na  tribo e surrar todos
    os gnolls, mas havia muitas das  criaturas. Pode ser um fracasso de outro tipo (eles  chegam tarde
    demais e o clérigo já foi sacrificado) ou  até uma traição (eles veem o clérigo dando ordens  aos
    gnolls!). O objetivo aqui é assustar, frustrar,  surpreender ou irritar os heróis. Veja bem: os
    heróis,  não os jogadores! Eles começam a ter uma motivação  pessoal para continuar na aventura.
    Também deve  ficar claro que é preciso pensar e traçar estratégias  para resolver o problema. Não se
    desespere se a sorte  ou as boas ideias dos jogadores causarem uma vitória  inesperada aqui. Apenas
    garanta que os vilões não  foram totalmente derrotados. Fase 6:  Condições para a Vitória Esta é uma
    versão mais definitiva da fase 4. Os per sonagens descobriram que não podem simplesmente  correr até
    o problema e resolvê-lo automaticamente,  então o que fazer? Talvez eles investiguem, talvez explo
    rem a região, talvez conversem com coadjuvantes que  apareceram anteriormente... Tudo depende do que
    você  planejou e das decisões dos jogadores. O importante é  que eles descobrem uma forma de vencer
    de uma vez  por todas. Talvez, explorando a floresta, eles achem  um velho xamã gnoll que foi
    expulso da tribo. Então,  conversando com o monstro renegado, descobrem  que o líder dos gnolls tem
    medo de cobras. Agora eles  podem traçar uma estratégia: se jogarem cobras sobre o  líder, ele vai
    fugir apavorado e o resto da tribo vai ficar Tipos de Jogadores Jogadores de Tormenta20 são pessoas
    e,  assim, classificá-los em “tipos” é reduzi-los  a estereótipos. Contudo, como mestre, você  pode
    tentar entender os jogadores mais  típicos pelas suas preferências e tornar o  jogo mais divertido
    para eles. • Jogadores Teatrais. Gostam mais  da história e interpretação. Para eles,  profundidade
    dramática e viradas de trama  valem mais que desafios ou precisão de  regras. Debates acalorados,
    confissões de  amor e revelação de segredos são mais  emocionantes que batalhas. Se você ouvir
    alguém descrevendo combates como  “um monte de rolagens e regras chatas”,  provavelmente está
    falando com um jogador  teatral. Para agradar um jogador teatral,  insira momentos emotivos mesmo em
    cenas  de ação. Os inimigos não precisam ser só  monstros genéricos, podem ser rivais que
    discursam, juram vingança e declaram seu  ódio durante a batalha. Deixe o jogador  teatral livre
    para conversar com NPCs e  explorar locais de interesse, mas não permita  que ele domine o jogo com
    monólogos ou  interações sem propósito com cada aldeão.  Se o jogador fizer questão de saber o tipo
    de  chá preferido do guarda que por acaso estava  passando, peça para ele inventar detalhes  sobre
    esse figurante entre uma sessão e  outra, depois mostrando suas ideias para o  grupo. Seu trabalho
    vai até ficar mais fácil. • Jogadores Estratégicos. Gostam  mais das regras, otimização de
    personagens  e combate. Para eles, o mundo do jogo não  parece real se não há regulamentos consis
    tentes que descrevam os acontecimentos.  Uma virada de trama ou momento dramáti co que só acontece
    porque o mestre decidiu,  quebrando as regras, é artificial e menos  emocionante. Da mesma forma,
    heróis  que não são eficientes em regras parecem  falsos, porque nunca estariam à altura de
    desafios reais. Para agradar um jogador  estratégico, insira dificuldade real no jogo  e cobre
    precisão nas fichas. Não “roube”,  mesmo que isso vá criar uma boa história;  deixe que a história
    se revele naturalmente  a partir das rolagens e decisões. (Continua...) 250  Kellyanne Pontes
    kelly.ayame@gmail.com  O Mestre desorganizada, sendo muito mais vulnerável. Ou então  eles falam com
    os aldeões e a garotinha tímida que  só ficava olhando de longe revela que o clérigo ficou  furioso
    quando ela bisbilhotou atrás do altar na igreja.  Vasculhando o lugar, encontram um antigo amuleto
    escondido num compartimento secreto. Um pouco de  pesquisa nos tomos do templo revela que este é um
    amuleto que anula os poderes dos cultistas do deus  maligno. Nesta fase também pode haver preparação
    para o confronto final: os heróis se equipam, montam  armadilhas, conseguem aliados... Fase 7:
    Vitória Total Armados com as informações, estratégias,  aliados ou equipamentos que foram obtidos na
    fase anterior, os aventureiros atacam a ameaça,  desta vez com condições de vencer. É o clímax da
    aventura, o maior confronto, no qual heróis e vilões  podem morrer. Valorize as táticas dos
    jogadores, mas  não tenha medo de fazer com que os vilões sejam  perigosos. O triunfo deve ser
    suado! Também deixe  claro que a preparação anterior foi crucial: eles não  conquistaram um pequeno
    bônus, mas a diferença  entre vitória e derrota. Mais uma vez, se falta de  planejamento ou azar
    causarem uma derrota aqui,  não há problema. Você já está no fim da aventura e  terá até a próxima
    para pensar em como lidar com  esse desenvolvimento inesperado. A graça de jogar  Tormenta20 está na
    imprevisibilidade! Fase 8: Resolução, Recompensas e Ganchos Uma vez que os heróis tenham vencido,
    tudo  volta ao normal. Esta fase é parecida com a fase 1. Os  personagens devem ter mudado um pouco
    ao longo  da aventura, mesmo que só em termos de poderes e  equipamento. Eles recebem gratidão das
    pessoas que  salvaram ou são recompensados com a verdade quando alguém se revela um traidor. Também
    recebem  pagamento! Mantenha esta fase curta; se ela se arrastar, pode prejudicar o clímax anterior.
    Se você planeja  continuar a aventura numa campanha, aqui é um bom  momento para inserir um gancho.
    Quando os aldeões  estão festejando a vitória dos aventureiros, a garotinha tímida fala em voz
    gutural, seus olhos brilhando  como brasas. Ela diz que os heróis pagarão por sua  interferência.
    Então pisca e volta a falar normalmente,  não entendendo por que todos estão olhando para ela.
    Nesse instante, um mensageiro chega esbaforido, com  a notícia de que a cidade próxima está sob
    ataque de  gnolls e o rei está chamando aventureiros. Não precisa  ser um gancho tão direto — pode
    ser simplesmente  alguém dizendo que ainda há outros problemas a  serem resolvidos na região...Tipos
    de Jogadores  (Continuação) Contudo, não permita que o jogador  estratégico transforme o jogo numa
    corrida  armamentista, otimizando seu personagem  até tornar os outros irrelevantes. Exija  que
    quaisquer elementos de regras façam  sentido na história e, se mesmo assim  ele estiver poderoso
    demais, crie alguma  maldição ou dificuldade extra para seu  personagem. Sem roubar, mas
    desafiando-o  ao nível que ele pode responder. Não deixe  que este jogador questione suas decisões,
    mas peça para que ele seja um consultor de  regras para você mesmo e para o resto do  grupo,
    ajudando todos a atingir a exatidão  de que ele gosta. • Jogadores Sociais. Gostam mais  da
    interação com as pessoas do grupo.  Mesmo que a história e as regras não sejam  as melhores, eles
    estão felizes por passar  tempo com seus amigos. Para eles, de nada  vale criar algo extraordinário
    se não há  diversão no mundo real. Uma boa risada  é mais importante que uma boa rolagem,  uma
    conversa com alguém do mundo real  vale mais que uma audiência com a RainhaImperatriz. Para agradar
    este tipo de jogador,  torne o clima do jogo leve e incentive a  participação de todos. Seu objetivo
    não é  ser um tirano que decide como os outros  devem se divertir, mas um participante numa
    atividade em grupo. Um comentário fora  do personagem não é um pecado mortal e  uma piada não é um
    insulto. Peça e incentive  momentos de imersão sem distrações, como  cenas dramáticas, combates
    aguerridos e  enigmas, mas não cobre esta intensidade  o tempo todo. Também não deixe que o  jogador
    social transforme a sessão numa  mesa de bar. Peça para que ele o ajude a  reunir o grupo antes ou
    depois do jogo, para  que haja uma boa convivência sem sacrificar  a campanha. A maior parte dos
    jogadores é um misto dos  três tipos, tendendo um pouco mais para  um deles. Todos os tipos podem
    coexistir  em um grupo. Na verdade, um misto de  todos eles, cada um colaborando com sua
    especialidade, provavelmente é um grupo  de RPG “ideal”. 251  Kellyanne Pontes kelly.ayame@gmail.com
    Capítulo Seis sessões) terá mais ou menos nove cenas. Nada disso  está escrito em pedra ou é
    obrigatório, mas pode  ajudá-lo a planejar seu jogo. Embora uma cena possa  ser qualquer coisa que
    você imagine, a maioria pode  ser classificada em três tipos: cenas de ação, cenas de  exploração e
    cenas de interpretação. Uma boa aventura deve ter um misto dos três  tipos, mas muitos grupos
    priorizam um (especial mente ação e interpretação). Se você estiver mes trando para um grupo sem
    preferências especiais,  faça um equilíbrio dos tipos. Caso seu grupo tenha  preferência especial
    por um dos três tipos, faça com  que o escolhido ocupe metade das cenas e os outros  dois dividam a
    outra metade. Cenas de Ação Têm como objetivo conquistar algo fisicamente.  Em geral, cenas de ação
    são combates — nada mais  simples que vencer os inimigos por meio da força das  armas. Contudo,
    também podem ser perseguições,  armadilhas etc. O fundamental de uma cena de ação  é que tudo
    acontece rápido. O jogo é dividido em  rodadas, com cada personagem tendo sua vez de agir  (seu
    turno). Descreva imagens passando sem que  os heróis consigam ver exatamente o que são, sons  altos,
    acontecimentos súbitos e surpresas o tempo  todo. A vida dos aventureiros estará em risco em  quase
    todas as cenas de ação. Embora seja possível  interpretar durante uma cena de ação, elas tendem  a
    priorizar as mecânicas. Afinal, uma rolagem pode  ser a diferença entre a vida e a morte! Por isso,
    um  excesso de cenas de ação pode levar a um jogo com  personagens vazios, sem personalidade.
    Contudo, a  falta de cenas de ação leva a uma história parada e  segura demais, sem riscos.Cenas
    Você não precisa medir o tempo de forma exata  em Tormenta20, exceto em algumas cenas de  ação,
    quando o tempo é medido em rodadas (veja  a seguir). Na maior parte dos outros momentos,  não há
    necessidade de saber se transcorreram  quinze minutos ou meia hora, ou mesmo uma ou  seis horas. O
    tempo narrativo de uma aventura de  Tormenta20 é medido em “cenas”. Uma cena não é uma unidade de
    tempo fixa,  mas um pedaço distinto da história. Um combate é  uma cena. Uma discussão noite adentro
    na corte da  Rainha-Imperatriz é uma cena. Uma perseguição de  poucos minutos nas ruelas de Vectora
    é uma cena.  O mestre decide quando uma cena começa e termina. Em geral, uma cena começa quando um
    novo  lugar ou situação é introduzido e termina quando  os personagens saem deste lugar ou chegam a
    uma  resolução para a situação. Uma cena pode ser inter rompida para dar lugar a outra cena sem que
    nada  disso aconteça. Por exemplo, se os personagens  estão discutindo na corte e de repente são
    atacados,  a cena da discussão acaba e uma nova cena começa  — um combate. Cenas são conceitos
    importantes em termos de  jogo — muitos poderes dos personagens funcionam  durante uma cena, por
    exemplo. Assim, o mestre tem  bastante controle sobre quantas vezes um jogador  pode usar
    determinado poder durante o jogo. Contudo, aqui não vamos falar de regras. Vamos discutir  cenas
    como ferramentas para montar sua aventura. Uma sessão típica de Tormenta20 tem em tor no de três
    cenas. Assim, uma aventura mediana (três  Tipos de  Cenas e Estrutura O exemplo de estrutura é
    equilibrado em termos de tipos  de cenas. A fase 1 é uma cena de  interpretação, assim como a fase
    2. A fase 3 é uma cena de ação. A  fase 4 é uma cena de exploração.  A fase 5 é mais uma cena de
    ação. A fase 6 é uma cena de  exploração ou de interpretação,  de acordo com a vontade dos
    jogadores e o planejamento do  mestre. A fase 7 é a maior cena de ação da aventura e a fase 8 é  uma
    cena de interpretação. Se a aventura for jogada  ao longo de três sessões, a  primeira terá duas
    cenas de  interpretação (boas para situar  os jogadores) e uma de ação  (boa para deixá-los ansiosos
    pela  continuação). A segunda terá  uma cena de exploração e uma  de ação — pela primeira vez os
    personagens serão desafiados  intelectualmente e descobrirão  que cenas de ação são perigosas.  Em
    termos de estrutura de história, é o “ponto baixo” dos  heróis. Por fim, a terceira sessão  terá uma
    cena de exploração  ou interpretação (escolha do  grupo), uma grande cena de ação  e uma cena de
    interpretação  tranquila, para arrematar. Se  tudo der certo, será possível  notar a diferença
    (mesmo que  sutil) nas personalidades dos  heróis entre a primeira cena da  primeira sessão e a
    última cena  da última sessão, deixando claro  aos jogadores tudo pelo que seus  personagens
    passaram. 252  Kellyanne Pontes kelly.ayame@gmail.com  O Mestre 253Cenas de Exploração Têm como
    objetivo conquistar algo intelectualmente, por meio de interação com  coisas, não pessoas. A cena de
    exploração  mais óbvia é a busca por pistas numa cena  de crime ou a solução de um enigma, mas  pode
    ser o grupo desbravando uma floresta,  um deserto ou outro lugar ermo. Pode ser  que não haja nenhum
    desafio: andando pela  floresta, os aventureiros descobrem seus mistérios e o mestre descreve o que
    eles veem.  Contudo, também pode haver dificuldades:  os heróis vasculham as prateleiras de uma
    biblioteca ancestral, procurando e decifrando  tomos antigos que contêm segredos arcanos.  Embora
    regras possam ser importantes (por  exemplo, com testes para decifrar os livros),  as ideias dos
    próprios jogadores são fundamentais aqui. Muitas cenas de exploração são  resolvidas quando alguém
    na vida real pensa  em examinar algum lugar, entende uma pista  deixada pelo mestre ou mata uma
    charada.  Um excesso de cenas de exploração pode levar  a uma aventura dominada por descrições do
    mestre, em que os jogadores agem pouco.  Contudo, falta de exploração leva a aventuras  sem
    maravilhas e descobertas, em ambientes  conhecidos e previsíveis. Cenas de Interpretação Têm como
    objetivo conquistar algo emo cionalmente, por meio de diálogo e interação  com outros personagens.
    Cenas de interpretação nem sempre precisam de um objetivo,  embora as melhores avancem a história de
    alguma forma. Podem simplesmente ser um  exercício da personalidade dos personagens  e da atuação
    dos jogadores. Elas envolvem  mais conversa e emoções reais. Muitas vezes a  linha divisória entre
    personagens e jogadores  se mistura. Contudo, quando há algo em  jogo, o mestre deve exigir testes e
    mediar  os resultados com regras. Excesso de cenas  de interpretação pode levar a uma aventura
    arrastada e perdida em minúcias — ninguém  precisa interpretar uma conversa casual com  um livreiro,
    quando decide nem mesmo  comprar um livro. Contudo, falta de cenas  de interpretação faz com que os
    personagens  sejam só amontoados de números. Sem inter pretação, nenhuma das outras tem sentido.
    Nem mesmo a morte de um personagem  importa, pois basta fazer outro.Nem tudo é perigo Nem tudo é
    perigo  ou peleja; aventureiros ou peleja; aventureiros  podem conversar!podem conversar! 253
    Kellyanne Pontes kelly.ayame@gmail.com  Capítulo Seis Estruturando  uma Campanha Se você já planejou
    uma aventura ou várias, já  conhece os heróis e já tem um elenco de coadju vantes, resta planejar a
    campanha em si. Qualquer  planejamento de campanha é obrigatoriamente vago  e sujeito a mudanças
    drásticas, pois os jogadores  podem (e devem!) tomar decisões inesperadas que  bagunçam tudo. Além
    disso, os dados são sempre  imprevisíveis. Contudo, você pode usar este modelo  para ter uma ideia
    geral de como visualizar uma  campanha do início ao fim e como conduzi-la. Pode haver campanhas de
    três aventuras ou de  duzentas. Contudo, vamos ser realistas. Se cada aventura demora em média três
    sessões para ser terminada, não adianta pensar em centenas de aventuras, pois  dificilmente haverá
    tempo para tudo isso — se houver,  você é muito sortudo, tem uma incrível capacidade de
    planejamento e um excelente grupo de amigos. Vamos  imaginar uma campanha com 20 aventuras — uma
    para cada nível de personagem. Com três sessões por  aventura, isso dá uma média de 60 sessões. Como
    um  ano tem 52 semanas, se o grupo tentar se reunir toda  semana, considerando compromissos, viagens
    e períodos em que não se pode jogar, a campanha durará  cerca de dois anos. Um jogo épico, mas
    dentro de um  período de tempo razoavelmente previsível. Aventura 1: Introdução Comece com uma
    aventura básica. Os personagens se conhecem e lidam com uma ameaça local.  Formam um grupo e têm sua
    primeira vitória. A  ameaça é ligada à trama principal, mas está a pelo  menos três graus de
    distância do grande vilão. Por  exemplo, os heróis enfrentam salteadores que trabalham para uma
    guilda que tenta desestabilizar o  comércio na região para que um nobre maligno que  trabalha para o
    vilão tome o poder. Este nobre será  o “vilão intermediário”, que vai surgir no meio da  campanha. A
    aventura acaba com uma ligação com a  trama principal — uma tatuagem em um dos saltea dores, uma
    carta enigmática etc. No final também há  um gancho imediato para a próxima aventura. Aventura 2:
    Tudo Fica Maior Seguindo o gancho da primeira aventura, os  heróis realizam uma missão parecida, mas
    em escala  maior. Por exemplo, em vez de enfrentar salteadores  para defender uma aldeia, enfrentam
    mercenários  para defender um barão. Acaba com a informação de  um ataque, perigo ou ameaça maior
    que acontecerá  imediatamente — na próxima aventura.Aventura 3: Primeiro Chefe Os heróis enfrentam a
    ameaça que foi descoberta  no final da aventura anterior. Esta é uma aventura  de ação ininterrupta,
    em que o grupo frustra um  grande plano. Aqui o chefe dos primeiros inimigos  é vencido e há a
    sensação de um ciclo se fechando.  Mas, no final, os heróis descobrem para quem os  inimigos destas
    três aventuras trabalhavam: o vilão  intermediário (no exemplo, o nobre que quer tomar  o controle
    do reino). Por fim, há a primeira aparição  de algum coadjuvante poderoso: indeciso misterioso,
    mentor palpiteiro ou outro. Aventura 4:  Monstro da Semana Os heróis precisam fazer algo para entrar
    na  luta contra o grande vilão (por exemplo, levar as  evidências a um alto nobre). Mas isso não
    acontece  imediatamente. No caminho, eles se deparam com  uma ameaça localizada e lidam com ela.
    Fica claro  que não tem relação com a mitologia. Aventura 5:  Conquistando Confiança Para se inserir
    na luta contra o grande vilão, os  heróis precisam fazer algo para se provar. Talvez  cumpram uma
    missão e demonstrem seu poder, talvez apenas precisem conseguir uma audiência com  um nobre. De
    qualquer forma, esta aventura deve  parecer um incômodo, um desvio desnecessário.  Uma vez cumprida
    a missão, parece que tudo vai  ficar bem, mas a cena de vitória é interrompida. Aventura 6:  nadando
    Entre os Tubarões O grande vilão interrompe tudo que os personagens estavam fazendo. Talvez ele
    apareça em pessoa,  talvez mande um subalterno poderoso. O capanga  recorrente está junto. De
    qualquer forma, algo muito  grave acontece (o castelo onde os heróis estavam é  destruído, o nobre
    morre etc.) e há o primeiro confronto entre heróis e vilões poderosos. Os heróis só  não morrem
    porque são salvos por uma figura poderosa do bem. Esta aventura é um ponto baixo para os
    personagens e pode ser mais curta que as outras. Aventura 7: Contexto Aventura calma, quase só cenas
    de interpretação.  Os heróis estão na presença de grandes forças do  bem. Esses figurões dizem que
    eles não deveriam  estar ali, que quase foram mortos. Mas, agora que  estão envolvidos, não adianta
    tentar tapar o sol  com a peneira. Os figurões explicam tudo que está  acontecendo aos personagens.
    Como alternativa,  254  Kellyanne Pontes kelly.ayame@gmail.com
  dano_ou_cura:
    formulas: ["1d10", "1d20", "1d4", "1d6", "1d8", "1d8+3", "2d10", "3d6", "4d6"]
  cd: "ver regras gerais (CD = 10 + círculo + modificadores)"
aprimoramentos_pm:
  - custo: 5
    efeito: "muda o alvo para área: esfera com 6m de raio centrada em você  e a resistência para Fortitude reduz  à metade. Em vez do normal, você  suga energia das criaturas vivas na  área, causando 1d10 pontos de dano  de trevas e recebendo PV temporários  iguais ao dano total causado. Os PV  temporários desaparecem ao final da  cena. Requer 2º círculo. Voo Arcana 3 (Transmutação) Execução: padrão; Alcance: pessoal;  Alvo: você; Duração: cena.  Você recebe deslocamento de voo 12m.  Voar por meio desta magia é simples  como andar — você pode atacar e lançar magias normalmente enquanto  voa. Quando a magia termina, você  desce lentamente até o chão, como se  estivesse sob efeito de Queda Suave"
  - custo: 1
    efeito: "muda o alcance para toque e o  alvo para 1 criatura"
  - custo: 4
    efeito: "muda a duração para um dia.  Requer 4º círculo"
  - custo: 4
    efeito: "muda o alcance para curto e  o alvo para até 10 criaturas. Requer 4°  círculo. Voz Divina Divina 2 (Adivinhação) Execução: padrão; Alcance: pessoal;  Alvo: você; Duração: cena.  Você pode conversar com criaturas de  qualquer raça e tipo: animal, constru to, espírito, humanoide, monstro ou  morto-vivo. Pode fazer perguntas e entende suas respostas, mesmo sem um  idioma em comum ou se a criatura não  for capaz de falar, mas respeitando os  limites da Inteligência dela. A atitude  dessas criaturas não é alterada, mas  você pode usar a perícia Diplomacia  para tentar mudar sua atitude"
  - custo: 1
    efeito: "você concede um pouco de  vida a um cadáver, suficiente para  que ele responda a suas perguntas.  O conhecimento do corpo é limitado ao que ele tinha enquanto vivo e  suas respostas são curtas e enigmáticas. Um corpo só pode ser alvo desta  magia uma vez. Ela também não funciona em um corpo cuja cabeça tenha  sido destruída"
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