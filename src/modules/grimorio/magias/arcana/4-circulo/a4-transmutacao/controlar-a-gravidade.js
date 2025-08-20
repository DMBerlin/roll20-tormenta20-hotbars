module.exports = {
  "_id": "vAC1umkrWgM6aRPI",
  "name": "Controlar a Gravidade",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/controlar-gravidade.webp",
  "effects": [
    {
      "_id": "8YYT033FJ5HbfJ8H",
      "changes": [
        {
          "key": "system.pericias.atle.bonus",
          "mode": 2,
          "value": "20",
          "priority": null
        },
        {
          "key": "system.modificadores.ataque.cac",
          "mode": 2,
          "value": "-2",
          "priority": null
        },
        {
          "key": "system.modificadores.ataque.ad",
          "mode": 2,
          "value": "-2",
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
      "origin": "Item.9n6KciVkvT7bf420",
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
      "name": "Controlar a Gravidade (Reduzir)",
      "img": "systems/tormenta20/icons/magias/controlar-gravidade.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!vAC1umkrWgM6aRPI.8YYT033FJ5HbfJ8H"
    },
    {
      "origin": "Item.vAC1umkrWgM6aRPI",
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
      "_id": "EW73wHyreTzSp5oX",
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
      "name": "Controlar a Gravidade",
      "img": "systems/tormenta20/icons/magias/controlar-gravidade.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!vAC1umkrWgM6aRPI.EW73wHyreTzSp5oX"
    }
  ],
  "folder": "911fHy1VvyYmffKK",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Voc&ecirc; controla os efeitos da gravidade dentro da &aacute;rea. Ao lan&ccedil;ar a magia, escolha um dos efeitos abaixo. Enquanto a magia durar, voc&ecirc; pode usar uma a&ccedil;&atilde;o padr&atilde;o para mudar o efeito.</p>\n<p><em>Aumentar:</em> a gravidade fica mais forte. No in&iacute;cio de seus turnos, cada criatura na &aacute;rea deve fazer um teste de Atletismo. Se passar, fica fatigada. Se falhar, fica fatigada e ca&iacute;da.</p>\n<p><em>Inverter:</em> inverte a gravidade da &aacute;rea, fazendo com que criaturas e objetos &ldquo;caiam&rdquo; para cima, atingindo o topo (12m) em uma rodada. Se um obst&aacute;culo (como um teto) impedir o movimento das criaturas, elas sofrem 1d6 pontos de dano de impacto para cada 1,5m de &ldquo;queda&rdquo;. Elas podem ent&atilde;o se levantar e caminhar no obst&aacute;culo, de cabe&ccedil;a para baixo. Se n&atilde;o houver obst&aacute;culo, as criaturas e objetos ficam flutuando no topo da &aacute;rea afetada, sem poder sair do lugar. Criaturas voadoras podem se movimentar normalmente. Algu&eacute;m adjacente a algo que possa agarrar tem direito a um teste de Reflexos para evitar a &ldquo;queda&rdquo;. A criatura deve permanecer presa pela dura&ccedil;&atilde;o da magia; caso contr&aacute;rio &ldquo;cair&aacute;&rdquo;.</p>\n<p><em>Reduzir:</em> a gravidade fica mais leve. Criaturas ou objetos livres com at&eacute; 100kg flutuam para cima e para baixo conforme sua vontade, com deslocamento de voo 6m. Criaturas na &aacute;rea recebem +20 de b&ocirc;nus em testes de Atletismo para escalar e saltar. Uma criatura levitando fica inst&aacute;vel, sofrendo &ndash;2 de penalidade em testes de ataque.</p>\n<p><a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.MCED18aEe4UFeEVf\" data-id=\"MCED18aEe4UFeEVf\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Fatigado</a></p>\n<p><a class=\"content-link\" draggable=\"true\" data-uuid=\"JournalEntry.s15J5SOYixL3Ajzr.JournalEntryPage.fJFNeZeKmfHMpblz\" data-id=\"fJFNeZeKmfHMpblz\" data-type=\"JournalEntryPage\" data-tooltip=\"Text Page\">Ca&iacute;do</a></p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 186",
    "ativacao": {
      "execução": "ação",
      "custo": 10,
      "qtd": "",
      "condição": "",
      "special": ""
    },
    "duração": {
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
    "alcance": "medium",
    "alvo": "",
    "area": "cubo de 12m de lado",
    "resistencia": {
      "pericia": "",
      "atributo": "int",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "arcana",
    "circulo": "4",
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
    "createdTime": 1664310462831,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!vAC1umkrWgM6aRPI"
};