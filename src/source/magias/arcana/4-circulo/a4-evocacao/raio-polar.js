module.exports = {
  "_id": "KQTBh5aVCqDUSpvr",
  "name": "Raio Polar",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/raio-polar.webp",
  "effects": [
    {
      "_id": "87GfXamQvQPUX8zY",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "3",
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
      "origin": "Compendium.tormenta20.magias.KQTBh5aVCqDUSpvr",
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
      "_key": "!items.effects!KQTBh5aVCqDUSpvr.87GfXamQvQPUX8zY"
    },
    {
      "_id": "hjeZdKXLcWFQwHIj",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "5",
          "aumenta": false,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "durationScene": false,
          "equipment": false,
          "items": ""
        }
      },
      "changes": [
        {
          "key": "area",
          "mode": 5,
          "value": "esfera de 6m de raio",
          "priority": 0
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
      "origin": "Compendium.tormenta20.magias.KQTBh5aVCqDUSpvr",
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
      "name": "muda o alvo para área de esfera de 6m de raio. Em vez de um raio, você dispara uma esfera de gelo que explode, causando o efeito da magia em todas as criaturas na área.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!KQTBh5aVCqDUSpvr.hjeZdKXLcWFQwHIj"
    },
    {
      "_id": "Y06YINkVohOy4Gkb",
      "changes": [],
      "disabled": false,
      "duration": {
        "rounds": 1,
        "startTime": null,
        "seconds": null,
        "combat": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "origin": "Item.E5WJa9cUbROowNkr",
      "transfer": false,
      "flags": {
        "tormenta20": {
          "onuse": false,
          "durationScene": true
        }
      },
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
      "name": "Raio Polar",
      "img": "systems/tormenta20/icons/magias/raio-polar.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!KQTBh5aVCqDUSpvr.Y06YINkVohOy4Gkb"
    }
  ],
  "folder": "dxIW3dYs0c4ADJzO",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; dispara um raio azul esbranqui&ccedil;ado de gelo e ar congelante. O alvo sofre 10d8 pontos de dano de frio e fica preso em um bloco de gelo (<a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.3dcJKe2SGu8mnafU\" data-id=\"3dcJKe2SGu8mnafU\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Paralisado</a>). Se passar no teste de resist&ecirc;ncia, sofre metade do dano e, em vez de paralisado, fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.e8JmqkgvL3H26vbi]{Lento} por uma rodada.</p>\n<p>&Eacute; poss&iacute;vel quebrar o gelo para libertar uma criatura presa: o bloco tem 20 PV, resist&ecirc;ncia a dano 10 e &eacute; vulner&aacute;vel a fogo. Uma criatura presa pode usar uma a&ccedil;&atilde;o completa para fazer um teste de Atletismo (com a mesma CD para resistir &agrave; magia) e tentar se libertar do gelo; cada vez que passar no teste causa 10 pontos de dano ao bloco, ignorando a RD.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 203",
    "ativacao": {
      "execucao": "action",
      "custo": 10,
      "qtd": "",
      "condicao": "",
      "special": ""
    },
    "duracao": {
      "value": 0,
      "units": "inst",
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
    "alcance": "medium",
    "alvo": "1 criatura",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": "Fortitude parcial"
    },
    "rolls": [
      {
        "name": "Dano",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "10d8",
            "frio",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "arc",
    "circulo": "4",
    "preparada": false,
    "escola": "evo",
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
    "createdTime": 1664310461822,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!KQTBh5aVCqDUSpvr"
};