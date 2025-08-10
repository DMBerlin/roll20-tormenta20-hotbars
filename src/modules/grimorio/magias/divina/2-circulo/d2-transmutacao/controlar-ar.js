module.exports = {
  "name": "Controlar Ar",
  "type": "magia",
  "img": "icons/magic/air/wind-tornado-cyclone-white.webp",
  "effects": [
    {
      "_id": "fwMTgwpZsj9p70EF",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "2",
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
      "changes": [
        {
          "key": "alvo",
          "mode": 5,
          "value": "área de quadrado com 9m de lado",
          "priority": 0
        },
        {
          "key": "duracao",
          "mode": 5,
          "value": "Cena",
          "priority": 0
        },
        {
          "key": "dano",
          "mode": 0,
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
      "origin": "Compendium.tormenta20.magias.gUp6Pm0Bf4WTUcSA",
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
      "name": "aumenta o limite de tamanho de criaturas e objetos afetados em um passo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!u3H3ie8CbzrmlBM9.fwMTgwpZsj9p70EF"
    },
    {
      "origin": "Item.u3H3ie8CbzrmlBM9",
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
      "_id": "toLQ9w7R72aeuer8",
      "changes": [
        {
          "key": "system.modificadores.ataque.cac",
          "mode": 2,
          "value": "-2",
          "priority": null
        },
        {
          "key": "system.modificadores.ataque.ad",
          "mode": 2,
          "value": "-2",
          "priority": null
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
      "name": "Ascender (Penalidade no Ataque)",
      "img": "icons/magic/air/wind-tornado-cyclone-white.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!u3H3ie8CbzrmlBM9.toLQ9w7R72aeuer8"
    }
  ],
  "flags": {},
  "system": {
    "description": {
      "value": "<p><a href=\"https://blog.jamboeditora.com.br/errata-do-almanaque-dragao-brasil/\">ERRATA DO ALMANAQUE DRAG&Atilde;O BRASIL (jamboeditora.com.br)</a></p>\n<p>Voc&ecirc; pode controlar os movimentos e comportamentos de massas de ar. Ao lan&ccedil;ar a magia, escolha um dos efeitos abaixo.</p>\n<p><em>Ascender:</em>cria uma corrente de ar ascendente capaz de erguer do ch&atilde;o uma criatura ou objeto m&eacute;dio, fazendo o alvo ﬂutuar para cima e para baixo conforme sua vontade. Voc&ecirc; pode gastar uma a&ccedil;&atilde;o de movimento para subir ou descer o alvo at&eacute; 6m por rodada, at&eacute; um m&aacute;ximo de 30m de altura. Voc&ecirc; n&atilde;o pode mover o alvo horizontalmente &mdash; mas o alvo pode, por exemplo, escalar uma colina ou se apoiar no teto para mover-se lateralmente (com metade de seu deslocamento normal). Uma criatura levitando fica vulner&aacute;vel e sofre &ndash;2 nas jogadas de ataque. Alvos involunt&aacute;rios tem direito a um teste de Fortitude no in&iacute;cio de seu turno para negar o efeito. Derrubar um alvo flutuando (simplesmente parando a corrente de ar) causa o dano normal de queda, mas um alvo que passe no teste pode &ldquo;nadar&rdquo; para o ch&atilde;o contra a corrente. Voc&ecirc; pode usar essa op&ccedil;&atilde;o para fazer uma manobra derrubar contra uma criatura voadora dentro do alcance, usando seu atributo-chave no lugar de For&ccedil;a.</p>\n<p><em>Sopro:</em>cria uma lufada de vento a partir de suas m&atilde;os, que empurra qualquer criatura M&eacute;dia ou menor em um cone de 4,5m &mdash; fa&ccedil;a uma manobra<em>empurrar</em>usando seu atributo-chave ao inv&eacute;s de for&ccedil;a, usando o mesmo resultado de sua rolagem para todos os alvos. A lufada de vento tamb&eacute;m faz qualquer coisa que um vento forte e s&uacute;bito faria, como levantar p&oacute;, dispersar vapores, apagar chamas, espalhar pap&eacute;is ou mover uma embarca&ccedil;&atilde;o. Manter o sopro ativo exige uma a&ccedil;&atilde;o padr&atilde;o.</p>\n<p><em>Vento:</em>cria uma &aacute;rea de vento forte (Tormenta20 p&aacute;gina 253) dentro do alcance da magia. Se lan&ccedil;ada numa &aacute;rea que j&aacute; esteja com algum efeito de vento, aumenta esse efeito em um passo. Manter o vento ativo requer uma a&ccedil;&atilde;o de movimento. Voc&ecirc; tamb&eacute;m pode usar essa op&ccedil;&atilde;o para reduzir os efeitos de vento em uma &aacute;rea.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Errata ADB, Blog da Jambô",
    "ativacao": {
      "execucao": "action",
      "custo": 3,
      "qtd": "",
      "condicao": "",
      "special": ""
    },
    "duracao": {
      "value": 0,
      "units": "scene",
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
    "alvo": "",
    "area": "varia",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": "veja texto"
    },
    "rolls": [],
    "tipo": "div",
    "circulo": "2",
    "preparada": false,
    "escola": "tra",
    "chatFlavor": "",
    "origin": "",
    "tags": [],
    "chatGif": ""
  },
  "_stats": {
    "systemId": "tormenta20",
    "systemVersion": "1.4.116",
    "coreVersion": "13.342",
    "createdTime": 1664310462779,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_id": "u3H3ie8CbzrmlBM9",
  "folder": "qywU2r4WYPZtCRR1",
  "sort": 0,
  "ownership": {
    "default": 0
  },
  "_key": "!items!u3H3ie8CbzrmlBM9"
};