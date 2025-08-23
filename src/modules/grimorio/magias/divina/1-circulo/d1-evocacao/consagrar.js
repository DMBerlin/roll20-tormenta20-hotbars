module.exports = {
  "_id": "uAomjSrbq2JpCcz0",
  "name": "Consagrar",
  "type": "magia",
  "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_consecration.jpg",
  "effects": [
    {
      "_id": "zjkaNWLGzSmvwWLX",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "1",
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
      "origin": "Compendium.tormenta20.magias.uAomjSrbq2JpCcz0",
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
      "name": "além do normal, mortos-vivos na área sofrem -2 em testes e Defesa.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!uAomjSrbq2JpCcz0.zjkaNWLGzSmvwWLX"
    },
    {
      "_id": "TQzuS6ucn9K3jaZO",
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
          "key": "system.modificadores.pericias.geral",
          "mode": 2,
          "value": "-1",
          "priority": null
        },
        {
          "key": "system.attributes.defesa.bonus",
          "mode": 2,
          "value": "-1",
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
      "origin": "Compendium.tormenta20.magias.uAomjSrbq2JpCcz0",
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
      "name": "aumenta as penalidades para mortos-vivos em -1.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!uAomjSrbq2JpCcz0.TQzuS6ucn9K3jaZO"
    },
    {
      "_id": "6wnjMrwszCAfHMwN",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "9",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "execução",
          "value": "1 hora",
          "mode": 5,
          "priority": null
        },
        {
          "key": "duração",
          "value": "permanente",
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
      "origin": "Compendium.tormenta20.magias.uAomjSrbq2JpCcz0",
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
      "name": "muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!uAomjSrbq2JpCcz0.6wnjMrwszCAfHMwN"
    },
    {
      "_id": "m53luwH5h5g7ihnZ",
      "changes": [
        {
          "key": "system.modificadores.pericias.geral",
          "mode": 2,
          "value": "-2",
          "priority": null
        },
        {
          "key": "system.attributes.defesa.bonus",
          "mode": 2,
          "value": "-2",
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
      "origin": "Item.2AmeIlEpP4vtCqyF",
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
      "name": "Penalidade em Mortos-Vivos",
      "img": "systems/tormenta20/icons/magias/consagrar.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!uAomjSrbq2JpCcz0.m53luwH5h5g7ihnZ"
    }
  ],
  "folder": "uZDKASy3zyVwtvJP",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Você enche a área com energia positiva. Pontos de vida curados por efeitos de luz são maximizados dentro da área. Isso também afeta dano causado em mortos-vivos por esses efeitos. Por exemplo, Curar Ferimentos cura automaticamente 18 PV. Esta magia não pode ser lançada em uma área contendo um símbolo visível dedicado a uma divindade que não a sua. Consagrar anula Profanar.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 186",
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
    "alcance": "longo",
    "alvo": "",
    "area": "esfera com 9m de raio",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "div",
    "circulo": "1",
    "preparada": false,
    "escola": "evocacao",
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
    "createdTime": 1664310462830,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!uAomjSrbq2JpCcz0"
};