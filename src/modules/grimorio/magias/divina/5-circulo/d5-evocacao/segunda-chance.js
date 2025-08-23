module.exports = {
  "_id": "lGxJ1sVeGzOrEBjP",
  "name": "Segunda Chance",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/segunda-chance.webp",
  "effects": [
    {
      "_id": "I3oHcP1DmIn6LHYi",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "1",
          "aumenta": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "durationScene": false
        }
      },
      "changes": [
        {
          "key": "dano",
          "mode": 2,
          "value": "20",
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
      "origin": "Compendium.tormenta20.magias.lGxJ1sVeGzOrEBjP",
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
      "name": "aumenta a cura em +20 PV.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!lGxJ1sVeGzOrEBjP.I3oHcP1DmIn6LHYi"
    },
    {
      "_id": "1BVxrSXyv3h9o9X5",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "2",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "alcance",
          "value": "curto",
          "mode": 5,
          "priority": null
        },
        {
          "key": "alvo",
          "value": "até 5 criaturas",
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
      "origin": "Compendium.tormenta20.magias.lGxJ1sVeGzOrEBjP",
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
      "name": "muda o alcance para curto e o alvo para até 5 criaturas.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!lGxJ1sVeGzOrEBjP.1BVxrSXyv3h9o9X5"
    },
    {
      "_id": "Kg9fAT3uWVkFysDS",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "5",
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
          "key": "alvo",
          "mode": 5,
          "value": "uma criatura que tenha morrido há até uma rodada",
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
      "origin": "Compendium.tormenta20.magias.lGxJ1sVeGzOrEBjP",
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
      "name": "muda o alvo para uma criatura que tenha morrido há até uma rodada. Esta magia pode curá-la.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!lGxJ1sVeGzOrEBjP.Kg9fAT3uWVkFysDS"
    }
  ],
  "folder": "dlJgQYgCRB3w1cum",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Um brilho alaranjado, na forma de asas de fênix, emana do alvo. Ele recupera 200 pontos de vida e se cura de qualquer das seguintes condições: abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofuscado, paralisado, pasmo ou surdo.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 205",
    "ativacao": {
      "custo": 15,
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
    "alcance": "toque",
    "alvo": "1 criatura",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [
      {
        "name": "Cura",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "200",
            "curapv",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "div",
    "circulo": "5",
    "preparada": false,
    "escola": "evocacao",
    "chatFlavor": "",
    "origin": "",
    "tags": [],
    "chatGif": "",
    "duracao": {
      "value": 0,
      "units": "instantanea",
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
    "createdTime": 1664310462798,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!lGxJ1sVeGzOrEBjP"
};