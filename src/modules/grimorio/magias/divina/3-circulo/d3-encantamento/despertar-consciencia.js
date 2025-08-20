module.exports = {
  "_id": "sw6TTkiY2ycfZefD",
  "name": "Despertar Consciência",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/despertar-consciencia.webp",
  "effects": [
    {
      "_id": "sF7igOGJWfq5j3Zb",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "4",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "alvo",
          "value": "1 escultura mundana inanimada",
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
      "origin": "Compendium.tormenta20.magias.sw6TTkiY2ycfZefD",
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
      "name": "muda o alvo para 1 escultura mundana inanimada. Além do normal, o alvo tem as mesmas características de um construto.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!sw6TTkiY2ycfZefD.sF7igOGJWfq5j3Zb"
    },
    {
      "_id": "f958aTtmx3LyPrPi",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "4",
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
      "changes": [
        {
          "key": "duração",
          "mode": 5,
          "value": "permanente",
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
      "origin": "Compendium.tormenta20.magias.sw6TTkiY2ycfZefD",
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
      "name": "muda a duração para permanente e adiciona penalidade de -3 PM.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!sw6TTkiY2ycfZefD.f958aTtmx3LyPrPi"
    },
    {
      "origin": "Item.sw6TTkiY2ycfZefD",
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
      "_id": "zqcqvRzomQSfqOQ7",
      "changes": [],
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
      "name": "Despertar Consciência",
      "img": "systems/tormenta20/icons/magias/despertar-consciencia.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!sw6TTkiY2ycfZefD.zqcqvRzomQSfqOQ7"
    }
  ],
  "folder": "ToOk7JFkymVR4FA6",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; desperta a consci&ecirc;ncia de um animal ou planta. O alvo se torna um parceiro veterano de um tipo a sua escolha entre ajudante, combatente, fort&atilde;o, guardi&atilde;o, m&eacute;dico, perseguidor ou vigilante. Se usar esta magia em um parceiro que j&aacute; possua, o n&iacute;vel de poder de um de seus tipos aumenta em um passo (iniciante para veterano, veterano para mestre). Se j&aacute; for um parceiro mestre, recebe o b&ocirc;nus de outro tipo de parceiro iniciante (entre as escolhas acima). O alvo se torna uma criatura racional, com Intelig&ecirc;ncia &ndash;1, e pode falar</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 190",
    "ativacao": {
      "execução": "full",
      "custo": 6,
      "qtd": "",
      "condição": "",
      "special": ""
    },
    "duração": {
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
    "alcance": "toque",
    "alvo": "1 animal ou planta",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "div",
    "circulo": "3",
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
    "createdTime": 1664310462823,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!sw6TTkiY2ycfZefD"
};