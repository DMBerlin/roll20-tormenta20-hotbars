module.exports = {
  "_id": "irVr5pJiREIGsiUe",
  "name": "Heroísmo",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/heroismo.webp",
  "effects": [
    {
      "_id": "M1s8bLjkyjxCetDN",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "2",
          "aumenta": false,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "durationScene": false,
          "items": ""
        }
      },
      "changes": [
        {
          "key": "system.modificadores.ataque.cac",
          "mode": 2,
          "value": "2",
          "priority": 0
        },
        {
          "key": "system.modificadores.ataque.ad",
          "mode": 2,
          "value": "2",
          "priority": 0
        },
        {
          "key": "system.modificadores.dano.geral",
          "mode": 2,
          "value": "2",
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
      "origin": "Compendium.tormenta20.magias.irVr5pJiREIGsiUe",
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
      "name": "muda o bônus para +6.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!irVr5pJiREIGsiUe.M1s8bLjkyjxCetDN"
    },
    {
      "_id": "ShTxB5z4GbrqS05H",
      "changes": [
        {
          "key": "system.modificadores.ataque.cac",
          "mode": 2,
          "value": "4",
          "priority": null
        },
        {
          "key": "system.modificadores.ataque.ad",
          "mode": 2,
          "value": "4",
          "priority": null
        },
        {
          "key": "system.modificadores.dano.geral",
          "mode": 2,
          "value": "4",
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
      "origin": "Item.O8DXn4NTdhicWYho",
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
      "name": "Heroísmo",
      "img": "systems/tormenta20/icons/magias/heroismo.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!irVr5pJiREIGsiUe.ShTxB5z4GbrqS05H"
    }
  ],
  "folder": "ToOk7JFkymVR4FA6",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Esta magia imbui uma criatura com coragem e valentia. O alvo fica imune a medo e recebe 40 PV tempor&aacute;rios e +4 em testes de ataque e rolagens de dano contra o inimigo de maior ND na cena.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 196",
    "ativacao": {
      "execucao": "action",
      "custo": 6,
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
    "alcance": "touch",
    "alvo": "1 criatura",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "div",
    "circulo": "3",
    "preparada": false,
    "escola": "enc",
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
    "createdTime": 1664310462783,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!irVr5pJiREIGsiUe"
};