module.exports = {
  "_id": "oFPOvZqHlPTyj4XD",
  "name": "Desintegrar",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/desintegrar.webp",
  "effects": [
    {
      "_id": "qeqZ9ZhouJ48lEj9",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "4",
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
          "value": "2d12",
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
      "origin": "Compendium.tormenta20.magias.oFPOvZqHlPTyj4XD",
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
      "name": "aumenta o dano total em +2d12 e o dano mínimo em +1d12.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!oFPOvZqHlPTyj4XD.qeqZ9ZhouJ48lEj9"
    }
  ],
  "folder": "911fHy1VvyYmffKK",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; dispara um raio fino e esverdeado que causa 10d12 pontos de dano de ess&ecirc;ncia. Se o alvo passar no teste de resist&ecirc;ncia, em vez disso sofre 2d12 pontos de dano.</p>\n<p>Independentemente do resultado do teste de Fortitude, se os PV do alvo forem reduzidos a 0 ou menos, ele ser&aacute; completamente desintegrado, restando apenas p&oacute;.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 190",
    "ativacao": {
      "execução": "ação",
      "custo": 10,
      "qtd": "",
      "condição": "",
      "special": ""
    },
    "duração": {
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
    "alvo": "1 criatura ou objeto",
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
            "10d12",
            "essencia",
            ""
          ]
        ],
        "versatil": ""
      },
      {
        "name": "Dano parcial",
        "key": "dano1",
        "type": "dano",
        "parts": [
          [
            "2d12",
            "essencia",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "arcana",
    "circulo": "4",
    "preparada": false,
    "escola": "tra",
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
    "createdTime": 1664310462811,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!oFPOvZqHlPTyj4XD"
};