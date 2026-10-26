# 🧠 Memória do Projeto: ÁGORA 2026 — Jornada de Desenvolvimento de Instrutores

**Data de Atualização:** 26/10/2026  
**Responsável:** Mickael Bandeira  
**Localização do Projeto:** `C:\Users\User\Desktop\ÁGORA`  
**Tema:** Plataforma Web do Programa ÁGORA 2026 ("Diálogo que transforma")

---

## 1. Visão Geral do Projeto ÁGORA

O **ÁGORA 2026** é uma plataforma/aplicação web corporativa voltada para a **Jornada de Desenvolvimento de Instrutores** da AeC.

### Regra Fundamental de Perfis e Permissões:
> **👑 O Gestor vê TUDO:** possui controle executivo pleno e pode alternar livremente entre a visão do Gestor, a trilha do Instrutor e o cockpit do Facilitador.  
> **👨‍🏫 O Instrutor só visualiza o seu perfil:** acesso exclusivo à sua trilha, missões práticas e dossiê individual. As áreas de gestão e facilitação são estritamente bloqueadas e invisíveis.  
> **🎙️ O Facilitador só visualiza o seu perfil:** acesso exclusivo ao Cockpit de Sala (cronômetro de 5h, gestão de cadeados e manual metodológico). O portal da liderança é bloqueado e invisível.

---

## 2. Estrutura de Banco de Dados na Nuvem (Supabase)

* **URL do Projeto:** `https://mxahgjxcdtodbdbxymtb.supabase.co`
* **Anon Key:** Configurada para operações seguras do frontend (RLS ativo)
* **SDK Integrado:** `@supabase/supabase-js@2` via CDN com fallback automático para `localStorage` caso o usuário esteja offline

### Tabelas Criadas e Funcionais:

1. **`usuarios`**:
   - Cadastro e perfil dos participantes (`matricula`, `nome`, `email`, `operacao`, `gestor`, `perfil`).
   - Perfis: `instrutor`, `gestor`, `facilitador`.
2. **`jornada_respostas`**:
   - Persistência dos formulários dos Blocos 01, 02 e 03, cadeados e dados do workbook (`invite`, `locks`, `fields`, `progresso_bloco1`, `progresso_bloco2`, `progresso_bloco3`, `progresso_geral`).
3. **`missoes_praticas`**:
   - Estado das 8 missões práticas de aplicação em campo (`checks`, `texts`, `total_concluidas`).
4. **`checkpoints_lideranca`**:
   - Alinhamentos 1:1 entre gestor e liderado (`checkpoint_num` 1, 2, 3, `resposta_lideranca`, `status`, `gestor_nome`, `data_validacao`).
5. **`facilitador_sala`**:
   - Estado de sala, cronômetro de 5 horas e status de liberação de cadeados.

---

## 3. Matriz de Acesso e Permissões Implementada

| Funcionalidade / Tela | 👨‍🏫 Instrutor | 🎙️ Facilitador | 👔 Gestor (Liderança) |
| :--- | :---: | :---: | :---: |
| **Início & Trilha 360°** (`view-inicio`) | ✅ Acesso | ℹ️ Modo Metodologia | ✅ Acesso Total |
| **Ciclo 3 Meses & Forms** (`view-ciclo`) | ✅ Preenche Blocos & Missões | ✅ Modo Sala (Cadeados) | ✅ Acompanha Liderados |
| **Dossiê do Participante** (`view-dossie`) | ✅ Acesso Próprio | ❌ Oculto | ✅ Acesso Total |
| **Portal do Gestor** (`view-gestor`) | ❌ **BLOQUEADO & OCULTO** | ❌ **BLOQUEADO & OCULTO** | ✅ **Acesso Exclusivo** |
| **Checkpoints da Liderança (1, 2 e 3)** | 👁️ Apenas Leitura / Status | ❌ Oculto | ✍️ Preenche & Valida |
| **Cockpit do Facilitador** (`view-facilitador`) | ❌ **BLOQUEADO & OCULTO** | ✅ **Acesso Exclusivo** | ✅ **Acesso de Consulta** |
| **Cronômetro Regressivo (5h) & Projeção** | ❌ Oculto | ✅ Acesso Total | ✅ Acesso Total |
| **Alternador de Visão no Topo (Switcher)** | 🔒 Apenas Badge Fixa | 🔒 Apenas Badge Fixa | 👑 **Switcher Ativo (Ver Tudo)** |
| **Troca de Acesso / Logout** | ✅ Botão `🔄 Trocar Acesso` | ✅ Botão `🔄 Trocar Acesso` | ✅ Botão `🔄 Sair` |

---

## 4. Estado Atual e Validação

* ✅ **Arquivo Principal:** `index.html` (~405 KB com integração Supabase e fallback offline).
* ✅ **Equilíbrio de Tags:** DIVs (701/701, diff=0), SECTIONS (5/5, diff=0), SCRIPTS (2/2, diff=0).
* ✅ **Sincronização Bidirecional:** Salva e carrega dados em tempo real no Supabase.
* ✅ **Seletor de Instrutores no Portal do Gestor:** Permite à liderança selecionar qualquer instrutor cadastrado no Supabase e auditar seus dados e checkpoints em tempo real.

---

## 5. Aprendizados [26/10/2026]

- **Políticas RLS Permissivas para Frontend Autônomo:** Ao permitir que clientes via `anon` leiam e atualizem seus registros através de políticas adequadas (`FOR ALL TO anon, authenticated USING (true) WITH CHECK (true)`), eliminamos atritos de autorização sem demandar servidores intermediários adicionais.
- **Tratamento Híbrido Nuvem + Local:** A inclusão de um mecanismo de fallback resiliente (`localStorage` caso o Supabase falhe ou esteja offline) garante que a plataforma continue funcionando mesmo em ambientes corporativos com firewalls restritivos ou oscilação de rede.
