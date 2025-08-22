module.exports = {
  "_id": "IYB0YK1zLune1fs0",
  "name": "Tentáculos de Trevas",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/tentaculos-de-trevas.webp",
  "effects": [
    {
      "_id": "nQjQ8UmqV2tmL8Rr",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "2",
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
      "origin": "Compendium.tormenta20.magias.IYB0YK1zLune1fs0",
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
      "name": "aumenta o raio da área em +3m.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!IYB0YK1zLune1fs0.nQjQ8UmqV2tmL8Rr"
    },
    {
      "_id": "EoTSEUAxLwWL3ZCd",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
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
          "key": "dano",
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
      "origin": "Compendium.tormenta20.magias.IYB0YK1zLune1fs0",
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
      "name": "aumenta o dano dos tentáculos em +2d6.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!IYB0YK1zLune1fs0.EoTSEUAxLwWL3ZCd"
    }
  ],
  "folder": "sIwCZpQmdkUJpruy",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Um círculo de energias sombrias se abre no chão, de onde surgem tentáculos feitos de treva viscosa. Ao lançar a magia e no início de cada um de seus turnos, você faz um teste da manobra agarrar (usando seu bônus de Misticismo) contra cada criatura na área. Se você passar, a criatura é agarrada; se a vítima já está agarrada, é esmagada, sofrendo 4d6 pontos de dano de trevas. A área conta como terreno difícil. Os tentáculos são imunes a dano. Agarrado",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 209",
    "ativacao": {
      "execução": "ação",
      "custo": 6,
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
    "alcance": "medium",
    "alvo": "",
    "area": "esfera com 6m de raio",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [
      {
        "name": "Manobra Agarrar",
        "key": "ataque0",
        "type": "ataque",
        "parts": [
          [
            "1d20",
            "",
            ""
          ],
          [
            "mist",
            "int",
            ""
          ],
          [
            "",
            "",
            ""
          ]
        ],
        "versatil": ""
      },
      {
        "name": "Dano",
        "key": "dano1",
        "type": "dano",
        "parts": [
          [
            "4d6",
            "trevas",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "arcana",
    "circulo": "3",
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
    "createdTime": 1664310461817,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!IYB0YK1zLune1fs0"
};