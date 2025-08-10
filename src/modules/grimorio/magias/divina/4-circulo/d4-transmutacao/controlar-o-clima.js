module.exports = {
  "_id": "GSFSVe8XGZbzQ2H6",
  "name": "Controlar o Clima",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/controlar-clima.webp",
  "effects": [
    {
      "_id": "2Z6OCBkc9N3riped",
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
      "origin": "Item.BBsCJvv06oQA3sV0",
      "transfer": false,
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "aumenta": false,
          "custo": "1",
          "durationScene": false
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
      "name": "(Apenas Druidas): muda o raio da área para 3km e duração para 1d4 dias.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!GSFSVe8XGZbzQ2H6.2Z6OCBkc9N3riped"
    }
  ],
  "folder": "aJEhZBVN6YfokZ7w",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; muda o clima da &aacute;rea onde se encontra, podendo criar qualquer condi&ccedil;&atilde;o clim&aacute;tica: chuva, neve, ventos, n&eacute;voas... Veja o Cap&iacute;tulo 6: O Mestre para os efeitos em jogo do clima.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 187",
    "ativacao": {
      "execucao": "full",
      "custo": 10,
      "qtd": "",
      "condicao": "",
      "special": ""
    },
    "duracao": {
      "value": 0,
      "units": "special",
      "special": "4d12 horas"
    },
    "target": {
      "value": null,
      "width": null,
      "units": "",
      "type": ""
    },
    "range": {
      "value": 2,
      "units": ""
    },
    "consume": {
      "type": "",
      "target": "",
      "amount": null,
      "mpMultiplier": false
    },
    "efeito": "",
    "alcance": "km",
    "alvo": "",
    "area": "esfera com 2km de raio",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "div",
    "circulo": "4",
    "preparada": false,
    "escola": "tra",
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
    "createdTime": 1664310461812,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!GSFSVe8XGZbzQ2H6"
};