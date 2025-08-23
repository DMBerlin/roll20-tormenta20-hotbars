module.exports = {
  "_id": "WrXV3FSwTkh5Hgtc",
  "name": "Buraco Negro",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/buraco-negro.webp",
  "effects": [
    {
      "_id": "IZkYfoMdeEGdbnWl",
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
      "origin": "Compendium.tormenta20.magias.WrXV3FSwTkh5Hgtc",
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
      "name": "muda o efeito para que você não seja afetado.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!WrXV3FSwTkh5Hgtc.IZkYfoMdeEGdbnWl"
    }
  ],
  "folder": "seRZE2QmkdqIYGlT",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "Esta magia cria um vácuo capaz de sugar tudo nas proximidades. Escolha um espaço desocupado para o buraco negro. No início de cada um de seus três turnos seguintes, todas as criaturas a até alcance longo do buraco negro, incluindo você, devem fazer um teste de Fortitude. Em caso de falha, ficam caídas e são puxadas 30m na direção do buraco. Objetos soltos também são puxados. Criaturas podem gastar uma ação de movimento para se segurar em algum objeto fixo, recebendo +2 em seus testes de resistência. Criaturas e objetos que toquem o buraco negro são sugadas, desaparecendo para sempre.Criaturas e objetos que iniciem seu turno no espaço do buraco negro devem gastar uma ação de movimento e fazer um teste de Fortitude. Se passarem, podem escapar se arrastando (metade de seu deslocamento) para longe dele. Se falharem, perdem a ação (mas podem gastar outra para tentar novamente). Se terminarem seu turno no espaço do buraco negro, são sugadas, desaparecendo para sempre. Não se conhece o destino das coisas sugadas pelo buraco negro, uma vez que jamais retornam. Alguns estudiosos sugerem que podem ser enviadas para outros mundos. Muitos clérigos da Noite acreditam que esta magia abre um portal para Sombria, o lar de sua deusa, e sonham um dia poder realizar essa jornada.",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 182",
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
    "efeito": "Buraco Negro",
    "alcance": "longo",
    "alvo": "",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": "Fortitude parcial"
    },
    "rolls": [],
    "tipo": "universal",
    "circulo": "5",
    "preparada": false,
    "escola": "abjuracao",
    "chatFlavor": "",
    "origin": "",
    "tags": [],
    "chatGif": "",
    "duracao": {
      "value": 3,
      "units": "rodada",
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
    "createdTime": 1664310461917,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!WrXV3FSwTkh5Hgtc"
};