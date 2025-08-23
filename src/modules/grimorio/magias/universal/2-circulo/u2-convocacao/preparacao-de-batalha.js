module.exports = {
  "_id": "oMhqpjjWQzvHdIlc",
  "name": "Preparação de Batalha",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/preparacao-de-batalha.webp",
  "effects": [
    {
      "_id": "Stlr7Ll69XLIQaVi",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "1",
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
      "origin": "Compendium.tormenta20.magias.oMhqpjjWQzvHdIlc",
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
      "name": "Aumenta o número de alvos em dois e o custo adicional em 1 PM.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!oMhqpjjWQzvHdIlc.Stlr7Ll69XLIQaVi"
    }
  ],
  "folder": "QXjjLbseUkA81Kns",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Custo Adicional: penalidade de 1 PM Essa magia é muito utilizada por clérigos e bardos que não precisam (ou não podem) estar sempre com suas armas ou armaduras. A magia é lançada sobre até dois itens que você possua. A partir daí, em qualquer momento, você pode usar uma ação completa para convocar os itens, que aparecem sobre seu corpo e em suas mãos. O efeito é espalhafatoso, sendo praticamente impossível utilizá-lo sem chamar atenção. A magia funciona independentemente da distância dos itens, contanto que estejam no mesmo plano, mas termina se você perder a posse deles.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Guia de NPCs, p. 16 (1.2)",
    "ativacao": {
      "custo": 3,
      "qtd": "",
      "condição": "Custo Adicional: penalidade de 1 PM",
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
    "alvo": "até dois itens que você possua, entre armas, armaduras e escudos",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "universal",
    "circulo": "2",
    "preparada": false,
    "escola": "convocacao",
    "chatFlavor": "Custo adicional: penalidade de 1 PM.",
    "origin": "",
    "tags": [],
    "chatGif": "",
    "duracao": {
      "value": 0,
      "units": "especial",
      "special": "Permanente até ser descarregada"
    }
  },
  "ownership": {
    "default": 0
  },
  "_stats": {
    "systemId": "tormenta20",
    "systemVersion": "1.4.116",
    "coreVersion": "13.342",
    "createdTime": 1664310462811,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!oMhqpjjWQzvHdIlc"
};