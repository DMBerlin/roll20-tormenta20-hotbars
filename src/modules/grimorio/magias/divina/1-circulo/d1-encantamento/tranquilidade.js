module.exports = {
  "_id": "wuqyoslFlYe2zgCp",
  "name": "Tranquilidade",
  "type": "magia",
  "img": "https://wow.zamimg.com/images/wow/icons/large/spell_nature_tranquility.jpg",
  "effects": [
    {
      "_id": "NVI6QjnLauWHcDLx",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "1",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "alvo",
          "value": "1 criatura",
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
      "origin": "Compendium.tormenta20.magias.wuqyoslFlYe2zgCp",
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
      "name": "muda o alvo para 1 criatura.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!wuqyoslFlYe2zgCp.NVI6QjnLauWHcDLx"
    },
    {
      "_id": "HvFXSGLtaUOURcBd",
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
      "origin": "Compendium.tormenta20.magias.wuqyoslFlYe2zgCp",
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
      "name": "aumenta o número de alvos em +1.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!wuqyoslFlYe2zgCp.HvFXSGLtaUOURcBd"
    },
    {
      "_id": "M3sGod8S4s0hvu8A",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "5",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "alcance",
          "value": "médio",
          "mode": 5,
          "priority": null
        },
        {
          "key": "alvo",
          "value": "criaturas escolhidas",
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
      "origin": "Compendium.tormenta20.magias.wuqyoslFlYe2zgCp",
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
      "name": "muda o alcance para médio e o alvo para criaturas escolhidas. Requer 3º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!wuqyoslFlYe2zgCp.M3sGod8S4s0hvu8A"
    },
    {
      "_id": "Kb2Ft0450viFIuQr",
      "changes": [
        {
          "key": "system.modificadores.ataque.geral",
          "mode": 2,
          "value": "-2",
          "priority": null
        }
      ],
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
      "origin": "Item.h1DFW7RU5rbIA0oM",
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
      "name": "Alvo Afetado",
      "img": "systems/tormenta20/icons/magias/tranquilidade.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!wuqyoslFlYe2zgCp.Kb2Ft0450viFIuQr"
    }
  ],
  "folder": "rYuXjvRuDEXa7GNY",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; emana ondas de serenidade. Se falhar na resist&ecirc;ncia, o alvo tem sua atitude mudada para indiferente (veja a p&aacute;gina 259) e n&atilde;o pode atacar ou realizar qualquer a&ccedil;&atilde;o agressiva. Se passar, sofre &ndash;2 em testes de ataque. Qualquer a&ccedil;&atilde;o hostil contra o alvo ou seus aliados dissipa a magia e faz ele retornar &agrave; atitude que tinha antes (ou pior, de acordo com o mestre).</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 210",
    "ativacao": {
      "execucao": "action",
      "custo": 1,
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
    "alcance": "short",
    "alvo": "1 animal ou humanóide",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": "Vontade parcial"
    },
    "rolls": [],
    "tipo": "div",
    "circulo": "1",
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
    "createdTime": 1664310462904,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!wuqyoslFlYe2zgCp"
};