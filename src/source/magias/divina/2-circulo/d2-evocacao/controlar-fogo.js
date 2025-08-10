module.exports = {
  "_id": "84SnbqMykNJVofQ6",
  "name": "Controlar Fogo",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/controlar-fogo.webp",
  "effects": [
    {
      "_id": "y1tVY8RMUDzu3PMH",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "1",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "duracao",
          "value": "sustentada",
          "mode": 5,
          "priority": null
        },
        {
          "key": "resistencia",
          "value": "Reflexos reduz à metade",
          "mode": 5,
          "priority": null
        },
        {
          "key": "dano",
          "value": "4d6",
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
      "origin": "Compendium.tormenta20.magias.84SnbqMykNJVofQ6",
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
      "name": "muda a duração para sustentada e a resistência para Reflexos reduz à metade. Em vez do normal, você deve escolher o seguinte efeito. Labaredas: a cada rodada, você pode gastar uma ação de movimento para projetar uma labareda, acertando um alvo em alcance curto a partir da chama. O alvo sofre 4d6 pontos de dano de fogo (Reflexos reduz à metade).",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!84SnbqMykNJVofQ6.y1tVY8RMUDzu3PMH"
    },
    {
      "_id": "J8dYv7TQT6Ze5Men",
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
          "value": "1d6",
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
      "origin": "Compendium.tormenta20.magias.84SnbqMykNJVofQ6",
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
      "name": "aumenta o dano em +1d6 (exceto Chamejar).",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!84SnbqMykNJVofQ6.J8dYv7TQT6Ze5Men"
    },
    {
      "_id": "X5dLBQOoFJK0wRUO",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "3",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "alvo",
          "value": "1 criatura composta principalmente por fogo",
          "mode": 5,
          "priority": null
        },
        {
          "key": "resistencia",
          "value": "Fortitude parcial",
          "mode": 5,
          "priority": null
        },
        {
          "key": "dano",
          "value": "5d6",
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
      "origin": "Compendium.tormenta20.magias.84SnbqMykNJVofQ6",
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
      "name": "muda o alvo para 1 criatura composta principalmente por fogo, lava ou magma (como um elemental do fogo) e a resistência para Fortitude parcial. Em vez do normal, se a criatura falhar no teste de resistência, é reduzida a 0 PV. Se passar, sofre 5d6 pontos de dano.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!84SnbqMykNJVofQ6.X5dLBQOoFJK0wRUO"
    },
    {
      "origin": "Item.84SnbqMykNJVofQ6",
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
      "_id": "9hWnE0ZmVscwpeqe",
      "changes": [
        {
          "key": "system.modificadores.dano.cac",
          "mode": 2,
          "value": "1d6",
          "priority": null
        },
        {
          "key": "system.modificadores.dano.ad",
          "mode": 2,
          "value": "1d6",
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
      "name": "Controlar Fogo (Chamejar)",
      "img": "systems/tormenta20/icons/magias/controlar-fogo.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!84SnbqMykNJVofQ6.9hWnE0ZmVscwpeqe"
    }
  ],
  "folder": "nUZzjRZCyl2p92SC",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; pode criar, moldar, mover ou extinguir chamas e emana&ccedil;&otilde;es de calor. Ao lan&ccedil;ar a magia, escolha um dos efeitos.</p>\n<p><em>Chamejar:</em> o alvo &eacute; armas escolhidas. Elas causam +1d6 de dano de fogo. Tamb&eacute;m afeta armas naturais e ataques desarmados.</p>\n<p><em>Esquentar:</em> o alvo &eacute; 1 objeto, que come&ccedil;a a esquentar. Ele sofre 1d6 pontos de dano de fogo por rodada e causa o mesmo dano a qualquer criatura que o esteja segurando ou vestindo. A crit&eacute;rio do mestre, o objeto ou a criatura vestindo-o tamb&eacute;m podem fica em chamas. Uma criatura pode gastar uma a&ccedil;&atilde;o completa para resfriar o objeto (jogando areia ou se jogando numa fonte de &aacute;gua pr&oacute;xima, por exemplo) e cancelar o efeito da magia.</p>\n<p><em>Extinguir:</em> o alvo &eacute; 1 chama de tamanho Grande ou menor, que &eacute; apagada. Isso cria uma nuvem de fuma&ccedil;a que ocupa uma esfera de 3m de raio centrada onde estava a chama. Dentro da fuma&ccedil;a, criaturas t&ecirc;m camuflagem leve.</p>\n<p><em>Modelar:</em> o alvo &eacute; 1 chama de tamanho Grande ou menor. A cada rodada, voc&ecirc; pode gastar uma a&ccedil;&atilde;o livre para moviment&aacute;-la 9m em qualquer dire&ccedil;&atilde;o. Se atravessar o espa&ccedil;o ocupado por uma criatura, causa 2d6 pontos de dano de fogo. Uma criatura s&oacute; pode receber dano dessa maneira uma vez por rodada.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 187",
    "ativacao": {
      "execucao": "action",
      "custo": 3,
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
    "alvo": "veja texto",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [
      {
        "name": "Dano",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "2d6",
            "fogo",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "div",
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
    "createdTime": 1664310461765,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!84SnbqMykNJVofQ6"
};