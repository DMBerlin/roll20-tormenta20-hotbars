module.exports = {
  "_id": "3rR4d2fWU6uIqVNv",
  "name": "Viagem Planar",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/viagem-planar.webp",
  "effects": [
    {
      "_id": "ju7VLF8WTD1Z1tnN",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "2",
          "aumenta": false
        }
      },
      "changes": [
        {
          "key": "alvo",
          "value": "até cinco criaturas voluntárias que você esteja tocando",
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
      "origin": "Compendium.tormenta20.magias.3rR4d2fWU6uIqVNv",
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
      "name": "muda o alvo para até cinco criaturas voluntárias que você esteja tocando.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!3rR4d2fWU6uIqVNv.ju7VLF8WTD1Z1tnN"
    }
  ],
  "folder": "OkdOsJkL80Tz5FFM",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Você e os alvos viajam instantaneamente para outro plano da Criação através de um portal dimensional temporário. No plano de destino, vocês chegam de 10 a 1.000km do local pretendido (role 1d100 e multiplique por 10km). A precisão da chegada depende do seu conhecimento sobre o destino: locais bem conhecidos tendem a ter menos variação na distância. Esta magia não funciona se você estiver em um local protegido contra viagem planar (como sob efeito de Âncora Dimensional). Componente material: um bastão de metal precioso em forma de forquilha (no valor de T$ 1.000), que é consumido pela magia. O tipo específico de metal determina para qual plano de existência você será enviado - diferentes planos requerem diferentes metais, e alguns podem ser extremamente raros ou difíceis de encontrar, a critério do mestre. Exemplos incluem prata para o Plano Astral, ferro frio para o Reino das Fadas, ou ouro para planos celestiais.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 211",
    "ativacao": {
      "custo": 10,
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
    "alcance": "toque",
    "alvo": "pessoal",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "universal",
    "circulo": "4",
    "preparada": false,
    "escola": "convocacao",
    "chatFlavor": "",
    "origin": "",
    "tags": [],
    "chatGif": "",
    "duracao": {
      "value": 0,
      "units": "instantanea",
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
    "createdTime": 1664310461758,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!3rR4d2fWU6uIqVNv"
};