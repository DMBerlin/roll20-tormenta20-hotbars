module.exports = {
  "_id": "eB2JWvyIseIiSfR2",
  "name": "Palavra Primordial",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/palavra-primordial.webp",
  "effects": [
    {
      "_id": "VaWZMPwg38tEE3WI",
      "changes": [],
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
      "origin": "Item.LsXNnIjmOUAakYvc",
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
      "name": "Palavra Primordial",
      "img": "systems/tormenta20/icons/magias/palavra-primordial.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!eB2JWvyIseIiSfR2.VaWZMPwg38tEE3WI"
    }
  ],
  "folder": "hv6FaFj0nZooebLT",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Você pronuncia uma única palavra no idioma primordial da Criação - a linguagem que os deuses usaram para moldar a realidade. Esta palavra ressoa com poder cósmico, capaz de alterar a essência de uma criatura com menos níveis que você. O som ecoa através de dimensões, e mesmo criaturas surdas são afetadas, pois a palavra atinge diretamente a alma. Escolha um dos três efeitos devastadores: ATORDOAR: A palavra \"KETH\" paralisa a mente do alvo. A criatura fica Atordoada por 2d4 rodadas, completamente incapaz de agir. Se passar no teste de resistência de Vontade, fica apenas Desprevenida por 1d4 rodadas e torna-se imune ao efeito de atordoamento desta magia até o final da cena. CEGAR: A palavra \"NETH\" queima os olhos da criatura com luz primordial. O alvo fica permanentemente Cego, perdendo completamente a visão. Se passar no teste de resistência, fica apenas Ofuscado por 1d4 rodadas. A cegueira permanente só pode ser curada por magias de cura poderosas ou Desejo. MATAR: A palavra \"DEATH\" ordena que a alma se separe do corpo. A criatura morre instantaneamente, independentemente de seus pontos de vida atuais. Além do teste normal de Vontade, criaturas com mais da metade de seus PV têm direito a um teste adicional de Fortitude. Se passar em qualquer um dos testes, em vez de morrer, perde 10d8 pontos de vida e fica Sangrando. Esta é uma das magias mais temidas de todo o multiverso, pois representa o poder bruto da criação falando através de um mortal.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 200",
    "ativacao": {
      "execução": "ação",
      "custo": 15,
      "qtd": "",
      "condição": "",
      "special": ""
    },
    "duração": {
      "value": 0,
      "units": "special",
      "special": "instantânea ou veja texto"
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
    "alvo": "1 criatura com menos níveis que você",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": "Vontade parcial"
    },
    "rolls": [
      {
        "name": "Dano",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "10d8",
            "perda",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "uni",
    "circulo": "5",
    "preparada": false,
    "escola": "enc",
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
    "createdTime": 1664310462770,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!eB2JWvyIseIiSfR2"
};