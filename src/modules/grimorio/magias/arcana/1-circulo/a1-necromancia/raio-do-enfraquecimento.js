module.exports = {
  "_id": "hikpz9g3jwJoTcRZ",
  "name": "Raio do Enfraquecimento",
  "type": "magia",
  "img": "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_rayofweakness.jpg",
  "effects": [
    {
      "_id": "h9YSgDixO3JIQakZ",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "",
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
          "value": "Toque",
          "priority": 0
        },
        {
          "key": "resistencia",
          "mode": 5,
          "value": "Fortitude anula",
          "priority": 0
        },
        {
          "key": "condicao",
          "mode": 0,
          "value": "fatigado",
          "priority": 0
        },
        {
          "key": "condicao",
          "mode": 0,
          "value": "exausto",
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
      "origin": "Compendium.tormenta20.magias.hikpz9g3jwJoTcRZ",
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
      "name": "muda o alcance para toque e a resistência para Fortitude anula. Em vez do normal, sua mão emana um brilho púrpura e, ao tocar o alvo ele fica fatigado.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!hikpz9g3jwJoTcRZ.h9YSgDixO3JIQakZ"
    },
    {
      "_id": "Mxv1Ddofr1ILIZ7n",
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
          "key": "condicao",
          "value": "exausto",
          "mode": 0,
          "priority": null
        },
        {
          "key": "condicao",
          "value": "fatigado",
          "mode": 0,
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
      "origin": "Compendium.tormenta20.magias.hikpz9g3jwJoTcRZ",
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
      "name": "em vez do normal, se falhar na resistência o alvo fica exausto. Se passar, fica fatigado. Requer 2º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!hikpz9g3jwJoTcRZ.Mxv1Ddofr1ILIZ7n"
    },
    {
      "_id": "k2YDfSRA8tF21vZB",
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
          "spell": false,
          "consumable": false,
          "items": "",
          "durationScene": false,
          "equipment": false
        }
      },
      "changes": [
        {
          "key": "condicao",
          "mode": 0,
          "value": "inconsciente",
          "priority": 0
        },
        {
          "key": "condicao",
          "mode": 0,
          "value": "exausto",
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
      "origin": "Compendium.tormenta20.magias.hikpz9g3jwJoTcRZ",
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
      "name": "em vez do normal, se falhar na resistência o alvo fica exausto. Se passar, fica fatigado. Muda o alvo para criaturas escolhidas. Requer 3º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!hikpz9g3jwJoTcRZ.k2YDfSRA8tF21vZB"
    }
  ],
  "folder": "Bqm3t71TUGy5F5OI",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; dispara um raio p&uacute;rpura que drena as for&ccedil;as do alvo. Se falhar na resist&ecirc;ncia, o alvo fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.MCED18aEe4UFeEVf]{Fatigado}. Se passar, fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.iGWU5WVm57STW7am]{Vulner&aacute;vel}.</p>\n<p>Note que, como efeitos de magia n&atilde;o acumulam, lan&ccedil;ar esta magia duas vezes contra o mesmo alvo n&atilde;o ir&aacute; deix&aacute;-lo exausto.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 202",
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
    "alcance": "short",
    "alvo": "1 criatura",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": "Fortitude parcial"
    },
    "rolls": [],
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
    "createdTime": 1664310462781,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!hikpz9g3jwJoTcRZ"
};