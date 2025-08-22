module.exports = {
  "_id": "s6QK5uGb7SBlVXMp",
  "name": "Barragem Elemental",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/barragem-elemental.webp",
  "effects": [
    {
      "_id": "fymYz7rNSFuVXYmd",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "5",
          "aumenta": true,
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
          "key": "dano:acido",
          "mode": 0,
          "value": "2d6",
          "priority": 0
        },
        {
          "key": "dano:eletricidade",
          "mode": 0,
          "value": "2d6",
          "priority": 0
        },
        {
          "key": "dano:fogo",
          "mode": 0,
          "value": "2d6",
          "priority": 0
        },
        {
          "key": "dano:frio",
          "mode": 0,
          "value": "2d6",
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
      "origin": "Compendium.tormenta20.magias.s6QK5uGb7SBlVXMp",
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
      "name": "aumenta o dano de cada esfera em +2d6.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!s6QK5uGb7SBlVXMp.fymYz7rNSFuVXYmd"
    },
    {
      "_id": "MzegepIlmQDbaq82",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "5",
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
      "origin": "Compendium.tormenta20.magias.s6QK5uGb7SBlVXMp",
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
      "name": "muda o tipo de dano de todas as esferas para essência (mas elas ainda causam os outros efeitos como se seu tipo de dano não mudasse).",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!s6QK5uGb7SBlVXMp.MzegepIlmQDbaq82"
    }
  ],
  "folder": "S9r2zpzj6Mm6KnQl",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Criada por um arquimago, esta magia produz quatro esferas elementais (ácido, eletricidade, fogo e frio) que voam até um ponto a sua escolha. Quando atingem o ponto escolhido, explodem causando 6d6 pontos de dano do seu respectivo tipo numa área com 12m de raio. Um teste de Reflexos reduz o dano à metade. Você pode mirar cada esfera em uma criatura ou ponto diferente. Uma criatura ao alcance da explosão de mais de uma esfera deve fazer um teste de resistência para cada uma. Além disso, as esferas causam os seguintes efeitos em criaturas que falharem em seus respectivos testes de resistência: • ácido: Vulnerável até o fim da cena. • Elétrica: Atordoado por uma rodada. (apenas uma vez por cena). • Fogo: Em Chamas. • Frio: Lentoaté o fim da cena.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 182",
    "ativacao": {
      "execução": "ação",
      "custo": 15,
      "qtd": "",
      "condição": "",
      "special": ""
    },
    "duração": {
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
    "efeito": "4 esferas elementais",
    "alcance": "long",
    "alvo": "",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": "Reflexos parcial"
    },
    "rolls": [
      {
        "name": "Ácido",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "6d6",
            "acido",
            ""
          ],
          [
            "6d6",
            "eletricidade",
            ""
          ],
          [
            "6d6",
            "fogo",
            ""
          ],
          [
            "6d6",
            "frio",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "arcana",
    "circulo": "5",
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
    "createdTime": 1664310462817,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!s6QK5uGb7SBlVXMp"
};