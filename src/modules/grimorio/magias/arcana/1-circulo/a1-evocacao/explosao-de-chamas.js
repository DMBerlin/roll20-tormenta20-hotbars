module.exports = {
  "_id": "PXR8dRhDk8Z0mtck",
  "name": "Explosão de Chamas",
  "type": "magia",
  "img": "https://wow.zamimg.com/images/wow/icons/large/spell_fire_fireball.jpg",
  "effects": [
    {
      "_id": "TXHO0XUKJkSZGDqf",
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
          "key": "alcance",
          "value": "curto",
          "mode": 5,
          "priority": null
        },
        {
          "key": "area",
          "value": "alvo de 1 objeto",
          "mode": 5,
          "priority": null
        },
        {
          "key": "resistencia",
          "value": "Reflexos anula",
          "mode": 5,
          "priority": null
        },
        {
          "key": "condicao",
          "value": "em chamas",
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
      "origin": "Compendium.tormenta20.magias.PXR8dRhDk8Z0mtck",
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
      "name": "muda o alcance para curto, a área para alvo de 1 objeto e a resistência para Reflexos anula. Você gera uma pequena explosão que não causa dano mas pode acender uma vela, tocha ou fogueira. Também pode fazer um objeto inflamável com RD 0 (como uma corda ou pergaminho) ficar em chamas. Uma criatura em posse de um objeto pode evitar esse efeito se passar no teste de resistência.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!PXR8dRhDk8Z0mtck.TXHO0XUKJkSZGDqf"
    },
    {
      "_id": "vKShkoCm4FMcYevu",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "1",
          "aumenta": true
        }
      },
      "changes": [
        {
          "key": "dano",
          "value": "1d6",
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
      "origin": "Compendium.tormenta20.magias.PXR8dRhDk8Z0mtck",
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
      "name": "aumenta o dano em +1d6.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!PXR8dRhDk8Z0mtck.vKShkoCm4FMcYevu"
    },
    {
      "_id": "FTGTkuiyuKw6Bzyz",
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
          "key": "resistencia",
          "value": "Reflexos parcial",
          "mode": 5,
          "priority": null
        },
        {
          "key": "condicao",
          "value": "em chamas",
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
      "origin": "Compendium.tormenta20.magias.PXR8dRhDk8Z0mtck",
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
      "name": "muda a resistência para Reflexos parcial. Se passar, a criatura reduz o dano à metade; se falhar, fica em chamas (veja Condições, no Apêndice).",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!PXR8dRhDk8Z0mtck.FTGTkuiyuKw6Bzyz"
    }
  ],
  "folder": "KOlUvn9hRr5MhzaH",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Um leque de chamas irrompe de suas mãos, causando 2d6 pontos de dano de fogo às criaturas na área.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 193",
    "ativacao": {
      "execucao": "action",
      "custo": 1,
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
    "alcance": "self",
    "alvo": "",
    "area": "Cone de 6m",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": "Reflexos reduz à metade"
    },
    "rolls": [
      {
        "name": "Dano",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "2d6",
            "fogo",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "arc",
    "circulo": "1",
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
    "createdTime": 1664310461907,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!PXR8dRhDk8Z0mtck"
};