module.exports = {
  "_id": "fmGirvluTr0RMZvE",
  "name": "Rogar Maldição",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/rogar-maldicao.webp",
  "effects": [
    {
      "_id": "zovWBmCLN6OBfU6r",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "3",
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
      "origin": "Compendium.tormenta20.magias.fmGirvluTr0RMZvE",
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
      "name": "aumenta o número de efeitos que você pode escolher em +1. Requer 3º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!fmGirvluTr0RMZvE.zovWBmCLN6OBfU6r"
    },
    {
      "_id": "pytnNK29OELS0vL8",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "7",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "duracao",
          "value": "permanente",
          "mode": 5,
          "priority": null
        },
        {
          "key": "resistencia",
          "value": "Fortitude parcial",
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
      "origin": "Compendium.tormenta20.magias.fmGirvluTr0RMZvE",
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
      "name": "muda a duração para permanente e resistência para Fortitude parcial. Se passar, a criatura ainda sofre os efeitos da maldição, mas por 1 rodada. Requer 4º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!fmGirvluTr0RMZvE.pytnNK29OELS0vL8"
    },
    {
      "_id": "VXbH5U30whHzR915",
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
      "origin": "Item.wBOSJGFrFzX79Lxz",
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
      "name": "Rogar Maldição",
      "img": "systems/tormenta20/icons/magias/rogar-maldicao.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!fmGirvluTr0RMZvE.VXbH5U30whHzR915"
    }
  ],
  "folder": "tsMBuCg4bWXLn3mQ",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; entoa c&acirc;nticos mal&eacute;ficos que amaldi&ccedil;oam uma v&iacute;tima, criando efeitos variados. Ao lan&ccedil;ar a magia, escolha entre os seguintes.</p>\n<p><em>Debilidade:</em> o alvo fica <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.YpyVEwCbNVAfFLBm\" data-id=\"YpyVEwCbNVAfFLBm\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Esmorecido</a> e n&atilde;o pode se comunicar ou lan&ccedil;ar magias. Ainda reconhece seus aliados e pode segui-los e ajud&aacute;-los, mas sempre de maneira simpl&oacute;ria.</p>\n<p><em>Doen&ccedil;a:</em> muda a dura&ccedil;&atilde;o para instant&acirc;nea. O alvo contrai uma doen&ccedil;a a sua escolha, que o afeta imediatamente (sem per&iacute;odo de incuba&ccedil;&atilde;o).</p>\n<p><em>Fraqueza:</em> o alvo fica <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.AlTDv5dptSLGiZel\" data-id=\"AlTDv5dptSLGiZel\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Debilitado</a>e <a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.e8JmqkgvL3H26vbi\" data-id=\"e8JmqkgvL3H26vbi\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Lento</a>.</p>\n<p><em>Isolamento</em>: o alvo perde o uso de um de seus cinco sentidos a sua escolha. Se perder a vis&atilde;o, fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.qN5JjvnXDq4Xak1K]{Cego}. Se perder a audi&ccedil;&atilde;o, fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.eaJwtq58TBZw0Oyo]{Surdo}. Se perder o olfato ou paladar, n&atilde;o pode usar a habilidade faro. Se perder o tato, fica @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.fJFNeZeKmfHMpblz]{Ca&iacute;do} e n&atilde;o pode se levantar.</p>\n<p>Voc&ecirc; tamb&eacute;m pode inventar sua pr&oacute;pria maldi&ccedil;&atilde;o, usando esses exemplos como sugest&otilde;es, mas o mestre tem a palavra final sobre o efeito.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 204",
    "ativacao": {
      "execucao": "action",
      "custo": 3,
      "qtd": "",
      "condicao": "",
      "special": ""
    },
    "duracao": {
      "value": 0,
      "units": "sust",
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
      "txt": "Fortitude anula"
    },
    "rolls": [],
    "tipo": "div",
    "circulo": "2",
    "preparada": false,
    "escola": "nec",
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
    "createdTime": 1664310462777,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!fmGirvluTr0RMZvE"
};