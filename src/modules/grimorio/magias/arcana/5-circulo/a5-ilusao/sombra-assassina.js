module.exports = {
  "_id": "6AMMtiyLKSidZrpA",
  "name": "Sombra Assassina",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/sombra-assassina.webp",
  "effects": [
    {
      "_id": "shmJTzRvsYujMHo4",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "10",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "alvo",
          "value": "criaturas escolhidas na área",
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
      "origin": "Compendium.tormenta20.magias.6AMMtiyLKSidZrpA",
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
      "name": "muda o alvo para criaturas escolhidas na área.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!6AMMtiyLKSidZrpA.shmJTzRvsYujMHo4"
    },
    {
      "_id": "alGmVcHB7Oa1aYAd",
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
      "origin": "Item.EzPyEyVNvht21VSo",
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
      "name": "Sombra Assassina",
      "img": "systems/tormenta20/icons/magias/sombra-assassina.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!6AMMtiyLKSidZrpA.alGmVcHB7Oa1aYAd"
    }
  ],
  "folder": "isWhPI19rDVeq0NV",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Esta magia cria uma duplicata ilusória do alvo na forma de uma silhueta, ligada a ele como se fosse uma manifestação sólida de sua própria sombra. A duplicata de sombras segue automaticamente o alvo. Sempre que o alvo faz uma ação hostil — fazer um ataque, usar uma habilidade, lançar uma magia — a sombra imediatamente realiza a mesma ação contra o alvo, usando as mesmas estatísticas e rolagens. A sombra pode ser atacada, tem as mesmas estatísticas do alvo e é destruída quando chega a 0 PV. Se o alvo passar no teste de resistência, a sombra desaparece no final do turno do alvo, depois de copiar sua ação dessa rodada.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 204",
    "ativacao": {
      "custo": 15,
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
      "atributo": "int",
      "bonus": 0,
      "txt": "Vontade parcial"
    },
    "rolls": [],
    "tipo": "arcana",
    "circulo": "5",
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
    "createdTime": 1664310461761,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!6AMMtiyLKSidZrpA"
};