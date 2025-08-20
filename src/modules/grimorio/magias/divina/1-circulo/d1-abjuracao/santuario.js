module.exports = {
  "_id": "5APvTaz3tKZPdNda",
  "name": "Santuário",
  "type": "magia",
  "img": "https://wow.zamimg.com/images/wow/icons/large/spell_holy_sanctuary.jpg",
  "effects": [
    {
      "_id": "IVYf0lPVYKYEddI6",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "1",
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
      "origin": "Compendium.tormenta20.magias.5APvTaz3tKZPdNda",
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
      "name": "além do normal, escolha um tipo de criatura entre animal, construto ou morto-vivo. Você não pode ser percebido por criaturas não inteligentes (Int –4 ou menor) do tipo escolhido.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!5APvTaz3tKZPdNda.IVYf0lPVYKYEddI6"
    },
    {
      "_id": "gonNhXsSYB73MEJm",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "9",
          "aumenta": false
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
      "origin": "Compendium.tormenta20.magias.5APvTaz3tKZPdNda",
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
      "name": "também protege o alvo contra efeitos de área. Uma criatura que tente atacar uma área que inclua o alvo deve fazer o teste de Vontade; se falhar, não consegue e perde a ação. Ela só pode tentar novamente se o alvo sair da área.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!5APvTaz3tKZPdNda.gonNhXsSYB73MEJm"
    },
    {
      "_id": "d3CsEmxNzPtHFTKs",
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
      "origin": "Item.YXHLGgu3kZHXiJ7c",
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
      "name": "Santuário",
      "img": "systems/tormenta20/icons/magias/santuario.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!5APvTaz3tKZPdNda.d3CsEmxNzPtHFTKs"
    }
  ],
  "folder": "XbfWNZNCUbSVLyRp",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Qualquer criatura que tente fazer uma a&ccedil;&atilde;o hostil contra o alvo deve fazer um teste de Vontade. Se falhar, n&atilde;o consegue, perde a a&ccedil;&atilde;o e n&atilde;o pode tentar novamente at&eacute; o fim da cena. <em>Santu&aacute;rio</em> n&atilde;o protege o alvo de efeitos de &aacute;rea. Al&eacute;m disso, o pr&oacute;prio alvo tamb&eacute;m n&atilde;o pode fazer a&ccedil;&otilde;es hostis (incluindo for&ccedil;ar outras criaturas a atac&aacute;-lo), ou a magia &eacute; dissipada &mdash; mas pode usar habilidades e magias de cura e suporte como @UUID[Item.soVAGPRWQmKxOrPm]{Curar Ferimentos} e @UUID[Item.OTsBw84Ci2IKPStn]{B&ecirc;n&ccedil;&atilde;o}.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 205",
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
    "alvo": "1 criatura",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": "Vontade anula"
    },
    "rolls": [],
    "tipo": "div",
    "circulo": "1",
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
    "createdTime": 1664310461759,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!5APvTaz3tKZPdNda"
};