// Auto-generated spell data - Generated at build time
// Do not edit manually - Run 'pnpm build' to regenerate

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
          "pessoal": true,
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
          "key": "condição",
          "mode": 0,
          "value": "fatigado",
          "priority": 0
        },
        {
          "key": "condição",
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
          "pessoal": true,
          "custo": "2",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "condição",
          "value": "exausto",
          "mode": 0,
          "priority": null
        },
        {
          "key": "condição",
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
          "pessoal": true,
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
          "key": "condição",
          "mode": 0,
          "value": "inconsciente",
          "priority": 0
        },
        {
          "key": "condição",
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
      "value": "Você dispara um raio púrpura que drena as forças do alvo. Se falhar na resistência, o alvo fica Fatigado. Se passar, fica Vulnerável. Note que, como efeitos de magia não acumulam, lançar esta magia duas vezes contra o mesmo alvo não irá deixá-lo exausto.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 202",
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
    "alcance": "curto",
    "alvo": "1 criatura",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": "Fortitude parcial"
    },
    "rolls": [],
    "tipo": "arcana",
    "circulo": "1",
    "preparada": false,
    "escola": "necromancia",
    "chatFlavor": "",
    "origin": "",
    "tags": [],
    "chatGif": "",
    "duracao": {
      "value": 0,
      "units": "cena",
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
    "createdTime": 1664310462781,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!hikpz9g3jwJoTcRZ"
};
