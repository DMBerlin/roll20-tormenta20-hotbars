module.exports = {
  "_id": "6wASxSXLtFzQcy8V",
  "name": "Marca da Obediência",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/marca-da-obediencia.webp",
  "effects": [
    {
      "_id": "eoNg1u879WuUyEhh",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "3",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "duração",
          "value": "1 dia",
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
      "origin": "Compendium.tormenta20.magias.6wASxSXLtFzQcy8V",
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
      "name": "muda a duração para 1 dia. Se não estiver em combate, a criatura só pode fazer o teste de Vontade a cada hora. Requer 3º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!6wASxSXLtFzQcy8V.eoNg1u879WuUyEhh"
    },
    {
      "_id": "IlQu5F0jyHJGsMQP",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "3",
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
      "origin": "Compendium.tormenta20.magias.6wASxSXLtFzQcy8V",
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
      "name": "sempre que o alvo fizer o teste de Vontade e falhar, a marca causa 3d6 pontos de dano psíquico. Requer 3º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!6wASxSXLtFzQcy8V.IlQu5F0jyHJGsMQP"
    },
    {
      "_id": "suEpBiihgGNOV9iB",
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
      "origin": "Item.apxmgF9O1hN0rCX6",
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
      "name": "Marca da Obediência",
      "img": "systems/tormenta20/icons/magias/marca-da-obediencia.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!6wASxSXLtFzQcy8V.suEpBiihgGNOV9iB"
    }
  ],
  "folder": "Zh2mPxacQ6Y19ggW",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Você toca uma criatura, gravando uma marca mística no corpo dela enquanto profere uma ordem, como \"não ataque a mim ou meus aliados\", \"siga-me\" ou \"não saia desta sala\". A criatura deve seguir essa ordem, gastando todas as ações de seu turno para isso. A ordem não pode ser genérica demais (como \"ajude-me\", por exemplo), nem forçar o alvo a atos suicidas. A cada rodada, o alvo pode fazer um teste de Vontade. Se passar, a magia é dissipada.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 198",
    "ativacao": {
      "custo": 3,
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
      "txt": "Vontade anula"
    },
    "rolls": [],
    "tipo": "universal",
    "circulo": "2",
    "preparada": false,
    "escola": "encantamento",
    "chatFlavor": "",
    "origin": "",
    "tags": [],
    "chatGif": "",
    "duracao": {
      "value": 0,
      "units": "cena",
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
    "createdTime": 1664310461764,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!6wASxSXLtFzQcy8V"
};