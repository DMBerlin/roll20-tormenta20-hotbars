// Auto-generated spells data - Generated at build time
// Do not edit manually - Run 'pnpm build' to regenerate

const spellsData = {
  "arcana": {
    "1-circulo": {
      "abjuracao": {
        "alarme": {
          "name": "Alarme",
          "type": "Magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_orb_01.jpg",
          "system": {
            "circulo": "1",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "duracao": "1 dia",
            "alvo": "Esfera de 9m de raio",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Você cria uma barreira protetora invisível que detecta qualquer criatura que tocar ou entrar na área protegida. Ao lançar a magia, você pode escolher quais criaturas podem entrar na área sem ativar seus efeitos. Alarme pode emitir um aviso telepático ou sonoro, decidido quando a magia é lançada. Um aviso telepático alerta apenas você, inclusive acordando-o se estiver dormindo, mas apenas se estiver a até 1km da área protegida. Um aviso sonoro alerta todas as criaturas em alcance longo."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda o alcance para pessoal. A área é emanada a partir de você.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "além do normal, você também percebe qualquer efeito de adivinhação que seja usado dentro da área ou atravesse a área. Você pode fazer um teste oposto de Misticismo contra quem usou o efeito; se passar, tem um vislumbre de seu rosto e uma ideia aproximada de sua localização (\"três dias de viagem ao norte\", por exemplo).",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "muda a duração para 1 dia ou até ser descarregada e a resistência para Vontade anula. Quando um intruso entra na área, você pode descarregar a magia. Se o intruso falhar na resistência, ficará paralisado por 1d4 rodadas. Além disso, pelas próximas 24 horas você e as criaturas escolhidas ganham +10 em testes de Sobrevivência para rastrear o intruso.",
              "aumenta": false
            }
          ]
        },
        "armadura-arcana": {
          "name": "Armadura Arcana",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_magic_magearmor.jpg",
          "system": {
            "circulo": "1",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Esta magia cria uma película protetora invisível, mas tangível, fornecendo +5 na Defesa. Esse bônus é cumulativo com outras magias, mas não com bônus fornecido por armaduras."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o bônus na Defesa em +1.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "muda a duração para 1 dia.",
              "aumenta": false
            }
          ]
        },
        "tranca-arcana": {
          "name": "Tranca Arcana",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane01.jpg",
          "system": {
            "circulo": "1",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 objeto Grande ou menor",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Esta magia tranca uma porta ou outro item que possa ser aberto ou fechado (como um baú, caixa etc.), aumentando a CD de testes de Força ou Ladinagem para abri-lo em +10. Você pode abrir livremente sua própria tranca sem problemas.Componente material: chave de bronze no valor de T$ 25."
            }
          },
          "aprimoramentos": [
            {
              "custo": 5,
              "descricao": "aumenta a CD para abrir o alvo em +5.",
              "aumenta": true
            },
            {
              "custo": 5,
              "descricao": "muda o alvo para 1 objeto de qualquer tamanho, podendo afetar até mesmo os portões de um castelo. Requer 3º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "adivinhacao": {
        "concentracao-de-combate": {
          "name": "Concentração de Combate",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_focusedmind.jpg",
          "system": {
            "circulo": "1",
            "escola": "adv",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "free"
            },
            "alcance": "pessoal",
            "duracao": "1 rodada",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Esta magia amplia sua percepção, antecipando movimentos dos inimigos e encontrando brechas em suas defesas. Quando faz um ataque, você rola dois dados e usa o melhor resultado."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda a execução para padrão e a duração para cena. Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "além do normal, ao atacar você, um inimigo deve rolar dois dados e usar o pior resultado. Requer 3º círculo.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "muda a execução para padrão, o alcance para curto, o alvo para criaturas escolhidas e a duração para cena. Requer 4º círculo.",
              "aumenta": false
            },
            {
              "custo": 14,
              "descricao": "muda a execução para padrão e a duração para 1 dia. Além do normal, você recebe um sexto sentido que o avisa de qualquer perigo ou ameaça. Você fica imune às condições surpreendido e desprevenido e recebe +10 em Defesa e Reflexos. Requer 5º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "convocacao": {
        "area-escorregadia": {
          "name": "Área Escorregadia",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_web.jpg",
          "system": {
            "circulo": "1",
            "escola": "convocacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "Quadrado de 3m ou 1 objeto",
            "resistencia": "Reflexos (veja texto)",
            "custo": "1 PM",
            "description": {
              "value": "Esta magia recobre uma superfície com uma substância gordurosa e escorregadia. Criaturas na área devem passar na resistência para não cair. Nas rodadas seguintes, criaturas que tentem movimentar-se pela área devem fazer testes de Acrobacia para equilíbrio (CD 10). área Escorregadia pode tornar um item escorregadio. Uma criatura segurando um objeto afetado deve passar na resistência para não deixar o item cair cada vez que usá-lo."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda a CD dos testes de Acrobacia para 15.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda a CD dos testes de Acrobacia para 20.",
              "aumenta": false
            }
          ]
        },
        "conjurar-monstro": {
          "name": "Conjurar Monstro",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_summonnatureguardian.jpg",
          "system": {
            "circulo": "1",
            "escola": "convocacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "curto",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Esta magia conjura um monstro Pequeno que ataca seus inimigos. Você escolhe a aparência do monstro e o tipo de dano que ele pode causar (corte, impacto ou perfuração). O monstro não é uma criatura real, mas sim um construto feito de energia. Se for destruído ou quando a magia acabar, ele desaparece sem deixar nada para trás. Você só pode ter um monstro conjurado por esta magia por vez. O monstro surge em um ponto escolhido por você dentro do alcance e pode agir no começo do seu próximo turno, sempre na sua Iniciativa. O monstro tem deslocamento de 9m e pode fazer uma ação de movimento por rodada. Você pode usar uma ação padrão para dar uma das seguintes ordens a ele: Mover: O monstro se movimenta o dobro do deslocamento nessa rodada. Atacar: O monstro ataca um alvo em alcance corpo a corpo. O ataque acerta automaticamente e causa 2d4+2 pontos de dano. Lançar Magia: O monstro pode servir como ponto de origem para uma magia lançada por você com execução de uma ação padrão ou menor. Ele pode descarregar um Toque Chocante em um inimigo distante ou mesmo \"cuspir\" uma Bola de Fogo. Você gasta PM normalmente para lançar a magia. O monstro conjurado tem For 14, Des 17 e todos os outros atributos nulos. Ele tem 20 pontos de vida, não tem um valor de Defesa (ataques feitos contra ele acertam automaticamente) e usa o seu bônus para teste de Reflexos. Ele é imune a efeitos que pedem um teste de Fortitude ou Vontade."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta os PV do monstro em +10 para cada categoria de tamanho a partir de Pequeno (+10 PV para Pequeno, +20 PV para Médio etc.).",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "aumenta o tamanho do monstro para Médio. Ele tem For 4, Des 3, 45 PV, deslocamento 12m e seu ataque causa 2d6+6 pontos de dano.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "o monstro ganha resistência 5 contra dois tipos de dano (por exemplo, corte e frio).",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "o monstro ganha uma nova ordem: Arma de Sopro. Para dar essa ordem você gasta 1 PM, e faz o monstro causar o dobro de seu dano de ataque em um cone de 6m a partir de si (Reflexos reduz à metade).",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "aumenta o tamanho do monstro para Grande. Ele tem For 7, Des 2, 75 PV, deslocamento 12m e seu ataque causa 4d6+10 pontos de dano com 3m de alcance. Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "o monstro ganha deslocamento de voo igual ao dobro do deslocamento.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "o monstro ganha imunidade contra dois tipos de dano.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "aumenta o tamanho do monstro para Enorme. Ele tem For 11, Des 1, 110 PV, deslocamento 15m e seu ataque causa 4d8+15 pontos de dano com 4,5m de alcance. Requer 4º círculo.",
              "aumenta": true
            },
            {
              "custo": 14,
              "descricao": "aumenta o tamanho do monstro para Colossal. Ele tem For 15, Des 0, 180 PV, deslocamento 15m e seu ataque causa 4d12+20 pontos de dano com 9m de alcance. Requer 5º círculo.",
              "aumenta": true
            }
          ]
        },
        "teia": {
          "name": "Teia",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_web.jpg",
          "system": {
            "circulo": "1",
            "escola": "convocacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "cubo com 6m de lado",
            "resistencia": "Reflexos anula",
            "custo": "1 PM",
            "description": {
              "value": "Teia cria várias camadas de fibras entrelaçadas e pegajosas na área. Qualquer criatura na área que falhar na resistência fica Enredado. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo. A área ocupada por Teia é terreno difícil. A Teia é inflamável. Qualquer ataque que cause dano de fogo destrói as teias por onde passar, libertando as criaturas enredadas mas deixando-as em chamas."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "além do normal, no início de seus turnos a magia afeta novamente qualquer criatura na área, exigindo um novo teste de Reflexos. Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "aumenta a área em +1 cubo de 1,5m.",
              "aumenta": true
            }
          ]
        }
      },
      "encantamento": {
        "adaga-mental": {
          "name": "Adaga Mental",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_psychicscream.jpg",
          "system": {
            "circulo": "1",
            "escola": "encantamento",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 criatura",
            "resistencia": "Vontade parcial",
            "custo": "1 PM",
            "description": {
              "value": "Você manifesta e dispara uma adaga imaterial contra a mente do alvo, que sofre 2d6 pontos de dano psíquico e fica Atordoado por uma rodada. Se passar no teste de resistência, sofre apenas metade do dano e evita a condição. Uma criatura só pode ficar atordoada por esta magia uma vez por cena."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda a duração para 1 dia. Além do normal, você \"finca\" a adaga na mente do alvo. Enquanto a magia durar, você sabe a direção e localização do alvo, desde que ele esteja no mesmo mundo.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "aumenta o dano em +1d6.",
              "aumenta": true
            }
          ]
        },
        "enfeiticar": {
          "name": "Enfeitiçar",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_charm.jpg",
          "system": {
            "circulo": "1",
            "escola": "encantamento",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 humanóide",
            "resistencia": "Vontade anula",
            "custo": "1 PM",
            "description": {
              "value": "O alvo fica enfeitiçado (veja a página 394). Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é dissipada e o alvo retorna à atitude que tinha antes (ou piorada, de acordo com o mestre)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "em vez do normal, você sugere uma ação para o alvo e ele obedece. A sugestão deve ser feita de modo que pareça aceitável, a critério do mestre. Pedir ao alvo que pule de um precipício, por exemplo, dissipa a magia. Já sugerir a um guarda que descanse um pouco, de modo que você e seus aliados passem por ele, é aceitável. Quando o alvo executa a ação, a magia termina. Você pode determinar uma condição específica para a sugestão: por exemplo, que um rico mercador doe suas moedas para o primeiro mendigo que encontrar.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda o alvo para 1 espírito ou monstro. Requer 3º círculo.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "afeta todos os alvos dentro do alcance.",
              "aumenta": false
            }
          ]
        },
        "hipnotismo": {
          "name": "Hipnotismo",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_soothingkiss.jpg",
          "system": {
            "circulo": "1",
            "escola": "encantamento",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "duracao": "1d4 Rodadas",
            "alvo": "1 animal ou humanoide",
            "resistencia": "Vontade anula",
            "custo": "1 PM",
            "description": {
              "value": "Suas palavras e movimentos ritmados deixam o alvo fascinado. Esta magia só afeta criaturas que possam perceber você. Se usar esta magia em combate, o alvo recebe +5 em seu teste de resistência. Se a criatura passar, fica imune a este efeito por um dia."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda o alvo para animais ou humanoides escolhidos.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "muda a duração para sustentada.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "também afeta espíritos e monstros na área. Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "também afeta construtos, espíritos, monstros e mortos-vivos na área. Requer 3º círculo.",
              "aumenta": false
            }
          ]
        },
        "sono": {
          "name": "Sono",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_sleep.jpg",
          "system": {
            "circulo": "1",
            "escola": "encantamento",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 humanoide",
            "resistencia": "Vontade parcial",
            "custo": "1 PM",
            "description": {
              "value": "Um cansaço místico recai sobre o alvo. Se falhar na resistência, ele fica inconsciente e caído ou, se estiver envolvido em combate ou outra situação perigosa, fica Exausto por 1 rodada, depois fatigado. Em ambos os casos, se passar, o alvo fica Fatigado por 1d4 rodadas."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "alvos que falhem na resistência ficam exaustos por 1d4+1 rodadas, em vez de apenas 1.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "muda o alvo para criatura.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "afeta todos os alvos válidos a sua escolha dentro do alcance.",
              "aumenta": false
            }
          ]
        }
      },
      "evocacao": {
        "explosao-de-chamas": {
          "name": "Explosão de Chamas",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_fire_fireball.jpg",
          "system": {
            "circulo": "1",
            "escola": "evocacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "Cone de 6m",
            "resistencia": "Reflexos reduz à metade",
            "custo": "1 PM",
            "description": {
              "value": "Um leque de chamas irrompe de suas mãos, causando 2d6 pontos de dano de fogo às criaturas na área."
            }
          }
        },
        "seta-infalivel": {
          "name": "Seta Infalível",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane02.jpg",
          "system": {
            "circulo": "1",
            "escola": "evocacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "até 2 criaturas",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Favorita entre arcanistas iniciantes, esta magia lança duas setas de energia que causam 1d4+1 pontos de dano de essência cada. Você pode lançar as setas em alvos diferentes ou concentrá-las num mesmo alvo. Caso você possua um bônus no dano de magias, como pelo poder Arcano de Batalha, ele é aplicado em apenas uma seta (o bônus vale para a magia, não cada alvo)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda as setas para lanças de energia que surgem e caem do céu. Cada lança causa 1d8+1 pontos de dano de essência. Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "muda o número de setas/lanças para três.",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "muda o número de setas/lanças para cinco. Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "muda o número de setas/lanças para dez. Requer 4º círculo.",
              "aumenta": false
            }
          ]
        },
        "toque-chocante": {
          "name": "Toque Chocante",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg",
          "system": {
            "circulo": "1",
            "escola": "evocacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Fortitude reduz à metade",
            "custo": "1 PM",
            "description": {
              "value": "Arcos elétricos envolvem sua mão, causando 2d8+2 pontos de dano de eletricidade. Se o alvo usa armadura de metal (ou carrega muito metal, a critério do mestre), sofre uma penalidade de –5 no teste de resistência."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda a resistências para nenhum. Como parte da execução da magia, você faz um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "muda o alcance para pessoal e o alvo para área: esfera com 6m de raio. Você dispara raios pelas pontas dos dedos que afetam todas as criaturas na área.",
              "aumenta": false
            }
          ]
        }
      },
      "ilusao": {
        "criar-ilusao": {
          "name": "Criar Ilusão",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_illusion.jpg",
          "system": {
            "circulo": "1",
            "escola": "ilusao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "resistencia": "Vontade desacredita",
            "custo": "1 PM",
            "description": {
              "value": "Esta magia cria uma ilusão visual (uma criatura, uma parede...) ou sonora (um grito de socorro, um uivo assustador...). A magia cria apenas imagens ou sons simples, com volume equivalente ao tom de voz normal para cada cubo de 1,5m no efeito. Não é possível criar cheiros, texturas ou temperaturas, nem sons complexos, como uma música ou diálogo. Criaturas e objetos atravessam uma ilusão sem sofrer dano, mas a magia pode, por exemplo, esconder uma armadilha ou inimigo. A magia é dissipada se você sair do alcance."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "também pode criar odores e sensações térmicas, que são percebidos a uma distância igual ao dobro do tamanho máximo do efeito. Por exemplo, uma miragem de uma fogueira com 4 cubos de 1,5m poderia emanar calor e cheiro de queimado a até 12m.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "muda o alcance para longo e o efeito para esfera de 30m de raio. Em vez do normal, você cria um som muito alto, equivalente a uma multidão. Criaturas na área lançam magias como se estivessem em uma condição ruim e a CD de testes de Percepção para ouvir aumenta em +10. Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "também criar sensações táteis, como texturas; criaturas que não saibam que é uma ilusão não conseguem atravessá-la sem passar em um teste de Vontade (objetos ainda a atravessam). A ilusão ainda é incapaz de causar ou sofrer dano. Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda a duração para sustentada. Além do normal, você pode gastar uma ação livre para modificar livremente a ilusão (mas não pode acrescentar novos aprimoramentos após lançá-la). Requer 3º círculo.",
              "aumenta": false
            }
          ]
        },
        "disfarce-ilusorio": {
          "name": "Disfarce Ilusório",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_disguise.jpg",
          "system": {
            "circulo": "1",
            "escola": "ilusao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Vontade desacredita",
            "custo": "1 PM",
            "description": {
              "value": "Você muda a aparência do alvo, incluindo seu equipamento. Isso inclui altura, peso, tom de pele, cor de cabelo, timbre de voz etc. O alvo recebe +10 em testes de Enganação para disfarce. O alvo não recebe novas habilidades (você pode ficar parecido com outra raça, mas não ganhará as habilidades dela), nem modifica o equipamento (uma espada longa disfarçada de bordão continua funcionando e causando dano como uma espada)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda o alcance para curto e o alvo para 1 criatura. Uma criatura involuntária pode anular o efeito com um teste de Vontade.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "a ilusão inclui odores e sensações. Isso muda o bônus em testes de Enganação para disfarce para +20.",
              "aumenta": false
            },
            {
              "custo": 3,
              "descricao": "muda o alcance para curto e o alvo para criaturas escolhidas. Cada criatura pode ter uma aparência diferente. Criaturas involuntárias podem anular o efeito com um teste de Vontade. Requer 2º círculo.",
              "aumenta": false
            }
          ]
        },
        "imagem-espelhada": {
          "name": "Imagem Espelhada",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_mirrorimage.jpg",
          "system": {
            "circulo": "1",
            "escola": "ilusao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Três cópias ilusórias suas aparecem. As duplicatas ficam ao seu redor e imitam suas ações, tornando difícil para um inimigo saber quem atacar. Você recebe +6 na Defesa. Cada vez que um ataque contra você erra, uma das imagens desaparece e o bônus na Defesa diminui em 2. Um oponente deve ver as cópias para ser confundido. Se você estiver invisível, ou o atacante fechar os olhos, você não recebe o bônus (mas o atacante ainda sofre penalidades normais por não enxergar)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o número de cópias em +1 (e o bônus na Defesa em +2).",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "além do normal, toda vez que uma cópia é destruída, emite um clarão de luz. A criatura que destruiu a cópia fica ofuscada por uma rodada. Requer 2º círculo.",
              "aumenta": false
            }
          ]
        },
        "leque-cromatico": {
          "name": "Leque Cromático",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane03.jpg",
          "system": {
            "circulo": "1",
            "escola": "ilusao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "cone de 4,5m",
            "resistencia": "Vontade parcial",
            "custo": "1 PM",
            "description": {
              "value": "Um cone de luzes brilhantes surge das suas mãos, deixando os animais e humanoides na área atordoados por 1 rodada (apenas uma vez por cena, Vontade anula) e ofuscados pela cena."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "além do normal, as criaturas afetadas ficam vulneráveis pela cena.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "também afeta espíritos e monstros na área. Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "também afeta construtos, espíritos, monstros e mortos-vivos na área. Requer 3º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "necromancia": {
        "amedrontar": {
          "name": "Amedrontar",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathscream.jpg",
          "system": {
            "circulo": "1",
            "escola": "necromancia",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 animal ou humanoide",
            "resistencia": "Vontade parcial",
            "custo": "1 PM",
            "description": {
              "value": "O alvo é envolvido por energias sombrias e assustadoras. Se falhar na resistência, fica Apavorado por 1 rodada, depois Abalado. Se passar, fica abalado por 1d4 rodadas."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "alvos que falhem na resistência ficam apavorados por 1d4+1 rodadas, em vez de apenas 1.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "muda o alvo para 1 criatura.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "afeta todos os alvos válidos a sua escolha dentro do alcance.",
              "aumenta": false
            }
          ]
        },
        "raio-do-enfraquecimento": {
          "name": "Raio do Enfraquecimento",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_rayofweakness.jpg",
          "system": {
            "circulo": "1",
            "escola": "necromancia",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 criatura",
            "resistencia": "Fortitude parcial",
            "custo": "1 PM",
            "description": {
              "value": "Você dispara um raio púrpura que drena as forças do alvo. Se falhar na resistência, o alvo fica Fatigado. Se passar, fica Vulnerável. Note que, como efeitos de magia não acumulam, lançar esta magia duas vezes contra o mesmo alvo não irá deixá-lo exausto."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "em vez do normal, se falhar na resistência o alvo fica exausto. Se passar, fica fatigado. Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "em vez do normal, se falhar na resistência o alvo fica exausto. Se passar, fica fatigado. Muda o alvo para criaturas escolhidas. Requer 3º círculo.",
              "aumenta": false
            }
          ]
        },
        "vitalidade-fantasma": {
          "name": "Vitalidade Fantasma",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_lifedrain.jpg",
          "system": {
            "circulo": "1",
            "escola": "necromancia",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Você suga energia vital da terra, recebendo 2d10 pontos de vida temporários. Os PV temporários desaparecem ao final da cena."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta os PV temporários recebidos em +1d10. Caso a magia cause dano, em vez disso aumenta o dano causado em +1d10.",
              "aumenta": true
            },
            {
              "custo": 5,
              "descricao": "muda o alvo para área: esfera com 6m de raio centrada em você e a resistência para Fortitude reduz à metade. Em vez do normal, você suga energia das criaturas vivas na área, causando 1d10 pontos de dano de trevas e recebendo PV temporários iguais ao dano total causado. Os PV temporários desaparecem ao final da cena. Requer 2º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "transmutacao": {
        "primor-atletico": {
          "name": "Primor Atlético",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_agility.jpg",
          "system": {
            "circulo": "1",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Você modifica os limites físicos do alvo, que recebe deslocamento +9m e +10 em testes de Atletismo."
            }
          },
          "aprimoramentos": [
            {
              "custo": 3,
              "descricao": "além do normal, ao fazer testes de perícias baseadas em Força, Destreza ou Constituição, o alvo pode rolar dois dados e escolher o melhor. Não afeta testes de ataque ou resistência. Requer 2º círculo.",
              "aumenta": false
            }
          ]
        },
        "queda-suave": {
          "name": "Queda Suave",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_featherfall.jpg",
          "system": {
            "circulo": "1",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "reaction"
            },
            "alcance": "curto",
            "duracao": "até chegar ao solo ou cena, o que vier primeiro",
            "alvo": "1 criatura ou objeto com até 200kg",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "O alvo cai lentamente. A velocidade da queda é reduzida para 18m por rodada — o suficiente para não causar dano. Como lançar esta magia é uma reação, você pode lançá-la rápido o bastante para salvar a si ou um aliado de quedas inesperadas. Lançada sobre um projétil — como uma flecha ou uma rocha largada do alto de um penhasco —, a magia faz com que ele cause metade do dano normal, devido à lentidão. Queda Suave só funciona em criaturas e objetos em queda livre ou similar; a magia não vai frear um golpe de espada ou o mergulho rasante de um atacante voador."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda o alvo para até 10 criaturas ou objetos.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "aumenta a categoria de tamanho do alvo em uma",
              "aumenta": false
            }
          ]
        },
        "transmutar-objetos": {
          "name": "Transmutar Objetos",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane04.jpg",
          "system": {
            "circulo": "1",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "matéria-prima, como madeira, rochas, ossos",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "A magia transforma matéria bruta para moldar um novo objeto. Você pode usar matéria-prima mundana para criar um objeto de tamanho Pequeno ou menor e preço máximo de T$ 25, como um balde ou uma espada. O objeto reverte à matéria-prima no final da cena, ou se for tocado por um objeto feito de chumbo. Esta magia não pode ser usada para criar objetos consumíveis, como alimentos ou itens alquímicos, nem objetos com mecanismos complexos, como bestas ou armas de fogo. Transmutar Objetos anula Despedaçar."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o limite de tamanho do objeto em uma categoria.",
              "aumenta": true
            },
            {
              "custo": 3,
              "descricao": "aumenta o preço máximo do objeto criado em um fator de x10 (+3 PM por T$ 250 de preço, +6 PM por T$ 2.500 de preço, e assim por diante).",
              "aumenta": true
            },
            {
              "custo": 5,
              "descricao": "muda o alvo para 1 objeto mundano e a duração para instantânea. Em vez do normal, você cura todos os PV do alvo, restaurando o objeto totalmente. Este aprimoramento está sujeito aos limites de tamanho e preço do objeto conforme a magia original e não funciona se o objeto tiver sido completamente destruído (queimado até virar cinzas ou desintegrado, por exemplo). Requer 3º círculo.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "como o aprimoramento anterior, mas passa a afetar itens mágicos.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "aumentar a cura em +1d8.",
              "aumenta": true
            }
          ]
        }
      }
    },
    "2-circulo": {
      "abjuracao": {
        "campo-de-forca": {
          "name": "Campo de Força",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/campo-de-forca.webp",
          "system": {
            "circulo": "2",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Esta magia cria uma película protetora sobre você. Você recebe 30 pontos de vida temporários."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "muda a execução para reação e a duração para instantânea. Em vez do normal, você recebe redução 30 contra o próximo dano que sofrer.",
              "aumenta": false
            },
            {
              "custo": 7,
              "descricao": "muda o alcance para curto, o alvo para outra criatura ou objeto Enorme ou menor e a duração para sustentada. Em vez do normal, cria uma esfera imóvel e tremeluzente ao redor do alvo. Nenhuma criatura, objeto ou efeito de dano pode passar pela esfera, embora criaturas possam respirar normalmente. Criaturas na área podem fazer um teste de Reflexos para evitar serem aprisionadas e sempre que você se concentrar. Requer 4º círculo.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "como o aprimoramento acima, mas tudo dentro da esfera fica praticamente sem peso. Uma vez por rodada, você pode gastar uma ação livre para flutuar a esfera e seu conteúdo 9m em uma direção. Requer 4º círculo.",
              "aumenta": false
            },
            {
              "custo": 7,
              "descricao": "muda os PV temporários ou a RD para 70. Requer 4º círculo.",
              "aumenta": false
            }
          ]
        },
        "refugio": {
          "name": "Refúgio",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/refugio.webp",
          "system": {
            "circulo": "2",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "curto",
            "duracao": "1 dia",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Esta magia cria um domo imóvel e quase opaco por fora, mas transparente pelo lado de dentro. Ele protege contra calor, frio e forças pequenas, mas não contra qualquer coisa capaz de causar dano. Assim, o domo protege contra neve e vento comuns, mas não contra uma flecha ou Bola de Fogo. Porém, como o domo é quase opaco, qualquer criatura dentro dele tem camuflagem total contra ataques vindos de fora. Criaturas podem entrar e sair do domo livremente. Descansar dentro do Refúgio concede recuperação normal de PV e PM."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "além do normal, os limites do domo são envoltos por uma fumaça escura e espessa, que impede criaturas do lado de fora de enxergar ou ouvir o que está dentro. Criaturas do lado de dentro enxergam e ouvem normalmente o que está do lado de fora. A fumaça também bloqueia magias de adivinhação.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "em vez do normal, cria uma mansão extradimensional que comporta até 100 criaturas Médias, com quartos luxuosos, comida e bebida e dez servos fantasmagóricos (como na magia Servos Invisíveis). Descansar na mansão concede recuperação luxuosa (recupera PV e PM igual ao triplo do nível). A mansão tem uma única entrada, uma porta feita de luz. Você pode deixá-la visível ou invisível como uma ação livre e apenas criaturas escolhidas por você podem passar. Requer 4º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "adivinhacao": {
        "ligacao-telepatica": {
          "name": "Ligação Telepática",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/ligacao-telepatica.webp",
          "system": {
            "circulo": "2",
            "escola": "adv",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "duracao": "1 dia",
            "alvo": "2 criaturas voluntárias",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Você cria um elo mental entre duas criaturas com Inteligência -3 ou maior (você pode ser uma delas). As criaturas podem se comunicar independente de idioma ou distância, mas não em mundos diferentes."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o número de alvos em +1.",
              "aumenta": true
            }
          ]
        },
        "localizacao": {
          "name": "Localização",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/localizacao.webp",
          "system": {
            "circulo": "2",
            "escola": "adv",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "esfera com 90m de raio",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Esta magia pode encontrar uma criatura ou objeto a sua escolha. Você pode pensar em termos gerais (\"um elfo\", \"algo de metal\") ou específicos (\"Gwen, a elfa\", \"uma espada longa\"). A magia indica a direção e distância da criatura ou objeto mais próximo desse tipo, caso esteja ao alcance. Você pode movimentar-se para continuar procurando. Procurar algo muito específico (\"a espada longa encantada do Barão Rulyn\") exige que você tenha em mente uma imagem precisa do objeto; caso a imagem não seja muito próxima da verdade, a magia falha, mas você gasta os PM mesmo assim. Esta magia pode ser bloqueada por uma fina camada de chumbo."
            }
          },
          "aprimoramentos": [
            {
              "custo": 5,
              "descricao": "aumenta a área em um fator de 10 (90m para 900m, 900m para 9km e assim por diante).",
              "aumenta": true
            }
          ]
        },
        "mapear": {
          "name": "Mapear",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/mapear.webp",
          "system": {
            "circulo": "2",
            "escola": "adv",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "superfície ou objeto plano, como uma mesa ou pergaminho",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Uma fagulha percorre a superfície afetada, queimando-a enquanto esboça um mapa da região onde o conjurador está. Se você conhece o lugar, o mapa será completo. Caso contrário, apresentará apenas um esboço geral, além de um ponto de referência (para possibilitar localização) e um lugar de interesse, ambos definidos pelo mestre. A região representada no mapa tem tamanho máximo de um quadrado de 10km de lado. Caso você esteja dentro de uma construção, o mapa mostrará o andar no qual você se encontra."
            }
          }
        }
      },
      "convocacao": {
        "amarras-etereas": {
          "name": "Amarras Etéreas",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/amarras-etereas.webp",
          "system": {
            "circulo": "2",
            "escola": "convocacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "1 criatura",
            "resistencia": "Reflexos anula",
            "custo": "3 PM",
            "description": {
              "value": "Três laços de energia surgem e se enroscam no alvo, deixando-o agarrado. A vítima pode tentar se livrar, gastando uma ação padrão para fazer um teste de Atletismo (CD igual à da magia). Se passar, destrói um laço, mais um laço adicional para cada 5 pontos pelos quais superou a CD. Os laços também podem ser atacados e destruídos: cada um tem Defesa 10, 10 PV, RD 5 e imunidade a dano mágico. Se todos os laços forem destruídos, a magia é dissipada. Por serem feitos de energia, os laços afetam criaturas incorpóreas."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o número de alvos em +1.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "aumenta o número de laços em um alvo a sua escolha em +1. (bônus máximo limitado pelo círculo máximo de magia que você pode lançar)",
              "aumenta": true
            }
          ]
        },
        "montaria-arcana": {
          "name": "Montaria Arcana",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/montaria-arcana.webp",
          "system": {
            "circulo": "2",
            "escola": "convocacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "duracao": "1 dia",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Esta magia convoca um parceiro cavalo (ou pônei) de guerra veterano. Sua aparência é de um animal negro com crina e cauda cinzentas e cascos feitos de fumaça, mas você pode mudá-la se quiser. Além dos benefícios normais, a Montaria Arcana pode atravessar terreno difícil sem redução em seu deslocamento.Você pode usar Misticismo no lugar de Cavalgar para efeitos desta montaria (incluindo ser considerado treinado)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "além do normal, criaturas do tipo animal em alcance curto da montaria devem fazer um teste de Vontade. Se passarem, ficam abaladas pela cena; se falharem, ficam apavoradas por 1d4 rodadas, depois abaladas pela cena.",
              "aumenta": false
            }
          ]
        },
        "salto-dimensional": {
          "name": "Salto Dimensional",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/salto-dimensional.webp",
          "system": {
            "circulo": "2",
            "escola": "convocacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Esta magia transporta você para outro lugar dentro do alcance. Você não precisa perceber nem ter linha de efeito ao seu destino, podendo simplesmente imaginá-lo. Por exemplo, pode se transportar 3m adiante para ultrapassar uma porta fechada. Uma vez transportadas, criaturas não podem agir até a rodada seguinte. Esta magia não permite que você apareça dentro de um corpo sólido; se o ponto de chegada não tem espaço livre, você ressurge na área vazia mais próxima."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "muda o alcance para médio.",
              "aumenta": false
            },
            {
              "custo": 1,
              "descricao": "muda o alvo para você e uma criatura voluntária. Você pode escolher este aprimoramento mais vezes para aumentar o número de alvos adicionais em +1, mas deve estar tocando todos os alvos.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "muda a execução para reação. Em vez do normal, você salta para um espaço adjacente (1,5m), recebendo +5 na Defesa e em testes de Reflexos contra um ataque ou efeito que esteja prestes a atingi-lo. Após a resolução do efeito, salta para um espaço adjacente (1,5m).",
              "aumenta": false
            }
          ]
        },
        "servos-invisiveis": {
          "name": "Servos Invisíveis",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/servos-invisiveis.webp",
          "system": {
            "circulo": "2",
            "escola": "convocacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "longo",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Você cria até três servos invisíveis e silenciosos, capazes de realizar tarefas simples como apanhar lenha, colher frutos, varrer o chão ou alimentar um cavalo. Os servos podem ser usados para manter arrumada e organizada uma mansão ou pequena torre ou para preparar um acampamento nos ermos para você e seus aliados (veja a perícia Sobrevivência, na página 123). Eles também podem ajudá-lo em tarefas mais complexas, como fazer uma pesquisa ou preparar uma poção, mas isso consome sua energia mágica. Você pode \"gastar\" um servo para receber um bônus não cumulativo de +2 em um teste de perícia (exceto testes de ataque e resistência). Os servos não são criaturas reais; não podem lutar, nem resistir a qualquer dano ou efeito que exija um teste de resistência ou teste oposto — falharão automaticamente no teste e serão destruídos."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o número de servos conjurados em 1.",
              "aumenta": true
            }
          ]
        }
      },
      "encantamento": {
        "desespero-esmagador": {
          "name": "Desespero Esmagador",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/desespero-esmagador.webp",
          "system": {
            "circulo": "2",
            "escola": "encantamento",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "Cone de 6m",
            "resistencia": "Vontade parcial",
            "custo": "3 PM",
            "description": {
              "value": "Humanoides na área são acometidos de grande tristeza, adquirindo as condições Fraco e Frustrado. Se passarem na resistência, adquirem essas condições por uma rodada."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "em vez do normal, as condições adquiridas são debilitado e esmorecido.",
              "aumenta": false
            }
          ]
        },
        "sussurros-insanos": {
          "name": "Sussurros Insanos",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/sussurros-insanos.webp",
          "system": {
            "circulo": "2",
            "escola": "encantamento",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 humanoide",
            "resistencia": "Vontade anula",
            "custo": "3 PM",
            "description": {
              "value": "Você murmura palavras desconexas que afetam a mente do alvo. O alvo fica Confuso."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o número de alvos em +1.",
              "aumenta": true
            },
            {
              "custo": 12,
              "descricao": "muda o alvo para criaturas escolhidas. Requer 5º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "evocacao": {
        "bola-de-fogo": {
          "name": "Bola de Fogo",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/bola-de-fogo.webp",
          "system": {
            "circulo": "2",
            "escola": "evocacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "esfera com 6m de raio",
            "resistencia": "Reflexos reduz à metade",
            "custo": "3 PM",
            "description": {
              "value": "Esta famosa magia de ataque cria uma poderosa explosão, causando 6d6 pontos de dano de fogo em todas as criaturas e objetos livres na área."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o dano em +2d6.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "muda a área para efeito de esfera flamejante com tamanho Médio e a duração para cena. Em vez do normal, cria uma esfera flamejante com 1,5m de diâmetro que causa 3d6 pontos de dano a qualquer criatura no mesmo espaço. Você pode gastar uma ação de movimento para fazer a esfera voar 9m em qualquer direção. Ela é imune a dano, mas pode ser apagada com água. Uma criatura só pode sofrer dano da esfera uma vez por rodada.",
              "aumenta": false
            }
          ]
        },
        "flecha-acida": {
          "name": "Flecha Ácida",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/flecha-acida.webp",
          "system": {
            "circulo": "2",
            "escola": "evocacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "1 criatura ou objeto",
            "resistencia": "Reflexos parcial",
            "custo": "3 PM",
            "description": {
              "value": "Você dispara um projétil que causa 4d6 pontos de dano de ácido. Se falhar no teste de resistência, o alvo também fica coberto por um muco corrosivo, sofrendo mais 2d6 de dano de ácido no início de seus dois próximos turnos. Se lançada contra um objeto que não esteja em posse de uma criatura a magia causa dano dobrado e ignora a RD do objeto."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "além do normal, se o alvo coberto pelo muco ácido estiver usando armadura ou escudo, o item é corroído. Isso reduz o bônus na Defesa do item em 1 ponto permanentemente. O item pode ser consertado, restaurando seu bônus (veja Ofício, na página 121).",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "aumenta a redução na Defesa em +1.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "aumenta o dano inicial e o dano por rodada em +1d6.",
              "aumenta": true
            }
          ]
        },
        "relampago": {
          "name": "Relâmpago",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/relampago.webp",
          "system": {
            "circulo": "2",
            "escola": "evocacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "linha",
            "resistencia": "Reflexos reduz à metade",
            "custo": "3 PM",
            "description": {
              "value": "Você dispara um poderoso raio que causa 6d6 pontos de dano de eletricidade em todas as criaturas e objetos livres na área."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o dano em +2d6.",
              "aumenta": true
            }
          ]
        },
        "sopro-das-uivantes": {
          "name": "Sopro das Uivantes",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/sopro-das-uivantes.webp",
          "system": {
            "circulo": "2",
            "escola": "evocacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "cone de 9m",
            "resistencia": "Fortitude parcial",
            "custo": "3 PM",
            "description": {
              "value": "Você sopra ar gélido que causa 4d6 pontos de dano de frio (Fortitude reduz à metade). Criaturas de tamanho Médio ou menor que falhem na resistência ficam caídas e são empurradas 6m na direção oposta. Se houver uma parede ou outro objeto sólido (mas não uma criatura) no caminho, a criatura para de se mover, mas sofre +2d6 pontos de dano de impacto."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o dano de frio em +2d6.",
              "aumenta": true
            }
          ]
        }
      },
      "ilusao": {
        "aparencia-perfeita": {
          "name": "Aparência Perfeita",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/aparencia-perfeita.webp",
          "system": {
            "circulo": "2",
            "escola": "ilusao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Esta magia lhe concede um rosto idealizado, porte físico garboso, voz melodiosa e olhar sedutor, deixando-o mais atraente e confiável. Enquanto a magia estiver ativa, seu Carisma torna-se 20 (ou recebe um bônus de +4, caso seja 20 ou maior) e você recebe +5 nos testes de Diplomacia e Enganação. Quando a magia acaba, quaisquer observadores percebem a mudança e tendem a suspeitar de você. Da mesma maneira, pessoas que o viram sob o efeito da magia sentirão que \"algo está errado\" ao vê-lo em condições normais. Quando a cena acabar, você pode gastar os PM da magia novamente como uma ação livre para mantê-la ativa. Este efeito não fornece PV ou PM adicionais."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "muda o alcance para toque e o alvo para 1 humanoide",
              "aumenta": false
            }
          ]
        },
        "camuflagem-ilusoria": {
          "name": "Camuflagem Ilusória",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/camuflagem-ilusoria.webp",
          "system": {
            "circulo": "2",
            "escola": "ilusao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "O alvo fica com sua imagem nublada, como se vista através de um líquido, recebendo os efeitos de camuflagem leve."
            }
          },
          "aprimoramentos": [
            {
              "custo": 7,
              "descricao": "muda o alcance para curto e o alvo para criaturas escolhidas. Requer 4º círculo.",
              "aumenta": false
            }
          ]
        },
        "esculpir-sons": {
          "name": "Esculpir Sons",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/esculpir-sons.webp",
          "system": {
            "circulo": "2",
            "escola": "ilusao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "1 criatura ou objeto",
            "resistencia": "Vontade anula",
            "custo": "3 PM",
            "description": {
              "value": "Esta magia altera os sons emitidos pelo alvo. Ela não é capaz de criar sons, mas pode omiti-los (como fazer uma carroça ficar silenciosa) ou transformá-los (como fazer uma pessoa ficar com voz de passarinho). Você não pode criar sons que não conhece (não pode fazer uma criatura falar num idioma que não conheça). Uma vez que escolha a alteração, ela não pode ser mudada. Um conjurador que tenha a voz modificada drasticamente não poderá lançar magias."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o número de alvos em +1. Todas as criaturas e objetos devem ser afetadas da mesma forma.",
              "aumenta": true
            }
          ]
        },
        "invisibilidade": {
          "name": "Invisibilidade",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/invisibilidade.webp",
          "system": {
            "circulo": "2",
            "escola": "ilusao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "free"
            },
            "alcance": "pessoal",
            "duracao": "1 rodada",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "O alvo fica invisível (incluindo seu equipamento). Um personagem invisível recebe camuflagem total, +10 em testes de Furtividade contra ouvir e criaturas que não possam vê-lo ficam desprevenidas contra seus ataques. A magia termina se o alvo faz uma ação hostil contra uma criatura. Ações contra objetos livres não dissipam a Invisibilidade (você pode tocar ou apanhar objetos que não estejam sendo segurados por outras criaturas). Causar dano indiretamente — por exemplo, acendendo o pavio de um barril de pólvora que vai detonar mais tarde — não é considerado um ataque. Objetos soltos pelo alvo voltam a ser visíveis e objetos apanhados por ele ficam invisíveis. Qualquer parte de um item carregado que se estenda além de seu alcance corpo a corpo natural se torna visível. Uma luz nunca fica invisível (mesmo que sua fonte seja)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "muda a execução para ação padrão, o alcance para toque e o alvo para 1 criatura ou um objeto Grande ou menor.",
              "aumenta": false
            },
            {
              "custo": 7,
              "descricao": "muda a execução para ação padrão, o alcance para toque e o alvo para 1 criatura. A magia não é dissipada caso o alvo faça um ação hostil. Requer 4º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "necromancia": {
        "cranio-voador": {
          "name": "Crânio Voador",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/cranio-voador.webp",
          "system": {
            "circulo": "2",
            "escola": "necromancia",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "1 criatura",
            "resistencia": "Fortitude reduz à metade",
            "custo": "3 PM",
            "description": {
              "value": "Esta magia cria um crânio envolto em energia negativa. Quando atinge o alvo, causa 4d8+4 pontos de dano de trevas e se desfaz emitindo um som horrendo, deixando abalado o alvo e todos os inimigos num raio de 3m dele (criaturas já abaladas ficam apavoradas por 1d4 rodadas). Passar no teste de resistência diminui o dano à metade e evita a condição (as demais criaturas na área também tem direito ao teste de resistência, para evitar a condição). Abalado Apavorado"
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o dano em +1d8+1.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "aumenta o número de alvos em +1.",
              "aumenta": true
            }
          ]
        },
        "toque-vampirico": {
          "name": "Toque Vampírico",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/toque-vampirico.webp",
          "system": {
            "circulo": "2",
            "escola": "necromancia",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Fortitude reduz à metade",
            "custo": "3 PM",
            "description": {
              "value": "Sua mão brilha com energia sombria, causando 6d6 pontos de dano de trevas. Você recupera pontos de vida iguais à metade do dano causado (se causou algum dano)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda a resistência para nenhum. Como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia, e recupera pontos de vida iguais à metade do dano da magia.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "aumenta o dano em +2d6.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "muda o alcance para pessoal, o alvo para você e a duração para cena. Em vez do normal, a cada rodada você pode gastar uma ação padrão para tocar 1 criatura e causar 3d6 pontos de dano. Você recupera pontos de vida iguais à metade do dano causado. Requer 3º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "transmutacao": {
        "alterar-tamanho": {
          "name": "Alterar Tamanho",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/alterar-tamanho.webp",
          "system": {
            "circulo": "2",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "duracao": "1 dia",
            "alvo": "1 objeto",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Esta magia aumenta ou diminui o tamanho de um item mundano em até três categorias (um objeto Enorme vira Pequeno, por exemplo). Você também pode mudar a consistência do item, deixando-o rígido como pedra ou flexível como seda (isso não altera sua RD ou PV, apenas suas propriedades físicas). Se lançar a magia num objeto de uma criatura involuntária, ela pode fazer um teste de Vontade para anulá-la."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "aumenta o número de alvos em +1.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo aumenta uma categoria de tamanho (seu equipamento se ajusta ao novo tamanho). O alvo também recebe Força +2. Um alvo involuntário pode fazer um teste de Fortitude para negar o efeito.",
              "aumenta": false
            },
            {
              "custo": 7,
              "descricao": "muda o alcance para toque, o alvo para 1 criatura, a duração para permanente e a resistência para Fortitude anula. Em vez do normal, se falhar na resistência o alvo e seu equipamento têm seu tamanho mudado para Minúsculo. O alvo também tem seu valor de Força reduzido a 1 e suas formas de deslocamento reduzidas a 3m. Requer 4o círculo.",
              "aumenta": false
            }
          ]
        },
        "metamorfose": {
          "name": "Metamorfose",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/metamorfose.webp",
          "system": {
            "circulo": "2",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Você muda sua aparência e forma — incluindo seu equipamento — para qualquer outra criatura, existente ou imaginada. Independentemente da forma escolhida, você recebe +20 em testes de Enganação para disfarce. Características não mencionadas não mudam. Se mudar para uma forma humanoide, pode mudar o tipo de dano (entre corte, impacto e perfuração) de suas armas (se usa uma maça e transformá- la em espada longa, ela pode causar dano de corte, por exemplo). Se quiser, pode assumir uma forma humanoide com uma categoria de tamanho acima ou abaixo da sua; nesse caso aplique os modificadores em Furtividade e testes de manobra. Se mudar para outras formas, você pode escolher uma Forma Selvagem do druida (veja no Capítulo 1). Nesse caso você não pode atacar com suas armas, falar ou lançar magias até voltar ao normal, mas recebe uma ou mais armas naturais e os bônus da forma selvagem escolhida."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "a forma escolhida recebe uma habilidade de sentidos entre faro, visão na penumbra e visão no escuro.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "se mudar para formas não humanoides, pode escolher uma Forma Selvagem Aprimorada. Requer 3º círculo.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "se mudar para formas não humanoides, pode escolher uma Forma Selvagem Superior. Requer 4º círculo.",
              "aumenta": false
            },
            {
              "custo": 12,
              "descricao": "além do normal, no início de seus turnos o alvo pode mudar de forma novamente, como uma ação livre, fazendo novas escolhas. Requer 5º círculo.",
              "aumenta": false
            }
          ]
        },
        "velocidade": {
          "name": "Velocidade",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/velocidade.webp",
          "system": {
            "circulo": "2",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "O alvo pode realizar uma ação padrão ou de movimento adicional por turno. Esta ação não pode ser usada para lançar magias e ativar engenhocas."
            }
          },
          "aprimoramentos": [
            {
              "custo": 7,
              "descricao": "muda o alvo para criaturas escolhidas no alcance. Requer 4º círculo.",
              "aumenta": false
            },
            {
              "custo": 7,
              "descricao": "muda o alcance para pessoal e o alvo para você. Você acelera sua mente, além de seu corpo. A ação adicional pode ser usada para lançar magias e ativar engenhocas. Requer 4º círculo.",
              "aumenta": false
            },
            {
              "custo": 0,
              "descricao": "muda a duração para cena. A ação adicional que você pode fazer é apenas de movimento. Uma criatura só pode receber uma ação adicional por turno como efeito de Velocidade.",
              "aumenta": false
            }
          ]
        }
      }
    },
    "3-circulo": {
      "abjuracao": {
        "ancora-dimensional": {
          "name": "Âncora Dimensional",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/ancora-dimensional.webp",
          "system": {
            "circulo": "3",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 criatura ou objeto",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "O alvo é envolvido por um campo de força cor de esmeralda que impede qualquer forma de movimento planar ou extradimensional. Isso inclui magias de teletransporte (como Salto Dimensional e Teletransporte), convocação que mova o alvo (como ser banido ou convocado), viagens astrais, movimento através de portais dimensionais e a habilidade incorpóreo. O alvo não pode deixar o plano atual por nenhum meio mágico, mas ainda pode se mover normalmente dentro do plano. Criaturas incorpóreas afetadas tornam-se temporariamente corpóreas enquanto durar o efeito."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda o alcance para médio, a área para esfera com 3m de raio e o alvo para criaturas escolhidas.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "muda o efeito para criar um fio de energia cor de esmeralda que prende o alvo a um ponto no espaço dentro do alcance. O ponto precisa ser fixo, mas não precisa de nenhum apoio ou superfície (pode simplesmente flutuar no ar). O alvo não pode se afastar mais de 3m do ponto, nem fisicamente, nem com movimento planar. O fio possui 20 PV e resistência a dano 20 (mas pode ser dissipado por efeitos que libertam criaturas, como o Julgamento Divino: Libertação do paladino).",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "muda o efeito para criar um fio de energia cor de esmeralda que prende o alvo a um ponto no espaço dentro do alcance. O ponto precisa ser fixo, mas não precisa de nenhum apoio ou superfície (pode simplesmente flutuar no ar). O alvo não pode se afastar mais de 3m do ponto, nem fisicamente, nem com movimento planar. O fio possui 20 PV e redução de dano 40 (mas pode ser dissipado por efeitos que libertam criaturas, como o Julgamento Divino: Libertação do paladino).",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "muda o alvo para área de cubo de 9m, a duração para permanente e adiciona componente material (chave de esmeralda no valor de T$ 2.000). Em vez do normal, nenhum tipo de movimento planar pode ser feito para entrar ou sair da área.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "muda o alcance para médio, a área para esfera de 3m de raio e o alvo para criaturas escolhidas. Cria um fio de energia (veja acima) que prende todos os alvos ao centro da área.",
              "aumenta": false
            }
          ]
        },
        "dificultar-deteccao": {
          "name": "Dificultar Detecção",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/dificultar-deteccao.webp",
          "system": {
            "circulo": "3",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "duracao": "1 dia",
            "alvo": "1 criatura ou objeto",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Esta magia oculta a presença do alvo contra qualquer meio mágico de detecção, inclusive detectar magia. Um conjurador que lance uma magia de adivinhação para detectar a presença ou localização do alvo deve fazer um teste de Vontade. Se falhar, a magia não funciona, mas os PM são gastos mesmo assim. Se for lançada sobre uma criatura, Dificultar Detecção protege tanto a criatura quanto seu equipamento."
            }
          },
          "aprimoramentos": [
            {
              "custo": 4,
              "descricao": "muda o alvo para área de cubo de 9m. Qualquer criatura ou objeto na área recebe o efeito da magia enquanto estiver dentro dela.",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "muda a duração para 1 semana.",
              "aumenta": false
            }
          ]
        },
        "globo-de-invulnerabilidade": {
          "name": "Globo de Invulnerabilidade",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/globo-de-invulnerabilidade.webp",
          "system": {
            "circulo": "3",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Você é envolto por uma esfera mágica brilhante com 3m de raio, que detém qualquer magia de 2º círculo ou menor. Nenhuma magia pode ser lançada contra um alvo dentro do globo e magias de área não o penetram. No entanto, magias ainda podem ser lançadas de dentro para fora. Uma magia que dissipa outras magias só dissipa o globo se for usada diretamente sobre você, não o afetando se usada em área. Efeitos mágicos não são dissipados quando entram na esfera, apenas suprimidos (voltam a funcionar fora do globo, caso sua duração não tenha acabado). O globo é imóvel e não tem efeito sobre criaturas ou objetos. Após lançá-lo, você pode entrar ou sair livremente."
            }
          },
          "aprimoramentos": [
            {
              "custo": 4,
              "descricao": "muda o efeito para afetar magias de até 3º círculo. Requer 4º círculo.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "muda o efeito para afetar magias de até 4º círculo. Requer 5º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "adivinhacao": {
        "contato-extraplanar": {
          "name": "Contato Extraplanar",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/contato-extraplanar.webp",
          "system": {
            "circulo": "3",
            "escola": "adv",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "pessoal",
            "duracao": "1 dia",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Sua mente viaja até outro plano de existência, onde entra em contato com seres extraplanares como gênios e demônios. Você firma um contrato com uma dessas entidades para que o auxilie durante o dia, em troca de se alimentar de seu mana. Quando a magia é lançada, você recebe 6d6 dados de auxílio. Enquanto a magia durar, sempre que for realizar um teste de perícia, você pode gastar 1d6 (mais 1d6 para cada círculo de magias acima do 3º que puder lançar) e adicionar o resultado como bônus no teste. No entanto, sempre que rolar um \"6\" num desses dados, a entidade \"suga\" 1 PM de você. A magia termina se você gastar todos os dados, ficar sem PM ou no fim do dia (o que acontecer primeiro)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o número de dados de auxílio em +1.",
              "aumenta": true
            },
            {
              "custo": 8,
              "descricao": "Muda os dados de auxílio para d12. Sempre que rolar um resultado 12 num desses d12, a entidade \"suga\" 2 PM de você. Requer 4º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "convocacao": {
        "convocacao-instantanea": {
          "name": "Convocação Instantânea",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/convocacao-instantanea.webp",
          "system": {
            "circulo": "3",
            "escola": "convocacao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "any",
            "alvo": "1 objeto de 2 espaços",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Você invoca um objeto de qualquer lugar para sua mão. O item deve ter sido previamente preparado com uma runa ou marca pessoal sua (ao custo de T$ 5). A magia não funciona se o objeto estiver com outra criatura, mas você saberá onde ele está e quem o está carregando (ou sua descrição física, caso não conheça a criatura)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "além do normal, até 1 hora após ter lançado a magia, você pode gastar uma ação de movimento para enviar o objeto de volta para o local em que ele estava antes.",
              "aumenta": false
            },
            {
              "custo": 1,
              "descricao": "muda o alvo para um baú Médio, a duração para permanente e adiciona sacrifício de 1 PM. Em vez do normal, você esconde o baú alvo no Etér Entre Mundos, com até 20 espaços de equipamento. A magia faz com que qualquer objeto caiba no baú, independentemente do seu tamanho. Uma vez escondido, você pode convocar o baú para um espaço livre adjacente, ou de volta para o Etér, com uma ação padrão. Componente material: baú construído com matéria-prima da melhor qualidade (T$ 1.000). Você deve ter em mãos uma miniatura do baú, no valor de T$ 100, para invocar o baú verdadeiro.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "aumenta o número de alvos em +1.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "muda o alvo para 1 objeto de até 10 espaços. Um objeto muito grande ou pesado para aparecer em suas mãos surge em um espaço adjacente a sua escolha.",
              "aumenta": true
            }
          ]
        },
        "enxame-rubro": {
          "name": "Enxame Rubro",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/enxame-rubro.webp",
          "system": {
            "circulo": "3",
            "escola": "convocacao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "resistencia": "Reflexos reduz à metade",
            "custo": "6 PM",
            "description": {
              "value": "Você conjura um enxame de pequenas criaturas corrosivas da Tormenta que ocupa um quadrado de 3m de lado. O enxame pode passar pelo espaço de outras criaturas e não impede que outras criaturas entrem no espaço dele, mas é perigoso fazê-lo. No final de cada um de seus turnos, o enxame causa 4d12 pontos de dano de ácido a qualquer criatura que esteja ocupando o mesmo espaço que ele. As criaturas afetadas podem fazer um teste de Reflexos para reduzir o dano à metade. Você pode gastar uma ação de movimento para mover o enxame até 12m em qualquer direção. O enxame persiste enquanto você mantiver concentração na magia."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "além do normal, uma criatura que falhe no teste de Reflexos fica agarrada (o enxame escala e cobre o corpo dela). A criatura pode gastar uma ação padrão e fazer um teste de Acrobacia ou Atletismo para escapar. Se você mover o enxame, a criatura fica livre.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "aumenta o dano em +1d12.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "muda o dano para trevas.",
              "aumenta": false
            },
            {
              "custo": 3,
              "descricao": "o enxame vira Enorme (quadrado de 6m de lado).",
              "aumenta": false
            },
            {
              "custo": 3,
              "descricao": "o enxame ganha deslocamento de voo 18m e passa a ocupar um cubo ao invés de um quadrado.",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "o enxame inclui parasitas inchados que explodem e criam novos enxames. No início de cada um de seus turnos, role 1d6. Em um resultado 5 ou 6, um novo enxame surge adjacente a um já existente à sua escolha. Você pode mover todos os enxames com uma única ação de movimento, mas eles não podem ocupar o mesmo espaço. Requer 4º círculo.",
              "aumenta": false
            }
          ]
        },
        "teletransporte": {
          "name": "Teletransporte",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/teletransporte.webp",
          "system": {
            "circulo": "3",
            "escola": "convocacao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "até 5 criaturas voluntárias",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Esta magia transporta os alvos para um lugar a sua escolha a até 1.000km. Você precisa fazer um teste de Misticismo, com dificuldade que depende de seu conhecimento sobre o local de destino. CD 20. Um lugar familiar, que você visita com frequência. CD 30. Um lugar conhecido, que você já visitou pelo menos uma vez. CD 40. Um que você nunca visitou e só conhece a partir da descrição de outra pessoa que esteve lá. Você não pode se teletransportar para um lugar que nunca visitou sem a descrição de alguém. Ou seja, não pode se transportar para a \"sala de tesouro do rei\" se nunca esteve nela nem falou com alguém que esteve. Se passar no teste, os alvos chegam ao lugar desejado. Se falhar, os alvos surgem 1d10 x 10km afastados em qualquer direção (se o destino é uma cidade costeira, você pode surgir em alto-mar). Se falhar por 5 ou mais, você chega em um lugar parecido, mas errado. E se você rolar 1 natural no teste a magia falha (mas você gasta os PM) e fica atordoado por 1d4 rodadas."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o número de alvos em +5.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "em vez do normal, a magia teletransporta os alvos para seu santuário - um local familiar e previamente preparado. A magia pode ser usada sem limite de distância ou necessidade de testes, mas apenas dentro do mesmo plano. Preparar um local como seu santuário exige um ritual de um dia e o gasto de T$ 1.000. Você só pode ter um santuário por vez.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "muda a execução para ação completa, a duração para cena e adiciona sacrifício de 1 PM. Em vez do normal, você cria um círculo de 1,5m de diâmetro no chão, que transporta qualquer criatura que pisar nele. O destino é escolhido quando a magia é lançada e pode ser qualquer lugar, em qualquer mundo, sem a necessidade de testes, desde que seja conhecido por você. O círculo é tênue e praticamente invisível. Você pode marcá-lo de alguma forma (por exemplo, lançando-o sobre uma plataforma elevada). Se não fizer isso, alguém pode pisar nele por acidente. Junte isso a um destino hostil e você terá uma armadilha bastante eficaz! Requer 5º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "evocacao": {
        "erupcao-glacial": {
          "name": "Erupção Glacial",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/erupcao-glacial.webp",
          "system": {
            "circulo": "3",
            "escola": "evocacao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "quadrado de 6m de lado",
            "resistencia": "Relfexos parcial",
            "custo": "6 PM",
            "description": {
              "value": "Estacas de gelo irrompem do chão. Criaturas na área sofrem 4d6 de dano de corte, 4d6 de dano de frio e ficam caídas. Passar no teste de Reflexos evita o dano de corte e a queda. As estacas duram pela cena, o que torna a área afetada terreno difícil, e concedem cobertura leve para criaturas dentro da área ou atrás dela. As estacas são destruídas caso sofram qualquer quantidade de dano por fogo mágico."
            }
          },
          "aprimoramentos": [
            {
              "custo": 3,
              "descricao": "aumenta o dano de frio em +2d6 e o dano de corte em +2d6.",
              "aumenta": true
            },
            {
              "custo": 4,
              "descricao": "muda a área para cilindro com 6m de raio e 6m de altura e a duração para sustentada. Em vez do normal, a magia cria uma tempestade de granizo que causa 3d6 pontos de dano de impacto e 3d6 pontos de dano de frio em todas as criaturas na área (sem teste de resistência). A tempestade fornece camuflagem leve as criaturas dentro dela e deixa o piso escorregadio. Piso escorregadio conta como terreno difícil e obriga criaturas na área a fazer testes de Acrobacia para equilíbrio (veja o Capítulo 2). Requer 4º círculo.",
              "aumenta": false
            }
          ]
        },
        "lanca-ignea": {
          "name": "Lança Ígnea",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/lanca-ignea.webp",
          "system": {
            "circulo": "3",
            "escola": "evocacao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "1 criatura",
            "resistencia": "Reflexos parcial",
            "custo": "6 PM",
            "description": {
              "value": "Esta magia foi desenvolvida por um mago imortal, um entusiasta dos estudos vulcânicos. Ela dispara um projétil de magma contra o alvo, que sofre 4d6 pontos de dano de fogo e 4d6 pontos de dano de perfuração e fica em chamas. As chamas causam 2d6 pontos de dano por rodada, em vez do dano normal. Se passar no teste de resistência, o alvo sofre metade do dano e não fica em chamas. Respingos de rocha incandescente se espalham com a explosão, atingindo todas as criaturas adjacentes ao alvo, que devem fazer um teste de Reflexos. Se falharem, ficam em chamas, como descrito acima."
            }
          },
          "aprimoramentos": [
            {
              "custo": 3,
              "descricao": "aumenta o dano inicial em +2d6 e o dano do efeito em chamas em +1d6.",
              "aumenta": true
            },
            {
              "custo": 4,
              "descricao": "muda a duração para cena ou até ser descarregada. Em vez do efeito normal, a magia cria quatro dardos de lava que flutuam ao lado do conjurador. Uma vez por rodada, como uma ação livre, você pode disparar um dos dardos em uma criatura, causando o efeito normal da magia. Requer 4º Círculo.",
              "aumenta": false
            }
          ]
        },
        "muralha-elemental": {
          "name": "Muralha Elemental",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/muralha-elemental.webp",
          "system": {
            "circulo": "3",
            "escola": "evocacao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "resistencia": "veja texto",
            "custo": "6 PM",
            "description": {
              "value": "Cria uma muralha de um elemento a sua escolha. A muralha pode ser um muro de até 30m de comprimento e 3m de altura (ou o contrário) ou uma cúpula de 3m de raio. Os efeitos variam conforme o elemento escolhido. Fogo. Faz surgir uma violenta cortina de chamas. Um lado da muralha (a sua escolha) emite ondas de calor, que causam 2d6 pontos de dano de fogo em criaturas a até 6m quando você lança a magia e no início de seus turnos. Atravessar a muralha causa 8d6 pontos de dano de fogo. Caso seja criada em uma área onde existem criaturas, elas sofrem dano como se estivessem atravessando a muralha, mas podem fazer um teste de Reflexos para reduzir o dano à metade (a criatura escolhe para qual lado quer escapar, mas se escapar para o lado quente sofrerá mais 2d6 pontos de dano). Gelo. Evoca uma parede grossa de gelo denso com 15cm de espessura. Na forma de cúpula, pode prender uma ou mais criaturas, mas elas têm direito a um teste de Reflexos para escapar antes que a cúpula se forme. Cada trecho de 3m da muralha tem Defesa 8, 40 PV e RD 5. Um trecho da muralha que atinja 0 PV será rompido. Qualquer efeito de fogo causa dano dobrado à muralha. Uma criatura que atravesse um trecho rompido da muralha sofre 4d6 pontos de dano de frio."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o comprimento em +15m e altura em +3m, até 60m de comprimento e 9m de altura.",
              "aumenta": true
            },
            {
              "custo": 4,
              "descricao": "muda a duração para sustentada e adiciona uma nova escolha, Essência. A muralha é invisível e indestrutível - imune a qualquer forma de dano e não afetada por nenhuma magia. Ela não pode ser atravessada nem mesmo por criaturas incorpóreas. No entanto, magias que teletransportam criaturas, como Salto Dimensional, podem atravessá-la. Magias e efeitos de dano, como Bola de Fogo e o sopro de um dragão, não vencem a muralha, mas magias lançadas diretamente sobre uma criatura ou área, como Sono, podem ser lançadas contra alvos que estejam no outro lado como se tivessem linha de efeito. Requer 4º círculo.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "aumenta o dano por atravessar a muralha em +2d6.",
              "aumenta": true
            }
          ]
        }
      },
      "ilusao": {
        "ilusao-lacerante": {
          "name": "Ilusão Lacerante",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/ilusao-lacerante.webp",
          "system": {
            "circulo": "3",
            "escola": "ilusao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "cubo de 9m",
            "resistencia": "Vontade anula",
            "custo": "6 PM",
            "description": {
              "value": "Você cria uma ilusão de algum perigo mortal. Quando a magia é lançada, criaturas na área devem fazer um teste de Vontade; uma falha significa que a criatura acredita que a ilusão é real e sofre 3d6 pontos de dano psíquico não letal. Sempre que uma criatura iniciar seu turno dentro da área, deve repetir o teste de Vontade. Se falhar, sofre o dano novamente. Somente criaturas que falham veem a ilusão, e racionalizam o efeito sempre que falham no teste (por exemplo, acredita que o mesmo teto pode cair sobre ela várias vezes)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 3,
              "descricao": "aumenta o dano em +2d6.",
              "aumenta": true
            },
            {
              "custo": 4,
              "descricao": "muda a área para um cubo de 90m. Requer 4º círculo.",
              "aumenta": true
            }
          ]
        },
        "miragem": {
          "name": "Miragem",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/miragem.webp",
          "system": {
            "circulo": "3",
            "escola": "ilusao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "longo",
            "duracao": "1 dia",
            "alvo": "cubo de até 90m de lado",
            "resistencia": "Vontade desacredita",
            "custo": "6 PM",
            "description": {
              "value": "Você faz um terreno parecer outro, incluindo sons e cheiros. Uma planície pode parecer um pântano, uma floresta pode parecer uma montanha etc. Esta magia pode ser usada para criar armadilhas: areia movediça pode parecer terra firme ou um precipício pode parecer um lago. Você pode alterar, incluir e esconder estruturas dentro da área, mas não criaturas (embora elas possam se esconder nas estruturas ilusórias)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 4,
              "descricao": "além do normal, pode alterar a aparência de criaturas escolhidas na área, como se usando Disfarce Ilusório.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "muda a duração para permanente e adiciona componente material (pó de diamante no valor de T$ 1.000). Requer 5º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "necromancia": {
        "ferver-sangue": {
          "name": "Ferver Sangue",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/ferver-sangue.webp",
          "system": {
            "circulo": "3",
            "escola": "necromancia",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 criatura",
            "resistencia": "Fortitude parcial",
            "custo": "6 PM",
            "description": {
              "value": "O sangue do alvo aquece rapidamente até entrar em ebulição. Quando a magia é lançada, e no início de cada um de seus turnos, o alvo sofre 4d8 pontos de dano de fogo e fica Enjoado por uma rodada (Fortitude reduz o dano à metade e evita a condição). Se o alvo passar em dois testes de Fortitude seguidos, dissipa a magia. Se o alvo for reduzido a 0 PV pelo dano desta magia, seu corpo explode, matando-o e causando 6d6 pontos de dano de fogo em todas as criaturas a até 3m (Reflexos reduz à metade). Essa magia não afeta criaturas sem sangue, como construtos ou mortos-vivos."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o dano em +1d8.",
              "aumenta": true
            },
            {
              "custo": 9,
              "descricao": "muda alvo para criaturas escolhidas. Requer 5º círculo.",
              "aumenta": false
            }
          ]
        },
        "tentaculos-de-trevas": {
          "name": "Tentáculos de Trevas",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/tentaculos-de-trevas.webp",
          "system": {
            "circulo": "3",
            "escola": "necromancia",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "esfera com 6m de raio",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Um círculo de energias sombrias se abre no chão, de onde surgem tentáculos feitos de treva viscosa. Ao lançar a magia e no início de cada um de seus turnos, você faz um teste da manobra agarrar (usando seu bônus de Misticismo) contra cada criatura na área. Se você passar, a criatura é agarrada; se a vítima já está agarrada, é esmagada, sofrendo 4d6 pontos de dano de trevas. A área conta como terreno difícil. Os tentáculos são imunes a dano. Agarrado"
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o raio da área em +3m.",
              "aumenta": true
            },
            {
              "custo": 3,
              "descricao": "aumenta o dano dos tentáculos em +2d6.",
              "aumenta": true
            }
          ]
        }
      },
      "transmutacao": {
        "telecinesia": {
          "name": "Telecinésia",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/telecinesia.webp",
          "system": {
            "circulo": "3",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "duracao": "sustentada ou instantânea (veja texto)",
            "alvo": "veja texto;",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Você move objetos ou criaturas se concentrando. Ao lançar a magia, escolha uma das opções a seguir. Força Contínua: você move uma criatura ou objeto de até 10 espaços, a até 6m por rodada. Uma criatura pode anular o efeito sobre ela, ou sobre um objeto que possua, passando num teste de Vontade. O alvo pode ser movido em qualquer direção dentro do alcance. Ele cai no chão se sair do alcance ou a magia terminar. Duração: sustentada. Empurrão Violento: nesta versão a energia mágica é expelida de uma única vez e arremessa até 10 objetos (no máximo 10 espaços). Os objetos devem estar a até 3m uns dos outros e podem ser arremessados até o alcance da magia. Objetos arremessados podem atingir criaturas em seu caminho, causando de 1 ponto de dano de impacto por espaço (objetos macios, sem pontas ou sem fio) até 1d6 pontos de dano por espaço (objetos duros, pontudos ou afiados). Criaturas atingidas têm direito a um teste de Reflexos para reduzir o dano à metade. Criaturas médias ou menores podem ser arremessadas, mas têm direito a um teste de Vontade para evitar o efeito (em si mesmas ou em objetos que estejam segurando). Uma criatura arremessada contra uma superfície sólida sofre 1d6 pontos de dano de impacto para cada 3m que \"voou\" no deslocamento (incluindo outras criaturas; nesse caso, ambas sofrem o dano). Duração: instantânea."
            }
          },
          "aprimoramentos": [
            {
              "custo": 3,
              "descricao": "aumenta o tamanho máximo da criatura em uma categoria (para Grande, Enorme e Colossal) ou dobra a quantidade de espaços do objeto.",
              "aumenta": true
            }
          ]
        },
        "transformacao-de-guerra": {
          "name": "Transformação de Guerra",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/transformacao-de-guerra.webp",
          "system": {
            "circulo": "3",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Você se torna uma máquina de combate, ficando mais forte, rápido e resistente. Você recebe +6 na Defesa, testes de ataque e rolagens de dano corpo a corpo, e 30 PV temporários. Durante a Transformação de Guerra você não pode lançar magias, mas se torna proficiente em todas as armas."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta os bônus na Defesa, testes de ataque e rolagens de dano corpo a corpo em +1, e os PV temporários em +10.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "adiciona componente material (uma barra de adamante no valor de T$ 100). Sua forma de combate ganha um aspecto metálico e sem expressões. Além do normal, você recebe resistência a dano 10 e imunidade a atordoamento e efeitos de cansaço, encantamento, metabolismo, trevas e veneno, e não precisa respirar.",
              "aumenta": false
            }
          ]
        },
        "voo": {
          "name": "Voo",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/voo.webp",
          "system": {
            "circulo": "3",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Você recebe deslocamento de voo 12m. Voar por meio desta magia é simples como andar — você pode atacar e lançar magias normalmente enquanto voa. Quando a magia termina, você desce lentamente até o chão, como se estivesse sob efeito de Queda Suave."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "muda o alcance para toque e o alvo para 1 criatura.",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "muda a duração para 1 dia. Requer 4º círculo.",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "muda o alcance para curto e o alvo para até 10 criaturas. Requer 4° círculo.",
              "aumenta": false
            }
          ]
        }
      }
    },
    "4-circulo": {
      "abjuracao": {
        "campo-antimagia": {
          "name": "Campo Antimagia",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/campo-antimagia.webp",
          "system": {
            "circulo": "4",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "Você é cercado por uma barreira invisível com 3m de raio que acompanha seus movimentos. Qualquer magia ou habilidade mágica que entre na área da barreira é suprimida enquanto estiver lá. Criaturas convocadas que entrem em um Campo Antimagia desaparecem. Elas reaparecem na mesma posição quando a duração do Campo termina — supondo que a duração da magia que as convocou ainda não tenha terminado. Criaturas mágicas, como elementais, ou construtos imbuídos com magia durante sua criação, como golens, não são diretamente afetados pelo Campo Antimagia. Entretanto, como qualquer criatura, não poderão usar magias ou habilidades mágicas dentro dele. Magias que dissipam outras magias, como Dissipar Magia, nãodissipam um Campo Antimagia, e dois Campos na mesma área não se neutralizam. Artefatos e deuses maiores não são afetados por um Campo Antimagia"
            }
          }
        }
      },
      "adivinhacao": {
        "sonho": {
          "name": "Sonho",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/sonho.webp",
          "system": {
            "circulo": "4",
            "escola": "adv",
            "ativacao": {
              "custo": 10,
              "qtd": "10",
              "condição": "",
              "special": "",
              "execucao": "minuto"
            },
            "alcance": "any",
            "duracao": "Veja Texto",
            "alvo": "1 criatura viva",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "Você entra nos sonhos de uma criatura. Uma vez lá, pode conversar com ela até que ela acorde. Se o alvo não estiver dormindo quando você lançar a magia, você pode permanecer em transe até que ele adormeça. Durante o transe, você fica Indefeso e sem consciência dos arredores. Você pode sair do transe quando quiser, mas a magia termina."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "transforma o sonho do alvo em um pesadelo. A vítima deve fazer um teste de Vontade. Se falhar, não recupera PV ou PM pela noite, sofre 1d10 pontos de dano de trevas e acorda fatigada. A vítima recebe bônus ou penalidades em seu teste de resistência, dependendo do conhecimento que você tiver dela. Use os mesmos modificadores da magia Vidência.",
              "aumenta": false
            },
            {
              "custo": 1,
              "descricao": "aumenta o número de alvos em +1. Todos os alvos compartilham um mesmo sonho (ou pesadelo) entre si e com você.",
              "aumenta": true
            }
          ]
        }
      },
      "convocacao": {
        "conjurar-elemental": {
          "name": "Conjurar Elemental",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/conjurar-elemental.webp",
          "system": {
            "circulo": "4",
            "escola": "convocacao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "medio",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "Esta magia transforma uma porção de um elemento inerte em uma poderosa criatura elemental Grande do tipo correspondente ao elemento utilizado. Você deve ter acesso a uma quantidade significativa do elemento: uma fogueira ou tocha para fogo, uma poça d'água ou fonte para água, terra solta ou rocha para terra, ou ar em movimento (como vento) para ar. O elemental criado é uma entidade consciente que obedece completamente aos seus comandos mentais, mesmo à distância. O elemental funciona como um parceiro mestre do tipo destruidor (cuja habilidade especial custa apenas 2 PM para ser usada) e possui um tipo adicional de parceiro à sua escolha entre os listados abaixo, baseado em seu elemento. O elemental auxilia apenas você e não conta em seu limite normal de parceiros. Tipos por elemento: Ar (assassino, perseguidor ou vigilante) - causa dano de eletricidade. Água (ajudante, guardião ou médico) - causa dano de frio. Fogo (atirador, combatente ou fortão) - causa dano de fogo. Terra (combatente, guardião ou montaria) - causa dano de impacto. O elemental persiste enquanto você mantiver concentração e possui inteligência suficiente para interpretar ordens complexas."
            }
          },
          "aprimoramentos": [
            {
              "custo": 5,
              "descricao": "o elemental muda para Enorme e recebe dois tipos de aliado indicados no seu elemento.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "você convoca um elemental de cada tipo. Quando lança a magia, você pode escolher se cada elemental vai auxiliar você ou um aliado no alcance. Requer 5º círculo.",
              "aumenta": false
            },
            {
              "custo": 0,
              "descricao": "Elemental do Fogo Fortão",
              "aumenta": false
            }
          ]
        },
        "mao-poderosa": {
          "name": "Mão Poderosa",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/mao-poderosa.webp",
          "system": {
            "circulo": "4",
            "escola": "convocacao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "Esta magia cria uma mão flutuante de tamanho Grande que sempre se posiciona entre você e um oponente a sua escolha. A mão fornece cobertura leve (+5 na Defesa) contra esse oponente. Nada é capaz de enganar a mão — coisas como escuridão, invisibilidade, metamorfose e disfarces mundanos não a impedem de protegê-lo. A mão tem Defesa 20 e PV e resistências iguais aos seus. Com uma ação de movimento, você pode comandar a mão para que o proteja de outro oponente ou para que realize uma das ações a seguir. Agarrar: a mão usa uma manobra agarrar contra o oponente, usando o seu Misticismo com um bônus adicional de +10. A mão mantém o oponente agarrado, mas não causa dano. Esmagar: a mão esmaga um oponente agarrado, causando 2d6+10 pontos de dano de impacto. Empurrar: a mão afasta o oponente (manobra empurrar usando o seu Misticismo com um bônus adicional de +10). A mão acompanha o oponente para empurrá-lo o máximo que conseguir, dentro do alcance da magia."
            }
          },
          "aprimoramentos": [
            {
              "custo": 3,
              "descricao": "aumenta o dano de impacto em +1d6+5.",
              "aumenta": true
            },
            {
              "custo": 5,
              "descricao": "muda o bônus adicional em Misticismo para +20. Requer 5º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "encantamento": {
        "alterar-memoria": {
          "name": "Alterar Memória",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/alterar-memoria.webp",
          "system": {
            "circulo": "4",
            "escola": "encantamento",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Vontade anula",
            "custo": "10 PM",
            "description": {
              "value": "Você invade a mente do alvo e altera ou apaga suas memórias da última hora."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda o alcance para pessoal e o alvo para área cone de 4,5m.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "você pode alterar ou apagar as memórias das últimas 24 horas.",
              "aumenta": false
            }
          ]
        },
        "marionete": {
          "name": "Marionete",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/marionete.webp",
          "system": {
            "circulo": "4",
            "escola": "encantamento",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "1 criatura",
            "resistencia": "Fortitude anula",
            "custo": "10 PM",
            "description": {
              "value": "Esta magia sinistra manipula diretamente o sistema nervoso do alvo, transformando-o em uma marionete viva sob seu controle. Ao ser afetada pela magia, e no início de cada um de seus turnos subsequentes, a vítima deve fazer um teste de Fortitude. Se passar, a magia é anulada e ela recupera o controle de seu corpo. Se falhar, todas as suas ações físicas naquele turno ficam completamente sob seu controle. A vítima mantém total consciência de tudo que acontece ao seu redor - pode ver, ouvir, pensar e até falar com certo esforço (mas não pode lançar magias que exijam gestos ou componentes verbais complexos). Contudo, seu corpo executa apenas os movimentos que você desejar. A vítima pode ser forçada a se movimentar, atacar aliados, usar habilidades de combate, abrir portas, entregar itens - qualquer ação física de que seja capaz. Você deve manter linha de efeito visual para controlar a vítima. Se perder o contato visual, não poderá dar novos comandos, mas ela ficará paralisada até que você recupere o controle ou a magia termine. Esta é uma das magias de controle mental mais temidas e éticamente questionáveis."
            }
          }
        }
      },
      "evocacao": {
        "raio-polar": {
          "name": "Raio Polar",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/raio-polar.webp",
          "system": {
            "circulo": "4",
            "escola": "evocacao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "1 criatura",
            "resistencia": "Fortitude parcial",
            "custo": "10 PM",
            "description": {
              "value": "Você dispara um raio azul esbranquiçado de gelo e ar congelante. O alvo sofre 10d8 pontos de dano de frio e fica preso em um bloco de gelo (Paralisado). Se passar no teste de resistência, sofre metade do dano e, em vez de paralisado, fica Lento por uma rodada. é possível quebrar o gelo para libertar uma criatura presa: o bloco tem 20 PV, resistência a dano 10 e é vulnerável a fogo. Uma criatura presa pode usar uma ação completa para fazer um teste de Atletismo (com a mesma CD para resistir à magia) e tentar se libertar do gelo; cada vez que passar no teste causa 10 pontos de dano ao bloco, ignorando a RD."
            }
          },
          "aprimoramentos": [
            {
              "custo": 3,
              "descricao": "aumenta o dano em +2d8.",
              "aumenta": true
            },
            {
              "custo": 5,
              "descricao": "muda o alvo para área de esfera de 6m de raio. Em vez de um raio, você dispara uma esfera de gelo que explode, causando o efeito da magia em todas as criaturas na área.",
              "aumenta": false
            }
          ]
        },
        "relampago-flamejante": {
          "name": "Relâmpago Flamejante",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/relampago-flamejante.webp",
          "system": {
            "circulo": "4",
            "escola": "evocacao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "Duas Rodadas",
              "execucao": "especial"
            },
            "alcance": "medio",
            "resistencia": "Reflexos reduz à metade",
            "custo": "10 PM",
            "description": {
              "value": "Esta é uma magia poderosa, desenvolvida por um metódico e impassível arquimago. Você invoca as energias elementais do fogo e do relâmpago, fazendo com que uma de suas mãos fique em chamas e a outra mão eletrificada. Pela duração da magia, você pode gastar uma ação de movimento para disparar uma bola de fogo (10d6 pontos de dano de fogo numa esfera com 6m de raio) ou um relâmpago (10d6 pontos de dano de eletricidade numa linha). Você também pode, como uma ação padrão, usar as duas mãos num ataque de energia mista (20d12 pontos de dano, metade de fogo e metade de eletricidade, numa esfera de 9m de raio). Você precisa estar com as duas mãos livres para invocar o efeito misto e isso consome toda a energia da magia, terminando-a imediatamente. Por se tratar de um ritual complexo, o tempo de execução dessa magia não pode ser reduzido."
            }
          },
          "aprimoramentos": [
            {
              "custo": 3,
              "descricao": "aumenta o dano das rajadas em +1d6.",
              "aumenta": true
            },
            {
              "custo": 3,
              "descricao": "aumenta o dano da rajada mista em +2d12.",
              "aumenta": true
            }
          ]
        },
        "talho-invisivel": {
          "name": "Talho Invisível",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/talho-invisivel.webp",
          "system": {
            "circulo": "4",
            "escola": "evocacao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "cone de 9m",
            "resistencia": "Fortitude parcial",
            "custo": "10 PM",
            "description": {
              "value": "Esta magia cruel foi desenvolvida por um mago de combate, quando ainda era um bípede. Você faz um gesto rápido e dispara uma lâmina de ar em alta velocidade. Criaturas na área sofrem 10d8 pontos de dano de corte e ficam sangrando. Alvos que passem no teste de resistência sofrem metade do dano e não ficam sangrando."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o dano em +2d8.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "muda o alvo para você e a duração para sustentada. Uma vez por rodada, como uma ação padrão, você pode disparar uma lâmina de ar contra um alvo em alcance médio, causando 6d8 pontos de dano de corte (Fortitude reduz à metade).",
              "aumenta": false
            }
          ]
        }
      },
      "ilusao": {
        "duplicata-ilusoria": {
          "name": "Duplicata Ilusória",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/duplicata-ilusoria.webp",
          "system": {
            "circulo": "4",
            "escola": "ilusao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "Você cria uma cópia ilusória semirreal de... você mesmo! Ela é idêntica em aparência, som e cheiro, mas é intangível. A cada turno, você escolhe se verá e ouvirá através da duplicata ou de seu corpo original. A cópia reproduz todas as suas ações, incluindo fala. Qualquer magia com alcance de toque ou maior que você lançar pode se originar da duplicata, em vez do seu corpo original. As magias afetam outros alvos normalmente, com a única diferença de se originarem da cópia, em vez de você. Se quiser que a duplicata faça algo diferente de você, você deve gastar uma ação de movimento. Qualquer criatura que interagir com a cópia tem direito a um teste de Vontade para perceber que é uma ilusão. As magias que se originam dela, no entanto, são reais. A cópia desaparece se sair do alcance."
            }
          },
          "aprimoramentos": [
            {
              "custo": 3,
              "descricao": "cria uma cópia adicional.",
              "aumenta": false
            }
          ]
        },
        "explosao-caleidoscopica": {
          "name": "Explosão Caleidoscópica",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/explosao-caleidoscopica.webp",
          "system": {
            "circulo": "4",
            "escola": "ilusao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "esfera com 6m de raio",
            "resistencia": "Fortitude parcial",
            "custo": "10 PM",
            "description": {
              "value": "Esta magia cria uma forte explosão de luzes estroboscópicas e sons cacofônicos que desorientam as criaturas atingidas. O efeito que cada criatura sofre depende do ND dela. ND 4 ou menor: se falhar no teste de resistência, fica inconsciente. Se passar, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena. ND entre 5 e 9: se falhar no teste de resistência, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena. Se passar, fica atordoada por 1 rodada e enjoada por 1d4 rodadas. ND 10 ou maior: se falhar no teste de resistência, fica atordoada por 1 rodada e enjoada por 1d4 rodadas. Se passar, fica desprevenida e enjoada por 1 rodada. Uma criatura só pode ser atordoada por esta magia uma vez por cena. Inconsciente Atordoado Enjoado"
            }
          }
        }
      },
      "necromancia": {
        "assassino-fantasmagorico": {
          "name": "Assassino Fantasmagórico",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/assassino-fantasmagorico.webp",
          "system": {
            "circulo": "4",
            "escola": "necromancia",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "longo",
            "duracao": "cena, até ser descarregada",
            "alvo": "1 criatura",
            "resistencia": "Vontade Anula, Fortitude Parcial",
            "custo": "10 PM",
            "description": {
              "value": "Usando os medos subconscientes do alvo, você cria uma imagem daquilo que ele mais teme. Apenas a própria vítima pode ver o Assassino Fantasmagórico com nitidez; outras criaturas presentes (incluindo o conjurador) enxergam apenas um espectro sombrio. Quando você lança a magia, o espectro surge adjacente a você e a vítima faz um teste de Vontade. Se ela passar, percebe que o espectro é uma ilusão e a magia é dissipada. Se falhar, acredita na existência do espectro, que então flutua 18m por rodada em direção à vítima, sempre no fim do seu turno. Ele é incorpóreo e imune a magias (exceto magias que dissipam outras). Se o espectro terminar seu turno adjacente à vítima, ela deve fazer um teste de Fortitude. Se passar, sofre 6d6 pontos de dano de trevas (este dano não pode reduzir o alvo a menos de 0 PV e não o deixa sangrando). Se falhar, sofre um colapso, ficando imediatamente com –1 PV e sangrando. O espectro persegue o alvo implacavelmente. Ele desaparece se o alvo ficar inconsciente ou se afastar além de alcance longo dele, ou se for dissipado."
            }
          }
        }
      },
      "transmutacao": {
        "animar-objetos": {
          "name": "Animar Objetos",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/animar-objetos.webp",
          "system": {
            "circulo": "4",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "Até 8 objetos Minúsculos ou Pequenos, 4 objetos Médios, 2 objetos Grandes ou 1 objeto Enorme",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "Você concede vida a objetos inanimados. Cada objeto se torna um parceiro sob seu controle. O tipo dele é escolhido da lista de tamanho e ele não conta em seu limite de parceiros. Com uma ação de movimento, você pode comandar mentalmente qualquer objeto animado dentro do alcance para que auxilie você ou outra criatura. Outros usos criativos para os objetos ficam a cargo do mestre. Objetos animados são construtos com valores de Força, Destreza e PV de acordo com seu tamanho. Todos os outros atributos nulos, eles não têm valor de Defesa ou testes de resistência e falham automaticamente em qualquer teste oposto. Diferente de parceiros comuns, um objeto pode ser alvo de um ataque direto. Esta magia não afeta itens mágicos, nem objetos que estejam sendo carregados por outra criatura. Esta magia não afeta itens mágicos, nem objetos que estejam sendo carregados por outra criatura. Estatísticas de objetos animados Minúsculo: For -3, Des 4, 5 PV; Assassino ou Combatente Iniciante. Pequeno: For -2, Des 2, 10 PV; Combatente ou Guardião Iniciante. Médio: For 0, Des 1, 20 PV; Combatente ou Guardião Veterano. Grande: For 2, Des 0, 40 PV; Fortão, Guardião ou Montaria (cavalo) Veterano. Enorme: For 4, Des -2, 60 PV; Fortão, Guardião ou Montaria (cavalo) Mestre."
            }
          },
          "aprimoramentos": [
            {
              "custo": 5,
              "descricao": "muda a duração para permanente e adiciona componente material (prataria no valor de T$ 1.000). Você pode ter um máximo de objetos animados igual à metade do seu nível.",
              "aumenta": false
            },
            {
              "custo": 0,
              "descricao": "Assassino Iniciante",
              "aumenta": false
            },
            {
              "custo": 0,
              "descricao": "Combatente Iniciante",
              "aumenta": false
            },
            {
              "custo": 0,
              "descricao": "Combatente Veterano",
              "aumenta": false
            },
            {
              "custo": 0,
              "descricao": "Fortão Veterano",
              "aumenta": false
            },
            {
              "custo": 0,
              "descricao": "Fortão Mestre",
              "aumenta": false
            }
          ]
        },
        "controlar-a-gravidade": {
          "name": "Controlar a Gravidade",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/controlar-gravidade.webp",
          "system": {
            "circulo": "4",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "cubo de 12m de lado",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "Você controla os efeitos da gravidade dentro da área. Ao lançar a magia, escolha um dos efeitos abaixo. Enquanto a magia durar, você pode usar uma ação padrão para mudar o efeito. Aumentar: a gravidade fica mais forte. No início de seus turnos, cada criatura na área deve fazer um teste de Atletismo. Se passar, fica fatigada. Se falhar, fica fatigada e caída. Inverter: inverte a gravidade da área, fazendo com que criaturas e objetos \"caiam\" para cima, atingindo o topo (12m) em uma rodada. Se um obstáculo (como um teto) impedir o movimento das criaturas, elas sofrem 1d6 pontos de dano de impacto para cada 1,5m de \"queda\". Elas podem então se levantar e caminhar no obstáculo, de cabeça para baixo. Se não houver obstáculo, as criaturas e objetos ficam flutuando no topo da área afetada, sem poder sair do lugar. Criaturas voadoras podem se movimentar normalmente. Alguém adjacente a algo que possa agarrar tem direito a um teste de Reflexos para evitar a \"queda\". A criatura deve permanecer presa pela duração da magia; caso contrário \"cairá\". Reduzir: a gravidade fica mais leve. Criaturas ou objetos livres com até 100kg flutuam para cima e para baixo conforme sua vontade, com deslocamento de voo 6m. Criaturas na área recebem +20 de bônus em testes de Atletismo para escalar e saltar. Uma criatura levitando fica instável, sofrendo –2 de penalidade em testes de ataque. Fatigado Caído"
            }
          }
        },
        "desintegrar": {
          "name": "Desintegrar",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/desintegrar.webp",
          "system": {
            "circulo": "4",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "1 criatura ou objeto",
            "resistencia": "Fortitude parcial",
            "custo": "10 PM",
            "description": {
              "value": "Você dispara um raio fino e esverdeado de energia desintegradora que causa 10d12 pontos de dano de essência. Este dano ignora qualquer resistência ou redução de dano, pois ataca diretamente a estrutura molecular do alvo. Se o alvo passar no teste de resistência de Fortitude, em vez disso sofre apenas 2d12 pontos de dano. Independentemente do resultado do teste de resistência, se os pontos de vida do alvo forem reduzidos a 0 ou menos por esta magia, ele será completamente desintegrado, restando apenas uma pequena pilha de pó fino. Criaturas desintegradas não podem ser ressuscitadas por magias normais, apenas por Desejo ou intervenção divina direta."
            }
          },
          "aprimoramentos": [
            {
              "custo": 4,
              "descricao": "aumenta o dano total em +2d12 e o dano mínimo em +1d12.",
              "aumenta": true
            }
          ]
        },
        "forma-eterea": {
          "name": "Forma Etérea",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/forma-eterea.webp",
          "system": {
            "circulo": "4",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "Você e todo o equipamento que está com você são transportados para o plano etéreo, que existe paralelamente ao plano material (o mundo físico). Na prática, é como ser transformado em um fantasma (mas você ainda é considerado uma criatura viva). Uma criatura etérea é invisível (pode alterar entre visível e invisível como ação livre), incorpórea e capaz de se mover em qualquer direção, inclusive para cima e para baixo. Ela enxerga o plano material, mas tudo parece cinza e insubstancial, reduzindo o alcance da visão e audição para 18m. Magias de abjuração e essência afetam criaturas etéreas, mas outras magias, não. Da mesma forma, uma criatura etérea não pode atacar nem lançar magias contra criaturas no plano material. Duas criaturas etéreas podem se afetar normalmente. Uma criatura afetada pode se materializar como uma ação de movimento, encerrando a magia. Uma criatura etérea que se materialize em um espaço ocupado é jogada para o espaço não ocupado mais próximo e sofre 1d6 pontos de dano de impacto para cada 1,5m de deslocamento."
            }
          },
          "aprimoramentos": [
            {
              "custo": 5,
              "descricao": "muda o alcance para toque e o alvo para até 5 criaturas voluntárias que estejam de mãos dadas. Depois que a magia é lançada, as criaturas podem soltar as mãos. Requer 5º círculo.",
              "aumenta": false
            }
          ]
        }
      }
    },
    "5-circulo": {
      "abjuracao": {
        "alterar-destino": {
          "name": "Alterar Destino",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/alterar-destino.webp",
          "system": {
            "circulo": "5",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "reaction"
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "15 PM",
            "description": {
              "value": "Sua mente visualiza todas as possibilidades de um evento, permitindo a você escolher o melhor curso de ação. Você pode rolar novamente um teste de resistência com um bônus de +10 ou um inimigo deve rolar novamente um ataque contra você com uma penalidade de –10"
            }
          }
        },
        "aprisionamento": {
          "name": "Aprisionamento",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/aprisionamento.webp",
          "system": {
            "circulo": "5",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "curto",
            "alvo": "1 criatura",
            "resistencia": "Vontade anula",
            "custo": "15 PM",
            "description": {
              "value": "Você cria uma prisão mágica para aprisionar uma criatura. Se falhar no testede resistência, o alvo sofre o efeito da magia; se passar, fica imune a esta magia por uma semana. Enquanto estiver aprisionada, a criatura não precisa respirar e alimentar-se, e não envelhece. Magias de adivinhação não conseguem localizar ou perceber o alvo. Ao lançar a magia, você escolhe uma das seguintes formas de prisão. O componente material varia, mas todos custam T$ 1.000. Acorrentamento: o alvo é preso por correntes firmemente enraizadas no chão, que o mantém no lugar. O alvo fica paralisado e não pode se mover ou ser movido por qualquer meio. Componente Material: uma fina corrente de mitral. Contenção Mínima: o alvo diminui para 2 cm de altura e é preso dentro de uma pedra preciosa ou objeto semelhante. Luz passa através da pedra, permitindo que o alvo veja o lado de fora e seja visto, mas nada mais pode passar, nem por meio de teletransporte ou viagem planar. A pedra não pode ser quebrada enquanto o alvo estiver dentro. Componente Material: uma pedra preciosa, como um diamante ou rubi. Prisão Dimensional: o alvo é transportado para um semiplano protegido contra teletransporte e viagens planares. Pode ser um labirinto, uma gaiola, uma torre ou qualquer estrutura ou área confinada e pequena a sua escolha. Componente Material: uma representação em miniatura da prisão, feita de jade. Sepultamento: o alvo é sepultado nas profundezas da terra, em uma esfera mágica. Nada pode destruir ou atravessar a esfera, nem mesmo teletransporte ou viagens planares. Componente Material: um pequeno orbe de adamante. Sono Eterno: o alvo adormece e não pode ser acordado. Componente Material: fruta preparada com ervas soníferas raras. Quando a magia é lançada, você deve especificar uma condição que fará com que ela termine e solte o alvo. A condição pode ser tão específica ou elaborada quanto você quiser, mas deve ser possível de acontecer. As condições podem se basear no nome, identidade ou divindade padroeira de uma criatura, ou em ações ou qualidades observáveis, mas nunca em estatísticas intangíveis, como nível, classe ou pontos de vida. O mestre tem a palavra final sobre se uma condição é válida ou não. Paralisado"
            }
          }
        }
      },
      "convocacao": {
        "chuva-de-meteoros": {
          "name": "Chuva de Meteoros",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/chuva-de-meteoros.webp",
          "system": {
            "circulo": "5",
            "escola": "convocacao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "longo",
            "alvo": "quadrado com 18m de lado",
            "resistencia": "Reflexos parcial",
            "custo": "15 PM",
            "description": {
              "value": "Esta é uma das magias de destruição em massa mais devastadoras conhecidas. Você rasga um portal no espaço e convoca uma chuva literal de meteoros flamejantes que descem dos céus como punhos dos deuses. O céu escurece momentaneamente antes de dezenas de rochas incandescentes, cada uma do tamanho de uma carroça, despencarem sobre a área alvo em uma exibição apocalíptica de poder. EFEITOS DEVASTADORES: Todas as criaturas na área de 18m x 18m sofrem 15d6 pontos de dano de impacto (pelo impacto brutal das rochas) e 15d6 pontos de dano de fogo (pelo calor extremo), além de ficarem Caídas e Agarradas pelos escombros pesados. Criaturas que passem no teste de Reflexos sofrem apenas metade do dano total e conseguem evitar ficar caídas e agarradas. EFEITOS DURADOUROS: A área fica permanentemente alterada - coberta de crateras fumegantes, escombros de meteoros e uma densa nuvem de poeira que concede camuflagem leve a todas as criaturas. Todo o terreno torna-se difícil devido aos destroços. Criaturas agarradas pelos escombros podem escapar gastando uma ação padrão e passando em um teste de Atletismo (CD igual à da magia). LIMITAÇÕES: Esta magia só pode ser lançada a céu aberto - tetos, cavernas ou estruturas cobertas impedem a convocação dos meteoros. A magia é tão poderosa que pode ser vista e ouvida a quilômetros de distância, atraindo atenção indesejada. Estruturas na área são automaticamente destruídas, e o terreno pode ficar permanentemente alterado."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o número de meteoros que atingem a área, o que aumenta o dano em +2d6 de impacto e +2d6 de fogo.",
              "aumenta": true
            }
          ]
        },
        "semiplano": {
          "name": "Semiplano",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/semiplano.webp",
          "system": {
            "circulo": "5",
            "escola": "convocacao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "curto",
            "duracao": "1 dia",
            "resistencia": "Nenhuma",
            "custo": "15 PM",
            "description": {
              "value": "Você cria uma dimensão particular. Você pode entrar no semiplano gastando uma ação padrão e 10 PM, desaparecendo do plano material como se tivesse se teletransportado. Você pode levar criaturas voluntárias que esteja tocando, ao custo de 1 PM por criatura extra. Você também pode levar objetos que esteja tocando, ao custo de 1 PM por objeto Médio ou menor, 2 PM por objeto Grande, 5 PM por Enorme e 10 PM por Colossal. Uma vez no semiplano, pode gastar uma ação completa para voltar ao plano material, no mesmo local onde estava. Caso conheça a magia Viagem Planar, pode lançá-la para voltar ao plano material em outro local. Você escolhe a forma e a aparência do semiplano — uma caverna, um asteroide que singra o éter, um palacete de cristal etc. Ele contém ar, luz e calor, mas além disso é vazio. Entretanto, você pode levar itens (mobília, ferramentas etc.) a cada viagem."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "adiciona alvo (1 criatura). Você cria uma semiplano labiríntico e expulsa o alvo para ele. A cada rodada, a vítima tem direito a um teste de Investigação ou Sobrevivência (CD da magia), com bônus cumulativo de +1 para cada teste já realizado, para escapar do labirinto. Quando o alvo escapa, a magia termina e o alvo reaparece no plano material no mesmo local onde estava quando a magia foi lançada. Magias como Salto Dimensional e\nTeletransporte não ajudam a escapar do\nlabirinto, mas Viagem Planar, sim.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda a duração para permanente e adiciona componente material (maquete do semiplano feito de materiais preciosos no valor de T$ 5.000). Você pode lançar a magia diversas vezes para aumentar as dimensões do semiplano em +30m de lado a cada vez.",
              "aumenta": false
            }
          ]
        }
      },
      "encantamento": {
        "legiao": {
          "name": "Legião",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/legiao.webp",
          "system": {
            "circulo": "5",
            "escola": "encantamento",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "até 10 criaturas na área",
            "resistencia": "Vontade parcial",
            "custo": "15 PM",
            "description": {
              "value": "Você domina a mente dos alvos. Os alvos obedecem cegamente a seus comandos, exceto ordens claramente suicidas. Um alvo tem direito a um teste no final de cada um de seus turnos para se livrar do efeito. Alvos que passarem no teste ficam Abalado por 1 rodada enquanto recuperam a consciência."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "aumenta o número de alvos em +1.",
              "aumenta": true
            }
          ]
        },
        "possessao": {
          "name": "Possessão",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/possessao.webp",
          "system": {
            "circulo": "5",
            "escola": "encantamento",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "longo",
            "duracao": "1 dia",
            "alvo": "1 criatura",
            "resistencia": "Vontade anual",
            "custo": "15 PM",
            "description": {
              "value": "Você projeta sua consciência no corpo do alvo. Enquanto possuir uma criatura, você assume o controle total do corpo dela. O seu próprio corpo fica inconsciente e a consciência do alvo fica inerte. Em termos de jogo, você continua usando a sua ficha, mas com os atributos físicos e deslocamento da criatura. Se o alvo passar no teste de resistência, sabe que você tentou possuí-lo e fica imune a esta magia por um dia. Caso o corpo da criatura morra enquanto você a possui, a criatura morre e você deve fazer um teste de Vontade contra a CD da sua própria magia. Se passar, sua consciência retorna para o seu corpo (contanto que esteja dentro do alcance). Do contrário, você também morre. Retornar para o seu corpo voluntariamente é uma ação livre."
            }
          },
          "aprimoramentos": [
            {
              "custo": 5,
              "descricao": "você ganha acesso às habilidades de raça e classe da criatura.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "enquanto a magia durar e você estiver dentro do alcance do seu corpo original, pode \"saltar\" de uma criatura possuída para outra. O novo alvo tem direito a um teste de Vontade. Se falhar, você assume o controle do corpo dele e o alvo anterior recobra a consciência.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda a duração para permanente, mas destrói seu corpo original no processo. Uma criatura possuída pode fazer um teste de Vontade no começo do dia para retomar seu corpo. Se passar, recobra a consciência (e a sua própria consciência fica inerte). O teste se repete no início de cada dia. Se o corpo de uma criatura possuída morrer e houver outra criatura em alcance curto, você pode tentar possuí-la como uma reação. Enquanto houver novos corpos para possuir, você é imortal!",
              "aumenta": false
            }
          ]
        }
      },
      "evocacao": {
        "barragem-elemental": {
          "name": "Barragem Elemental",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/barragem-elemental.webp",
          "system": {
            "circulo": "5",
            "escola": "evocacao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "longo",
            "resistencia": "Reflexos parcial",
            "custo": "15 PM",
            "description": {
              "value": "Criada por um arquimago, esta magia produz quatro esferas elementais (ácido, eletricidade, fogo e frio) que voam até um ponto a sua escolha. Quando atingem o ponto escolhido, explodem causando 6d6 pontos de dano do seu respectivo tipo numa área com 12m de raio. Um teste de Reflexos reduz o dano à metade. Você pode mirar cada esfera em uma criatura ou ponto diferente. Uma criatura ao alcance da explosão de mais de uma esfera deve fazer um teste de resistência para cada uma. Além disso, as esferas causam os seguintes efeitos em criaturas que falharem em seus respectivos testes de resistência: • ácido: Vulnerável até o fim da cena. • Elétrica: Atordoado por uma rodada. (apenas uma vez por cena). • Fogo: Em Chamas. • Frio: Lentoaté o fim da cena."
            }
          },
          "aprimoramentos": [
            {
              "custo": 5,
              "descricao": "aumenta o dano de cada esfera em +2d6.",
              "aumenta": true
            },
            {
              "custo": 5,
              "descricao": "muda o tipo de dano de todas as esferas para essência (mas elas ainda causam os outros efeitos como se seu tipo de dano não mudasse).",
              "aumenta": false
            }
          ]
        },
        "deflagracao-de-mana": {
          "name": "Deflagração de Mana",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/deflagracao-de-mana.webp",
          "system": {
            "circulo": "5",
            "escola": "evocacao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "pessoal",
            "alvo": "esfera de 15m de raio",
            "resistencia": "Fortitude parcial",
            "custo": "15 PM",
            "description": {
              "value": "Após concentrar seu mana, você emana energia, como uma estrela em plena terra. Todas as criaturas na área sofrem 150 pontos de dano de essência e todos os itens mágicos (exceto artefatos) tornam-se mundanos. Você não é afetado pela magia. Alvos que passem no teste de Fortitude sofrem metade do dano e seus itens mágicos voltam a funcionar após um dia."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "aumenta o dano em 10.",
              "aumenta": true
            },
            {
              "custo": 5,
              "descricao": "afeta apenas criaturas a sua escolha.",
              "aumenta": false
            }
          ]
        },
        "mata-dragao": {
          "name": "Mata-Dragão",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/mata-dragao.webp",
          "system": {
            "circulo": "5",
            "escola": "evocacao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "2 Rodadas",
              "execucao": "especial"
            },
            "alcance": "pessoal",
            "alvo": "cone de 30m",
            "resistencia": "Reflexos reduz à metade",
            "custo": "15 PM",
            "description": {
              "value": "Esta é uma das mais poderosas magias de destruição existentes. Após entoar longos cânticos, o conjurador dispara uma carga de energia que varre uma enorme área à sua frente, causando 20d12 pontos de dano de essência em todas as criaturas, construções e objetos livres atingidos. Sempre que rola um resultado 12 em um dado de dano, a magia causa +1d12 pontos de dano. Apesar de seu poder destrutivo, esta magia é lenta, tornando seu uso difícil em combate."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "aumenta o dano em 1d12.",
              "aumenta": true
            }
          ]
        }
      },
      "ilusao": {
        "requiem": {
          "name": "Réquiem",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/requiem.webp",
          "system": {
            "circulo": "5",
            "escola": "ilusao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "curto",
            "alvo": "criaturas escolhidas",
            "resistencia": "Vontade anula",
            "custo": "15 PM",
            "description": {
              "value": "Esta magia cria uma ilusão particular para cada uma das criaturas que atingir. Enquanto a magia durar, no início de cada um de seus turnos, cada criatura afetada deve fazer um teste de Vontade; se falhar, acha que não tomou as ações que realmente fez no turno anterior e é obrigada a repetir as mesmas ações neste turno, com uma penalidade cumulativa de –5 em todos os testes para cada vez que se repetir (a penalidade não se aplica ao teste de Vontade contra esta magia). Por exemplo, se a criatura se aproximou de um alvo e o atacou, precisa se aproximar desse mesmo alvo e atacar novamente. A ação repetida consome PM e recursos normalmente e, caso exija um teste de resistência, qualquer alvo faz esse teste com um bônus igual ao da penalidade desta magia."
            }
          }
        },
        "sombra-assassina": {
          "name": "Sombra Assassina",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/sombra-assassina.webp",
          "system": {
            "circulo": "5",
            "escola": "ilusao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 criatura",
            "resistencia": "Vontade parcial",
            "custo": "15 PM",
            "description": {
              "value": "Esta magia cria uma duplicata ilusória do alvo na forma de uma silhueta, ligada a ele como se fosse uma manifestação sólida de sua própria sombra. A duplicata de sombras segue automaticamente o alvo. Sempre que o alvo faz uma ação hostil — fazer um ataque, usar uma habilidade, lançar uma magia — a sombra imediatamente realiza a mesma ação contra o alvo, usando as mesmas estatísticas e rolagens. A sombra pode ser atacada, tem as mesmas estatísticas do alvo e é destruída quando chega a 0 PV. Se o alvo passar no teste de resistência, a sombra desaparece no final do turno do alvo, depois de copiar sua ação dessa rodada."
            }
          },
          "aprimoramentos": [
            {
              "custo": 10,
              "descricao": "muda o alvo para criaturas escolhidas na área.",
              "aumenta": false
            }
          ]
        }
      },
      "transmutacao": {
        "controlar-o-tempo": {
          "name": "Controlar o Tempo",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/controlar-tempo.webp",
          "system": {
            "circulo": "5",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "duracao": "veja texto",
            "alvo": "veja texto",
            "resistencia": "Nenhuma",
            "custo": "15 PM",
            "description": {
              "value": "\"Aquele que controla o tempo controla o mundo.\" Esta magia lendária manipula o fluxo temporal ao seu redor, permitindo feitos que desafiam as leis da realidade. Escolha um dos três efeitos devastadores: CONGELAR O TEMPO: Você cria uma bolha temporal onde o tempo flui diferentemente. Para todas as outras criaturas, a bolha surge e desaparece instantaneamente, mas para você ela dura 3 rodadas completas. Durante esse período, você pode agir livremente enquanto o mundo permanece congelado - projéteis param no ar, chamas ficam imóveis, criaturas ficam como estátuas. Você não é afetado por efeitos contínuos (fogo, veneno, sangramento) durante essas rodadas. LIMITAÇÃO: Você e todos os efeitos que gerar ficam confinados à área que ocupava ao lançar a magia. Efeitos de área com duração maior que a bolha voltam a funcionar normalmente quando ela termina. SALTAR NO TEMPO: Você e até 5 criaturas voluntárias desaparecem em um brilho dourado e são transportadas de 1 a 24 horas para o futuro (você escolhe). Vocês ressurgem no mesmo local, com a mesma velocidade e orientação - do ponto de vista de vocês, nenhum tempo passou. Se objetos sólidos agora ocupam o espaço de alguma criatura, ela ressurge na área vazia mais próxima. Esta é uma forma de viagem temporal unidirecional. VOLTAR NO TEMPO: Você revive os últimos segundos, desfazendo completamente a rodada anterior. Todas as ações são anuladas (incluindo perda de PV e PM), tudo retorna às posições do início do seu turno anterior, e apenas você mantém a memória do que aconteceu. Todos os outros personagens devem repetir exatamente as mesmas ações - a menos que você interfira ativamente (alertando aliados, mudando sua própria ação, etc.). Esta é a forma mais perigosa de manipulação temporal."
            }
          }
        },
        "desejo": {
          "name": "Desejo",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/desejo.webp",
          "system": {
            "circulo": "5",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "especial",
            "duracao": "veja texto",
            "alvo": "veja texto",
            "resistencia": "veja texto",
            "custo": "15 PM",
            "description": {
              "value": "Esta é a mais poderosa e temida das magias arcanas, capaz de alterar a própria realidade através da força de vontade pura. Ao pronunciar seu desejo, você canaliza energias primordiais para remodelar o mundo. EFEITOS SEGUROS (sem custo adicional): • Dissipar instantaneamente os efeitos de qualquer magia de 4º círculo ou menor em qualquer criatura ou área. • Transportar até 10 criaturas voluntárias em alcance longo para qualquer local conhecido, em qualquer plano de existência. • Desfazer um acontecimento recente, permitindo que um teste realizado por qualquer criatura em alcance longo na última rodada seja refeito. Por exemplo, se um aliado morreu devido a um ataque crítico, você pode forçar o inimigo a rolar o ataque novamente. EFEITOS PODEROSOS (custam 2 PM adicionais): • Criar permanentemente um item mundano não-mágico de até T$ 30.000. • Duplicar perfeitamente os efeitos de qualquer magia de até 4º círculo (componentes materiais ainda são necessários). • Aumentar permanentemente um atributo de uma criatura em +1 (cada atributo pode ser aumentado apenas uma vez por Desejo). • Curar completamente todas as feridas, doenças, maldições e condições negativas de uma criatura. EFEITOS EXTRAORDINÁRIOS: Desejo pode realizar feitos ainda mais impressionantes, mas com riscos proporcionais. Desejar riqueza pode transportá-lo para o tesouro de um dragão furioso; desejar imortalidade pode transformá-lo em um lich; desejar poder supremo pode atrair a atenção de deuses hostis. O mestre tem total autoridade sobre esses efeitos e suas consequências imprevistas. Lembre-se: quanto maior o desejo, maior o preço a pagar."
            }
          }
        }
      }
    }
  },
  "divina": {
    "1-circulo": {
      "abjuracao": {
        "escudo-da-fe": {
          "name": "Escudo da Fé",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg",
          "system": {
            "circulo": "1",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "reaction"
            },
            "alcance": "curto",
            "duracao": "1 turn",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Um escudo místico se manifesta momentaneamente para bloquear um golpe. O alvo recebe +2 na Defesa."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o bônus na Defesa em +1.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "muda a execução para ação padrão, o alcance para toque e a duração para cena. A magia cria uma conexão mística entre você e o alvo. Além do efeito normal, o alvo sofre metade do dano por ataques e efeitos; a outra metade do dano é transferida a você. Se o alvo sair de alcance curto de você, a magia é dissipada. Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 3,
              "descricao": "muda a duração para 1 dia. Requer 2º círculo.",
              "aumenta": false
            }
          ]
        },
        "protecao-divina": {
          "name": "Proteção Divina",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_divineprotection.jpg",
          "system": {
            "circulo": "1",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Esta magia cria uma barreira mística invisível que fornece ao alvo +2 em testes de resistência."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o bônus concedido em +1.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "muda a execução para reação, o alcance para curto e a duração para 1 rodada. Em vez do normal, o alvo recebe +5 no próximo teste de resistência que fizer.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "muda o alvo para área de esfera com 3m de raio. Todos os aliados dentro da esfera recebem o bônus da magia. Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "também torna o alvo imune a efeitos mentais e de medo. Requer 3º círculo.",
              "aumenta": false
            }
          ]
        },
        "santuario": {
          "name": "Santuário",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_sanctuary.jpg",
          "system": {
            "circulo": "1",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Vontade anula",
            "custo": "1 PM",
            "description": {
              "value": "Qualquer criatura que tente fazer uma ação hostil contra o alvo deve fazer um teste de Vontade. Se falhar, não consegue, perde a ação e não pode tentar novamente até o fim da cena. Santuário não protege o alvo de efeitos de área. Além disso, o próprio alvo também não pode fazer ações hostis (incluindo forçar outras criaturas a atacá-lo), ou a magia é dissipada — mas pode usar habilidades e magias de cura e suporte como Curar Ferimentos e Bênção."
            }
          },
          "aprimoramentos": [
            {
              "custo": 9,
              "descricao": "também protege o alvo contra efeitos de área. Uma criatura que tente atacar uma área que inclua o alvo deve fazer o teste de Vontade; se falhar, não consegue e perde a ação. Ela só pode tentar novamente se o alvo sair da área.",
              "aumenta": false
            }
          ]
        },
        "suporte-ambiental": {
          "name": "Suporte Ambiental",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_protectionformnature.jpg",
          "system": {
            "circulo": "1",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "duracao": "1 dia",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Esta magia garante a sobrevivência em ambientes hostis. O alvo fica imune aos efeitos de calor e frio extremos, pode respirar na água se respirar ar (ou vice-versa) e não sufoca em fumaça densa."
            }
          },
          "aprimoramentos": [
            {
              "custo": 5,
              "descricao": "muda o alcance para curto e o alvo para criaturas escolhidas.",
              "aumenta": false
            }
          ]
        }
      },
      "adivinhacao": {
        "detectar-ameacas": {
          "name": "Detectar Ameaças",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_detectevil.jpg",
          "system": {
            "circulo": "1",
            "escola": "adv",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "duracao": "Cena, até ser descarregada",
            "alvo": "Esfera de 18m de raio",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Você recebe uma intuição aguçada sobre perigos ao seu redor. Quando uma criatura hostil ou armadilha entra na área do efeito, você faz um teste de Percepção (CD determinada pelo mestre de acordo com a situação). Se passar, sabe a origem (criatura ou armadilha), direção e distância do perigo. Se falhar, sabe apenas que o perigo existe."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "além do normal, você não fica surpreso e desprevenido contra perigos detectados com sucesso e recebe +5 em testes de resistência contra armadilhas. Requer 2º círculo.",
              "aumenta": false
            }
          ]
        },
        "orientacao": {
          "name": "Orientação",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_guidance.jpg",
          "system": {
            "circulo": "1",
            "escola": "adv",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "duracao": "1 rodada",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Em seu próximo teste de perícia, o alvo pode rolar dois dados e ficar com o melhor resultado"
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda a duração para cena. Em vez do normal, escolha um atributo. Sempre que o alvo fizer um teste de perícia baseado no atributo escolhido, pode rolar dois dados e ficar com o melhor resultado. Não se aplica a testes de ataque ou resistência.\nRequer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda a duração para cena. Escolha entre atributos físicos (Força, Destreza e Constituição) ou mentais (Inteligência, Sabedoria e Carisma). Sempre que o alvo fizer um teste de perícia, pode rolar dois dados e ficar com o melhor resultado. Não se aplica a testes de ataque ou resistência. Requer 3º círculo.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda o alvo para criaturas escolhidas. Requer 3º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "convocacao": {
        "arma-espiritual": {
          "name": "Arma Espiritual",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_spiritualguidence.jpg",
          "system": {
            "circulo": "1",
            "escola": "convocacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Você invoca a arma preferida de sua divindade (se tiver uma), que surge flutuando a seu lado. Uma vez por rodada, quando você sofre um ataque corpo a corpo, pode usar uma reação para que a arma cause automaticamente 2d6pontos de dano do tipo da arma — por exemplo, uma espada longa causa dano de corte — no oponente que fez o ataque. Esta magia se dissipa se você morrer."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o bônus na Defesa em +1.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "muda a duração para sustentada. Além do normal, uma vez por rodada, você pode gastar uma ação livre para fazer a arma acertar automaticamente um alvo adjacente. Se a arma atacar, não poderá contra-atacar até seu próximo turno. Requer 2o círculo.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "muda o tipo do dano para essência. Requer 2o círculo.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "invoca duas armas, permitindo que você contra-ataque (ou ataque, se usar o aprimoramento acima) duas vezes por rodada. Requer 3o círculo.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "aumenta o dano causado pela arma em +1d6, limitado pelo círculo máximo de magia que você pode lançar.",
              "aumenta": true
            }
          ]
        },
        "caminhos-da-natureza": {
          "name": "Caminhos da Natureza",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_naturepath.jpg",
          "system": {
            "circulo": "1",
            "escola": "convocacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "duracao": "1 dia",
            "alvo": "criaturas escolhidas",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Você invoca espíritos da natureza, pedindo que eles abram seu caminho. As criaturas afetadas recebem deslocamento +3m e ignoram penalidades por terreno difícil em terrenos naturais."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o bônus de deslocamento em +3m.",
              "aumenta": true
            }
          ]
        },
        "criar-elementos": {
          "name": "Criar Elementos",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_elementalprecision_01.jpg",
          "system": {
            "circulo": "1",
            "escola": "convocacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Você cria uma pequena porção de um elemento, a sua escolha. Os elementos criados são reais, não mágicos. Elementos físicos devem surgir em uma superfície. Em vez de um cubo, pode-se criar objetos simples (sem partes móveis) feitos de gelo, terra ou pedra.Água: enche um recipiente de tamanho Minúsculo (como um odre) com água potável ou cria um cubo de gelo de tamanho Minúsculo.Ar: cria um vento fraco em um quadrado de 1,5m. Isso purifica a área de qualquer gás ou fumaça, ou remove névoa por uma rodada.Fogo: cria uma chama que ilumina como uma tocha. Você pode segurá-la na palma de sua mão sem se queimar, ou fazê-la surgir em um quadrado de 1,5m. Se uma criatura ou objeto estiver no quadrado, sofre 1d6 pontos de dano de fogo; se falhar num teste de Reflexos, pega fogo.Terra: cria um cubo de tamanho Minúsculo feito de terra, argila ou pedra."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "se escolheu fogo, aumenta o dano inicial de cada chama em +1d6.",
              "aumenta": true
            }
          ]
        }
      },
      "encantamento": {
        "acalmar-animal": {
          "name": "Acalmar Animal",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_calmanimal.jpg",
          "system": {
            "circulo": "1",
            "escola": "encantamento",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 animal",
            "resistencia": "Vontade anula",
            "custo": "1 PM",
            "description": {
              "value": "O animal fica prestativo em relação a você. Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível. Você recebe +10 nos testes de Adestramento e Diplomacia que fizer contra o animal. Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é dissipada e ele retorna à atitude que tinha antes (ou piorada, de acordo com o mestre). Se tratar bem o alvo, a atitude pode permanecer mesmo após o término da magia."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o número de alvos em +1.",
              "aumenta": true
            },
            {
              "custo": 5,
              "descricao": "muda o alvo para 1 monstro ou espírito. Requer 3o círculo.",
              "aumenta": false
            }
          ]
        },
        "bencao": {
          "name": "Bênção",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_blessing.jpg",
          "system": {
            "circulo": "1",
            "escola": "encantamento",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "Aliados",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Abençoa os alvos, que recebem +1 em testes de ataque e rolagens de dano. Bênção anula Perdição."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta os bônus em +1, limitado pelo círculo máximo de magia que você pode lançar.",
              "aumenta": true
            }
          ]
        },
        "comando": {
          "name": "Comando",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_command.jpg",
          "system": {
            "circulo": "1",
            "escola": "encantamento",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "duracao": "1 rodada",
            "alvo": "1 humanóide",
            "resistencia": "Vontade anula",
            "custo": "1 PM",
            "description": {
              "value": "Esta magia permite que você dê uma ordem irresistível a um humanoide dentro do alcance. O alvo deve ser capaz de ouvir a ordem, mas não precisa entendê-la. Se falhar no teste de resistência de Vontade, ele obedecerá ao comando no seu próximo turno da melhor maneira possível. Você pode escolher entre os seguintes comandos: Fuja: O alvo gasta seu turno se afastando de você, utilizando todas as suas ações. Largue: O alvo solta quaisquer itens que esteja segurando e não pode pegá-los novamente até o início de seu próximo turno. Como esta é uma ação livre, ele ainda pode executar outras ações, exceto pegar o que largou. Pare: O alvo fica pasmo (apenas uma vez por cena). Sente: Com uma ação livre, o alvo senta no chão (se estava pendurado ou voando, desce até o chão). Ele pode fazer outras ações, mas não se levantar até o início de seu próximo turno. Venha: O alvo gasta seu turno se aproximando de você, utilizando todas as suas ações."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta a quantidade de alvos em +1",
              "aumenta": true
            }
          ]
        },
        "tranquilidade": {
          "name": "Tranquilidade",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_tranquility.jpg",
          "system": {
            "circulo": "1",
            "escola": "encantamento",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 animal ou humanóide",
            "resistencia": "Vontade parcial",
            "custo": "1 PM",
            "description": {
              "value": "Você emana ondas de serenidade. Se falhar na resistência, o alvo tem sua atitude mudada para indiferente (veja a página 259) e não pode atacar ou realizar qualquer ação agressiva. Se passar, sofre –2 em testes de ataque. Qualquer ação hostil contra o alvo ou seus aliados dissipa a magia e faz ele retornar à atitude que tinha antes (ou pior, de acordo com o mestre)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 5,
              "descricao": "muda o alcance para médio e o alvo para criaturas escolhidas. Requer 3º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "evocacao": {
        "consagrar": {
          "name": "Consagrar",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_consecration.jpg",
          "system": {
            "circulo": "1",
            "escola": "evocacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "longo",
            "duracao": "1 dia",
            "alvo": "esfera com 9m de raio",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Você enche a área com energia positiva. Pontos de vida curados por efeitos de luz são maximizados dentro da área. Isso também afeta dano causado em mortos-vivos por esses efeitos. Por exemplo, Curar Ferimentos cura automaticamente 18 PV. Esta magia não pode ser lançada em uma área contendo um símbolo visível dedicado a uma divindade que não a sua. Consagrar anula Profanar."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta as penalidades para mortos-vivos em -1.",
              "aumenta": true
            },
            {
              "custo": 9,
              "descricao": "muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo.",
              "aumenta": false
            }
          ]
        },
        "curar-ferimentos": {
          "name": "Curar Ferimentos",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_heal.jpg",
          "system": {
            "circulo": "1",
            "escola": "evocacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Você canaliza energia positiva que recupera 2d8+2 pontos de vida na criatura tocada."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "também remove uma condição de fadiga do alvo.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "muda o alcance para curto.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda o alcance para curto e o alvo para criaturas escolhidas.",
              "aumenta": false
            }
          ]
        },
        "despedacar": {
          "name": "Despedaçar",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_smite.jpg",
          "system": {
            "circulo": "1",
            "escola": "evocacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 criatura ou objeto mundano pequeno",
            "resistencia": "Fortitude parcial ou Reflexos anula",
            "custo": "1 PM",
            "description": {
              "value": "Esta magia emite um som alto e agudo. O alvo sofre 1d8+2 pontos de dano de impacto (ou o dobro disso e ignora RD se for um construto ou objeto mundano) e fica Atordoado por uma rodada (apenas uma vez por cena). Um teste de Fortitude reduz o dano à metade e evita o atordoamento."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o dano em +1d8+2.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "muda o alvo para objeto mundano Médio. Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda o alvo para objeto mundano Grande. Requer 3º círculo.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "muda o alvo para objeto mundano Enorme. Requer 4º círculo.",
              "aumenta": false
            },
            {
              "custo": 14,
              "descricao": "muda o alvo para objeto mundano Colossal. Requer 5º círculo.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda o alcance para pessoal e a área para esfera de 6m de raio. Todas as criaturas e objetos na área são afetados.",
              "aumenta": false
            }
          ]
        }
      },
      "necromancia": {
        "infligir-ferimentos": {
          "name": "Infligir Ferimentos",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_inflictpain.jpg",
          "system": {
            "circulo": "1",
            "escola": "necromancia",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Fortitude reduz à metade",
            "custo": "1 PM",
            "description": {
              "value": "Você canaliza energia negativa contra um alvo, causando 2d8+2 pontos de dano de trevas (ou curando 2d8+2 PV, se for um morto-vivo). Infligir Ferimentos anula Curar Ferimentos."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o dano em 1d8+1.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "muda a resistência para nenhum. Como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e o efeito da magia.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda o alcance para curto e o alvo para criaturas escolhidas.",
              "aumenta": false
            }
          ]
        },
        "perdicao": {
          "name": "Perdição",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curse.jpg",
          "system": {
            "circulo": "1",
            "escola": "necromancia",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "Criaturas Escolhidas",
            "resistencia": "nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Amaldiçoa os alvos, que recebem –1 em testes de ataque e rolagens de dano. Perdição anula Bênção."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta as penalidades em -1, limitado pelo círculo máximo de magia que você pode lançar.",
              "aumenta": true
            }
          ]
        },
        "profanar": {
          "name": "Profanar",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_desecration.jpg",
          "system": {
            "circulo": "1",
            "escola": "necromancia",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "longo",
            "duracao": "1 dia",
            "alvo": "esfera com 9m de raio",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Você enche a área com energia negativa. Dano causado por efeitos de trevas é maximizado dentro da área. Isso também afeta PV curados em mortos-vivos por esses efeitos. Esta magia não pode ser lançada em uma área contendo um símbolo visível dedicado a uma divindade que não a sua. Profanar anula Consagrar."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta os bônus para mortos-vivos em +1.",
              "aumenta": true
            },
            {
              "custo": 9,
              "descricao": "muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "transmutacao": {
        "abencoar-alimentos": {
          "name": "Abençoar Alimentos",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_blessingoffood.jpg",
          "system": {
            "circulo": "1",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "Alimento para 1 criatura",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Você purifica e abençoa uma porção de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado próprio para consumo. Além disso, se for consumido até o final da duração, o alimento oferece 5 PV temporários ou 1 PM temporário (além de quaisquer bônus que já oferecesse). Bônus de alimentação duram um dia e cada personagem só pode receber um bônus de alimentação por dia."
            }
          }
        },
        "armamento-da-natureza": {
          "name": "Armamento da Natureza",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_natureweapon.jpg",
          "system": {
            "circulo": "1",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 arma (veja texto)",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Você fortalece uma arma mundana primitiva (sem custo em T$, como bordão, clava, funda ou tacape), uma arma natural ou um ataque desarmado. O dano da arma aumenta em um passo e ela é considerada mágica. Ao lançar a magia, você pode mudar o tipo de dano da arma (escolhendo entre corte, impacto ou perfuração)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda a execução para ação de movimento.",
              "aumenta": false
            },
            {
              "custo": 3,
              "descricao": "aumenta o bônus nos testes de ataque em +1.",
              "aumenta": true
            },
            {
              "custo": 5,
              "descricao": "aumenta o dano da arma em mais um passo.",
              "aumenta": true
            }
          ]
        },
        "controlar-plantas": {
          "name": "Controlar Plantas",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_controlplants.jpg",
          "system": {
            "circulo": "1",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "quadrado com 9m de lado",
            "resistencia": "Reflexos anula",
            "custo": "1 PM",
            "description": {
              "value": "Esta magia só pode ser lançada em uma área com vegetação. As plantas se enroscam nas criaturas da área. Aquelas que falharem na resistência ficam Enredado. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo. Além disso, a área é considerada terreno difícil. No início de seus turnos, a vegetação tenta enredar novamente qualquer criatura na área, exigindo um novo teste de Reflexos."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda o alcance para pessoal, a área para alvo (você) e a resistência para nenhuma. Em vez do normal, você consegue se comunicar com plantas, que começam com atitude prestativa em relação a você. Além disso, você pode fazer testes de Diplomacia com plantas. Em geral, plantas têm uma percepção limitada de seus arredores e normalmente fornecem respostas simplórias.",
              "aumenta": false
            }
          ]
        }
      }
    },
    "2-circulo": {
      "abjuracao": {
        "circulo-da-justica": {
          "name": "Círculo da Justiça",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/circulo-da-justica.webp",
          "system": {
            "circulo": "2",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "curto",
            "duracao": "1 dia",
            "alvo": "cubo com 9m de lado;",
            "resistencia": "Vontade parcial",
            "custo": "3 PM",
            "description": {
              "value": "Também conhecida como Lágrimas do Deus da Trapaça, esta magia é usada em tribunais e para proteger áreas sensíveis. Criaturas na área sofrem –10 em testes de Acrobacia, Enganação, Furtividade e Ladinagem e não podem mentir deliberadamente — mas podem tentar evitar perguntas que normalmente responderiam com uma mentira (sendo evasivas ou cometendo omissões, por exemplo). Uma criatura que passe na resistência tem as penalidades reduzidas para –5 e pode mentir."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "muda a execução para ação padrão, o alcance para pessoal, o alvo para você, a duração para cena e a resistência para nenhuma. Em vez do normal, qualquer criatura ou objeto invisível em alcance curto se torna visível. Isso não dissipa o efeito mágico; se sair do seu alcance, a criatura ou objeto voltam a ficar invisíveis.",
              "aumenta": false
            },
            {
              "custo": 7,
              "descricao": "muda a duração para permanente e adiciona componente material (balança de prata no valor de T$ 5.000).",
              "aumenta": false
            }
          ]
        },
        "vestimenta-da-fe": {
          "name": "Vestimenta da Fé",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/vestimenta-da-fe.webp",
          "system": {
            "circulo": "2",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "duracao": "1 dia",
            "alvo": "1 armadura, escudo ou vestimenta",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Você fortalece um item, aumentando o bônus de Defesa de uma armadura ou escudo em +2. No caso de um vestuário, ele passa a oferecer +2 na Defesa (não cumulativo com armadura). Os efeitos desta magia são uma melhoria no item, portanto são cumulativos com outras magias, mas não com bônus por encantos nesse item."
            }
          },
          "aprimoramentos": [
            {
              "custo": 4,
              "descricao": "aumenta o bônus em +1.",
              "aumenta": true
            },
            {
              "custo": 7,
              "descricao": "o objeto também oferece resistência a dano 5. Requer 4º círculo.",
              "aumenta": false
            },
            {
              "custo": 0,
              "descricao": "Aumenta o bônus em resistência em +1 (relativo ao efeito de +4 PM, que aumenta o bônus fornecido pela magia).",
              "aumenta": true
            }
          ]
        }
      },
      "adivinhacao": {
        "augurio": {
          "name": "Augúrio",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/augurio.webp",
          "system": {
            "circulo": "2",
            "escola": "adv",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Esta magia diz se uma ação que você tomará em breve — no máximo uma hora no futuro — trará resultados bons ou ruins. O mestre rola 1d6 em segredo; com um resultado de 2 a 6, a magia funciona e você recebe uma das seguintes respostas: \"felicidade\" (a ação trará bons resultados); \"miséria\" (a ação trará maus resultados); \"felicidade e miséria\" (para ambos) ou \"nada\" (para ações que não trarão resultados bons ou ruins). Com um resultado 1, a magia falha e oferece o resultado \"nada\". Não há como saber se esse resultado foi dado porque a magia falhou ou não. Lançar esta magia múltiplas vezes sobre o mesmo assunto gera sempre o primeiro resultado. Por exemplo, se o grupo está prestes a entrar em uma câmara, o augúrio dirá \"felicidade\" se a câmara contém um tesouro desprotegido, \"miséria\" se contém um monstro, \"felicidade e miséria\" se houver um tesouro e um monstro ou \"nada\" se a câmara estiver vazia."
            }
          },
          "aprimoramentos": [
            {
              "custo": 7,
              "descricao": "muda a execução para 10 minutos e a duração para 1 minuto. Em vez do normal, você consulta uma divindade, podendo fazer uma pergunta por rodada, desde que ela possa ser respondida com \"sim\", \"não\" ou \"não sei\" (embora poderosos, os deuses não são oniscientes). O mestre rola a chance de falha para cada pergunta. Em caso de falha, a resposta também é \"não sei\". Requer 4º círculo.",
              "aumenta": false
            },
            {
              "custo": 7,
              "descricao": "o mestre rola 1d12; a magia só falha em um resultado 1.",
              "aumenta": false
            },
            {
              "custo": 12,
              "descricao": "o mestre rola 1d20; a magia só falha em um resultado 1.",
              "aumenta": false
            }
          ]
        },
        "condicao": {
          "name": "Condição",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/condicao.webp",
          "system": {
            "circulo": "2",
            "escola": "adv",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "até 5 criaturas",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Pela duração da magia, você sabe a posição e status (PV atuais, se estão sob efeito de magia...) dos alvos. Depois de lançada, a distância entre você e os alvos não importa — a magia só deixa de detectar um alvo se ele morrer ou for para outro plano."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "aumenta o número de alvos em +1.",
              "aumenta": true
            },
            {
              "custo": 1,
              "descricao": "aumenta a duração para 1 dia.",
              "aumenta": true
            }
          ]
        },
        "globo-da-verdade": {
          "name": "Globo da Verdade",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/globo-da-verdade.webp",
          "system": {
            "circulo": "2",
            "escola": "adv",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Cria um globo flutuante e intangível, com 50cm de diâmetro. O globo mostra uma cena vista até uma semana atrás por você ou por uma criatura que você toque ao lançar a magia (mediante uma pergunta; a criatura pode fazer um teste de Vontade para anular o efeito), permitindo que outras pessoas a vejam."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "o globo mostra uma cena vista até um mês atrás.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "o globo mostra uma cena vista até um ano atrás.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "ao lançar a magia, você pode tocar um cadáver. O globo mostra a última cena vista por essa criatura.",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "muda o alcance para longo e o efeito para 10 globos. Todos mostram a mesma cena.",
              "aumenta": false
            }
          ]
        },
        "mente-divina": {
          "name": "Mente Divina",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/mente-divina.webp",
          "system": {
            "circulo": "2",
            "escola": "adv",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Você fortalece a mente do alvo. Ele recebe +2 em Inteligência, Sabedoria ou Carisma, a sua escolha. Esse aumento não oferece PV, PM ou perícias adicionais."
            }
          },
          "aprimoramentos": [
            {
              "custo": 7,
              "descricao": "em vez do normal, o alvo recebe +4 no atributo escolhido. Requer 4º círculo.",
              "aumenta": false
            },
            {
              "custo": 0,
              "descricao": "+2 Inteligência",
              "aumenta": true
            },
            {
              "custo": 0,
              "descricao": "+2 Sabedoria",
              "aumenta": true
            },
            {
              "custo": 0,
              "descricao": "+2 Carisma",
              "aumenta": true
            },
            {
              "custo": 15,
              "descricao": "em vez do normal, o alvo recebe +4 nos três atributos mentais. Requer 5º círculo.",
              "aumenta": false
            }
          ]
        },
        "voz-divina": {
          "name": "Voz Divina",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/voz-divina.webp",
          "system": {
            "circulo": "2",
            "escola": "adv",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Você pode conversar com criaturas de qualquer raça e tipo: animal, construto, espírito, humanoide, monstro ou morto-vivo. Pode fazer perguntas e entende suas respostas, mesmo sem um idioma em comum ou se a criatura não for capaz de falar, mas respeitando os limites da Inteligência dela. A atitude dessas criaturas não é alterada, mas você pode usar a perícia Diplomacia para tentar mudar sua atitude."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "você concede um pouco de vida a um cadáver, suficiente para que ele responda a suas perguntas. O conhecimento do corpo é limitado ao que ele tinha enquanto vivo e suas respostas são curtas e enigmáticas. Um corpo só pode ser alvo desta magia uma vez. Ela também não funciona em um corpo cuja cabeça tenha sido destruída.",
              "aumenta": false
            },
            {
              "custo": 1,
              "descricao": "você pode falar com plantas (normais ou monstruosas) e rochas. Plantas e rochas têm percepção limitada de seus arredores e normalmente fornecem respostas simplórias.",
              "aumenta": false
            }
          ]
        }
      },
      "convocacao": {
        "enxame-de-pestes": {
          "name": "Enxame de Pestes",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/enxame-de-pestes.webp",
          "system": {
            "circulo": "2",
            "escola": "convocacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "medio",
            "resistencia": "Fortitude reduz à metade",
            "custo": "3 PM",
            "description": {
              "value": "Você conjura um enxame de criaturas a sua escolha, como besouros, gafanhotos, ratos, morcegos ou serpentes. O enxame pode passar pelo espaço de outras criaturas e não impede que outras criaturas entrem no espaço dele. No final de seus turnos, o enxame causa 2d12 pontos de dano de corte a qualquer criatura em seu espaço (Fortitude reduz à metade). Você pode gastar uma ação de movimento para mover o enxame 12m."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o dano em +1d12.",
              "aumenta": true
            },
            {
              "custo": 5,
              "descricao": "aumenta o número de enxames em +1. Eles não podem ocupar o mesmo espaço. Requer 3º círculo.",
              "aumenta": true
            },
            {
              "custo": 7,
              "descricao": "muda a resistência para Reflexos reduz à metade e o enxame para criaturas elementais. Ele causa 5d12 pontos do dano (a sua escolha entre ácido, eletricidade, fogo ou frio). O resto da magia segue normal. Requer 4º círculo.",
              "aumenta": false
            }
          ]
        },
        "soco-do-mestre": {
          "name": "Soco do Mestre",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/soco-do-mestre.webp",
          "system": {
            "circulo": "2",
            "escola": "convocacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "1 criatura",
            "resistencia": "Fortitude parcial",
            "custo": "3 PM",
            "description": {
              "value": "Ninguém sabe se Mestre foi realmente o criador desta magia — mas ele foi o primeiro a utilizá-la. Você fecha o punho e gesticula como se estivesse golpeando o alvo, causando dano de impacto igual a 4d6 + sua Força. A vítima é empurrada 3m na direção oposta à sua. Passar no teste de resistência reduz o dano à metade e evita o empurrão."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "muda o alcance para pessoal, o alvo para você, a duração para cena e a resistência para nenhuma. Em vez do normal, seus ataques corpo a corpo passam a acertar inimigos distantes. Seu alcance natural aumenta em 3m; uma criatura Média pode atacar adversários a até 4,5m, por exemplo.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "aumenta o dano em +1d6.",
              "aumenta": true
            },
            {
              "custo": 4,
              "descricao": "aumenta o empurrão em +3m.",
              "aumenta": true
            },
            {
              "custo": 5,
              "descricao": "muda o tipo do dano para essência.",
              "aumenta": false
            }
          ]
        }
      },
      "encantamento": {
        "aliado-animal": {
          "name": "Aliado Animal",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/aliado-animal.webp",
          "system": {
            "circulo": "2",
            "escola": "encantamento",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 animal prestativo",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Você cria um vínculo mental com um animal prestativo em relação a você. O Aliado Animal obedece a você no melhor de suas capacidades, mesmo que isso arrisque a vida dele. Ele funciona como um parceiro veterano, de um tipo a sua escolha entre ajudante, combatente, fortão, guardião, montaria ou perseguidor."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "muda o alvo para 1 animal Minúsculo e a duração para 1 semana. Em vez do normal, o animal se desloca no melhor de suas capacidades até um local designado por você - em geral, para levar um item, carta ou similar. Quando o animal chega ao destino, fica esperando até o fim da magia, permitindo apenas que uma ou mais criaturas escolhidas por você se aproximem e peguem o que ele estiver carregando.",
              "aumenta": false
            },
            {
              "custo": 7,
              "descricao": "muda o parceiro para mestre. Requer 3º círculo.",
              "aumenta": false
            },
            {
              "custo": 12,
              "descricao": "muda o alvo para 2 animais prestativos. Cada animal funciona como um parceiro de um tipo diferente, e você pode receber a ajuda de ambos (mas ainda precisa seguir o limite de parceiros de acordo com o seu nível de personagem). Requer 4º círculo.",
              "aumenta": false
            }
          ]
        },
        "oracao": {
          "name": "Oração",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/oracao.webp",
          "system": {
            "circulo": "2",
            "escola": "encantamento",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "todas as criaturas (veja texto)",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Você e todos os seus aliados no alcance recebem +2 em testes de perícia e rolagens de dano, e todos os seus inimigos no alcance sofrem –2 em testes de perícia e rolagens de dano. Esse efeito é cumulativo com outras magias. Componente Material: T$ 25por PM gastos em incensos ou outras oferendas."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta os bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "aumenta as penalidades em -1, limitado pelo círculo máximo de magia que você pode lançar.",
              "aumenta": true
            },
            {
              "custo": 7,
              "descricao": "muda o alcance para médio. Requer 3º círculo.",
              "aumenta": false
            },
            {
              "custo": 12,
              "descricao": "muda a duração para cena. Requer 4º círculo",
              "aumenta": false
            }
          ]
        }
      },
      "evocacao": {
        "controlar-fogo": {
          "name": "Controlar Fogo",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/controlar-fogo.webp",
          "system": {
            "circulo": "2",
            "escola": "evocacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "veja texto",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Você pode criar, moldar, mover ou extinguir chamas e emanações de calor. Ao lançar a magia, escolha um dos efeitos. Chamejar: o alvo é armas escolhidas. Elas causam +1d6 de dano de fogo. Também afeta armas naturais e ataques desarmados. Esquentar: o alvo é 1 objeto, que começa a esquentar. Ele sofre 1d6 pontos de dano de fogo por rodada e causa o mesmo dano a qualquer criatura que o esteja segurando ou vestindo. A critério do mestre, o objeto ou a criatura vestindo-o também podem fica em chamas. Uma criatura pode gastar uma ação completa para resfriar o objeto (jogando areia ou se jogando numa fonte de água próxima, por exemplo) e cancelar o efeito da magia. Extinguir: o alvo é 1 chama de tamanho Grande ou menor, que é apagada. Isso cria uma nuvem de fumaça que ocupa uma esfera de 3m de raio centrada onde estava a chama. Dentro da fumaça, criaturas têm camuflagem leve. Modelar: o alvo é 1 chama de tamanho Grande ou menor. A cada rodada, você pode gastar uma ação livre para movimentá-la 9m em qualquer direção. Se atravessar o espaço ocupado por uma criatura, causa 2d6 pontos de dano de fogo. Uma criatura só pode receber dano dessa maneira uma vez por rodada."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "muda a duração para sustentada e a resistência para Reflexos reduz à metade. Em vez do normal, você deve escolher o seguinte efeito. Labaredas: a cada rodada, você pode gastar uma ação de movimento para projetar uma labareda, acertando um alvo em alcance curto a partir da chama. O alvo sofre 4d6 pontos de dano de fogo (Reflexos reduz à metade).",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "aumenta o dano em +1d6 (exceto Chamejar).",
              "aumenta": true
            }
          ]
        },
        "purificacao": {
          "name": "Purificação",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/purificacao.webp",
          "system": {
            "circulo": "2",
            "escola": "evocacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Você purifica a criatura tocada, removendo uma condição dela entre abalado, Apavorado, Alquebrado, Atordoado, Cego, Confuso, Debilitado, Enjoado, Envenenado, Esmorecido, Exausto, Fascinado, Fatigado,Fraco, Frustrado, Lento, Ofuscado, Paralisado, Pasmo ou Surdo."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "também cura todos os PV perdidos por veneno.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "em vez de uma, remove todas as condições listadas.",
              "aumenta": false
            },
            {
              "custo": 7,
              "descricao": "também dissipa magias e efeitos prejudiciais de encantamento, necromancia e transmutação afetando o alvo. Requer 3º círculo.",
              "aumenta": false
            }
          ]
        },
        "raio-solar": {
          "name": "Raio Solar",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/raio-solar.webp",
          "system": {
            "circulo": "2",
            "escola": "evocacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "linha",
            "resistencia": "Reflexos (veja texto)",
            "custo": "3 PM",
            "description": {
              "value": "Você canaliza uma poderosa rajada de energia positiva que ilumina o campo de batalha. Criaturas na área sofrem 4d8 pontos de dano de luz (ou 4d12, se forem mortos-vivos) e ficam Ofuscado por uma rodada. Se passarem na resistência, sofrem metade do dano e não ficam ofuscadas. Cego"
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o dano ou cura em +1d8 (ou +1d12 em mortos-vivos).",
              "aumenta": true
            }
          ]
        },
        "tempestade-divina": {
          "name": "Tempestade Divina",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/tempestade-divina.webp",
          "system": {
            "circulo": "2",
            "escola": "evocacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "longo",
            "alvo": "cilindro com 15m de raio e 15m de altura",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Esta magia só pode ser usada em ambientes abertos. A área fica sujeita a um vendaval — ataques à distância sofrem penalidade de –5, chamas são apagadas e névoas são dissipadas. Você também pode gerar chuva (–5 em testes de Percepção), neve (como chuva, e a área se torna terreno difícil) ou granizo (como chuva, mais 1 ponto de dano de impacto por rodada, no início de seus turnos)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "muda a duração para sustentada. Além do normal, uma vez por rodada você pode gastar uma ação padrão para fazer um raio cair sobre um alvo na área, causando 3d8 pontos de dano de eltricidade (Reflexos reduz à metade).",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "aumenta o dano de raios (veja acima) em +1d8.",
              "aumenta": true
            }
          ]
        }
      },
      "ilusao": {
        "silencio": {
          "name": "Silêncio",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/silencio.webp",
          "system": {
            "circulo": "2",
            "escola": "ilusao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "esfera com 6m de raio",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Um silêncio sepulcral recai sobre a área e nenhum som é produzido nela. Enquanto estiverem na área, todas as criaturas ficam Surdo. Além disso, como lançar magias exige palavras mágicas, normalmente nenhuma magia pode ser lançada dentro da área."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "muda a área para alvo de 1 objeto. Em vez do normal, o alvo emana uma área de silêncio com 3m de raio. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "muda a duração para cena. Em vez do normal, nenhum som pode deixar a área, mas criaturas dentro da área podem falar, ouvir e lançar magias com palavras mágicas normalmente.",
              "aumenta": false
            }
          ]
        }
      },
      "necromancia": {
        "miasma-mefitico": {
          "name": "Miasma Mefítico",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/miasma-mefitico.webp",
          "system": {
            "circulo": "2",
            "escola": "necromancia",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "nuvem com 6m de raio",
            "resistencia": "Fortitude (veja texto)",
            "custo": "3 PM",
            "description": {
              "value": "A área é coberta por emanações letais. Criaturas na área sofrem 5d6 pontos de dano de ácido e ficam Enjoado por 1 rodada. Se passarem na resistência, sofrem metade do dano e não ficam enjoadas."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o dano em +1d6.",
              "aumenta": true
            }
          ]
        },
        "rogar-maldicao": {
          "name": "Rogar Maldição",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/rogar-maldicao.webp",
          "system": {
            "circulo": "2",
            "escola": "necromancia",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 criatura",
            "resistencia": "Fortitude anula",
            "custo": "3 PM",
            "description": {
              "value": "Você entoa cânticos maléficos que amaldiçoam uma vítima, criando efeitos variados. Ao lançar a magia, escolha entre os seguintes. Debilidade: o alvo fica Esmorecido e não pode se comunicar ou lançar magias. Ainda reconhece seus aliados e pode segui-los e ajudá-los, mas sempre de maneira simplória. Doença: muda a duração para instantânea. O alvo contrai uma doença a sua escolha, que o afeta imediatamente (sem período de incubação). Fraqueza: o alvo fica Debilitadoe Lento. Isolamento: o alvo perde o uso de um de seus cinco sentidos a sua escolha. Se perder a visão, fica Cego. Se perder a audição, fica Surdo. Se perder o olfato ou paladar, não pode usar a habilidade faro. Se perder o tato, fica Caído e não pode se levantar. Você também pode inventar sua própria maldição, usando esses exemplos como sugestões, mas o mestre tem a palavra final sobre o efeito."
            }
          },
          "aprimoramentos": [
            {
              "custo": 7,
              "descricao": "muda a duração para permanente e resistência para Fortitude parcial. Se passar, a criatura ainda sofre os efeitos da maldição, mas por 1 rodada. Requer 4º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "transmutacao": {
        "controlar-ar": {
          "name": "Controlar Ar",
          "type": "magia",
          "img": "icons/magic/air/wind-tornado-cyclone-white.webp",
          "system": {
            "circulo": "2",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "varia",
            "resistencia": "veja texto",
            "custo": "3 PM",
            "description": {
              "value": "ERRATA DO ALMANAQUE DRAGãO BRASIL (jamboeditora.com.br) Você pode controlar os movimentos e comportamentos de massas de ar. Ao lançar a magia, escolha um dos efeitos abaixo. Ascender:cria uma corrente de ar ascendente capaz de erguer do chão uma criatura ou objeto médio, fazendo o alvo ﬂutuar para cima e para baixo conforme sua vontade. Você pode gastar uma ação de movimento para subir ou descer o alvo até 6m por rodada, até um máximo de 30m de altura. Você não pode mover o alvo horizontalmente — mas o alvo pode, por exemplo, escalar uma colina ou se apoiar no teto para mover-se lateralmente (com metade de seu deslocamento normal). Uma criatura levitando fica vulnerável e sofre –2 nas jogadas de ataque. Alvos involuntários tem direito a um teste de Fortitude no início de seu turno para negar o efeito. Derrubar um alvo flutuando (simplesmente parando a corrente de ar) causa o dano normal de queda, mas um alvo que passe no teste pode \"nadar\" para o chão contra a corrente. Você pode usar essa opção para fazer uma manobra derrubar contra uma criatura voadora dentro do alcance, usando seu atributo-chave no lugar de Força. Sopro:cria uma lufada de vento a partir de suas mãos, que empurra qualquer criatura Média ou menor em um cone de 4,5m — faça uma manobraempurrarusando seu atributo-chave ao invés de força, usando o mesmo resultado de sua rolagem para todos os alvos. A lufada de vento também faz qualquer coisa que um vento forte e súbito faria, como levantar pó, dispersar vapores, apagar chamas, espalhar papéis ou mover uma embarcação. Manter o sopro ativo exige uma ação padrão. Vento:cria uma área de vento forte (Tormenta20 página 253) dentro do alcance da magia. Se lançada numa área que já esteja com algum efeito de vento, aumenta esse efeito em um passo. Manter o vento ativo requer uma ação de movimento. Você também pode usar essa opção para reduzir os efeitos de vento em uma área."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o limite de tamanho de criaturas e objetos afetados em um passo.",
              "aumenta": true
            }
          ]
        },
        "controlar-madeira": {
          "name": "Controlar Madeira",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/controlar-madeira.webp",
          "system": {
            "circulo": "2",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "1objeto de madeira grande ou menor",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Você molda, retorce, altera ou repele madeira. Se lançar esta magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Ao lançar a magia, escolha. Fortalecer: deixa o alvo mais resistente. Armas têm seu dano aumentado em um passo. Escudos têm seu bônus de Defesa aumentado em +2 (isso é uma melhoria no item, portanto é cumulativa com outras magias). Esses e outros itens de madeira recebem +5 na RD e dobram seus PV. Modelar: muda a forma do alvo. Pode transformar um galho em espada, criar uma porta onde antes havia apenas uma parede, transformar um tronco em uma caixa... Mas não pode criar mecanismos complexos (como uma besta) ou itens consumíveis. Repelir: o alvo é repelido por você. Se for uma arma, ataques feitos com ela contra você falham automaticamente. Se for uma porta ou outro objeto que possa ser aberto, ele vai se abrir quando você se aproximar, mesmo que esteja trancado. Um objeto que vá atingi-lo, como uma carroça, tronco ou barril, vai desviar ou parar adjacente a você, sem lhe causar dano. Os efeitos de regras em outros objetos de madeira ficam a cargo do mestre. Retorcer: estraga o alvo. Uma porta retorcida emperra (exigindo um teste de Força contra CD 25 para ser aberta). Armas e itens retorcidos impõem –5 em testes de perícia. Escudos retorcidos deixam de oferecer bônus (mas ainda impõem penalidades). Um barco retorcido começa a afundar e naufraga ao final da cena. Os efeitos de regras em outros objetos de madeira ficam a cargo do mestre."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "muda o alcance para pessoal, o alvo para você e a duração para 1 dia. Você e seu equipamento se transformam em uma árvore de tamanho Grande. Nessa forma, você não pode falar ou fazer ações físicas, mas consegue perceber seus arredores normalmente. Se for atacado nessa forma, a magia é dissipada. Um teste de Sobrevivência (CD 30) revela que você não é uma árvore verdadeira.",
              "aumenta": false
            },
            {
              "custo": 7,
              "descricao": "muda o alvo para Enorme ou menor. Requer 3º círculo.",
              "aumenta": false
            },
            {
              "custo": 12,
              "descricao": "muda o alvo para Colossal ou menor. Requer 4º círculo.",
              "aumenta": false
            }
          ]
        },
        "fisico-divino": {
          "name": "Físico Divino",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/fisico-divino.webp",
          "system": {
            "circulo": "2",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Você fortalece o corpo do alvo. Ele recebe +2 em Força, Destreza ou Constituição, a sua escolha. Esse aumento não oferece PV ou PM adicionais."
            }
          },
          "aprimoramentos": [
            {
              "custo": 7,
              "descricao": "em vez do normal, o alvo recebe +4 no atributo escolhido. Requer 4º círculo.",
              "aumenta": false
            },
            {
              "custo": 15,
              "descricao": "em vez do normal, o alvo recebe +4 nos três atributos físicos. Requer 5º círculo.",
              "aumenta": false
            },
            {
              "custo": 0,
              "descricao": "+2 em Força",
              "aumenta": true
            },
            {
              "custo": 0,
              "descricao": "+2 em Destreza",
              "aumenta": true
            },
            {
              "custo": 0,
              "descricao": "+2 em Constituição",
              "aumenta": true
            }
          ]
        }
      }
    },
    "3-circulo": {
      "abjuracao": {
        "banimento": {
          "name": "Banimento",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/banimento.webp",
          "system": {
            "circulo": "3",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "1d3+1 rodadas",
              "execucao": "especial"
            },
            "alcance": "curto",
            "alvo": "1 criatura",
            "resistencia": "Vontade parcial",
            "custo": "6 PM",
            "description": {
              "value": "Você expulsa uma criatura não nativa de Arton. Um alvo nativo de outro mundo (como muitos espíritos), é teletransportado de volta para um lugar aleatório de seu mundo de origem. Já um alvo morto-vivo tem sua conexão com as energias negativas rompidas, sendo reduzido a 0 PV. Se passar na resistência, em vez dos efeitos acima, o alvo fica enjoado por 1d4 rodadas. Se você tiver um ou mais itens que se oponham ao alvo de alguma maneira, a CD do teste de resistência aumenta em +2 por item. Por exemplo, se lançar a magia contra demônios do frio (vulneráveis a água benta e que odeiam luz e calor) enquanto segura um frasco de água benta e uma tocha acesa, a CD aumenta em +4. O mestre decide se determinado item é forte o bastante contra a criatura para isso."
            }
          },
          "aprimoramentos": [
            {
              "custo": 0,
              "descricao": "muda a resistência para nenhum. Em vez do normal, devolve automaticamente uma criatura conjurada (como por uma magia de convocação) para seu plano de origem.",
              "aumenta": false
            }
          ]
        },
        "protecao-contra-magia": {
          "name": "Proteção Contra Magia",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/protecao-contra-magia.webp",
          "system": {
            "circulo": "3",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Você protege o alvo contra efeitos mágicos nocivos. O alvo recebe +5 em testes de resistência contra magias."
            }
          },
          "aprimoramentos": [
            {
              "custo": 4,
              "descricao": "muda o bônus para +10. Requer 4º círculo.",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "em vez do normal, o alvo fica imune a uma escola de magia a sua escolha. Requer 4º Círculo.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "em vez do normal, o alvo fica imune a duas escolas de magia a sua escolha. Requer 5º Círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "adivinhacao": {
        "comunhao-com-a-natureza": {
          "name": "Comunhão com a Natureza",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/comunhao-com-a-natureza.webp",
          "system": {
            "circulo": "3",
            "escola": "adv",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "pessoal",
            "duracao": "1 dia",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Após uma breve união com a natureza local, você obtém informações e intuições sobre a região em que está, numa distância equivalente a um dia de viagem. Você recebe 6d4 dados de auxílio. Enquanto a magia durar, sempre que for realizar um teste de perícia em áreas naturais, você pode gastar 2d4 (mais 2d4 para cada círculo de magias acima do 3º que puder lançar) e adicionar o resultado rolado como bônus no teste. A magia termina se você ficar sem dados."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "muda a execução para 1 minuto e a duração para instantânea. Em vez do normal, você descobre 1d4+1 informações sobre os seguintes temas: terreno, animais, vegetais, minerais, cursos d'água e presença de criaturas antinaturais numa região natural em que você esteja. Você pode, por exemplo, descobrir a quantidade de cavernas (terreno), se uma planta rara existe (vegetais) e se há mortos-vivos (criaturas antinaturais) na região.",
              "aumenta": false
            },
            {
              "custo": 3,
              "descricao": "aumenta o número de dados de auxílio em +2.",
              "aumenta": true
            },
            {
              "custo": 4,
              "descricao": "muda o tipo dos dados de auxílio para d6.",
              "aumenta": false
            },
            {
              "custo": 8,
              "descricao": "muda o tipo dos dados de auxílio para d8.",
              "aumenta": false
            }
          ]
        }
      },
      "convocacao": {
        "servo-divino": {
          "name": "Servo Divino",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/servo-divino.webp",
          "system": {
            "circulo": "3",
            "escola": "convocacao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "duracao": "Cena ou até ser descarregada",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Você pede a sua divindade que envie um espírito para ajudá-lo. Esse espírito realiza uma tarefa a sua escolha que possa ser cumprida em até uma hora — desde algo simples como \"use suas asas para nos levar até o topo da montanha\" até algo complexo como \"escolte esses camponeses até o castelo\". A magia é descarregada quando a criatura cumpre a tarefa, retornando a seu plano natal. O tipo de criatura é escolhido pelo mestre, de acordo com as necessidades da tarefa.Componente material: um pagamento de T$ 100 ao espírito. A forma de pagamento varia — doações a um templo, um item mágico ou mesmo dinheiro."
            }
          },
          "aprimoramentos": [
            {
              "custo": 4,
              "descricao": "muda a duração para 1 dia ou até ser descarregada. O espírito realiza uma tarefa a sua escolha que exija até um dia. O custo do pagamento aumenta para T$ 500. O resto segue normal.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "muda a duração para 1 semana ou até ser descarregada. O espírito realiza uma tarefa que exija até uma semana. O custo do pagamento aumenta para T$ 1.000. O resto segue normal.",
              "aumenta": false
            }
          ]
        },
        "viagem-arborea": {
          "name": "Viagem Arbórea",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/viagem-arborea.webp",
          "system": {
            "circulo": "3",
            "escola": "convocacao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Como parte da execução, você entra em uma árvore adjacente que seja maior do que você. Você pode permanecer dentro da árvore, percebendo os arredores de forma normal (mas sem poder fazer ações). Você pode gastar uma ação de movimento para sair da mesma árvore, ou de qualquer outra dentro de 1km. Se estiver dentro de uma árvore que seja destruída, a magia termina e você sofre 10d6 pontos de dano de impacto. Enquanto a magia durar você pode gastar uma ação de movimento e 1 PM para entrar em outras árvores."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda o alcance para toque, o alvo para até cinco criaturas e a duração para instantânea. Os alvos entram em uma planta (de tamanho Médio ou maior) e saem em outra planta do mesmo tamanho a até 100km de distância, especificada em direção e distância aproximadas (como \"50km ao norte\").",
              "aumenta": false
            }
          ]
        }
      },
      "encantamento": {
        "despertar-consciencia": {
          "name": "Despertar Consciência",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/despertar-consciencia.webp",
          "system": {
            "circulo": "3",
            "escola": "encantamento",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "toque",
            "duracao": "1 dia",
            "alvo": "1 animal ou planta",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Você desperta a consciência de um animal ou planta. O alvo se torna um parceiro veterano de um tipo a sua escolha entre ajudante, combatente, fortão, guardião, médico, perseguidor ou vigilante. Se usar esta magia em um parceiro que já possua, o nível de poder de um de seus tipos aumenta em um passo (iniciante para veterano, veterano para mestre). Se já for um parceiro mestre, recebe o bônus de outro tipo de parceiro iniciante (entre as escolhas acima). O alvo se torna uma criatura racional, com Inteligência –1, e pode falar"
            }
          },
          "aprimoramentos": [
            {
              "custo": 4,
              "descricao": "muda o alvo para 1 escultura mundana inanimada. Além do normal, o alvo tem as mesmas características de um construto.",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "muda a duração para permanente e adiciona penalidade de -3 PM.",
              "aumenta": false
            }
          ]
        },
        "heroismo": {
          "name": "Heroísmo",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/heroismo.webp",
          "system": {
            "circulo": "3",
            "escola": "encantamento",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Esta magia imbui uma criatura com coragem e valentia sobrenaturais. O alvo fica imune a medo e recebe 40 pontos de vida temporários. Além disso, recebe +4 em testes de ataque e rolagens de dano contra o inimigo de maior ND na cena. Se houver múltiplos inimigos com o mesmo ND mais alto, você escolhe qual será o alvo dos bônus. Os bônus se aplicam a todos os tipos de ataque (corpo a corpo, à distância e magias de ataque)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda o bônus para +6.",
              "aumenta": false
            }
          ]
        },
        "missao-divina": {
          "name": "Missão Divina",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/missao-divina.webp",
          "system": {
            "circulo": "3",
            "escola": "encantamento",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "duracao": "1 semana ou até ser descarregada",
            "alvo": "1 criatura",
            "resistencia": "Vontade anula (veja texto)",
            "custo": "6 PM",
            "description": {
              "value": "Esta magia obriga o alvo a cumprir uma tarefa a sua escolha. Ela dura uma semana ou até o alvo cumprir a tarefa, o que vier primeiro. O alvo pode recusar a missão — mas, no fim de cada dia em que não se esforçar para cumprir a tarefa, deve fazer um teste de Vontade; se falhar, sofre uma penalidade cumulativa de –2 em todos os testes e rolagens. A Missão Divina não pode forçar uma criatura a um ato suicida, nem designar uma missão impossível (como matar uma criatura que não existe)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda o alcance para toque, a\nduração para permanente e adiciona\npenalidade de -1 PM. Em vez do normal,\nvocê inscreve uma marca (como uma tatuagem) na pele do alvo e escolhe um tipo de ação que ativará a marca. Normalmente, será cometer um crime (roubar, matar...) ou outra coisa contrária às Obrigações & Restrições de sua divindade. Sempre que a marca é ativada, o alvo recebe uma penalidade cumulativa de -2 em todos os testes. Muitas vezes, portar essa marca é um estigma por si só, já que esta magia normalmente é lançada em criminosos ou traidores. Uma magia que dissipe outras suprime a marca e suas penalidades por um dia; elas só podem ser totalmente removidas pelo conjurador original ou pela magia Purificação.",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "aumenta a duração para 1 ano ou até ser descarregada.",
              "aumenta": true
            }
          ]
        }
      },
      "evocacao": {
        "coluna-de-chamas": {
          "name": "Coluna de Chamas",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/coluna-de-chamas.webp",
          "system": {
            "circulo": "3",
            "escola": "evocacao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "longo",
            "alvo": "cilindro com 3m de raio e 30m de altura",
            "resistencia": "Reflexos reduz à metade",
            "custo": "6 PM",
            "description": {
              "value": "Um pilar de fogo sagrado desce dos céus, causando 6d6 pontos de dano de fogo mais 6d6 pontos de dano de luz nas criaturas e objetos livres na área."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "aumenta o dano de fogo em +1d6.",
              "aumenta": true
            },
            {
              "custo": 1,
              "descricao": "aumenta o dano de luz em +1d6.",
              "aumenta": true
            }
          ]
        },
        "dispersar-as-trevas": {
          "name": "Dispersar as Trevas",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/dispersar-trevas.webp",
          "system": {
            "circulo": "3",
            "escola": "evocacao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "duracao": "veja texto",
            "alvo": "Esfera de 6m de raio",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Esta magia cria um forte brilho (multicolorido ou de uma cor que remeta a sua divindade) que causa diversos efeitos. Todas as magias de 3º círculo ou menor ativas na área são dissipadas se você passar num teste de Religião contra a CD de cada magia. Seus aliados na área recebem +4 em testes de resistência e redução de trevas 10 até o fim da cena, protegidos por uma aura sutil da mesma cor. Inimigos na área ficam Cego por 1d4 rodadas (apenas uma vez pela magia). Dispersar as Trevas anula Anular a Luz (este efeito tem duração instantânea)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o bônus nas resistências em +1.",
              "aumenta": true
            },
            {
              "custo": 4,
              "descricao": "muda o alcance para curto, a área para alvo 1 criatura e a duração para cena. O alvo fica imune a efeitos de necromancia e trevas.",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "muda o círculo máximo de magias dissipadas para 4º. Requer 4º círculo.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "muda o círculo máximo de magias dissipadas para 5º. Requer 5º círculo.",
              "aumenta": false
            }
          ]
        },
        "sopro-da-salvacao": {
          "name": "Sopro da Salvação",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/sopro-da-salvacao.webp",
          "system": {
            "circulo": "3",
            "escola": "evocacao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "cone de 9m",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Você enche seus pulmões de energia positiva e sopra um cone de poeira reluzente. O sopro afeta apenas seus aliados na área, curando 2d8+4 pontos de vida e removendo uma das seguintes condições de todos os alvos: Abalado, Atordoado, Apavorado, Alquebrado, Cego, Confuso, Debilitado, Enjoado, Esmorecido, Exausto, Fascinado, Fatigado, Fraco, Frustrado, Lento, Paralisado, Pasmo e Surdo."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta a quantidade de cura em 1d8+2.",
              "aumenta": true
            },
            {
              "custo": 4,
              "descricao": "além do normal, se um aliado estiver com PV negativos, seus PV são levados a 0 e então a cura é aplicada.",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "remove todas as condições listadas, em vez de apenas uma.",
              "aumenta": false
            }
          ]
        }
      },
      "necromancia": {
        "anular-a-luz": {
          "name": "Anular a Luz",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/anular-luz.webp",
          "system": {
            "circulo": "3",
            "escola": "necromancia",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "duracao": "Ver Texto",
            "alvo": "esfera de 6m de raio",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Esta magia cria uma onda de escuridão que causa diversos efeitos. Todas as magias de 3º círculo ou menor ativas na área são dissipadas se você passar num teste de Religião contra a CD de cada magia. Seus aliados na área são protegidos por uma aura sombria e recebem +4 na Defesa até o fim da cena. Inimigos na área ficam Enjoadopor 1d4 rodadas (apenas uma vez por cena). Anular a Luz anula Dispersar as Trevas (este efeito tem duração instantânea)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o bônus na Defesa em +1.",
              "aumenta": true
            },
            {
              "custo": 4,
              "descricao": "muda o círculo máximo de magias dissipadas para 4º. Requer 4º Círculo.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "muda o círculo máximo de magias dissipadas para 5º. Requer 5º Círculo.",
              "aumenta": false
            }
          ]
        },
        "poeira-da-podridao": {
          "name": "Poeira da Podridão",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/poeira-da-podridao.webp",
          "system": {
            "circulo": "3",
            "escola": "necromancia",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "nuvem com 6m de raio",
            "resistencia": "Fortitude (veja texto)",
            "custo": "6 PM",
            "description": {
              "value": "Você manifesta uma nuvem de poeira carregada de energia negativa, que apodrece lentamente as criaturas na área. Ao lançar a magia, e no início de seus turnos, criaturas na área sofrem 2d8+8 pontos de dano de trevas (Fortitude reduz à metade). Alvos que falharem no teste não podem recuperar PV por uma rodada."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o dano em 1d8+4.",
              "aumenta": true
            }
          ]
        }
      },
      "transmutacao": {
        "controlar-agua": {
          "name": "Controlar Água",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/controlar-agua.webp",
          "system": {
            "circulo": "3",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "longo",
            "alvo": "esfera com 30m de raio",
            "resistencia": "Veja texto",
            "custo": "6 PM",
            "description": {
              "value": "Você controla os movimentos e comportamentos da água. Ao lançar a magia, escolha um dos efeitos abaixo. Congelar: toda a água mundana na área é congelada. Criaturas nadando na área ficam imóveis; escapar exige gastar uma ação padrão e passar num teste de Atletismo ou Acrobacia. Derreter: gelo mundano na área vira água e a magia termina. A critério do mestre, isso pode criar terreno difícil. Enchente: eleva o nível da água mundana na área em até 4,5m. A sua escolha, muda área para alvo: uma embarcação. O alvo recebe +3m em seu deslocamento pela duração do efeito. Evaporar: toda a água e gelo mundano na área evaporam instantaneamente e a magia termina. Elementais da água, plantas monstruosas e criaturas com imunidade a frio na área sofrem 10d8 pontos de dano de fogo; outras criaturas vivas recebem metade desse dano (Fortitude reduz à metade). Partir: diminui o nível de toda água mundana na área em até 4,5m. Em um corpo d'água raso, isso abre um caminho seco, que pode ser atravessado a pé. Em um corpo d'água profundo, cria um redemoinho que pode prender barcos (um teste de Pilotagem com CD igual à da magia permite ao piloto livrar a embarcação). Elementais da água na área ficam lentos."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o dano em +2d8.",
              "aumenta": true
            }
          ]
        },
        "controlar-terra": {
          "name": "Controlar Terra",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/controlar-terra.webp",
          "system": {
            "circulo": "3",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "longo",
            "alvo": "9 cubos com 1,5m de lado",
            "resistencia": "Veja texto",
            "custo": "6 PM",
            "description": {
              "value": "Você manipula a densidade e a forma de toda terra, pedra, lama, argila ou areia na área. Ao lançar a magia, escolha.Amolecer: se afetar o teto, uma coluna ou suporte, provoca um desabamento que causa 10d6 pontos de dano de impacto às criaturas na área (Reflexos reduz à metade). Se afetar um piso de terra ou pedra, cria terreno difícil de areia ou argila, respectivamente.Modelar: pode usar pedra ou argila para criar um ou mais objetos simples de tamanho Enorme ou menor (sem mecanismos ou partes móveis). Por exemplo, pode transformar um tijolo em uma maça, criar uma passagem onde antes havia apenas uma parede ou levantar uma ou mais paredes que oferecem cobertura total (RD 8 e 50 PV para cada 3m).Solidificar: transforma lama ou areia em terra ou pedra. Criaturas com os pés na superfície ficam agarradas. Elas podem se soltar com uma ação padrão e um teste de Acrobacia ou Atletismo."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "aumenta o número de cubos de 1,5m em +2.",
              "aumenta": true
            },
            {
              "custo": 1,
              "descricao": "muda o alcance para pessoal, o alvo para você e a duração para 1 dia. Você e seu equipamento fundem-se a uma superfície ou objeto adjacente feito de pedra, terra, argila ou areia que possa acomodá-lo. Você pode voltar ao espaço adjacente como uma ação livre, dissipando a magia. Enquanto mesclado, você não pode falar ou fazer ações físicas, mas consegue perceber seus arredores normalmente. Pequenos danos não o afetam, mas se o objeto (ou o trecho onde você está imerso) for destruído, a magia é dissipada, você volta a um espaço livre adjacente e sofre 10d6 pontos de dano de impacto.",
              "aumenta": false
            }
          ]
        },
        "potencia-divina": {
          "name": "Potência Divina",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/potencia-divina.webp",
          "system": {
            "circulo": "3",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Você canaliza o poder de sua divindade. Você aumenta uma categoria de tamanho (seu equipamento muda de acordo) e recebe Força +4 e RD 10. Você não pode lançar magias enquanto estiver sob efeito de Potência Divina."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o bônus de Força em +1.",
              "aumenta": true
            },
            {
              "custo": 5,
              "descricao": "aumenta a resistência a dano em +5.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "muda o alcance para toque e o alvo para 1 criatura. A magia falha se você e o alvo não forem devotos da mesma divindade.",
              "aumenta": false
            }
          ]
        }
      }
    },
    "4-circulo": {
      "abjuracao": {
        "cupula-de-repulsao": {
          "name": "Cúpula de Repulsão",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/cupula-de-repulsao.webp",
          "system": {
            "circulo": "4",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Vontade Anula",
            "custo": "10 PM",
            "description": {
              "value": "Uma cúpula de energia invisível o cerca, impedindo a aproximação de certas criaturas. Escolha um tipo de criatura (animais, espíritos, monstros...) ou uma raça de humanoides (elfos, goblins, minotauros..). Criaturas do grupo escolhido que tentem se aproximar a menos de 3m de você (ou seja, que tentem ficar adjacentes a você) devem fazer um teste de Vontade. Se falharem, não conseguem, gastam a ação e só podem tentar novamente na rodada seguinte. Isso impede ataques corpo a corpo, mas não ataques ou outros efeitos à distância. Se você tentar se aproximar além do limite de 3m, rompe a cúpula e a magia é dissipada."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "a cúpula impede criaturas de se aproximarem a menos de 4,5m de você (ou seja, deve haver dois quadrados entre você e as criaturas).",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "além do normal, criaturas afetadas também precisam fazer o teste de resistência se fizerem um ataque ou efeito à distância você. Se falharem, o efeito é desviado pela cúpula. Requer 5º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "adivinhacao": {
        "premonicao": {
          "name": "Premonição",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/premonicao.webp",
          "system": {
            "circulo": "4",
            "escola": "adv",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "Vislumbres do futuro permitem que você reavalie suas ações. Uma vez por rodada, você pode rolar novamente um teste recém realizado, mas deve aceitar o resultado da nova rolagem."
            }
          },
          "aprimoramentos": [
            {
              "custo": 3,
              "descricao": "muda a execução para reação, o alcance para curto, o alvo para 1 criatura e a duração para instantânea. Esta magia só pode ser usada em uma criatura que tenha acabado de fazer um teste. Obriga a criatura a fazer uma nova rolagem de dados e aceitar o novo resultado, seja ele um sucesso ou falha. Criaturas involuntárias têm direito a um teste de Vontade para negar o efeito.",
              "aumenta": false
            }
          ]
        }
      },
      "convocacao": {
        "guardiao-divino": {
          "name": "Guardião Divino",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/guardiao-divino.webp",
          "system": {
            "circulo": "4",
            "escola": "convocacao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "duracao": "Cena ou até ser descarregado",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "A magia invoca um elemental Pequeno, com a forma de um orbe feito de luz divina. A criatura é incorpórea, imune a dano e ilumina como uma tocha. O elemental tem 100 pontos de luz.Uma vez por rodada, durante o seu turno, o elemental pode se movimentar (deslocamento de voo 18m) e gastar quantos pontos de luz quiser para curar dano ou condições de criaturas em alcance curto, à taxa de 1 PV por 1 ponto de luz ou uma condição por 3 pontos de luz (entre abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, ofuscado, pasmo, sangrando, surdo ou vulnerável). A magia é encerrada quando o elemental fica sem pontos de luz."
            }
          }
        }
      },
      "encantamento": {
        "conceder-milagre": {
          "name": "Conceder Milagre",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/conceder-milagre.webp",
          "system": {
            "circulo": "4",
            "escola": "encantamento",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "duracao": "permanente ou até ser descarregada",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "Você transfere um pouco de seu poder divino a outra criatura. Escolha uma magia de até 2º círculo que você conheça; o alvo pode lançar essa magia uma vez, sem pagar o custo base dela em PM (aprimoramentos podem ser usados, mas o alvo deve gastar seus próprios PM). Você sofre uma penalidade de –3 PM até que o alvo lance a magia."
            }
          },
          "aprimoramentos": [
            {
              "custo": 4,
              "descricao": "muda o círculo da magia concedida para 3º e a penalidade de PM para -6.",
              "aumenta": false
            }
          ]
        }
      },
      "evocacao": {
        "circulo-da-restauracao": {
          "name": "Círculo da Restauração",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/circulo-da-restauracao.webp",
          "system": {
            "circulo": "4",
            "escola": "evocacao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "duracao": "5 rodada",
            "alvo": "esfera de 3m de raio",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "Você evoca um círculo de luz que emana uma energia poderosa. Qualquer criatura viva que termine o turno dentro do círculo recupera 3d8+3 PV e 1 PM. Mortos-vivos e criaturas que sofrem dano por luz perdem PV e PM na mesma quantidade. Uma criatura pode recuperar no máximo 5 PM por dia com esta magia."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta a regeneração de PV em 1d8+1.",
              "aumenta": true
            }
          ]
        },
        "colera-do-deus-sol": {
          "name": "Cólera do Deus-Sol",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/colera-do-deus-sol.webp",
          "system": {
            "circulo": "4",
            "escola": "evocacao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "duracao": "5 instantanea",
            "alvo": "esfera com 6m de raio",
            "resistencia": "Reflexos Parcial",
            "custo": "10 PM",
            "description": {
              "value": "Você cria uma explosão de luz dourada e intensa. Criaturas na área ficam Cego por 1d4 rodadas e Em Chamas , e sofrem 10d6 pontos de dano de fogo (mortos-vivos sofrem 10d8 pontos de dano). Uma criatura que passe no teste de resistência não fica cega, nem em chamas e sofre metade do dano."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o dano em +2d6 (+2d8 contra mortos-vivos).",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "aumenta a área em +6m de raio.",
              "aumenta": true
            },
            {
              "custo": 5,
              "descricao": "a luz purificadora do Deus-Sol dissipa todas as magias de necromancia ativas na área. Requer 5º círculo",
              "aumenta": false
            }
          ]
        },
        "manto-do-cruzado": {
          "name": "Manto do Cruzado",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/manto-do-cruzado.webp",
          "system": {
            "circulo": "4",
            "escola": "evocacao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "vocẽ",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "Você invoca o poder de sua divindade na forma de um manto de energia que reveste seu corpo. Esta magia tem duas versões. Você escolhe qual versão pode lançar quando aprende esta magia. Ela não pode ser mudada. Manto de Luz: um manto dourado e luminoso. No início de cada um de seus turnos, você e todos os seus aliados em alcance curto recuperam 2d8 PV. Você recebe imunidade a dano de trevas e seus ataques corpo a corpo causam +2d8 pontos de dano de luz. Manto de Trevas: um manto negro como a noite. No início de cada um de seus turnos, todos os inimigos em alcance curto sofrem 4d8 pontos de dano de trevas. Você cura metade de todo o dano causado pela magia."
            }
          }
        },
        "terremoto": {
          "name": "Terremoto",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/terremoto.webp",
          "system": {
            "circulo": "4",
            "escola": "evocacao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "longo",
            "duracao": "1 rodada",
            "alvo": "esfera com 30m de raio",
            "resistencia": "veja texto",
            "custo": "10 PM",
            "description": {
              "value": "Esta magia devastadora invoca o poder da terra para criar um tremor sísmico que rasga o solo em uma área de 30m de raio. O terremoto dura uma rodada completa, durante a qual todas as criaturas sobre o solo ficam atordoadas pela vibração intensa. Barreiras físicas não interrompem a área do Terremoto - a energia sísmica passa através de paredes e obstáculos. O efeito exato varia drasticamente conforme o terreno: CAVERNA/SUBTERRÂNEO: O teto desmorona, causando 12d6 pontos de dano de impacto e deixando todas as criaturas agarradas pelos escombros. Reflexos reduz o dano à metade e evita ficar agarrado. CONSTRUÇÕES: Estruturas sofrem 200 pontos de dano, suficiente para derrubar construções de madeira ou alvenaria simples (mas não alvenaria reforçada). Criaturas em construções que desmoronem sofrem o mesmo efeito de cavernas. ESPAÇO ABERTO: Fendas profundas se abrem aleatoriamente. Role 1d6 para cada criatura - em resultado ímpar, uma fenda se abre sob ela. Reflexos evita cair na fenda. Criaturas que caírem podem escapar com ação completa + teste de Atletismo (CD da magia). No início do seu próximo turno, as fendas se fecham, matando quem estiver dentro. PENHASCOS: Criam desmoronamento horizontal igual à altura (penhasco de 30m = desmoronamento de 30m). Criaturas no caminho: 12d6 dano de impacto + agarrado (Reflexos reduz dano à metade e evita agarramento). CORPOS D'ÁGUA: Fissuras drenam a água, criando lamaçal. Reflexos evita afundar e ficar agarrado. Fissuras se fecham no próximo turno, podendo afogar quem ficou preso. CRIATURAS AGARRADAS sofrem 1d6 dano/rodada até serem libertadas (ação completa + Atletismo da vítima ou aliado adjacente)."
            }
          }
        }
      },
      "necromancia": {
        "ligacao-sombria": {
          "name": "Ligação Sombria",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/ligacao-sombria.webp",
          "system": {
            "circulo": "4",
            "escola": "necromancia",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "longo",
            "duracao": "1 dia",
            "alvo": "1 criatura",
            "resistencia": "Fortitude anula",
            "custo": "10 PM",
            "description": {
              "value": "Cria uma conexão entre seu corpo e o da criatura alvo, deixando uma marca idêntica na pele de ambos. Enquanto a magia durar, sempre que você sofrer qualquer dano ou condição, o alvo desta magia deve fazer um teste de Fortitude; se falhar, sofre o mesmo dano que você ou adquire a mesma condição. A magia termina se o alvo chegar a 0 pontos de vida."
            }
          },
          "aprimoramentos": [
            {
              "custo": 5,
              "descricao": "além do normal, o alvo também pode morrer por perda de PV ou se você morrer (um teste de Fortitude anula a morte).",
              "aumenta": false
            }
          ]
        }
      },
      "transmutacao": {
        "controlar-o-clima": {
          "name": "Controlar o Clima",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/controlar-clima.webp",
          "system": {
            "circulo": "4",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "km",
            "duracao": "4d12 horas",
            "alvo": "esfera com 2km de raio",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "Você muda o clima da área onde se encontra, podendo criar qualquer condição climática: chuva, neve, ventos, névoas... Veja o Capítulo 6: O Mestre para os efeitos em jogo do clima."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "(Apenas Druidas): muda o raio da área para 3km e duração para 1d4 dias.",
              "aumenta": false
            }
          ]
        }
      }
    },
    "5-circulo": {
      "abjuracao": {
        "aura-divina": {
          "name": "Aura Divina",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/aura-divina.webp",
          "system": {
            "circulo": "5",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "esfera com 9m de raio",
            "resistencia": "Vontade parcial",
            "custo": "15 PM",
            "description": {
              "value": "Você se torna um conduíte da energia de sua divindade, emanando uma aura brilhante. Você e aliados devotos da mesma divindade ficam imunes a encantamento e recebem +10 na Defesa e em testes de resistência. Aliados não devotos da mesma divindade recebem+5 na Defesa e em testes de resistência. Além disso, inimigos que entrem na área afetada devem fazer um teste de Vontade; em caso de falha, recebem uma condição a sua escolha entre Esmorecido, Debilitadoou Lento até o fim da cena. O teste deve ser refeito cada vez que a criatura entrar novamente na área."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta os bônus na Defesa e em testes de resistência em +1.",
              "aumenta": true
            }
          ]
        },
        "engenho-de-mana": {
          "name": "Engenho de Mana",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/engenho-de-mana.webp",
          "system": {
            "circulo": "5",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "resistencia": "Nenhuma",
            "custo": "15 PM",
            "description": {
              "value": "Você cria um disco de energia que lembra uma roda de engenho e flutua no ponto em que foi conjurado. O disco é imune a dano, não pode ser movido e faz uma contramágica automática contra qualquer magia lançada em alcance médio dele (exceto as suas), usando seu teste de Misticismo. Caso vença o teste, o engenho não só anula a magia como absorve os PM usados para lançá-la, acumulando PM temporários. No seu turno, se estiver ao alcance do disco, você pode gastar PM nele para lançar magias."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "em vez de flutuar no ponto em que foi conjurado, o disco flutua atrás de você, mantendo-se sempre adjacente.",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "muda a duração para 1 dia.",
              "aumenta": false
            }
          ]
        },
        "lagrimas-da-deusa-da-magia": {
          "name": "Lágrimas da Deusa da Magia",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/lagrimas-da-deusa-da-magia.webp",
          "system": {
            "circulo": "5",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 criatura",
            "resistencia": "Vontade parcial",
            "custo": "15 PM",
            "description": {
              "value": "Se falhar no teste de resistência, o alvo perde a habilidade de lançar magias arcanas até o fim da cena. Se passar, perde a habilidade por uma rodada."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda a área para esfera de 6m de raio e o alvo para criaturas escolhidas.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda a execução para 1 dia e adiciona custo adicional (sacrifício de 1 PM). O alvo da magia precisa ser mantido em alcance curto do conjurador durante toda a execução. Ao término, faz um teste de Vontade. Se falhar, perde a habilidade de lançar magias arcanas permanentemente. Se passar, resiste, mas ainda pode ser alvo da magia no dia seguinte. Nenhum poder mortal é capaz de reverter essa perda. Os clérigos da deusa da Magia dizem que a deusa chora cada vez que este ritual é realizado.",
              "aumenta": false
            }
          ]
        }
      },
      "adivinhacao": {
        "projetar-consciencia": {
          "name": "Projetar Consciência",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/projetar-consciencia.webp",
          "system": {
            "circulo": "5",
            "escola": "adv",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "any",
            "alvo": "local ou criatura conhecidos",
            "resistencia": "Nenhuma",
            "custo": "15 PM",
            "description": {
              "value": "Esta magia faz com que sua consciência deixe seu corpo e se transporte instantaneamente para um local ou para perto de uma criatura alvo. Se escolher um local, ele precisa ser conhecido por você. Se escolher uma criatura, você transporta sua consciência até onde a criatura estiver, contanto que estejam no mesmo plano. Você adquire uma forma fantasmagórica invisível, mas pode se mostrar sando uma ação de movimento. Pode se mover em qualquer direção com deslocamento de voo 18m e, por ser incorpóreo, é capaz de atravessar objetos sólidos, mas fica limitado a se mover dentro dos limites do local, ou dentro de alcance curto da criatura alvo. Você pode ver e ouvir como se estivesse presente no local e pode falar mentalmente com qualquer criatura que possa ver, contanto que tenham um idioma em comum."
            }
          },
          "aprimoramentos": [
            {
              "custo": 10,
              "descricao": "além do normal, sua projeção é capaz de lançar magias que não precisem de componentes materiais e tenham duração diferente de sustentada. Sua forma fantasmagórica funciona como na magia Forma Etérea, sendo afetada por magias de abjuração e essência, mas as magias que ela lança podem afetar criaturas corpóreas.",
              "aumenta": false
            }
          ]
        }
      },
      "convocacao": {
        "intervencao-divina": {
          "name": "Intervenção Divina",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/intervencao-divina.webp",
          "system": {
            "circulo": "5",
            "escola": "convocacao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "especial",
            "alvo": "veja texto",
            "resistencia": "veja texto",
            "custo": "15 PM",
            "description": {
              "value": "Esta é a manifestação suprema da fé, um pedido direto à sua divindade para que ela intervenha pessoalmente na realidade mortal. Os céus se abrem, uma presença divina desce, e milagres acontecem diante dos olhos de todos. A própria divindade responde ao seu chamado, alterando a realidade conforme sua vontade divina. MILAGRES MENORES (sem custo adicional): • CURA DIVINA: Até 10 criaturas em alcance longo são instantaneamente curadas de todos os pontos de vida perdidos e de todas as condições negativas. Uma luz dourada os envolve, restaurando-os completamente. Curiosamente, este poder divino também cura mortos-vivos em vez de destruí-los, demonstrando a natureza transcendente da intervenção. • BANIMENTO MÁGICO: Todos os efeitos de magias de 4º círculo ou menor em uma área ampla são instantaneamente dissipados pela presença divina. MILAGRES MAIORES (custam 2 PM adicionais): • CRIAÇÃO DIVINA: Sua divindade materializa um item mundano de até T$ 30.000 do nada, criado pela vontade divina. • DUPLICAÇÃO MÁGICA: A divindade replica perfeitamente qualquer magia de até 4º círculo (componentes materiais ainda são necessários). • PROTEÇÃO CELESTIAL: Uma cidade inteira é protegida de desastres naturais - vulcões param de entrar em erupção, enchentes recuam, terremotos cessam. • RESSURREIÇÃO MILAGROSA: Uma criatura que morreu há até uma rodada é trazida de volta à vida com 1 PV, sua alma sendo literalmente arrancada das garras da morte. MILAGRES EXTRAORDINÁRIOS: Sua divindade pode realizar feitos ainda mais impressionantes, mas sempre de acordo com sua natureza, domínios e objetivos. Khalmyr pode forjar armas lendárias, Marah pode curar pragas inteiras, Wynna pode revelar segredos cósmicos. O mestre tem autoridade final sobre esses efeitos, que devem sempre refletir a personalidade e poder da divindade invocada. Lembre-se: você está pedindo a um deus para agir - seja respeitoso e esteja preparado para as consequências."
            }
          }
        }
      },
      "evocacao": {
        "furia-do-panteao": {
          "name": "Fúria do Panteão",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/furia-do-panteao.webp",
          "system": {
            "circulo": "5",
            "escola": "evocacao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "longo",
            "alvo": "cubo de 90m",
            "resistencia": "veja texto",
            "custo": "15 PM",
            "description": {
              "value": "Você cria uma nuvem de tempestade violenta. Os ventos tornam ataques à distância impossíveis e fazem a área contar como condição terrível para lançar magia. Além disso, inimigos na área têm a visibilidade reduzida (como a magia Névoa). Uma vez por turno, você pode gastar uma ação de movimento para gerar um dos efeitosa seguir. Nevasca. Inimigos na área sofrem 10d6 pontos de dano de frio (Fortitude reduz à metade). A área fica coberta de neve, virando terreno difícil até o fim da cena ou até você usar siroco. Raios. Até 6 inimigos a sua escolha na área sofrem 10d8 pontos de dano de eletricidade (Reflexos reduz à metade). Siroco. Transforma a chuva em uma tempestade de areia escaldante. Inimigos na área sofrem 10d6 pontos de dano (metade corte, metade fogo) e ficam Sangrando (Fortitude reduz o dano à metade e evita a condição). Trovões. Inimigos sofrem 10d6 pontos de dano de impacto e ficam Desprevenido por uma rodada (Fortitude reduz o dano à metade e evita a condição)."
            }
          }
        },
        "segunda-chance": {
          "name": "Segunda Chance",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/segunda-chance.webp",
          "system": {
            "circulo": "5",
            "escola": "evocacao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "15 PM",
            "description": {
              "value": "Um brilho alaranjado, na forma de asas de fênix, emana do alvo. Ele recupera 200 pontos de vida e se cura de qualquer das seguintes condições: abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofuscado, paralisado, pasmo ou surdo."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "aumenta a cura em +20 PV.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "muda o alcance para curto e o alvo para até 5 criaturas.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda o alvo para uma criatura que tenha morrido há até uma rodada. Esta magia pode curá-la.",
              "aumenta": false
            }
          ]
        }
      },
      "necromancia": {
        "reanimacao-impura": {
          "name": "Reanimação Impura",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/reanimacao-impura.webp",
          "system": {
            "circulo": "5",
            "escola": "necromancia",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "15 PM",
            "description": {
              "value": "Você reanima uma criatura morta recentemente (dentro da mesma cena), trazendo sua alma de volta ao corpo de forma forçada. O tipo da criatura muda para morto-vivo, mas ela retém suas memórias e habilidades de quando estava viva, podendo inclusive lançar magias. A criatura pode pensar e falar livremente, mas obedece cegamente a seus comandos. Quando a cena termina, a criatura volta a ficar morta, mas muitos clérigos malignos usam meios para guardar e preservar o corpo de criaturas poderosas para serem reanimadas dessa forma quando necessário. Se for destruída, a criatura não pode ser reanimada novamente com esta magia."
            }
          }
        },
        "roubar-a-alma": {
          "name": "Roubar a Alma",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/roubar-alma.webp",
          "system": {
            "circulo": "5",
            "escola": "necromancia",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 criatura",
            "resistencia": "Vontade parcial",
            "custo": "15 PM",
            "description": {
              "value": "Você rouba a alma da vítima, armazenando-a em um objeto. Se o alvo passar no teste de resistência, sente o impacto de sua alma ser puxada para fora do corpo e fica Abaladopor 1 rodada. Se falhar, seu corpo fica caído, Inconscientee inerte, enquanto sua alma é transportada para dentro do objeto. O corpo não envelhece nem se decompõe, permanecendo em estase. Ele pode ser atacado e destruído normalmente. O objeto escolhido deve custar T$ 1.000 por nível ou ND da criatura e não possuir uma alma presa ou se quebrará quando a magia for lançada (embora personagens não conheçam o conceito de \"nível\" dentro do mundo de jogo, podem ter noção do poder geral de uma criatura, estimando assim o valor do objeto). Se o objeto for destruído, a magia se esvai. Se o corpo ainda estiver disponível, a alma retorna para ele. Caso contrário, escapa para os Mundos dos Deuses. Custo adicional: sacrifício de 1 PM."
            }
          },
          "aprimoramentos": [
            {
              "custo": 5,
              "descricao": "o objeto que abriga a alma detém os mesmos PM totais que o alvo. Se estiver empunhando o objeto, você pode usar esses PM para lançar magias no lugar dos seus. O objeto recupera PM por dia como se o personagem estivesse em descanso normal.",
              "aumenta": false
            },
            {
              "custo": 10,
              "descricao": "como uma reação ao lançar esta magia, você possui o corpo sem alma do alvo, como na magia Possessão (mesmo que não conheça a magia).",
              "aumenta": false
            }
          ]
        }
      }
    }
  },
  "universal": {
    "1-circulo": {
      "abjuracao": {
        "resistencia-a-energia": {
          "name": "Resistência à Energia",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_resistnature.jpg",
          "system": {
            "circulo": "1",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Ao lançar esta magia, escolha entre ácido, eletricidade, fogo, frio, luz ou trevas. O alvo recebe redução de dano 10 contra o tipo de dano escolhido."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda a duração para 1 dia. Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda o alcance para curto e o alvo para criaturas escolhidas. Requer 3º círculo.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda o efeito para redução de dano contra todos os tipos listados na magia. Requer 3º círculo.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "muda o efeito para imunidade a um tipo listado na magia. Requer 4º círculo",
              "aumenta": false
            },
            {
              "custo": 0,
              "descricao": "Resistência a Ácido",
              "aumenta": false
            },
            {
              "custo": 0,
              "descricao": "Resistência a Eletricidade",
              "aumenta": false
            },
            {
              "custo": 0,
              "descricao": "Resistência a Fogo",
              "aumenta": false
            },
            {
              "custo": 0,
              "descricao": "Resistência a Frio",
              "aumenta": false
            },
            {
              "custo": 0,
              "descricao": "Resistência a Luz",
              "aumenta": false
            },
            {
              "custo": 0,
              "descricao": "Resistência a Trevas",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "aumenta a resistência a ácido em +5.",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "aumenta a resistência a eletricidade em +5",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "aumenta a resistência a fogo em +5",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "aumenta a resistência a frio em +5",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "aumenta a resistência a luz em +5",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "aumenta a resistência a trevas em +5",
              "aumenta": true
            }
          ]
        }
      },
      "adivinhacao": {
        "aviso": {
          "name": "Aviso",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane05.jpg",
          "system": {
            "circulo": "1",
            "escola": "adv",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "move"
            },
            "alcance": "longo",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Envia um aviso telepático para uma criatura, mesmo que não possa vê-la nem tenha linha de efeito. Escolha um: Alerta: o alvo recebe +5 em seu próximo teste de Iniciativa e de Percepção dentro da cena. Mensagem: o alvo recebe uma mensagem sua de até 25 palavras. Vocês devem ter um idioma em comum para o alvo poder entendê-lo. Localização: o alvo sabe onde você está naquele momento. Se você mudar de posição, ele não saberá."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "se escolher localização, muda a duração para cena. O alvo sabe onde você está mesmo que você mude de posição.",
              "aumenta": false
            },
            {
              "custo": 3,
              "descricao": "aumenta o número de alvos em +1.",
              "aumenta": true
            }
          ]
        },
        "compreensao": {
          "name": "Compreensão",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane06.jpg",
          "system": {
            "circulo": "1",
            "escola": "adv",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura ou texto",
            "resistencia": "Vontade anula (veja descrição)",
            "custo": "1 PM",
            "description": {
              "value": "Esta magia confere a você uma compreensão sobrenatural. Você pode tocar um texto e entender as palavras, mesmo que não conheça o idioma. Se tocar uma criatura inteligente, pode se comunicar com ela, mesmo que não tenham um idioma em comum. Se tocar uma criatura não inteligente, como um animal, pode perceber seus sentimentos. Além disso, você pode gastar uma ação de movimento para ouvir os pensamentos de uma criatura tocada. Um alvo involuntário tem direito a um teste de Vontade para proteger seus pensamentos e evitar este efeito."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda o alcance para curto e o alvo para criaturas escolhidas. Você pode entender todas as criaturas afetadas, mas só pode ouvir os pensamentos de uma por vez.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "muda o alvo para 1 criatura. Em vez do normal, pode vasculhar os pensamentos do alvo para extrair informações. O alvo tem direito a um teste de Vontade para anular este efeito. O mestre decide se a criatura sabe ou não a informação que você procura. Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda o alcance para pessoal e o alvo para você. Em vez do normal, você pode falar, entender e escrever qualquer idioma. Requer 3º círculo.",
              "aumenta": false
            }
          ]
        },
        "visao-mistica": {
          "name": "Visão Mística",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane07.jpg",
          "system": {
            "circulo": "1",
            "escola": "adv",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Seus olhos brilham com uma luz azul e passam a enxergar auras mágicas. Este efeito é similar ao uso de Misticismo para detectar magia, mas você detecta todas as auras mágicas em alcance médio e recebe todas as informações sobre elas sem gastar ações. Além disso, você pode gastar uma ação de movimento para descobrir se uma criatura que possa perceber em alcance médio é capaz de lançar magias e qual a aura gerada pelas magias de círculo mais alto que ela pode lançar."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda a duração para 1 dia.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "também pode enxergar objetos e criaturas invisíveis. Eles aparecem como formas translúcidas.",
              "aumenta": false
            }
          ]
        }
      },
      "convocacao": {
        "nevoa": {
          "name": "Névoa",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_fog.jpg",
          "system": {
            "circulo": "1",
            "escola": "convocacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "Uma névoa espessa eleva-se de um ponto a sua escolha, obscurecendo toda a visão — criaturas a até 1,5m têm camuflagem e criaturas a partir de 3m têm camuflagem total. Um vento forte dispersa a névoa em 4 rodadas e um vendaval a dispersa em 1 rodada. Esta magia não funciona sob a água."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "você pode escolher criaturas no alcance ao lançar a magia; elas enxergam através do efeito. Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "a nuvem tem um cheiro horrível. No início de seus turnos, qualquer criatura dentro dela, ou qualquer criatura com faro em alcance curto da nuvem, deve fazer um teste de Fortitude. Se falhar, fica enjoada por uma rodada.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "a nuvem tem um tom esverdeado e se torna cáustica. No início de seus turnos, criaturas dentro dela sofrem 2d4 pontos de dano de ácido.",
              "aumenta": false
            },
            {
              "custo": 3,
              "descricao": "aumenta o dano de ácido em +2d4.",
              "aumenta": true
            },
            {
              "custo": 5,
              "descricao": "além do normal, a nuvem fica espessa, quase sólida. Qualquer criatura dentro dela tem seu deslocamento reduzido para 3m (independentemente de seu deslocamento normal) e sofre -2 em testes de ataque e rolagens de dano.",
              "aumenta": false
            }
          ]
        }
      },
      "evocacao": {
        "luz": {
          "name": "Luz",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_light.jpg",
          "system": {
            "circulo": "1",
            "escola": "evocacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 objeto",
            "resistencia": "Vontade anula (veja texto)",
            "custo": "1 PM",
            "description": {
              "value": "O alvo emite luz (mas não produz calor) em uma área com 6m de raio. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a luz, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Luz anula Escuridão."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda a duração para 1 dia.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "muda a duração para permanente e adiciona componente material (pó de rubi no valor de T$ 50). Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 0,
              "descricao": "(Apenas Arcanos): muda o alvo para 1 criatura. Você lança a magia nos olhos do alvo, que fica ofuscado pela cena. Não afeta criaturas cegas.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "(Apenas Arcanos): muda o alcance para longo e o efeito para cria 4 pequenos globos flutuantes de pura luz. Você pode posicionar os globos onde quiser dentro do alcance. Você pode enviar um à frente, outra para trás, outra para cima e manter um perto de você, por exemplo. Uma vez por rodada, você pode mover os globos com uma ação livre. Cada um ilumina como uma tocha, mas não produz calor. Se um globo ocupar o espaço de uma criatura, ela fica ofuscada e sua silhueta pode ser vista claramente (ela não recebe camuflagem por escuridão ou invisibilidade). Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "(Apenas Divinos): a luz é cálida como a do sol. Criaturas que sofrem penalidades e dano pela luz solar sofrem seus efeitos como se estivessem expostos à luz solar real. Seus aliados na área estabilizam automaticamente e ficam imunes à condição sangrando, e seus inimigos ficam ofuscados. Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "(Apenas Divinos): muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo é envolto por um halo de luz, recebendo +10 em testes de Diplomacia e resistência a trevas 10. Requer 2º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "necromancia": {
        "escuridao": {
          "name": "Escuridão",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_darkness.jpg",
          "system": {
            "circulo": "1",
            "escola": "necromancia",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 objeto",
            "resistencia": "Vontade anula (veja texto)",
            "custo": "1 PM",
            "description": {
              "value": "O alvo emana sombras em uma área com 6m de raio. Criaturas dentro da área recebem camuflagem leve por escuridão leve. As sombras não podem ser iluminadas por nenhuma fonte de luz natural. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a escuridão, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Escuridão anula Luz."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda o efeito para fornecer camuflagem total por escuridão total. As sombras bloqueiam a visão na área e através dela.",
              "aumenta": false
            },
            {
              "custo": 3,
              "descricao": "muda a duração para 1 dia.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "muda o alvo para 1 criatura e a resistência para Fortitude parcial. Você lança a magia nos olhos do alvo, que fica cego pela cena. Se passar na resistência, fica cego por 1 rodada. Requer 2º círculo.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda o alcance para pessoal e o alvo para você. Em vez do normal, você é coberto por sombras, recebendo +10 em testes de Furtividade e camuflagem leve. Requer 2º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "transmutacao": {
        "arma-magica": {
          "name": "Arma Mágica",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane08.jpg",
          "system": {
            "circulo": "1",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 arma empunhada",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "A arma fornece um bônus de +1 nos testes de ataque e rolagens de dano e é considerada mágica (não cumulativo com bônus de encantos). Caso você esteja empunhando a arma, pode usar seu atributo-chave de magias em vez do atributo original nos testes de ataque (não cumulativo com efeitos que somam este atributo)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
              "aumenta": true
            },
            {
              "custo": 2,
              "descricao": "a arma passa a causar +1d6 de dano de ácido, eletricidade, fogo ou frio, escolhido no momento em que a magia é lançada. Este aprimoramento só pode ser usado uma vez.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda o bônus de dano do aprimoramento elemental para +2d6. (Custo do aprimoramento incluso)",
              "aumenta": false
            },
            {
              "custo": 0,
              "descricao": "Arma Mágica",
              "aumenta": false
            }
          ]
        }
      }
    },
    "2-circulo": {
      "abjuracao": {
        "dissipar-magia": {
          "name": "Dissipar Magia",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/dissipar-magia.webp",
          "system": {
            "circulo": "2",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "alvo": "1 criatura ou 1 objeto mágico",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Você dissipa outras magias que estejam ativas, como se sua duração tivesse acabado. Note que efeitos de magias instantâneas não podem ser dissipados (não se pode dissipar uma Bola de Fogo ou Relâmpago depois que já causaram dano...). Se lançar essa magia em uma criatura ou área, faça um teste de Misticismo; você dissipa as magias com CD igual ou menor que o resultado do teste. Se lançada contra um item mágico, o transforma em um item mundano por 1d6 rodadas (Vontade anula)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 12,
              "descricao": "muda a área para esfera com 9m de raio. Em vez do normal, cria um\nefeito de disjunção. Todas as magias na área são automaticamente dissipadas e todos os itens mágicos na área, exceto aqueles que você estiver carregando, viram itens mundanos por uma cena (com direito a um teste de Vontade para evitar esse efeito). Requer 5º círculo.",
              "aumenta": false
            }
          ]
        },
        "runa-de-protecao": {
          "name": "Runa de Proteção",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/runa-de-protecao.webp",
          "system": {
            "circulo": "2",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 3,
              "qtd": "1",
              "condição": "",
              "special": "",
              "execucao": "hora"
            },
            "alcance": "toque",
            "duracao": "permanente até ser descarregada",
            "alvo": "uma área com 6m de raio",
            "resistencia": "varia (veja o texto)",
            "custo": "3 PM",
            "description": {
              "value": "Você escreve uma runa pessoal em uma superfície fixa, como uma parede ou o chão, que protege uma pequena área ao redor. Quando uma criatura entra na área afetada a runa explode, causando 6d6 pontos de dano em todos os alvos a até 6m. A criatura que ativa a runa não tem direito a teste de resistência; outras criaturas na área têm direito a um teste de Reflexos para reduzir o dano à metade. Quando lança a magia, você escolhe o tipo de dano, entre ácido, eletricidade, fogo, frio, luz ou trevas. Você pode determinar que a runa se ative apenas em condições específicas — por exemplo, apenas por goblins ou apenas por mortos-vivos. Você também pode criar uma palavra mágica que impeça a runa de se ativar. Um personagem pode encontrar a runa com um teste de Investigação e desarmá-la com um teste de Ladinagem (CD da magia). Componente material: pó de diamante no valor de T$ 200, com o qual o conjurador desenha a runa, que brilha por alguns instantes e depois se torna praticamente invisível."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "aumenta o dano em +2d6.",
              "aumenta": true
            },
            {
              "custo": 1,
              "descricao": "muda o alvo para \"você\" e o alcance para \"pessoal\". Ao invés do normal, escolha uma magia de 1º círculo que você conhece e pode lançar, com tempo de execução de uma ação padrão ou menor. Você escreve a runa em seu corpo e especifica uma condição de ativação como, por exemplo, \"quando eu for alvo de um ataque\" ou \"quando for alvo de uma magia\". Quando a condição for cumprida, você pode ativar a runa e lançar a magia escolhida como uma reação. Você só pode escrever uma runa em seu corpo ao mesmo tempo.",
              "aumenta": false
            }
          ]
        }
      },
      "convocacao": {
        "preparacao-de-batalha": {
          "name": "Preparação de Batalha",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/preparacao-de-batalha.webp",
          "system": {
            "circulo": "2",
            "escola": "convocacao",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "Custo Adicional: penalidade de 1 PM",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "duracao": "Permanente até ser descarregada",
            "alvo": "até dois itens que você possua, entre armas, armaduras e escudos",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Custo Adicional: penalidade de 1 PM Essa magia é muito utilizada por clérigos e bardos que não precisam (ou não podem) estar sempre com suas armas ou armaduras. A magia é lançada sobre até dois itens que você possua. A partir daí, em qualquer momento, você pode usar uma ação completa para convocar os itens, que aparecem sobre seu corpo e em suas mãos. O efeito é espalhafatoso, sendo praticamente impossível utilizá-lo sem chamar atenção. A magia funciona independentemente da distância dos itens, contanto que estejam no mesmo plano, mas termina se você perder a posse deles."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "Aumenta o número de alvos em dois e o custo adicional em 1 PM.",
              "aumenta": false
            }
          ]
        }
      },
      "encantamento": {
        "marca-da-obediencia": {
          "name": "Marca da Obediência",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/marca-da-obediencia.webp",
          "system": {
            "circulo": "2",
            "escola": "encantamento",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Vontade anula",
            "custo": "3 PM",
            "description": {
              "value": "Você toca uma criatura, gravando uma marca mística no corpo dela enquanto profere uma ordem, como \"não ataque a mim ou meus aliados\", \"siga-me\" ou \"não saia desta sala\". A criatura deve seguir essa ordem, gastando todas as ações de seu turno para isso. A ordem não pode ser genérica demais (como \"ajude-me\", por exemplo), nem forçar o alvo a atos suicidas. A cada rodada, o alvo pode fazer um teste de Vontade. Se passar, a magia é dissipada."
            }
          }
        }
      },
      "necromancia": {
        "conjurar-mortos-vivos": {
          "name": "Conjurar Mortos-Vivos",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/conjurar-mortos-vivos.webp",
          "system": {
            "circulo": "2",
            "escola": "necromancia",
            "ativacao": {
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "curto",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "Você conjura seis esqueletos capangas de tamanho Médio feitos de energia negativa em espaços desocupados dentro do alcance. Você pode gastar uma ação de movimento para fazer os mortos-vivos andarem (eles têm deslocamento 9m) ou uma ação padrão para fazê-los causar dano a criaturas adjacentes (1d6+2 pontos de dano de trevas cada). Os esqueletos têm For 2, Des 2, Defesa 18 e todos os outros atributos nulos; eles têm 1 PV e falham automaticamente em qualquer teste de resistência ou oposto, mas são imunes a atordoamento, dano não letal, doença, encantamento, fadiga, frio, ilusão, paralisia, sono e veneno. Eles desaparecem quando são reduzidos a 0 PV ou no fim da cena. Os mortos- -vivos não agem sem receber uma ordem. Usos criativos para capangas fora de combate ficam a critério do mestre. Carniçal: como esqueletos, mas têm For 3, Des 3, Defesa 27 e causam 1d8+3 pontos de dano de trevas mais perda de 1d8 PV por veneno. Além disso, criaturas atingidas por um carniçal devem passar num teste de Fortitude ou ficam Paralisado por 1 rodada. Uma criatura que passe no teste de resistência fica imune à paralisia dos carniçais por um dia. Sombra: como esqueletos, mas têm Des 4, Defesa 35, a habilidade incorpóreo e causam 2d10 pontos de dano de trevas. Além disso, criaturas vivas atingidas por uma sombra devem passar num teste de Fortitude ou perdem 1d4 PM. Sombras perdem a habilidade incorpóreo quando expostas à luz do sol."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "aumenta o número de mortos-vivos conjurados em +1.",
              "aumenta": true
            },
            {
              "custo": 7,
              "descricao": "em vez de esqueletos, conjura sombras. Requer 4º círculo.",
              "aumenta": false
            }
          ]
        }
      }
    },
    "3-circulo": {
      "adivinhacao": {
        "lendas-e-historias": {
          "name": "Lendas e Histórias",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/lendas-historias.webp",
          "system": {
            "circulo": "3",
            "escola": "adv",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 craitura, objeto ou local",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Você descobre informações sobre uma criatura, objeto ou local que esteja tocando. O que exatamente você descobre depende do mestre: talvez você não descubra tudo que há para saber, mas ganhe pistas para continuar a investigação. A cada rodada que mantiver a magia, você descobre: Todas as informações sobre o alvo, como se tivesse passado em todos os testes de Conhecimento para tal. Todas as habilidades do alvo. Se for uma criatura, você sabe suas estatísticas de jogo como raça, classe, nível, atributos, magias, resistências e fraquezas. Se for um item mágico, aprende seu efeito e funcionamento. Se o alvo está sob influência de alguma magia e todas as informações sobre as magias ativas, se houver alguma."
            }
          },
          "aprimoramentos": [
            {
              "custo": 4,
              "descricao": "muda a execução para 1 dia, o alcance para ilimitado e adiciona componente material (cuba de ouro cheia d'água e ingredientes mágicos, no valor de T$ 1.000). Você ainda precisa ter alguma informação sobre o alvo, como um nome, descrição ou localização.",
              "aumenta": false
            }
          ]
        },
        "videncia": {
          "name": "Vidência",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/videncia.webp",
          "system": {
            "circulo": "3",
            "escola": "adv",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "any",
            "alvo": "1 criatura",
            "resistencia": "Vontade anula",
            "custo": "6 PM",
            "description": {
              "value": "Através de uma superfície reflexiva (bacia de água benta para clérigos, lago para druidas, bola de cristal para magos, espelho para feiticeiros etc.) você pode ver e ouvir uma criatura escolhida e seus arredores (cerca de 6m em qualquer direção), mesmo que ela se mova. O alvo pode estar a qualquer distância, mas se passar em um teste de Vontade, a magia falha. A vítima recebe bônus ou penalidades em seu teste de resistência, dependendo do conhecimento que você tiver dela.Não conhece o alvo: +10.Ouviu falar do alvo: +5.O alvo está em outro plano ou mundo: +5.Já encontrou o alvo pessoalmente: +0.Tem uma pintura, escultura ou outra representação do alvo: –2.Conhece bem o alvo: –5.Tem um pertence pessoal ou peça de roupa do alvo: –5.Tem uma parte do corpo do alvo (unhas, cabelos...): –10."
            }
          }
        }
      },
      "encantamento": {
        "imobilizar": {
          "name": "Imobilizar",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/imobilizar.webp",
          "system": {
            "circulo": "3",
            "escola": "encantamento",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 humanóide ou animal",
            "resistencia": "Vontade parcial",
            "custo": "6 PM",
            "description": {
              "value": "Esta magia paralisa o alvo com energia mágica. Se falhar no teste de resistência, o alvo fica com a condição Paralisado (não pode realizar ações, fica indefeso e automaticamente falha em testes de Reflexos). Se passar no teste de resistência, em vez disso fica com a condição Lento (pode realizar apenas uma ação padrão ou de movimento por turno, não ambas). A cada rodada, o alvo pode gastar uma ação completa para fazer um novo teste de Vontade. Se passar, se liberta completamente do efeito."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "muda o alvo para 1 espírito.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "aumenta o número de alvos em +1.",
              "aumenta": true
            },
            {
              "custo": 3,
              "descricao": "muda o alvo para 1 criatura. Requer 4º círculo",
              "aumenta": false
            }
          ]
        },
        "selo-de-mana": {
          "name": "Selo de Mana",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/selo-de-mana.webp",
          "system": {
            "circulo": "3",
            "escola": "encantamento",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Vontade Parcial",
            "custo": "6 PM",
            "description": {
              "value": "Seu toque manifesta um selo mágico na pele do alvo, que atrapalha o fluxo de mana. Pela duração da magia, sempre que o alvo realizar qualquer ação que gaste PM, deve fazer um teste de Vontade; se passar, faz a ação normalmente. Se falhar, a ação não tem efeito (mas os PM são gastos mesmo assim)."
            }
          },
          "aprimoramentos": [
            {
              "custo": 4,
              "descricao": "muda o alcance para curto e o alvo para criaturas escolhidas dentro do alcance. Requer 4º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "ilusao": {
        "manto-de-sombras": {
          "name": "Manto de Sombras",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/manto-de-sombras.webp",
          "system": {
            "circulo": "3",
            "escola": "ilusao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Você fica coberto por um manto de energia sombria. Nesta forma, torna-se incorpóreo (inclui seu equipamento): só pode ser afetado por armas mágicas, ou por outras criaturas incorpóreas e pode atravessar objetos sólidos, mas não manipulá-los. Também não pode atacar criaturas normais (mas ainda pode lançar magias nelas). Além disso, se torna vulnerável à luz direta: se exposto a uma fonte de luz, sofre 1 ponto de dano por rodada. Você pode gastar uma ação de movimento e 1 PM para \"entrar\" em uma sombra do seu tamanho ou maior e se teletransportar para outra sombra, também do seu tamanho ou maior, em alcance médio."
            }
          },
          "aprimoramentos": [
            {
              "custo": 4,
              "descricao": "muda o alcance para toque e o alvo para 1 criatura. Requer 4º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "necromancia": {
        "servo-morto-vivo": {
          "name": "Servo Morto-Vivo",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/servo-morto-vivo.webp",
          "system": {
            "circulo": "3",
            "escola": "necromancia",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "toque",
            "alvo": "1 cadáver",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Esta magia transforma o cadáver de um humanoide, animal ou monstro em um morto-vivo sob seu controle. Se o corpo estiver bem preservado, torna-se um zumbi; se estiver em decomposição avançada ou for apenas ossos, torna-se um esqueleto. O morto-vivo criado obedece a todos os seus comandos mentais, mesmo ordens suicidas, e não precisa de descanso, comida ou ar. Se desejar que o morto-vivo o acompanhe em aventuras, ele funciona como um aliado iniciante, de um tipo à sua escolha entre ajudante, atirador, combatente, fortão, guardião ou montaria. Uma vez por rodada, quando você sofrer dano, pode sacrificar um servo morto-vivo sob seu controle para evitar completamente esse dano. O servo é destruído no processo e não pode ser reanimado novamente. Você pode controlar um número de servos mortos-vivos igual ao seu modificador de atributo-chave. Componente material: um ônix negro (T$ 100), que deve ser inserido na boca ou olho do cadáver durante o ritual."
            }
          },
          "aprimoramentos": [
            {
              "custo": 3,
              "descricao": "muda o componente material para pó de ônix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria um carniçal. Ele pode funcionar como um aliado veterano, escolhido entre ajudante, atirador, combatente, fortão ou guardião. O resto segue normal.",
              "aumenta": false
            },
            {
              "custo": 3,
              "descricao": "muda o componente material para pó de ônix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria uma sombra. Ela pode funcionar como um aliado veterano, escolhido entre assassino, combatente ou perseguidor. O restante da magia segue normal.",
              "aumenta": false
            },
            {
              "custo": 7,
              "descricao": "muda o componente material para ferramentas de embalsamar (T$ 1.000). Em vez de um zumbi ou esqueleto, cria uma múmia. Ela pode funcionar como um aliado mestre, escolhido entre ajudante, destruidor, guardião ou médico. O restante da magia segue normal. Requer 4º círculo.",
              "aumenta": false
            }
          ]
        }
      },
      "transmutacao": {
        "pele-de-pedra": {
          "name": "Pele de Pedra",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/pele-de-pedra.webp",
          "system": {
            "circulo": "3",
            "escola": "transmutacao",
            "ativacao": {
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "Sua pele ganha aspecto e dureza de rocha, tornando-se mais resistente a ferimentos. Você recebe redução de dano 5, reduzindo em 5 pontos todo dano físico (corte, impacto e perfuração) que sofrer. Esta redução não se aplica a dano de energia (fogo, frio, eletricidade, ácido, trevas, luz) ou dano mental."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "muda o alcance para toque e o alvo para 1 criatura.",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "muda a duração para 1 dia.",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "sua pele ganha aspecto e dureza de aço. Você recebe resistência a dano 10. Requer 4º círculo.",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "muda o alcance para toque, o alvo para 1 criatura, a duração para 1d4 rodadas e adiciona Resistência: Fortitude anula. Em vez do efeito normal, a magia transforma o alvo e seu equipamento em uma estátua inerte e sem consciência. A estátua possui os mesmos PV da criatura e resistência a dano 8; se for quebrada, a criatura morrerá. Requer 4º círculo.",
              "aumenta": false
            },
            {
              "custo": 9,
              "descricao": "como acima, mas com duração permanente. Requer 5º círculo.",
              "aumenta": false
            }
          ]
        }
      }
    },
    "4-circulo": {
      "abjuracao": {
        "libertacao": {
          "name": "Libertação",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/libertacao.webp",
          "system": {
            "circulo": "4",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "O alvo fica imune a efeitos de movimento e ignora qualquer efeito que impeça ou restrinja seu deslocamento. Por fim, pode usar habilidades que exigem liberdade de movimentos mesmo se estiver usando armadura ou escudo."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "além do normal, o alvo pode caminhar sobre a água ou outros líquidos com seu deslocamento normal. Entretanto, isso não protege contra qualquer efeito que o líquido possa causar (o alvo pode andar sobre lava, mas ainda vai sofrer dano).",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "além do normal, o alvo pode escolher 20 em todos os testes de Atletismo.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "além do normal, o alvo pode escolher 20 em todos os testes de Acrobacia e pode fazer todas as manobras desta perícia mesmo sem treinamento.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "muda o alcance para curto e o alvo para até 5 criaturas.",
              "aumenta": false
            },
            {
              "custo": 5,
              "descricao": "pode dissipar Aprisionamento.",
              "aumenta": false
            }
          ]
        }
      },
      "adivinhacao": {
        "visao-da-verdade": {
          "name": "Visão da Verdade",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/visao-da-verdade.webp",
          "system": {
            "circulo": "4",
            "escola": "adv",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "move"
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "Seus olhos brilham com uma luz dourada sutil e você passa a enxergar a forma real de todas as coisas. Esta visão mística permite que você veja através de camuflagem e escuridão (tanto normais quanto mágicas), assim como todos os efeitos de ilusão e transmutação. Quando olha para algo afetado por magia de ilusão ou transmutação, você vê tanto a aparência falsa quanto a verdadeira forma, sendo a verdadeira mais nítida. Você automaticamente detecta criaturas invisíveis, polimorfadas, disfarçadas magicamente ou escondidas por ilusões. Além disso, pode identificar a verdadeira natureza de construtos, mortos-vivos e criaturas extraplanares, vendo uma aura característica ao redor delas. Esta magia também revela a presença de magias ativas em objetos e criaturas, mostrando-as como uma tênue aura colorida."
            }
          },
          "aprimoramentos": [
            {
              "custo": 1,
              "descricao": "muda o alcance para toque e o alvo para 1 criatura.",
              "aumenta": false
            },
            {
              "custo": 1,
              "descricao": "além do normal, o alvo fica com sentidos apurados; ele recebe +10 em todos os testes de Percepção.",
              "aumenta": false
            },
            {
              "custo": 2,
              "descricao": "além do normal, o alvo escuta falsidades; ele recebe +10 em todos os testes de Intuição.",
              "aumenta": false
            },
            {
              "custo": 4,
              "descricao": "além do normal, o alvo enxerga através de paredes e barreiras com 30cm de espessura ou menos (as paredes e barreiras parecem translúcidas).",
              "aumenta": false
            }
          ]
        }
      },
      "convocacao": {
        "viagem-planar": {
          "name": "Viagem Planar",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/viagem-planar.webp",
          "system": {
            "circulo": "4",
            "escola": "convocacao",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "toque",
            "alvo": "pessoal",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "Você e os alvos viajam instantaneamente para outro plano da Criação através de um portal dimensional temporário. No plano de destino, vocês chegam de 10 a 1.000km do local pretendido (role 1d100 e multiplique por 10km). A precisão da chegada depende do seu conhecimento sobre o destino: locais bem conhecidos tendem a ter menos variação na distância. Esta magia não funciona se você estiver em um local protegido contra viagem planar (como sob efeito de Âncora Dimensional). Componente material: um bastão de metal precioso em forma de forquilha (no valor de T$ 1.000), que é consumido pela magia. O tipo específico de metal determina para qual plano de existência você será enviado - diferentes planos requerem diferentes metais, e alguns podem ser extremamente raros ou difíceis de encontrar, a critério do mestre. Exemplos incluem prata para o Plano Astral, ferro frio para o Reino das Fadas, ou ouro para planos celestiais."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda o alvo para até cinco criaturas voluntárias que você esteja tocando.",
              "aumenta": false
            }
          ]
        }
      },
      "necromancia": {
        "muralha-de-ossos": {
          "name": "Muralha de Ossos",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/muralha-de-ossos.webp",
          "system": {
            "circulo": "4",
            "escola": "necromancia",
            "ativacao": {
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "medio",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "Uma parede de ossos se eleva da terra. A parede tem 15m de comprimento, 9m de altura e 1,5m de espessura. Ela pode ter qualquer forma — não precisa ser uma linha reta —, mas sua base precisa estar sempre tocando o solo. Quando a parede surge, criaturas na área ocupada ou adjacentes sofrem 4d8 pontos de dano de corte e precisam fazer um teste de Reflexos para não ficarem presas no emaranhado de ossos. Uma criatura presa dessa maneira fica Agarrado, e pode usar uma ação padrão para fazer um teste de Atletismo (CD da magia) para se soltar. Se passar no teste, sai da muralha para um dos lados adjacentes. Se falhar, sofre 4d8 pontos de dano de corte. é possível destruir o muro para atravessá-lo ou libertar uma criatura agarrada. Cada trecho de 3m do muro tem Defesa 8, 40 PV e redução de corte, frio e perfuração 10. Também é possível escalar a parede. Isso exige um teste de Atletismo (CD da magia) e causa 4d8 pontos de dano de corte para cada 3m escalados."
            }
          },
          "aprimoramentos": [
            {
              "custo": 3,
              "descricao": "aumenta o comprimento em +15m e altura em +3m.",
              "aumenta": true
            },
            {
              "custo": 5,
              "descricao": "o muro é feito de uma massa de esqueletos animados. Sempre que uma criatura iniciar seu turno adjacente ou escalando a muralha, deve fazer um teste de Reflexos. Se falhar fica agarrada, sofrendo os feitos normais de estar agarrada pela magia.",
              "aumenta": false
            }
          ]
        }
      }
    },
    "5-circulo": {
      "abjuracao": {
        "buraco-negro": {
          "name": "Buraco Negro",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/buraco-negro.webp",
          "system": {
            "circulo": "5",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "completa"
            },
            "alcance": "longo",
            "duracao": "3 rodada",
            "resistencia": "Fortitude parcial",
            "custo": "15 PM",
            "description": {
              "value": "Esta magia cria um vácuo capaz de sugar tudo nas proximidades. Escolha um espaço desocupado para o buraco negro. No início de cada um de seus três turnos seguintes, todas as criaturas a até alcance longo do buraco negro, incluindo você, devem fazer um teste de Fortitude. Em caso de falha, ficam caídas e são puxadas 30m na direção do buraco. Objetos soltos também são puxados. Criaturas podem gastar uma ação de movimento para se segurar em algum objeto fixo, recebendo +2 em seus testes de resistência. Criaturas e objetos que toquem o buraco negro são sugadas, desaparecendo para sempre.Criaturas e objetos que iniciem seu turno no espaço do buraco negro devem gastar uma ação de movimento e fazer um teste de Fortitude. Se passarem, podem escapar se arrastando (metade de seu deslocamento) para longe dele. Se falharem, perdem a ação (mas podem gastar outra para tentar novamente). Se terminarem seu turno no espaço do buraco negro, são sugadas, desaparecendo para sempre. Não se conhece o destino das coisas sugadas pelo buraco negro, uma vez que jamais retornam. Alguns estudiosos sugerem que podem ser enviadas para outros mundos. Muitos clérigos da Noite acreditam que esta magia abre um portal para Sombria, o lar de sua deusa, e sonham um dia poder realizar essa jornada."
            }
          },
          "aprimoramentos": [
            {
              "custo": 5,
              "descricao": "muda o efeito para que você não seja afetado.",
              "aumenta": false
            }
          ]
        },
        "invulnerabilidade": {
          "name": "Invulnerabilidade",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/invulnerabilidade.webp",
          "system": {
            "circulo": "5",
            "escola": "abjuracao",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "15 PM",
            "description": {
              "value": "Esta magia suprema cria uma barreira mágica absolutamente impenetrável ao seu redor, manifestando-se como uma aura cintilante que repele ameaças específicas. Você deve escolher um dos dois tipos de proteção ao lançar a magia: PROTEÇÃO MENTAL: Uma aura prateada envolve sua mente, tornando-a uma fortaleza inexpugnável. Você fica completamente imune às condições abalado, alquebrado, apavorado, atordoado, confuso, esmorecido, fascinado, frustrado e pasmo. Além disso, torna-se imune a todos os efeitos de encantamento e ilusão, independentemente de sua origem ou poder. Sua mente não pode ser lida, controlada, influenciada ou enganada por qualquer meio mágico. PROTEÇÃO FÍSICA: Uma aura dourada fortalece seu corpo contra todos os males físicos. Você fica completamente imune às condições atordoado, cego, debilitado, enjoado, envenenado, exausto, fatigado, fraco, lento, ofuscado e paralisado. Além disso, torna-se imune a acertos críticos (todos os ataques contra você causam dano normal), ataques furtivos (que falham automaticamente) e todas as doenças (naturais ou mágicas). Seu corpo torna-se um templo inviolável contra aflições físicas. IMPORTANTE: Esta proteção não impede dano direto - você ainda pode ser ferido por espadas, magias de dano, quedas, etc. A magia protege contra condições e efeitos especiais, não contra dano bruto. A escolha entre proteção mental ou física deve ser feita no momento do lançamento e não pode ser alterada durante a duração da magia."
            }
          },
          "aprimoramentos": [
            {
              "custo": 5,
              "descricao": "muda o alcance para curto e o alvo para 1 criatura.",
              "aumenta": false
            }
          ]
        }
      },
      "encantamento": {
        "palavra-primordial": {
          "name": "Palavra Primordial",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/palavra-primordial.webp",
          "system": {
            "circulo": "5",
            "escola": "encantamento",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "curto",
            "duracao": "instantânea ou veja texto",
            "alvo": "1 criatura com menos níveis que você",
            "resistencia": "Vontade parcial",
            "custo": "15 PM",
            "description": {
              "value": "Você pronuncia uma única palavra no idioma primordial da Criação - a linguagem que os deuses usaram para moldar a realidade. Esta palavra ressoa com poder cósmico, capaz de alterar a essência de uma criatura com menos níveis que você. O som ecoa através de dimensões, e mesmo criaturas surdas são afetadas, pois a palavra atinge diretamente a alma. Escolha um dos três efeitos devastadores: ATORDOAR: A palavra \"KETH\" paralisa a mente do alvo. A criatura fica Atordoada por 2d4 rodadas, completamente incapaz de agir. Se passar no teste de resistência de Vontade, fica apenas Desprevenida por 1d4 rodadas e torna-se imune ao efeito de atordoamento desta magia até o final da cena. CEGAR: A palavra \"NETH\" queima os olhos da criatura com luz primordial. O alvo fica permanentemente Cego, perdendo completamente a visão. Se passar no teste de resistência, fica apenas Ofuscado por 1d4 rodadas. A cegueira permanente só pode ser curada por magias de cura poderosas ou Desejo. MATAR: A palavra \"DEATH\" ordena que a alma se separe do corpo. A criatura morre instantaneamente, independentemente de seus pontos de vida atuais. Além do teste normal de Vontade, criaturas com mais da metade de seus PV têm direito a um teste adicional de Fortitude. Se passar em qualquer um dos testes, em vez de morrer, perde 10d8 pontos de vida e fica Sangrando. Esta é uma das magias mais temidas de todo o multiverso, pois representa o poder bruto da criação falando através de um mortal."
            }
          }
        }
      },
      "necromancia": {
        "toque-da-morte": {
          "name": "Toque da Morte",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/toque-da-morte.webp",
          "system": {
            "circulo": "5",
            "escola": "necromancia",
            "ativacao": {
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "",
              "execucao": "acao"
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Veja texto",
            "custo": "15 PM",
            "description": {
              "value": "Esta é uma das magias necromânticas mais temidas, canalizando a própria essência da morte através de seu toque. Sua mão fica envolta em uma aura negra crepitante, emanando frio sobrenatural e o cheiro de túmulos antigos. Ao tocar uma criatura, você drena diretamente sua força vital. EFEITO NORMAL: A criatura sofre 10d8+10 pontos de dano de trevas conforme sua energia vital é sugada. Este dano representa o envelhecimento acelerado, o enfraquecimento dos órgãos vitais e a corrosão da alma. EFEITO LETAL: Se o alvo estiver com menos da metade de seus pontos de vida (já ferido ou enfraquecido), a magia torna-se potencialmente letal. Em vez de causar dano normal, a criatura deve fazer um teste de Fortitude contra a CD da magia. Se PASSAR no teste, sofre apenas o dano normal (10d8+10). Se FALHAR no teste, sua força vital é completamente drenada e seus pontos de vida são imediatamente reduzidos a -10, colocando-a em estado de morte iminente. NATUREZA SINISTRA: Esta magia não apenas fere - ela corrompe. Criaturas mortas por Toque da Morte frequentemente se levantam como mortos-vivos menores, e o local onde a magia foi lançada pode ficar permanentemente amaldiçoado. Usar esta magia repetidamente pode atrair a atenção de entidades das trevas ou causar pesadelos ao conjurador. A energia necromântica deixa uma marca sombria tanto no alvo quanto no usuário."
            }
          },
          "aprimoramentos": [
            {
              "custo": 2,
              "descricao": "muda o alcance para curto. Em vez de tocar no alvo, você dispara um raio púrpura da ponta de seu dedo indicador.",
              "aumenta": false
            },
            {
              "custo": 10,
              "descricao": "muda o alcance para curto e o alvo para inimigos no alcance. Em vez de tocar no alvo, você dispara raios púrpuras da ponta de seus dedos.",
              "aumenta": false
            }
          ]
        }
      }
    }
  }
};

module.exports = spellsData;
