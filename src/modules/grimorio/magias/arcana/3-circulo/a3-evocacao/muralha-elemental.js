module.exports = {
  "_id": "VqsjzRkQ9nA11XRD",
  "name": "Muralha Elemental",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/muralha-elemental.webp",
  "effects": [
    {
      "_id": "BnJuNG5XwFbAYZDc",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
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
      "origin": "Compendium.tormenta20.magias.VqsjzRkQ9nA11XRD",
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
      "name": "aumenta o comprimento em +15m e altura em +3m, até 60m de comprimento e 9m de altura.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!VqsjzRkQ9nA11XRD.BnJuNG5XwFbAYZDc"
    },
    {
      "_id": "O8ODPwbDDbAk3bJj",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "self": true,
          "custo": "4",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "duracao",
          "value": "sustentada",
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
      "origin": "Compendium.tormenta20.magias.VqsjzRkQ9nA11XRD",
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
      "name": "muda a duração para sustentada e adiciona uma nova escolha, Essência. A muralha é invisível e indestrutível — imune a qualquer forma de dano e não afetada por nenhuma magia. Ela não pode ser atravessada nem mesmo por criaturas incorpóreas. No entanto, magias que teletransportam criaturas, como Salto Dimensional, podem atravessá-la. Magias e efeitos de dano, como Bola de Fogo e o sopro de um dragão, não vencem a muralha, mas magias lançadas diretamente sobre uma criatura ou área, como Sono, podem ser lançadas contra alvos que estejam no outro lado como se tivessem linha de efeito. Requer 4º círculo.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!VqsjzRkQ9nA11XRD.O8ODPwbDDbAk3bJj"
    },
    {
      "origin": "Item.VqsjzRkQ9nA11XRD",
      "tint": "#ffffff",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "durationScene": false,
          "self": true,
          "attack": false,
          "skill": false,
          "ability": false,
          "power": false,
          "equipment": false,
          "spell": false,
          "consumable": false,
          "items": "",
          "aumenta": true,
          "custo": "2"
        }
      },
      "duration": {
        "startTime": null,
        "seconds": null,
        "combat": null,
        "rounds": null,
        "turns": null,
        "startRound": null,
        "startTurn": null
      },
      "disabled": true,
      "_id": "a2HMafVsdNFNYqSY",
      "changes": [],
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
      "name": "aumenta o dano por atravessar a muralha em +2d6.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!VqsjzRkQ9nA11XRD.a2HMafVsdNFNYqSY"
    }
  ],
  "folder": "S9YMO5Jyr0D1dsWK",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Cria uma muralha de um elemento a sua escolha. A muralha pode ser um muro de at&eacute; 30m de comprimento e 3m de altura (ou o contr&aacute;rio) ou uma c&uacute;pula de 3m de raio. Os efeitos variam conforme o elemento escolhido.</p>\n<p><em>Fogo.</em> Faz surgir uma violenta cortina de chamas. Um lado da muralha (a sua escolha) emite ondas de calor, que causam 2d6 pontos de dano de fogo em criaturas a at&eacute; 6m quando voc&ecirc; lan&ccedil;a a magia e no in&iacute;cio de seus turnos. Atravessar a muralha causa 8d6 pontos de dano de fogo. Caso seja criada em uma &aacute;rea onde existem criaturas, elas sofrem dano como se estivessem atravessando a muralha, mas podem fazer um teste de Reflexos para reduzir o dano &agrave; metade (a criatura escolhe para qual lado quer escapar, mas se escapar para o lado quente sofrer&aacute; mais 2d6 pontos de dano).</p>\n<p><em>Gelo.</em> Evoca uma parede grossa de gelo denso com 15cm de espessura. Na forma de c&uacute;pula, pode prender uma ou mais criaturas, mas elas t&ecirc;m direito a um teste de Reflexos para escapar antes que a c&uacute;pula se forme. Cada trecho de 3m da muralha tem Defesa 8, 40 PV e RD 5. Um trecho da muralha que atinja 0 PV ser&aacute; rompido. Qualquer efeito de fogo causa dano dobrado &agrave; muralha. Uma criatura que atravesse um trecho rompido da muralha sofre 4d6 pontos de dano de frio.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 200",
    "ativacao": {
      "execucao": "action",
      "custo": 6,
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
    "efeito": "muralha de energia",
    "alcance": "medium",
    "alvo": "",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": "veja texto"
    },
    "rolls": [],
    "tipo": "arc",
    "circulo": "3",
    "preparada": false,
    "escola": "evo",
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
  "_key": "!items!VqsjzRkQ9nA11XRD"
};