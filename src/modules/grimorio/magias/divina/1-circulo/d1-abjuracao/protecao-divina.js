module.exports = {
  "_id": "zfFIZLWoyI32pMfl",
  "name": "Proteção Divina",
  "type": "magia",
  "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_divineprotection.jpg",
  "effects": [
    {
      "_id": "7FKquN1OyrnomRVC",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "2",
          "aumenta": true,
          "skill": false,
          "attack": false,
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
          "key": "system.pericias.fort.bonus",
          "mode": 2,
          "value": "1",
          "priority": 0
        },
        {
          "key": "system.pericias.refl.bonus",
          "mode": 2,
          "value": "1",
          "priority": 0
        },
        {
          "key": "system.pericias.vont.bonus",
          "mode": 2,
          "value": "1",
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
      "origin": "Compendium.tormenta20.magias.zfFIZLWoyI32pMfl",
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
      "name": "aumenta o bônus concedido em +1.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!zfFIZLWoyI32pMfl.7FKquN1OyrnomRVC"
    },
    {
      "_id": "s2Co8Gxq7NXHauUM",
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
          "items": "",
          "durationScene": false
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
          "key": "alcance",
          "mode": 5,
          "value": "curto",
          "priority": 0
        },
        {
          "key": "duração",
          "mode": 5,
          "value": "1 rodada",
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
      "origin": "Compendium.tormenta20.magias.zfFIZLWoyI32pMfl",
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
      "name": "muda a execução para reação, o alcance para curto e a duração para 1 rodada. Em vez do normal, o alvo recebe +5 no próximo teste de resistência que fizer.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!zfFIZLWoyI32pMfl.s2Co8Gxq7NXHauUM"
    },
    {
      "_id": "GWawsOeKpln3gxxn",
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
          "key": "area",
          "mode": 5,
          "value": "círculo com 3m de raio",
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
      "origin": "Compendium.tormenta20.magias.zfFIZLWoyI32pMfl",
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
      "name": "muda o alvo para área de esfera com 3m de raio. Todos os aliados dentro da esfera recebem o bônus da magia. Requer 2º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!zfFIZLWoyI32pMfl.GWawsOeKpln3gxxn"
    },
    {
      "_id": "ixLPCV65hpLSuxc1",
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
          "key": "system.tracos.ic.value",
          "mode": 2,
          "value": "medo",
          "priority": 0
        },
        {
          "key": "system.tracos.ic.value",
          "mode": 2,
          "value": "mental",
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
      "origin": "Compendium.tormenta20.magias.zfFIZLWoyI32pMfl",
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
      "name": "também torna o alvo imune a efeitos mentais e de medo. Requer 3º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!zfFIZLWoyI32pMfl.ixLPCV65hpLSuxc1"
    },
    {
      "_id": "imwY3XLCzTPuADV7",
      "changes": [
        {
          "key": "system.pericias.fort.bonus",
          "mode": 2,
          "value": "2",
          "priority": null
        },
        {
          "key": "system.pericias.refl.bonus",
          "mode": 2,
          "value": "2",
          "priority": null
        },
        {
          "key": "system.pericias.vont.bonus",
          "mode": 2,
          "value": "2",
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
      "origin": "Item.dEcKsALEP8soUECG",
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
      "name": "Proteção Divina",
      "img": "systems/tormenta20/icons/magias/protecao-divina.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!zfFIZLWoyI32pMfl.imwY3XLCzTPuADV7"
    }
  ],
  "folder": "XbfWNZNCUbSVLyRp",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Esta magia cria uma barreira mística invisível que fornece ao alvo +2 em testes de resistência.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 202",
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
    "alcance": "toque",
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
    "systemVersion": "1.4.116",
    "coreVersion": "13.342",
    "createdTime": 1664310462909,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!zfFIZLWoyI32pMfl"
};