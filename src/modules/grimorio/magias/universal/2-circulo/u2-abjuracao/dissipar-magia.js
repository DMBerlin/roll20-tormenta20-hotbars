module.exports = {
  "_id": "rfTGYwrXLjcIAIP5",
  "name": "Dissipar Magia",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/dissipar-magia.webp",
  "effects": [
    {
      "_id": "kKZ6L0mhMN53y13e",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "12",
          "aumenta": false,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "items": "",
          "durationScene": false,
          "equipment": false
        }
      },
      "changes": [
        {
          "key": "area",
          "mode": 5,
          "value": "esfera com 9m de raio",
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
      "origin": "Compendium.tormenta20.magias.rfTGYwrXLjcIAIP5",
      "transfer": false,
      "tint": "#ffffff",
      "name": "muda a área para esfera com 9m de raio. Em vez do normal, cria um\nefeito de disjunção. Todas as magias na área são automaticamente dissipadas e todos os itens mágicos na área, exceto aqueles que você estiver carregando, viram itens mundanos por uma cena (com direito a um teste de Vontade para evitar esse efeito). Requer 5º círculo.",
      "description": "",
      "statuses": [],
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
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "sort": 0,
      "_key": "!items.effects!rfTGYwrXLjcIAIP5.kKZ6L0mhMN53y13e"
    }
  ],
  "folder": "2KjQdcIMKzawCqmg",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Você dissipa outras magias que estejam ativas, como se sua duração tivesse acabado. Note que efeitos de magias instantâneas não podem ser dissipados (não se pode dissipar uma Bola de Fogo ou Relâmpago depois que já causaram dano...). Se lançar essa magia em uma criatura ou área, faça um teste de Misticismo; você dissipa as magias com CD igual ou menor que o resultado do teste. Se lançada contra um item mágico, o transforma em um item mundano por 1d6 rodadas (Vontade anula).</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 191",
    "ativacao": {
      "execução": "ação",
      "custo": 3,
      "qtd": "",
      "condição": "",
      "special": ""
    },
    "duração": {
      "value": 0,
      "units": "inst",
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
    "alvo": "1 criatura ou 1 objeto mágico",
    "area": "ou esfera com 3m de raio",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "uni",
    "circulo": "2",
    "preparada": false,
    "escola": "abjuração",
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
    "systemVersion": "1.4.201",
    "coreVersion": "13.342",
    "createdTime": 1664310462815,
    "modifiedTime": 1690154115173,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!rfTGYwrXLjcIAIP5"
};