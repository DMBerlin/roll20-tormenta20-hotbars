module.exports = {
  "_id": "vUsntyToyQl1TuFZ",
  "name": "Armadura Arcana",
  "type": "magia",
  "img": "https://wow.zamimg.com/images/wow/icons/large/spell_magic_magearmor.jpg",
  "effects": [
    {
      "_id": "W1WgvYbVsADr5MNL",
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
          "durationScene": false,
          "equipment": false,
          "items": ""
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
          "key": "system.attributes.defesa.bonus",
          "mode": 2,
          "value": "0",
          "priority": 0
        },
        {
          "key": "duração",
          "mode": 5,
          "value": "1 turno",
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
      "origin": "Item.6tacmHJDvuMoxe8v",
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
      "name": "muda a execução para reação. Em vez do normal, você cria um escudo mágico que fornece +5 na Defesa contra o próximo ataque que sofrer até o fim do turno atual (cumulativo com o bônus fornecido pelo efeito básico desta magia e armaduras).",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!vUsntyToyQl1TuFZ.W1WgvYbVsADr5MNL"
    },
    {
      "_id": "cOarntwGdXunJRyH",
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
          "key": "system.attributes.defesa.bonus",
          "mode": 2,
          "value": "1",
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
      "origin": "Item.6tacmHJDvuMoxe8v",
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
      "name": "aumenta o bônus na Defesa em +1.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!vUsntyToyQl1TuFZ.cOarntwGdXunJRyH"
    },
    {
      "_id": "CRwrKNwVnkcuyYGR",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "2",
          "aumenta": false,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "durationScene": false,
          "equipment": false,
          "items": ""
        }
      },
      "changes": [
        {
          "key": "duração",
          "value": "1 dia",
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
      "origin": "Item.6tacmHJDvuMoxe8v",
      "tint": "#ffffff",
      "transfer": false,
      "_stats": {
        "coreVersion": "13.342",
        "systemId": "tormenta20",
        "systemVersion": "1.4.214",
        "createdTime": null,
        "modifiedTime": 1746424157730,
        "lastModifiedBy": "t20builder000000",
        "compendiumSource": null,
        "duplicateSource": null,
        "exportSource": null
      },
      "name": "muda a duração para 1 dia.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!vUsntyToyQl1TuFZ.CRwrKNwVnkcuyYGR"
    },
    {
      "_id": "DXFHELXQkzrakHqN",
      "flags": {
        "tormenta20": {
          "onuse": false,
          "durationScene": true
        }
      },
      "changes": [
        {
          "key": "system.attributes.defesa.bonus",
          "mode": 2,
          "value": "5",
          "priority": null
        }
      ],
      "disabled": false,
      "duration": {
        "startTime": null,
        "rounds": 999,
        "seconds": null,
        "combat": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "origin": "Item.6tacmHJDvuMoxe8v",
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
      "name": "Armadura Arcana",
      "img": "https://wow.zamimg.com/images/wow/icons/large/spell_magic_magearmor.jpg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!vUsntyToyQl1TuFZ.DXFHELXQkzrakHqN"
    }
  ],
  "folder": "OkpR6UdPNpR8mrad",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Esta magia cria uma película protetora invisível, mas tangível, fornecendo +5 na Defesa. Esse bônus é cumulativo com outras magias, mas não com bônus fornecido por armaduras.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 181",
    "ativacao": {
      "execução": "ação",
      "custo": 1,
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
    "rolls": [],
    "tipo": "arcana",
    "circulo": "1",
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
    "systemVersion": "1.4.214",
    "coreVersion": "13.344",
    "createdTime": 1664310462898,
    "modifiedTime": 1747933456682,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!vUsntyToyQl1TuFZ"
};