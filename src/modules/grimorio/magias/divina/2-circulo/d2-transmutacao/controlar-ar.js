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
          "pessoal": true,
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
          "key": "duração",
          "mode": 5,
          "value": "cena",
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
      "value": "ERRATA DO ALMANAQUE DRAGãO BRASIL (jamboeditora.com.br) Você pode controlar os movimentos e comportamentos de massas de ar. Ao lançar a magia, escolha um dos efeitos abaixo. Ascender:cria uma corrente de ar ascendente capaz de erguer do chão uma criatura ou objeto médio, fazendo o alvo ﬂutuar para cima e para baixo conforme sua vontade. Você pode gastar uma ação de movimento para subir ou descer o alvo até 6m por rodada, até um máximo de 30m de altura. Você não pode mover o alvo horizontalmente — mas o alvo pode, por exemplo, escalar uma colina ou se apoiar no teto para mover-se lateralmente (com metade de seu deslocamento normal). Uma criatura levitando fica vulnerável e sofre –2 nas jogadas de ataque. Alvos involuntários tem direito a um teste de Fortitude no início de seu turno para negar o efeito. Derrubar um alvo flutuando (simplesmente parando a corrente de ar) causa o dano normal de queda, mas um alvo que passe no teste pode \"nadar\" para o chão contra a corrente. Você pode usar essa opção para fazer uma manobra derrubar contra uma criatura voadora dentro do alcance, usando seu atributo-chave no lugar de Força. Sopro:cria uma lufada de vento a partir de suas mãos, que empurra qualquer criatura Média ou menor em um cone de 4,5m — faça uma manobraempurrarusando seu atributo-chave ao invés de força, usando o mesmo resultado de sua rolagem para todos os alvos. A lufada de vento também faz qualquer coisa que um vento forte e súbito faria, como levantar pó, dispersar vapores, apagar chamas, espalhar papéis ou mover uma embarcação. Manter o sopro ativo exige uma ação padrão. Vento:cria uma área de vento forte (Tormenta20 página 253) dentro do alcance da magia. Se lançada numa área que já esteja com algum efeito de vento, aumenta esse efeito em um passo. Manter o vento ativo requer uma ação de movimento. Você também pode usar essa opção para reduzir os efeitos de vento em uma área.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Errata ADB, Blog da Jambô",
    "ativacao": {
      "execução": "ação",
      "custo": 3,
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