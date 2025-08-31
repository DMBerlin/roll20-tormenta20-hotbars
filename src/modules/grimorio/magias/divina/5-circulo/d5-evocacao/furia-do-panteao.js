// Auto-generated spell data - Generated at build time
// Do not edit manually - Run 'pnpm build' to regenerate

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
      "value": "Você cria uma nuvem de tempestade violenta. Os ventos tornam ataques à distância impossíveis e fazem a área contar como condição terrível para lançar magia. Além disso, inimigos na área têm a visibilidade reduzida (como a magia Névoa). Uma vez por turno, você pode gastar uma ação de movimento para gerar um dos efeitosa seguir. Nevasca. Inimigos na área sofrem 10d6 pontos de dano de frio (Fortitude reduz à metade). A área fica coberta de neve, virando terreno difícil até o fim da cena ou até você usar siroco. Raios. Até 6 inimigos a sua escolha na área sofrem 10d8 pontos de dano de eletricidade (Reflexos reduz à metade). Siroco. Transforma a chuva em uma tempestade de areia escaldante. Inimigos na área sofrem 10d6 pontos de dano (metade corte, metade fogo) e ficam Sangrando (Fortitude reduz o dano à metade e evita a condição). Trovões. Inimigos sofrem 10d6 pontos de dano de impacto e ficam Desprevenido por uma rodada (Fortitude reduz o dano à metade e evita a condição).",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 196",
    "ativacao": {
      "custo": 15,
      "qtd": "",
      "condição": "",
      "special": "",
      "execucao": "completa"
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
    "alcance": "longo",
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
    "escola": "evocacao",
    "chatFlavor": "",
    "origin": "",
    "tags": [],
    "chatGif": "",
    "duracao": {
      "value": 0,
      "units": "sust",
      "special": ""
    }
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
