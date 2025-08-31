// Auto-generated spell data - Generated at build time
// Do not edit manually - Run 'pnpm build' to regenerate

module.exports = {
  "_id": "G918QZzj9ln4mpMn",
  "name": "Alterar Destino",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/alterar-destino.webp",
  "effects": [
    {
      "origin": "Item.G918QZzj9ln4mpMn",
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
          "custo": ""
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
      "disabled": true,
      "_id": "l770NqNV1HNzuwXB",
      "changes": [
        {
          "key": "system.pericias.fort.bonus",
          "mode": 2,
          "value": "10",
          "priority": 0
        },
        {
          "key": "system.pericias.refl.bonus",
          "mode": 2,
          "value": "10",
          "priority": 0
        },
        {
          "key": "system.pericias.vont.bonus",
          "mode": 2,
          "value": "10",
          "priority": 0
        }
      ],
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
      "name": "Alterar Destino",
      "img": "systems/tormenta20/icons/magias/alterar-destino.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!G918QZzj9ln4mpMn.l770NqNV1HNzuwXB"
    },
    {
      "origin": "Item.G918QZzj9ln4mpMn",
      "tint": "#ffffff",
      "flags": {
        "tormenta20": {
          "onuse": false,
          "durationScene": false
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
      "_id": "9HWZmaknsooS766L",
      "changes": [
        {
          "key": "system.pericias.fort.bonus",
          "mode": 2,
          "value": "0",
          "priority": null
        },
        {
          "key": "system.pericias.refl.bonus",
          "mode": 2,
          "value": "0",
          "priority": null
        },
        {
          "key": "system.pericias.vont.bonus",
          "mode": 2,
          "value": "0",
          "priority": null
        }
      ],
      "transfer": true,
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
      "name": "Alterar Destino",
      "img": "systems/tormenta20/icons/magias/alterar-destino.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!G918QZzj9ln4mpMn.9HWZmaknsooS766L"
    }
  ],
  "folder": "SfUO0nNPwnoFC3gT",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Sua mente visualiza todas as possibilidades de um evento, permitindo a você escolher o melhor curso de ação. Você pode rolar novamente um teste de resistência com um bônus de +10 ou um inimigo deve rolar novamente um ataque contra você com uma penalidade de –10",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 179",
    "ativacao": {
      "custo": 15,
      "qtd": "",
      "condição": "",
      "special": "",
      "execucao": "reaction"
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
    "circulo": "5",
    "preparada": false,
    "escola": "abjuracao",
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
    "createdTime": 1664310461811,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!G918QZzj9ln4mpMn"
};
