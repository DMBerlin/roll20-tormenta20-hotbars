module.exports = {
  "_id": "rjB5WyNkH0eInOGW",
  "name": "Comando",
  "type": "magia",
  "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_command.jpg",
  "effects": [
    {
      "_id": "goAzE0oaWGOVE9Gm",
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
      "origin": "Compendium.tormenta20.magias.rjB5WyNkH0eInOGW",
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
      "name": "muda o alvo para 1 criatura.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!rjB5WyNkH0eInOGW.goAzE0oaWGOVE9Gm"
    },
    {
      "_id": "UuprzsbsDv72xAxP",
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
      "origin": "Compendium.tormenta20.magias.rjB5WyNkH0eInOGW",
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
      "name": "aumenta a quantidade de alvos em +1",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!rjB5WyNkH0eInOGW.UuprzsbsDv72xAxP"
    },
    {
      "_id": "18JDpeaGFnz9KNKz",
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
      "origin": "Item.XeTC7eLTsBnZ57CL",
      "transfer": false,
      "flags": {
        "tormenta20": {
          "onuse": false,
          "durationScene": false
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
      "name": "Alvo Afetado",
      "img": "systems/tormenta20/icons/magias/comando.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!rjB5WyNkH0eInOGW.18JDpeaGFnz9KNKz"
    }
  ],
  "folder": "rYuXjvRuDEXa7GNY",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Esta magia permite que você dê uma ordem irresistível a um humanoide dentro do alcance. O alvo deve ser capaz de ouvir a ordem, mas não precisa entendê-la. Se falhar no teste de resistência de Vontade, ele obedecerá ao comando no seu próximo turno da melhor maneira possível. Você pode escolher entre os seguintes comandos: Fuja: O alvo gasta seu turno se afastando de você, utilizando todas as suas ações. Largue: O alvo solta quaisquer itens que esteja segurando e não pode pegá-los novamente até o início de seu próximo turno. Como esta é uma ação livre, ele ainda pode executar outras ações, exceto pegar o que largou. Pare: O alvo fica pasmo (apenas uma vez por cena). Sente: Com uma ação livre, o alvo senta no chão (se estava pendurado ou voando, desce até o chão). Ele pode fazer outras ações, mas não se levantar até o início de seu próximo turno. Venha: O alvo gasta seu turno se aproximando de você, utilizando todas as suas ações.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 184",
    "ativacao": {
      "execução": "ação",
      "custo": 1,
      "qtd": "",
      "condição": "",
      "special": ""
    },
    "duração": {
      "value": 1,
      "units": "round",
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
    "alcance": "short",
    "alvo": "1 humanóide",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": "Vontade anula"
    },
    "rolls": [],
    "tipo": "div",
    "circulo": "1",
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
    "createdTime": 1664310462816,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!rjB5WyNkH0eInOGW"
};