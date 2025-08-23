module.exports = {
  "_id": "I7if4gOoxqXhdjcK",
  "name": "Chuva de Meteoros",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/chuva-de-meteoros.webp",
  "effects": [
    {
      "_id": "EiA6E64UonEUYa8o",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "2",
          "aumenta": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "durationScene": false,
          "items": "",
          "equipment": false
        }
      },
      "changes": [
        {
          "key": "dano:fogo",
          "mode": 0,
          "value": "2d6",
          "priority": 0
        },
        {
          "key": "dano:impacto",
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
      "origin": "Compendium.tormenta20.magias.I7if4gOoxqXhdjcK",
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
      "name": "aumenta o número de meteoros que atingem a área, o que aumenta o dano em +2d6 de impacto e +2d6 de fogo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!I7if4gOoxqXhdjcK.EiA6E64UonEUYa8o"
    }
  ],
  "folder": "qpQwhvyiq8EJgExj",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Esta é uma das magias de destruição em massa mais devastadoras conhecidas. Você rasga um portal no espaço e convoca uma chuva literal de meteoros flamejantes que descem dos céus como punhos dos deuses. O céu escurece momentaneamente antes de dezenas de rochas incandescentes, cada uma do tamanho de uma carroça, despencarem sobre a área alvo em uma exibição apocalíptica de poder. EFEITOS DEVASTADORES: Todas as criaturas na área de 18m x 18m sofrem 15d6 pontos de dano de impacto (pelo impacto brutal das rochas) e 15d6 pontos de dano de fogo (pelo calor extremo), além de ficarem Caídas e Agarradas pelos escombros pesados. Criaturas que passem no teste de Reflexos sofrem apenas metade do dano total e conseguem evitar ficar caídas e agarradas. EFEITOS DURADOUROS: A área fica permanentemente alterada - coberta de crateras fumegantes, escombros de meteoros e uma densa nuvem de poeira que concede camuflagem leve a todas as criaturas. Todo o terreno torna-se difícil devido aos destroços. Criaturas agarradas pelos escombros podem escapar gastando uma ação padrão e passando em um teste de Atletismo (CD igual à da magia). LIMITAÇÕES: Esta magia só pode ser lançada a céu aberto - tetos, cavernas ou estruturas cobertas impedem a convocação dos meteoros. A magia é tão poderosa que pode ser vista e ouvida a quilômetros de distância, atraindo atenção indesejada. Estruturas na área são automaticamente destruídas, e o terreno pode ficar permanentemente alterado.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 178",
    "ativacao": {
      "custo": 15,
      "qtd": "",
      "condição": "",
      "special": "",
      "execucao": "completa"
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
    "alcance": "longo",
    "alvo": "",
    "area": "quadrado com 18m de lado",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": "Reflexos parcial"
    },
    "rolls": [
      {
        "name": "Dano",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "15d6",
            "fogo",
            ""
          ],
          [
            "15d6",
            "impacto",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "arcana",
    "circulo": "5",
    "preparada": false,
    "escola": "convocacao",
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
    "createdTime": 1664310461817,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!I7if4gOoxqXhdjcK"
};