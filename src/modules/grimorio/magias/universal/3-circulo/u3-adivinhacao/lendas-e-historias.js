module.exports = {
  "_id": "tQAIfnReI9DV014V",
  "name": "Lendas e Histórias",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/lendas-historias.webp",
  "effects": [
    {
      "_id": "38qQpPaoMbUr1US2",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "4",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "execução",
          "value": "1 dia",
          "mode": 5,
          "priority": null
        },
        {
          "key": "alcance",
          "value": "ilimitado",
          "mode": 5,
          "priority": null
        }
      ],
      "disabled": true,
      "duration": {
        "startTime": null,
        "seconds": null,
        "combat": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "origin": "Compendium.tormenta20.magias.tQAIfnReI9DV014V",
      "transfer": false,
      "tint": "#ffffff",
      "_stats": {
        "coreVersion": "13.342",
        "systemId": null,
        "systemVersion": null,
        "createdTime": null,
        "modifiedTime": null,
        "lastModifiedBy": null,
        "compendiumSource": null,
        "duplicateSource": null,
        "exportSource": null
      },
      "name": "muda a execução para 1 dia, o alcance para ilimitado e adiciona componente material (cuba de ouro cheia d'água e ingredientes mágicos, no valor de T$ 1.000). Você ainda precisa ter alguma informação sobre o alvo, como um nome, descrição ou localização.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!tQAIfnReI9DV014V.38qQpPaoMbUr1US2"
    }
  ],
  "folder": "HyfzyzZmGAlHTRd3",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Você descobre informações sobre uma criatura, objeto ou local que esteja tocando. O que exatamente você descobre depende do mestre: talvez você não descubra tudo que há para saber, mas ganhe pistas para continuar a investigação. A cada rodada que mantiver a magia, você descobre: Todas as informações sobre o alvo, como se tivesse passado em todos os testes de Conhecimento para tal. Todas as habilidades do alvo. Se for uma criatura, você sabe suas estatísticas de jogo como raça, classe, nível, atributos, magias, resistências e fraquezas. Se for um item mágico, aprende seu efeito e funcionamento. Se o alvo está sob influência de alguma magia e todas as informações sobre as magias ativas, se houver alguma.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 196",
    "ativacao": {
      "execução": "ação",
      "custo": 6,
      "qtd": "",
      "condição": "",
      "special": ""
    },
    "duração": {
      "value": 0,
      "units": "sust",
      "special": ""
    },
    "target": {
      "value": null,
      "width": null,
      "units": "",
      "type": ""
    },
    "range": {
      "value": null,
      "units": ""
    },
    "consume": {
      "type": "",
      "target": "",
      "amount": null,
      "mpMultiplier": false
    },
    "efeito": "",
    "alcance": "toque",
    "alvo": "1 craitura, objeto ou local",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "uni",
    "circulo": "3",
    "preparada": false,
    "escola": "adv",
    "chatFlavor": "",
    "origin": "",
    "tags": [],
    "chatGif": ""
  },
  "ownership": {
    "default": 0
  },
  "_stats": {
    "systemId": "tormenta20",
    "systemVersion": "1.4.116",
    "coreVersion": "13.342",
    "createdTime": 1664310462826,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!tQAIfnReI9DV014V"
};