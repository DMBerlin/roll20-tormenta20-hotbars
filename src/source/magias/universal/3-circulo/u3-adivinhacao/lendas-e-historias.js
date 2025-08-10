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
          "self": true,
          "custo": "4",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "execucao",
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
      "value": "<p>Voc&ecirc; descobre informa&ccedil;&otilde;es sobre uma criatura, objeto ou local que esteja tocando. O que exatamente voc&ecirc; descobre depende do mestre: talvez voc&ecirc; n&atilde;o descubra tudo que h&aacute; para saber, mas ganhe pistas para continuar a investiga&ccedil;&atilde;o. A cada rodada que mantiver a magia, voc&ecirc; descobre:</p>\n<ul>\n<li>Todas as informa&ccedil;&otilde;es sobre o alvo, como se tivesse passado em todos os testes de Conhecimento para tal.</li>\n<li>Todas as habilidades do alvo. Se for uma criatura, voc&ecirc; sabe suas estat&iacute;sticas de jogo como ra&ccedil;a, classe, n&iacute;vel, atributos, magias, resist&ecirc;ncias e fraquezas. Se for um item m&aacute;gico, aprende seu efeito e funcionamento.</li>\n<li>Se o alvo est&aacute; sob influ&ecirc;ncia de alguma magia e todas as informa&ccedil;&otilde;es sobre as magias ativas, se houver alguma.</li>\n</ul>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 196",
    "ativacao": {
      "execucao": "action",
      "custo": 6,
      "qtd": "",
      "condicao": "",
      "special": ""
    },
    "duracao": {
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
    "alcance": "touch",
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