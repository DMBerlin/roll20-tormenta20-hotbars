module.exports = {
  "_id": "mp25mjirts0eMdlQ",
  "name": "Aura Divina",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/aura-divina.webp",
  "effects": [
    {
      "_id": "6wLWvHT1aEd3fpoW",
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
          "durationScene": false
        }
      },
      "changes": [
        {
          "key": "system.attributes.defesa.bonus",
          "mode": 2,
          "value": "1",
          "priority": null
        },
        {
          "key": "system.pericias.refl.bonus",
          "mode": 2,
          "value": "1",
          "priority": null
        },
        {
          "key": "system.pericias.fort.bonus",
          "mode": 2,
          "value": "1",
          "priority": null
        },
        {
          "key": "system.pericias.vont.bonus",
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
      "origin": "Item.OROKwtjkajwKhNST",
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
      "name": "aumenta os bônus na Defesa e em testes de resistência em +1.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!mp25mjirts0eMdlQ.6wLWvHT1aEd3fpoW"
    },
    {
      "_id": "230TjFlqsBvcCJxJ",
      "changes": [
        {
          "key": "system.attributes.defesa.bonus",
          "mode": 2,
          "value": "5",
          "priority": null
        },
        {
          "key": "system.pericias.refl.bonus",
          "mode": 2,
          "value": "5",
          "priority": null
        },
        {
          "key": "system.pericias.fort.bonus",
          "mode": 2,
          "value": "5",
          "priority": null
        },
        {
          "key": "system.pericias.vont.bonus",
          "mode": 2,
          "value": "5",
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
      "origin": "Item.BRR2wEhjX8MoYqzF",
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
      "name": "Aura Divina",
      "img": "systems/tormenta20/icons/magias/aura-divina.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!mp25mjirts0eMdlQ.230TjFlqsBvcCJxJ"
    },
    {
      "origin": "Item.mp25mjirts0eMdlQ",
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
      "_id": "i60ABYfynfitGqaq",
      "changes": [
        {
          "key": "system.attributes.defesa.bonus",
          "mode": 2,
          "value": "10",
          "priority": null
        },
        {
          "key": "system.pericias.refl.bonus",
          "mode": 2,
          "value": "10",
          "priority": null
        },
        {
          "key": "system.pericias.fort.bonus",
          "mode": 2,
          "value": "10",
          "priority": null
        },
        {
          "key": "system.pericias.vont.bonus",
          "mode": 2,
          "value": "10",
          "priority": null
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
      "name": "Aura Divina para Devotos",
      "img": "systems/tormenta20/icons/magias/aura-divina.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!mp25mjirts0eMdlQ.i60ABYfynfitGqaq"
    }
  ],
  "folder": "mCDYVjEU9bEesaBu",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; se torna um condu&iacute;te da energia de sua divindade, emanando uma aura brilhante. Voc&ecirc; e aliados devotos da mesma divindade ficam imunes a encantamento e recebem +10 na Defesa e em testes de resist&ecirc;ncia. Aliados n&atilde;o devotos da mesma divindade recebem+5 na Defesa e em testes de resist&ecirc;ncia.</p>\n<p>Al&eacute;m disso, inimigos que entrem na &aacute;rea afetada devem fazer um teste de Vontade; em caso de falha, recebem uma condi&ccedil;&atilde;o a sua escolha entre <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.YpyVEwCbNVAfFLBm\" data-id=\"YpyVEwCbNVAfFLBm\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Esmorecido</a>, <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.AlTDv5dptSLGiZel\" data-id=\"AlTDv5dptSLGiZel\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Debilitado</a>ou <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.e8JmqkgvL3H26vbi\" data-id=\"e8JmqkgvL3H26vbi\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Lento</a> at&eacute; o fim da cena. O teste deve ser refeito cada vez que a criatura entrar novamente na &aacute;rea.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 182",
    "ativacao": {
      "execucao": "action",
      "custo": 15,
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
    "alvo": "",
    "area": "esfera com 9m de raio",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": "Vontade parcial"
    },
    "rolls": [],
    "tipo": "div",
    "circulo": "5",
    "preparada": false,
    "escola": "abj",
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
    "createdTime": 1664310462809,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!mp25mjirts0eMdlQ"
};