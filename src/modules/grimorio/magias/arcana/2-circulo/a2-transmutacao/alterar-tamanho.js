module.exports = {
  "_id": "wXiJf2x05HqH5B6P",
  "name": "Alterar Tamanho",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/alterar-tamanho.webp",
  "effects": [
    {
      "_id": "HVWDInqh2swfM9NB",
      "flags": {
        "tormenta20": {
          "pessoal": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "aumenta": true,
          "custo": "1",
          "durationScene": false,
          "onuse": true
        }
      },
      "changes": [
        {
          "key": "alvo",
          "value": "1",
          "mode": 2,
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
      "origin": "Item.UjPqDyQosaR9StGX",
      "tint": "#ffffff",
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
      "name": "aumenta o número de alvos em +1.",
      "img": "icons/svg/aura.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!wXiJf2x05HqH5B6P.HVWDInqh2swfM9NB"
    },
    {
      "_id": "Os1QpQXkllq68WBr",
      "flags": {
        "tormenta20": {
          "pessoal": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "aumenta": false,
          "custo": "2",
          "durationScene": false,
          "onuse": true,
          "items": ""
        }
      },
      "changes": [
        {
          "key": "alcance",
          "mode": 5,
          "value": "Toque",
          "priority": 0
        },
        {
          "key": "alvo",
          "mode": 5,
          "value": "1 criatura",
          "priority": 0
        },
        {
          "key": "resistencia",
          "mode": 5,
          "value": "Fortitude anula",
          "priority": 0
        },
        {
          "key": "efeito",
          "mode": 2,
          "value": "Tamanho Aumentado",
          "priority": 0
        },
        {
          "key": "system.tracos.tamanho",
          "mode": 0,
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
      "origin": "Item.UjPqDyQosaR9StGX",
      "tint": "#ffffff",
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
      "name": "muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo aumenta uma categoria de tamanho (seu equipamento se ajusta ao novo tamanho). O alvo também recebe Força +2. Um alvo involuntário pode fazer um teste de Fortitude para negar o efeito.",
      "img": "icons/svg/aura.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!wXiJf2x05HqH5B6P.Os1QpQXkllq68WBr"
    },
    {
      "_id": "oP2xU4GWsFT7QZAa",
      "flags": {
        "tormenta20": {
          "pessoal": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "aumenta": false,
          "custo": "3",
          "durationScene": false,
          "onuse": true,
          "items": ""
        }
      },
      "changes": [
        {
          "key": "alcance",
          "mode": 5,
          "value": "Toque",
          "priority": 0
        },
        {
          "key": "alvo",
          "mode": 5,
          "value": "1 criatura",
          "priority": 0
        },
        {
          "key": "efeito",
          "mode": 5,
          "value": "Fortitude anula",
          "priority": 0
        },
        {
          "key": "system.tracos.tamanho",
          "mode": 0,
          "value": "-1",
          "priority": 0
        },
        {
          "key": "efeito",
          "mode": 2,
          "value": "Tamanho Reduzido",
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
      "origin": "Item.UjPqDyQosaR9StGX",
      "tint": "#ffffff",
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
      "name": "muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo diminui uma categoria de tamanho (seu equipamento se ajusta ao novo tamanho). O alvo também recebe Destreza +2. Um alvo involuntário pode fazer um teste de Fortitude para negar o efeito. Requer 3º círculo.",
      "img": "icons/svg/aura.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!wXiJf2x05HqH5B6P.oP2xU4GWsFT7QZAa"
    },
    {
      "_id": "uurtgE1BFd5Jt342",
      "flags": {
        "tormenta20": {
          "pessoal": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "aumenta": false,
          "custo": "7",
          "durationScene": false,
          "onuse": true
        }
      },
      "changes": [
        {
          "key": "alcance",
          "value": "Toque",
          "mode": 5,
          "priority": null
        },
        {
          "key": "alvo",
          "value": "1 criatura",
          "mode": 5,
          "priority": null
        },
        {
          "key": "resistencia",
          "value": "Fortitude Anula",
          "mode": 5,
          "priority": null
        },
        {
          "key": "efeito",
          "value": "Tamanho Minúsculo",
          "mode": 0,
          "priority": null
        },
        {
          "key": "duração",
          "value": "permanente",
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
      "origin": "Item.UjPqDyQosaR9StGX",
      "tint": "#ffffff",
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
      "name": "muda o alcance para toque, o alvo para 1 criatura, a duração para permanente e a resistência para Fortitude anula. Em vez do normal, se falhar na resistência o alvo e seu equipamento têm seu tamanho mudado para Minúsculo. O alvo também tem seu valor de Força reduzido a 1 e suas formas de deslocamento reduzidas a 3m. Requer 4o círculo.",
      "img": "icons/svg/aura.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!wXiJf2x05HqH5B6P.uurtgE1BFd5Jt342"
    },
    {
      "_id": "JOgtB6qBRsJDTWGr",
      "flags": {
        "tormenta20": {
          "durationScene": true,
          "onuse": false
        }
      },
      "changes": [
        {
          "key": "system.atributos.for.bonus",
          "mode": 2,
          "value": "2",
          "priority": null
        }
      ],
      "disabled": false,
      "duration": {
        "startTime": null,
        "seconds": 86400,
        "combat": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "origin": "Item.UjPqDyQosaR9StGX",
      "tint": "#ffffff",
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
      "name": "Tamanho Aumentado (Criatura)",
      "img": "systems/tormenta20/icons/magias/alterar-tamanho.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!wXiJf2x05HqH5B6P.JOgtB6qBRsJDTWGr"
    },
    {
      "_id": "HLrhcQDKmFvW5e0k",
      "flags": {
        "tormenta20": {
          "durationScene": true,
          "onuse": false
        }
      },
      "changes": [
        {
          "key": "system.atributos.des.bonus",
          "mode": 2,
          "value": "2",
          "priority": null
        }
      ],
      "disabled": false,
      "duration": {
        "startTime": null,
        "seconds": 86400,
        "combat": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "origin": "Item.UjPqDyQosaR9StGX",
      "tint": "#ffffff",
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
      "name": "Tamanho Reduzido (Criatura)",
      "img": "systems/tormenta20/icons/magias/alterar-tamanho.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!wXiJf2x05HqH5B6P.HLrhcQDKmFvW5e0k"
    },
    {
      "_id": "nEUrBHlV305ewLqE",
      "changes": [
        {
          "key": "system.atributos.for.bonus",
          "mode": 5,
          "value": "1",
          "priority": null
        },
        {
          "key": "system.attributes.movement.walk",
          "mode": 5,
          "value": "3",
          "priority": null
        },
        {
          "key": "system.attributes.movement.burrow",
          "mode": 5,
          "value": "3",
          "priority": null
        },
        {
          "key": "system.attributes.movement.climb",
          "mode": 5,
          "value": "3",
          "priority": null
        },
        {
          "key": "system.attributes.movement.fly",
          "mode": 5,
          "value": "3",
          "priority": null
        },
        {
          "key": "system.attributes.movement.swim",
          "mode": 5,
          "value": "3",
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
      "origin": "Item.Mx354sk6VPfY9hK8",
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
      "name": "Alterar Tamanho (Minúsculo)",
      "img": "systems/tormenta20/icons/magias/alterar-tamanho.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!wXiJf2x05HqH5B6P.nEUrBHlV305ewLqE"
    }
  ],
  "folder": "b44bXhHODNBi2LIx",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Esta magia aumenta ou diminui o tamanho de um item mundano em até três categorias (um objeto Enorme vira Pequeno, por exemplo). Você também pode mudar a consistência do item, deixando-o rígido como pedra ou flexível como seda (isso não altera sua RD ou PV, apenas suas propriedades físicas). Se lançar a magia num objeto de uma criatura involuntária, ela pode fazer um teste de Vontade para anulá-la.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 179",
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
    "alvo": "1 objeto",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "arcana",
    "circulo": "2",
    "preparada": false,
    "escola": "transmutacao",
    "chatFlavor": "",
    "origin": "",
    "tags": [],
    "chatGif": "",
    "duracao": {
      "value": 1,
      "units": "dia",
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
    "createdTime": 1664310462901,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!wXiJf2x05HqH5B6P"
};