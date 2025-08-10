module.exports = {
  "_id": "FYoig9D5AWpvNOHu",
  "name": "Erupção Glacial",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/erupcao-glacial.webp",
  "effects": [
    {
      "_id": "lhm7KAuzog8jrlAp",
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
          "durationScene": false,
          "equipment": false,
          "items": ""
        }
      },
      "changes": [
        {
          "key": "dano:corte",
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
      "origin": "Compendium.tormenta20.magias.FYoig9D5AWpvNOHu",
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
      "name": "aumenta o dano de frio em +2d6 e o dano de corte em +2d6.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!FYoig9D5AWpvNOHu.lhm7KAuzog8jrlAp"
    },
    {
      "_id": "cv48VdIt4zSGiUiy",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "4",
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
          "key": "area",
          "mode": 5,
          "value": "cilindro com 6m de raio",
          "priority": 0
        },
        {
          "key": "duracao",
          "mode": 5,
          "value": "sustentada",
          "priority": 0
        },
        {
          "key": "dano",
          "mode": 0,
          "value": "3d6",
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
      "origin": "Compendium.tormenta20.magias.FYoig9D5AWpvNOHu",
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
      "name": "muda a área para cilindro com 6m de raio e 6m de altura e a duração para sustentada. Em vez do normal, a magia cria uma tempestade de granizo que causa 3d6 pontos de dano de impacto e 3d6 pontos de dano de frio em todas as criaturas na área (sem teste de resistência). A tempestade fornece camuflagem leve as criaturas dentro dela e deixa o piso escorregadio. Piso escorregadio conta como terreno difícil e obriga criaturas na área a fazer testes de Acrobacia para equilíbrio (veja o Capítulo 2). Requer 4º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!FYoig9D5AWpvNOHu.cv48VdIt4zSGiUiy"
    }
  ],
  "folder": "S9YMO5Jyr0D1dsWK",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Estacas de gelo irrompem do ch&atilde;o. Criaturas na &aacute;rea sofrem 4d6 de dano de corte, 4d6 de dano de frio e ficam ca&iacute;das. Passar no teste de Reflexos evita o dano de corte e a queda. As estacas duram pela cena, o que torna a &aacute;rea afetada terreno dif&iacute;cil, e concedem cobertura leve para criaturas dentro da &aacute;rea ou atr&aacute;s dela. As estacas s&atilde;o destru&iacute;das caso sofram qualquer quantidade de dano por fogo m&aacute;gico.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 192",
    "ativacao": {
      "execucao": "action",
      "custo": 6,
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
    "alcance": "medium",
    "alvo": "",
    "area": "quadrado de 6m de lado",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": "Relfexos parcial"
    },
    "rolls": [
      {
        "name": "Dano",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "4d6",
            "corte",
            ""
          ],
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
    "circulo": "3",
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
    "createdTime": 1664310461809,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!FYoig9D5AWpvNOHu"
};