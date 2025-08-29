# Tormenta20 no Roll20 - Referência de Campos da Ficha

Este documento explica a finalidade de cada campo da ficha de personagem de **Tormenta20 no Roll20**, organizado em categorias. Pode ser usado como referência para desenvolvimento de features relacionadas.

Para imprimir o 

---

## 🎲 Atributos Básicos
- **for, des, con, int, sab, car** → Valores de atributos (Força, Destreza, Constituição, Inteligência, Sabedoria e Carisma).
- **for_mod, des_mod, con_mod, int_mod, sab_mod, car_mod** → Modificadores dos atributos (ex: For 10 = mod +0; Des 20 = mod +5). Usados em testes, perícias e defesas.
- **fakefor, fakedes, fakecon, fakeint, fakesab, fakecar** → Campos auxiliares para buffs temporários ou ajustes manuais.
- **fortemp, destemp, contemp, inttemp, sabtemp, cartemp** → Bônus temporários em atributos.

---

## 🛡️ Defesas e Resistências
- **defesatotal** → Defesa final do personagem (CA no D&D).
- **menace_defense** → Espelho da defesa usado em rolagens automáticas.
- **fortitude, reflex, will** → Testes de resistência (Fortitude, Reflexos, Vontade).
- **penalidades_armadura** → Penalidades de armadura pesada/não-proficiente.
- **defesafaketemp, defesaoutrostemp, defesaarmaduratemp, defesaescudotemp** → Ajustes temporários de defesa.

---

## ❤️ Vida e Mana
- **vidatotal / vida** → Vida máxima e atual.
- **manatotal / mana** → Mana máxima e atual.
- **menace_hp, menace_mp** → Campos automatizados de vida e mana.
- **condicaoperfisico, condicaopermental** → Efeitos que afetam testes físicos/mentais.
- **condicaopercepcao, condicaoiniciativa, condicaodefesa, condicaoreflexo** → Ajustes específicos por condição.

---

## ⚔️ Combate
- **menace_init** → Iniciativa total (ordem de turno).
- **menace_percep** → Percepção total.
- **menace_nd** → Nível de Desafio.
- **cstype** → Tipo de ataque (melee, ranged, mágico).
- **ataquetemp, danotemp, rolltemp** → Modificadores temporários.
- **escaramurca_dano, escaramurca_defesa** → Ajustes da habilidade Escaramuça.
- **lutaatributo2, atletismoatributo2** → Fórmulas alternativas para cálculos de ataque/perícia.

---

## 📚 Perícias
- **menace_[perícia]total** → Valor final da perícia (atributo base + treino + bônus).
- **[perícia]_treinada** → Se a perícia é treinada (1 = sim).
- **bonus_treino** → Bônus de +2 por ser treinado.
- **periciatemp** → Ajuste temporário em todas as perícias.

Exemplo:  
- **menace_acrobaciatotal** = Acrobacia final  
- **acrobacia_treinada** = indica se é treinada  

---

## ⚖️ Condições
Campos binários (0 = não, 1 = sim), aplicam efeitos automáticos:
- **agarrado, apavorado, caido, cego, inconsciente, envenenado, fatigado, etc.**

---

## 🎒 Inventário & Carga
- **menace_treasure** → Itens e tesouros carregados.
- **carga, limite, maxima** → Controle de carga (baseado em Força).
- **armadura1, armaduradefesa1, armadurapenalidade1** → Dados da armadura equipada.
- **armadura2** → Slot secundário.
- **proficiencias** → Lista de proficiências (armas, escudos, talentos, etc.).

---

## 🧾 Roleplay e Metadados
- **menace_name** → Nome do personagem.
- **playername** → Nome do jogador.
- **trace** → Raça.
- **torigin** → Origem.
- **tlevel** → Classe.
- **charnivel** → Nível do personagem.
- **divindade** → Deus adorado.
- **charnotes** → Anotações de RP e loot.

---

## 🔧 Extras Técnicos do Roll20
- **rolltemp, attackicon, skillsicon, defenseicon, etc.** → Ícones e botões.
- **flag_escaramurca, flag_espada_solar, flag_dano_furtivo** → Flags para ativar/desativar habilidades.
- **to, extraslot** → Slots extras para talentos ou recursos.
- **ts** → Timestamp da modificação da ficha.

---

## 📌 Resumo
- **Atributos e mods** → Base para testes e cálculos.  
- **Defesas** → Sobrevivência em combate.  
- **Vida/mana** → Recursos principais.  
- **Perícias** → Utilidade dentro/fora de combate.  
- **Condições** → Status aplicados automaticamente.  
- **Inventário** → Controle de itens e carga.  
- **Metadados** → Informações narrativas.  
- **Extras Roll20** → Automação técnica.  

---
