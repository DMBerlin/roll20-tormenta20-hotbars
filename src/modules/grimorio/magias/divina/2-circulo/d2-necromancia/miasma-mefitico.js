module.exports = {
  "_id": "bs3SycPD7ENusrfH",
  "name": "Miasma Mefítico",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/miasma-mefitico.webp",
  "effects": [
    {
      "_id": "fyrWEjDhKy6MU5of",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "",
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
          "key": "alcance",
          "mode": 5,
          "value": "Toque",
          "priority": 0
        },
        {
          "key": "area",
          "mode": 5,
          "value": "alvo (1 criatura com 0 PV ou menos)",
          "priority": 0
        },
        {
          "key": "duração",
          "mode": 5,
          "value": "instantânea",
          "priority": 0
        },
        {
          "key": "resistencia",
          "mode": 5,
          "value": "Fortitude anula",
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
      "origin": "Compendium.tormenta20.magias.bs3SycPD7ENusrfH",
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
      "name": "muda o alcance para toque, a área para alvo (1 criatura com 0 PV ou menos), a duração para instantânea e a resistência para Fortitude anula. e adiciona componente material (pó de ônix no valor de T$ 10). Em vez do normal, você canaliza o Miasma contra uma vítima. Se falhar na resistência, ela morre e você recebe +2 na CD de suas magias por 1 dia. Se passar, fica imune a este truque por um dia.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!bs3SycPD7ENusrfH.fyrWEjDhKy6MU5of"
    },
    {
      "_id": "1VEcwX3EAmPtckY8",
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
          "durationScene": false
        }
      },
      "changes": [
        {
          "key": "dano",
          "mode": 0,
          "value": "1d6",
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
      "origin": "Compendium.tormenta20.magias.bs3SycPD7ENusrfH",
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
      "_key": "!items.effects!bs3SycPD7ENusrfH.1VEcwX3EAmPtckY8"
    },
    {
      "_id": "0jY8pxm5JZUViwRp",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
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
      "origin": "Compendium.tormenta20.magias.bs3SycPD7ENusrfH",
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
      "name": "muda o tipo do dano para trevas.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!bs3SycPD7ENusrfH.0jY8pxm5JZUViwRp"
    }
  ],
  "folder": "tsMBuCg4bWXLn3mQ",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "A área é coberta por emanações letais. Criaturas na área sofrem 5d6 pontos de dano de ácido e ficam Enjoado por 1 rodada. Se passarem na resistência, sofrem metade do dano e não ficam enjoadas.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 199",
    "ativacao": {
      "custo": 3,
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
    "alcance": "medio",
    "alvo": "",
    "area": "nuvem com 6m de raio",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": "Fortitude (veja texto)"
    },
    "rolls": [
      {
        "name": "Dano",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "5d6",
            "acido",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "div",
    "circulo": "2",
    "preparada": false,
    "escola": "necromancia",
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
    "createdTime": 1664310462767,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!bs3SycPD7ENusrfH"
};