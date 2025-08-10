module.exports = {
  "_id": "VtD27Z068vl78qH3",
  "name": "Oração",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/oracao.webp",
  "effects": [
    {
      "_id": "kn9WNxJzJkpiKMCl",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "2",
          "aumenta": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "durationScene": false,
          "items": ""
        }
      },
      "changes": [
        {
          "key": "system.modificadores.pericias.geral&bonus",
          "mode": 2,
          "value": "1",
          "priority": 0
        },
        {
          "key": "system.modificadores.dano.geral&bonus",
          "mode": 2,
          "value": "1",
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
      "origin": "Compendium.tormenta20.magias.VtD27Z068vl78qH3",
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
      "name": "aumenta os bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!VtD27Z068vl78qH3.kn9WNxJzJkpiKMCl"
    },
    {
      "origin": "Item.OqIQzjfKPkMdZ97v",
      "tint": "#ffffff",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "durationScene": false,
          "self": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "items": "",
          "aumenta": true,
          "custo": "2"
        }
      },
      "duration": {
        "startTime": null,
        "seconds": null,
        "combat": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": true,
      "_id": "2pW9FvhmoDxs7r5b",
      "changes": [
        {
          "key": "system.modificadores.pericias.geral&penalidade",
          "mode": 2,
          "value": "-1",
          "priority": 0
        },
        {
          "key": "system.modificadores.dano.geral&penalidade",
          "mode": 2,
          "value": "-1",
          "priority": 0
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
      "name": "aumenta as penalidades em –1, limitado pelo círculo máximo de magia que você pode lançar.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!VtD27Z068vl78qH3.2pW9FvhmoDxs7r5b"
    },
    {
      "origin": "Item.OqIQzjfKPkMdZ97v",
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
      "_id": "Ee6cpZ5dhIofP9KA",
      "changes": [
        {
          "key": "system.modificadores.pericias.geral&bonus",
          "mode": 2,
          "value": "2",
          "priority": null
        },
        {
          "key": "system.modificadores.dano.geral&bonus",
          "mode": 2,
          "value": "2",
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
      "name": "Oração (Bônus)",
      "img": "systems/tormenta20/icons/magias/oracao.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!VtD27Z068vl78qH3.Ee6cpZ5dhIofP9KA"
    },
    {
      "origin": "Item.OqIQzjfKPkMdZ97v",
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
      "_id": "c9JIzWUPMvXTWKVZ",
      "changes": [
        {
          "key": "system.modificadores.pericias.geral&penalidade",
          "mode": 2,
          "value": "-2",
          "priority": null
        },
        {
          "key": "system.modificadores.dano.geral&penalidade",
          "mode": 2,
          "value": "-2",
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
      "name": "Oração (Penalidade)",
      "img": "systems/tormenta20/icons/magias/oracao.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!VtD27Z068vl78qH3.c9JIzWUPMvXTWKVZ"
    },
    {
      "origin": "Item.OqIQzjfKPkMdZ97v",
      "tint": "#ffffff",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "durationScene": false,
          "self": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "items": "",
          "aumenta": false,
          "custo": "7"
        }
      },
      "duration": {
        "startTime": null,
        "seconds": null,
        "combat": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": true,
      "_id": "1pk6usBOjsubdCJm",
      "changes": [
        {
          "key": "alcance",
          "mode": 5,
          "value": "médio",
          "priority": 0
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
      "name": "muda o alcance para médio. Requer 3º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!VtD27Z068vl78qH3.1pk6usBOjsubdCJm"
    },
    {
      "origin": "Item.OqIQzjfKPkMdZ97v",
      "tint": "#ffffff",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "durationScene": false,
          "self": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "items": "",
          "aumenta": false,
          "custo": "12"
        }
      },
      "duration": {
        "startTime": null,
        "seconds": null,
        "combat": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": true,
      "_id": "d09qNlDhUHfuHlrU",
      "changes": [
        {
          "key": "duracao",
          "mode": 5,
          "value": "Cena",
          "priority": 0
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
      "name": "muda a duração para cena. Requer 4º círculo",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!VtD27Z068vl78qH3.d09qNlDhUHfuHlrU"
    }
  ],
  "folder": "eDRs6rp0uirDl74f",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; e todos os seus aliados no alcance recebem +2 em testes de per&iacute;cia e rolagens de dano, e todos os seus inimigos no alcance sofrem &ndash;2 em testes de per&iacute;cia e rolagens de dano. Esse efeito &eacute; cumulativo com outras magias.</p>\n<p>Componente Material: T$ 25por PM gastos em incensos ou outras oferendas.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 200",
    "ativacao": {
      "execucao": "action",
      "custo": 3,
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
      "type": "material",
      "target": "",
      "amount": 5,
      "mpMultiplier": true
    },
    "efeito": "",
    "alcance": "short",
    "alvo": "todas as criaturas (veja texto)",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "div",
    "circulo": "2",
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
    "createdTime": 1664310461916,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!VtD27Z068vl78qH3"
};