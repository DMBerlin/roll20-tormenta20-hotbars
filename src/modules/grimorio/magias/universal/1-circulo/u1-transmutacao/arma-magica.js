module.exports = {
  "_id": "YDxLaaDhfXOkSfnF",
  "name": "Arma Mágica",
  "type": "magia",
  "img": "https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcane08.jpg",
  "effects": [
    {
      "_id": "CsxccmtGU6cmoFwn",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "2",
          "aumenta": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "durationScene": false,
          "items": "",
          "equipment": false
        }
      },
      "changes": [
        {
          "key": "ataque",
          "mode": 2,
          "value": "1",
          "priority": 0
        },
        {
          "key": "dano&magico",
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
      "origin": "Item.N0VolSuZqafQ4qdh",
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
      "name": "aumenta o bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!YDxLaaDhfXOkSfnF.CsxccmtGU6cmoFwn"
    },
    {
      "_id": "2B720KAGoTazOT5e",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "2",
          "aumenta": false,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "durationScene": false,
          "items": "",
          "equipment": false
        }
      },
      "changes": [
        {
          "key": "dano",
          "mode": 2,
          "value": "1d6",
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
      "origin": "Item.N0VolSuZqafQ4qdh",
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
      "name": "a arma passa a causar +1d6 de dano de ácido, eletricidade, fogo ou frio, escolhido no momento em que a magia é lançada. Este aprimoramento só pode ser usado uma vez.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!YDxLaaDhfXOkSfnF.2B720KAGoTazOT5e"
    },
    {
      "origin": "Item.YDxLaaDhfXOkSfnF",
      "tint": "#ffffff",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "durationScene": false,
          "pessoal": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "equipment": false,
          "spell": false,
          "consumable": false,
          "items": "",
          "aumenta": false,
          "custo": "5"
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
      "_id": "RZOdJ2cuNeEPfdQ7",
      "changes": [
        {
          "key": "dano",
          "mode": 2,
          "value": "2d6",
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
      "name": "muda o bônus de dano do aprimoramento elemental para +2d6. (Custo do aprimoramento incluso)",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!YDxLaaDhfXOkSfnF.RZOdJ2cuNeEPfdQ7"
    },
    {
      "origin": "Item.YDxLaaDhfXOkSfnF",
      "tint": "#ffffff",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "durationScene": true,
          "pessoal": false,
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
      "duration": {
        "rounds": 99,
        "startTime": null,
        "seconds": null,
        "combat": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": false,
      "_id": "Mz54PvtVdDzg7kl3",
      "changes": [
        {
          "key": "ataque",
          "mode": 2,
          "value": "1",
          "priority": 0
        },
        {
          "key": "dano&magico",
          "mode": 2,
          "value": "1",
          "priority": 0
        },
        {
          "key": "?.items.arma",
          "mode": 0,
          "value": "items.name",
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
      "name": "Arma Mágica",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!YDxLaaDhfXOkSfnF.Mz54PvtVdDzg7kl3"
    }
  ],
  "folder": "6ksljPhLT1OAcmt1",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "A arma fornece um bônus de +1 nos testes de ataque e rolagens de dano e é considerada mágica (não cumulativo com bônus de encantos). Caso você esteja empunhando a arma, pode usar seu atributo-chave de magias em vez do atributo original nos testes de ataque (não cumulativo com efeitos que somam este atributo).",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 181",
    "ativacao": {
      "execução": "ação",
      "custo": 1,
      "qtd": "",
      "condição": "",
      "special": ""
    },
    "duração": {
      "value": 0,
      "units": "cena",
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
    "alcance": "toque",
    "alvo": "1 arma empunhada",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "uni",
    "circulo": "1",
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
    "createdTime": 1664310462760,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!YDxLaaDhfXOkSfnF"
};