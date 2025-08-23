module.exports = {
  "_id": "rQ44Cz2gJdt86jFL",
  "name": "Toque da Morte",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/toque-da-morte.webp",
  "effects": [
    {
      "_id": "3Ivodo4341tW7cj8",
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
          "key": "alcance",
          "value": "curto",
          "mode": 5,
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
      "origin": "Compendium.tormenta20.magias.rQ44Cz2gJdt86jFL",
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
      "name": "muda o alcance para curto. Em vez de tocar no alvo, você dispara um raio púrpura da ponta de seu dedo indicador.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!rQ44Cz2gJdt86jFL.3Ivodo4341tW7cj8"
    },
    {
      "_id": "IDwvmjisl8U6TBXN",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "10",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "alcance",
          "value": "curto",
          "mode": 5,
          "priority": null
        },
        {
          "key": "alvo",
          "value": "inimigos no alcance",
          "mode": 5,
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
      "origin": "Compendium.tormenta20.magias.rQ44Cz2gJdt86jFL",
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
      "name": "muda o alcance para curto e o alvo para inimigos no alcance. Em vez de tocar no alvo, você dispara raios púrpuras da ponta de seus dedos.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!rQ44Cz2gJdt86jFL.IDwvmjisl8U6TBXN"
    }
  ],
  "folder": "P0UceOxL7WH3yyPb",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Esta é uma das magias necromânticas mais temidas, canalizando a própria essência da morte através de seu toque. Sua mão fica envolta em uma aura negra crepitante, emanando frio sobrenatural e o cheiro de túmulos antigos. Ao tocar uma criatura, você drena diretamente sua força vital. EFEITO NORMAL: A criatura sofre 10d8+10 pontos de dano de trevas conforme sua energia vital é sugada. Este dano representa o envelhecimento acelerado, o enfraquecimento dos órgãos vitais e a corrosão da alma. EFEITO LETAL: Se o alvo estiver com menos da metade de seus pontos de vida (já ferido ou enfraquecido), a magia torna-se potencialmente letal. Em vez de causar dano normal, a criatura deve fazer um teste de Fortitude contra a CD da magia. Se PASSAR no teste, sofre apenas o dano normal (10d8+10). Se FALHAR no teste, sua força vital é completamente drenada e seus pontos de vida são imediatamente reduzidos a -10, colocando-a em estado de morte iminente. NATUREZA SINISTRA: Esta magia não apenas fere - ela corrompe. Criaturas mortas por Toque da Morte frequentemente se levantam como mortos-vivos menores, e o local onde a magia foi lançada pode ficar permanentemente amaldiçoado. Usar esta magia repetidamente pode atrair a atenção de entidades das trevas ou causar pesadelos ao conjurador. A energia necromântica deixa uma marca sombria tanto no alvo quanto no usuário.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 209",
    "ativacao": {
      "custo": 15,
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
    "alcance": "toque",
    "alvo": "1 criatura",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": "Veja texto"
    },
    "rolls": [
      {
        "name": "Dano",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "10d8",
            "trevas",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "universal",
    "circulo": "5",
    "preparada": false,
    "escola": "necromancia",
    "chatFlavor": "",
    "origin": "",
    "tags": [],
    "chatGif": "",
    "duracao": {
      "value": 0,
      "units": "instantanea",
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
    "createdTime": 1664310462815,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!rQ44Cz2gJdt86jFL"
};