module.exports = {
  "_id": "L3m9nPlKK8xe3u7a",
  "name": "Muralha de Ossos",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/muralha-de-ossos.webp",
  "effects": [
    {
      "_id": "WRoIqLpQkO7xeByX",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "3",
          "aumenta": true,
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
      "origin": "Compendium.tormenta20.magias.L3m9nPlKK8xe3u7a",
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
      "name": "aumenta o comprimento em +15m e altura em +3m.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!L3m9nPlKK8xe3u7a.WRoIqLpQkO7xeByX"
    },
    {
      "_id": "wDTVFYVO1jT2baZZ",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "5",
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
          "key": "condição",
          "mode": 0,
          "value": "agarrado",
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
      "origin": "Compendium.tormenta20.magias.L3m9nPlKK8xe3u7a",
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
      "name": "o muro é feito de uma massa de esqueletos animados. Sempre que uma criatura iniciar seu turno adjacente ou escalando a muralha, deve fazer um teste de Reflexos. Se falhar fica agarrada, sofrendo os feitos normais de estar agarrada pela magia.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!L3m9nPlKK8xe3u7a.wDTVFYVO1jT2baZZ"
    }
  ],
  "folder": "RhrH7rIxjwrJoPrc",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Uma parede de ossos se eleva da terra. A parede tem 15m de comprimento, 9m de altura e 1,5m de espessura. Ela pode ter qualquer forma — não precisa ser uma linha reta —, mas sua base precisa estar sempre tocando o solo. Quando a parede surge, criaturas na área ocupada ou adjacentes sofrem 4d8 pontos de dano de corte e precisam fazer um teste de Reflexos para não ficarem presas no emaranhado de ossos. Uma criatura presa dessa maneira fica Agarrado, e pode usar uma ação padrão para fazer um teste de Atletismo (CD da magia) para se soltar. Se passar no teste, sai da muralha para um dos lados adjacentes. Se falhar, sofre 4d8 pontos de dano de corte. é possível destruir o muro para atravessá-lo ou libertar uma criatura agarrada. Cada trecho de 3m do muro tem Defesa 8, 40 PV e redução de corte, frio e perfuração 10. Também é possível escalar a parede. Isso exige um teste de Atletismo (CD da magia) e causa 4d8 pontos de dano de corte para cada 3m escalados.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 199",
    "ativacao": {
      "custo": 10,
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
    "efeito": "muro de ossos",
    "alcance": "medio",
    "alvo": "",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "universal",
    "circulo": "4",
    "preparada": false,
    "escola": "necromancia",
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
    "createdTime": 1664310461825,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!L3m9nPlKK8xe3u7a"
};