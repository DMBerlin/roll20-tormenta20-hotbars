module.exports = {
  "_id": "LCW7DDP9CfY22wna",
  "name": "Projetar Consciência",
  "type": "magia",
  "img": "systems/tormenta20/icons/magias/projetar-consciencia.webp",
  "effects": [
    {
      "_id": "g6K9JgHk876dMWV6",
      "flags": {
        "tormenta20": {
          "onuse": true,
          "pessoal": true,
          "custo": "10",
          "aumenta": false
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
      "origin": "Compendium.tormenta20.magias.LCW7DDP9CfY22wna",
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
      "name": "além do normal, sua projeção é capaz de lançar magias que não precisem de componentes materiais e tenham duração diferente de sustentada. Sua forma fantasmagórica funciona como na magia Forma Etérea, sendo afetada por magias de abjuração e essência, mas as magias que ela lança podem afetar criaturas corpóreas.",
      "img": "icons/svg/upgrade.svg",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!LCW7DDP9CfY22wna.g6K9JgHk876dMWV6"
    },
    {
      "_id": "uYkBdZYgfTImSzkG",
      "changes": [
        {
          "key": "system.attributes.movement.fly",
          "mode": 2,
          "value": "18",
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
      "origin": "Item.K86xNb1SrfDhetee",
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
      "name": "Projetar Consciência",
      "img": "systems/tormenta20/icons/magias/projetar-consciencia.webp",
      "type": "base",
      "system": {},
      "description": "",
      "statuses": [],
      "sort": 0,
      "_key": "!items.effects!LCW7DDP9CfY22wna.uYkBdZYgfTImSzkG"
    }
  ],
  "folder": "TL40iday9BQSe955",
  "sort": 0,
  "flags": {},
  "system": {
    "description": {
      "value": "<p>Esta magia faz com que sua consci&ecirc;ncia deixe seu corpo e se transporte instantaneamente para um local ou para perto de uma criatura alvo. Se escolher um local, ele precisa ser conhecido por voc&ecirc;. Se escolher uma criatura, voc&ecirc; transporta sua consci&ecirc;ncia at&eacute; onde a criatura estiver, contanto que estejam no mesmo plano.</p>\n<p>Voc&ecirc; adquire uma forma fantasmag&oacute;rica invis&iacute;vel, mas pode se mostrar sando uma a&ccedil;&atilde;o de movimento. Pode se mover em qualquer dire&ccedil;&atilde;o com deslocamento de voo 18m e, por ser incorp&oacute;reo, &eacute; capaz de atravessar objetos s&oacute;lidos, mas fica limitado a se mover dentro dos limites do local, ou dentro de alcance curto da criatura alvo. Voc&ecirc; pode ver e ouvir como se estivesse presente no local e pode falar mentalmente com qualquer criatura que possa ver, contanto que tenham um idioma em comum.</p>",
      "chat": "",
      "unidentified": ""
    },
    "source": "Tormenta20 — Edição Jogo do Ano, p. 202",
    "ativacao": {
      "execução": "ação",
      "custo": 15,
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
    "alcance": "any",
    "alvo": "local ou criatura conhecidos",
    "area": "",
    "resistencia": {
      "pericia": "",
      "atributo": "sab",
      "bonus": 0,
      "txt": ""
    },
    "rolls": [],
    "tipo": "div",
    "circulo": "5",
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
    "createdTime": 1664310461826,
    "modifiedTime": 1684622830660,
    "lastModifiedBy": "t20builder000000",
    "duplicateSource": null,
    "exportSource": null
  },
  "_key": "!items!LCW7DDP9CfY22wna"
};