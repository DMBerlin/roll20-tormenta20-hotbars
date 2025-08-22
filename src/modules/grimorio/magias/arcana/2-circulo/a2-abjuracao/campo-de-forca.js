module.exports = {
  "_id": "BmiLj15LQW7f76j8",
  "name": "Campo de Força",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/campo-de-forca.webp",
  "effects": [
    {
      "_id": "iQUVv5EzWkUJPrnt",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "1",
          "aumenta": false,
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
          "key": "execução",
          "mode": 5,
          "value": "reação",
          "priority": 0
        },
        {
          "key": "duração",
          "mode": 5,
          "value": "instantânea",
          "priority": 0
        },
        {
          "key": "system.tracos.resistencias.dano.bonus",
          "mode": 2,
          "value": "30",
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
      "origin": "Compendium.tormenta20.magias.BmiLj15LQW7f76j8",
      "transfer": false,
      "tint": "#ffffff",
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "tormenta20",
        "systemVersion": "1.5.007",
        "createdTime": null,
        "modifiedTime": 1751258396220,
        "lastModifiedBy": "t20builder000000",
        "compendiumSource": null,
        "duplicateSource": null,
        "exportSource": null
      },
      "name": "muda a execução para reação e a duração para instantânea. Em vez do normal, você recebe redução 30 contra o próximo dano que sofrer.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!BmiLj15LQW7f76j8.iQUVv5EzWkUJPrnt"
    },
    {
      "_id": "Ieo9ypzHiCAtS6rD",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "3",
          "aumenta": false,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": true,
          "consumable": false,
          "items": "",
          "durationScene": false,
          "equipment": false
        }
      },
      "changes": [
        {
          "key": "roll",
          "mode": 5,
          "value": "50",
          "priority": null
        },
        {
          "key": "system.tracos.resistencias.dano.bonus",
          "mode": 4,
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
      "origin": "Compendium.tormenta20.magias.BmiLj15LQW7f76j8",
      "transfer": false,
      "tint": "#ffffff",
      "_stats": {
        "coreVersion": "13.346",
        "systemId": "tormenta20",
        "systemVersion": "1.5.007",
        "createdTime": null,
        "modifiedTime": 1751258878112,
        "lastModifiedBy": "t20builder000000",
        "compendiumSource": null,
        "duplicateSource": null,
        "exportSource": null
      },
      "name": "muda os PV temporários ou a RD para 50. Requer 3º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!BmiLj15LQW7f76j8.Ieo9ypzHiCAtS6rD"
    },
    {
      "_id": "hr1Lz1KyIO7lwPSo",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "7",
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
          "value": "curto",
          "priority": 0
        },
        {
          "key": "alvo",
          "mode": 5,
          "value": "1 criatura ou objeto Enorme ou menor",
          "priority": 0
        },
        {
          "key": "condição",
          "mode": 0,
          "value": "imóvel",
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
      "origin": "Compendium.tormenta20.magias.BmiLj15LQW7f76j8",
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
      "name": "muda o alcance para curto, o alvo para outra criatura ou objeto Enorme ou menor e a duração para sustentada. Em vez do normal, cria uma esfera imóvel e tremeluzente ao redor do alvo. Nenhuma criatura, objeto ou efeito de dano pode passar pela esfera, embora criaturas possam respirar normalmente. Criaturas na área podem fazer um teste de Reflexos para evitar serem aprisionadas e sempre que você se concentrar. Requer 4º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!BmiLj15LQW7f76j8.hr1Lz1KyIO7lwPSo"
    },
    {
      "_id": "bog1XCm3Nvv1ObbY",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "9",
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
          "key": "duração",
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
      "origin": "Compendium.tormenta20.magias.BmiLj15LQW7f76j8",
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
      "name": "como o aprimoramento acima, mas tudo dentro da esfera fica praticamente sem peso. Uma vez por rodada, você pode gastar uma ação livre para flutuar a esfera e seu conteúdo 9m em uma direção. Requer 4º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!BmiLj15LQW7f76j8.bog1XCm3Nvv1ObbY"
    },
    {
      "origin": "Item.BmiLj15LQW7f76j8",
      "tint": "#ffffff",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "durationScene": false,
          "pessoal": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "equipment": false,
          "spell": false,
          "consumable": false,
          "items": "",
          "aumenta": false,
          "custo": "7"
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
      "_id": "AlAqFpfO6DJ3EOio",
      "changes": [
        {
          "key": "roll",
          "mode": 5,
          "value": "70",
          "priority": null
        },
        {
          "key": "system.tracos.resistencias.dano.bonus",
          "mode": 4,
          "value": "20",
          "priority": null
        }
      ],
      "transfer": false,
      "_stats": {
        "coreVersion": "13.346",
        "systemId": null,
        "systemVersion": null,
        "createdTime": null,
        "modifiedTime": 1751258907916,
        "lastModifiedBy": "t20builder000000",
        "compendiumSource": null,
        "duplicateSource": null,
        "exportSource": null
      },
      "name": "muda os PV temporários ou a RD para 70. Requer 4º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!BmiLj15LQW7f76j8.AlAqFpfO6DJ3EOio"
    },
    {
      "name": "Campo de Força",
      "img": "systems/tormenta20/icons/magias/campo-de-forca.webp",
      "origin": "Compendium.tormenta20.magias.Item.BmiLj15LQW7f76j8",
      "tint": "#ffffff",
      "flags": {
        "tormenta20": {
          "onuse": false,
          "durationScene": false,
          "pessoal": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "equipment": false,
          "spell": false,
          "consumable": false,
          "items": "",
          "aumenta": false,
          "custo": ""
        }
      },
      "duration": {
        "rounds": 99,
        "startTime": null,
        "combat": null,
        "seconds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "_id": "pH2HB5mqyDM6Q1vL",
      "type": "base",
      "system": {},
      "changes": [],
      "description": "",
      "transfer": false,
      "statuses": [],
      "sort": 0,
      "_stats": {
        "compendiumSource": null,
        "duplicateSource": null,
        "exportSource": null,
        "coreVersion": "13.346",
        "systemId": "tormenta20",
        "systemVersion": "1.5.007",
        "createdTime": 1751258333339,
        "modifiedTime": 1751258427917,
        "lastModifiedBy": "t20builder000000"
      },
      "_key": "!items.effects!BmiLj15LQW7f76j8.pH2HB5mqyDM6Q1vL"
    }
  ],
  "folder": "rc0d3aktZW2bKQQV",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Esta magia cria uma película protetora sobre você. Você recebe 30 pontos de vida temporários.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 183",
    "ativacao": {
      "execução": "ação",
      "custo": 3,
      "qtd": "",
      "condição": "",
      "special": ""
    },
    "duração": {
      "value": 0,
      "units": "cena",
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
    "alcance": "pessoal",
    "alvo": "Você",
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
            "30",
            "curatpv"
          ]
        ],
        "adaptavel": "",
        "versatil": ""
      }
    ],
    "tipo": "arcana",
    "circulo": "2",
    "preparada": false,
    "escola": "abjuração",
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
    "systemVersion": "1.5.007",
    "coreVersion": "13.346",
    "createdTime": 1664310461778,
    "modifiedTime": 1751258909994,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!BmiLj15LQW7f76j8"
};