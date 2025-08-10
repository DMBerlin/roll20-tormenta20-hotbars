module.exports = {
  "_id": "KjCLKthxu8uKSOlh",
  "name": "Fúria do Panteão",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/furia-do-panteao.webp",
  "effects": [],
  "folder": "dlJgQYgCRB3w1cum",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; cria uma nuvem de tempestade violenta. Os ventos tornam ataques &agrave; dist&acirc;ncia imposs&iacute;veis e fazem a &aacute;rea contar como condi&ccedil;&atilde;o terr&iacute;vel para lan&ccedil;ar magia. Al&eacute;m disso, inimigos na &aacute;rea t&ecirc;m a visibilidade reduzida (como a magia N&eacute;voa). Uma vez por turno, voc&ecirc; pode gastar uma a&ccedil;&atilde;o de movimento para gerar um dos efeitosa seguir.</p>\n<p><em>Nevasca.</em> Inimigos na &aacute;rea sofrem 10d6 pontos de dano de frio (Fortitude reduz &agrave; metade). A &aacute;rea fica coberta de neve, virando terreno dif&iacute;cil at&eacute; o fim da cena ou at&eacute; voc&ecirc; usar siroco.</p>\n<p><em>Raios.</em> At&eacute; 6 inimigos a sua escolha na &aacute;rea sofrem 10d8 pontos de dano de eletricidade (Reflexos reduz &agrave; metade).</p>\n<p><em>Siroco.</em> Transforma a chuva em uma tempestade de areia escaldante. Inimigos na &aacute;rea sofrem 10d6 pontos de dano (metade corte, metade fogo) e ficam @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.kzVyzFyYroPrv8gb]{Sangrando} (Fortitude reduz o dano &agrave; metade e evita a condi&ccedil;&atilde;o).</p>\n<p><em>Trov&otilde;es.</em> Inimigos sofrem 10d6 pontos de dano de impacto e ficam @UUID[JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.my1HxIcUGVr2Mbii]{Desprevenido} por uma rodada (Fortitude reduz o dano &agrave; metade e evita a condi&ccedil;&atilde;o).</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 196",
    "ativacao": {
      "execucao": "full",
      "custo": 15,
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
    "alcance": "long",
    "alvo": "",
    "area": "cubo de 90m",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": "veja texto"
    },
    "rolls": [
      {
        "name": "Dano",
        "key": "dano0",
        "type": "dano",
        "parts": [
          [
            "10d6",
            "frio",
            ""
          ],
          [
            "10d8",
            "eletricidade",
            ""
          ],
          [
            "5d6",
            "corte",
            ""
          ],
          [
            "5d6",
            "fogo",
            ""
          ],
          [
            "10d6",
            "impacto",
            ""
          ]
        ],
        "versatil": ""
      }
    ],
    "tipo": "div",
    "circulo": "5",
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
    "createdTime": 1664310461823,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!KjCLKthxu8uKSOlh"
};