module.exports = {
  "_id": "wzEx37udhiSSTeFD",
  "name": "Raio Solar",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/raio-solar.webp",
  "effects": [
    {
      "_id": "02fF0HaEnzjjxWCk",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "duracao",
          "value": "Cena",
          "mode": 5,
          "priority": null
        },
        {
          "key": "resistencia",
          "value": "nenhuma",
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
      "origin": "Compendium.tormenta20.magias.wzEx37udhiSSTeFD",
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
      "name": "muda a duração para cena e a resistência para nenhuma. Em vez do normal, cria um facho de luz que ilumina a área da magia. Uma vez por rodada, você pode mudar a direção do facho como uma ação livre.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!wzEx37udhiSSTeFD.02fF0HaEnzjjxWCk"
    },
    {
      "_id": "0scxuZfMACRm0MaF",
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
          "value": "1d8",
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
      "origin": "Compendium.tormenta20.magias.wzEx37udhiSSTeFD",
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
      "name": "aumenta o dano ou cura em +1d8 (ou +1d12 em mortos-vivos).",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!wzEx37udhiSSTeFD.0scxuZfMACRm0MaF"
    },
    {
      "_id": "OfviaR1sdHH8ZLYT",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "3",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "dano",
          "value": "4d8",
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
      "origin": "Compendium.tormenta20.magias.wzEx37udhiSSTeFD",
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
      "name": "em vez do normal, criaturas vivas a sua escolha na área curam 4d8 pontos de vida; o restante sofre o dano normalmente.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!wzEx37udhiSSTeFD.OfviaR1sdHH8ZLYT"
    },
    {
      "_id": "VNfMJgm411DpDTdQ",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "3",
          "aumenta": false
        }
      },
      "changes": [],
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
      "origin": "Compendium.tormenta20.magias.wzEx37udhiSSTeFD",
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
      "name": "criaturas que falhem na resistência ficam cegas por 1d4 rodadas.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!wzEx37udhiSSTeFD.VNfMJgm411DpDTdQ"
    }
  ],
  "folder": "nUZzjRZCyl2p92SC",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; canaliza uma poderosa rajada de energia positiva que ilumina o campo de batalha. Criaturas na &aacute;rea sofrem 4d8 pontos de dano de luz (ou 4d12, se forem mortos-vivos) e ficam <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.lm0ybs4xkYuERx1r\" data-id=\"lm0ybs4xkYuERx1r\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Ofuscado</a> por uma rodada. Se passarem na resist&ecirc;ncia, sofrem metade do dano e n&atilde;o ficam ofuscadas.</p>\n<p>@UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.qN5JjvnXDq4Xak1K]{Cego}</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 203",
    "ativacao": {
      "execucao": "action",
      "custo": 3,
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
    "alvo": "",
    "area": "linha",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": "Reflexos (veja texto)"
    },
    "rolls": [
      {
        "name": "Dano",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "4d8",
            "luz",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "div",
    "circulo": "2",
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
    "createdTime": 1664310462905,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!wzEx37udhiSSTeFD"
};