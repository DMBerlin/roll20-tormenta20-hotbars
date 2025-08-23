module.exports = {
  "_id": "t7gd203PbRh3HfgS",
  "name": "Alterar Memória",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/alterar-memoria.webp",
  "effects": [
    {
      "_id": "43Xr7frcuZwDiOmD",
      "flags": {
        "tormenta20": {
          "pessoal": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "aumenta": false,
          "custo": "2",
          "durationScene": false,
          "onuse": true,
          "items": "",
          "equipment": false
        }
      },
      "changes": [
        {
          "key": "alcance",
          "mode": 5,
          "value": "pessoal",
          "priority": 0
        },
        {
          "key": "area",
          "mode": 5,
          "value": "cone de 4,5m",
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
      "origin": "Item.x0FfeLySj5HBFbQ2",
      "tint": "#ffffff",
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
      "name": "muda o alcance para pessoal e o alvo para área cone de 4,5m.",
      "img": "icons/svg/aura.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!t7gd203PbRh3HfgS.43Xr7frcuZwDiOmD"
    },
    {
      "_id": "hfNuICnLPw71APCO",
      "flags": {
        "tormenta20": {
          "pessoal": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "aumenta": false,
          "custo": "5",
          "durationScene": false,
          "onuse": true
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
      "origin": "Item.x0FfeLySj5HBFbQ2",
      "tint": "#ffffff",
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
      "name": "você pode alterar ou apagar as memórias das últimas 24 horas.",
      "img": "icons/svg/aura.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!t7gd203PbRh3HfgS.hfNuICnLPw71APCO"
    },
    {
      "origin": "Item.t7gd203PbRh3HfgS",
      "tint": "#ffffff",
      "flags": {
        "tormenta20": {
          "onuse": false,
          "durationScene": true
        }
      },
      "duration": {
        "rounds": 1,
        "startTime": null,
        "seconds": null,
        "combat": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "_id": "9wvyYKww1DmeZ1Hv",
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
      "name": "Alterar Memória",
      "img": "systems/tormenta20/icons/magias/alterar-memoria.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!t7gd203PbRh3HfgS.9wvyYKww1DmeZ1Hv"
    }
  ],
  "folder": "PABI38J6SHGUIktW",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Você invade a mente do alvo e altera ou apaga suas memórias da última hora.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 179",
    "ativacao": {
      "custo": 10,
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
      "atributo": "int",
      "bonus": 0,
      "txt": "Vontade anula"
    },
    "rolls": [],
    "tipo": "arcana",
    "circulo": "4",
    "preparada": false,
    "escola": "encantamento",
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
    "createdTime": 1664310462824,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!t7gd203PbRh3HfgS"
};