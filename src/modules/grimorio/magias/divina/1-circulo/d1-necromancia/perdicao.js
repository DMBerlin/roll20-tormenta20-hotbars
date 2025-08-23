module.exports = {
  "_id": "ByYEiPmpotMg83gQ",
  "name": "Perdição",
  "type": "magia",
  "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curse.jpg",
  "effects": [
    {
      "_id": "mwaLI4ZQNS2pvBDX",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "2",
          "aumenta": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "durationScene": false,
          "items": ""
        }
      },
      "changes": [
        {
          "key": "system.modificadores.ataque.geral",
          "mode": 2,
          "value": "-1",
          "priority": 0
        },
        {
          "key": "system.modificadores.dano.geral",
          "mode": 2,
          "value": "-1",
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
      "origin": "Compendium.tormenta20.magias.ByYEiPmpotMg83gQ",
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
      "name": "aumenta as penalidades em -1, limitado pelo círculo máximo de magia que você pode lançar.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!ByYEiPmpotMg83gQ.mwaLI4ZQNS2pvBDX"
    },
    {
      "_id": "Nzx93ileTOT6jhFR",
      "changes": [
        {
          "key": "system.modificadores.ataque.geral",
          "mode": 2,
          "value": "-1",
          "priority": null
        },
        {
          "key": "system.modificadores.dano.geral",
          "mode": 2,
          "value": "-1",
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
      "origin": "Item.sMwaPJUeQEl5NK2f",
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
      "name": "Perdição - PENALIDADE",
      "img": "systems/tormenta20/icons/magias/perdicao.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!ByYEiPmpotMg83gQ.Nzx93ileTOT6jhFR"
    }
  ],
  "folder": "exKmpBOKJtRjgbsN",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Amaldiçoa os alvos, que recebem –1 em testes de ataque e rolagens de dano. Perdição anula Bênção.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 201",
    "ativacao": {
      "custo": 1,
      "qtd": "",
      "condição": "",
      "special": "",
      "execucao": "acao"
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
    "alcance": "curto",
    "alvo": "Criaturas Escolhidas",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": "nenhuma"
    },
    "rolls": [],
    "tipo": "div",
    "circulo": "1",
    "preparada": false,
    "escola": "necromancia",
    "chatFlavor": "",
    "origin": "",
    "tags": [],
    "chatGif": "",
    "duracao": {
      "value": 0,
      "units": "cena",
      "special": ""
    }
  },
  "ownership": {
    "default": 0
  },
  "_stats": {
    "systemId": "tormenta20",
    "systemVersion": "1.4.116",
    "coreVersion": "13.342",
    "createdTime": 1664310461780,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!ByYEiPmpotMg83gQ"
};