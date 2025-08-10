module.exports = {
  "_id": "8YsQpGGbp1JVXx99",
  "name": "Assassino Fantasmagórico",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/assassino-fantasmagorico.webp",
  "effects": [
    {
      "origin": "Item.8YsQpGGbp1JVXx99",
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
      "_id": "gUwl1SlESVoBEQGM",
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
      "name": "Assassino Fantasmagórico",
      "img": "systems/tormenta20/icons/magias/assassino-fantasmagorico.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!8YsQpGGbp1JVXx99.gUwl1SlESVoBEQGM"
    }
  ],
  "folder": "dQE05Ygww9FCsYSu",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Usando os medos subconscientes do alvo, voc&ecirc; cria uma imagem daquilo que ele mais teme. Apenas a pr&oacute;pria v&iacute;tima pode ver o Assassino Fantasmag&oacute;rico com nitidez; outras criaturas presentes (incluindo o conjurador) enxergam apenas um espectro sombrio.</p>\n<p>Quando voc&ecirc; lan&ccedil;a a magia, o espectro surge adjacente a voc&ecirc; e a v&iacute;tima faz um teste de Vontade. Se ela passar, percebe que o espectro &eacute; uma ilus&atilde;o e a magia &eacute; dissipada. Se falhar, acredita na exist&ecirc;ncia do espectro, que ent&atilde;o flutua 18m por rodada em dire&ccedil;&atilde;o &agrave; v&iacute;tima, sempre no fim do seu turno. Ele &eacute; incorp&oacute;reo e imune a magias (exceto magias que dissipam outras).</p>\n<p>Se o espectro terminar seu turno adjacente &agrave; v&iacute;tima, ela deve fazer um teste de Fortitude. Se passar, sofre 6d6 pontos de dano de trevas (este dano n&atilde;o pode reduzir o alvo a menos de 0 PV e n&atilde;o o deixa sangrando). Se falhar, sofre um colapso, ficando imediatamente com &ndash;1 PV e sangrando.</p>\n<p>O espectro persegue o alvo implacavelmente. Ele desaparece se o alvo ficar inconsciente ou se afastar al&eacute;m de alcance longo dele, ou se for dissipado.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 181",
    "ativacao": {
      "execucao": "action",
      "custo": 10,
      "qtd": "",
      "condicao": "",
      "special": ""
    },
    "duracao": {
      "value": 0,
      "units": "special",
      "special": "cena, até ser descarregada"
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
    "alcance": "long",
    "alvo": "1 criatura",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": "Vontade Anula, Fortitude Parcial"
    },
    "rolls": [
      {
        "name": "Dano",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "6d6",
            "trevas",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "arc",
    "circulo": "4",
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
    "createdTime": 1664310461768,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!8YsQpGGbp1JVXx99"
};