module.exports = {
  "_id": "9XKOzJxNtF5dPH6B",
  "name": "Dificultar Detecção",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/dificultar-deteccao.webp",
  "effects": [
    {
      "_id": "N1XUZlveBOurRS2y",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "4",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "alvo",
          "value": "área de cubo de 9m",
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
      "origin": "Compendium.tormenta20.magias.9XKOzJxNtF5dPH6B",
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
      "name": "muda o alvo para área de cubo de 9m. Qualquer criatura ou objeto na área recebe o efeito da magia enquanto estiver dentro dela.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!9XKOzJxNtF5dPH6B.N1XUZlveBOurRS2y"
    },
    {
      "_id": "8z8al4xg3v8uNQPO",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "4",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "duração",
          "value": "1 semana",
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
      "origin": "Compendium.tormenta20.magias.9XKOzJxNtF5dPH6B",
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
      "name": "muda a duração para 1 semana.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!9XKOzJxNtF5dPH6B.8z8al4xg3v8uNQPO"
    },
    {
      "_id": "nxyVXCTsRxDz0wof",
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
      "origin": "Item.KZN947KWBE8dgWaA",
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
      "name": "Dificultar Detecção",
      "img": "systems/tormenta20/icons/magias/dificultar-deteccao.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!9XKOzJxNtF5dPH6B.nxyVXCTsRxDz0wof"
    }
  ],
  "folder": "uwdflCMp3DmBY55C",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Esta magia oculta a presença do alvo contra qualquer meio mágico de detecção, inclusive detectar magia. Um conjurador que lance uma magia de adivinhação para detectar a presença ou localização do alvo deve fazer um teste de Vontade. Se falhar, a magia não funciona, mas os PM são gastos mesmo assim. Se for lançada sobre uma criatura, Dificultar Detecção protege tanto a criatura quanto seu equipamento.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 190",
    "ativacao": {
      "custo": 6,
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
    "alvo": "1 criatura ou objeto",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "arcana",
    "circulo": "3",
    "preparada": false,
    "escola": "abjuracao",
    "chatFlavor": "",
    "origin": "",
    "tags": [],
    "chatGif": "",
    "duracao": {
      "value": 1,
      "units": "dia",
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
    "createdTime": 1664310461772,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!9XKOzJxNtF5dPH6B"
};