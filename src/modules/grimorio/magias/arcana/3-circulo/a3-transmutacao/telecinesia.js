module.exports = {
  "_id": "UhiM7pMNk3HfWNKP",
  "name": "Telecinésia",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/telecinesia.webp",
  "effects": [
    {
      "_id": "Dp5Pj6tZpuRzJ5ov",
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
      "origin": "Compendium.tormenta20.magias.UhiM7pMNk3HfWNKP",
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
      "name": "aumenta o tamanho máximo da criatura em uma categoria (para Grande, Enorme e Colossal) ou dobra a quantidade de espaços do objeto.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!UhiM7pMNk3HfWNKP.Dp5Pj6tZpuRzJ5ov"
    },
    {
      "_id": "k0Dc5bs8tYVYyK1x",
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
      "origin": "Item.vALWn0x2Qg3XL91R",
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
      "name": "Telecinésia",
      "img": "systems/tormenta20/icons/magias/telecinesia.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!UhiM7pMNk3HfWNKP.k0Dc5bs8tYVYyK1x"
    }
  ],
  "folder": "O4DBcowkyxvx1PFy",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; move objetos ou criaturas se concentrando. Ao lan&ccedil;ar a magia, escolha uma das op&ccedil;&otilde;es a seguir.</p>\n<p><em>For&ccedil;a Cont&iacute;nua:</em> voc&ecirc; move uma criatura ou objeto de at&eacute; 10 espa&ccedil;os, a at&eacute; 6m por rodada. Uma criatura pode anular o efeito sobre ela, ou sobre um objeto que possua, passando num teste de Vontade. O alvo pode ser movido em qualquer dire&ccedil;&atilde;o dentro do alcance. Ele cai no ch&atilde;o se sair do alcance ou a magia terminar. <strong>Dura&ccedil;&atilde;o:</strong> sustentada.</p>\n<p><em>Empurr&atilde;o Violento:</em> nesta vers&atilde;o a energia m&aacute;gica &eacute; expelida de uma &uacute;nica vez e arremessa at&eacute; 10 objetos (no m&aacute;ximo 10 espa&ccedil;os). Os objetos devem estar a at&eacute; 3m uns dos outros e podem ser arremessados at&eacute; o alcance da magia.</p>\n<p>Objetos arremessados podem atingir criaturas em seu caminho, causando de 1 ponto de dano de impacto por espa&ccedil;o (objetos macios, sem pontas ou sem fio) at&eacute; 1d6 pontos de dano por espa&ccedil;o (objetos duros, pontudos ou afiados). Criaturas atingidas t&ecirc;m direito a um teste de Reflexos para reduzir o dano &agrave; metade.</p>\n<p>Criaturas m&eacute;dias ou menores podem ser arremessadas, mas t&ecirc;m direito a um teste de Vontade para evitar o efeito (em si mesmas ou em objetos que estejam segurando). Uma criatura arremessada contra uma superf&iacute;cie s&oacute;lida sofre 1d6 pontos de dano de impacto para cada 3m que &ldquo;voou&rdquo; no deslocamento (incluindo outras criaturas; nesse caso, ambas sofrem o dano). Dura&ccedil;&atilde;o: instant&acirc;nea.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 208",
    "ativacao": {
      "execução": "ação",
      "custo": 6,
      "qtd": "",
      "condição": "",
      "special": ""
    },
    "duração": {
      "value": 0,
      "units": "special",
      "special": "sustentada ou instantânea (veja texto)"
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
    "alvo": "veja texto;",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "arcana",
    "circulo": "3",
    "preparada": false,
    "escola": "tra",
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
    "createdTime": 1664310461915,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!UhiM7pMNk3HfWNKP"
};