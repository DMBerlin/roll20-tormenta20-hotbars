module.exports = {
  "_id": "eB2JWvyIseIiSfR2",
  "name": "Palavra Primordial",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/palavra-primordial.webp",
  "effects": [
    {
      "_id": "VaWZMPwg38tEE3WI",
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
      "origin": "Item.LsXNnIjmOUAakYvc",
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
      "name": "Palavra Primordial",
      "img": "systems/tormenta20/icons/magias/palavra-primordial.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!eB2JWvyIseIiSfR2.VaWZMPwg38tEE3WI"
    }
  ],
  "folder": "hv6FaFj0nZooebLT",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; pronuncia uma palavra do idioma primordial da Cria&ccedil;&atilde;o, que causa um dos efeitos abaixo, a sua escolha.</p>\n<p><em>Atordoar:</em> a criatura fica <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.bD6XAyHQrWYr0BTQ\" data-id=\"bD6XAyHQrWYr0BTQ\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Atordoado</a>por 2d4 rodadas. Se passar no teste de resist&ecirc;ncia, fica <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.my1HxIcUGVr2Mbii\" data-id=\"my1HxIcUGVr2Mbii\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Desprevenido</a>por 1d4 rodadas e n&atilde;o pode mais ser atordoada por esta magia at&eacute; o final da cena.</p>\n<p><em>Cegar:</em> a criatura fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.qN5JjvnXDq4Xak1K]{Cego}. Se passar no teste de resist&ecirc;ncia, fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.lm0ybs4xkYuERx1r]{Ofuscado}por 1d4 rodadas.</p>\n<p><em>Matar:</em> a criatura morre. Al&eacute;m do teste de Vontade, a criatura tem direito a um teste de Fortitude se tiver mais da metade de seus PV. Se passar em qualquer um deles, em vez de morrer perde 10d8 pontos de vida e fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.kzVyzFyYroPrv8gb]{Sangrando}.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 200",
    "ativacao": {
      "execucao": "action",
      "custo": 15,
      "qtd": "",
      "condicao": "",
      "special": ""
    },
    "duracao": {
      "value": 0,
      "units": "special",
      "special": "instantânea ou veja texto"
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
    "alcance": "short",
    "alvo": "1 criatura com menos níveis que você",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": "Vontade parcial"
    },
    "rolls": [
      {
        "name": "Dano",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "10d8",
            "perda",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "uni",
    "circulo": "5",
    "preparada": false,
    "escola": "enc",
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
    "createdTime": 1664310462770,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!eB2JWvyIseIiSfR2"
};