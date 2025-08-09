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
  descricao_resumida: "Você purifica e abençoa uma porção de comida ou dose de bebida."
  efeito_detalhado: |
    Você purifica e abençoa uma porção de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado próprio para consumo. Além disso, se for consumido até o final da duração, o alimento oferece 5 PV temporários ou 1 PM temporário (além de quaisquer bônus que já oferecesse). Bônus de alimentação duram um dia e cada personagem só pode receber um bônus de alimentação por dia. Truque: o alimento é purificado (não causa nenhum efeito nocivo se estava estragado ou envenenado), mas não fornece bônus ao ser consumido. +1 PM: aumenta o número de alvos em +1. +1 PM: muda a duração para permanente, o alvo para 1 frasco com água e adiciona componente material (pó de prata no valor de T$ 5). Em vez do nor mal, cria um frasco de água benta.
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
  descricao_resumida: "tência: Vontade anula."
  efeito_detalhado: |
    tência: Vontade anula. O animal fica prestativo em relação a você. Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível. Você recebe +10 nos testes de Adestramento e Diplomacia que fizer contra o animal. Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é dissipada e ele retorna à atitude que tinha antes (ou piorada, de acordo com o mestre). Se tratar bem o alvo, a atitude pode permanecer mesmo após o término da magia. +1 PM: muda o alcance para médio. +1 PM: muda o alvo para 1 monstro ou espírito com Inteligência –5 ou –4. Descrição das magias +2 PM: aumenta o número de alvos em +1. +5 PM: muda o alvo para 1 monstro ou espírito. Requer 3º círculo.
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
  descricao_resumida: "nea; Resistência: Vontade parcial."
  efeito_detalhado: |
    nea; Resistência: Vontade parcial. Você manifesta e dispara uma adaga imaterial contra a mente do alvo, que sofre 2d6 pontos de dano psíquico e fica atordoado por uma rodada. Se passar no teste de resistência, sofre apenas metade do dano e evita a condição. Uma criatura só pode ficar atordoada por esta magia uma vez por cena. +1 PM: você lança a magia sem gesticular ou pronunciar palavras (o que per mite lançar esta magia de armadura) e a adaga se torna invisível. Se o alvo falhar no teste de resistência, não percebe que você lançou uma magia contra ele. +2 PM: muda a duração para um dia. Além do normal, você “finca” a adaga na mente do alvo. Enquanto a magia durar, você sabe a direção e localização do alvo, desde que ele esteja no mes mo mundo. +2 PM: aumenta o dano em +1d6.
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
  descricao_resumida: "Você cria uma barreira protetora invisível que detecta qualquer criatura que tocar ou entrar na área protegida."
  efeito_detalhado: |
    Você cria uma barreira protetora invisível que detecta qualquer criatura que tocar ou entrar na área protegida. Ao lançar a magia, você pode escolher quais criaturas podem entrar na área sem ativar seus efeitos. Alarme pode emitir um aviso telepático ou sono ro, decidido quando a magia é lançada. Um aviso telepático alerta apenas você, inclusive acordando-o se estiver dormindo, mas apenas se estiver a até 1km da área protegida. Um aviso so noro alerta todas as criaturas em alcance longo. +2 PM: muda o alcance para pessoal. A área é emanada a partir de você. +5 PM: além do normal, você também percebe qualquer efeito de adivinhação que seja usado dentro da área ou atravesse a área. Você pode fazer um tes te oposto de Misticismo contra quem usou o efeito; se passar, tem um vislumbre de seu rosto e uma ideia apro ximada de sua localização (“três dias de viagem ao norte”, por exemplo). +9 PM: muda a duração para um dia ou até ser descarregada e a resistência para Vontade anula. Quando um intruso entra na área, você pode descarregar a magia. Se o intruso falhar na resistência, ficará paralisado por 1d4 ro dadas. Além disso, pelas próximas 24 horas você e as criaturas escolhidas ganham +10 em testes de Sobrevivência para rastrear o intruso.
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
  descricao_resumida: "Execução: padrão; Alcance: curto; Alvo: 1 animal ou humanoide; Duração: cena; Resistência: Vontade parcial."
  efeito_detalhado: |
    Execução: padrão; Alcance: curto; Alvo: 1 animal ou humanoide; Duração: cena; Resistência: Vontade parcial. O alvo é envolvido por energias sombrias e assustadoras. Se falhar na resistência, fica apavorado por 1 rodada, depois abalado. Se passar, fica abalado por 1d4 rodadas. +2 PM: alvos que falhem na resistência ficam apavorados por 1d4+1 rodadas, em vez de apenas 1. +2 PM: muda o alvo para 1 criatura. +5 PM: afeta todos os alvos válidos a
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
  descricao_resumida: "Reflexos (veja texto)."
  efeito_detalhado: |
    Reflexos (veja texto). Esta magia recobre uma superfície com uma substância gordurosa e escorrega dia. Criaturas na área devem passar na resistência para não cair. Nas rodadas seguintes, criaturas que tentem movimentar-se pela área devem fazer testes de Acrobacia para equilíbrio (CD 10). Área Escorregadia pode tornar um item escorregadio. Uma criatura segurando um objeto afetado deve passar na resistência para não deixar o item cair cada vez que usá-lo. +1 PM: aumenta a área em +1 quadrado de 1,5m. +2 PM: muda a CD dos testes de Acrobacia para 15. +5 PM: muda a CD dos testes de Acro bacia para 20.
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
  descricao_resumida: "Você invoca a arma preferida de sua divindade (caso sua divindade possua uma), que surge flutuando a seu lado."
  efeito_detalhado: |
    Você invoca a arma preferida de sua divindade (caso sua divindade possua uma), que surge flutuando a seu lado. Uma vez por rodada, quando você so fre um ataque corpo a corpo, pode usar uma reação para que a arma cause automaticamente 2d6 pontos de dano do tipo da arma — por exemplo, uma espada longa causa dano de corte — no oponente que fez o ataque. Esta magia se dissipa se você morrer. +1 PM: além do normal, a arma o pro tege. Você recebe +1 na Defesa. 180 Kellyanne Pontes kelly.ayame@gmail.com
    
    Magia +2 PM: aumenta o bônus na Defesa em +1. +2 PM: muda a duração para susten tada. Além do normal, uma vez por ro dada, você pode gastar uma ação livre para fazer a arma acertar automatica mente um alvo adjacente. Se a arma atacar, não poderá contra-atacar até seu próximo turno. Requer 2º círculo. +2 PM: muda o tipo do dano para essência. Requer 2º círculo. +2 PM: aumenta o dano causado pela arma em +1d6 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar). +5 PM: invoca duas armas, permitin do que você contra-ataque (ou ataque, se usar o aprimoramento acima) duas vezes por rodada. Requer 3º círculo.
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
  descricao_resumida: "Esta magia cria uma película proteto ra invisível, mas tangível, fornecendo +5 na Defesa."
  efeito_detalhado: |
    Esta magia cria uma película proteto ra invisível, mas tangível, fornecendo +5 na Defesa. Esse bônus é cumula tivo com outras magias, mas não com bônus fornecido por armaduras. +1 PM: muda a execução para reação. Em vez do normal, quando sofre um ataque, você cria um escudo mágico que fornece +5 na Defesa contra esse ataque (cumulativo com o bônus do efeito básico desta magia e de armaduras). +2 PM: aumenta o bônus na Defesa em +1. +2 PM: muda a duração para um dia.Armamento da Natureza Divina 1 (Transmutação) Execução: padrão; Alcance: toque; Alvo: 1 arma (veja texto); Duração: cena. Você fortalece uma arma mundana primitiva (sem custo em T$, como bor dão, clava, funda ou tacape), uma arma natural ou um ataque desarmado. O dano da arma aumenta em um passo e ela é considerada mágica. Ao lançar a magia, você pode mudar o tipo de dano da arma (escolhendo entre corte, impacto ou perfuração). +1 PM: fornece +1 nos testes de ataque com a arma. +2 PM: muda a execução para ação de movimento. +3 PM: aumenta o bônus nos testes de ataque em +1. +5 PM: aumenta o dano da arma em mais um passo.
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
  descricao_resumida: "Você invoca espíritos da natureza, pedindo que eles abram seu caminho."
  efeito_detalhado: |
    Você invoca espíritos da natureza, pedindo que eles abram seu caminho. As criaturas afetadas recebem deslocamento +3m e ignoram penalidades por ter reno difícil em terrenos naturais. Truque: muda o alcance para pessoal e o alvo para você. Em vez do normal, você recebe +5 em testes de Sobrevivência para se orientar. +1 PM: além do normal, a CD para rastrear os alvos em terreno natural aumenta em +10. +2 PM: aumenta o bônus de desloca mento em +3m.
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
  descricao_resumida: "da; Resistência: Vontade anula."
  efeito_detalhado: |
    da; Resistência: Vontade anula. Você dá uma ordem irresistível, que o alvo deve ser capaz de ouvir (mas não precisa entender). Se falhar na resis tência, ele deve obedecer ao comando em seu próprio turno da melhor maneira possível. Escolha um dos efeitos. Fuja: o alvo gasta seu turno se afastando de você (usando todas as suas ações). Largue: o alvo solta quaisquer itens que esteja segurando e não pode pegá-los novamente até o início de seu próximo turno. Como esta é uma ação livre, ele ainda pode executar outras ações (exceto pegar aquilo que largou). Pare: o alvo fica pasmo (apenas uma vez por cena). Senta: com uma ação livre, o alvo senta no chão (se estava pendurado ou voando, desce até o chão). Ele pode fazer outras ações, mas não se levantar até o início de seu próximo turno. Venha: o alvo gasta seu turno se apro ximando de você (usando todas as suas ações). +1 PM: muda o alvo para 1 criatura. +2 PM: aumenta a quantidade de alvos em +1.
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
  descricao_resumida: "Você amplia sua percepção, antecipan do movimentos dos inimigos e achando brechas em sua defesa."
  efeito_detalhado: |
    Você amplia sua percepção, antecipan do movimentos dos inimigos e achando brechas em sua defesa. Quando faz um teste de ataque, você rola dois dados e usa o melhor resultado. +2 PM: muda a execução para padrão e a duração para cena. Requer 2º círculo. +5 PM: além do normal, ao atacar você, um inimigo deve rolar dois dados e usar o pior resultado. Requer 3º círculo. +9 PM: muda a execução para padrão, o alcance para curto, o alvo para criaturas escolhidas e a duração para cena. Requer 4º círculo. +14 PM: muda a execução para padrão e a duração para um dia. Além do normal, você recebe um sexto sentido que o avisa de qualquer perigo ou ameaça. Você fica imune às condições surpreendido e desprevenido e recebe +10 na Defesa e Reflexos. Requer 5º círculo.
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
  descricao_resumida: "Você conjura um monstro Pequeno que ataca seus inimigos."
  efeito_detalhado: |
    Você conjura um monstro Pequeno que ataca seus inimigos. Você esco lhe a aparência do monstro e o tipo de dano que ele pode causar, entre cor te, impacto e perfuração. No entanto, ele não é uma criatura real, e sim uma criatura feita de energia. Se for destruído, ou quando a magia acaba, desaparece com um brilho, sem deixar nada para trás. Você só pode ter um monstro conjurado por esta magia por vez. O monstro surge em um espaço desocupado a sua escolha dentro do alcance e age no início de cada um de seus turnos, a partir da próxima rodada. O monstro tem deslocamento 9m e pode fazer uma ação de movimento por rodada. Você pode gastar uma ação padrão para dar uma das seguintes ordens a ele. Mover: o monstro se movimenta o do bro do deslocamento nessa rodada. Atacar: o monstro causa 2d4+2 pontos de dano de corte, impacto ou perfuração a uma criatura adjacente. Lançar Magia: o monstro pode servir como ponto de origem para uma magia lançada por você com execução de uma ação padrão ou menor. Ele pode descarregar um Toque Chocante em um inimigo distante, ou mesmo “cuspir” uma Bola de Fogo! Você gasta PM nor malmente para lançar a magia. Outros usos criativos para o monstro conjurado ficam a critério do mestre. Ele não age sem receber uma ordem. Para efeitos de jogo, o monstro conju rado tem For 2, Des 3 e todos os outros atributos nulos. Ele tem Defesa igual a sua, 20 PV , usa o seu valor em Reflexos e é imune a efeitos que pedem um teste de Fortitude ou Vontade. +1 PM: o monstro ganha deslocamen to de escalada ou natação igual ao seu deslocamento terrestre. +1 PM: aumenta o deslocamento do monstro em +3m. +1 PM: muda o tipo de dano do ataque do monstro para ácido, fogo, frio ou eletricidade. +2 PM: aumenta os PV do monstro em +10 para cada categoria de tamanho a partir de Pequeno (+10 PV para Pequeno, +20 PV para Médio etc.). +2 PM: aumenta o tamanho do mons tro para Médio. Ele tem For 4, Des 3, 45 PV , deslocamento 12m e seu ataque causa 2d6+6 pontos de dano. +2 PM: o monstro ganha redução 5 contra dois tipos de dano (por exem plo, corte e frio). +4 PM: o monstro ganha uma nova ordem: Arma de Sopro. Para dar essa or dem você gasta 1 PM, e faz o monstro causar o dobro de seu dano de ataque em um cone de 6m a partir de si (Reflexos reduz à metade). +5 PM: aumenta o tamanho do monstro para Grande. Ele tem For 7, Des 2, 75 PV , deslocamento 12m e seu ataque causa 4d6+10 pontos de dano com 3m de alcance. Requer 2º círculo. +9 PM: o monstro ganha deslocamento de voo igual ao dobro do deslocamento. +9 PM: o monstro ganha imunidade contra dois tipos de dano. +9 PM: aumenta o tamanho do monstro para Enorme. Ele tem For 11, Des 1, 110 PV , deslocamento 15m e seu ataque causa 4d8+15 pontos de dano com 4,5m de alcance. Requer 4º círculo. +14 PM: aumenta o tamanho do monstro para Colossal. Ele tem For 15, Des 0, 180 PV , deslocamento 15m e seu ataque causa 4d12+20 pontos de dano com 9m de alcance. Requer 5º círculo. 185 Kellyanne Pontes kelly.ayame@gmail.com
    
    Capítulo Quatro
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
  descricao_resumida: "Você enche a área com energia positiva."
  efeito_detalhado: |
    Você enche a área com energia positiva. Pontos de vida curados por efeitos de luz são maximizados dentro da área. Isso também afeta dano causado em mortos-vivos por esses efeitos. Por exemplo, Curar Ferimentos cura automaticamente 18 PV . Esta magia não pode ser lançada em uma área contendo um símbolo visível dedicado a uma divindade que não a sua. Consagrar anula Profanar. +1 PM: além do normal, mortos-vivos na área sofrem –2 em testes e Defesa. +2 PM: aumenta as penalidades para mortos-vivos em –1 (penalidade máxima limitada pelo círculo máximo de magia que você pode lançar). +9 PM: muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo.
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
  descricao_resumida: "Execução: padrão; Alcance: curto; Área: quadrado com 9m de lado; Duração: cena; Resistência: Reflexos anula."
  efeito_detalhado: |
    Execução: padrão; Alcance: curto; Área: quadrado com 9m de lado; Duração: cena; Resistência: Reflexos anula. Esta magia só pode ser lançada em uma área com vegetação. As plantas se enroscam nas criaturas da área. Aquelas que falharem na resistência ficam enredadas. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo. Além disso, a área é considerada ter reno difícil. No início de seus turnos, a vegetação tenta enredar novamente qualquer criatura na área, exigindo um novo teste de Reflexos. Truque: muda a área para alvo de 1 planta e a resistência para nenhuma. Em vez do normal, você pode fazer a planta se mover como se fosse animada. Ela não pode causar dano ou atrapalhar a concentração de um conjurador. +1 PM: muda a duração para instantâ nea. Em vez do normal, as plantas na área diminuem, como se tivessem sido podadas. Terreno difícil muda para ter reno normal e não fornece camufla gem. Esse efeito dissipa o uso normal de Controlar Plantas . +1 PM: além do normal, criaturas que falhem na resistência também ficam imóveis. +2 PM: muda o alcance para pessoal, a área para alvo (você) e a resistência para nenhuma. Em vez do normal, você consegue se comunicar com plantas, que começam com atitude prestativa em relação a você. Além disso, você pode fazer testes de Diplomacia com plantas. Em geral, plantas têm uma percepção limitada de seus arredores e normal-
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
  descricao_resumida: "188 Kellyanne Pontes kelly."
  efeito_detalhado: |
    188 Kellyanne Pontes kelly.ayame@gmail.com
    
    Magia Você cria uma pequena porção de um elemento, a sua escolha. Os elemen tos criados são reais, não mágicos. Elementos físicos devem surgir em uma superfície. Em vez de um cubo, pode-se criar objetos simples (sem partes móveis) feitos de gelo, terra ou pedra. Água: enche um recipiente de tamanho Minúsculo (como um odre) com água potável ou cria um cubo de gelo de tamanho Minúsculo. Ar: cria um vento fraco em um quadrado de 1,5m. Isso purifica a área de qualquer gás ou fumaça, ou remove névoa por uma rodada. Fogo: cria uma chama que ilumina como uma tocha. Você pode segurá-la na palma de sua mão sem se queimar, ou fazê-la surgir em um quadrado de 1,5m. Se uma criatura ou objeto esti ver no quadrado, sofre 1d6 pontos de dano de fogo; se falhar num teste de Reflexos, fica em chamas. Terra: cria um cubo de tamanho Minúsculo feito de terra, argila ou pedra. +1 PM: aumenta a quantidade do elemento em um passo (uma categoria de tamanho para água ou terra, +1 quadrado de 1,5m para ar e fogo). +1 PM: muda o efeito para alvo 1 criatura ou objeto e a resistência para Reflexos reduz à metade. Se escolher água ou terra, você arremessa o cubo ou objeto criado no alvo, causando 2d4 pontos de dano de impacto. Para cada categoria de tamanho acima de Minúsculo, o dano aumenta em um passo. O cubo se desfaz em seguida. +1 PM: se escolheu fogo, aumenta o dano inicial de cada chama em +1d6.
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
  descricao_resumida: "tência: Vontade desacredita."
  efeito_detalhado: |
    tência: Vontade desacredita. Esta magia cria uma ilusão visual (uma criatura, uma parede...) ou sonora (um grito de socorro, um uivo assustador...). A magia cria apenas imagens ou sons simples, com volume equivalente ao tom de voz normal para cada cubo de 1,5m no efeito. Não é possível criar cheiros, texturas ou temperaturas, nem sons complexos, como uma música ou diálogo. Criaturas e objetos atravessam uma ilusão sem sofrer dano, mas a magia pode, por exemplo, esconder uma armadilha ou inimigo. A magia é dissipada se você sair do alcance.+1 PM: muda a duração para susten tada. A cada rodada você pode gastar uma ação livre para mover a imagem ou alterar levemente o som, como aumentar o volume ou fazer com que pareça se afastar ou se aproximar, ainda dentro dos limites do efeito. Você pode, por exemplo, criar a ilusão de um fantasma que anda pela sala, controlando seus movimentos. Quando você para de sustentar a magia, a imagem ou som persistem por mais uma rodada antes de a magia se dissipar. +1 PM: aumenta o efeito da ilusão em +1 cubo de 1,5m. +1 PM: também pode criar ilusões de imagem e sons combinados. +1 PM: também pode criar sons com plexos com volume máximo equivalente ao que cinco pessoas podem produzir para cada cubo de 1,5m no efeito. Com uma ação livre, você pode alterar o volume do som ou fazê-lo se apro ximar ou se afastar dentro do alcance. +2 PM: também pode criar odores e sensações térmicas, que são percebi dos a uma distância igual ao dobro do tamanho máximo do efeito. Por exem plo, uma miragem de uma fogueira com 4 cubos de 1,5m poderia emanar calor e cheiro de queimado a até 12m. +2 PM: muda o alcance para longo e o efeito para esfera com 30m de raio. Em vez do normal, você cria um som muito alto, equivalente a uma multidão. Criaturas na área lançam magias como se estivessem em uma condição ruim e a CD de testes de Percepção para ouvir aumenta em +10. Requer 2º círculo. +2 PM: também criar sensações táteis, como texturas; criaturas que não saibam que é uma ilusão não conseguem atravessá-la sem passar em um teste de Vontade (objetos ainda a atravessam). A ilusão ainda é incapaz de causar ou sofrer dano. Requer 2º círculo. +5 PM: muda a duração para sustentada. Além do normal, você pode gastar uma ação livre para modifi car livremente a ilusão (mas não pode acrescentar novos aprimoramentos após lançá-la). Requer 3º círculo.
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
  descricao_resumida: "Você canaliza luz que recupera 2d8+2 pontos de vida na criatura tocada."
  efeito_detalhado: |
    Você canaliza luz que recupera 2d8+2 pontos de vida na criatura tocada. Curar Ferimentos anula Infligir Ferimentos. Truque: muda o alvo para 1 morto -vivo. Em vez do normal, causa 1d8 pontos de dano de luz (Vontade reduz à metade). +1 PM: aumenta a cura em +1d8+1. +2 PM: também remove uma condi ção de cansaço do alvo. +2 PM: muda o alcance para curto. +5 PM: muda o alcance para curto e o alvo para criaturas escolhidas.
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
  descricao_resumida: "sistência: Fortitude parcial."
  efeito_detalhado: |
    sistência: Fortitude parcial. Esta magia emite um som alto e agudo. O alvo sofre 1d8+2 pontos de dano de impacto (ou o dobro disso e igno ra RD se for um construto ou objeto mundano) e fica atordoado por uma rodada (apenas uma vez por cena). Um teste de Fortitude reduz o dano à metade e evita o atordoamento. Despeda çar anula Transmutar Objetos. +2 PM: aumenta o dano em +1d8+2. +2 PM: muda o alvo para objeto mundano Médio. Requer 2º círculo. +5 PM: muda o alvo para objeto mundano Grande. Requer 3º círculo. +9 PM: muda o alvo para objeto mundano Enorme. Requer 4º círculo. +14 PM: muda o alvo para objeto mundano Colossal. Requer 5º círculo. +5 PM: muda o alcance para pessoal e o alvo para área: esfera com 6m de raio. Todas as criaturas e objetos mun
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
  descricao_resumida: "Você recebe uma intuição aguçada so bre perigos ao seu redor."
  efeito_detalhado: |
    Você recebe uma intuição aguçada so bre perigos ao seu redor. Quando uma criatura hostil ou armadilha entra na área do efeito, você faz um teste de Percepção (CD determinada pelo mes tre de acordo com a situação). Se passar, sabe a origem (criatura ou armadilha), direção e distância do perigo. Se falhar, sabe apenas que o perigo existe. +1 PM: você descobre também a raça ou espécie e o poder da criatura detectada (determinado pela aura dela). Criaturas de 1º a 6º nível ou ND geram aura tênue, criaturas de 7º a 12º nível ou ND geram aura moderada e criatu ras de 13º ao 20º nível ou ND geram aura poderosa. Criaturas acima do 20º nível ou ND geram aura avassaladora. +2 PM: além do normal, você não fica surpreendido contra perigos detecta dos com sucesso e recebe +5 em tes tes de resistência contra armadilhas. Requer 2º círculo.
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
  descricao_resumida: "cia: Vontade desacredita."
  efeito_detalhado: |
    cia: Vontade desacredita. Você muda a aparência do alvo, incluindo seu equipamento. Isso inclui altura, peso, tom de pele, cor de cabelo, timbre de voz etc. O alvo rece be +10 em testes de Enganação para disfarce. O alvo não recebe novas habilidades (você pode ficar parecido com outra raça, mas não ganhará as habilidades dela), nem modifica o equipamento (uma espada longa disfarçada de bordão continua funcionando e causando dano como uma espada). Truque: muda o alcance para toque, o alvo para 1 criatura e a duração para 1 semana. Em vez do normal, você faz uma pequena alteração na aparência do alvo, como deixar o nariz vermelho ou fazer brotar um gerânio no alto da cabeça. A mudança é inofensiva, mas persistente — se a flor for arrancada, por exemplo, outra nascerá no local. +1 PM: muda o alcance para curto e o alvo para 1 objeto. Você pode, por exemplo, transformar pedaços de ferro em moedas de ouro. Você recebe +10 em testes de Enganação para falsificação. +2 PM: muda o alcance para curto e o alvo para 1 criatura. Uma criatura involuntária pode anular o efeito com um teste de Vontade. +2 PM: a ilusão inclui odores e sensa ções. Isso muda o bônus em testes de Enganação para disfarce para +20. +3 PM: muda o alcance para curto e o alvo para criaturas escolhidas. Cada criatura pode ter uma aparência dife rente. Criaturas involuntárias podem anular o efeito com um teste de Von
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
  descricao_resumida: "Resistência: Vontade anula."
  efeito_detalhado: |
    Resistência: Vontade anula. O alvo fica enfeitiçado (veja a página 394). Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é dissi pada e o alvo retorna à atitude que tinha antes (ou piorada, de acordo com o mestre). +2 PM: em vez do normal, você sugere uma ação para o alvo e ele obedece. A sugestão deve ser feita de modo que pareça aceitável, a critério do mes tre. Pedir ao alvo que pule de um precipício, por exemplo, dissipa a magia. Já sugerir a um guarda que descanse um pouco, de modo que você e seus aliados passem por ele, é aceitável. Quando o alvo executa a ação, a magia termina. Você pode determinar uma condição específica para a suges tão: por exemplo, que um rico merca dor doe suas moedas para o primeiro mendigo que encontrar. +5 PM: muda o alvo para 1 espírito ou monstro. Requer 3º círculo. +5 PM: afeta todos os alvos dentro do alcance. 191 Kellyanne Pontes kelly.ayame@gmail.com
    
    Capítulo Quatro
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
  descricao_resumida: "Um escudo místico se manifesta mo mentaneamente para bloquear um golpe."
  efeito_detalhado: |
    Um escudo místico se manifesta mo mentaneamente para bloquear um golpe. O alvo recebe +2 na Defesa. +1 PM: muda a execução para ação padrão, o alcance para toque e a duração para cena. +1 PM: também fornece ao alvo camuflagem leve contra ataques à distância. +2 PM: aumenta o bônus na Defesa em +1. +2 PM: muda a execução para ação padrão, o alcance para toque e a duração para cena. A magia cria uma conexão mística entre você e o alvo. Além do efeito normal, o alvo sofre metade do dano por ataques e efeitos; a outra metade do dano é transferida a você. Se o alvo sair de alcance curto de você, a magia é dissipada. Requer 2º círculo. +3 PM: muda a duração para um dia. Requer 2º círculo.
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
  descricao_resumida: "tânea; Resistência: Reflexos reduz à metade."
  efeito_detalhado: |
    tânea; Resistência: Reflexos reduz à metade. Um leque de chamas irrompe de suas mãos, causando 2d6 pontos de dano de fogo às criaturas na área. Truque: muda o alcance para curto, a área para alvo de 1 objeto e a resistência para Reflexos anula. Você gera uma pequena explosão que não causa dano mas pode acender uma vela, to cha ou fogueira. Também pode fazer um objeto inflamável com RD 0 (como uma corda ou pergaminho) ficar em chamas. Uma criatura em posse de um objeto pode evitar esse efeito se passar no teste de resistência. +1 PM: aumenta o dano em +1d6. +1 PM: muda a resistência para Reflexos parcial. Se passar, a criatura reduz o dano à metade; se falhar, fica em chamas (veja Condições, na página 394).
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
  descricao_resumida: "Três cópias ilusórias suas aparecem."
  efeito_detalhado: |
    Três cópias ilusórias suas aparecem. As duplicatas ficam ao seu redor e imitam suas ações, tornando difícil para um inimigo saber quem atacar. Você recebe +6 na Defesa. Cada vez que um ataque contra você erra, uma das imagens desaparece e o bônus na Defe sa diminui em 2. Um oponente deve ver as cópias para ser confundido. Se você estiver invisível, ou o atacante fechar os olhos, você não recebe o bônus (mas o atacante ainda sofre penalidades normais por não enxergar). +2 PM: aumenta o número de cópias em +1 (e o bônus na Defesa em +2). +2 PM: além do normal, toda vez que uma cópia é destruída, emite um clarão de luz. A criatura que destruiu a cópia fica ofuscada por uma rodada. Requer 2º círculo.
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
  descricao_resumida: "Resistência: Fortitude reduz à metade."
  efeito_detalhado: |
    Resistência: Fortitude reduz à metade. Você canaliza energia negativa contra um alvo, causando 2d8+2 pontos de dano de trevas (ou curando 2d8+2 PV , se for um morto-vivo). Infligir Ferimentos anula Curar Ferimentos. +1 PM: além do normal , o alvo fica fraco pela cena (passar no teste de resistência evita). +2 PM: aumenta o dano em +1d8+1. +2 PM: muda a resistência para nenhum. Como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e o efeito da magia. +5 PM: muda o alcance para curto e o alvo para criaturas escolhidas.
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
  descricao_resumida: "Em seu próximo teste de perícia, o alvo pode rolar dois dados e ficar com o melhor resultado."
  efeito_detalhado: |
    Em seu próximo teste de perícia, o alvo pode rolar dois dados e ficar com o melhor resultado. +2 PM: muda a duração para cena. Em vez do normal, escolha um atributo. Sempre que o alvo fizer um teste de perícia baseado no atributo escolhido, pode rolar dois dados e ficar com o melhor resultado. Não se aplica a testes de ataque ou resistência. Requer 2º círculo. +5 PM: como acima, mas, em vez de um atributo, escolha entre atributos físicos (Força, Destreza e Constituição) ou mentais (Inteligência, Sabedoria e Carisma). Requer 3º círculo. +5 PM: muda o alvo para criaturas escolhidas. Requer 3º círculo.
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
  descricao_resumida: "cena; Resistência: nenhuma."
  efeito_detalhado: |
    cena; Resistência: nenhuma. Amaldiçoa os alvos, que recebem –1 em testes de ataque e rolagens de dano. Perdição anula Bênção. +2 PM: aumenta as penalidades em –1 (penalidade máxima limitada pelo círculo máximo de magia que você pode lançar).
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
  descricao_resumida: "Você modifica os limites físicos do alvo, que recebe deslocamento +9m e +10 em testes de Atletismo."
  efeito_detalhado: |
    Você modifica os limites físicos do alvo, que recebe deslocamento +9m e +10 em testes de Atletismo. +1 PM: além do normal, o alvo rece be um bônus adicional de +20 em tes tes de Atletismo para saltar (para um bônus total de +30). +1 PM: além do normal, o alvo pode escalar paredes e tetos sem precisar fazer testes de Atletismo. Para isso, precisa estar com as mãos livres, mas pode usar uma única mão se ficar parado no lugar. O alvo não fica desprevenido enquanto escala. +1 PM: muda a execução para ação de movimento, o alcance para pessoal, o alvo para você e a duração para instan tânea. Você salta muito alto e pousa em alcance corpo a corpo de uma criatura em alcance curto. Se fizer um ataque corpo a corpo contra essa criatura neste turno, recebe os benefícios e penalidades de uma investida e sua arma causa um dado extra de dano do mes mo tipo durante este ataque. +3 PM: além do normal, ao fazer tes tes de perícias baseadas em Força, Destreza ou Constituição, o alvo pode rolar dois dados e escolher o melhor. Não afeta testes de ataque ou resistên cia. Requer 2º círculo. 201 Kellyanne Pontes kelly.ayame@gmail.com
    
    Capítulo Quatro
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
  descricao_resumida: "Você enche a área com energia negativa."
  efeito_detalhado: |
    Você enche a área com energia negativa. Dano de trevas é maximiza do dentro da área. Isso também afeta PV curados em mortos-vivos por esses efeitos. Esta magia não pode ser lançada em uma área contendo um símbolo visível dedicado a uma divindade que não a sua. Profanar anula Consagrar. +1 PM: além do normal, mortos-vivos na área recebem +2 na Defesa e +2 em todos os testes. +2 PM: aumenta os bônus para mor tos-vivos em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar). +9 PM: muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo.
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
  descricao_resumida: "Esta magia cria uma barreira mística invisível que fornece ao alvo +2 em testes de resistência."
  efeito_detalhado: |
    Esta magia cria uma barreira mística invisível que fornece ao alvo +2 em testes de resistência. +2 PM: aumenta o bônus concedido em +1. +2 PM: muda a execução para reação, o alcance para curto e a duração para 1 rodada. Em vez do normal, o alvo rece be +5 no próximo teste de resistência que fizer (cumulativo com o efeito básico desta magia). +2 PM: muda o alvo para área de esfera com 3m de raio. Todos os aliados dentro do círculo recebem o bônus da magia. Requer 2º círculo. +5 PM: torna o alvo imune a efeitos mentais e de medo. Requer 3º círculo.
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
  descricao_resumida: "ou cena, o que vier primeiro."
  efeito_detalhado: |
    ou cena, o que vier primeiro. O alvo cai lentamente. A velocidade da queda é reduzida para 18m por rodada — o suficiente para não causar dano. Como lançar esta magia é uma reação, você pode lançá-la rápido o bastante para salvar a si ou um aliado de quedas inesperadas. Lançada sobre um projétil — como uma flecha ou uma rocha lar gada do alto de um penhasco —, a magia faz com que ele cause metade do dano normal, devido à lentidão. Queda Suave só funciona em criaturas e objetos em queda livre; a magia não vai frear um golpe de espada ou o mergulho rasante de um atacante voador. Truque: muda o alvo para objeto Minúsculo. Em vez do normal, você pode gastar uma ação de movimento para levitar o alvo até 4,5m em qualquer direção. +2 PM: muda o alvo para até 10 criaturas ou objetos adequados. +2 PM: aumenta a categoria de tamanho do alvo em uma.
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
  descricao_resumida: "sistência: Fortitude parcial."
  efeito_detalhado: |
    sistência: Fortitude parcial. Você dispara um raio púrpura que drena as forças do alvo. Se falhar na resis tência, o alvo fica fatigado. Se passar, fica vulnerável. Note que, como efeitos de magia não acumulam, lançar esta magia duas vezes contra o mesmo alvo não irá deixá-lo exausto. Truque: muda o alcance para toque e a resistência para Fortitude anula. Em vez do normal, sua mão emana um brilho púrpura e, ao tocar o alvo, ele fica fatigado. +2 PM: em vez do normal, se falhar na resistência o alvo fica exausto . Se passar, fica fatigado. Requer 2º círculo. +5 PM: como acima, mas muda o alvo para criaturas escolhidas. Requer 3º círculo. 202 Kellyanne Pontes kelly.ayame@gmail.com
    
    Magia
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
  descricao_resumida: "Favorita entre arcanistas iniciantes, esta magia lança duas setas de energia que causam 1d4+1 pontos de dano de essência cada."
  efeito_detalhado: |
    Favorita entre arcanistas iniciantes, esta magia lança duas setas de energia que causam 1d4+1 pontos de dano de essência cada. Você pode lançar as setas em alvos diferentes ou concentrá-las num mesmo alvo. Caso você possua um bônus no dano de magias, como pelo poder Arcano de Batalha, ele é aplicado em apenas uma seta (o bônus vale para a magia, não cada alvo). +2 PM: muda as setas para lanças de energia que surgem e caem do céu. Cada lança causa 1d8+1 pontos de dano de essência. Requer 2º círculo. +2 PM: muda o número de setas/lan ças para três. +4 PM: muda o número de setas/lan ças para cinco. Requer 2º círculo. +9 PM: muda o número de setas/lan ças para dez. Requer 4º círculo.
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
  descricao_resumida: "Resistência: Vontade parcial."
  efeito_detalhado: |
    Resistência: Vontade parcial. Um cansaço místico recai sobre o alvo. Se falhar na resistência, ele fica incons ciente e caído ou, se estiver envolvido em combate ou outra situação perigo sa, fica exausto por 1 rodada, depois fatigado. Em ambos os casos, se passar, o alvo fica fatigado por 1d4 rodadas. +2 PM: alvos que falhem na resistên cia ficam exaustos por 1d4+1 rodadas, em vez de apenas 1. +2 PM: muda o alvo para criatura. +5 PM: afeta todos os alvos válidos a sua escolha dentro do alcance.
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
  descricao_resumida: "Esta magia facilita a sobrevivência em ambientes hostis."
  efeito_detalhado: |
    Esta magia facilita a sobrevivência em ambientes hostis. O alvo fica imune aos efeitos de calor e frio extremos, pode respirar na água se respirar ar (ou vice-versa) e não sufoca em fumaça densa. +5 PM: muda o alcance para curto e o alvo para criaturas escolhidas.
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
  descricao_resumida: "cena; Resistência: Reflexos anula."
  efeito_detalhado: |
    cena; Resistência: Reflexos anula. Teia cria várias camadas de fibras entrelaçadas e pegajosas na área. Qualquer criatura na área que falhar na resistên cia fica enredada. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo. A área ocupada por Teia é terreno difícil. A Teia é inflamável. Qualquer ataque que cause dano de fogo destrói as teias por onde passar, libertando as criaturas enredadas mas deixando-as em chamas. +1 PM: além do normal, criaturas que falhem na resistência também ficam imóveis. +2 PM: além do normal, no início de seus turnos a magia afeta novamente qualquer criatura na área, exigindo um novo teste de Reflexos. Requer 2º círculo. +2 PM: aumenta a área em +1 cubo de 1,5m.
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
  descricao_resumida: "nea; Resistência: Fortitude reduz à metade."
  efeito_detalhado: |
    nea; Resistência: Fortitude reduz à metade. Arcos elétricos envolvem sua mão, causando 2d8+2 pontos de dano de eletricidade. Se o alvo usa armadura de metal (ou carrega muito metal, a crité rio do mestre), sofre uma penalidade de –5 no teste de resistência. +1 PM: aumenta o dano em +1d8+1. +2 PM: muda a resistência para nenhum. Como parte da execução da magia, você faz um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia. +2 PM: muda o alcance para pessoal e o alvo para área: esfera com 6m de raio. Você dispara raios pelas pontas dos dedos que afetam todas as criatu ras na área.
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
  descricao_resumida: "Execução: padrão; Alcance: toque; Alvo: 1 objeto Grande ou menor; Duração: permanente."
  efeito_detalhado: |
    Execução: padrão; Alcance: toque; Alvo: 1 objeto Grande ou menor; Duração: permanente. Esta magia tranca uma porta ou outro item que possa ser aberto ou fechado (como um baú, caixa etc.), aumentan do a CD de testes de Força ou Ladinagem para abri-lo em +10. Você pode abrir livremente sua própria tranca sem problemas. Componente material: chave de bronze no valor de T$ 25. Truque: muda o alcance para curto. Em vez do normal, pode abrir ou fechar um objeto de tamanho Grande ou menor, como uma porta ou baú. Não afeta objetos trancados. +1 PM: muda o alcance para curto e a duração para instantânea. Em vez do 209 Kellyanne Pontes kelly.ayame@gmail.com
    
    Capítulo Quatro normal, a magia abre portas, baús e janelas trancadas, presas, barradas ou protegidas por Tranca Arcana (o efeito é dissipado) a sua escolha. Ela também afrouxa grilhões e solta correntes. +5 PM: aumenta a CD para abrir o alvo em +5. +5 PM: muda o alvo para 1 objeto de qualquer tamanho, podendo afetar até mesmo os portões de um castelo. Requer 3º círculo.
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
    Você emana ondas de serenidade. Se falhar na resistência, o alvo tem sua atitude mudada para indiferente (veja a página 259) e não pode atacar ou realizar qualquer ação agressiva. Se passar, sofre –2 em testes de ataque. Qualquer ação hostil contra o alvo ou seus aliados dissipa a magia e faz ele retor nar à atitude que tinha antes (ou pior, de acordo com o mestre). +1 PM: muda o alvo para 1 criatura. +1 PM: aumenta o número de alvos em +1. +5 PM: muda o alcance para médio e o alvo para criaturas escolhidas. Requer 3º círculo.
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
    Você suga energia vital da terra, rece bendo 2d10 pontos de vida temporá rios. Os PV temporários desaparecem ao final da cena. +2 PM: aumenta os PV temporários recebidos em +1d10. Caso a magia cause dano, em vez disso aumenta o dano causado em +1d10.+5 PM: muda o alvo para área: esfera com 6m de raio centrada em você e a resistência para Fortitude reduz à metade. Em vez do normal, você suga energia das criaturas vivas na área, causando 1d10 pontos de dano de trevas e recebendo PV temporários iguais ao dano total causado. Os PV temporários desaparecem ao final da cena. Requer 2º círculo.
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