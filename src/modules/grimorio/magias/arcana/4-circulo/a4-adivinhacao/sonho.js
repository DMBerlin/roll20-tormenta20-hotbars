module.exports = {
  "_id": "u8Drz7nb84o5LIKG",
  "name": "Sonho",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/sonho.webp",
  "effects": [
    {
      "_id": "Td04D1iUcjNXOkWF",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "2",
          "aumenta": false,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "items": "",
          "durationScene": false
        }
      },
      "changes": [
        {
          "key": "dano",
          "mode": 2,
          "value": "1d10",
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
      "origin": "Compendium.tormenta20.magias.u8Drz7nb84o5LIKG",
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
      "name": "transforma o sonho do alvo em um pesadelo. A vítima deve fazer um teste de Vontade. Se falhar, não recupera PV ou PM pela noite, sofre 1d10 pontos de dano de trevas e acorda fatigada. A vítima recebe bônus ou penalidades em seu teste de resistência, dependendo do conhecimento que você tiver dela. Use os mesmos modificadores da magia Vidência.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!u8Drz7nb84o5LIKG.Td04D1iUcjNXOkWF"
    },
    {
      "_id": "JjXia570MMqdi6X9",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "1",
          "aumenta": true
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
      "origin": "Compendium.tormenta20.magias.u8Drz7nb84o5LIKG",
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
      "name": "aumenta o número de alvos em +1. Todos os alvos compartilham um mesmo sonho (ou pesadelo) entre si e com você.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!u8Drz7nb84o5LIKG.JjXia570MMqdi6X9"
    },
    {
      "_id": "cORkOS9TjEL0BhLr",
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
      "origin": "Item.WnFojSk50613opVj",
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
      "name": "Sonho",
      "img": "systems/tormenta20/icons/magias/sonho.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!u8Drz7nb84o5LIKG.cORkOS9TjEL0BhLr"
    }
  ],
  "folder": "KXIH9cJob20GWu3K",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; entra nos sonhos de uma criatura. Uma vez l&aacute;, pode conversar com ela at&eacute; que ela acorde. Se o alvo n&atilde;o estiver dormindo quando voc&ecirc; lan&ccedil;ar a magia, voc&ecirc; pode permanecer em transe at&eacute; que ele adorme&ccedil;a. Durante o transe, voc&ecirc; fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.8aj5sPol5mkAqTZv]{Indefeso} e sem consci&ecirc;ncia dos arredores. Voc&ecirc; pode sair do transe quando quiser, mas a magia termina.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 207",
    "ativacao": {
      "execucao": "minute",
      "custo": 10,
      "qtd": "10",
      "condicao": "",
      "special": ""
    },
    "duracao": {
      "value": 0,
      "units": "special",
      "special": "Veja Texto"
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
    "alcance": "any",
    "alvo": "1 criatura viva",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [
      {
        "name": "Dano",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "0",
            "trevas",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "arc",
    "circulo": "4",
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
    "createdTime": 1664310462827,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!u8Drz7nb84o5LIKG"
};