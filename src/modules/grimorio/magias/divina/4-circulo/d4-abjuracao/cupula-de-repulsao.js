module.exports = {
  "_id": "DM4WIu4ilHbqjAlu",
  "name": "Cúpula de Repulsão",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/cupula-de-repulsao.webp",
  "effects": [
    {
      "_id": "qpnCJSh4dNYMVpUQ",
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
          "key": "duracao",
          "mode": 5,
          "value": "sustentada",
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
      "origin": "Compendium.tormenta20.magias.DM4WIu4ilHbqjAlu",
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
      "name": "a cúpula impede criaturas de se aproximarem a menos de 4,5m de você (ou seja, deve haver dois quadrados entre você e as criaturas).",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!DM4WIu4ilHbqjAlu.qpnCJSh4dNYMVpUQ"
    },
    {
      "_id": "93aDhUrpaQd7t5XS",
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
      "origin": "Item.3ifvXvhIPkaeY8oG",
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
      "name": "Cúpula de Repulsão",
      "img": "systems/tormenta20/icons/magias/cupula-de-repulsao.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!DM4WIu4ilHbqjAlu.93aDhUrpaQd7t5XS"
    },
    {
      "origin": "Item.DM4WIu4ilHbqjAlu",
      "tint": "#ffffff",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "durationScene": false,
          "self": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "items": "",
          "aumenta": false,
          "custo": "5"
        }
      },
      "duration": {
        "startTime": null,
        "seconds": null,
        "combat": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": true,
      "_id": "PMpCLiKHg5S8mN9n",
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
      "name": "além do normal, criaturas afetadas também precisam fazer o teste de resistência se fizerem um ataque ou efeito à distância você. Se falharem, o efeito é desviado pela cúpula. Requer 5º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!DM4WIu4ilHbqjAlu.PMpCLiKHg5S8mN9n"
    }
  ],
  "folder": "Ct5AKRhHcovrfouB",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Uma c&uacute;pula de energia invis&iacute;vel o cerca, impedindo a aproxima&ccedil;&atilde;o de certas criaturas. Escolha um tipo de criatura (animais, esp&iacute;ritos, monstros...) ou uma ra&ccedil;a de humanoides (elfos, goblins, minotauros..). Criaturas do grupo escolhido que tentem se aproximar a menos de 3m de voc&ecirc; (ou seja, que tentem ficar adjacentes a voc&ecirc;) devem fazer um teste de Vontade. Se falharem, n&atilde;o conseguem, gastam a a&ccedil;&atilde;o e s&oacute; podem tentar novamente na rodada seguinte. Isso impede ataques corpo a corpo, mas n&atilde;o ataques ou outros efeitos &agrave; dist&acirc;ncia. Se voc&ecirc; tentar se aproximar al&eacute;m do limite de 3m, rompe a c&uacute;pula e a magia &eacute; dissipada.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 189",
    "ativacao": {
      "execucao": "action",
      "custo": 10,
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
    "alcance": "self",
    "alvo": "Você",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": "Vontade Anula"
    },
    "rolls": [],
    "tipo": "div",
    "circulo": "4",
    "preparada": false,
    "escola": "abj",
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
    "createdTime": 1664310461802,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!DM4WIu4ilHbqjAlu"
};