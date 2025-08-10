module.exports = {
  "_id": "bjjhaGHKPoTOKtyT",
  "name": "Réquiem",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/requiem.webp",
  "effects": [
    {
      "_id": "iNvGcLd8arHs5jUJ",
      "changes": [
        {
          "key": "system.modificadores.pericias.geral",
          "mode": 2,
          "value": "-5",
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
      "origin": "Item.hIyrBaEfpVKQiI5i",
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
      "name": "Réquiem (Penalidade)",
      "img": "systems/tormenta20/icons/magias/requiem.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!bjjhaGHKPoTOKtyT.iNvGcLd8arHs5jUJ"
    }
  ],
  "folder": "isWhPI19rDVeq0NV",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Esta magia cria uma ilus&atilde;o particular para cada uma das criaturas que atingir. Enquanto a magia durar, no in&iacute;cio de cada um de seus turnos, cada criatura afetada deve fazer um teste de Vontade; se falhar, acha que n&atilde;o tomou as a&ccedil;&otilde;es que realmente fez no turno anterior e &eacute; obrigada a repetir as mesmas a&ccedil;&otilde;es neste turno, com uma penalidade cumulativa de &ndash;5 em todos os testes para cada vez que se repetir (a penalidade n&atilde;o se aplica ao teste de Vontade contra esta magia). Por exemplo, se a criatura se aproximou de um alvo e o atacou, precisa se aproximar desse mesmo alvo e atacar novamente. A a&ccedil;&atilde;o repetida consome PM e recursos normalmente e, caso exija um teste de resist&ecirc;ncia, qualquer alvo faz esse teste com um b&ocirc;nus igual ao da penalidade desta magia.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 204",
    "ativacao": {
      "execucao": "full",
      "custo": 15,
      "qtd": "",
      "condicao": "",
      "special": ""
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
    "efeito": "",
    "alcance": "short",
    "alvo": "criaturas escolhidas",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": "Vontade anula"
    },
    "rolls": [],
    "tipo": "arc",
    "circulo": "5",
    "preparada": false,
    "escola": "ilu",
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
    "createdTime": 1664310462766,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!bjjhaGHKPoTOKtyT"
};