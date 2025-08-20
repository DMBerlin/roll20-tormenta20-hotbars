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
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "Esfera de 9m de raio",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você cria uma barreira protetora invisível que detecta qualquer criatura que tocar ou entrar na área protegida. Ao lançar a magia, você pode escolher quais criaturas podem entrar na área sem ativar seus efeitos. <em>Alarme</em> pode emitir um aviso telepático ou sonoro, decidido quando a magia é lançada. Um aviso telepático alerta apenas você, inclusive acordando-o se estiver dormindo, mas apenas se estiver a até 1km da área protegida. Um aviso sonoro alerta todas as criaturas em alcance longo.</p>"
            }
          }
        },
        "armadura-arcana": {
          "name": "Armadura Arcana",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_magic_magearmor.jpg",
          "system": {
            "circulo": "1",
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Esta magia cria uma película protetora invisível, mas tangível, fornecendo +5 na Defesa. Esse bônus é cumulativo com outras magias, mas não com bônus fornecido por armaduras.</p>"
            }
          }
        },
        "tranca-arcana": {
          "name": "Tranca Arcana",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane01.jpg",
          "system": {
            "circulo": "1",
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 objeto Grande ou menor",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Esta magia tranca uma porta ou outro item que possa ser aberto ou fechado (como um baú, caixa etc.), aumentando a CD de testes de Força ou Ladinagem para abri-lo em +10. Você pode abrir livremente sua própria tranca sem problemas.</p><p><i>Componente material:</i> chave de bronze no valor de T$ 25.</p>"
            }
          }
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
              "execução": "free",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você amplia sua percepção, antecipando movimentos dos inimigos e achando brechas em sua defesa. Quando fazum teste de ataque, você rola dois dados e usa o melhor resultado</p>"
            }
          }
        }
      },
      "convocacao": {
        "area-escorregadia": {
          "name": "Área Escorregadia",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_web.jpg",
          "system": {
            "circulo": "1",
            "escola": "con",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "ou",
            "resistencia": "Reflexos (veja texto)",
            "custo": "1 PM",
            "description": {
              "value": "<p>Esta magia recobre uma superfície com uma substância gordurosa e escorregadia. Criaturas na área devem passar na resistência para não cair. Nas rodadas seguintes, criaturas que tentem movimentar-se pela área devem fazer testes de Acrobacia para equilíbrio (CD 10).</p>\n<p><em>Área Escorregadia</em> pode tornar um item escorregadio. Uma criatura segurando um objeto afetado deve passar na resistência para não deixar o item cair cada vez que usá-lo.</p>"
            }
          }
        },
        "conjurar-monstro": {
          "name": "Conjurar Monstro",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_summonnatureguardian.jpg",
          "system": {
            "circulo": "1",
            "escola": "con",
            "ativacao": {
              "execução": "full",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<div>\n<div>Você conjura um monstro Pequeno que ataca seus inimigos. Você escolhe a aparência do monstro e o tipo de dano que ele pode causar, entre corte, impacto e perfuração. No entanto, ele não é uma criatura real, e sim um construto feito de energia. Se for destruído, ou quando a magia acaba, desaparece com um brilho, sem deixar nada para trás. Você só pode ter um monstro conjurado por esta magia por vez.</div>\n<br>\n<div>O monstro surge em um espaço desocupado a sua escolha dentro do alcance e age no início de cada um de seus turnos, a partir da próxima rodada. O monstro tem deslocamento 9m e pode fazer uma ação de movimento por rodada. Você pode gastar uma ação padrão para dar uma das seguintes ordens a ele.</div>\n<br>\n<div>Mover: o monstro se movimenta o dobro do deslocamento nessa rodada.</div>\n<br>\n<div>Atacar: o monstro causa 2d4+2 pontos de dano a uma criatura adjacente.</div>\n<br>\n<div>Lançar Magia: o monstro pode servir como ponto de origem para uma magia lançada por você com execução de uma ação padrão ou menor. Ele pode descarregar um Toque Chocante em um inimigo distante, ou mesmo &ldquo;cuspir&rdquo; uma Bola de Fogo! Você gasta PM normalmente para lançar a magia.</div>\n<br>\n<div>Outros usos criativos para monstros conjurados ficam a critério do mestre. O monstro não age sem receber uma ordem.</div>\n<br>\n<div>Para efeitos de jogo, o monstro conjurado tem For 2, Des 3 e todos os outros atributos nulos. Ele tem Defesa igual a sua, 20 pontos de vid e usa o seu bônus para teste de Reflexos. Ele é imune a efeitos que pedem um teste de Fortitude ou Vontade.</div>\n</div>"
            }
          }
        },
        "teia": {
          "name": "Teia",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_web.jpg",
          "system": {
            "circulo": "1",
            "escola": "con",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "cubo com 6m de lado",
            "resistencia": "Reflexos anula",
            "custo": "1 PM",
            "description": {
              "value": "<p>Teia cria várias camadas de fibras entrelaçadas e pegajosas na área. Qualquer criatura na área que falhar na resistência fica <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.GwCDzhOvdqD8zEaw\" data-id=\"GwCDzhOvdqD8zEaw\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Enredado</a>. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo. A área ocupada por Teia é terreno difícil.</p>\n<p>A Teia é inflamável. Qualquer ataque que cause dano de fogo destrói as teias por onde passar, libertando as criaturas enredadas mas deixando-as em chamas.</p>"
            }
          }
        }
      },
      "encantamento": {
        "adaga-mental": {
          "name": "Adaga Mental",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_psychicscream.jpg",
          "system": {
            "circulo": "1",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 criatura",
            "resistencia": "Vontade parcial",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você manifesta e dispara uma adaga imaterial contra a mente do alvo, que sofre 2d6 pontos de dano psíquico e fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.bD6XAyHQrWYr0BTQ]{Atordoado} por uma rodada. Se passar no teste de resistência, sofre apenas metade do dano e evita a condição. Uma criatura só pode ficar atordoada por esta magia uma vez por cena.</p>"
            }
          }
        },
        "enfeiticar": {
          "name": "Enfeitiçar",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_charm.jpg",
          "system": {
            "circulo": "1",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 humanóide",
            "resistencia": "Vontade anula",
            "custo": "1 PM",
            "description": {
              "value": "<p>O alvo fica enfeitiçado (veja a página 394). Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é dissipada e o alvo retorna à atitude que tinha antes (ou piorada, de acordo com o mestre).</p>"
            }
          }
        },
        "hipnotismo": {
          "name": "Hipnotismo",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_soothingkiss.jpg",
          "system": {
            "circulo": "1",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 animal ou humanoide",
            "resistencia": "Vontade anula",
            "custo": "1 PM",
            "description": {
              "value": "<p>Suas palavras e movimentos ritmados deixam o alvo fascinado. Esta magia só afeta criaturas que possam perceber você. Se usar esta magia em combate, o alvo recebe +5 em seu teste de resistência. Se a criatura passar, fica imune a este efeito por um dia.</p>"
            }
          }
        },
        "sono": {
          "name": "Sono",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_sleep.jpg",
          "system": {
            "circulo": "1",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 humanoide",
            "resistencia": "Vontade parcial",
            "custo": "1 PM",
            "description": {
              "value": "<p>Um cansaço místico recai sobre o alvo. Se falhar na resistência, ele fica inconsciente e caído ou, se estiver envolvido em combate ou outra situação perigosa, fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.6yXEaW3dSXtfsJ4i]{Exausto} por 1 rodada, depois fatigado. Em ambos os casos, se passar, o alvo fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.MCED18aEe4UFeEVf]{Fatigado} por 1d4 rodadas.</p>"
            }
          }
        }
      },
      "evocacao": {
        "explosao-de-chamas": {
          "name": "Explosão de Chamas",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_fire_fireball.jpg",
          "system": {
            "circulo": "1",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Cone de 6m",
            "resistencia": "Reflexos reduz à metade",
            "custo": "1 PM",
            "description": {
              "value": "<p>Um leque de chamas irrompe de suas mãos, causando 2d6 pontos de dano de fogo às criaturas na área.</p>"
            }
          }
        },
        "seta-infalivel": {
          "name": "Seta Infalível",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane02.jpg",
          "system": {
            "circulo": "1",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "até 2 criaturas",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Favorita entre arcanistas iniciantes, esta magia lança duas setas de energia que causam 1d4+1 pontos de dano de essência cada. Você pode lançar as setas em alvos diferentes ou concentrá-las num mesmo alvo. Caso você possua um bônus no dano de magias, como pelo poder Arcano de Batalha, ele é aplicado em apenas uma seta (o bônus vale para a magia, não cada alvo).</p>"
            }
          }
        },
        "toque-chocante": {
          "name": "Toque Chocante",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg",
          "system": {
            "circulo": "1",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Fortitude reduz à metade",
            "custo": "1 PM",
            "description": {
              "value": "<p>Arcos elétricos envolvem sua mão, causando 2d8+2 pontos de dano de eletricidade. Se o alvo usa armadura de metal (ou carrega muito metal, a critério do mestre), sofre uma penalidade de –5 no teste de resistência.</p>"
            }
          }
        }
      },
      "ilusao": {
        "criar-ilusao": {
          "name": "Criar Ilusão",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_illusion.jpg",
          "system": {
            "circulo": "1",
            "escola": "ilu",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "resistencia": "Vontade desacredita",
            "custo": "1 PM",
            "description": {
              "value": "<p>Esta magia cria uma ilusão visual (uma criatura, uma parede...) ou sonora (um grito de socorro, um uivo assustador...). A magia cria apenas imagens ou sons simples, com volume equivalente ao tom de voz normal para cada cubo de 1,5m no efeito. Não é possível criar cheiros, texturas ou temperaturas, nem sons complexos, como uma música ou diálogo. Criaturas e objetos atravessam uma ilusão sem sofrer dano, mas a magia pode, por exemplo, esconder uma armadilha ou inimigo. A magia é dissipada se você sair do alcance.</p>"
            }
          }
        },
        "disfarce-ilusorio": {
          "name": "Disfarce Ilusório",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_disguise.jpg",
          "system": {
            "circulo": "1",
            "escola": "ilu",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Vontade desacredita",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você muda a aparência do alvo, incluindo seu equipamento. Isso inclui altura, peso, tom de pele, cor de cabelo, timbre de voz etc. O alvo recebe +10 em testes de Enganação para disfarce. O alvo não recebe novas habilidades (você pode ficar parecido com outra raça, mas não ganhará as habilidades dela), nem modifica o equipamento (uma espada longa disfarçada de bordão continua funcionando e causando dano como uma espada).</p>"
            }
          }
        },
        "imagem-espelhada": {
          "name": "Imagem Espelhada",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_mirrorimage.jpg",
          "system": {
            "circulo": "1",
            "escola": "ilu",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Três cópias ilusórias suas aparecem. As duplicatas ficam ao seu redor e imitam suas ações, tornando difícil para um inimigo saber quem atacar. Você recebe +6 na Defesa. Cada vez que um ataque contra você erra, uma das imagens desaparece e o bônus na Defesa diminui em 2. Um oponente deve ver as cópias para ser confundido. Se você estiver invisível, ou o atacante fechar os olhos, você não recebe o bônus (mas o atacante ainda sofre penalidades normais por não enxergar).</p>"
            }
          }
        },
        "leque-cromatico": {
          "name": "Leque Cromático",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane03.jpg",
          "system": {
            "circulo": "1",
            "escola": "ilu",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "cone de 4,5m",
            "resistencia": "Vontade parcial",
            "custo": "1 PM",
            "description": {
              "value": "<p>Um cone de luzes brilhantes surge das suas mãos, deixando os animais e humanoides na área atordoados por 1 rodada (apenas uma vez por cena, Vontade anula) e ofuscados pela cena.</p>"
            }
          }
        }
      },
      "necromancia": {
        "amedrontar": {
          "name": "Amedrontar",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathscream.jpg",
          "system": {
            "circulo": "1",
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 animal ou humanoide",
            "resistencia": "Vontade parcial",
            "custo": "1 PM",
            "description": {
              "value": "<p>O alvo é envolvido por energias sombrias e assustadoras. Se falhar na resistência, fica <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.5n105JaAFlwIfkyX\" data-id=\"5n105JaAFlwIfkyX\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Apavorado</a> por 1 rodada, depois @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.ccqJXj25EVIzUhzo]{Abalado}. Se passar, fica abalado por 1d4 rodadas.</p>"
            }
          }
        },
        "raio-do-enfraquecimento": {
          "name": "Raio do Enfraquecimento",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_rayofweakness.jpg",
          "system": {
            "circulo": "1",
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 criatura",
            "resistencia": "Fortitude parcial",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você dispara um raio púrpura que drena as forças do alvo. Se falhar na resistência, o alvo fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.MCED18aEe4UFeEVf]{Fatigado}. Se passar, fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.iGWU5WVm57STW7am]{Vulnerável}.</p>\n<p>Note que, como efeitos de magia não acumulam, lançar esta magia duas vezes contra o mesmo alvo não irá deixá-lo exausto.</p>"
            }
          }
        },
        "vitalidade-fantasma": {
          "name": "Vitalidade Fantasma",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_lifedrain.jpg",
          "system": {
            "circulo": "1",
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você suga energia vital da terra, recebendo 2d10 pontos de vida temporários. Os PV temporários desaparecem ao final da cena.</p>"
            }
          }
        }
      },
      "transmutacao": {
        "primor-atletico": {
          "name": "Primor Atlético",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_agility.jpg",
          "system": {
            "circulo": "1",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você modifica os limites físicos do alvo, que recebe deslocamento +9m e +10 em testes de Atletismo.</p>"
            }
          }
        },
        "queda-suave": {
          "name": "Queda Suave",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_featherfall.jpg",
          "system": {
            "circulo": "1",
            "escola": "tra",
            "ativacao": {
              "execução": "reaction",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 criatura ou objeto com até 200kg",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>O alvo cai lentamente. A velocidade da queda é reduzida para 18m por rodada — o suficiente para não causar dano.</p>\n<p>Como lançar esta magia é uma reação, você pode lançá-la rápido o bastante para salvar a si ou um aliado de quedas inesperadas.</p>\n<p>Lançada sobre um projétil — como uma flecha ou uma rocha largada do alto de um penhasco —, a magia faz com que ele cause metade do dano normal, devido à lentidão.</p>\n<p><em>Queda Suave</em> só funciona em criaturas e objetos em queda livre ou similar; a magia não vai frear um golpe de espada ou o mergulho rasante de um atacante voador.</p>"
            }
          }
        },
        "transmutar-objetos": {
          "name": "Transmutar Objetos",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane04.jpg",
          "system": {
            "circulo": "1",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "matéria-prima, como madeira, rochas, ossos",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>A magia transforma matéria bruta para moldar um novo objeto. Você pode usar matéria-prima mundana para criar um objeto de tamanho Pequeno ou menor e preço máximo de T$ 25, como um balde ou uma espada. O objeto reverte à matéria-prima no final da cena, ou se for tocado por um objeto feito de chumbo. Esta magia não pode ser usada para criar objetos consumíveis, como alimentos ou itens alquímicos, nem objetos com mecanismos complexos, como bestas ou armas de fogo.</p>\n<p><em>Transmutar Objetos </em>anula <em>Despedaçar</em>.</p>"
            }
          }
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
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Esta magia cria uma película protetora sobre você. Você recebe 30 pontos de vida temporários.</p>"
            }
          }
        },
        "refugio": {
          "name": "Refúgio",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/refugio.webp",
          "system": {
            "circulo": "2",
            "escola": "abjuração",
            "ativacao": {
              "execução": "full",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Esta magia cria um domo imóvel e quase opaco por fora, mas transparente pelo lado de dentro. Ele protege contra calor, frio e forças pequenas, mas não contra qualquer coisa capaz de causar dano. Assim, o domo protege contra neve e vento comuns, mas não contra uma flecha ou Bola de Fogo. Porém, como o domo é quase opaco, qualquer criatura dentro dele tem camuflagem total contra ataques vindos de fora. Criaturas podem entrar e sair do domo livremente. Descansar dentro do Refúgio concede recuperação normal de PV e PM.</p>"
            }
          }
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
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "2 criaturas voluntárias",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você cria um elo mental entre duas criaturas com Inteligência -3 ou maior (você pode ser uma delas). As criaturas podem se comunicar independente de idioma ou distância, mas não em mundos diferentes.</p>"
            }
          }
        },
        "localizacao": {
          "name": "Localização",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/localizacao.webp",
          "system": {
            "circulo": "2",
            "escola": "adv",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "esfera com 90m de raio",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Esta magia pode encontrar uma criatura ou objeto a sua escolha. Você pode pensar em termos gerais (&ldquo;um elfo&rdquo;, &ldquo;algo de metal&rdquo;) ou específicos (&ldquo;Gwen, a elfa&rdquo;, &ldquo;uma espada longa&rdquo;). A magia indica a direção e distância da criatura ou objeto mais próximo desse tipo, caso esteja ao alcance. Você pode movimentar-se para continuar procurando. Procurar algo muito específico (&ldquo;a espada longa encantada do Barão Rulyn&rdquo;) exige que você tenha em mente uma imagem precisa do objeto; caso a imagem não seja muito próxima da verdade, a magia falha, mas você gasta os PM mesmo assim. Esta magia pode ser bloqueada por uma fina camada de chumbo.</p>"
            }
          }
        },
        "mapear": {
          "name": "Mapear",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/mapear.webp",
          "system": {
            "circulo": "2",
            "escola": "adv",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "superfície ou objeto plano, como uma mesa ou pergaminho",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Uma fagulha percorre a superfície afetada, queimando-a enquanto esboça um mapa da região onde o conjurador está. Se você conhece o lugar, o mapa será completo. Caso contrário, apresentará apenas um esboço geral, além de um ponto de referência (para possibilitar localização) e um lugar de interesse, ambos definidos pelo mestre. A região representada no mapa tem tamanho máximo de um quadrado de 10km de lado. Caso você esteja dentro de uma construção, o mapa mostrará o andar no qual você se encontra.</p>"
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
            "escola": "con",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "1 criatura",
            "resistencia": "Reflexos anula",
            "custo": "3 PM",
            "description": {
              "value": "<p>Três laços de energia surgem e se enroscam no alvo, deixando-o agarrado. A vítima pode tentar se livrar, gastando uma ação padrão para fazer um teste de Atletismo (CD igual à da magia). Se passar, destrói um laço, mais um laço adicional para cada 5 pontos pelos quais superou a CD. Os laços também podem ser atacados e destruídos: cada um tem Defesa 10, 10 PV, RD 5 e imunidade a dano mágico. Se todos os laços forem destruídos, a magia é dissipada. Por serem feitos de energia, os laços afetam criaturas incorpóreas.</p>"
            }
          }
        },
        "montaria-arcana": {
          "name": "Montaria Arcana",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/montaria-arcana.webp",
          "system": {
            "circulo": "2",
            "escola": "con",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Esta magia convoca um parceiro cavalo (ou pônei) de guerra veterano. Sua aparência é de um animal negro com crina e cauda cinzentas e cascos feitos de fumaça, mas você pode mudá-la se quiser. Além dos benefícios normais, a <em>Montaria Arcana</em> pode atravessar terreno difícil sem redução em seu deslocamento.Você pode usar Misticismo no lugar de Cavalgar para efeitos desta montaria (incluindo ser considerado treinado).</p>"
            }
          }
        },
        "salto-dimensional": {
          "name": "Salto Dimensional",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/salto-dimensional.webp",
          "system": {
            "circulo": "2",
            "escola": "con",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Esta magia transporta você para outro lugar dentro do alcance. Você não precisa perceber nem ter linha de efeito ao seu destino, podendo simplesmente imaginá-lo. Por exemplo, pode se transportar 3m adiante para ultrapassar uma porta fechada. Uma vez transportadas, criaturas não podem agir até a rodada seguinte. Esta magia não permite que você apareça dentro de um corpo sólido; se o ponto de chegada não tem espaço livre, você ressurge na área vazia mais próxima.</p>"
            }
          }
        },
        "servos-invisiveis": {
          "name": "Servos Invisíveis",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/servos-invisiveis.webp",
          "system": {
            "circulo": "2",
            "escola": "con",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "long",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você cria até três servos invisíveis e silenciosos, capazes de realizar tarefas simples como apanhar lenha, colher frutos, varrer o chão ou alimentar um cavalo. Os servos podem ser usados para manter arrumada e organizada uma mansão ou pequena torre ou para preparar um acampamento nos ermos para você e seus aliados (veja a perícia Sobrevivência, na página 123).</p>\n<p>Eles também podem ajudá-lo em tarefas mais complexas, como fazer uma pesquisa ou preparar uma poção, mas isso consome sua energia mágica. Você pode &ldquo;gastar&rdquo; um servo para receber um bônus não cumulativo de +2 em um teste de perícia (exceto testes de ataque e resistência). Os servos não são criaturas reais; não podem lutar, nem resistir a qualquer dano ou efeito que exija um teste de resistência ou teste oposto — falharão automaticamente no teste e serão destruídos.</p>"
            }
          }
        }
      },
      "encantamento": {
        "desespero-esmagador": {
          "name": "Desespero Esmagador",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/desespero-esmagador.webp",
          "system": {
            "circulo": "2",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Cone de 6m",
            "resistencia": "Vontade parcial",
            "custo": "3 PM",
            "description": {
              "value": "<p>Humanoides na área são acometidos de grande tristeza, adquirindo as condições @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.Q6GUW7cDfTW5AXRz]{Fraco} e @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.XvqIlV5v4YBeFUBs]{Frustrado}. Se passarem na resistência, adquirem essas condições por uma rodada.</p>"
            }
          }
        },
        "sussurros-insanos": {
          "name": "Sussurros Insanos",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/sussurros-insanos.webp",
          "system": {
            "circulo": "2",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 humanoide",
            "resistencia": "Vontade anula",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você murmura palavras desconexas que afetam a mente do alvo. O alvo fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.ynLMPpmMnZwV6rxf]{Confuso}.</p>"
            }
          }
        }
      },
      "evocacao": {
        "bola-de-fogo": {
          "name": "Bola de Fogo",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/bola-de-fogo.webp",
          "system": {
            "circulo": "2",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "esfera com 6m de raio",
            "resistencia": "Reflexos reduz à metade",
            "custo": "3 PM",
            "description": {
              "value": "<p>Esta famosa magia de ataque cria uma poderosa explosão, causando 6d6 pontos de dano de fogo em todas as criaturas e objetos livres na área.</p>"
            }
          }
        },
        "flecha-acida": {
          "name": "Flecha Ácida",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/flecha-acida.webp",
          "system": {
            "circulo": "2",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "1 criatura ou objeto",
            "resistencia": "Reflexos parcial",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você dispara um projétil que causa 4d6 pontos de dano de ácido. Se falhar no teste de resistência, o alvo também fica coberto por um muco corrosivo, sofrendo mais 2d6 de dano de ácido no início de seus dois próximos turnos. Se lançada contra um objeto que não esteja em posse de uma criatura a magia causa dano dobrado e ignora a RD do objeto.</p>"
            }
          }
        },
        "relampago": {
          "name": "Relâmpago",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/relampago.webp",
          "system": {
            "circulo": "2",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "linha",
            "resistencia": "Reflexos reduz à metade",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você dispara um poderoso raio que causa 6d6 pontos de dano de eletricidade em todas as criaturas e objetos livres na área.</p>"
            }
          }
        },
        "sopro-das-uivantes": {
          "name": "Sopro das Uivantes",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/sopro-das-uivantes.webp",
          "system": {
            "circulo": "2",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "cone de 9m",
            "resistencia": "Fortitude parcial",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você sopra ar gélido que causa 4d6 pontos de dano de frio (Fortitude reduz à metade). Criaturas de tamanho Médio ou menor que falhem na resistência ficam caídas e são empurradas 6m na direção oposta. Se houver uma parede ou outro objeto sólido (mas não uma criatura) no caminho, a criatura para de se mover, mas sofre +2d6 pontos de dano de impacto.</p>"
            }
          }
        }
      },
      "ilusao": {
        "aparencia-perfeita": {
          "name": "Aparência Perfeita",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/aparencia-perfeita.webp",
          "system": {
            "circulo": "2",
            "escola": "ilu",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Esta magia lhe concede um rosto idealizado, porte físico garboso, voz melodiosa e olhar sedutor. Enquanto a magia estiver ativa, seu Carisma torna-se 5 (ou recebe um bônus de +2, caso seja 5 ou maior) e você recebe +5 nos testes de Diplomacia e Enganação. Quando a magia acaba, quaisquer observadores percebem a mudança e tendem a suspeitar de você. Da mesma maneira, pessoas que o viram sob o efeito da magia sentirão que &ldquo;algo está errado&rdquo; ao vê-lo em condições normais. Quando a cena acabar, você pode gastar os PM da magia novamente como uma ação livre para mantê-la ativa. Este efeito não fornece PV ou PM adicionais.</p>"
            }
          }
        },
        "camuflagem-ilusoria": {
          "name": "Camuflagem Ilusória",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/camuflagem-ilusoria.webp",
          "system": {
            "circulo": "2",
            "escola": "ilu",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>O alvo fica com sua imagem nublada, como se vista através de um líquido, recebendo os efeitos de camuflagem leve.</p>"
            }
          }
        },
        "esculpir-sons": {
          "name": "Esculpir Sons",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/esculpir-sons.webp",
          "system": {
            "circulo": "2",
            "escola": "ilu",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "1 criatura ou objeto",
            "resistencia": "Vontade anula",
            "custo": "3 PM",
            "description": {
              "value": "<p>Esta magia altera os sons emitidos pelo alvo. Ela não é capaz de criar sons, mas pode omiti-los (como fazer uma carroça ficar silenciosa) ou transformá-los (como fazer uma pessoa ficar com voz de passarinho). Você não pode criar sons que não conhece (não pode fazer uma criatura falar num idioma que não conheça). Uma vez que escolha a alteração, ela não pode ser mudada. Um conjurador que tenha a voz modificada drasticamente não poderá lançar magias.</p>"
            }
          }
        },
        "invisibilidade": {
          "name": "Invisibilidade",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/invisibilidade.webp",
          "system": {
            "circulo": "2",
            "escola": "ilu",
            "ativacao": {
              "execução": "free",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>O alvo fica invisível (incluindo seu equipamento). Um personagem invisível recebe camuflagem total, +10 em testes de Furtividade contra ouvir e criaturas que não possam vê-lo ficam desprevenidas contra seus ataques.</p>\n<p>A magia termina se o alvo faz uma ação hostil contra uma criatura. Ações contra objetos livres não dissipam a Invisibilidade (você pode tocar ou apanhar objetos que não estejam sendo segurados por outras criaturas). Causar dano indiretamente — por exemplo, acendendo o pavio de um barril de pólvora que vai detonar mais tarde — não é considerado um ataque.</p>\n<p>Objetos soltos pelo alvo voltam a ser visíveis e objetos apanhados por ele ficam invisíveis. Qualquer parte de um item carregado que se estenda além de seu alcance corpo a corpo natural se torna visível. Uma luz nunca fica invisível (mesmo que sua fonte seja).</p>"
            }
          }
        }
      },
      "necromancia": {
        "cranio-voador": {
          "name": "Crânio Voador",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/cranio-voador.webp",
          "system": {
            "circulo": "2",
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "1 criatura",
            "resistencia": "Fortitude reduz à metade",
            "custo": "3 PM",
            "description": {
              "value": "<p>Esta magia cria um crânio envolto em energia negativa. Quando atinge o alvo, causa 4d8+4 pontos de dano de trevas e se desfaz emitindo um som horrendo, deixando abalado o alvo e todos os inimigos num raio de 3m dele (criaturas já abaladas ficam apavoradas por 1d4 rodadas). Passar no teste de resistência diminui o dano à metade e evita a condição (as demais criaturas na área também tem direito ao teste de resistência, para evitar a condição).</p>\n<p><a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.ccqJXj25EVIzUhzo\" data-id=\"ccqJXj25EVIzUhzo\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Abalado</a></p>\n<p><a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.5n105JaAFlwIfkyX\" data-id=\"5n105JaAFlwIfkyX\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Apavorado</a></p>"
            }
          }
        },
        "toque-vampirico": {
          "name": "Toque Vampírico",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/toque-vampirico.webp",
          "system": {
            "circulo": "2",
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Fortitude reduz à metade",
            "custo": "3 PM",
            "description": {
              "value": "<p>Sua mão brilha com energia sombria, causando 6d6 pontos de dano de trevas. Você recupera pontos de vida iguais à metade do dano causado (se causou algum dano).</p>"
            }
          }
        }
      },
      "transmutacao": {
        "alterar-tamanho": {
          "name": "Alterar Tamanho",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/alterar-tamanho.webp",
          "system": {
            "circulo": "2",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 objeto",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Esta magia aumenta ou diminui o tamanho de um item mundano em até três categorias (um objeto Enorme vira Pequeno, por exemplo). Você também pode mudar a consistência do item, deixando-o rígido como pedra ou flexível como seda (isso não altera sua RD ou PV, apenas suas propriedades físicas). Se lançar a magia num objeto de uma criatura involuntária, ela pode fazer um teste de Vontade para anulá-la.</p>"
            }
          }
        },
        "metamorfose": {
          "name": "Metamorfose",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/metamorfose.webp",
          "system": {
            "circulo": "2",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você muda sua aparência e forma — incluindo seu equipamento — para qualquer outra criatura, existente ou imaginada. Independentemente da forma escolhida, você recebe +20 em testes de Enganação para disfarce. Características não mencionadas não mudam.</p>\n<p>Se mudar para uma forma humanoide, pode mudar o tipo de dano (entre corte, impacto e perfuração) de suas armas (se usa uma maça e transformá- la em espada longa, ela pode causar dano de corte, por exemplo). Se quiser, pode assumir uma forma humanoide com uma categoria de tamanho acima ou abaixo da sua; nesse caso aplique os modificadores em Furtividade e testes de manobra.</p>\n<p>Se mudar para outras formas, você pode escolher uma @UUID[Item.vfR7gweTOfgnna8G]{Forma Selvagem} do druida (veja no Capítulo 1). Nesse caso você não pode atacar com suas armas, falar ou lançar magias até voltar ao normal, mas recebe uma ou mais armas naturais e os bônus da forma selvagem escolhida.</p>"
            }
          }
        },
        "velocidade": {
          "name": "Velocidade",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/velocidade.webp",
          "system": {
            "circulo": "2",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>O alvo pode realizar uma ação padrão ou de movimento adicional por turno. Esta ação não pode ser usada para lançar magias e ativar engenhocas.</p>"
            }
          }
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
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 criatura ou objeto",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>O alvo é envolvido por um campo de força cor de esmeralda que impede qualquer movimento planar. Isso inclui magias de convocação (como Salto Dimensional e Teletransporte), viagens astrais e a habilidade incorpóreo.</p>"
            }
          }
        },
        "dificultar-deteccao": {
          "name": "Dificultar Detecção",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/dificultar-deteccao.webp",
          "system": {
            "circulo": "3",
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura ou objeto",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Esta magia oculta a presença do alvo contra qualquer meio mágico de detecção, inclusive detectar magia. Um conjurador que lance uma magia de adivinhação para detectar a presença ou localização do alvo deve fazer um teste de Vontade. Se falhar, a magia não funciona, mas os PM são gastos mesmo assim. Se for lançada sobre uma criatura, <em>Dificultar Detecção</em> protege tanto a criatura quanto seu equipamento.</p>"
            }
          }
        },
        "globo-de-invulnerabilidade": {
          "name": "Globo de Invulnerabilidade",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/globo-de-invulnerabilidade.webp",
          "system": {
            "circulo": "3",
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você é envolto por uma esfera mágica brilhante com 3m de raio, que detém qualquer magia de 2&ordm; círculo ou menor. Nenhuma magia pode ser lançada contra um alvo dentro do globo e magias de área não o penetram. No entanto, magias ainda podem ser lançadas de dentro para fora.</p>\n<p>Uma magia que dissipa outras magias só dissipa o globo se for usada diretamente sobre você, não o afetando se usada em área. Efeitos mágicos não são dissipados quando entram na esfera, apenas suprimidos (voltam a funcionar fora do globo, caso sua duração não tenha acabado). O globo é imóvel e não tem efeito sobre criaturas ou objetos. Após lançá-lo, você pode entrar ou sair livremente.</p>"
            }
          }
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
              "execução": "full",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Sua mente viaja até outro plano de existência, onde entra em contato com seres extraplanares como gênios e demônios. Você firma um contrato com uma dessas entidades para que o auxilie durante o dia, em troca de se alimentar de seu mana. Quando a magia é lançada, você recebe 6d6 dados de auxílio. Enquanto a magia durar, sempre que for realizar um teste de perícia, você pode gastar 1d6 (mais 1d6 para cada círculo de magias acima do 3&ordm; que puder lançar) e adicionar o resultado como bônus no teste. No entanto, sempre que rolar um &ldquo;6&rdquo; num desses dados, a entidade &ldquo;suga&rdquo; 1 PM de você. A magia termina se você gastar todos os dados, ficar sem PM ou no fim do dia (o que acontecer primeiro).</p>"
            }
          }
        }
      },
      "convocacao": {
        "convocacao-instantanea": {
          "name": "Convocação Instantânea",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/convocacao-instantanea.webp",
          "system": {
            "circulo": "3",
            "escola": "con",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "any",
            "alvo": "1 objeto de 2 espaços",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você invoca um objeto de qualquer lugar para sua mão. O item deve ter sido previamente preparado com uma runa ou marca pessoal sua (ao custo de T$ 5). A magia não funciona se o objeto estiver com outra criatura, mas você saberá onde ele está e quem o está carregando (ou sua descrição física, caso não conheça a criatura).</p>"
            }
          }
        },
        "enxame-rubro": {
          "name": "Enxame Rubro",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/enxame-rubro.webp",
          "system": {
            "circulo": "3",
            "escola": "con",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "resistencia": "Reflexos reduz à metade",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você conjura um enxame de pequenas criaturas da Tormenta. O enxame pode passar pelo espaço de outras criaturas e não impede que outras criaturas entrem no espaço dele. No final de cada um de seus turnos, o enxame causa 4d12 pontos de dano de ácido a qualquer criatura em seu espaço (Reflexos reduz à metade). Você pode gastar uma ação de movimento para mover o enxame com deslocamento de 12m.</p>"
            }
          }
        },
        "teletransporte": {
          "name": "Teletransporte",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/teletransporte.webp",
          "system": {
            "circulo": "3",
            "escola": "con",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "até 5 criaturas voluntárias",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Esta magia transporta os alvos para um lugar a sua escolha a até 1.000km. Você precisa fazer um teste de Misticismo, com dificuldade que depende de seu conhecimento sobre o local de destino.</p>\n<p><em>CD 20.</em> Um lugar familiar, que você visita com frequência.</p>\n<p><em>CD 30.</em> Um lugar conhecido, que você já visitou pelo menos uma vez.</p>\n<p><em>CD 40.</em> Um que você nunca visitou e só conhece a partir da descrição de outra pessoa que esteve lá.</p>\n<p>Você não pode se teletransportar para um lugar que nunca visitou sem a descrição de alguém. Ou seja, não pode se transportar para a &ldquo;sala de tesouro do rei&rdquo; se nunca esteve nela nem falou com alguém que esteve.</p>\n<p>Se passar no teste, os alvos chegam ao lugar desejado. Se falhar, os alvos surgem 1d10 x 10km afastados em qualquer direção (se o destino é uma cidade costeira, você pode surgir em alto-mar). Se falhar por 5 ou mais, você chega em um lugar parecido, mas errado. E se você rolar 1 natural no teste a magia falha (mas você gasta os PM) e fica atordoado por 1d4 rodadas.</p>"
            }
          }
        }
      },
      "evocacao": {
        "erupcao-glacial": {
          "name": "Erupção Glacial",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/erupcao-glacial.webp",
          "system": {
            "circulo": "3",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "quadrado de 6m de lado",
            "resistencia": "Relfexos parcial",
            "custo": "6 PM",
            "description": {
              "value": "<p>Estacas de gelo irrompem do chão. Criaturas na área sofrem 4d6 de dano de corte, 4d6 de dano de frio e ficam caídas. Passar no teste de Reflexos evita o dano de corte e a queda. As estacas duram pela cena, o que torna a área afetada terreno difícil, e concedem cobertura leve para criaturas dentro da área ou atrás dela. As estacas são destruídas caso sofram qualquer quantidade de dano por fogo mágico.</p>"
            }
          }
        },
        "lanca-ignea": {
          "name": "Lança Ígnea",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/lanca-ignea.webp",
          "system": {
            "circulo": "3",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "1 criatura",
            "resistencia": "Reflexos parcial",
            "custo": "6 PM",
            "description": {
              "value": "<p>Esta magia foi desenvolvida por um mago imortal, um entusiasta dos estudos vulcânicos. Ela dispara um projétil de magma contra o alvo, que sofre 4d6 pontos de dano de fogo e 4d6 pontos de dano de perfuração e fica em chamas. As chamas causam 2d6 pontos de dano por rodada, em vez do dano normal. Se passar no teste de resistência, o alvo sofre metade do dano e não fica em chamas.</p>\n<p>Respingos de rocha incandescente se espalham com a explosão, atingindo todas as criaturas adjacentes ao alvo, que devem fazer um teste de Reflexos. Se falharem, ficam em chamas, como descrito acima.</p>"
            }
          }
        },
        "muralha-elemental": {
          "name": "Muralha Elemental",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/muralha-elemental.webp",
          "system": {
            "circulo": "3",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "resistencia": "veja texto",
            "custo": "6 PM",
            "description": {
              "value": "<p>Cria uma muralha de um elemento a sua escolha. A muralha pode ser um muro de até 30m de comprimento e 3m de altura (ou o contrário) ou uma cúpula de 3m de raio. Os efeitos variam conforme o elemento escolhido.</p>\n<p><em>Fogo.</em> Faz surgir uma violenta cortina de chamas. Um lado da muralha (a sua escolha) emite ondas de calor, que causam 2d6 pontos de dano de fogo em criaturas a até 6m quando você lança a magia e no início de seus turnos. Atravessar a muralha causa 8d6 pontos de dano de fogo. Caso seja criada em uma área onde existem criaturas, elas sofrem dano como se estivessem atravessando a muralha, mas podem fazer um teste de Reflexos para reduzir o dano à metade (a criatura escolhe para qual lado quer escapar, mas se escapar para o lado quente sofrerá mais 2d6 pontos de dano).</p>\n<p><em>Gelo.</em> Evoca uma parede grossa de gelo denso com 15cm de espessura. Na forma de cúpula, pode prender uma ou mais criaturas, mas elas têm direito a um teste de Reflexos para escapar antes que a cúpula se forme. Cada trecho de 3m da muralha tem Defesa 8, 40 PV e RD 5. Um trecho da muralha que atinja 0 PV será rompido. Qualquer efeito de fogo causa dano dobrado à muralha. Uma criatura que atravesse um trecho rompido da muralha sofre 4d6 pontos de dano de frio.</p>"
            }
          }
        }
      },
      "ilusao": {
        "ilusao-lacerante": {
          "name": "Ilusão Lacerante",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/ilusao-lacerante.webp",
          "system": {
            "circulo": "3",
            "escola": "ilu",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "cubo de 9m",
            "resistencia": "Vontade anula",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você cria uma ilusão de algum perigo mortal. Quando a magia é lançada, criaturas na área devem fazer um teste de Vontade; uma falha significa que a criatura acredita que a ilusão é real e sofre 3d6 pontos de dano psíquico não letal. Sempre que uma criatura iniciar seu turno dentro da área, deve repetir o teste de Vontade. Se falhar, sofre o dano novamente. Somente criaturas que falham veem a ilusão, e racionalizam o efeito sempre que falham no teste (por exemplo, acredita que o mesmo teto pode cair sobre ela várias vezes).</p>"
            }
          }
        },
        "miragem": {
          "name": "Miragem",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/miragem.webp",
          "system": {
            "circulo": "3",
            "escola": "ilu",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "long",
            "alvo": "cubo de até 90m de lado",
            "resistencia": "Vontade desacredita",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você faz um terreno parecer outro, incluindo sons e cheiros. Uma planície pode parecer um pântano, uma floresta pode parecer uma montanha etc. Esta magia pode ser usada para criar armadilhas: areia movediça pode parecer terra firme ou um precipício pode parecer um lago. Você pode alterar, incluir e esconder estruturas dentro da área, mas não criaturas (embora elas possam se esconder nas estruturas ilusórias).</p>"
            }
          }
        }
      },
      "necromancia": {
        "ferver-sangue": {
          "name": "Ferver Sangue",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/ferver-sangue.webp",
          "system": {
            "circulo": "3",
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 criatura",
            "resistencia": "Fortitude parcial",
            "custo": "6 PM",
            "description": {
              "value": "<p>O sangue do alvo aquece rapidamente até entrar em ebulição. Quando a magia é lançada, e no início de cada um de seus turnos, o alvo sofre 4d8 pontos de dano de fogo e fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.BUMyxT4YI9mdC8Aj]{Enjoado} por uma rodada (Fortitude reduz o dano à metade e evita a condição). Se o alvo passar em dois testes de Fortitude seguidos, dissipa a magia. Se o alvo for reduzido a 0 PV pelo dano desta magia, seu corpo explode, matando-o e causando 6d6 pontos de dano de fogo em todas as criaturas a até 3m (Reflexos reduz à metade). Essa magia não afeta criaturas sem sangue, como construtos ou mortos-vivos.</p>"
            }
          }
        },
        "tentaculos-de-trevas": {
          "name": "Tentáculos de Trevas",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/tentaculos-de-trevas.webp",
          "system": {
            "circulo": "3",
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "esfera com 6m de raio",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Um círculo de energias sombrias se abre no chão, de onde surgem tentáculos feitos de treva viscosa. Ao lançar a magia e no início de cada um de seus turnos, você faz um teste da manobra agarrar (usando seu bônus de Misticismo) contra cada criatura na área. Se você passar, a criatura é agarrada; se a vítima já está agarrada, é esmagada, sofrendo 4d6 pontos de dano de trevas. A área conta como terreno difícil. Os tentáculos são imunes a dano.</p>\n<p>@UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.TSRZ1cAIIIpsvOfK]{Agarrado}</p>"
            }
          }
        }
      },
      "transmutacao": {
        "telecinesia": {
          "name": "Telecinésia",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/telecinesia.webp",
          "system": {
            "circulo": "3",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "veja texto;",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você move objetos ou criaturas se concentrando. Ao lançar a magia, escolha uma das opções a seguir.</p>\n<p><em>Força Contínua:</em> você move uma criatura ou objeto de até 10 espaços, a até 6m por rodada. Uma criatura pode anular o efeito sobre ela, ou sobre um objeto que possua, passando num teste de Vontade. O alvo pode ser movido em qualquer direção dentro do alcance. Ele cai no chão se sair do alcance ou a magia terminar. <strong>Duração:</strong> sustentada.</p>\n<p><em>Empurrão Violento:</em> nesta versão a energia mágica é expelida de uma única vez e arremessa até 10 objetos (no máximo 10 espaços). Os objetos devem estar a até 3m uns dos outros e podem ser arremessados até o alcance da magia.</p>\n<p>Objetos arremessados podem atingir criaturas em seu caminho, causando de 1 ponto de dano de impacto por espaço (objetos macios, sem pontas ou sem fio) até 1d6 pontos de dano por espaço (objetos duros, pontudos ou afiados). Criaturas atingidas têm direito a um teste de Reflexos para reduzir o dano à metade.</p>\n<p>Criaturas médias ou menores podem ser arremessadas, mas têm direito a um teste de Vontade para evitar o efeito (em si mesmas ou em objetos que estejam segurando). Uma criatura arremessada contra uma superfície sólida sofre 1d6 pontos de dano de impacto para cada 3m que &ldquo;voou&rdquo; no deslocamento (incluindo outras criaturas; nesse caso, ambas sofrem o dano). Duração: instantânea.</p>"
            }
          }
        },
        "transformacao-de-guerra": {
          "name": "Transformação de Guerra",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/transformacao-de-guerra.webp",
          "system": {
            "circulo": "3",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você se torna uma máquina de combate, ficando mais forte, rápido e resistente. Você recebe +6 na Defesa, testes de ataque e rolagens de dano corpo a corpo, e 30 PV temporários. Durante a <em>Transformação de Guerra</em> você não pode lançar magias, mas se torna proficiente em todas as armas.</p>"
            }
          }
        },
        "voo": {
          "name": "Voo",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/voo.webp",
          "system": {
            "circulo": "3",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você recebe deslocamento de voo 12m. Voar por meio desta magia é simples como andar — você pode atacar e lançar magias normalmente enquanto voa. Quando a magia termina, você desce lentamente até o chão, como se estivesse sob efeito de <em>Queda Suave</em>.</p>"
            }
          }
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
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "<p>Você é cercado por uma barreira invisível com 3m de raio que acompanha seus movimentos. Qualquer magia ou habilidade mágica que entre na área da barreira é suprimida enquanto estiver lá.</p>\n<p>Criaturas convocadas que entrem em um Campo Antimagia desaparecem. Elas reaparecem na mesma posição quando a duração do Campo termina — supondo que a duração da magia que as convocou ainda não tenha terminado.</p>\n<p>Criaturas mágicas, como elementais, ou construtos imbuídos com magia durante sua criação, como golens, não são diretamente afetados pelo Campo Antimagia. Entretanto, como qualquer criatura, não poderão usar magias ou habilidades mágicas dentro dele.</p>\n<p>Magias que dissipam outras magias, como Dissipar Magia, nãodissipam um Campo Antimagia, e dois Campos na mesma área não se neutralizam. Artefatos e deuses maiores não são afetados por um Campo Antimagia</p>"
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
              "execução": "minute",
              "custo": 10,
              "qtd": "10",
              "condição": "",
              "special": ""
            },
            "alcance": "any",
            "alvo": "1 criatura viva",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "<p>Você entra nos sonhos de uma criatura. Uma vez lá, pode conversar com ela até que ela acorde. Se o alvo não estiver dormindo quando você lançar a magia, você pode permanecer em transe até que ele adormeça. Durante o transe, você fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.8aj5sPol5mkAqTZv]{Indefeso} e sem consciência dos arredores. Você pode sair do transe quando quiser, mas a magia termina.</p>"
            }
          }
        }
      },
      "convocacao": {
        "conjurar-elemental": {
          "name": "Conjurar Elemental",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/conjurar-elemental.webp",
          "system": {
            "circulo": "4",
            "escola": "con",
            "ativacao": {
              "execução": "full",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "<p>Esta magia transforma uma porção de um elemento inerte em uma criatura elemental Grande do tipo do elemento alvo. Por exemplo, lançar esta magia numa fogueira ou tocha cria um elemental do fogo. Você pode criar elementais do ar, água, fogo e terra com essa magia. O elemental obedece a todos os seus comandos e pode funcionar como um parceiro mestre do tipo destruidor (cuja habilidade custa apenas 2 PM para ser usada) e mais um tipo entre os indicados na lista abaixo. O elemental auxilia apenas você e não conta em seu limite de parceiros.</p>\n<p><em>Ar:</em> assassino, perseguidor ou vigilante. Dano de eletricidade.</p>\n<p><em>Água:</em> ajudante, guardião ou médico. Dano de frio.</p>\n<p><em>Fogo:</em> atirador, combatente ou fortão. Dano de fogo.</p>\n<p><em>Terra:</em> combatente, guardião ou montaria. Dano de impacto.</p>"
            }
          }
        },
        "mao-poderosa": {
          "name": "Mão Poderosa",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/mao-poderosa.webp",
          "system": {
            "circulo": "4",
            "escola": "con",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "<p>Esta magia cria uma mão flutuante de tamanho Grande que sempre se posiciona entre você e um oponente a sua escolha. A mão fornece cobertura leve (+5 na Defesa) contra esse oponente. Nada é capaz de enganar a mão — coisas como escuridão, invisibilidade, metamorfose e disfarces mundanos não a impedem de protegê-lo. A mão tem Defesa 20 e PV e resistências iguais aos seus. Com uma ação de movimento, você pode comandar a mão para que o proteja de outro oponente ou para que realize uma das ações a seguir.</p>\n<p><em>Agarrar:</em> a mão usa uma manobra agarrar contra o oponente, usando o seu Misticismo com um bônus adicional de +10. A mão mantém o oponente agarrado, mas não causa dano.</p>\n<p><em>Esmagar:</em> a mão esmaga um oponente agarrado, causando 2d6+10 pontos de dano de impacto.</p>\n<p><em>Empurrar:</em> a mão afasta o oponente (manobra empurrar usando o seu Misticismo com um bônus adicional de +10). A mão acompanha o oponente para empurrá-lo o máximo que conseguir, dentro do alcance da magia.</p>"
            }
          }
        }
      },
      "encantamento": {
        "alterar-memoria": {
          "name": "Alterar Memória",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/alterar-memoria.webp",
          "system": {
            "circulo": "4",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Vontade anula",
            "custo": "10 PM",
            "description": {
              "value": "<p>Você invade a mente do alvo e altera ou apaga suas memórias da última hora.</p>"
            }
          }
        },
        "marionete": {
          "name": "Marionete",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/marionete.webp",
          "system": {
            "circulo": "4",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "1 criatura",
            "resistencia": "Fortitude anula",
            "custo": "10 PM",
            "description": {
              "value": "<p>Esta magia manipula o sistema nervoso do alvo. Ao sofrer a magia, e no início de cada um de seus turnos, a vítima faz um teste de Fortitude. Se passar, a magia é anulada. Se falhar, todas as suas ações físicas naquele turno estarão sob controle do conjurador. A vítima ainda tem consciência de tudo que acontece à sua volta, podendo ver, ouvir e até falar com certo esforço (mas não para lançar magias). Contudo, seu corpo realiza apenas os movimentos que o conjurador deseja. A vítima pode ser manipulada para se movimentar, lutar, usar habilidades de combate... Enfim, qualquer coisa de que seja fisicamente capaz.</p>\n<p>Você precisa de linha de efeito para controlar a vítima. Se perder o contato, não poderá controlá-la — mas ela estará paralisada até que o conjurador recupere o controle ou a magia termine.</p>"
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
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "1 criatura",
            "resistencia": "Fortitude parcial",
            "custo": "10 PM",
            "description": {
              "value": "<p>Você dispara um raio azul esbranquiçado de gelo e ar congelante. O alvo sofre 10d8 pontos de dano de frio e fica preso em um bloco de gelo (<a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.3dcJKe2SGu8mnafU\" data-id=\"3dcJKe2SGu8mnafU\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Paralisado</a>). Se passar no teste de resistência, sofre metade do dano e, em vez de paralisado, fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.e8JmqkgvL3H26vbi]{Lento} por uma rodada.</p>\n<p>É possível quebrar o gelo para libertar uma criatura presa: o bloco tem 20 PV, resistência a dano 10 e é vulnerável a fogo. Uma criatura presa pode usar uma ação completa para fazer um teste de Atletismo (com a mesma CD para resistir à magia) e tentar se libertar do gelo; cada vez que passar no teste causa 10 pontos de dano ao bloco, ignorando a RD.</p>"
            }
          }
        },
        "relampago-flamejante": {
          "name": "Relâmpago Flamejante",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/relampago-flamejante.webp",
          "system": {
            "circulo": "4",
            "escola": "evo",
            "ativacao": {
              "execução": "special",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": "Duas Rodadas"
            },
            "alcance": "medium",
            "resistencia": "Reflexos reduz à metade",
            "custo": "10 PM",
            "description": {
              "value": "<p>Esta é uma magia poderosa, desenvolvida por um metódico e impassível arquimago. Você invoca as energias elementais do fogo e do relâmpago, fazendo com que uma de suas mãos fique em chamas e a outra mão eletrificada. Pela duração da magia, você pode gastar uma ação de movimento para disparar uma bola de fogo (10d6 pontos de dano de fogo numa esfera com 6m de raio) ou um relâmpago (10d6 pontos de dano de eletricidade numa linha). Você também pode, como uma ação padrão, usar as duas mãos num ataque de energia mista (20d12 pontos de dano, metade de fogo e metade de eletricidade, numa esfera de 9m de raio). Você precisa estar com as duas mãos livres para invocar o efeito misto e isso consome toda a energia da magia, terminando-a imediatamente. Por se tratar de um ritual complexo, o tempo de execução dessa magia não pode ser reduzido.</p>"
            }
          }
        },
        "talho-invisivel": {
          "name": "Talho Invisível",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/talho-invisivel.webp",
          "system": {
            "circulo": "4",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "cone de 9m",
            "resistencia": "Fortitude parcial",
            "custo": "10 PM",
            "description": {
              "value": "<p>Esta magia cruel foi desenvolvida por um mago de combate, quando ainda era um bípede. Você faz um gesto rápido e dispara uma lâmina de ar em alta velocidade. Criaturas na área sofrem 10d8 pontos de dano de corte e ficam sangrando. Alvos que passem no teste de resistência sofrem metade do dano e não ficam sangrando.</p>"
            }
          }
        }
      },
      "ilusao": {
        "duplicata-ilusoria": {
          "name": "Duplicata Ilusória",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/duplicata-ilusoria.webp",
          "system": {
            "circulo": "4",
            "escola": "ilu",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "<p>Você cria uma cópia ilusória semirreal de... você mesmo! Ela é idêntica em aparência, som e cheiro, mas é intangível. A cada turno, você escolhe se verá e ouvirá através da duplicata ou de seu corpo original. A cópia reproduz todas as suas ações, incluindo fala. Qualquer magia com alcance de toque ou maior que você lançar pode se originar da duplicata, em vez do seu corpo original. As magias afetam outros alvos normalmente, com a única diferença de se originarem da cópia, em vez de você. Se quiser que a duplicata faça algo diferente de você, você deve gastar uma ação de movimento. Qualquer criatura que interagir com a cópia tem direito a um teste de Vontade para perceber que é uma ilusão. As magias que se originam dela, no entanto, são reais. A cópia desaparece se sair do alcance.</p>"
            }
          }
        },
        "explosao-caleidoscopica": {
          "name": "Explosão Caleidoscópica",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/explosao-caleidoscopica.webp",
          "system": {
            "circulo": "4",
            "escola": "ilu",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "esfera com 6m de raio",
            "resistencia": "Fortitude parcial",
            "custo": "10 PM",
            "description": {
              "value": "<p>Esta magia cria uma forte explosão de luzes estroboscópicas e sons cacofônicos que desorientam as criaturas atingidas. O efeito que cada criatura sofre depende do ND dela.</p>\n<p><em>ND 4 ou menor:</em> se falhar no teste de resistência, fica inconsciente. Se passar, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena.</p>\n<p><em>ND entre 5 e 9:</em> se falhar no teste de resistência, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena. Se passar, fica atordoada por 1 rodada e enjoada por 1d4 rodadas.</p>\n<p><em>ND 10 ou maior:</em> se falhar no teste de resistência, fica atordoada por 1 rodada e enjoada por 1d4 rodadas. Se passar, fica desprevenida e enjoada por 1 rodada.</p>\n<p>Uma criatura só pode ser atordoada por esta magia uma vez por cena.</p>\n<p><a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.2jgO4I5cMaSKa9fv\" data-id=\"2jgO4I5cMaSKa9fv\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Inconsciente</a></p>\n<p><a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.bD6XAyHQrWYr0BTQ\" data-id=\"bD6XAyHQrWYr0BTQ\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Atordoado</a></p>\n<p>@UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.BUMyxT4YI9mdC8Aj]{Enjoado}</p>"
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
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "long",
            "alvo": "1 criatura",
            "resistencia": "Vontade Anula, Fortitude Parcial",
            "custo": "10 PM",
            "description": {
              "value": "<p>Usando os medos subconscientes do alvo, você cria uma imagem daquilo que ele mais teme. Apenas a própria vítima pode ver o Assassino Fantasmagórico com nitidez; outras criaturas presentes (incluindo o conjurador) enxergam apenas um espectro sombrio.</p>\n<p>Quando você lança a magia, o espectro surge adjacente a você e a vítima faz um teste de Vontade. Se ela passar, percebe que o espectro é uma ilusão e a magia é dissipada. Se falhar, acredita na existência do espectro, que então flutua 18m por rodada em direção à vítima, sempre no fim do seu turno. Ele é incorpóreo e imune a magias (exceto magias que dissipam outras).</p>\n<p>Se o espectro terminar seu turno adjacente à vítima, ela deve fazer um teste de Fortitude. Se passar, sofre 6d6 pontos de dano de trevas (este dano não pode reduzir o alvo a menos de 0 PV e não o deixa sangrando). Se falhar, sofre um colapso, ficando imediatamente com –1 PV e sangrando.</p>\n<p>O espectro persegue o alvo implacavelmente. Ele desaparece se o alvo ficar inconsciente ou se afastar além de alcance longo dele, ou se for dissipado.</p>"
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
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "Até 8 objetos Minúsculos ou Pequenos, 4 objetos Médios, 2 objetos Grandes ou 1 objeto Enorme",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "<p>Você concede vida a objetos inanimados. Cada objeto se torna um parceiro sob seu controle. O tipo dele é escolhido da lista de tamanho e ele não conta em seu limite de parceiros. Com uma ação de movimento, você pode comandar mentalmente qualquer objeto animado dentro do alcance para que auxilie você ou outra criatura. Outros usos criativos para os objetos ficam a cargo do mestre. Objetos animados são construtos com valores de Força, Destreza e PV de acordo com seu tamanho. Todos os outros atributos nulos, eles não têm valor de Defesa ou testes de resistência e falham automaticamente em qualquer teste oposto. Diferente de parceiros comuns, um objeto pode ser alvo de um ataque direto. Esta magia não afeta itens mágicos, nem objetos que estejam sendo carregados por outra criatura.</p>\n<p>Esta magia não afeta itens mágicos, nem objetos que estejam sendo carregados por outra criatura.</p>\n\n\n<p>Estatísticas de objetos animados</p>\n<p>Minúsculo: For -3, Des 4, 5 PV; Assassino ou Combatente Iniciante.</p>\n<p>Pequeno: For -2, Des 2, 10 PV; Combatente ou Guardião Iniciante.</p>\n<p>Médio: For 0, Des 1, 20 PV; Combatente ou Guardião Veterano.</p>\n<p>Grande: For 2, Des 0, 40 PV; Fortão, Guardião ou Montaria (cavalo) Veterano.</p>\n<p>Enorme: For 4, Des -2, 60 PV; Fortão, Guardião ou Montaria (cavalo) Mestre.</p>"
            }
          }
        },
        "controlar-a-gravidade": {
          "name": "Controlar a Gravidade",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/controlar-gravidade.webp",
          "system": {
            "circulo": "4",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "cubo de 12m de lado",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "<p>Você controla os efeitos da gravidade dentro da área. Ao lançar a magia, escolha um dos efeitos abaixo. Enquanto a magia durar, você pode usar uma ação padrão para mudar o efeito.</p>\n<p><em>Aumentar:</em> a gravidade fica mais forte. No início de seus turnos, cada criatura na área deve fazer um teste de Atletismo. Se passar, fica fatigada. Se falhar, fica fatigada e caída.</p>\n<p><em>Inverter:</em> inverte a gravidade da área, fazendo com que criaturas e objetos &ldquo;caiam&rdquo; para cima, atingindo o topo (12m) em uma rodada. Se um obstáculo (como um teto) impedir o movimento das criaturas, elas sofrem 1d6 pontos de dano de impacto para cada 1,5m de &ldquo;queda&rdquo;. Elas podem então se levantar e caminhar no obstáculo, de cabeça para baixo. Se não houver obstáculo, as criaturas e objetos ficam flutuando no topo da área afetada, sem poder sair do lugar. Criaturas voadoras podem se movimentar normalmente. Alguém adjacente a algo que possa agarrar tem direito a um teste de Reflexos para evitar a &ldquo;queda&rdquo;. A criatura deve permanecer presa pela duração da magia; caso contrário &ldquo;cairá&rdquo;.</p>\n<p><em>Reduzir:</em> a gravidade fica mais leve. Criaturas ou objetos livres com até 100kg flutuam para cima e para baixo conforme sua vontade, com deslocamento de voo 6m. Criaturas na área recebem +20 de bônus em testes de Atletismo para escalar e saltar. Uma criatura levitando fica instável, sofrendo –2 de penalidade em testes de ataque.</p>\n<p><a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.MCED18aEe4UFeEVf\" data-id=\"MCED18aEe4UFeEVf\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Fatigado</a></p>\n<p><a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.fJFNeZeKmfHMpblz\" data-id=\"fJFNeZeKmfHMpblz\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Caído</a></p>"
            }
          }
        },
        "desintegrar": {
          "name": "Desintegrar",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/desintegrar.webp",
          "system": {
            "circulo": "4",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "1 criatura ou objeto",
            "resistencia": "Fortitude parcial",
            "custo": "10 PM",
            "description": {
              "value": "<p>Você dispara um raio fino e esverdeado que causa 10d12 pontos de dano de essência. Se o alvo passar no teste de resistência, em vez disso sofre 2d12 pontos de dano.</p>\n<p>Independentemente do resultado do teste de Fortitude, se os PV do alvo forem reduzidos a 0 ou menos, ele será completamente desintegrado, restando apenas pó.</p>"
            }
          }
        },
        "forma-eterea": {
          "name": "Forma Etérea",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/forma-eterea.webp",
          "system": {
            "circulo": "4",
            "escola": "tra",
            "ativacao": {
              "execução": "full",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "<p>Você e todo o equipamento que está com você são transportados para o plano etéreo, que existe paralelamente ao plano material (o mundo físico). Na prática, é como ser transformado em um fantasma (mas você ainda é considerado uma criatura viva). Uma criatura etérea é invisível (pode alterar entre visível e invisível como ação livre), incorpórea e capaz de se mover em qualquer direção, inclusive para cima e para baixo. Ela enxerga o plano material, mas tudo parece cinza e insubstancial, reduzindo o alcance da visão e audição para 18m. Magias de abjuração e essência afetam criaturas etéreas, mas outras magias, não. Da mesma forma, uma criatura etérea não pode atacar nem lançar magias contra criaturas no plano material. Duas criaturas etéreas podem se afetar normalmente. Uma criatura afetada pode se materializar como uma ação de movimento, encerrando a magia. Uma criatura etérea que se materialize em um espaço ocupado é jogada para o espaço não ocupado mais próximo e sofre 1d6 pontos de dano de impacto para cada 1,5m de deslocamento.</p>"
            }
          }
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
            "escola": "abjuração",
            "ativacao": {
              "execução": "reaction",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "15 PM",
            "description": {
              "value": "<p>Sua mente visualiza todas as possibilidades de um evento, permitindo a você escolher o melhor curso de ação. Você pode rolar novamente um teste de resistência com um bônus de +10 ou um inimigo deve rolar novamente um ataque contra você com uma penalidade de –10</p>"
            }
          }
        },
        "aprisionamento": {
          "name": "Aprisionamento",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/aprisionamento.webp",
          "system": {
            "circulo": "5",
            "escola": "abjuração",
            "ativacao": {
              "execução": "full",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 criatura",
            "resistencia": "Vontade anula",
            "custo": "15 PM",
            "description": {
              "value": "<p>Você cria uma prisão mágica para aprisionar uma criatura. Se falhar no teste<br>de resistência, o alvo sofre o efeito da magia; se passar, fica imune a esta magia por uma semana. Enquanto estiver aprisionada, a criatura não precisa respirar e alimentar-se, e não envelhece. Magias de adivinhação não conseguem localizar ou perceber o alvo. Ao lançar a magia, você escolhe uma das seguintes formas de prisão. O componente material varia, mas todos custam T$ 1.000.</p>\n<p><em>Acorrentamento:</em> o alvo é preso por correntes firmemente enraizadas no chão, que o mantém no lugar. O alvo fica paralisado e não pode se mover ou ser movido por qualquer meio.</p>\n<p><em>Componente Material:</em> uma fina corrente de mitral.</p>\n<p><em>Contenção Mínima: </em>o alvo diminui para 2 cm de altura e é preso dentro de uma pedra preciosa ou objeto semelhante. Luz passa através da pedra, permitindo que o alvo veja o lado de fora e seja visto, mas nada mais pode passar, nem por meio de teletransporte ou viagem planar. A pedra não pode ser quebrada enquanto o alvo estiver dentro.</p>\n<p><em>Componente Material:</em> uma pedra preciosa, como um diamante ou rubi.</p>\n<p><em>Prisão Dimensional:</em> o alvo é transportado para um semiplano protegido contra teletransporte e viagens planares. Pode ser um labirinto, uma gaiola, uma torre ou qualquer estrutura ou área confinada e pequena a sua escolha.</p>\n<p><em>Componente Material:</em> uma representação em miniatura da prisão, feita de jade.</p>\n<p><em>Sepultamento: </em>o alvo é sepultado nas profundezas da terra, em uma esfera mágica. Nada pode destruir ou atravessar a esfera, nem mesmo teletransporte ou viagens planares.</p>\n<p><em>Componente Material: </em>um pequeno orbe de adamante.</p>\n<p><em>Sono Eterno:</em> o alvo adormece e não pode ser acordado.</p>\n<p><em>Componente Material:</em> fruta preparada com ervas soníferas raras.</p>\n<p>Quando a magia é lançada, você deve especificar uma condição que fará com que ela termine e solte o alvo. A condição pode ser tão específica ou elaborada quanto você quiser, mas deve ser possível de acontecer. As condições podem se basear no nome, identidade ou divindade padroeira de uma criatura, ou em ações ou qualidades observáveis, mas nunca em estatísticas intangíveis, como nível, classe ou pontos de vida. O mestre tem a palavra final sobre se uma condição é válida ou não.</p>\n<p>@UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.3dcJKe2SGu8mnafU]{Paralisado}</p>"
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
            "escola": "con",
            "ativacao": {
              "execução": "full",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "long",
            "alvo": "quadrado com 18m de lado",
            "resistencia": "Reflexos parcial",
            "custo": "15 PM",
            "description": {
              "value": "<p>Meteoros caem dos céus, devastando a área afetada. Criaturas na área sofrem 15d6 pontos de dano de impacto, 15d6 pontos de dano de fogo e ficam @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.fJFNeZeKmfHMpblz]{Caído} e presas sob os escombros (<a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.TSRZ1cAIIIpsvOfK\" data-id=\"TSRZ1cAIIIpsvOfK\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Agarrado</a>).</p>\n<p>Uma criatura que passe no teste de resistência sofre metade do dano total e não fica caída e agarrada. Uma criatura agarrada pode escapar gastando uma ação padrão e passando em um teste de Atletismo (CD da magia). Toda a área afetada fica coberta de escombros, sendo considerada terreno difícil, e imersa numa nuvem de poeira (camuflagem leve). Esta magia só pode ser utilizada a céu aberto.</p>"
            }
          }
        },
        "semiplano": {
          "name": "Semiplano",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/semiplano.webp",
          "system": {
            "circulo": "5",
            "escola": "con",
            "ativacao": {
              "execução": "full",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "resistencia": "Nenhuma",
            "custo": "15 PM",
            "description": {
              "value": "<p>Você cria uma dimensão particular. Você pode entrar no semiplano gastando uma ação padrão e 10 PM, desaparecendo do plano material como se tivesse se teletransportado. Você pode levar criaturas voluntárias que esteja tocando, ao custo de 1 PM por criatura extra. Você também pode levar objetos que esteja tocando, ao custo de 1 PM por objeto Médio ou menor, 2 PM por objeto Grande, 5 PM por Enorme e 10 PM por Colossal. Uma vez no semiplano, pode gastar uma ação completa para voltar ao plano material, no mesmo local onde estava. Caso conheça a magia @UUID[Item.3rR4d2fWU6uIqVNv]{Viagem Planar}, pode lançá-la para voltar ao plano material em outro local.</p>\n<p>Você escolhe a forma e a aparência do semiplano — uma caverna, um asteroide que singra o éter, um palacete de cristal etc. Ele contém ar, luz e calor, mas além disso é vazio. Entretanto, você pode levar itens (mobília, ferramentas etc.) a cada viagem.</p>"
            }
          }
        }
      },
      "encantamento": {
        "legiao": {
          "name": "Legião",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/legiao.webp",
          "system": {
            "circulo": "5",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "até 10 criaturas na área",
            "resistencia": "Vontade parcial",
            "custo": "15 PM",
            "description": {
              "value": "<p>Você domina a mente dos alvos. Os alvos obedecem cegamente a seus comandos, exceto ordens claramente suicidas. Um alvo tem direito a um teste no final de cada um de seus turnos para se livrar do efeito. Alvos que passarem no teste ficam @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.ccqJXj25EVIzUhzo]{Abalado} por 1 rodada enquanto recuperam a consciência.</p>"
            }
          }
        },
        "possessao": {
          "name": "Possessão",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/possessao.webp",
          "system": {
            "circulo": "5",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "long",
            "alvo": "1 criatura",
            "resistencia": "Vontade anual",
            "custo": "15 PM",
            "description": {
              "value": "<p>Você projeta sua consciência no corpo do alvo. Enquanto possuir uma criatura, você assume o controle total do corpo dela. O seu próprio corpo fica inconsciente e a consciência do alvo fica inerte. Em termos de jogo, você continua usando a sua ficha, mas com os atributos físicos e deslocamento da criatura. Se o alvo passar no teste de resistência, sabe que você tentou possuí-lo e fica imune a esta magia por um dia. Caso o corpo da criatura morra enquanto você a possui, a criatura morre e você deve fazer um teste de Vontade contra a CD da sua própria magia. Se passar, sua consciência retorna para o seu corpo (contanto que esteja dentro do alcance). Do contrário, você também morre. Retornar para o seu corpo voluntariamente é uma ação livre.</p>"
            }
          }
        }
      },
      "evocacao": {
        "barragem-elemental": {
          "name": "Barragem Elemental",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/barragem-elemental.webp",
          "system": {
            "circulo": "5",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "long",
            "resistencia": "Reflexos parcial",
            "custo": "15 PM",
            "description": {
              "value": "<p>Criada por um arquimago, esta magia produz quatro esferas elementais (ácido, eletricidade, fogo e frio) que voam até um ponto a sua escolha. Quando atingem o ponto escolhido, explodem causando 6d6 pontos de dano do seu respectivo tipo numa área com 12m de raio. Um teste de Reflexos reduz o dano à metade. Você pode mirar cada esfera em uma criatura ou ponto diferente. Uma criatura ao alcance da explosão de mais de uma esfera deve fazer um teste de resistência para cada uma. Além disso, as esferas causam os seguintes efeitos em criaturas que falharem em seus respectivos testes de resistência:</p>\n<p>&bull; <em>Ácido:</em> <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.iGWU5WVm57STW7am\" data-id=\"iGWU5WVm57STW7am\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Vulnerável</a> até o fim da cena.</p>\n<p>&bull; <em>Elétrica:</em> <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.bD6XAyHQrWYr0BTQ\" data-id=\"bD6XAyHQrWYr0BTQ\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Atordoado</a> por uma rodada. (apenas uma vez por cena).</p>\n<p>&bull; <em>Fogo: <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.2M8CXrGavdU6g1ZI\" data-id=\"2M8CXrGavdU6g1ZI\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Em Chamas</a></em>.</p>\n<p>&bull; <em>Frio: @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.e8JmqkgvL3H26vbi]{Lento}</em>até o fim da cena.</p>"
            }
          }
        },
        "deflagracao-de-mana": {
          "name": "Deflagração de Mana",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/deflagracao-de-mana.webp",
          "system": {
            "circulo": "5",
            "escola": "evo",
            "ativacao": {
              "execução": "full",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "esfera de 15m de raio",
            "resistencia": "Fortitude parcial",
            "custo": "15 PM",
            "description": {
              "value": "<p>Após concentrar seu mana, você emana energia, como uma estrela em plena terra. Todas as criaturas na área sofrem 150 pontos de dano de essência e todos os itens mágicos (exceto artefatos) tornam-se mundanos. Você não é afetado pela magia. Alvos que passem no teste de Fortitude sofrem metade do dano e seus itens mágicos voltam a funcionar após um dia.</p>"
            }
          }
        },
        "mata-dragao": {
          "name": "Mata-Dragão",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/mata-dragao.webp",
          "system": {
            "circulo": "5",
            "escola": "evo",
            "ativacao": {
              "execução": "special",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": "2 Rodadas"
            },
            "alcance": "pessoal",
            "alvo": "cone de 30m",
            "resistencia": "Reflexos reduz à metade",
            "custo": "15 PM",
            "description": {
              "value": "<p>Esta é uma das mais poderosas magias de destruição existentes. Após entoar longos cânticos, o conjurador dispara uma carga de energia que varre uma enorme área à sua frente, causando 20d12 pontos de dano de essência em todas as criaturas, construções e objetos livres atingidos. Sempre que rola um resultado 12 em um dado de dano, a magia causa +1d12 pontos de dano. Apesar de seu poder destrutivo, esta magia é lenta, tornando seu uso difícil em combate.</p>"
            }
          }
        }
      },
      "ilusao": {
        "requiem": {
          "name": "Réquiem",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/requiem.webp",
          "system": {
            "circulo": "5",
            "escola": "ilu",
            "ativacao": {
              "execução": "full",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "criaturas escolhidas",
            "resistencia": "Vontade anula",
            "custo": "15 PM",
            "description": {
              "value": "<p>Esta magia cria uma ilusão particular para cada uma das criaturas que atingir. Enquanto a magia durar, no início de cada um de seus turnos, cada criatura afetada deve fazer um teste de Vontade; se falhar, acha que não tomou as ações que realmente fez no turno anterior e é obrigada a repetir as mesmas ações neste turno, com uma penalidade cumulativa de –5 em todos os testes para cada vez que se repetir (a penalidade não se aplica ao teste de Vontade contra esta magia). Por exemplo, se a criatura se aproximou de um alvo e o atacou, precisa se aproximar desse mesmo alvo e atacar novamente. A ação repetida consome PM e recursos normalmente e, caso exija um teste de resistência, qualquer alvo faz esse teste com um bônus igual ao da penalidade desta magia.</p>"
            }
          }
        },
        "sombra-assassina": {
          "name": "Sombra Assassina",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/sombra-assassina.webp",
          "system": {
            "circulo": "5",
            "escola": "ilu",
            "ativacao": {
              "execução": "ação",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 criatura",
            "resistencia": "Vontade parcial",
            "custo": "15 PM",
            "description": {
              "value": "<p>Esta magia cria uma duplicata ilusória do alvo na forma de uma silhueta, ligada a ele como se fosse uma manifestação sólida de sua própria sombra. A duplicata de sombras segue automaticamente o alvo. Sempre que o alvo faz uma ação hostil — fazer um ataque, usar uma habilidade, lançar uma magia — a sombra imediatamente realiza a mesma ação contra o alvo, usando as mesmas estatísticas e rolagens. A sombra pode ser atacada, tem as mesmas estatísticas do alvo e é destruída quando chega a 0 PV. Se o alvo passar no teste de resistência, a sombra desaparece no final do turno do alvo, depois de copiar sua ação dessa rodada.</p>"
            }
          }
        }
      },
      "transmutacao": {
        "controlar-o-tempo": {
          "name": "Controlar o Tempo",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/controlar-tempo.webp",
          "system": {
            "circulo": "5",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "veja texto",
            "resistencia": "Nenhuma",
            "custo": "15 PM",
            "description": {
              "value": "<p>Aquele que controla o tempo controla o mundo. Escolha um dos efeitos a seguir.</p>\n<p><em>Congelar o tempo:</em> você gera uma bolha na qual o tempo passa mais lentamente. Para outras criaturas, a bolha surge e desaparece instantaneamente, mas, para você, ela dura 3 rodadas, durante as quais você pode agir e não é afetado por efeitos contínuos (como chamas). Porém, durante essas 3 rodadas, você e quaisquer efeitos que você gerar não podem sair da área que você ocupava quando lançou esta magia. Efeitos de área com duração maior que a da bolha voltam a agir normalmente quando ela termina.</p>\n<p><em>Saltar no tempo:</em> você e até 5 criaturas voluntárias são transportadas de 1 a 24 horas para o futuro, desaparecendo com um brilho. Vocês ressurgem no mesmo lugar, com a mesma velocidade e orientação; do seu ponto de vista, nenhum tempo se passou. Se um objeto sólido agora ocupa o espaço de uma criatura, ela ressurge na área vazia mais próxima.</p>\n<p><em>Voltar no tempo: </em>você revive os últimos segundos. Todas as ações da rodada anterior são desfeitas (incluindo perda de PV e PM). Tudo retorna à posição em que estava no início do seu turno na última rodada e você é o único que sabe o que acontecerá. Todos os outros personagens envolvidos na cena devem repetir as mesmas ações — exceto se você fizer algo a respeito (como avisar seus aliados sobre o que vai acontecer).</p>"
            }
          }
        },
        "desejo": {
          "name": "Desejo",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/desejo.webp",
          "system": {
            "circulo": "5",
            "escola": "tra",
            "ativacao": {
              "execução": "full",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "spec",
            "alvo": "veja texto",
            "resistencia": "veja texto",
            "custo": "15 PM",
            "description": {
              "value": "<p>Esta é a mais poderosa das magias arcanas, permitindo alterar a realidade a seu bel-prazer. Você pode:</p>\n<p>&bull; Dissipar os efeitos de qualquer magia de 4&ordm; círculo ou menor.</p>\n<p>&bull; Transportar até 10 criaturas voluntárias em alcance longo para qualquer outro local, em qualquer plano.</p>\n<p>&bull; Desfazer um acontecimento recente. A magia permite que um teste realizado por uma criatura em alcance longo na última rodada seja realizado novamente. Por exemplo, se um aliado morreu na última rodada devido ao ataque de um inimigo, você pode obrigar o inimigo a refazer esse ataque.</p>\n<p>Você pode desejar por algo ainda mais poderoso. Nesse caso, a magia requer o sacrifício de 2 PM e pode fazer coisas como:</p>\n<p>&bull; Criar um item mundano de até T$ 30.000.</p>\n<p>&bull; Duplicar os efeitos de qualquer magia de até 4&ordm; círculo. Caso a magia precise de um componente material para ser lançada, ainda é necessário providenciar o componente.</p>\n<p>&bull; Aumentar um atributo de uma criatura em +1. Cada atributo só pode ser aumentado uma vez com Desejo.</p>\n<p>Desejo pode gerar efeitos ainda mais poderosos, mas cuidado! Desejar a fortuna de um rei pode transportá-lo para a sala de tesouro real, onde você poderá ser preso ou morto; desejar ser imortal pode transformá-lo em morto-vivo, e assim por diante. Qualquer efeito que não se encaixe na lista acima deve ser decidido pelo mestre.</p>"
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
            "escola": "abjuração",
            "ativacao": {
              "execução": "reaction",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Um escudo místico se manifesta momentaneamente para bloquear um golpe. O alvo recebe +2 na Defesa.</p>"
            }
          }
        },
        "protecao-divina": {
          "name": "Proteção Divina",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_divineprotection.jpg",
          "system": {
            "circulo": "1",
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Esta magia cria uma barreira mística invisível que fornece ao alvo +2 em testes de resistência.</p>"
            }
          }
        },
        "santuario": {
          "name": "Santuário",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_sanctuary.jpg",
          "system": {
            "circulo": "1",
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Vontade anula",
            "custo": "1 PM",
            "description": {
              "value": "<p>Qualquer criatura que tente fazer uma ação hostil contra o alvo deve fazer um teste de Vontade. Se falhar, não consegue, perde a ação e não pode tentar novamente até o fim da cena. <em>Santuário</em> não protege o alvo de efeitos de área. Além disso, o próprio alvo também não pode fazer ações hostis (incluindo forçar outras criaturas a atacá-lo), ou a magia é dissipada — mas pode usar habilidades e magias de cura e suporte como @UUID[Item.soVAGPRWQmKxOrPm]{Curar Ferimentos} e @UUID[Item.OTsBw84Ci2IKPStn]{Bênção}.</p>"
            }
          }
        },
        "suporte-ambiental": {
          "name": "Suporte Ambiental",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_protectionformnature.jpg",
          "system": {
            "circulo": "1",
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Esta magia garante a sobrevivência em ambientes hostis. O alvo fica imune aos efeitos de calor e frio extremos, pode respirar na água se respirar ar (ou vice-versa) e não sufoca em fumaça densa.</p>"
            }
          }
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
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Esfera de 18m de raio",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você recebe uma intuição aguçada sobre perigos ao seu redor. Quando uma criatura hostil ou armadilha entra na área do efeito, você faz um teste de Percepção (CD determinada pelo mestre de acordo com a situação). Se passar, sabe a origem (criatura ou armadilha), direção e distância do perigo. Se falhar, sabe apenas que o perigo existe.</p>"
            }
          }
        },
        "orientacao": {
          "name": "Orientação",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_guidance.jpg",
          "system": {
            "circulo": "1",
            "escola": "adv",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Em seu próximo teste de perícia, o alvo pode rolar dois dados e ficar com o melhor resultado</p>"
            }
          }
        }
      },
      "convocacao": {
        "arma-espiritual": {
          "name": "Arma Espiritual",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_spiritualguidence.jpg",
          "system": {
            "circulo": "1",
            "escola": "con",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você invoca a arma preferida de sua divindade (se tiver uma), que surge flutuando a seu lado. Uma vez por rodada, quando você sofre um ataque corpo a corpo, pode usar uma reação para que a arma cause automaticamente 2d6pontos de dano do tipo da arma — por exemplo, uma espada longa causa dano de corte — no oponente que fez o ataque. Esta magia se dissipa se você morrer.</p>"
            }
          }
        },
        "caminhos-da-natureza": {
          "name": "Caminhos da Natureza",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_naturepath.jpg",
          "system": {
            "circulo": "1",
            "escola": "con",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "criaturas escolhidas",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você invoca espíritos da natureza, pedindo que eles abram seu caminho. As criaturas afetadas recebem deslocamento +3m e ignoram penalidades por terreno difícil em terrenos naturais.</p>"
            }
          }
        },
        "criar-elementos": {
          "name": "Criar Elementos",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_elementalprecision_01.jpg",
          "system": {
            "circulo": "1",
            "escola": "con",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você cria uma pequena porção de um elemento, a sua escolha. Os elementos criados são reais, não mágicos. Elementos físicos devem surgir em uma superfície. Em vez de um cubo, pode-se criar objetos simples (sem partes móveis) feitos de gelo, terra ou pedra.</p><p><i>Água:</i> enche um recipiente de tamanho Minúsculo (como um odre) com água potável ou cria um cubo de gelo de tamanho Minúsculo.</p><p><i>Ar:</i> cria um vento fraco em um quadrado de 1,5m. Isso purifica a área de qualquer gás ou fumaça, ou remove névoa por uma rodada.</p><p><i>Fogo:</i> cria uma chama que ilumina como uma tocha. Você pode segurá-la na palma de sua mão sem se queimar, ou fazê-la surgir em um quadrado de 1,5m. Se uma criatura ou objeto estiver no quadrado, sofre 1d6 pontos de dano de fogo; se falhar num teste de Reflexos, pega fogo.</p><p><i>Terra:</i> cria um cubo de tamanho Minúsculo feito de terra, argila ou pedra.</p>"
            }
          }
        }
      },
      "encantamento": {
        "acalmar-animal": {
          "name": "Acalmar Animal",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_calmanimal.jpg",
          "system": {
            "circulo": "1",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 animal",
            "resistencia": "Vontade anula",
            "custo": "1 PM",
            "description": {
              "value": "<p>O animal fica prestativo em relação a você. Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível. Você recebe +10 nos testes de Adestramento e Diplomacia que fizer contra o animal.</p>\n<p>Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é dissipada e ele retorna à atitude que tinha antes (ou piorada, de acordo com o mestre). Se tratar bem o alvo, a atitude pode permanecer mesmo após o término da magia.</p>"
            }
          }
        },
        "bencao": {
          "name": "Bênção",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_blessing.jpg",
          "system": {
            "circulo": "1",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "Aliados",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Abençoa os alvos, que recebem +1 em testes de ataque e rolagens de dano. <em>Bênção</em> anula <em>Perdição</em>.</p>"
            }
          }
        },
        "comando": {
          "name": "Comando",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_command.jpg",
          "system": {
            "circulo": "1",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 humanóide",
            "resistencia": "Vontade anula",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você dá uma ordem irresistível, que o alvo deve ser capaz de ouvir (mas não precisa entender). Se falhar na resistência, ele deve obedecer ao comando em seu próprio turno da melhor maneira possível. Escolha um dos efeitos.</p>\n<p><em>Fuja:</em> o alvo gasta seu turno se afastando de você (usando todas as suas ações).</p>\n<p><em>Largue:</em> o alvo solta quaisquer itens que esteja segurando e não pode pegá-los novamente até o início de seu próximo turno. Como esta é uma ação livre, ele ainda pode executar outras ações (exceto pegar aquilo que largou).</p>\n<p><em>Pare:</em> o alvo fica pasmo (uma vez por cena).</p>\n<p><em>Senta:</em> com uma ação livre, o alvo senta no chão (se estava pendurado ou voando, desce até o chão). Ele pode fazer outras ações, mas não se levantar até o início de seu próximo turno.</p>\n<p><em>Venha:</em> o alvo gasta seu turno se aproximando de você (usando todas as suas ações).</p>"
            }
          }
        },
        "tranquilidade": {
          "name": "Tranquilidade",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_tranquility.jpg",
          "system": {
            "circulo": "1",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 animal ou humanóide",
            "resistencia": "Vontade parcial",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você emana ondas de serenidade. Se falhar na resistência, o alvo tem sua atitude mudada para indiferente (veja a página 259) e não pode atacar ou realizar qualquer ação agressiva. Se passar, sofre –2 em testes de ataque. Qualquer ação hostil contra o alvo ou seus aliados dissipa a magia e faz ele retornar à atitude que tinha antes (ou pior, de acordo com o mestre).</p>"
            }
          }
        }
      },
      "evocacao": {
        "consagrar": {
          "name": "Consagrar",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_consecration.jpg",
          "system": {
            "circulo": "1",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "long",
            "alvo": "esfera com 9m de raio",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você enche a área com energia positiva. Pontos de vida curados por efeitos de luz são maximizados dentro da área. Isso também afeta dano causado em mortos-vivos por esses efeitos.</p>\n<p>Por exemplo, Curar Ferimentos cura automaticamente 18 PV. Esta magia não pode ser lançada em uma área contendo um símbolo visível dedicado a uma divindade que não a sua. Consagrar anula Profanar.</p>"
            }
          }
        },
        "curar-ferimentos": {
          "name": "Curar Ferimentos",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_heal.jpg",
          "system": {
            "circulo": "1",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você canaliza energia positiva que recupera 2d8+2 pontos de vida na criatura tocada.</p>"
            }
          }
        },
        "despedacar": {
          "name": "Despedaçar",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_smite.jpg",
          "system": {
            "circulo": "1",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 criatura ou objeto mundano pequeno",
            "resistencia": "Fortitude parcial ou Reflexos anula",
            "custo": "1 PM",
            "description": {
              "value": "<p>Esta magia emite um som alto e agudo. O alvo sofre 1d8+2 pontos de dano de impacto (ou o dobro disso e ignora RD se for um construto ou objeto mundano) e fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.bD6XAyHQrWYr0BTQ]{Atordoado} por uma rodada (apenas uma vez por cena). Um teste de Fortitude reduz o dano à metade e evita o atordoamento.</p>"
            }
          }
        }
      },
      "necromancia": {
        "infligir-ferimentos": {
          "name": "Infligir Ferimentos",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_inflictpain.jpg",
          "system": {
            "circulo": "1",
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Fortitude reduz à metade",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você canaliza energia negativa contra um alvo, causando 2d8+2 pontos de dano de trevas (ou curando 2d8+2 PV, se for um morto-vivo). <em>Infligir Ferimentos</em> anula <em>Curar Ferimentos</em>.</p>"
            }
          }
        },
        "perdicao": {
          "name": "Perdição",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curse.jpg",
          "system": {
            "circulo": "1",
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "Criaturas Escolhidas",
            "resistencia": "nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Amaldiçoa os alvos, que recebem –1 em testes de ataque e rolagens de dano. <em>Perdição</em> anula <em>Bênção</em>.</p>"
            }
          }
        },
        "profanar": {
          "name": "Profanar",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_desecration.jpg",
          "system": {
            "circulo": "1",
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "long",
            "alvo": "esfera com 9m de raio",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você enche a área com energia negativa. Dano causado por efeitos de trevas é maximizado dentro da área. Isso também afeta PV curados em mortos-vivos por esses efeitos. Esta magia não pode ser lançada em uma área contendo um símbolo visível dedicado a uma divindade que não a sua. Profanar anula Consagrar.</p>"
            }
          }
        }
      },
      "transmutacao": {
        "abencoar-alimentos": {
          "name": "Abençoar Alimentos",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_blessingoffood.jpg",
          "system": {
            "circulo": "1",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "Alimento para 1 criatura",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você purifica e abençoa uma porção de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado próprio para consumo. Além disso, se for consumido até o final da duração, o alimento oferece 5 PV temporários ou 1 PM temporário (além de quaisquer bônus que já oferecesse). Bônus de alimentação duram um dia e cada personagem só pode receber um bônus de alimentação por dia.</p>"
            }
          }
        },
        "armamento-da-natureza": {
          "name": "Armamento da Natureza",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_natureweapon.jpg",
          "system": {
            "circulo": "1",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 arma (veja texto)",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Você fortalece uma arma mundana primitiva (sem custo em T$, como bordão, clava, funda ou tacape), uma arma natural ou um ataque desarmado. O dano da arma aumenta em um passo e ela é considerada mágica. Ao lançar a magia, você pode mudar o tipo de dano da arma (escolhendo entre corte, impacto ou perfuração).</p>"
            }
          }
        },
        "controlar-plantas": {
          "name": "Controlar Plantas",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_controlplants.jpg",
          "system": {
            "circulo": "1",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "quadrado com 9m de lado",
            "resistencia": "Reflexos anula",
            "custo": "1 PM",
            "description": {
              "value": "<p>Esta magia só pode ser lançada em uma área com vegetação. As plantas se enroscam nas criaturas da área. Aquelas que falharem na resistência ficam @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.GwCDzhOvdqD8zEaw]{Enredado}. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo. Além disso, a área é considerada terreno difícil. No início de seus turnos, a vegetação tenta enredar novamente qualquer criatura na área, exigindo um novo teste de Reflexos.</p>"
            }
          }
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
            "escola": "abjuração",
            "ativacao": {
              "execução": "full",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "cubo com 9m de lado;",
            "resistencia": "Vontade parcial",
            "custo": "3 PM",
            "description": {
              "value": "<p>Também conhecida como <em>Lágrimas do Deus da Trapaça</em>, esta magia é usada em tribunais e para proteger áreas sensíveis. Criaturas na área sofrem –10 em testes de Acrobacia, Enganação, Furtividade e Ladinagem e não podem mentir deliberadamente — mas podem tentar evitar perguntas que normalmente responderiam com uma mentira (sendo evasivas ou cometendo omissões, por exemplo). Uma criatura que passe na resistência tem as penalidades reduzidas para –5 e pode mentir.</p>"
            }
          }
        },
        "vestimenta-da-fe": {
          "name": "Vestimenta da Fé",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/vestimenta-da-fe.webp",
          "system": {
            "circulo": "2",
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 armadura, escudo ou vestimenta",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você fortalece um item, aumentando o bônus de Defesa de uma armadura ou escudo em +2. No caso de um vestuário, ele passa a oferecer +2 na Defesa (não cumulativo com armadura). Os efeitos desta magia são uma melhoria no item, portanto são cumulativos com outras magias, mas não com bônus por encantos nesse item.</p>"
            }
          }
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
              "execução": "full",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Esta magia diz se uma ação que você tomará em breve — no máximo uma hora no futuro — trará resultados bons ou ruins. O mestre rola 1d6 em segredo; com um resultado de 2 a 6, a magia funciona e você recebe uma das seguintes respostas: &ldquo;felicidade&rdquo; (a ação trará bons resultados); &ldquo;miséria&rdquo; (a ação trará maus resultados); &ldquo;felicidade e miséria&rdquo; (para ambos) ou &ldquo;nada&rdquo; (para ações que não trarão resultados bons ou ruins).</p>\n<p>Com um resultado 1, a magia falha e oferece o resultado &ldquo;nada&rdquo;. Não há como saber se esse resultado foi dado porque a magia falhou ou não. Lançar esta magia múltiplas vezes sobre o mesmo assunto gera sempre o primeiro resultado.</p>\n<p>Por exemplo, se o grupo está prestes a entrar em uma câmara, o augúrio dirá &ldquo;felicidade&rdquo; se a câmara contém um tesouro desprotegido, &ldquo;miséria&rdquo; se contém um monstro, &ldquo;felicidade e miséria&rdquo; se houver um tesouro e um monstro ou &ldquo;nada&rdquo; se a câmara estiver vazia.</p>"
            }
          }
        },
        "condicao": {
          "name": "Condição",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/condicao.webp",
          "system": {
            "circulo": "2",
            "escola": "adv",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "até 5 criaturas",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Pela duração da magia, você sabe a posição e status (PV atuais, se estão sob efeito de magia...) dos alvos. Depois de lançada, a distância entre você e os alvos não importa — a magia só deixa de detectar um alvo se ele morrer ou for para outro plano.</p>"
            }
          }
        },
        "globo-da-verdade": {
          "name": "Globo da Verdade",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/globo-da-verdade.webp",
          "system": {
            "circulo": "2",
            "escola": "adv",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Cria um globo flutuante e intangível, com 50cm de diâmetro. O globo mostra uma cena vista até uma semana atrás por você ou por uma criatura que você toque ao lançar a magia (mediante uma pergunta; a criatura pode fazer um teste de Vontade para anular o efeito), permitindo que outras pessoas a vejam.</p>"
            }
          }
        },
        "mente-divina": {
          "name": "Mente Divina",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/mente-divina.webp",
          "system": {
            "circulo": "2",
            "escola": "adv",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você fortalece a mente do alvo. Ele recebe +2 em Inteligência, Sabedoria ou Carisma, a sua escolha. Esse aumento não oferece PV, PM ou perícias adicionais.</p>"
            }
          }
        },
        "voz-divina": {
          "name": "Voz Divina",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/voz-divina.webp",
          "system": {
            "circulo": "2",
            "escola": "adv",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você pode conversar com criaturas de qualquer raça e tipo: animal, construto, espírito, humanoide, monstro ou morto-vivo. Pode fazer perguntas e entende suas respostas, mesmo sem um idioma em comum ou se a criatura não for capaz de falar, mas respeitando os limites da Inteligência dela. A atitude dessas criaturas não é alterada, mas você pode usar a perícia Diplomacia para tentar mudar sua atitude.</p>"
            }
          }
        }
      },
      "convocacao": {
        "enxame-de-pestes": {
          "name": "Enxame de Pestes",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/enxame-de-pestes.webp",
          "system": {
            "circulo": "2",
            "escola": "con",
            "ativacao": {
              "execução": "full",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "resistencia": "Fortitude reduz à metade",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você conjura um enxame de criaturas a sua escolha, como besouros, gafanhotos, ratos, morcegos ou serpentes. O enxame pode passar pelo espaço de outras criaturas e não impede que outras criaturas entrem no espaço dele. No final de seus turnos, o enxame causa 2d12 pontos de dano de corte a qualquer criatura em seu espaço (Fortitude reduz à metade). Você pode gastar uma ação de movimento para mover o enxame 12m.</p>"
            }
          }
        },
        "soco-do-mestre": {
          "name": "Soco do Mestre",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/soco-do-mestre.webp",
          "system": {
            "circulo": "2",
            "escola": "con",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "1 criatura",
            "resistencia": "Fortitude parcial",
            "custo": "3 PM",
            "description": {
              "value": "<p>Ninguém sabe se Mestre foi realmente o criador desta magia — mas ele foi o primeiro a utilizá-la. Você fecha o punho e gesticula como se estivesse golpeando o alvo, causando dano de impacto igual a 4d6 + sua Força. A vítima é empurrada 3m na direção oposta à sua. Passar no teste de resistência reduz o dano à metade e evita o empurrão.</p>"
            }
          }
        }
      },
      "encantamento": {
        "aliado-animal": {
          "name": "Aliado Animal",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/aliado-animal.webp",
          "system": {
            "circulo": "2",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 animal prestativo",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você cria um vínculo mental com um animal prestativo em relação a você. O <em>Aliado Animal</em> obedece a você no melhor de suas capacidades, mesmo que isso arrisque a vida dele. Ele funciona como um parceiro veterano, de um tipo a sua escolha entre ajudante, combatente, fortão, guardião, montaria ou perseguidor.</p>"
            }
          }
        },
        "oracao": {
          "name": "Oração",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/oracao.webp",
          "system": {
            "circulo": "2",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "todas as criaturas (veja texto)",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você e todos os seus aliados no alcance recebem +2 em testes de perícia e rolagens de dano, e todos os seus inimigos no alcance sofrem –2 em testes de perícia e rolagens de dano. Esse efeito é cumulativo com outras magias.</p>\n<p>Componente Material: T$ 25por PM gastos em incensos ou outras oferendas.</p>"
            }
          }
        }
      },
      "evocacao": {
        "controlar-fogo": {
          "name": "Controlar Fogo",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/controlar-fogo.webp",
          "system": {
            "circulo": "2",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "veja texto",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você pode criar, moldar, mover ou extinguir chamas e emanações de calor. Ao lançar a magia, escolha um dos efeitos.</p>\n<p><em>Chamejar:</em> o alvo é armas escolhidas. Elas causam +1d6 de dano de fogo. Também afeta armas naturais e ataques desarmados.</p>\n<p><em>Esquentar:</em> o alvo é 1 objeto, que começa a esquentar. Ele sofre 1d6 pontos de dano de fogo por rodada e causa o mesmo dano a qualquer criatura que o esteja segurando ou vestindo. A critério do mestre, o objeto ou a criatura vestindo-o também podem fica em chamas. Uma criatura pode gastar uma ação completa para resfriar o objeto (jogando areia ou se jogando numa fonte de água próxima, por exemplo) e cancelar o efeito da magia.</p>\n<p><em>Extinguir:</em> o alvo é 1 chama de tamanho Grande ou menor, que é apagada. Isso cria uma nuvem de fumaça que ocupa uma esfera de 3m de raio centrada onde estava a chama. Dentro da fumaça, criaturas têm camuflagem leve.</p>\n<p><em>Modelar:</em> o alvo é 1 chama de tamanho Grande ou menor. A cada rodada, você pode gastar uma ação livre para movimentá-la 9m em qualquer direção. Se atravessar o espaço ocupado por uma criatura, causa 2d6 pontos de dano de fogo. Uma criatura só pode receber dano dessa maneira uma vez por rodada.</p>"
            }
          }
        },
        "purificacao": {
          "name": "Purificação",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/purificacao.webp",
          "system": {
            "circulo": "2",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você purifica a criatura tocada, removendo uma condição dela entre abalado, <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.5n105JaAFlwIfkyX\" data-id=\"5n105JaAFlwIfkyX\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Apavorado</a>, <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.uub1TaaEaq0Vuncl\" data-id=\"uub1TaaEaq0Vuncl\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Alquebrado</a>, <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.bD6XAyHQrWYr0BTQ\" data-id=\"bD6XAyHQrWYr0BTQ\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Atordoado</a>, <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.qN5JjvnXDq4Xak1K\" data-id=\"qN5JjvnXDq4Xak1K\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Cego</a>, <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.ynLMPpmMnZwV6rxf\" data-id=\"ynLMPpmMnZwV6rxf\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Confuso</a>, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.AlTDv5dptSLGiZel]{Debilitado}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.BUMyxT4YI9mdC8Aj]{Enjoado}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.z3nQhg8FEmhh0a7m]{Envenenado}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.YpyVEwCbNVAfFLBm]{Esmorecido}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.6yXEaW3dSXtfsJ4i]{Exausto}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.R5FPPrfq68i9ddyv]{Fascinado}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.MCED18aEe4UFeEVf]{Fatigado},@UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.Q6GUW7cDfTW5AXRz]{Fraco}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.XvqIlV5v4YBeFUBs]{Frustrado}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.e8JmqkgvL3H26vbi]{Lento}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.lm0ybs4xkYuERx1r]{Ofuscado}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.3dcJKe2SGu8mnafU]{Paralisado}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.CMPtwuGkHgeKu8CC]{Pasmo} ou @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.eaJwtq58TBZw0Oyo]{Surdo}.</p>"
            }
          }
        },
        "raio-solar": {
          "name": "Raio Solar",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/raio-solar.webp",
          "system": {
            "circulo": "2",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "linha",
            "resistencia": "Reflexos (veja texto)",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você canaliza uma poderosa rajada de energia positiva que ilumina o campo de batalha. Criaturas na área sofrem 4d8 pontos de dano de luz (ou 4d12, se forem mortos-vivos) e ficam <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.lm0ybs4xkYuERx1r\" data-id=\"lm0ybs4xkYuERx1r\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Ofuscado</a> por uma rodada. Se passarem na resistência, sofrem metade do dano e não ficam ofuscadas.</p>\n<p>@UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.qN5JjvnXDq4Xak1K]{Cego}</p>"
            }
          }
        },
        "tempestade-divina": {
          "name": "Tempestade Divina",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/tempestade-divina.webp",
          "system": {
            "circulo": "2",
            "escola": "evo",
            "ativacao": {
              "execução": "full",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "long",
            "alvo": "cilindro com 15m de raio e 15m de altura",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Esta magia só pode ser usada em ambientes abertos. A área fica sujeita a um vendaval — ataques à distância sofrem penalidade de –5, chamas são apagadas e névoas são dissipadas. Você também pode gerar chuva (–5 em testes de Percepção), neve (como chuva, e a área se torna terreno difícil) ou granizo (como chuva, mais 1 ponto de dano de impacto por rodada, no início de seus turnos).</p>"
            }
          }
        }
      },
      "ilusao": {
        "silencio": {
          "name": "Silêncio",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/silencio.webp",
          "system": {
            "circulo": "2",
            "escola": "ilu",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "esfera com 6m de raio",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Um silêncio sepulcral recai sobre a área e nenhum som é produzido nela. Enquanto estiverem na área, todas as criaturas ficam @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.eaJwtq58TBZw0Oyo]{Surdo}. Além disso, como lançar magias exige palavras mágicas, normalmente nenhuma magia pode ser lançada dentro da área.</p>"
            }
          }
        }
      },
      "necromancia": {
        "miasma-mefitico": {
          "name": "Miasma Mefítico",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/miasma-mefitico.webp",
          "system": {
            "circulo": "2",
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "nuvem com 6m de raio",
            "resistencia": "Fortitude (veja texto)",
            "custo": "3 PM",
            "description": {
              "value": "<p>A área é coberta por emanações letais. Criaturas na área sofrem 5d6 pontos de dano de ácido e ficam @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.BUMyxT4YI9mdC8Aj]{Enjoado} por 1 rodada. Se passarem na resistência, sofrem metade do dano e não ficam enjoadas.</p>"
            }
          }
        },
        "rogar-maldicao": {
          "name": "Rogar Maldição",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/rogar-maldicao.webp",
          "system": {
            "circulo": "2",
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 criatura",
            "resistencia": "Fortitude anula",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você entoa cânticos maléficos que amaldiçoam uma vítima, criando efeitos variados. Ao lançar a magia, escolha entre os seguintes.</p>\n<p><em>Debilidade:</em> o alvo fica <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.YpyVEwCbNVAfFLBm\" data-id=\"YpyVEwCbNVAfFLBm\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Esmorecido</a> e não pode se comunicar ou lançar magias. Ainda reconhece seus aliados e pode segui-los e ajudá-los, mas sempre de maneira simplória.</p>\n<p><em>Doença:</em> muda a duração para instantânea. O alvo contrai uma doença a sua escolha, que o afeta imediatamente (sem período de incubação).</p>\n<p><em>Fraqueza:</em> o alvo fica <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.AlTDv5dptSLGiZel\" data-id=\"AlTDv5dptSLGiZel\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Debilitado</a>e <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.e8JmqkgvL3H26vbi\" data-id=\"e8JmqkgvL3H26vbi\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Lento</a>.</p>\n<p><em>Isolamento</em>: o alvo perde o uso de um de seus cinco sentidos a sua escolha. Se perder a visão, fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.qN5JjvnXDq4Xak1K]{Cego}. Se perder a audição, fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.eaJwtq58TBZw0Oyo]{Surdo}. Se perder o olfato ou paladar, não pode usar a habilidade faro. Se perder o tato, fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.fJFNeZeKmfHMpblz]{Caído} e não pode se levantar.</p>\n<p>Você também pode inventar sua própria maldição, usando esses exemplos como sugestões, mas o mestre tem a palavra final sobre o efeito.</p>"
            }
          }
        }
      },
      "transmutacao": {
        "controlar-ar": {
          "name": "Controlar Ar",
          "type": "magia",
          "img": "icons/magic/air/wind-tornado-cyclone-white.webp",
          "system": {
            "circulo": "2",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "varia",
            "resistencia": "veja texto",
            "custo": "3 PM",
            "description": {
              "value": "<p><a href=\"https://blog.jamboeditora.com.br/errata-do-almanaque-dragao-brasil/\">ERRATA DO ALMANAQUE DRAGÃO BRASIL (jamboeditora.com.br)</a></p>\n<p>Você pode controlar os movimentos e comportamentos de massas de ar. Ao lançar a magia, escolha um dos efeitos abaixo.</p>\n<p><em>Ascender:</em>cria uma corrente de ar ascendente capaz de erguer do chão uma criatura ou objeto médio, fazendo o alvo ﬂutuar para cima e para baixo conforme sua vontade. Você pode gastar uma ação de movimento para subir ou descer o alvo até 6m por rodada, até um máximo de 30m de altura. Você não pode mover o alvo horizontalmente — mas o alvo pode, por exemplo, escalar uma colina ou se apoiar no teto para mover-se lateralmente (com metade de seu deslocamento normal). Uma criatura levitando fica vulnerável e sofre –2 nas jogadas de ataque. Alvos involuntários tem direito a um teste de Fortitude no início de seu turno para negar o efeito. Derrubar um alvo flutuando (simplesmente parando a corrente de ar) causa o dano normal de queda, mas um alvo que passe no teste pode &ldquo;nadar&rdquo; para o chão contra a corrente. Você pode usar essa opção para fazer uma manobra derrubar contra uma criatura voadora dentro do alcance, usando seu atributo-chave no lugar de Força.</p>\n<p><em>Sopro:</em>cria uma lufada de vento a partir de suas mãos, que empurra qualquer criatura Média ou menor em um cone de 4,5m — faça uma manobra<em>empurrar</em>usando seu atributo-chave ao invés de força, usando o mesmo resultado de sua rolagem para todos os alvos. A lufada de vento também faz qualquer coisa que um vento forte e súbito faria, como levantar pó, dispersar vapores, apagar chamas, espalhar papéis ou mover uma embarcação. Manter o sopro ativo exige uma ação padrão.</p>\n<p><em>Vento:</em>cria uma área de vento forte (Tormenta20 página 253) dentro do alcance da magia. Se lançada numa área que já esteja com algum efeito de vento, aumenta esse efeito em um passo. Manter o vento ativo requer uma ação de movimento. Você também pode usar essa opção para reduzir os efeitos de vento em uma área.</p>"
            }
          }
        },
        "controlar-madeira": {
          "name": "Controlar Madeira",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/controlar-madeira.webp",
          "system": {
            "circulo": "2",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "1objeto de madeira grande ou menor",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você molda, retorce, altera ou repele madeira. Se lançar esta magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Ao lançar a magia, escolha.</p>\n<p><em>Fortalecer: </em>deixa o alvo mais resistente. Armas têm seu dano aumentado em um passo. Escudos têm seu bônus de Defesa aumentado em +2 (isso é uma melhoria no item, portanto é cumulativa com outras magias). Esses e outros itens de madeira recebem +5 na RD e dobram seus PV.</p>\n<p><em>Modelar:</em> muda a forma do alvo. Pode transformar um galho em espada, criar uma porta onde antes havia apenas uma parede, transformar um tronco em uma caixa... Mas não pode criar mecanismos complexos (como uma besta) ou itens consumíveis.</p>\n<p><em>Repelir:</em> o alvo é repelido por você. Se for uma arma, ataques feitos com ela contra você falham automaticamente. Se for uma porta ou outro objeto que possa ser aberto, ele vai se abrir quando você se aproximar, mesmo que esteja trancado. Um objeto que vá atingi-lo, como uma carroça, tronco ou barril, vai desviar ou parar adjacente a você, sem lhe causar dano. Os efeitos de regras em outros objetos de madeira ficam a cargo do mestre.</p>\n<p><em>Retorcer:</em> estraga o alvo. Uma porta retorcida emperra (exigindo um teste de Força contra CD 25 para ser aberta). Armas e itens retorcidos impõem –5 em testes de perícia. Escudos retorcidos deixam de oferecer bônus (mas ainda impõem penalidades). Um barco retorcido começa a afundar e naufraga ao final da cena. Os efeitos de regras em outros objetos de madeira ficam a cargo do mestre.</p>"
            }
          }
        },
        "fisico-divino": {
          "name": "Físico Divino",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/fisico-divino.webp",
          "system": {
            "circulo": "2",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você fortalece o corpo do alvo. Ele recebe +2 em Força, Destreza ou Constituição, a sua escolha. Esse aumento não oferece PV ou PM adicionais.</p>"
            }
          }
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
            "escola": "abjuração",
            "ativacao": {
              "execução": "special",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": "1d3+1 rodadas"
            },
            "alcance": "short",
            "alvo": "1 criatura",
            "resistencia": "Vontade parcial",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você expulsa uma criatura não nativa de Arton. Um alvo nativo de outro mundo (como muitos espíritos), é teletransportado de volta para um lugar aleatório de seu mundo de origem. Já um alvo morto-vivo tem sua conexão com as energias negativas rompidas, sendo reduzido a 0 PV. Se passar na resistência, em vez dos efeitos acima, o alvo fica enjoado por 1d4 rodadas.</p>\n<p>Se você tiver um ou mais itens que se oponham ao alvo de alguma maneira, a CD do teste de resistência aumenta em +2 por item. Por exemplo, se lançar a magia contra demônios do frio (vulneráveis a água benta e que odeiam luz e calor) enquanto segura um frasco de água benta e uma tocha acesa, a CD aumenta em +4. O mestre decide se determinado item é forte o bastante contra a criatura para isso.</p>"
            }
          }
        },
        "protecao-contra-magia": {
          "name": "Proteção Contra Magia",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/protecao-contra-magia.webp",
          "system": {
            "circulo": "3",
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você protege o alvo contra efeitos mágicos nocivos. O alvo recebe +5 em testes de resistência contra magias.</p>"
            }
          }
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
              "execução": "full",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Após uma breve união com a natureza local, você obtém informações e intuições sobre a região em que está, numa distância equivalente a um dia de viagem. Você recebe 6d4 dados de auxílio.</p>\n<p>Enquanto a magia durar, sempre que for realizar um teste de perícia em áreas naturais, você pode gastar 2d4 (mais 2d4 para cada círculo de magias acima do 3&ordm; que puder lançar) e adicionar o resultado rolado como bônus no teste. A magia termina se você ficar sem dados.</p>"
            }
          }
        }
      },
      "convocacao": {
        "servo-divino": {
          "name": "Servo Divino",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/servo-divino.webp",
          "system": {
            "circulo": "3",
            "escola": "con",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você pede a sua divindade que envie um espírito para ajudá-lo. Esse espírito realiza uma tarefa a sua escolha que possa ser cumprida em até uma hora — desde algo simples como \"use suas asas para nos levar até o topo da montanha\" até algo complexo como \"escolte esses camponeses até o castelo\". A magia é descarregada quando a criatura cumpre a tarefa, retornando a seu plano natal. O tipo de criatura é escolhido pelo mestre, de acordo com as necessidades da tarefa.</p><p><i>Componente material:</i> um pagamento de T$ 100 ao espírito. A forma de pagamento varia — doações a um templo, um item mágico ou mesmo dinheiro.</p>"
            }
          }
        },
        "viagem-arborea": {
          "name": "Viagem Arbórea",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/viagem-arborea.webp",
          "system": {
            "circulo": "3",
            "escola": "con",
            "ativacao": {
              "execução": "full",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Como parte da execução, você entra em uma árvore adjacente que seja maior do que você. Você pode permanecer dentro da árvore, percebendo os arredores de forma normal (mas sem poder fazer ações). Você pode gastar uma ação de movimento para sair da mesma árvore, ou de qualquer outra dentro de 1km. Se estiver dentro de uma árvore que seja destruída, a magia termina e você sofre 10d6 pontos de dano de impacto. Enquanto a magia durar você pode gastar uma ação de movimento e 1 PM para entrar em outras árvores.</p>"
            }
          }
        }
      },
      "encantamento": {
        "despertar-consciencia": {
          "name": "Despertar Consciência",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/despertar-consciencia.webp",
          "system": {
            "circulo": "3",
            "escola": "enc",
            "ativacao": {
              "execução": "full",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 animal ou planta",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você desperta a consciência de um animal ou planta. O alvo se torna um parceiro veterano de um tipo a sua escolha entre ajudante, combatente, fortão, guardião, médico, perseguidor ou vigilante. Se usar esta magia em um parceiro que já possua, o nível de poder de um de seus tipos aumenta em um passo (iniciante para veterano, veterano para mestre). Se já for um parceiro mestre, recebe o bônus de outro tipo de parceiro iniciante (entre as escolhas acima). O alvo se torna uma criatura racional, com Inteligência –1, e pode falar</p>"
            }
          }
        },
        "heroismo": {
          "name": "Heroísmo",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/heroismo.webp",
          "system": {
            "circulo": "3",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Esta magia imbui uma criatura com coragem e valentia. O alvo fica imune a medo e recebe 40 PV temporários e +4 em testes de ataque e rolagens de dano contra o inimigo de maior ND na cena.</p>"
            }
          }
        },
        "missao-divina": {
          "name": "Missão Divina",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/missao-divina.webp",
          "system": {
            "circulo": "3",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 criatura",
            "resistencia": "Vontade anula (veja texto)",
            "custo": "6 PM",
            "description": {
              "value": "<p>Esta magia obriga o alvo a cumprir uma tarefa a sua escolha. Ela dura uma semana ou até o alvo cumprir a tarefa, o que vier primeiro. O alvo pode recusar a missão — mas, no fim de cada dia em que não se esforçar para cumprir a tarefa, deve fazer um teste de Vontade; se falhar, sofre uma penalidade cumulativa de –2 em todos os testes e rolagens.</p>\n<p>A <em>Missão Divina</em> não pode forçar uma criatura a um ato suicida, nem designar uma missão impossível (como matar uma criatura que não existe).</p>"
            }
          }
        }
      },
      "evocacao": {
        "coluna-de-chamas": {
          "name": "Coluna de Chamas",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/coluna-de-chamas.webp",
          "system": {
            "circulo": "3",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "long",
            "alvo": "cilindro com 3m de raio e 30m de altura",
            "resistencia": "Reflexos reduz à metade",
            "custo": "6 PM",
            "description": {
              "value": "<p>Um pilar de fogo sagrado desce dos céus, causando 6d6 pontos de dano de fogo mais 6d6 pontos de dano de luz nas criaturas e objetos livres na área.</p>"
            }
          }
        },
        "dispersar-as-trevas": {
          "name": "Dispersar as Trevas",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/dispersar-trevas.webp",
          "system": {
            "circulo": "3",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Esfera de 6m de raio",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Esta magia cria um forte brilho (multicolorido ou de uma cor que remeta a sua divindade) que causa diversos efeitos. Todas as magias de 3&ordm; círculo ou menor ativas na área são dissipadas se você passar num teste de Religião contra a CD de cada magia. Seus aliados na área recebem +4 em testes de resistência e redução de trevas 10 até o fim da cena, protegidos por uma aura sutil da mesma cor. Inimigos na área ficam @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.qN5JjvnXDq4Xak1K]{Cego} por 1d4 rodadas (apenas uma vez pela magia). <em>Dispersar as Trevas </em>anula <em>Anular a Luz </em>(este efeito tem duração instantânea).</p>"
            }
          }
        },
        "sopro-da-salvacao": {
          "name": "Sopro da Salvação",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/sopro-da-salvacao.webp",
          "system": {
            "circulo": "3",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "cone de 9m",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você enche seus pulmões de energia positiva e sopra um cone de poeira reluzente. O sopro afeta apenas seus aliados na área, curando 2d8+4 pontos de vida e removendo uma das seguintes condições de todos os alvos: @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.ccqJXj25EVIzUhzo]{Abalado}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.bD6XAyHQrWYr0BTQ]{Atordoado}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.5n105JaAFlwIfkyX]{Apavorado}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.uub1TaaEaq0Vuncl]{Alquebrado}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.qN5JjvnXDq4Xak1K]{Cego}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.ynLMPpmMnZwV6rxf]{Confuso}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.AlTDv5dptSLGiZel]{Debilitado}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.BUMyxT4YI9mdC8Aj]{Enjoado}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.YpyVEwCbNVAfFLBm]{Esmorecido}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.6yXEaW3dSXtfsJ4i]{Exausto}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.R5FPPrfq68i9ddyv]{Fascinado}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.MCED18aEe4UFeEVf]{Fatigado}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.Q6GUW7cDfTW5AXRz]{Fraco}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.XvqIlV5v4YBeFUBs]{Frustrado}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.e8JmqkgvL3H26vbi]{Lento}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.3dcJKe2SGu8mnafU]{Paralisado}, @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.CMPtwuGkHgeKu8CC]{Pasmo} e @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.eaJwtq58TBZw0Oyo]{Surdo}.</p>"
            }
          }
        }
      },
      "necromancia": {
        "anular-a-luz": {
          "name": "Anular a Luz",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/anular-luz.webp",
          "system": {
            "circulo": "3",
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "esfera de 6m de raio",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Esta magia cria uma onda de escuridão que causa diversos efeitos. Todas as magias de 3&ordm; círculo ou menor ativas na área são dissipadas se você passar num teste de Religião contra a CD de cada magia. Seus aliados na área são protegidos por uma aura sombria e recebem +4 na Defesa até o fim da cena. Inimigos na área ficam <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.BUMyxT4YI9mdC8Aj\" data-id=\"BUMyxT4YI9mdC8Aj\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Enjoado</a>por 1d4 rodadas (apenas uma vez por cena). <em>Anular a Luz</em> anula <em>Dispersar as Trevas</em> (este efeito tem duração instantânea).</p>"
            }
          }
        },
        "poeira-da-podridao": {
          "name": "Poeira da Podridão",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/poeira-da-podridao.webp",
          "system": {
            "circulo": "3",
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "nuvem com 6m de raio",
            "resistencia": "Fortitude (veja texto)",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você manifesta uma nuvem de poeira carregada de energia negativa, que apodrece lentamente as criaturas na área. Ao lançar a magia, e no início de seus turnos, criaturas na área sofrem 2d8+8 pontos de dano de trevas (Fortitude reduz à metade). Alvos que falharem no teste não podem recuperar PV por uma rodada.</p>"
            }
          }
        }
      },
      "transmutacao": {
        "controlar-agua": {
          "name": "Controlar Água",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/controlar-agua.webp",
          "system": {
            "circulo": "3",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "long",
            "alvo": "esfera com 30m de raio",
            "resistencia": "Veja texto",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você controla os movimentos e comportamentos da água. Ao lançar a magia, escolha um dos efeitos abaixo.</p>\n<p><em>Congelar:</em> toda a água mundana na área é congelada. Criaturas nadando na área ficam imóveis; escapar exige gastar uma ação padrão e passar num teste de Atletismo ou Acrobacia.</p>\n<p><em>Derreter:</em> gelo mundano na área vira água e a magia termina. A critério do mestre, isso pode criar terreno difícil.</p>\n<p><em>Enchente:</em> eleva o nível da água mundana na área em até 4,5m. A sua escolha, muda área para alvo: uma embarcação. O alvo recebe +3m em seu deslocamento pela duração do efeito.</p>\n<p><em>Evaporar:</em> toda a água e gelo mundano na área evaporam instantaneamente e a magia termina. Elementais da água, plantas monstruosas e criaturas com imunidade a frio na área sofrem 10d8 pontos de dano de fogo; outras criaturas vivas recebem metade desse dano (Fortitude reduz à metade).</p>\n<p><em>Partir:</em> diminui o nível de toda água mundana na área em até 4,5m. Em um corpo d&rsquo;água raso, isso abre um caminho seco, que pode ser atravessado a pé. Em um corpo d&rsquo;água profundo, cria um redemoinho que pode prender barcos (um teste de Pilotagem com CD igual à da magia permite ao piloto livrar a embarcação). Elementais da água na área ficam lentos.</p>"
            }
          }
        },
        "controlar-terra": {
          "name": "Controlar Terra",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/controlar-terra.webp",
          "system": {
            "circulo": "3",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "long",
            "alvo": "9 cubos com 1,5m de lado",
            "resistencia": "Veja texto",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você manipula a densidade e a forma de toda terra, pedra, lama, argila ou areia na área. Ao lançar a magia, escolha.</p><p><i>Amolecer:</i> se afetar o teto, uma coluna ou suporte, provoca um desabamento que causa 10d6 pontos de dano de impacto às criaturas na área (Reflexos reduz à metade). Se afetar um piso de terra ou pedra, cria terreno difícil de areia ou argila, respectivamente.</p><p><i>Modelar:</i> pode usar pedra ou argila para criar um ou mais objetos simples de tamanho Enorme ou menor (sem mecanismos ou partes móveis). Por exemplo, pode transformar um tijolo em uma maça, criar uma passagem onde antes havia apenas uma parede ou levantar uma ou mais paredes que oferecem cobertura total (RD 8 e 50 PV para cada 3m).</p><p><i>Solidificar:</i> transforma lama ou areia em terra ou pedra. Criaturas com os pés na superfície ficam agarradas. Elas podem se soltar com uma ação padrão e um teste de Acrobacia ou Atletismo.</p>"
            }
          }
        },
        "potencia-divina": {
          "name": "Potência Divina",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/potencia-divina.webp",
          "system": {
            "circulo": "3",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você canaliza o poder de sua divindade. Você aumenta uma categoria de tamanho (seu equipamento muda de acordo) e recebe Força +4 e RD 10. Você não pode lançar magias enquanto estiver sob efeito de Potência Divina.</p>"
            }
          }
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
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Vontade Anula",
            "custo": "10 PM",
            "description": {
              "value": "<p>Uma cúpula de energia invisível o cerca, impedindo a aproximação de certas criaturas. Escolha um tipo de criatura (animais, espíritos, monstros...) ou uma raça de humanoides (elfos, goblins, minotauros..). Criaturas do grupo escolhido que tentem se aproximar a menos de 3m de você (ou seja, que tentem ficar adjacentes a você) devem fazer um teste de Vontade. Se falharem, não conseguem, gastam a ação e só podem tentar novamente na rodada seguinte. Isso impede ataques corpo a corpo, mas não ataques ou outros efeitos à distância. Se você tentar se aproximar além do limite de 3m, rompe a cúpula e a magia é dissipada.</p>"
            }
          }
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
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "<p>Vislumbres do futuro permitem que você reavalie suas ações. Uma vez por rodada, você pode rolar novamente um teste recém realizado, mas deve aceitar o resultado da nova rolagem.</p>"
            }
          }
        }
      },
      "convocacao": {
        "guardiao-divino": {
          "name": "Guardião Divino",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/guardiao-divino.webp",
          "system": {
            "circulo": "4",
            "escola": "con",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "<p>A magia invoca um elemental Pequeno, com a forma de um orbe feito de luz divina. A criatura é incorpórea, imune a dano e ilumina como uma tocha. O elemental tem 100 pontos de luz.</p><p>Uma vez por rodada, durante o seu turno, o elemental pode se movimentar (deslocamento de voo 18m) e gastar quantos pontos de luz quiser para curar dano ou condições de criaturas em alcance curto, à taxa de 1 PV por 1 ponto de luz ou uma condição por 3 pontos de luz (entre abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, ofuscado, pasmo, sangrando, surdo ou vulnerável). A magia é encerrada quando o elemental fica sem pontos de luz.</p>"
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
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "<p>Você transfere um pouco de seu poder divino a outra criatura. Escolha uma magia de até 2&ordm; círculo que você conheça; o alvo pode lançar essa magia uma vez, sem pagar o custo base dela em PM (aprimoramentos podem ser usados, mas o alvo deve gastar seus próprios PM). Você sofre uma penalidade de –3 PM até que o alvo lance a magia.</p>"
            }
          }
        }
      },
      "evocacao": {
        "circulo-da-restauracao": {
          "name": "Círculo da Restauração",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/circulo-da-restauracao.webp",
          "system": {
            "circulo": "4",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "esfera de 3m de raio",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "<p>Você evoca um círculo de luz que emana uma energia poderosa. Qualquer criatura viva que termine o turno dentro do círculo recupera 3d8+3 PV e 1 PM. Mortos-vivos e criaturas que sofrem dano por luz perdem PV e PM na mesma quantidade. Uma criatura pode recuperar no máximo 5 PM por dia com esta magia.</p>"
            }
          }
        },
        "colera-do-deus-sol": {
          "name": "Cólera do Deus-Sol",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/colera-do-deus-sol.webp",
          "system": {
            "circulo": "4",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "esfera com 6m de raio",
            "resistencia": "Reflexos Parcial",
            "custo": "10 PM",
            "description": {
              "value": "<p>Você cria uma explosão de luz dourada e intensa. Criaturas na área ficam @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.qN5JjvnXDq4Xak1K]{Cego} por 1d4 rodadas e @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.2M8CXrGavdU6g1ZI]{Em Chamas} , e sofrem 10d6 pontos de dano de fogo (mortos-vivos sofrem 10d8 pontos de dano). Uma criatura que passe no teste de resistência não fica cega, nem em chamas e sofre metade do dano.</p>"
            }
          }
        },
        "manto-do-cruzado": {
          "name": "Manto do Cruzado",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/manto-do-cruzado.webp",
          "system": {
            "circulo": "4",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "vocẽ",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "<p>Você invoca o poder de sua divindade na forma de um manto de energia que reveste seu corpo. Esta magia tem duas versões. Você escolhe qual versão pode lançar quando aprende esta magia. Ela não pode ser mudada.</p>\n<p><em>Manto de Luz:</em> um manto dourado e luminoso. No início de cada um de seus turnos, você e todos os seus aliados em alcance curto recuperam 2d8 PV. Você recebe imunidade a dano de trevas e seus ataques corpo a corpo causam +2d8 pontos de dano de luz.</p>\n<p><em>Manto de Trevas:</em> um manto negro como a noite. No início de cada um de seus turnos, todos os inimigos em alcance curto sofrem 4d8 pontos de dano de trevas. Você cura metade de todo o dano causado pela magia.</p>"
            }
          }
        },
        "terremoto": {
          "name": "Terremoto",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/terremoto.webp",
          "system": {
            "circulo": "4",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "long",
            "alvo": "esfera com 30m de raio",
            "resistencia": "veja texto",
            "custo": "10 PM",
            "description": {
              "value": "<p>Esta magia cria um tremor de terra que rasga o solo. O terremoto dura uma rodada, durante a qual criaturas sobre o solo ficam atordoadas. Barreiras físicas nãointerrompem a área de<em> Terremoto</em>.</p>\n<p>O efeito exato depende do terreno.</p>\n<p><em>Caverna ou subterrâneo:</em> a magia derruba o teto, causando 12d6 pontos de dano de impacto e agarrando (@UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.TSRZ1cAIIIpsvOfK]{Agarrado}) todas as criaturas na área. Um teste de Reflexos reduz o dano à metade e evita a condição.</p>\n<p><em>Construção:</em> todas as estruturas na área sofrem 200 pontos de dano de impacto, o suficiente para derrubar construções de madeira ou alvenaria simples, mas não de alvenaria reforçada. Criaturas em uma construção que desmorone sofrem o mesmo efeito de criaturas em uma caverna (veja acima).</p>\n<p><em>Espaço aberto:</em> fendas se abrem no chão. Cada criatura na área precisa rolar um dado; em um resultado ímpar, uma fenda se abre sob ela e ela precisa fazer um teste de Reflexos; se falhar, cai na fenda. A criatura pode escapar gastando uma ação completa e passando em um teste de Atletismo (CD igual à da magia). No início do seu próximo turno as fendas se fecham, matando todos que estejam dentro delas.</p>\n<p><em>Penhascos:</em> o penhasco racha, criando um desmoronamento que percorre uma distância horizontal igual à distância da queda. Por exemplo, um penhasco com 30m de altura desmorona em uma área de 30m de comprimento além da base. Qualquer criatura no caminho sofre 12d6 pontos de dano de impacto e fica agarrada. Um teste de Reflexos reduz o dano à metade e evita ficar agarrado.</p>\n<p><em>Rio, lago ou pântano:</em> fissuras se abrem sob a água, drenando-a e formando um lamaçal. Criaturas na área precisam fazer um teste de Reflexos para não afundarem na lama e ficarem agarradas. No início do seu próximo turno as fissuras se fecham, possivelmente afogando as criaturas que ficaram agarradas.</p>\n<p>Criaturas agarradas (efeito possível decaverna, construção, penhasco e rio, lago ou pântano) sofrem 1d6 pontos de dano por rodada até serem libertadas, o que exige uma ação completa e um teste de Atletismo (por parte da própria criatura ou de um aliado adjacente).</p>"
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
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "long",
            "alvo": "1 criatura",
            "resistencia": "Fortitude anula",
            "custo": "10 PM",
            "description": {
              "value": "<p>Cria uma conexão entre seu corpo e o da criatura alvo, deixando uma marca idêntica na pele de ambos. Enquanto a magia durar, sempre que você sofrer qualquer dano ou condição, o alvo desta magia deve fazer um teste de Fortitude; se falhar, sofre o mesmo dano que você ou adquire a mesma condição. A magia termina se o alvo chegar a 0 pontos de vida.</p>"
            }
          }
        }
      },
      "transmutacao": {
        "controlar-o-clima": {
          "name": "Controlar o Clima",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/controlar-clima.webp",
          "system": {
            "circulo": "4",
            "escola": "tra",
            "ativacao": {
              "execução": "full",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "km",
            "alvo": "esfera com 2km de raio",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "<p>Você muda o clima da área onde se encontra, podendo criar qualquer condição climática: chuva, neve, ventos, névoas... Veja o Capítulo 6: O Mestre para os efeitos em jogo do clima.</p>"
            }
          }
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
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "esfera com 9m de raio",
            "resistencia": "Vontade parcial",
            "custo": "15 PM",
            "description": {
              "value": "<p>Você se torna um conduíte da energia de sua divindade, emanando uma aura brilhante. Você e aliados devotos da mesma divindade ficam imunes a encantamento e recebem +10 na Defesa e em testes de resistência. Aliados não devotos da mesma divindade recebem+5 na Defesa e em testes de resistência.</p>\n<p>Além disso, inimigos que entrem na área afetada devem fazer um teste de Vontade; em caso de falha, recebem uma condição a sua escolha entre <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.YpyVEwCbNVAfFLBm\" data-id=\"YpyVEwCbNVAfFLBm\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Esmorecido</a>, <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.AlTDv5dptSLGiZel\" data-id=\"AlTDv5dptSLGiZel\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Debilitado</a>ou <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.e8JmqkgvL3H26vbi\" data-id=\"e8JmqkgvL3H26vbi\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Lento</a> até o fim da cena. O teste deve ser refeito cada vez que a criatura entrar novamente na área.</p>"
            }
          }
        },
        "engenho-de-mana": {
          "name": "Engenho de Mana",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/engenho-de-mana.webp",
          "system": {
            "circulo": "5",
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "resistencia": "Nenhuma",
            "custo": "15 PM",
            "description": {
              "value": "<p>Você cria um disco de energia que lembra uma roda de engenho e flutua no ponto em que foi conjurado. O disco é imune a dano, não pode ser movido e faz uma contramágica automática contra qualquer magia lançada em alcance médio dele (exceto as suas), usando seu teste de Misticismo. Caso vença o teste, o engenho não só anula a magia como absorve os PM usados para lançá-la, acumulando PM temporários. No seu turno, se estiver ao alcance do disco, você pode gastar PM nele para lançar magias.</p>"
            }
          }
        },
        "lagrimas-da-deusa-da-magia": {
          "name": "Lágrimas da Deusa da Magia",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/lagrimas-da-deusa-da-magia.webp",
          "system": {
            "circulo": "5",
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 criatura",
            "resistencia": "Vontade parcial",
            "custo": "15 PM",
            "description": {
              "value": "<p>Se falhar no teste de resistência, o alvo perde a habilidade de lançar magias arcanas até o fim da cena. Se passar, perde a habilidade por uma rodada.</p>"
            }
          }
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
              "execução": "ação",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "any",
            "alvo": "local ou criatura conhecidos",
            "resistencia": "Nenhuma",
            "custo": "15 PM",
            "description": {
              "value": "<p>Esta magia faz com que sua consciência deixe seu corpo e se transporte instantaneamente para um local ou para perto de uma criatura alvo. Se escolher um local, ele precisa ser conhecido por você. Se escolher uma criatura, você transporta sua consciência até onde a criatura estiver, contanto que estejam no mesmo plano.</p>\n<p>Você adquire uma forma fantasmagórica invisível, mas pode se mostrar sando uma ação de movimento. Pode se mover em qualquer direção com deslocamento de voo 18m e, por ser incorpóreo, é capaz de atravessar objetos sólidos, mas fica limitado a se mover dentro dos limites do local, ou dentro de alcance curto da criatura alvo. Você pode ver e ouvir como se estivesse presente no local e pode falar mentalmente com qualquer criatura que possa ver, contanto que tenham um idioma em comum.</p>"
            }
          }
        }
      },
      "convocacao": {
        "intervencao-divina": {
          "name": "Intervenção Divina",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/intervencao-divina.webp",
          "system": {
            "circulo": "5",
            "escola": "con",
            "ativacao": {
              "execução": "full",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "spec",
            "alvo": "veja texto",
            "resistencia": "veja texto",
            "custo": "15 PM",
            "description": {
              "value": "<p>Você pede a sua divindade para interceder diretamente. Você pode:</p>\n<p>&bull; Curar todos os PV e condições de até 10 criaturas em alcance longo (este efeito cura mortos-vivos, em vez de causar dano).</p>\n<p>&bull; Dissipar os efeitos de qualquer magia de 4&ordm; círculo ou menor.</p>\n<p>Você pode implorar por algo ainda mais poderoso. Nesse caso, a magia requer o sacrifício de 2 PM e pode fazer coisas como:</p>\n<p>&bull; Criar um item mundano de até T$ 30.000.</p>\n<p>&bull; Duplicar os efeitos de qualquer magia de até 4&ordm; círculo. Caso a magia precise de um componente material para ser lançada, ainda é necessário providenciar o componente.</p>\n<p>&bull; Proteger uma cidade de um desastre, como uma erupção vulcânica, enchente ou terremoto.</p>\n<p>&bull; Ressuscitar uma criatura em alcance longo que tenha morrido há até uma rodada. A criatura acorda com 1 PV.</p>\n<p>&bull; Qualquer outra coisa que o mestre autorize, conforme os desejos e objetivos da divindade do conjurador.</p>"
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
            "escola": "evo",
            "ativacao": {
              "execução": "full",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "long",
            "alvo": "cubo de 90m",
            "resistencia": "veja texto",
            "custo": "15 PM",
            "description": {
              "value": "<p>Você cria uma nuvem de tempestade violenta. Os ventos tornam ataques à distância impossíveis e fazem a área contar como condição terrível para lançar magia. Além disso, inimigos na área têm a visibilidade reduzida (como a magia Névoa). Uma vez por turno, você pode gastar uma ação de movimento para gerar um dos efeitosa seguir.</p>\n<p><em>Nevasca.</em> Inimigos na área sofrem 10d6 pontos de dano de frio (Fortitude reduz à metade). A área fica coberta de neve, virando terreno difícil até o fim da cena ou até você usar siroco.</p>\n<p><em>Raios.</em> Até 6 inimigos a sua escolha na área sofrem 10d8 pontos de dano de eletricidade (Reflexos reduz à metade).</p>\n<p><em>Siroco.</em> Transforma a chuva em uma tempestade de areia escaldante. Inimigos na área sofrem 10d6 pontos de dano (metade corte, metade fogo) e ficam @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.kzVyzFyYroPrv8gb]{Sangrando} (Fortitude reduz o dano à metade e evita a condição).</p>\n<p><em>Trovões.</em> Inimigos sofrem 10d6 pontos de dano de impacto e ficam @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.my1HxIcUGVr2Mbii]{Desprevenido} por uma rodada (Fortitude reduz o dano à metade e evita a condição).</p>"
            }
          }
        },
        "segunda-chance": {
          "name": "Segunda Chance",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/segunda-chance.webp",
          "system": {
            "circulo": "5",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "15 PM",
            "description": {
              "value": "<p>Um brilho alaranjado, na forma de asas de fênix, emana do alvo. Ele recupera 200 pontos de vida e se cura de qualquer das seguintes condições: abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofuscado, paralisado, pasmo ou surdo.</p>"
            }
          }
        }
      },
      "necromancia": {
        "reanimacao-impura": {
          "name": "Reanimação Impura",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/reanimacao-impura.webp",
          "system": {
            "circulo": "5",
            "escola": "nec",
            "ativacao": {
              "execução": "full",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "15 PM",
            "description": {
              "value": "<p>Você reanima uma criatura morta recentemente (dentro da mesma cena), trazendo sua alma de volta ao corpo de forma forçada. O tipo da criatura muda para morto-vivo, mas ela retém suas memórias e habilidades de quando estava viva, podendo inclusive lançar magias. A criatura pode pensar e falar livremente, mas obedece cegamente a seus comandos. Quando a cena termina, a criatura volta a ficar morta, mas muitos clérigos malignos usam meios para guardar e preservar o corpo de criaturas poderosas para serem reanimadas dessa forma quando necessário. Se for destruída, a criatura não pode ser reanimada novamente com esta magia.</p>"
            }
          }
        },
        "roubar-a-alma": {
          "name": "Roubar a Alma",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/roubar-alma.webp",
          "system": {
            "circulo": "5",
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 criatura",
            "resistencia": "Vontade parcial",
            "custo": "15 PM",
            "description": {
              "value": "<p>Você rouba a alma da vítima, armazenando-a em um objeto. Se o alvo passar no teste de resistência, sente o impacto de sua alma ser puxada para fora do corpo e fica <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.ccqJXj25EVIzUhzo\" data-id=\"ccqJXj25EVIzUhzo\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Abalado</a>por 1 rodada. Se falhar, seu corpo fica caído, <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.2jgO4I5cMaSKa9fv\" data-id=\"2jgO4I5cMaSKa9fv\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Inconsciente</a>e inerte, enquanto sua alma é transportada para dentro do objeto. O corpo não envelhece nem se decompõe, permanecendo em estase. Ele pode ser atacado e destruído normalmente. O objeto escolhido deve custar T$ 1.000 por nível ou ND da criatura e não possuir uma alma presa ou se quebrará quando a magia for lançada (embora personagens não conheçam o conceito de &ldquo;nível&rdquo; dentro do mundo de jogo, podem ter noção do poder geral de uma criatura, estimando assim o valor do objeto). Se o objeto for destruído, a magia se esvai. Se o corpo ainda estiver disponível, a alma retorna para ele. Caso contrário, escapa para os Mundos dos Deuses.</p>\n<p><em>Custo adicional:</em> sacrifício de 1 PM.</p>"
            }
          }
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
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Ao lançar esta magia, escolha entre ácido, eletricidade, fogo, frio, luz ou trevas. O alvo recebe redução de dano 10 contra o tipo de dano escolhido.</p>"
            }
          }
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
              "execução": "move",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "long",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Envia um aviso telepático para uma criatura, mesmo que não possa vê-la nem tenha linha de efeito.</p>\n<p>Escolha um:</p>\n<p>Alerta: o alvo recebe +5 em seu próximo teste de Iniciativa e de Percepção dentro da cena.</p>\n<p>Mensagem: o alvo recebe uma mensagem sua de até 25 palavras. Vocês devem ter um idioma em comum para o alvo poder entendê-lo.</p>\n<p>Localização: o alvo sabe onde você está naquele momento. Se você mudar de posição, ele não saberá.</p>"
            }
          }
        },
        "compreensao": {
          "name": "Compreensão",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane06.jpg",
          "system": {
            "circulo": "1",
            "escola": "adv",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura ou texto",
            "resistencia": "Vontade anula (veja descrição)",
            "custo": "1 PM",
            "description": {
              "value": "<p>Essa magia lhe confere compreensão sobrenatural. Você pode tocar um texto e entender as palavras mesmo que não conheça o idioma. Se tocar numa criatura inteligente, pode se comunicar com ela mesmo que não tenham um idioma em comum. Se tocar uma criatura não inteligente, como um animal, pode perceber seus sentimentos.</p>\n<p>Você também pode gastar uma ação de movimento para ouvir os pensamentos de uma criatura tocada (você &ldquo;ouve&rdquo; o que o alvo está pensando), mas um alvo involuntário tem direito a um teste de Vontade para proteger seus pensamentos e evitar este efeito.</p>"
            }
          }
        },
        "visao-mistica": {
          "name": "Visão Mística",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane07.jpg",
          "system": {
            "circulo": "1",
            "escola": "adv",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Seus olhos brilham com uma luz azul e passam a enxergar auras mágicas. Este efeito é similar ao uso de Misticismo para detectar magia, mas você detecta todas as auras mágicas em alcance médio e recebe todas as informações sobre elas sem gastar ações. Além disso, você pode gastar uma ação de movimento para descobrir se uma criatura que possa perceber em alcance médio é capaz de lançar magias e qual a aura gerada pelas magias de círculo mais alto que ela pode lançar.</p>"
            }
          }
        }
      },
      "convocacao": {
        "nevoa": {
          "name": "Névoa",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_fog.jpg",
          "system": {
            "circulo": "1",
            "escola": "con",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>Uma névoa espessa eleva-se de um ponto a sua escolha, obscurecendo toda a visão — criaturas a até 1,5m têm camuflagem e criaturas a partir de 3m têm camuflagem total. Um vento forte dispersa a névoa em 4 rodadas e um vendaval a dispersa em 1 rodada. Esta magia não funciona sob a água.</p>"
            }
          }
        }
      },
      "evocacao": {
        "luz": {
          "name": "Luz",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_light.jpg",
          "system": {
            "circulo": "1",
            "escola": "evo",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 objeto",
            "resistencia": "Vontade anula (veja texto)",
            "custo": "1 PM",
            "description": {
              "value": "<p>O alvo emite luz (mas não produz calor) em uma área com 6m de raio. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a luz, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. <em>Luz</em> anula <em>Escuridão</em>.</p>"
            }
          }
        }
      },
      "necromancia": {
        "escuridao": {
          "name": "Escuridão",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_darkness.jpg",
          "system": {
            "circulo": "1",
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 objeto",
            "resistencia": "Vontade anula (veja texto)",
            "custo": "1 PM",
            "description": {
              "value": "<p>O alvo emana sombras em uma área com 6m de raio. Criaturas dentro da área recebem camuflagem leve por escuridão leve. As sombras não podem ser iluminadas por nenhuma fonte de luz natural. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a escuridão, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. <em>Escuridão</em> anula <em>Luz</em>.</p>"
            }
          }
        }
      },
      "transmutacao": {
        "arma-magica": {
          "name": "Arma Mágica",
          "type": "magia",
          "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane08.jpg",
          "system": {
            "circulo": "1",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 1,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 arma empunhada",
            "resistencia": "Nenhuma",
            "custo": "1 PM",
            "description": {
              "value": "<p>A arma fornece um bônus de +1 nos testes de ataque e rolagens de dano e é considerada mágica (não cumulativo com bônus de encantos). Caso você esteja empunhando a arma, pode usar seu atributo-chave de magias em vez do atributo original nos testes de ataque (não cumulativo com efeitos que somam este atributo).</p>"
            }
          }
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
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "alvo": "1 criatura ou 1 objeto mágico",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você dissipa outras magias que estejam ativas, como se sua duração tivesse acabado. Note que efeitos de magias instantâneas não podem ser dissipados (não se pode dissipar uma Bola de Fogo ou Relâmpago depois que já causaram dano...). Se lançar essa magia em uma criatura ou área, faça um teste de Misticismo; você dissipa as magias com CD igual ou menor que o resultado do teste. Se lançada contra um item mágico, o transforma em um item mundano por 1d6 rodadas (Vontade anula).</p>"
            }
          }
        },
        "runa-de-protecao": {
          "name": "Runa de Proteção",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/runa-de-protecao.webp",
          "system": {
            "circulo": "2",
            "escola": "abjuração",
            "ativacao": {
              "execução": "hour",
              "custo": 3,
              "qtd": "1",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "uma área com 6m de raio",
            "resistencia": "varia (veja o texto)",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você escreve uma runa pessoal em uma superfície fixa, como uma parede ou o chão, que protege uma pequena área ao redor. Quando uma criatura entra na área afetada a runa explode, causando 6d6 pontos de dano em todos os alvos a até 6m. A criatura que ativa a runa não tem direito a teste de resistência; outras criaturas na área têm direito a um teste de Reflexos para reduzir o dano à metade. Quando lança a magia, você escolhe o tipo de dano, entre ácido, eletricidade, fogo, frio, luz ou trevas.</p>\n<p>Você pode determinar que a runa se ative apenas em condições específicas — por exemplo, apenas por goblins ou apenas por mortos-vivos. Você também pode criar uma palavra mágica que impeça a runa de se ativar.</p>\n<p>Um personagem pode encontrar a runa com um teste de Investigação e desarmá-la com um teste de Ladinagem (CD da magia).</p>\n<p><em>Componente material:</em> pó de diamante no valor de T$ 200, com o qual o conjurador desenha a runa, que brilha por alguns instantes e depois se torna praticamente invisível.</p>"
            }
          }
        }
      },
      "convocacao": {
        "preparacao-de-batalha": {
          "name": "Preparação de Batalha",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/preparacao-de-batalha.webp",
          "system": {
            "circulo": "2",
            "escola": "con",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "Custo Adicional: penalidade de 1 PM",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "até dois itens que você possua, entre armas, armaduras e escudos",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p><strong>Custo Adicional:</strong> penalidade de 1 PM</p>\n<p>Essa magia é muito utilizada por clérigos e bardos que não precisam (ou não podem) estar sempre com suas armas ou armaduras. A magia é lançada sobre até dois itens que você possua. A partir daí, em qualquer momento, você pode usar uma ação completa para convocar os itens, que aparecem sobre seu corpo e em suas mãos. O efeito é espalhafatoso, sendo praticamente impossível utilizá-lo sem chamar atenção. A magia funciona independentemente da distância dos itens, contanto que estejam no mesmo plano, mas termina se você perder a posse deles.</p>"
            }
          }
        }
      },
      "encantamento": {
        "marca-da-obediencia": {
          "name": "Marca da Obediência",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/marca-da-obediencia.webp",
          "system": {
            "circulo": "2",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Vontade anula",
            "custo": "3 PM",
            "description": {
              "value": "<p>Você toca uma criatura, gravando uma marca mística no corpo dela enquanto profere uma ordem, como \"não ataque a mim ou meus aliados\", \"siga-me\" ou \"não saia desta sala\". A criatura deve seguir essa ordem, gastando todas as ações de seu turno para isso. A ordem não pode ser genérica demais (como \"ajude-me\", por exemplo), nem forçar o alvo a atos suicidas. A cada rodada, o alvo pode fazer um teste de Vontade. Se passar, a magia é dissipada.</p>"
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
            "escola": "nec",
            "ativacao": {
              "execução": "full",
              "custo": 3,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "resistencia": "Nenhuma",
            "custo": "3 PM",
            "description": {
              "value": "<p class=\"MsoNormal\">Você conjura seis esqueletos capangas de tamanho Médio feitos de energia negativa em espaços desocupados dentro do alcance. Você pode gastar uma ação de movimento para fazer os mortos-vivos andarem (eles têm deslocamento 9m) ou uma ação padrão para fazê-los causar dano a criaturas adjacentes (1d6+2 pontos de dano de trevas cada). Os esqueletos têm For 2, Des 2, Defesa 18 e todos os outros atributos nulos; eles têm 1 PV e falham automaticamente em qualquer teste de resistência ou oposto, mas são imunes a atordoamento, dano não letal, doença, encantamento, fadiga, frio, ilusão, paralisia, sono e veneno. Eles desaparecem quando são reduzidos a 0 PV ou no fim da cena. Os mortos- -vivos não agem sem receber uma ordem. Usos criativos para capangas fora de combate ficam a critério do mestre.</p>\n<p><span style=\"font-family: var(--font-primary); font-size: var(--font-size-14);\"></span></p>\n<p class=\"MsoNormal\"><em>Carniçal:</em> como esqueletos, mas têm For 3, Des 3, Defesa 27 e causam 1d8+3 pontos de dano de trevas mais perda de 1d8 PV por veneno. Além disso, criaturas atingidas por um carniçal devem passar num teste de Fortitude ou ficam @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.3dcJKe2SGu8mnafU]{Paralisado} por 1 rodada. Uma criatura que passe no teste de resistência fica imune à paralisia dos carniçais por um dia.</p>\n<p><span style=\"font-family: var(--font-primary); font-size: var(--font-size-14);\"></span></p>\n<p><span style=\"font-family: var(--font-primary); font-size: var(--font-size-14);\"><em>Sombra:</em> </span>como esqueletos, mas têm Des 4, Defesa 35, a habilidade incorpóreo e causam 2d10 pontos de dano de trevas. Além disso, criaturas vivas atingidas por uma sombra devem passar num teste de Fortitude ou perdem 1d4 PM. Sombras perdem a habilidade incorpóreo quando expostas à luz do sol.</p>"
            }
          }
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
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 craitura, objeto ou local",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você descobre informações sobre uma criatura, objeto ou local que esteja tocando. O que exatamente você descobre depende do mestre: talvez você não descubra tudo que há para saber, mas ganhe pistas para continuar a investigação. A cada rodada que mantiver a magia, você descobre:</p>\n<ul>\n<li>Todas as informações sobre o alvo, como se tivesse passado em todos os testes de Conhecimento para tal.</li>\n<li>Todas as habilidades do alvo. Se for uma criatura, você sabe suas estatísticas de jogo como raça, classe, nível, atributos, magias, resistências e fraquezas. Se for um item mágico, aprende seu efeito e funcionamento.</li>\n<li>Se o alvo está sob influência de alguma magia e todas as informações sobre as magias ativas, se houver alguma.</li>\n</ul>"
            }
          }
        },
        "videncia": {
          "name": "Vidência",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/videncia.webp",
          "system": {
            "circulo": "3",
            "escola": "adv",
            "ativacao": {
              "execução": "full",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "any",
            "alvo": "1 criatura",
            "resistencia": "Vontade anula",
            "custo": "6 PM",
            "description": {
              "value": "<p>Através de uma superfície reflexiva (bacia de água benta para clérigos, lago para druidas, bola de cristal para magos, espelho para feiticeiros etc.) você pode ver e ouvir uma criatura escolhida e seus arredores (cerca de 6m em qualquer direção), mesmo que ela se mova. O alvo pode estar a qualquer distância, mas se passar em um teste de Vontade, a magia falha. A vítima recebe bônus ou penalidades em seu teste de resistência, dependendo do conhecimento que você tiver dela.</p><ul><li>Não conhece o alvo: +10.</li><li>Ouviu falar do alvo: +5.</li><li>O alvo está em outro plano ou mundo: +5.</li><li>Já encontrou o alvo pessoalmente: +0.</li><li>Tem uma pintura, escultura ou outra representação do alvo: –2.</li><li>Conhece bem o alvo: –5.</li><li>Tem um pertence pessoal ou peça de roupa do alvo: –5.</li><li>Tem uma parte do corpo do alvo (unhas, cabelos...): –10.</li></ul></p>"
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
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 humanóide ou animal",
            "resistencia": "Vontade parcial",
            "custo": "6 PM",
            "description": {
              "value": "<p>O alvo fica <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.3dcJKe2SGu8mnafU\" data-id=\"3dcJKe2SGu8mnafU\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Paralisado</a>; se passar na resistência, em vez disso fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.e8JmqkgvL3H26vbi]{Lento}. A cada rodada, pode gastar uma ação completa para fazer um novo teste de Vontade. Se passar, se liberta do efeito.</p>"
            }
          }
        },
        "selo-de-mana": {
          "name": "Selo de Mana",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/selo-de-mana.webp",
          "system": {
            "circulo": "3",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Vontade Parcial",
            "custo": "6 PM",
            "description": {
              "value": "<p>Seu toque manifesta um selo mágico na pele do alvo, que atrapalha o fluxo de mana. Pela duração da magia, sempre que o alvo realizar qualquer ação que gaste PM, deve fazer um teste de Vontade; se passar, faz a ação normalmente. Se falhar, a ação não tem efeito (mas os PM são gastos mesmo assim).</p>"
            }
          }
        }
      },
      "ilusao": {
        "manto-de-sombras": {
          "name": "Manto de Sombras",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/manto-de-sombras.webp",
          "system": {
            "circulo": "3",
            "escola": "ilu",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Você fica coberto por um manto de energia sombria. Nesta forma, torna-se incorpóreo (inclui seu equipamento): só pode ser afetado por armas mágicas, ou por outras criaturas incorpóreas e pode atravessar objetos sólidos, mas não manipulá-los. Também não pode atacar criaturas normais (mas ainda pode lançar magias nelas). Além disso, se torna vulnerável à luz direta: se exposto a uma fonte de luz, sofre 1 ponto de dano por rodada.</p>\n<p>Você pode gastar uma ação de movimento e 1 PM para &ldquo;entrar&rdquo; em uma sombra do seu tamanho ou maior e se teletransportar para outra sombra, também do seu tamanho ou maior, em alcance médio.</p>"
            }
          }
        }
      },
      "necromancia": {
        "servo-morto-vivo": {
          "name": "Servo Morto-Vivo",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/servo-morto-vivo.webp",
          "system": {
            "circulo": "3",
            "escola": "nec",
            "ativacao": {
              "execução": "full",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 cadáver",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Esta magia transforma o cadáver de um humanoide, animal ou monstro em um esqueleto ou zumbi (conforme o estado de conservação do corpo). O morto-vivo então obedece a todos os seus comandos, mesmo suicidas. Se quiser que o morto-vivo o acompanhe, ele funciona como um aliado iniciante, de um tipo a sua escolha entre ajudante, atirador, combatente, fortão, guardião ou montaria.</p>\n<p>Uma vez por rodada, quando sofre dano, você pode sacrificar um servo morto-vivo e evitar esse dano. O servo é destruído no processo e não pode ser reanimado.</p>\n<p><em>Componente material:</em> um ônix negro (T$ 100), inserido na boca ou olho do cadáver.</p>"
            }
          }
        }
      },
      "transmutacao": {
        "pele-de-pedra": {
          "name": "Pele de Pedra",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/pele-de-pedra.webp",
          "system": {
            "circulo": "3",
            "escola": "tra",
            "ativacao": {
              "execução": "ação",
              "custo": 6,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "6 PM",
            "description": {
              "value": "<p>Sua pele ganha aspecto e dureza de rocha. Você recebe redução de dano 5.</p>"
            }
          }
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
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 criatura",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "<p>O alvo fica imune a efeitos de movimento e ignora qualquer efeito que impeça ou restrinja seu deslocamento. Por fim, pode usar habilidades que exigem liberdade de movimentos mesmo se estiver usando armadura ou escudo.</p>"
            }
          }
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
              "execução": "move",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "você",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "<p>Você enxerga a forma real das coisas. Você pode ver através de camuflagem e escuridão (normais e mágicas), assim como efeitos de ilusão e transmutação (enxergando a verdade como formas translúcidas ou sobrepostas).</p>"
            }
          }
        }
      },
      "convocacao": {
        "viagem-planar": {
          "name": "Viagem Planar",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/viagem-planar.webp",
          "system": {
            "circulo": "4",
            "escola": "con",
            "ativacao": {
              "execução": "full",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "pessoal",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "<p>Você viaja instantaneamente para outro plano da Criação. Lá, você chega de 10 a 1.000km do destino pretendido (role 1d100 e multiplique por 10km).</p><p><i>Componente material:</i> um bastão de metal precioso em forma de forquilha (no valor de T$ 1.000). O tipo de metal determina para qual plano de existência você será enviado. Os metais que levam a dimensões específicas podem ser difíceis de encontrar, de acordo com o mestre.</p>"
            }
          }
        }
      },
      "necromancia": {
        "muralha-de-ossos": {
          "name": "Muralha de Ossos",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/muralha-de-ossos.webp",
          "system": {
            "circulo": "4",
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 10,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "medium",
            "resistencia": "Nenhuma",
            "custo": "10 PM",
            "description": {
              "value": "<p>Uma parede de ossos se eleva da terra. A parede tem 15m de comprimento, 9m de altura e 1,5m de espessura. Ela pode ter qualquer forma — não precisa ser uma linha reta —, mas sua base precisa estar sempre tocando o solo. Quando a parede surge, criaturas na área ocupada ou adjacentes sofrem 4d8 pontos de dano de corte e precisam fazer um teste de Reflexos para não ficarem presas no emaranhado de ossos. Uma criatura presa dessa maneira fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.TSRZ1cAIIIpsvOfK]{Agarrado}, e pode usar uma ação padrão para fazer um teste de Atletismo (CD da magia) para se soltar. Se passar no teste, sai da muralha para um dos lados adjacentes. Se falhar, sofre 4d8 pontos de dano de corte.</p>\n<p>É possível destruir o muro para atravessá-lo ou libertar uma criatura agarrada. Cada trecho de 3m do muro tem Defesa 8, 40 PV e redução de corte, frio e perfuração 10. Também é possível escalar a parede. Isso exige um teste de Atletismo (CD da magia) e causa 4d8 pontos de dano de corte para cada 3m escalados.</p>"
            }
          }
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
            "escola": "abjuração",
            "ativacao": {
              "execução": "full",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "long",
            "resistencia": "Fortitude parcial",
            "custo": "15 PM",
            "description": {
              "value": "<p>Esta magia cria um vácuo capaz de sugar tudo nas proximidades. Escolha um espaço desocupado para o buraco negro. No início de cada um de seus três turnos seguintes, todas as criaturas a até alcance longo do buraco negro, incluindo você, devem fazer um teste de Fortitude. Em caso de falha, ficam caídas e são puxadas 30m na direção do buraco. Objetos soltos também são puxados. Criaturas podem gastar uma ação de movimento para se segurar em algum objeto fixo, recebendo +2 em seus testes de resistência.</p>\n<p>Criaturas e objetos que toquem o buraco negro são sugadas, desaparecendo para sempre.Criaturas e objetos que iniciem seu turno no espaço do buraco negro devem gastar uma ação de movimento e fazer um teste de Fortitude. Se passarem, podem escapar se arrastando (metade de seu deslocamento) para longe dele. Se falharem, perdem a ação (mas podem gastar outra para tentar novamente). Se terminarem seu turno no espaço do buraco negro, são sugadas, desaparecendo para sempre.</p>\n<p>Não se conhece o destino das coisas sugadas pelo buraco negro, uma vez que jamais retornam. Alguns estudiosos sugerem que podem ser enviadas para outros mundos. Muitos clérigos da Noite acreditam que esta magia abre um portal para Sombria, o lar de sua deusa, e sonham um dia poder realizar essa jornada.</p>"
            }
          }
        },
        "invulnerabilidade": {
          "name": "Invulnerabilidade",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/invulnerabilidade.webp",
          "system": {
            "circulo": "5",
            "escola": "abjuração",
            "ativacao": {
              "execução": "ação",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "pessoal",
            "alvo": "Você",
            "resistencia": "Nenhuma",
            "custo": "15 PM",
            "description": {
              "value": "<p>Esta magia cria uma barreira mágica impenetrável que protege você contra efeitos nocivos mentais ou físicos, a sua escolha.</p><p><i>Proteção mental:</i> você fica imune às condições abalado, alquebrado, apavorado, atordoado, confuso, esmorecido, fascinado, frustrado e pasmo, além de efeitos de encantamento e ilusão.</p><p><i>Proteção física:</i> você fica imune às condições atordoado, cego, debilitado, enjoado, envenenado, exausto, fatigado, fraco, lento, ofuscado e paralisado, além de acertos críticos, ataques furtivos e doenças.</p>"
            }
          }
        }
      },
      "encantamento": {
        "palavra-primordial": {
          "name": "Palavra Primordial",
          "type": "magia",
          "img": "systems/tormenta20/icons/magias/palavra-primordial.webp",
          "system": {
            "circulo": "5",
            "escola": "enc",
            "ativacao": {
              "execução": "ação",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "short",
            "alvo": "1 criatura com menos níveis que você",
            "resistencia": "Vontade parcial",
            "custo": "15 PM",
            "description": {
              "value": "<p>Você pronuncia uma palavra do idioma primordial da Criação, que causa um dos efeitos abaixo, a sua escolha.</p>\n<p><em>Atordoar:</em> a criatura fica <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.bD6XAyHQrWYr0BTQ\" data-id=\"bD6XAyHQrWYr0BTQ\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Atordoado</a>por 2d4 rodadas. Se passar no teste de resistência, fica <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.my1HxIcUGVr2Mbii\" data-id=\"my1HxIcUGVr2Mbii\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Desprevenido</a>por 1d4 rodadas e não pode mais ser atordoada por esta magia até o final da cena.</p>\n<p><em>Cegar:</em> a criatura fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.qN5JjvnXDq4Xak1K]{Cego}. Se passar no teste de resistência, fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.lm0ybs4xkYuERx1r]{Ofuscado}por 1d4 rodadas.</p>\n<p><em>Matar:</em> a criatura morre. Além do teste de Vontade, a criatura tem direito a um teste de Fortitude se tiver mais da metade de seus PV. Se passar em qualquer um deles, em vez de morrer perde 10d8 pontos de vida e fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.kzVyzFyYroPrv8gb]{Sangrando}.</p>"
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
            "escola": "nec",
            "ativacao": {
              "execução": "ação",
              "custo": 15,
              "qtd": "",
              "condição": "",
              "special": ""
            },
            "alcance": "toque",
            "alvo": "1 criatura",
            "resistencia": "Veja texto",
            "custo": "15 PM",
            "description": {
              "value": "<p>Sua mão exala energias letais. A criatura sofre 10d8+10 pontos de dano de trevas. Se estiver com menos da metade de seus PV, em vez disso deve fazer um teste de Fortitude. Se passar, sofre o dano normal. Se falhar, seus PV são reduzidos a –10.</p>"
            }
          }
        }
      }
    }
  }
};

module.exports = spellsData;
