module.exports = {
  "_id": "KrorBYV7KV7jIC5c",
  "name": "Localização",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/localizacao.webp",
  "effects": [
    {
      "_id": "bB48AzU3qOaJZex9",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "area",
          "value": "alvo você",
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
      "origin": "Compendium.tormenta20.magias.KrorBYV7KV7jIC5c",
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
      "name": "muda a área para alvo você. Em vez do normal, você sabe onde fica o norte e recebe +5 em testes de Sobrevivência para se orientar.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!KrorBYV7KV7jIC5c.bB48AzU3qOaJZex9"
    },
    {
      "_id": "LxA6sgrwQlDFFLjc",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "5",
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
      "origin": "Compendium.tormenta20.magias.KrorBYV7KV7jIC5c",
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
      "name": "aumenta a área em um fator de 10 (90m para 900m, 900m para 9km e assim por diante).",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!KrorBYV7KV7jIC5c.LxA6sgrwQlDFFLjc"
    },
    {
      "_id": "KrU6EdqdsNQ6nJ78",
      "changes": [
        {
          "key": "system.pericias.sobr.bonus",
          "mode": 2,
          "value": "5",
          "priority": null
        }
      ],
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
      "origin": "Item.qsft67JawC3F2BK5",
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
      "name": "Localização (Truque)",
      "img": "systems/tormenta20/icons/magias/localizacao.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!KrorBYV7KV7jIC5c.KrU6EdqdsNQ6nJ78"
    }
  ],
  "folder": "5rVbqxmmCk2RmOYE",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Esta magia pode encontrar uma criatura ou objeto a sua escolha. Voc&ecirc; pode pensar em termos gerais (&ldquo;um elfo&rdquo;, &ldquo;algo de metal&rdquo;) ou espec&iacute;ficos (&ldquo;Gwen, a elfa&rdquo;, &ldquo;uma espada longa&rdquo;). A magia indica a dire&ccedil;&atilde;o e dist&acirc;ncia da criatura ou objeto mais pr&oacute;ximo desse tipo, caso esteja ao alcance. Voc&ecirc; pode movimentar-se para continuar procurando. Procurar algo muito espec&iacute;fico (&ldquo;a espada longa encantada do Bar&atilde;o Rulyn&rdquo;) exige que voc&ecirc; tenha em mente uma imagem precisa do objeto; caso a imagem n&atilde;o seja muito pr&oacute;xima da verdade, a magia falha, mas voc&ecirc; gasta os PM mesmo assim. Esta magia pode ser bloqueada por uma fina camada de chumbo.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 197",
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
    "alcance": "self",
    "alvo": "",
    "area": "esfera com 90m de raio",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "arc",
    "circulo": "2",
    "preparada": false,
    "escola": "adv",
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
    "createdTime": 1664310461823,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!KrorBYV7KV7jIC5c"
};