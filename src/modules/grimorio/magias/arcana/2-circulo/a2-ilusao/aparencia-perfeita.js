// Auto-generated spell data - Generated at build time
// Do not edit manually - Run 'pnpm build' to regenerate

module.exports = {
  "_id": "Yzvo9SdSZX94PPNl",
  "name": "Aparência Perfeita",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/aparencia-perfeita.webp",
  "effects": [
    {
      "_id": "eZYZ5KPkIH2a6fjO",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "1",
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
          "key": "alcance",
          "value": "Toque",
          "mode": 5,
          "priority": null
        },
        {
          "key": "alvo",
          "value": "1 humanoide",
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
      "origin": "Item.CRLvBrcWaySC2yYi",
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
      "name": "muda o alcance para toque e o alvo para 1 humanoide",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!Yzvo9SdSZX94PPNl.eZYZ5KPkIH2a6fjO"
    },
    {
      "_id": "AOxASZv1uaoyhTyD",
      "flags": {
        "tormenta20": {
          "onuse": false,
          "durationScene": true
        }
      },
      "changes": [
        {
          "key": "system.atributos.car.bonus",
          "mode": 5,
          "value": "5",
          "priority": null
        },
        {
          "key": "system.pericias.dipl.bonus",
          "mode": 2,
          "value": "5",
          "priority": null
        },
        {
          "key": "system.pericias.enga.bonus",
          "mode": 2,
          "value": "5",
          "priority": null
        }
      ],
      "disabled": false,
      "duration": {
        "startTime": null,
        "rounds": 999,
        "seconds": null,
        "combat": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "origin": "Item.CRLvBrcWaySC2yYi",
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
      "name": "Aparência Perfeita (Car 5)",
      "img": "systems/tormenta20/icons/magias/aparencia-perfeita.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!Yzvo9SdSZX94PPNl.AOxASZv1uaoyhTyD"
    },
    {
      "_id": "eRKzguN7fqoNtNS1",
      "flags": {
        "tormenta20": {
          "onuse": false,
          "durationScene": true
        }
      },
      "changes": [
        {
          "key": "system.atributos.car.bonus",
          "mode": 2,
          "value": "2",
          "priority": null
        },
        {
          "key": "system.pericias.dipl.bonus",
          "mode": 2,
          "value": "5",
          "priority": null
        },
        {
          "key": "system.pericias.enga.bonus",
          "mode": 2,
          "value": "5",
          "priority": null
        }
      ],
      "disabled": false,
      "duration": {
        "startTime": null,
        "rounds": 999,
        "seconds": null,
        "combat": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "origin": "Item.CRLvBrcWaySC2yYi",
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
      "name": "Aparência Perfeita (Car +2)",
      "img": "systems/tormenta20/icons/magias/aparencia-perfeita.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!Yzvo9SdSZX94PPNl.eRKzguN7fqoNtNS1"
    }
  ],
  "folder": "JF3PQ5Q84KVTjyxv",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Esta magia lhe concede um rosto idealizado, porte físico garboso, voz melodiosa e olhar sedutor, deixando-o mais atraente e confiável. Enquanto a magia estiver ativa, seu Carisma torna-se 20 (ou recebe um bônus de +4, caso seja 20 ou maior) e você recebe +5 nos testes de Diplomacia e Enganação. Quando a magia acaba, quaisquer observadores percebem a mudança e tendem a suspeitar de você. Da mesma maneira, pessoas que o viram sob o efeito da magia sentirão que \"algo está errado\" ao vê-lo em condições normais. Quando a cena acabar, você pode gastar os PM da magia novamente como uma ação livre para mantê-la ativa. Este efeito não fornece PV ou PM adicionais.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 180",
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
    "alcance": "pessoal",
    "alvo": "Você",
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
    "escola": "ilusao",
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
    "createdTime": 1664310462761,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!Yzvo9SdSZX94PPNl"
};
