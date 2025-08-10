module.exports = {
  "_id": "1Yf9b8BviLCLISMc",
  "name": "Animar Objetos",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/animar-objetos.webp",
  "effects": [
    {
      "_id": "nvRCsxCslDKhoyVy",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "5",
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "aumenta": false,
          "durationScene": false
        }
      },
      "changes": [
        {
          "key": "duracao",
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
      "origin": "Item.XKoBewFS6ExI3ACX",
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
      "name": "muda a duração para permanente e adiciona componente material (prataria no valor de T$ 1.000). Você pode ter um máximo de objetos animados igual à metade do seu nível.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!1Yf9b8BviLCLISMc.nvRCsxCslDKhoyVy"
    },
    {
      "_id": "LVWr9OeGA8h0V5e0",
      "changes": [
        {
          "key": "dano",
          "mode": 2,
          "value": "1d6",
          "priority": 0
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
      "origin": "Item.jGRtWpsdNPtWdjfl",
      "transfer": false,
      "flags": {
        "tormenta20": {
          "onuse": true,
          "durationScene": true,
          "self": false,
          "attack": true,
          "skill": false,
          "ability": false,
          "power": false,
          "equipment": false,
          "spell": false,
          "consumable": false,
          "items": "",
          "aumenta": false,
          "custo": "0"
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
      "name": "Assassino Iniciante",
      "img": "systems/tormenta20/icons/magias/animar-objetos.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!1Yf9b8BviLCLISMc.LVWr9OeGA8h0V5e0"
    },
    {
      "_id": "EDkq7Fox5zvNJAF7",
      "changes": [
        {
          "key": "ataque",
          "mode": 2,
          "value": "1",
          "priority": 0
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
      "origin": "Item.jGRtWpsdNPtWdjfl",
      "transfer": false,
      "flags": {
        "tormenta20": {
          "onuse": true,
          "durationScene": true,
          "self": false,
          "attack": true,
          "skill": false,
          "ability": false,
          "power": false,
          "equipment": false,
          "spell": false,
          "consumable": false,
          "items": "",
          "aumenta": false,
          "custo": "0"
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
      "name": "Combatente Iniciante",
      "img": "systems/tormenta20/icons/magias/animar-objetos.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!1Yf9b8BviLCLISMc.EDkq7Fox5zvNJAF7"
    },
    {
      "_id": "SRhyjfOAY7qFcZUR",
      "changes": [
        {
          "key": "system.attributes.defesa.bonus",
          "mode": 2,
          "value": "2",
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
      "origin": "Item.jGRtWpsdNPtWdjfl",
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
      "name": "Guardião Iniciante",
      "img": "systems/tormenta20/icons/magias/animar-objetos.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!1Yf9b8BviLCLISMc.SRhyjfOAY7qFcZUR"
    },
    {
      "_id": "w19yGST3w1x59WvG",
      "changes": [
        {
          "key": "ataque",
          "mode": 2,
          "value": "2",
          "priority": 0
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
      "origin": "Item.jGRtWpsdNPtWdjfl",
      "transfer": false,
      "flags": {
        "tormenta20": {
          "onuse": true,
          "durationScene": true,
          "self": false,
          "attack": true,
          "skill": false,
          "ability": false,
          "power": false,
          "equipment": false,
          "spell": false,
          "consumable": false,
          "items": "",
          "aumenta": false,
          "custo": "0"
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
      "name": "Combatente Veterano",
      "img": "systems/tormenta20/icons/magias/animar-objetos.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!1Yf9b8BviLCLISMc.w19yGST3w1x59WvG"
    },
    {
      "_id": "aMocXzYNa7G9gtgI",
      "changes": [
        {
          "key": "dano",
          "mode": 2,
          "value": "1d12",
          "priority": 0
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
      "origin": "Item.jGRtWpsdNPtWdjfl",
      "transfer": false,
      "flags": {
        "tormenta20": {
          "onuse": true,
          "durationScene": true,
          "self": false,
          "attack": true,
          "skill": false,
          "ability": false,
          "power": false,
          "equipment": false,
          "spell": false,
          "consumable": false,
          "items": "",
          "aumenta": false,
          "custo": "0"
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
      "name": "Fortão Veterano",
      "img": "systems/tormenta20/icons/magias/animar-objetos.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!1Yf9b8BviLCLISMc.aMocXzYNa7G9gtgI"
    },
    {
      "_id": "2iXzddxfOPshryt4",
      "changes": [
        {
          "key": "system.attributes.defesa.bonus",
          "mode": 2,
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
      "origin": "Item.jGRtWpsdNPtWdjfl",
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
      "name": "Guardião Veterano",
      "img": "systems/tormenta20/icons/magias/animar-objetos.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!1Yf9b8BviLCLISMc.2iXzddxfOPshryt4"
    },
    {
      "_id": "uhkiNFv0IbTaQdxC",
      "changes": [
        {
          "key": "system.attibutes.movement.walk",
          "mode": 5,
          "value": "15",
          "priority": null
        },
        {
          "key": "system.modificadores.ataque.cac",
          "mode": 2,
          "value": "2",
          "priority": null
        },
        {
          "key": "system.modificadores.ataque.ad",
          "mode": 2,
          "value": "2",
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
      "origin": "Item.jGRtWpsdNPtWdjfl",
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
      "name": "Montaria (Cavalo) Veterana",
      "img": "systems/tormenta20/icons/magias/animar-objetos.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!1Yf9b8BviLCLISMc.uhkiNFv0IbTaQdxC"
    },
    {
      "_id": "tUeZTBdHGqgnRFVD",
      "changes": [
        {
          "key": "dano",
          "mode": 2,
          "value": "3d6",
          "priority": 0
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
      "origin": "Item.jGRtWpsdNPtWdjfl",
      "transfer": false,
      "flags": {
        "tormenta20": {
          "onuse": true,
          "durationScene": true,
          "self": false,
          "attack": true,
          "skill": false,
          "ability": false,
          "power": false,
          "equipment": false,
          "spell": false,
          "consumable": false,
          "items": "",
          "aumenta": false,
          "custo": "0"
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
      "name": "Fortão Mestre",
      "img": "systems/tormenta20/icons/magias/animar-objetos.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!1Yf9b8BviLCLISMc.tUeZTBdHGqgnRFVD"
    },
    {
      "_id": "c1i3PINi3DqPYjaT",
      "changes": [
        {
          "key": "system.attributes.defesa.bonus",
          "mode": 2,
          "value": "4",
          "priority": null
        },
        {
          "key": "system.pericias.refl.bonus",
          "mode": 2,
          "value": "2",
          "priority": null
        },
        {
          "key": "system.pericias.fort.bonus",
          "mode": 2,
          "value": "2",
          "priority": null
        },
        {
          "key": "system.pericias.vont.bonus",
          "mode": 2,
          "value": "2",
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
      "origin": "Item.jGRtWpsdNPtWdjfl",
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
      "name": "Guardião Mestre",
      "img": "systems/tormenta20/icons/magias/animar-objetos.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!1Yf9b8BviLCLISMc.c1i3PINi3DqPYjaT"
    },
    {
      "_id": "pYJA0nFOkvHfjPub",
      "changes": [
        {
          "key": "system.modificadores.ataque.cac",
          "mode": 2,
          "value": "2",
          "priority": null
        },
        {
          "key": "system.modificadores.ataque.ad",
          "mode": 2,
          "value": "2",
          "priority": null
        },
        {
          "key": "system.attributes.movement.walk",
          "mode": 5,
          "value": "15",
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
      "origin": "Item.jGRtWpsdNPtWdjfl",
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
      "name": "Montaria (Cavalo) Mestre",
      "img": "systems/tormenta20/icons/magias/animar-objetos.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!1Yf9b8BviLCLISMc.pYJA0nFOkvHfjPub"
    }
  ],
  "folder": "911fHy1VvyYmffKK",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; concede vida a objetos inanimados. Cada objeto se torna um parceiro sob seu controle. O tipo dele &eacute; escolhido da lista de tamanho e ele n&atilde;o conta em seu limite de parceiros. Com uma a&ccedil;&atilde;o de movimento, voc&ecirc; pode comandar mentalmente qualquer objeto animado dentro do alcance para que auxilie voc&ecirc; ou outra criatura. Outros usos criativos para os objetos ficam a cargo do mestre. Objetos animados s&atilde;o construtos com valores de For&ccedil;a, Destreza e PV de acordo com seu tamanho. Todos os outros atributos nulos, eles n&atilde;o t&ecirc;m valor de Defesa ou testes de resist&ecirc;ncia e falham automaticamente em qualquer teste oposto. Diferente de parceiros comuns, um objeto pode ser alvo de um ataque direto. Esta magia n&atilde;o afeta itens m&aacute;gicos, nem objetos que estejam sendo carregados por outra criatura.</p>\n<p>Esta magia n&atilde;o afeta itens m&aacute;gicos, nem objetos que estejam sendo carregados por outra criatura.</p>\n\n\n<p>Estat&iacute;sticas de objetos animados</p>\n<p>Min&uacute;sculo: For -3, Des 4, 5 PV; Assassino ou Combatente Iniciante.</p>\n<p>Pequeno: For -2, Des 2, 10 PV; Combatente ou Guardi&atilde;o Iniciante.</p>\n<p>M&eacute;dio: For 0, Des 1, 20 PV; Combatente ou Guardi&atilde;o Veterano.</p>\n<p>Grande: For 2, Des 0, 40 PV; Fort&atilde;o, Guardi&atilde;o ou Montaria (cavalo) Veterano.</p>\n<p>Enorme: For 4, Des -2, 60 PV; Fort&atilde;o, Guardi&atilde;o ou Montaria (cavalo) Mestre.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 179",
    "ativacao": {
      "execucao": "action",
      "custo": 10,
      "qtd": "",
      "condicao": "",
      "special": ""
    },
    "duracao": {
      "value": 0,
      "units": "scene",
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
    "alcance": "medium",
    "alvo": "Até 8 objetos Minúsculos ou Pequenos, 4 objetos Médios, 2 objetos Grandes ou 1 objeto Enorme",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "arc",
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
    "createdTime": 1664310461756,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!1Yf9b8BviLCLISMc"
};