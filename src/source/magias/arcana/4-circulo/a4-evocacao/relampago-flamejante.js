module.exports = {
  "_id": "nTGtbkxrFRRY7fXc",
  "name": "Relâmpago Flamejante",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/relampago-flamejante.webp",
  "effects": [
    {
      "_id": "lXssXpcmsW7fnX1J",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "3",
          "aumenta": true,
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
          "key": "dano:fogo",
          "mode": 0,
          "value": "1d6",
          "priority": 0
        },
        {
          "key": "dano:eletricidade",
          "mode": 0,
          "value": "1d6",
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
      "origin": "Compendium.tormenta20.magias.nTGtbkxrFRRY7fXc",
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
      "name": "aumenta o dano das rajadas em +1d6.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!nTGtbkxrFRRY7fXc.lXssXpcmsW7fnX1J"
    },
    {
      "origin": "Item.nTGtbkxrFRRY7fXc",
      "tint": "#ffffff",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "durationScene": false,
          "self": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "items": "",
          "aumenta": true,
          "custo": "3",
          "equipment": false
        }
      },
      "duration": {
        "startTime": null,
        "seconds": null,
        "combat": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": true,
      "_id": "DRT8PCMyGBicG9Gb",
      "changes": [
        {
          "key": "dano",
          "mode": 0,
          "value": "2d12",
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
      "name": "aumenta o dano da rajada mista em +2d12.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!nTGtbkxrFRRY7fXc.DRT8PCMyGBicG9Gb"
    }
  ],
  "folder": "dxIW3dYs0c4ADJzO",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Esta é uma magia poderosa, desenvolvida por um metódico e impassível arquimago. Você invoca as energias elementais do fogo e do relâmpago, fazendo com que uma de suas mãos fique em chamas e a outra mão eletrificada. Pela duração da magia, você pode gastar uma ação de movimento para disparar uma bola de fogo (10d6 pontos de dano de fogo numa esfera com 6m de raio) ou um relâmpago (10d6 pontos de dano de eletricidade numa linha). Você também pode, como uma ação padrão, usar as duas mãos num ataque de energia mista (20d12 pontos de dano, metade de fogo e metade de eletricidade, numa esfera de 9m de raio). Você precisa estar com as duas mãos livres para invocar o efeito misto e isso consome toda a energia da magia, terminando-a imediatamente. Por se tratar de um ritual complexo, o tempo de execução dessa magia não pode ser reduzido.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 203",
    "ativacao": {
      "execucao": "special",
      "custo": 10,
      "qtd": "",
      "condicao": "",
      "special": "Duas Rodadas"
    },
    "duracao": {
      "value": 0,
      "units": "sust",
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
    "efeito": "bolas de fogo e relâmpagos",
    "alcance": "medium",
    "alvo": "",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": "Reflexos reduz à metade"
    },
    "rolls": [
      {
        "name": "Dano de Fogo/Elétrico",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "10d6",
            "fogo",
            ""
          ],
          [
            "10d6",
            "eletricidade",
            ""
          ]
        ]
      },
      {
        "name": "Dano Misto",
        "key": "dano1",
        "type": "dano",
        "parts": [
          [
            "20d12",
            "dano",
            ""
          ]
        ]
      }
    ],
    "tipo": "arc",
    "circulo": "4",
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
    "systemVersion": "1.4.201",
    "coreVersion": "13.342",
    "createdTime": 1664310462810,
    "modifiedTime": 1690153695052,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!nTGtbkxrFRRY7fXc"
};