module.exports = {
  "_id": "GDlkTth7oEnb5d0Y",
  "name": "Visão Mística",
  "type": "magia",
  "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane07.jpg",
  "effects": [
    {
      "_id": "eCU8aGE8aijCkLQz",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "1",
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
          "key": "system.attributes.sentidos.value",
          "mode": 2,
          "value": "escuro",
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
      "origin": "Compendium.tormenta20.magias.GDlkTth7oEnb5d0Y",
      "transfer": false,
      "tint": "#ffffff",
      "_stats": {
        "coreVersion": "13.344",
        "systemId": null,
        "systemVersion": null,
        "createdTime": null,
        "modifiedTime": 1748126063607,
        "lastModifiedBy": "t20builder000000",
        "compendiumSource": null,
        "duplicateSource": null,
        "exportSource": null
      },
      "name": "recebe visão no escuro.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!GDlkTth7oEnb5d0Y.eCU8aGE8aijCkLQz"
    },
    {
      "_id": "H8kJ7pjbXZ5GHul1",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "2",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "duracao",
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
      "origin": "Compendium.tormenta20.magias.GDlkTth7oEnb5d0Y",
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
      "name": "muda a duração para 1 dia.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!GDlkTth7oEnb5d0Y.H8kJ7pjbXZ5GHul1"
    },
    {
      "_id": "h2HgQs3BgaLA36Iq",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "2",
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
      "origin": "Compendium.tormenta20.magias.GDlkTth7oEnb5d0Y",
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
      "name": "também pode enxergar objetos e criaturas invisíveis. Eles aparecem como formas translúcidas.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!GDlkTth7oEnb5d0Y.h2HgQs3BgaLA36Iq"
    },
    {
      "_id": "CbJYK47QeZh8jjXN",
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
      "origin": "Item.PCaHH8sXU1qHJvSm",
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
      "name": "Visão Mística",
      "img": "systems/tormenta20/icons/magias/visao-mistica.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!GDlkTth7oEnb5d0Y.CbJYK47QeZh8jjXN"
    }
  ],
  "folder": "OhlDY7Kb0SwIJ11P",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Seus olhos brilham com uma luz azul e passam a enxergar auras mágicas. Este efeito é similar ao uso de Misticismo para detectar magia, mas você detecta todas as auras mágicas em alcance médio e recebe todas as informações sobre elas sem gastar ações. Além disso, você pode gastar uma ação de movimento para descobrir se uma criatura que possa perceber em alcance médio é capaz de lançar magias e qual a aura gerada pelas magias de círculo mais alto que ela pode lançar.</p>",
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
      "units": "scene",
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
      "atributo": "sab",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "uni",
    "circulo": "1",
    "preparada": false,
    "escola": "adv",
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
    "createdTime": 1664310461811,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!GDlkTth7oEnb5d0Y"
};