module.exports = {
  "_id": "6CV9kikfAZs1R1uk",
  "name": "Controlar Água",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/controlar-agua.webp",
  "effects": [
    {
      "_id": "8mjNubWym0jUZZ5R",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "2",
          "aumenta": true
        }
      },
      "changes": [
        {
          "key": "dano",
          "value": "2d8",
          "mode": 0,
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
      "origin": "Compendium.tormenta20.magias.6CV9kikfAZs1R1uk",
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
      "name": "aumenta o dano em +2d8.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!6CV9kikfAZs1R1uk.8mjNubWym0jUZZ5R"
    },
    {
      "origin": "Item.6CV9kikfAZs1R1uk",
      "tint": "#ffffff",
      "flags": {
        "tormenta20": {
          "onuse": false,
          "durationScene": true
        }
      },
      "duration": {
        "rounds": 1,
        "startTime": null,
        "seconds": null,
        "combat": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "_id": "qNYd8bv2bEIqC77p",
      "changes": [],
      "transfer": false,
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
      "name": "Alvo afetado",
      "img": "systems/tormenta20/icons/magias/controlar-agua.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!6CV9kikfAZs1R1uk.qNYd8bv2bEIqC77p"
    }
  ],
  "folder": "d32UX2lzIXG6Ew2L",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; controla os movimentos e comportamentos da &aacute;gua. Ao lan&ccedil;ar a magia, escolha um dos efeitos abaixo.</p>\n<p><em>Congelar:</em> toda a &aacute;gua mundana na &aacute;rea &eacute; congelada. Criaturas nadando na &aacute;rea ficam im&oacute;veis; escapar exige gastar uma a&ccedil;&atilde;o padr&atilde;o e passar num teste de Atletismo ou Acrobacia.</p>\n<p><em>Derreter:</em> gelo mundano na &aacute;rea vira &aacute;gua e a magia termina. A crit&eacute;rio do mestre, isso pode criar terreno dif&iacute;cil.</p>\n<p><em>Enchente:</em> eleva o n&iacute;vel da &aacute;gua mundana na &aacute;rea em at&eacute; 4,5m. A sua escolha, muda &aacute;rea para alvo: uma embarca&ccedil;&atilde;o. O alvo recebe +3m em seu deslocamento pela dura&ccedil;&atilde;o do efeito.</p>\n<p><em>Evaporar:</em> toda a &aacute;gua e gelo mundano na &aacute;rea evaporam instantaneamente e a magia termina. Elementais da &aacute;gua, plantas monstruosas e criaturas com imunidade a frio na &aacute;rea sofrem 10d8 pontos de dano de fogo; outras criaturas vivas recebem metade desse dano (Fortitude reduz &agrave; metade).</p>\n<p><em>Partir:</em> diminui o n&iacute;vel de toda &aacute;gua mundana na &aacute;rea em at&eacute; 4,5m. Em um corpo d&rsquo;&aacute;gua raso, isso abre um caminho seco, que pode ser atravessado a p&eacute;. Em um corpo d&rsquo;&aacute;gua profundo, cria um redemoinho que pode prender barcos (um teste de Pilotagem com CD igual &agrave; da magia permite ao piloto livrar a embarca&ccedil;&atilde;o). Elementais da &aacute;gua na &aacute;rea ficam lentos.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 186",
    "ativacao": {
      "execucao": "action",
      "custo": 6,
      "qtd": "",
      "condicao": "",
      "special": ""
    },
    "duracao": {
      "value": 0,
      "units": "scene",
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
    "alcance": "long",
    "alvo": "",
    "area": "esfera com 30m de raio",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": "Veja texto"
    },
    "rolls": [
      {
        "name": "Dano",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "10d8",
            "fogo",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "div",
    "circulo": "3",
    "preparada": false,
    "escola": "tra",
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
    "createdTime": 1664310461761,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!6CV9kikfAZs1R1uk"
};