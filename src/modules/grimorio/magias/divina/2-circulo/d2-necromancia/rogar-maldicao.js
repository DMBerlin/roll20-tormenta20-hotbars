module.exports = {
  "_id": "fmGirvluTr0RMZvE",
  "name": "Rogar Maldição",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/rogar-maldicao.webp",
  "effects": [
    {
      "_id": "zovWBmCLN6OBfU6r",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "3",
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
      "origin": "Compendium.tormenta20.magias.fmGirvluTr0RMZvE",
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
      "name": "aumenta o número de efeitos que você pode escolher em +1. Requer 3º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!fmGirvluTr0RMZvE.zovWBmCLN6OBfU6r"
    },
    {
      "_id": "pytnNK29OELS0vL8",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "7",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "duração",
          "value": "permanente",
          "mode": 5,
          "priority": null
        },
        {
          "key": "resistencia",
          "value": "Fortitude parcial",
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
      "origin": "Compendium.tormenta20.magias.fmGirvluTr0RMZvE",
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
      "name": "muda a duração para permanente e resistência para Fortitude parcial. Se passar, a criatura ainda sofre os efeitos da maldição, mas por 1 rodada. Requer 4º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!fmGirvluTr0RMZvE.pytnNK29OELS0vL8"
    },
    {
      "_id": "VXbH5U30whHzR915",
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
      "origin": "Item.wBOSJGFrFzX79Lxz",
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
      "name": "Rogar Maldição",
      "img": "systems/tormenta20/icons/magias/rogar-maldicao.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!fmGirvluTr0RMZvE.VXbH5U30whHzR915"
    }
  ],
  "folder": "tsMBuCg4bWXLn3mQ",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Você entoa cânticos maléficos que amaldiçoam uma vítima, criando efeitos variados. Ao lançar a magia, escolha entre os seguintes. Debilidade: o alvo fica Esmorecido e não pode se comunicar ou lançar magias. Ainda reconhece seus aliados e pode segui-los e ajudá-los, mas sempre de maneira simplória. Doença: muda a duração para instantânea. O alvo contrai uma doença a sua escolha, que o afeta imediatamente (sem período de incubação). Fraqueza: o alvo fica Debilitadoe Lento. Isolamento: o alvo perde o uso de um de seus cinco sentidos a sua escolha. Se perder a visão, fica Cego. Se perder a audição, fica Surdo. Se perder o olfato ou paladar, não pode usar a habilidade faro. Se perder o tato, fica Caído e não pode se levantar. Você também pode inventar sua própria maldição, usando esses exemplos como sugestões, mas o mestre tem a palavra final sobre o efeito.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 204",
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
    "alcance": "curto",
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
    "circulo": "2",
    "preparada": false,
    "escola": "necromancia",
    "chatFlavor": "",
    "origin": "",
    "tags": [],
    "chatGif": "",
    "duracao": {
      "value": 0,
      "units": "sust",
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
    "createdTime": 1664310462777,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!fmGirvluTr0RMZvE"
};