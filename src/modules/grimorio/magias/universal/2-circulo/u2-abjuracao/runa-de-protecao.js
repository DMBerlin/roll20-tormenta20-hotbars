module.exports = {
  "_id": "Sbf50YYcbKCXA3CI",
  "name": "Runa de Proteção",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/runa-de-protecao.webp",
  "effects": [
    {
      "_id": "A3kKxRbC8XZB32Mg",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "1",
          "aumenta": true
        }
      },
      "changes": [
        {
          "key": "dano",
          "value": "2d6",
          "mode": 0,
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
      "origin": "Compendium.tormenta20.magias.Sbf50YYcbKCXA3CI",
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
      "name": "aumenta o dano em +2d6.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!Sbf50YYcbKCXA3CI.A3kKxRbC8XZB32Mg"
    },
    {
      "_id": "nC9JOVHMZZxs5pWc",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "1",
          "aumenta": false,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
          "durationScene": false,
          "items": ""
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
      "origin": "Compendium.tormenta20.magias.Sbf50YYcbKCXA3CI",
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
      "name": "muda o alvo para \"você\" e o alcance para \"pessoal\". Ao invés do normal, escolha uma magia de 1º círculo que você conhece e pode lançar, com tempo de execução de uma ação padrão ou menor. Você escreve a runa em seu corpo e especifica uma condição de ativação como, por exemplo, \"quando eu for alvo de um ataque\" ou \"quando for alvo de uma magia\". Quando a condição for cumprida, você pode ativar a runa e lançar a magia escolhida como uma reação. Você só pode escrever uma runa em seu corpo ao mesmo tempo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!Sbf50YYcbKCXA3CI.nC9JOVHMZZxs5pWc"
    },
    {
      "_id": "xueONs898dqDBbTb",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "3",
          "aumenta": false,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "spell": false,
          "consumable": false,
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
      "origin": "Compendium.tormenta20.magias.Sbf50YYcbKCXA3CI",
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
      "name": "como o aprimoramento anterior, mas você pode escolher magias de 2º círculo. Requer 3º\ncírculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!Sbf50YYcbKCXA3CI.xueONs898dqDBbTb"
    }
  ],
  "folder": "2KjQdcIMKzawCqmg",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; escreve uma runa pessoal em uma superf&iacute;cie fixa, como uma parede ou o ch&atilde;o, que protege uma pequena &aacute;rea ao redor. Quando uma criatura entra na &aacute;rea afetada a runa explode, causando 6d6 pontos de dano em todos os alvos a at&eacute; 6m. A criatura que ativa a runa n&atilde;o tem direito a teste de resist&ecirc;ncia; outras criaturas na &aacute;rea t&ecirc;m direito a um teste de Reflexos para reduzir o dano &agrave; metade. Quando lan&ccedil;a a magia, voc&ecirc; escolhe o tipo de dano, entre &aacute;cido, eletricidade, fogo, frio, luz ou trevas.</p>\n<p>Voc&ecirc; pode determinar que a runa se ative apenas em condi&ccedil;&otilde;es espec&iacute;ficas &mdash; por exemplo, apenas por goblins ou apenas por mortos-vivos. Voc&ecirc; tamb&eacute;m pode criar uma palavra m&aacute;gica que impe&ccedil;a a runa de se ativar.</p>\n<p>Um personagem pode encontrar a runa com um teste de Investiga&ccedil;&atilde;o e desarm&aacute;-la com um teste de Ladinagem (CD da magia).</p>\n<p><em>Componente material:</em> p&oacute; de diamante no valor de T$ 200, com o qual o conjurador desenha a runa, que brilha por alguns instantes e depois se torna praticamente invis&iacute;vel.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 205",
    "ativacao": {
      "execucao": "hour",
      "custo": 3,
      "qtd": "1",
      "condicao": "",
      "special": ""
    },
    "duracao": {
      "value": 0,
      "units": "special",
      "special": "permanente até ser descarregada"
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
    "alcance": "touch",
    "alvo": "uma área com 6m de raio",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": "varia (veja o texto)"
    },
    "rolls": [
      {
        "name": "Dano",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "6d6",
            "acido",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "uni",
    "circulo": "2",
    "preparada": false,
    "escola": "abj",
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
    "createdTime": 1664310461911,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!Sbf50YYcbKCXA3CI"
};