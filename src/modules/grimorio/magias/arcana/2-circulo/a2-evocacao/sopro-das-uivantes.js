module.exports = {
  "_id": "LFz30FCDJrLJwSrW",
  "name": "Sopro das Uivantes",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/sopro-das-uivantes.webp",
  "effects": [
    {
      "_id": "oCaGz5C6enchAOFG",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "2",
          "aumenta": true
        }
      },
      "changes": [
        {
          "key": "dano",
          "value": "2d6",
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
      "origin": "Compendium.tormenta20.magias.LFz30FCDJrLJwSrW",
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
      "name": "aumenta o dano de frio em +2d6.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!LFz30FCDJrLJwSrW.oCaGz5C6enchAOFG"
    },
    {
      "_id": "XASBNBVVLiS6cykc",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "3",
          "aumenta": true
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
      "origin": "Compendium.tormenta20.magias.LFz30FCDJrLJwSrW",
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
      "name": "aumenta o tamanho máximo das criaturas afetadas em uma categoria. Requer 3º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!LFz30FCDJrLJwSrW.XASBNBVVLiS6cykc"
    }
  ],
  "folder": "C4AaVHB8ALOWtksj",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; sopra ar g&eacute;lido que causa 4d6 pontos de dano de frio (Fortitude reduz &agrave; metade). Criaturas de tamanho M&eacute;dio ou menor que falhem na resist&ecirc;ncia ficam ca&iacute;das e s&atilde;o empurradas 6m na dire&ccedil;&atilde;o oposta. Se houver uma parede ou outro objeto s&oacute;lido (mas n&atilde;o uma criatura) no caminho, a criatura para de se mover, mas sofre +2d6 pontos de dano de impacto.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 207",
    "ativacao": {
      "execucao": "action",
      "custo": 3,
      "qtd": "",
      "condicao": "",
      "special": ""
    },
    "duracao": {
      "value": 0,
      "units": "inst",
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
    "alvo": "",
    "area": "cone de 9m",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": "Fortitude parcial"
    },
    "rolls": [
      {
        "name": "Dano",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "4d6",
            "frio",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "arc",
    "circulo": "2",
    "preparada": false,
    "escola": "evo",
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
    "createdTime": 1664310461826,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!LFz30FCDJrLJwSrW"
};