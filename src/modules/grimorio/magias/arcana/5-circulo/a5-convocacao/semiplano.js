module.exports = {
  "_id": "xFlTNVAkliPUlDta",
  "name": "Semiplano",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/semiplano.webp",
  "effects": [
    {
      "_id": "A6olwAs12FJ8PebT",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "2",
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
      "origin": "Compendium.tormenta20.magias.xFlTNVAkliPUlDta",
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
      "name": "adiciona alvo (1 criatura). Você cria uma semiplano labiríntico e expulsa o alvo para ele. A cada rodada, a vítima tem direito a um teste de Investigação ou Sobrevivência (CD da magia), com bônus cumulativo de +1 para cada teste já realizado, para escapar do labirinto. Quando o alvo escapa, a magia termina e o alvo reaparece no plano material no mesmo local onde estava quando a magia foi lançada. Magias como Salto Dimensional e\nTeletransporte não ajudam a escapar do\nlabirinto, mas Viagem Planar, sim.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!xFlTNVAkliPUlDta.A6olwAs12FJ8PebT"
    },
    {
      "_id": "7eSeMG1wnGoC1S55",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "5",
          "aumenta": false,
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
          "key": "duração",
          "mode": 5,
          "value": "permanente",
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
      "origin": "Compendium.tormenta20.magias.xFlTNVAkliPUlDta",
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
      "name": "muda a duração para permanente e adiciona componente material (maquete do semiplano feito de materiais preciosos no valor de T$ 5.000). Você pode lançar a magia diversas vezes para aumentar as dimensões do semiplano em +30m de lado a cada vez.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!xFlTNVAkliPUlDta.7eSeMG1wnGoC1S55"
    }
  ],
  "folder": "qpQwhvyiq8EJgExj",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Você cria uma dimensão particular. Você pode entrar no semiplano gastando uma ação padrão e 10 PM, desaparecendo do plano material como se tivesse se teletransportado. Você pode levar criaturas voluntárias que esteja tocando, ao custo de 1 PM por criatura extra. Você também pode levar objetos que esteja tocando, ao custo de 1 PM por objeto Médio ou menor, 2 PM por objeto Grande, 5 PM por Enorme e 10 PM por Colossal. Uma vez no semiplano, pode gastar uma ação completa para voltar ao plano material, no mesmo local onde estava. Caso conheça a magia Viagem Planar, pode lançá-la para voltar ao plano material em outro local. Você escolhe a forma e a aparência do semiplano — uma caverna, um asteroide que singra o éter, um palacete de cristal etc. Ele contém ar, luz e calor, mas além disso é vazio. Entretanto, você pode levar itens (mobília, ferramentas etc.) a cada viagem.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 205",
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
    "efeito": "semiplano com 30m de lado",
    "alcance": "curto",
    "alvo": "",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "arcana",
    "circulo": "5",
    "preparada": false,
    "escola": "convocacao",
    "chatFlavor": "",
    "origin": "",
    "tags": [],
    "chatGif": "",
    "duracao": {
      "value": 1,
      "units": "dia",
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
    "createdTime": 1664310462906,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!xFlTNVAkliPUlDta"
};