module.exports = {
  "_id": "vwpjRRdyR0iHI1TH",
  "name": "Imobilizar",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/imobilizar.webp",
  "effects": [
    {
      "_id": "fSTTlBXholQ6WJhC",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "1",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "alvo",
          "value": "1 espírito",
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
      "origin": "Compendium.tormenta20.magias.vwpjRRdyR0iHI1TH",
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
      "name": "muda o alvo para 1 espírito.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!vwpjRRdyR0iHI1TH.fSTTlBXholQ6WJhC"
    },
    {
      "_id": "czmZboVVWzbVD2om",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "2",
          "aumenta": true
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
      "origin": "Compendium.tormenta20.magias.vwpjRRdyR0iHI1TH",
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
      "name": "aumenta o número de alvos em +1.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!vwpjRRdyR0iHI1TH.czmZboVVWzbVD2om"
    },
    {
      "_id": "50yF4EBxvj43Q4M7",
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
          "key": "alvo",
          "value": "1 criatura",
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
      "origin": "Compendium.tormenta20.magias.vwpjRRdyR0iHI1TH",
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
      "name": "muda o alvo para 1 criatura. Requer 4º círculo",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!vwpjRRdyR0iHI1TH.50yF4EBxvj43Q4M7"
    },
    {
      "_id": "sjZWBk2nqII7nUdK",
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
      "origin": "Item.7wYcaxfLVXEccXBy",
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
      "name": "Imobilizar",
      "img": "systems/tormenta20/icons/magias/imobilizar.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!vwpjRRdyR0iHI1TH.sjZWBk2nqII7nUdK"
    }
  ],
  "folder": "45FESu225Wq8Qr1D",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Esta magia paralisa o alvo com energia mágica. Se falhar no teste de resistência, o alvo fica com a condição Paralisado (não pode realizar ações, fica indefeso e automaticamente falha em testes de Reflexos). Se passar no teste de resistência, em vez disso fica com a condição Lento (pode realizar apenas uma ação padrão ou de movimento por turno, não ambas). A cada rodada, o alvo pode gastar uma ação completa para fazer um novo teste de Vontade. Se passar, se liberta completamente do efeito.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 195",
    "ativacao": {
      "custo": 6,
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
    "alcance": "curto",
    "alvo": "1 humanóide ou animal",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": "Vontade parcial"
    },
    "rolls": [],
    "tipo": "universal",
    "circulo": "3",
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
    "createdTime": 1664310462900,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!vwpjRRdyR0iHI1TH"
};