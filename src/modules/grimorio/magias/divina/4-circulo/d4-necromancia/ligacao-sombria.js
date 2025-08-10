module.exports = {
  "_id": "hJ7eYMyWFf0i1jBn",
  "name": "Ligação Sombria",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/ligacao-sombria.webp",
  "effects": [
    {
      "_id": "1CIyRJBmaEBhQQZl",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
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
      "origin": "Compendium.tormenta20.magias.hJ7eYMyWFf0i1jBn",
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
      "name": "além do normal, o alvo também pode morrer por perda de PV ou se você morrer (um teste de Fortitude anula a morte).",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!hJ7eYMyWFf0i1jBn.1CIyRJBmaEBhQQZl"
    },
    {
      "_id": "eutYN40NmTDMBA76",
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
      "origin": "Item.MaQpWm7kCs0Ns5jo",
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
      "name": "Ligaçao Sombria",
      "img": "systems/tormenta20/icons/magias/ligacao-sombria.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!hJ7eYMyWFf0i1jBn.eutYN40NmTDMBA76"
    }
  ],
  "folder": "4fqBodz9EQCtUpJF",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Cria uma conexão entre seu corpo e o da criatura alvo, deixando uma marca idêntica na pele de ambos. Enquanto a magia durar, sempre que você sofrer qualquer dano ou condição, o alvo desta magia deve fazer um teste de Fortitude; se falhar, sofre o mesmo dano que você ou adquire a mesma condição. A magia termina se o alvo chegar a 0 pontos de vida.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 196",
    "ativacao": {
      "execucao": "action",
      "custo": 10,
      "qtd": "",
      "condicao": "",
      "special": ""
    },
    "duracao": {
      "value": 1,
      "units": "day",
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
    "alcance": "long",
    "alvo": "1 criatura",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": "Fortitude anula"
    },
    "rolls": [],
    "tipo": "div",
    "circulo": "4",
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
    "createdTime": 1664310462781,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!hJ7eYMyWFf0i1jBn"
};