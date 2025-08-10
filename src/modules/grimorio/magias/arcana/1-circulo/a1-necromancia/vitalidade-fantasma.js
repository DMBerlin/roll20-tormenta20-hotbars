module.exports = {
  "_id": "505PykOz1CmG2CU3",
  "name": "Vitalidade Fantasma",
  "type": "magia",
  "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_lifedrain.jpg",
  "effects": [
    {
      "_id": "8ky11WxusJyBeRiV",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "2",
          "aumenta": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "items": "",
          "durationScene": false,
          "equipment": false
        }
      },
      "changes": [
        {
          "key": "dano",
          "mode": 0,
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
      "origin": "Compendium.tormenta20.magias.505PykOz1CmG2CU3",
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
      "name": "aumenta os PV temporários recebidos em +1d10. Caso a magia cause dano, em vez disso aumenta o dano causado em +1d10.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!505PykOz1CmG2CU3.8ky11WxusJyBeRiV"
    },
    {
      "_id": "FQSR5xVzMWSV6cjs",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "5",
          "aumenta": false,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "equipment": false,
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
          "value": "área: esfera com 6m de raio centrada em você",
          "priority": 0
        },
        {
          "key": "resistencia",
          "mode": 5,
          "value": "Fortitude reduz à metade",
          "priority": 0
        },
        {
          "key": "dano",
          "mode": 0,
          "value": "1d8",
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
      "origin": "Compendium.tormenta20.magias.505PykOz1CmG2CU3",
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
      "name": "muda o alvo para área: esfera com 6m de raio centrada em você e a resistência para Fortitude reduz à metade. Em vez do normal, você suga energia das criaturas vivas na área, causando 1d10 pontos de dano de trevas e recebendo PV temporários iguais ao dano total causado. Os PV temporários desaparecem ao final da cena. Requer 2º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!505PykOz1CmG2CU3.FQSR5xVzMWSV6cjs"
    }
  ],
  "folder": "Bqm3t71TUGy5F5OI",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; suga energia vital da terra, recebendo 2d10 pontos de vida tempor&aacute;rios. Os PV tempor&aacute;rios desaparecem ao final da cena.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 211",
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
    "alvo": "você",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [
      {
        "name": "Pontos de Vida Temporários",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "2d10",
            "curatpv",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "arc",
    "circulo": "1",
    "preparada": false,
    "escola": "nec",
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
    "createdTime": 1664310461759,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!505PykOz1CmG2CU3"
};