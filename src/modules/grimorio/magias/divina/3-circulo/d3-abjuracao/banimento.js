module.exports = {
  "_id": "3SNxSEugumuMaksq",
  "name": "Banimento",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/banimento.webp",
  "effects": [
    {
      "_id": "8BxauhOIx1E61UMp",
      "changes": [
        {
          "key": "cd",
          "mode": 2,
          "value": "2",
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
      "origin": "Item.6ZVuZlYgv0CgiyuZ",
      "transfer": false,
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "aumenta": false,
          "custo": "0",
          "durationScene": false,
          "items": ""
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
      "name": "muda a resistência para nenhum. Em vez do normal, devolve automaticamente uma criatura conjurada (como por uma magia de convocação) para seu plano de origem.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!3SNxSEugumuMaksq.8BxauhOIx1E61UMp"
    }
  ],
  "folder": "zEoV7vrc5RqulUYQ",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; expulsa uma criatura n&atilde;o nativa de Arton. Um alvo nativo de outro mundo (como muitos esp&iacute;ritos), &eacute; teletransportado de volta para um lugar aleat&oacute;rio de seu mundo de origem. J&aacute; um alvo morto-vivo tem sua conex&atilde;o com as energias negativas rompidas, sendo reduzido a 0 PV. Se passar na resist&ecirc;ncia, em vez dos efeitos acima, o alvo fica enjoado por 1d4 rodadas.</p>\n<p>Se voc&ecirc; tiver um ou mais itens que se oponham ao alvo de alguma maneira, a CD do teste de resist&ecirc;ncia aumenta em +2 por item. Por exemplo, se lan&ccedil;ar a magia contra dem&ocirc;nios do frio (vulner&aacute;veis a &aacute;gua benta e que odeiam luz e calor) enquanto segura um frasco de &aacute;gua benta e uma tocha acesa, a CD aumenta em +4. O mestre decide se determinado item &eacute; forte o bastante contra a criatura para isso.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 182",
    "ativacao": {
      "execução": "special",
      "custo": 6,
      "qtd": "",
      "condição": "",
      "special": "1d3+1 rodadas"
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
    "alcance": "short",
    "alvo": "1 criatura",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": "Vontade parcial"
    },
    "rolls": [],
    "tipo": "div",
    "circulo": "3",
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
    "systemVersion": "1.4.116",
    "coreVersion": "13.342",
    "createdTime": 1664310461758,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!3SNxSEugumuMaksq"
};