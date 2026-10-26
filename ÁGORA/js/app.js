/* ==========================================================================
   ÁGORA 2026 — CONTROLADOR PRINCIPAL DA APLICAÇÃO (ENGENHARIA SÊNIOR)
   Gerenciamento de Estado, Cadeados de 3 Blocos, 3 Forms Integrados, Dossiê e Facilitador
   ========================================================================== */

const STORAGE_KEY = "agora_jornada_instrutores_2026_state";

window.AgoraApp = {
  state: null,
  activeView: "view-inicio",
  activeBlock: 1,
  pendingUnlockBlockId: null,
  timerInterval: null,
  timerSecondsRemaining: 15 * 60,
  timerRunning: false,
  projectorStageIdx: 0,

  /**
   * Estado Inicial Padrão (Bloco 1 Aberto, Blocos 2 e 3 com Cadeado)
   */
  getDefaultState: function () {
    return {
      invite: {
        date: "Encontro 01 • Ciclo 2026",
        time: "08h30 às 13h30 (5 horas)",
        location: "Espaço Ágora • Sala de Desenvolvimento"
      },
      locks: {
        block1Unlocked: true,
        block2Unlocked: false,
        block3Unlocked: false,
        block1Completed: false,
        block2Completed: false,
        block3Completed: false,
        block1SubmittedAt: null,
        block2SubmittedAt: null,
        block3SubmittedAt: null
      },
      fields: {
        nome: "",
        areaAtuacao: "",
        tempoExperiencia: "",
        oqueTrouxe: "",
        minhaTrajetoria: "",
        minhasConquistas: "",
        meuSuperpoder: "",
        meuDesenvolvimento: "",
        meuFuturo: "",
        expectativasEncontro: "",
        interessesSelecionados: [],
        sabedoriaMarcantes: "",
        sabedoriaEnsinaram: "",
        sabedoriaInfluenciam: "",
        sabedoriaFuturo: "",
        sabedoriaMaiorAprendizagem: "",
        cavernaSombras: "",
        cavernaRessignificar: "",
        cavernaCrencaAntiga: "",
        cavernaNovaPerspectiva: "",
        cavernaNovoOlhar: "",
        cavernaImpacto: "",
        cavernaProximoPasso: "",
        discSelected: "I",
        discScores: { D: 25, I: 25, S: 25, C: 25 },
        discPontosFortes: "",
        discBonsResultados: "",
        discPontosDesenvolvimento: "",
        discDesafiosMudancas: "",
        discContribuicaoInstrutor: "",
        discReflexao: "",
        hardSkillsRatings: {},
        softSkillsRatings: {},
        raioxFortalezas: "",
        raioxDesenvolver: "",
        raioxComoEvoluir: "",
        raioxCompromisso: "",
        caminhosRodasResumo: "",
        caminhosAreaEscolhida: "",
        caminhosMotivoEscolha: "",
        caminhosRepresentanteApoio: "",
        inspiraQuem: "",
        inspiraAtitudes: "",
        inspiraAprendizados: "",
        inspiraFoco: "",
        inspiraFuturo: "",
        inspiraReflexao: "",
        acaoTemaEscolhido: "",
        acaoOficinaPratica: "",
        acaoSituacaoFicticia: "",
        acaoFeedbackRecebido: "",
        vivenciasAreaVisitada: "",
        vivenciasAnfitriao: "",
        vivenciasObservacoes: "",
        vivenciasDesafioOrientado: "",
        networkNota: 7,
        networkContribui: "",
        networkAumentar: "",
        presenceRatings: {},
        conexoesPessoasAreas: "",
        conexoesFortalecer: "",
        linkedinChecks: {},
        linkedinAcao: "",
        networkPlanoConexao: "",
        networkPlanoObjetivo: "",
        networkPlanoPrimeiraAcao: "",
        marcaLembrado: "",
        marcaValores: "",
        marcaDiferenciais: "",
        marcaFraseSintese: "",
        marcaAtitudeObservavel: "",
        pdiObj1Competencia: "",
        pdiObj1Acoes: "",
        pdiObj1Prazo: "",
        pdiObj1Evidencias: "",
        pdiObj2Competencia: "",
        pdiObj2Acoes: "",
        pdiObj2Prazo: "",
        pdiObj2Evidencias: "",
        pdiQuemApoia: "",
        pdiMeuCompromisso: "",
        cartaQuemQueroSer: "",
        cartaOqueConquistar: "",
        cartaComoEvoluir: "",
        cartaQualImpacto: "",
        cartaMensagemFinal: "",
        anotacoesLivres: "",
        saidaAprendizado: "",
        saidaPrimeiraAcao: "",
        saidaApoio: ""
      }
    };
  },

  /**
   * Inicialização da Aplicação
   */
  init: function () {
    this.loadState();
    this.renderDynamicLists();
    this.bindFormInputs();
    this.refreshAllUI();
  },

  loadState: function () {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        const def = this.getDefaultState();
        this.state = {
          invite: { ...def.invite, ...(parsed.invite || {}) },
          locks: { ...def.locks, ...(parsed.locks || {}) },
          fields: { ...def.fields, ...(parsed.fields || {}) }
        };
      } else {
        this.state = this.getDefaultState();
      }
    } catch (e) {
      console.error("Erro ao carregar estado:", e);
      this.state = this.getDefaultState();
    }
  },

  saveState: function () {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error("Erro ao salvar estado:", e);
    }
  },

  /**
   * Navegação entre Abas Principais
   */
  switchView: function (viewId) {
    this.activeView = viewId;
    document.querySelectorAll(".app-view").forEach((el) => {
      el.classList.toggle("active", el.id === viewId);
    });
    document.querySelectorAll(".nav-tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-view") === viewId);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.refreshAllUI();
  },

  /**
   * Seleção de Bloco na Trilha (Verifica Cadeado!)
   */
  selectBlock: function (blockId) {
    const isUnlocked = this.state.locks[`block${blockId}Unlocked`];
    if (!isUnlocked) {
      this.openUnlockModal(blockId);
      return;
    }
    this.activeBlock = blockId;
    document.querySelectorAll(".block-form-panel").forEach((panel) => {
      panel.style.display = panel.id === `form-bloco-${blockId}` ? "block" : "none";
    });
    this.updateBlockCardsUI();
    if (blockId === 2) {
      setTimeout(() => {
        window.AgoraCharts.renderCompetencyRadar(
          "raiox-radar-canvas",
          this.state.fields.hardSkillsRatings,
          this.state.fields.softSkillsRatings
        );
      }, 60);
    }
    const workspaceEl = document.getElementById("active-block-workspace");
    if (workspaceEl) {
      workspaceEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  },

  /**
   * Abre o Modal do Cadeado quando o usuário clica num Bloco trancado
   */
  openUnlockModal: function (blockId) {
    this.pendingUnlockBlockId = blockId;
    const prevBlock = blockId - 1;
    const blockMeta = window.AGORA_DATA.cycleBlocks.find((b) => b.id === blockId);
    const titleEl = document.getElementById("unlock-modal-title");
    const descEl = document.getElementById("unlock-modal-desc");
    const keyInput = document.getElementById("facilitator-key-input");

    if (titleEl && blockMeta) {
      titleEl.textContent = `🔒 ${blockMeta.code} (${blockMeta.month}) está bloqueado`;
    }
    if (descEl) {
      descEl.innerHTML = `
        Para destravar o <strong>Bloco 0${blockId}</strong> automaticamente, preencha e clique em 
        <strong>"Concluir e Enviar Forms do Bloco 0${prevBlock}"</strong>.<br><br>
        Se você é o(a) <strong>Facilitador(a)</strong> ou deseja liberar este bloco antecipadamente para apresentação, insira a chave abaixo (padrão: <code>AGORA2026</code>):
      `;
    }
    if (keyInput) keyInput.value = "";
    const modal = document.getElementById("unlock-modal");
    if (modal) modal.classList.add("open");
  },

  closeUnlockModal: function () {
    const modal = document.getElementById("unlock-modal");
    if (modal) modal.classList.remove("open");
    this.pendingUnlockBlockId = null;
  },

  confirmFacilitatorUnlock: function () {
    const keyInput = document.getElementById("facilitator-key-input");
    const typed = (keyInput ? keyInput.value : "").trim().toUpperCase();
    if (typed === window.AGORA_DATA.brand.facilitatorKey || typed === "AGORA" || typed === "1234") {
      const bId = this.pendingUnlockBlockId || 2;
      this.state.locks[`block${bId}Unlocked`] = true;
      this.saveState();
      this.closeUnlockModal();
      this.showToast(`🔓 Bloco 0${bId} destravado com sucesso pela Chave do Facilitador!`);
      this.selectBlock(bId);
    } else {
      this.showToast("⚠️ Chave inválida. Use AGORA2026 para liberar.");
    }
  },

  /**
   * Destrava ou Tranca um Bloco diretamente pelo Cockpit do Facilitador
   */
  toggleBlockLockAdmin: function (blockId, forceState) {
    if (blockId === 1) {
      this.state.locks.block1Unlocked = true;
    } else {
      const curr = this.state.locks[`block${blockId}Unlocked`];
      this.state.locks[`block${blockId}Unlocked`] = forceState != null ? forceState : !curr;
    }
    this.saveState();
    this.refreshAllUI();
    const stateLabel = this.state.locks[`block${blockId}Unlocked`] ? "🔓 Destravado" : "🔒 Bloqueado";
    this.showToast(`Bloco 0${blockId} agora está: ${stateLabel}`);
  },

  /**
   * Submissão do Forms de cada Bloco -> Destrava automaticamente o próximo Bloco!
   */
  submitBlockForm: function (blockId) {
    const nowStr = new Date().toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    this.state.locks[`block${blockId}Completed`] = true;
    this.state.locks[`block${blockId}SubmittedAt`] = nowStr;

    if (blockId === 1) {
      this.state.locks.block2Unlocked = true;
      this.saveState();
      this.refreshAllUI();
      this.showToast("🎉 Forms do Bloco 01 enviado! O Cadeado do BLOCO 02 (Mês 2) foi DESTRAVADO!");
      setTimeout(() => this.selectBlock(2), 650);
    } else if (blockId === 2) {
      this.state.locks.block3Unlocked = true;
      this.saveState();
      this.refreshAllUI();
      this.showToast("🎉 Forms do Bloco 02 enviado! O Cadeado do BLOCO 03 (Mês 3) foi DESTRAVADO!");
      setTimeout(() => this.selectBlock(3), 650);
    } else if (blockId === 3) {
      this.saveState();
      this.refreshAllUI();
      this.showToast("🏆 Parabéns! Você concluiu todos os 3 Blocos do Ciclo ÁGORA! Abrindo seu Dossiê Consolidado...");
      setTimeout(() => this.switchView("view-dossie"), 800);
    }
  },

  /**
   * Calcula o percentual de preenchimento de cada Bloco (0 a 100%)
   */
  getBlockProgress: function (blockId) {
    const f = this.state.fields;
    if (blockId === 1) {
      const checks = [
        !!f.nome,
        !!f.areaAtuacao,
        !!f.tempoExperiencia,
        !!f.minhaTrajetoria,
        !!f.meuSuperpoder,
        !!f.expectativasEncontro,
        (f.interessesSelecionados || []).length > 0,
        !!f.sabedoriaMarcantes,
        !!f.sabedoriaMaiorAprendizagem,
        !!f.cavernaSombras,
        !!f.cavernaNovaPerspectiva,
        !!f.cavernaProximoPasso,
        !!f.discSelected,
        !!f.discPontosFortes,
        !!f.discReflexao
      ];
      const done = checks.filter(Boolean).length;
      return Math.round((done / checks.length) * 100);
    }

    if (blockId === 2) {
      const hsCount = Object.keys(f.hardSkillsRatings || {}).length;
      const ssCount = Object.keys(f.softSkillsRatings || {}).length;
      const checks = [
        hsCount >= 4,
        hsCount === 8,
        ssCount >= 5,
        ssCount === 10,
        !!f.raioxFortalezas,
        !!f.raioxCompromisso,
        !!f.caminhosRodasResumo,
        !!f.caminhosAreaEscolhida,
        !!f.inspiraQuem,
        !!f.inspiraAtitudes,
        !!f.inspiraReflexao,
        !!f.acaoTemaEscolhido,
        !!f.acaoOficinaPratica,
        !!f.acaoSituacaoFicticia
      ];
      const done = checks.filter(Boolean).length;
      return Math.round((done / checks.length) * 100);
    }

    if (blockId === 3) {
      const prCount = Object.keys(f.presenceRatings || {}).length;
      const lkCount = Object.values(f.linkedinChecks || {}).filter(Boolean).length;
      const checks = [
        !!f.vivenciasAreaVisitada,
        !!f.vivenciasObservacoes,
        !!f.vivenciasDesafioOrientado,
        !!f.networkContribui,
        prCount >= 4,
        lkCount >= 3,
        !!f.marcaLembrado,
        !!f.marcaFraseSintese,
        !!f.pdiObj1Competencia,
        !!f.pdiObj1Acoes,
        !!f.pdiObj1Prazo,
        !!f.pdiMeuCompromisso,
        !!f.cartaQuemQueroSer,
        !!f.cartaMensagemFinal,
        !!f.saidaPrimeiraAcao
      ];
      const done = checks.filter(Boolean).length;
      return Math.round((done / checks.length) * 100);
    }
    return 0;
  },

  /**
   * Renderiza elementos dinâmicos (Tabela de 5 Eixos, Chips de Interesse, Raio-X, Presença, LinkedIn, Facilitador)
   */
  renderDynamicLists: function () {
    // 1. Tabela Matriz dos 5 Eixos
    const tbody = document.getElementById("matrix-5axes-tbody");
    if (tbody) {
      tbody.innerHTML = window.AGORA_DATA.matrixAxes
        .map((row) => {
          const badgeClass = `badge-b${row.blocoId}`;
          return `
            <tr>
              <td>
                <span class="matrix-block-badge ${badgeClass}">${row.blocoLabel}</span>
                <div style="font-weight:800;color:var(--agora-deep);font-size:0.96rem;">${row.title}</div>
              </td>
              <td>${row.objetivo}</td>
              <td><strong>${row.atividadePratica}</strong><br><small style="color:var(--agora-text-muted);">${row.workbookPages}</small></td>
              <td>${row.quemContribui}</td>
            </tr>
          `;
        })
        .join("");
    }

    // 2. Chips do Mapa de Interesses (Bloco 01)
    const chipsContainer = document.getElementById("interest-chips-container");
    if (chipsContainer) {
      chipsContainer.innerHTML = window.AGORA_DATA.interestTopics
        .map(
          (topic) => `
          <span class="interest-chip" data-topic="${topic}" onclick="AgoraApp.toggleInterestTopic('${topic}')">
            + ${topic}
          </span>
        `
        )
        .join("");
    }

    // 3. Quiz Interativo DISC (Bloco 01)
    const quizContainer = document.getElementById("disc-quiz-container");
    if (quizContainer) {
      quizContainer.innerHTML = window.AGORA_DATA.discQuizQuestions
        .map(
          (item, qIdx) => `
          <div style="margin-bottom:0.85rem;padding-bottom:0.75rem;border-bottom:1px solid var(--agora-border);">
            <div style="font-weight:700;font-size:0.85rem;color:var(--agora-deep);margin-bottom:0.45rem;">${item.q}</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.4rem;">
              ${item.options
                .map(
                  (opt) => `
                <label style="display:flex;align-items:flex-start;gap:0.4rem;font-size:0.78rem;background:var(--agora-white);padding:0.4rem 0.55rem;border-radius:6px;border:1px solid var(--agora-border);cursor:pointer;">
                  <input type="radio" name="disc_q_${qIdx}" value="${opt.type}" onchange="AgoraApp.calculateDiscFromQuiz()" style="margin-top:2px;">
                  <span><strong>(${opt.type})</strong> ${opt.label}</span>
                </label>
              `
                )
                .join("")}
            </div>
          </div>
        `
        )
        .join("");
    }

    // 4. Hard Skills & Soft Skills (Bloco 02 — Raio-X)
    const hsContainer = document.getElementById("hard-skills-list");
    if (hsContainer) {
      hsContainer.innerHTML = window.AGORA_DATA.hardSkills
        .map((sk, idx) => this.buildSkillRowHTML("hard", sk.id, `${idx + 1}. ${sk.name}`))
        .join("");
    }

    const ssContainer = document.getElementById("soft-skills-list");
    if (ssContainer) {
      ssContainer.innerHTML = window.AGORA_DATA.softSkills
        .map((sk, idx) => this.buildSkillRowHTML("soft", sk.id, `${idx + 1}. ${sk.name}`))
        .join("");
    }

    // 5. Select de Áreas para Explorar (Bloco 02 e Bloco 03)
    const areaSelects = ["field-caminhosAreaEscolhida", "field-vivenciasAreaVisitada"];
    areaSelects.forEach((selId) => {
      const sel = document.getElementById(selId);
      if (sel) {
        sel.innerHTML =
          `<option value="">Selecione uma área participante...</option>` +
          window.AGORA_DATA.explorationAreas.map((a) => `<option value="${a}">${a}</option>`).join("");
      }
    });

    // 6. Presença Profissional (Escala 1 a 5 — Bloco 03)
    const presContainer = document.getElementById("presence-statements-list");
    if (presContainer) {
      presContainer.innerHTML = window.AGORA_DATA.presenceStatements
        .map(
          (st, idx) => `
          <div class="presence-row">
            <span class="skill-name">${idx + 1}. ${st.text}</span>
            <div class="rating-group-1to4" data-presence-id="${st.id}">
              ${[1, 2, 3, 4, 5]
                .map(
                  (n) => `
                <button type="button" class="rate-btn" data-val="${n}" onclick="AgoraApp.setPresenceRating('${st.id}', ${n})">${n}</button>
              `
                )
                .join("")}
            </div>
          </div>
        `
        )
        .join("");
    }

    // 7. Checklist LinkedIn (7 itens — Bloco 03)
    const lkContainer = document.getElementById("linkedin-checklist-items");
    if (lkContainer) {
      lkContainer.innerHTML = window.AGORA_DATA.linkedinChecklist
        .map(
          (item) => `
          <label class="check-item-row">
            <input type="checkbox" id="chk-${item.id}" onchange="AgoraApp.toggleLinkedinCheck('${item.id}', this.checked)">
            <span>${item.text}</span>
          </label>
        `
        )
        .join("");
    }

    // 8. Cockpit do Facilitador (12 Etapas + 8 Situações Comuns)
    this.renderFacilitatorCockpit();
  },

  buildSkillRowHTML: function (group, skillId, label) {
    return `
      <div class="skill-row">
        <span class="skill-name">${label}</span>
        <div class="rating-group-1to4" data-skill-group="${group}" data-skill-id="${skillId}">
          ${[1, 2, 3, 4]
            .map(
              (lvl) => `
            <button type="button" class="rate-btn" data-val="${lvl}" title="Nível ${lvl}" onclick="AgoraApp.setSkillRating('${group}', '${skillId}', ${lvl})">${lvl}</button>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  },

  /**
   * Vincula todos os inputs com id="field-<nome>" ao estado e salva em tempo real
   */
  bindFormInputs: function () {
    document.querySelectorAll("[data-field]").forEach((input) => {
      const fieldName = input.getAttribute("data-field");
      input.addEventListener("input", (e) => {
        this.state.fields[fieldName] = e.target.value;
        this.saveState();
        this.updateLivePreviews();
      });
    });

    // Inputs do Convite
    document.querySelectorAll("[data-invite]").forEach((input) => {
      const key = input.getAttribute("data-invite");
      input.addEventListener("input", (e) => {
        this.state.invite[key] = e.target.value;
        this.saveState();
      });
    });
  },

  /**
   * Interações Específicas dos Componentes
   */
  toggleInterestTopic: function (topic) {
    const arr = this.state.fields.interessesSelecionados || [];
    const idx = arr.indexOf(topic);
    if (idx >= 0) arr.splice(idx, 1);
    else arr.push(topic);
    this.state.fields.interessesSelecionados = arr;
    this.saveState();
    this.refreshAllUI();
  },

  selectDiscProfile: function (letter) {
    this.state.fields.discSelected = letter;
    if (letter === "D") this.state.fields.discScores = { D: 45, I: 25, S: 15, C: 15 };
    if (letter === "I") this.state.fields.discScores = { D: 20, I: 45, S: 23, C: 12 };
    if (letter === "S") this.state.fields.discScores = { D: 12, I: 23, S: 45, C: 20 };
    if (letter === "C") this.state.fields.discScores = { D: 15, I: 15, S: 25, C: 45 };
    this.saveState();
    this.refreshAllUI();
  },

  calculateDiscFromQuiz: function () {
    const counts = { D: 10, I: 10, S: 10, C: 10 };
    window.AGORA_DATA.discQuizQuestions.forEach((_, qIdx) => {
      const checked = document.querySelector(`input[name="disc_q_${qIdx}"]:checked`);
      if (checked && counts[checked.value] != null) {
        counts[checked.value] += 15;
      }
    });
    const total = counts.D + counts.I + counts.S + counts.C;
    const scores = {
      D: Math.round((counts.D / total) * 100),
      I: Math.round((counts.I / total) * 100),
      S: Math.round((counts.S / total) * 100),
      C: Math.round((counts.C / total) * 100)
    };
    let topLetter = "I";
    let maxVal = -1;
    Object.entries(scores).forEach(([k, v]) => {
      if (v > maxVal) {
        maxVal = v;
        topLetter = k;
      }
    });
    this.state.fields.discScores = scores;
    this.state.fields.discSelected = topLetter;
    this.saveState();
    this.refreshAllUI();
  },

  setSkillRating: function (group, skillId, level) {
    if (group === "hard") {
      this.state.fields.hardSkillsRatings[skillId] = level;
    } else {
      this.state.fields.softSkillsRatings[skillId] = level;
    }
    this.saveState();
    this.refreshAllUI();
  },

  setPresenceRating: function (statementId, level) {
    this.state.fields.presenceRatings[statementId] = level;
    this.saveState();
    this.refreshAllUI();
  },

  toggleLinkedinCheck: function (itemId, checked) {
    this.state.fields.linkedinChecks[itemId] = checked;
    this.saveState();
    this.refreshAllUI();
  },

  scrollToSection: function (sectionId, btnEl) {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (btnEl && btnEl.parentElement) {
      btnEl.parentElement.querySelectorAll(".subnav-step-btn").forEach((b) => b.classList.remove("active"));
      btnEl.classList.add("active");
    }
  },

  /**
   * Atualiza toda a interface com base no state atual
   */
  refreshAllUI: function () {
    const f = this.state.fields;

    // Popula inputs simples
    document.querySelectorAll("[data-field]").forEach((input) => {
      const k = input.getAttribute("data-field");
      if (f[k] != null && document.activeElement !== input) {
        input.value = f[k];
      }
    });

    document.querySelectorAll("[data-invite]").forEach((input) => {
      const k = input.getAttribute("data-invite");
      if (this.state.invite[k] != null && document.activeElement !== input) {
        input.value = this.state.invite[k];
      }
    });

    // Atualiza Chips de Interesse
    document.querySelectorAll(".interest-chip").forEach((chip) => {
      const topic = chip.getAttribute("data-topic");
      const isSel = (f.interessesSelecionados || []).includes(topic);
      chip.classList.toggle("selected", isSel);
      chip.textContent = (isSel ? "✓ " : "+ ") + topic;
    });

    // Atualiza Cards DISC
    document.querySelectorAll(".disc-card").forEach((card) => {
      const letter = card.getAttribute("data-disc");
      card.classList.toggle("selected-profile", f.discSelected === letter);
    });
    window.AgoraCharts.renderDiscBars(f.discScores, f.discSelected);

    // Atualiza Botões 1 a 4 de Hard e Soft Skills
    document.querySelectorAll("[data-skill-group]").forEach((groupEl) => {
      const grp = groupEl.getAttribute("data-skill-group");
      const sId = groupEl.getAttribute("data-skill-id");
      const val = grp === "hard" ? f.hardSkillsRatings[sId] : f.softSkillsRatings[sId];
      groupEl.querySelectorAll(".rate-btn").forEach((btn) => {
        const bVal = Number(btn.getAttribute("data-val"));
        btn.className = "rate-btn" + (val === bVal ? ` active-${bVal}` : "");
      });
    });

    window.AgoraCharts.renderCompetencyRadar("raiox-radar-canvas", f.hardSkillsRatings, f.softSkillsRatings);

    // Atualiza Escala 1 a 5 de Presença Profissional
    document.querySelectorAll("[data-presence-id]").forEach((grpEl) => {
      const pId = grpEl.getAttribute("data-presence-id");
      const val = f.presenceRatings[pId];
      grpEl.querySelectorAll(".rate-btn").forEach((btn) => {
        const bVal = Number(btn.getAttribute("data-val"));
        btn.className = "rate-btn" + (val === bVal ? " active-4" : "");
      });
    });

    // Atualiza Checkboxes do LinkedIn
    window.AGORA_DATA.linkedinChecklist.forEach((item) => {
      const chk = document.getElementById(`chk-${item.id}`);
      if (chk) chk.checked = !!f.linkedinChecks[item.id];
    });

    this.updateLivePreviews();
    this.updateBlockCardsUI();
    this.renderDossierSummary();
  },

  /**
   * Atualiza Previews ao vivo (Passaporte, Score de Presença, Força do LinkedIn, Progresso Global)
   */
  updateLivePreviews: function () {
    const f = this.state.fields;

    // Passaporte ao Vivo
    const initials = (f.nome || "Instrutor Ágora")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((n) => n[0].toUpperCase())
      .join("");
    this.setText("pass-avatar-initials", initials || "ÁG");
    this.setText("pass-live-nome", f.nome || "Seu Nome Completo");
    this.setText("pass-live-area", f.areaAtuacao || "Área de Atuação");
    this.setText("pass-live-tempo", f.tempoExperiencia || "—");
    this.setText("pass-live-superpoder", f.meuSuperpoder || "—");
    this.setText("pass-live-futuro", f.meuFuturo || "—");
    this.setText(
      "pass-live-interesses",
      (f.interessesSelecionados || []).length
        ? f.interessesSelecionados.join(" • ")
        : "Selecione seus temas no Mapa de Interesses ao lado"
    );

    // Label da Nota de Networking (0 a 10)
    this.setText("network-nota-display", `${f.networkNota || 7} / 10`);

    // Score de Presença Profissional (6 itens de 1 a 5 = máx 30)
    const presVals = Object.values(f.presenceRatings || {}).map(Number);
    const presSum = presVals.reduce((a, b) => a + b, 0);
    this.setText("presence-score-badge", `${presSum} / 30 pts`);

    // Força do LinkedIn (7 itens)
    const lkDone = Object.values(f.linkedinChecks || {}).filter(Boolean).length;
    const lkPct = Math.round((lkDone / 7) * 100);
    this.setText("linkedin-strength-label", `${lkDone}/7 itens (${lkPct}%)`);
    const lkBar = document.getElementById("linkedin-strength-bar");
    if (lkBar) lkBar.style.width = `${lkPct}%`;

    // Progresso dos 3 Blocos e Global
    const p1 = this.getBlockProgress(1);
    const p2 = this.getBlockProgress(2);
    const p3 = this.getBlockProgress(3);
    const globalPct = Math.round((p1 + p2 + p3) / 3);

    this.setText("nav-global-pct", `${globalPct}%`);
    const navBar = document.getElementById("nav-global-bar");
    if (navBar) navBar.style.width = `${globalPct}%`;
  },

  /**
   * Atualiza os 3 Cards de Bloco com Cadeado (🔓 Aberto / 🔒 Bloqueado / ✅ Concluído)
   */
  updateBlockCardsUI: function () {
    [1, 2, 3].forEach((bId) => {
      const card = document.getElementById(`trail-card-b${bId}`);
      const iconEl = document.getElementById(`trail-icon-b${bId}`);
      const statusTextEl = document.getElementById(`trail-status-b${bId}`);
      const pctEl = document.getElementById(`trail-pct-b${bId}`);
      const fillEl = document.getElementById(`trail-fill-b${bId}`);
      const actionBtnEl = document.getElementById(`trail-btn-b${bId}`);

      const isUnlocked = this.state.locks[`block${bId}Unlocked`];
      const isCompleted = this.state.locks[`block${bId}Completed`];
      const submittedAt = this.state.locks[`block${bId}SubmittedAt`];
      const pct = this.getBlockProgress(bId);

      if (card) {
        card.classList.remove("unlocked", "locked", "completed", "active-selected");
        if (isCompleted) card.classList.add("completed");
        else if (isUnlocked) card.classList.add("unlocked");
        else card.classList.add("locked");

        if (this.activeBlock === bId && isUnlocked) {
          card.classList.add("active-selected");
        }
      }

      if (iconEl) {
        iconEl.textContent = isCompleted ? "✅" : isUnlocked ? "🔓" : "🔒";
      }

      if (statusTextEl) {
        if (isCompleted) {
          statusTextEl.innerHTML = `<span style="color:#059669;">● Concluído (${submittedAt || "Enviado"})</span>`;
        } else if (isUnlocked) {
          statusTextEl.innerHTML = `<span style="color:var(--agora-turquoise);">● Cadeado Aberto • Em preenchimento</span>`;
        } else {
          statusTextEl.innerHTML = `<span style="color:#64748B;">🔒 Aguardando conclusão do Bloco 0${bId - 1}</span>`;
        }
      }

      if (pctEl) pctEl.textContent = `${pct}%`;
      if (fillEl) fillEl.style.width = `${pct}%`;

      if (actionBtnEl) {
        if (!isUnlocked) {
          actionBtnEl.className = "btn btn-outline btn-sm";
          actionBtnEl.innerHTML = `🔒 Bloqueado (Clique p/ detalhes)`;
        } else if (this.activeBlock === bId) {
          actionBtnEl.className = "btn btn-turquoise btn-sm";
          actionBtnEl.innerHTML = `✍️ Editando Forms do Bloco 0${bId}`;
        } else {
          actionBtnEl.className = "btn btn-primary btn-sm";
          actionBtnEl.innerHTML = `📂 Abrir Forms do Bloco 0${bId}`;
        }
      }

      // Atualiza também os botões de controle no Cockpit do Facilitador
      const adminBadge = document.getElementById(`admin-lock-status-b${bId}`);
      if (adminBadge) {
        adminBadge.textContent = isUnlocked ? "🔓 Destravado" : "🔒 Trancado";
        adminBadge.style.color = isUnlocked ? "#10B981" : "#F59E0B";
      }
    });
  },

  /**
   * Renderiza o Dossiê Consolidado (Aba 3)
   */
  renderDossierSummary: function () {
    const container = document.getElementById("dossier-dynamic-content");
    if (!container) return;

    const f = this.state.fields;
    const l = this.state.locks;
    const discInfo = window.AGORA_DATA.discProfiles[f.discSelected || "I"];

    container.innerHTML = `
      <div class="dossier-print-section" style="background:var(--agora-white);border:1px solid var(--agora-border-strong);border-radius:var(--radius-xl);padding:2rem;margin-bottom:1.75rem;box-shadow:var(--shadow-sm);">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;border-bottom:2px solid var(--agora-border);padding-bottom:1.2rem;margin-bottom:1.5rem;">
          <div>
            <span class="wb-page-badge">PASSAPORTE & IDENTIDADE DO INSTRUTOR</span>
            <h3 style="font-size:1.6rem;color:var(--agora-deep);">${f.nome || "Instrutor(a) ainda não identificado(a)"}</h3>
            <p style="color:var(--agora-text-muted);font-weight:600;">${f.areaAtuacao || "Área não informada"} • Experiência: ${f.tempoExperiencia || "—"}</p>
          </div>
          <div style="display:flex;gap:0.6rem;flex-wrap:wrap;">
            <span class="matrix-block-badge badge-b1">Bloco 01: ${l.block1Completed ? "✅ Concluído" : `${this.getBlockProgress(1)}%`}</span>
            <span class="matrix-block-badge badge-b2">Bloco 02: ${l.block2Completed ? "✅ Concluído" : l.block2Unlocked ? `${this.getBlockProgress(2)}%` : "🔒 Bloqueado"}</span>
            <span class="matrix-block-badge badge-b3">Bloco 03: ${l.block3Completed ? "✅ Concluído" : l.block3Unlocked ? `${this.getBlockProgress(3)}%` : "🔒 Bloqueado"}</span>
          </div>
        </div>

        <div class="form-grid-3" style="margin-bottom:1.25rem;">
          <div class="wb-field-card">
            <div class="wb-field-label">⚡ Meu Superpoder</div>
            <p style="font-size:0.9rem;">${f.meuSuperpoder || "—"}</p>
          </div>
          <div class="wb-field-card">
            <div class="wb-field-label">🧭 Perfil DISC Predominante</div>
            <p style="font-size:0.9rem;"><strong>${discInfo.letter} — ${discInfo.name}</strong> (${discInfo.focus})</p>
          </div>
          <div class="wb-field-card">
            <div class="wb-field-label">💎 Frase-Síntese da Minha Marca</div>
            <p style="font-size:0.9rem;font-style:italic;">"${f.marcaFraseSintese || "Ainda não definida no Bloco 03"}"</p>
          </div>
        </div>

        <div class="form-grid-2">
          <div class="wb-field-card">
            <div class="wb-field-label">🕯️ Ressignificação (Saindo da Caverna — Bloco 01)</div>
            <p style="font-size:0.86rem;"><strong>Sombra questionada:</strong> ${f.cavernaCrencaAntiga || f.cavernaSombras || "—"}</p>
            <p style="font-size:0.86rem;color:var(--agora-blue);margin-top:0.35rem;"><strong>Nova perspectiva praticável:</strong> ${f.cavernaNovaPerspectiva || f.cavernaProximoPasso || "—"}</p>
          </div>
          <div class="wb-field-card">
            <div class="wb-field-label">🗺️ Exploração & Vivência entre Áreas (Blocos 02 e 03)</div>
            <p style="font-size:0.86rem;"><strong>Área Explorada (Bloco 2):</strong> ${f.caminhosAreaEscolhida || "—"}</p>
            <p style="font-size:0.86rem;margin-top:0.35rem;"><strong>Vivência & Desafio Orientado (Bloco 3):</strong> ${f.vivenciasDesafioOrientado || "—"}</p>
          </div>
        </div>
      </div>

      <div class="dossier-print-section" style="background:var(--agora-white);border:1px solid var(--agora-border-strong);border-radius:var(--radius-xl);padding:2rem;margin-bottom:1.75rem;box-shadow:var(--shadow-sm);">
        <span class="wb-page-badge">MEU PRÓXIMO PASSO • PDI ÁGORA SMART (BLOCO 03)</span>
        <h3 style="font-size:1.35rem;margin-bottom:1rem;">Plano de Desenvolvimento Individual</h3>
        <div class="form-grid-2">
          <div class="wb-field-card highlight-card">
            <div class="wb-field-label">🎯 Objetivo Prioritário 01</div>
            <p style="font-size:0.88rem;"><strong>Competência:</strong> ${f.pdiObj1Competencia || "—"}</p>
            <p style="font-size:0.88rem;margin-top:0.3rem;"><strong>Ações práticas:</strong> ${f.pdiObj1Acoes || "—"}</p>
            <p style="font-size:0.88rem;margin-top:0.3rem;"><strong>Prazo:</strong> ${f.pdiObj1Prazo || "—"}</p>
            <p style="font-size:0.88rem;margin-top:0.3rem;"><strong>Evidências:</strong> ${f.pdiObj1Evidencias || "—"}</p>
          </div>
          <div class="wb-field-card highlight-card">
            <div class="wb-field-label">🎯 Objetivo Prioritário 02</div>
            <p style="font-size:0.88rem;"><strong>Competência:</strong> ${f.pdiObj2Competencia || "—"}</p>
            <p style="font-size:0.88rem;margin-top:0.3rem;"><strong>Ações práticas:</strong> ${f.pdiObj2Acoes || "—"}</p>
            <p style="font-size:0.88rem;margin-top:0.3rem;"><strong>Prazo:</strong> ${f.pdiObj2Prazo || "—"}</p>
            <p style="font-size:0.88rem;margin-top:0.3rem;"><strong>Evidências:</strong> ${f.pdiObj2Evidencias || "—"}</p>
          </div>
        </div>
        <div class="form-grid-2" style="margin-top:1rem;">
          <div class="wb-field-card">
            <div class="wb-field-label">🤝 Quem pode me apoiar</div>
            <p style="font-size:0.88rem;">${f.pdiQuemApoia || "—"}</p>
          </div>
          <div class="wb-field-card">
            <div class="wb-field-label">⭐ Meu Compromisso Principal</div>
            <p style="font-size:0.88rem;">${f.pdiMeuCompromisso || "—"}</p>
          </div>
        </div>
      </div>

      <div class="dossier-print-section" style="background:linear-gradient(135deg,#053D68,#12639A);color:#FFFFFF;border-radius:var(--radius-xl);padding:2rem;box-shadow:var(--shadow-md);">
        <span class="wb-page-badge" style="background:rgba(255,255,255,0.18);color:#fff;">✉️ CARTA PARA O MEU EU DO FUTURO (DAQUI A 1 ANO)</span>
        <h3 style="color:#FFFFFF;font-size:1.35rem;margin-bottom:0.85rem;">Mensagem Selada na Jornada Ágora</h3>
        <p style="font-size:0.95rem;line-height:1.65;margin-bottom:1rem;color:#E6F4FA;">
          "${f.cartaMensagemFinal || "Escreva sua mensagem no Bloco 03 para visualizá-la aqui."}"
        </p>
        <div style="font-family:var(--font-script);font-size:1.65rem;color:var(--agora-light);">
          "Continue escrevendo a história que você se orgulha de viver."
        </div>
      </div>
    `;
  },

  /**
   * Renderiza o Cockpit do Facilitador (Manual de 16 páginas)
   */
  renderFacilitatorCockpit: function () {
    const stagesEl = document.getElementById("facilitator-stages-container");
    if (stagesEl) {
      stagesEl.innerHTML = window.AGORA_DATA.facilitatorStages
        .map(
          (st, idx) => `
          <div class="facilitator-stage-card">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.75rem;">
              <div>
                <span class="matrix-block-badge badge-b1">${st.blocoRef}</span>
                <span class="wb-page-badge">⏱️ ${st.time} (${st.durationMin} min)</span>
                <h4 style="font-size:1.2rem;color:var(--agora-deep);margin-top:0.2rem;">Etapa ${st.num} — ${st.title}</h4>
              </div>
              <div style="display:flex;gap:0.5rem;">
                <button class="btn btn-outline btn-sm" onclick="AgoraApp.startStageTimer(${st.durationMin}, '${st.num}. ${st.title}')">
                  ⏱️ Iniciar Timer (${st.durationMin}m)
                </button>
                <button class="btn btn-primary btn-sm" onclick="AgoraApp.openProjectorAt(${idx})">
                  📽️ Projetar Etapa
                </button>
              </div>
            </div>
            <p style="font-size:0.88rem;margin-bottom:0.45rem;"><strong>🎯 Objetivo pedagógico:</strong> ${st.objetivo}</p>
            <p style="font-size:0.88rem;margin-bottom:0.45rem;"><strong>🧭 Preparação e condução:</strong> ${st.preparacao}</p>
            <div class="teleprompter-speech">
              <strong>🎙️ Fala sugerida:</strong> "${st.fala}"
            </div>
            <div class="form-grid-2" style="margin-top:0.75rem;">
              <div style="background:var(--agora-ice);padding:0.85rem;border-radius:8px;border:1px solid var(--agora-border);">
                <strong style="font-size:0.8rem;color:var(--agora-blue);text-transform:uppercase;">❓ Perguntas de Provocação</strong>
                <ul style="padding-left:1.1rem;margin-top:0.35rem;font-size:0.85rem;">
                  ${st.perguntas.map((p) => `<li>${p}</li>`).join("")}
                </ul>
              </div>
              <div style="background:var(--agora-ice);padding:0.85rem;border-radius:8px;border:1px solid var(--agora-border);">
                <strong style="font-size:0.8rem;color:var(--agora-blue);text-transform:uppercase;">✍️ Comando de Escrita & Debrief</strong>
                <p style="font-size:0.84rem;margin-top:0.3rem;"><strong>Escrita:</strong> ${st.comandoEscrita}</p>
                <p style="font-size:0.84rem;margin-top:0.25rem;"><strong>Debrief:</strong> ${st.debrief}</p>
              </div>
            </div>
            <p style="font-size:0.83rem;color:var(--agora-turquoise);font-weight:700;margin-top:0.65rem;">
              🔗 Transição: "${st.transicao}"
            </p>
          </div>
        `
        )
        .join("");
    }

    const situationsEl = document.getElementById("facilitator-situations-grid");
    if (situationsEl) {
      situationsEl.innerHTML = window.AGORA_DATA.commonSituations
        .map(
          (sit) => `
          <div class="wb-field-card" style="background:var(--agora-white);">
            <div class="wb-field-label" style="font-size:0.95rem;">${sit.title}</div>
            <p style="font-size:0.86rem;color:var(--agora-text-muted);">${sit.action}</p>
          </div>
        `
        )
        .join("");
    }
  },

  /**
   * Cronômetro do Facilitador
   */
  startStageTimer: function (minutes, label) {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerSecondsRemaining = minutes * 60;
    this.timerRunning = true;
    this.setText("facilitator-timer-stage-label", label || `Cronômetro (${minutes} min)`);
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      if (!this.timerRunning) return;
      if (this.timerSecondsRemaining > 0) {
        this.timerSecondsRemaining--;
        this.updateTimerDisplay();
      } else {
        clearInterval(this.timerInterval);
        this.timerRunning = false;
        this.showToast("⏰ Tempo da etapa concluído!");
      }
    }, 1000);
    this.showToast(`⏱️ Cronômetro iniciado: ${minutes} minutos (${label})`);
  },

  togglePauseTimer: function () {
    this.timerRunning = !this.timerRunning;
    const btn = document.getElementById("timer-pause-btn");
    if (btn) btn.textContent = this.timerRunning ? "⏸️ Pausar" : "▶️ Retomar";
  },

  resetTimer: function (minutes) {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerRunning = false;
    this.timerSecondsRemaining = (minutes || 15) * 60;
    this.updateTimerDisplay();
  },

  updateTimerDisplay: function () {
    const m = Math.floor(this.timerSecondsRemaining / 60);
    const s = this.timerSecondsRemaining % 60;
    const formatted = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    this.setText("facilitator-timer-digits", formatted);
    this.setText("projector-timer-digits", formatted);
  },

  /**
   * Modo Projeção de Sala (Tela Cheia para as 12 Etapas)
   */
  openProjectorAt: function (stageIndex) {
    this.projectorStageIdx = stageIndex || 0;
    this.renderProjectorSlide();
    const overlay = document.getElementById("projector-overlay");
    if (overlay) overlay.classList.add("open");
  },

  closeProjector: function () {
    const overlay = document.getElementById("projector-overlay");
    if (overlay) overlay.classList.remove("open");
  },

  changeProjectorSlide: function (delta) {
    const total = window.AGORA_DATA.facilitatorStages.length;
    this.projectorStageIdx = (this.projectorStageIdx + delta + total) % total;
    this.renderProjectorSlide();
  },

  renderProjectorSlide: function () {
    const st = window.AGORA_DATA.facilitatorStages[this.projectorStageIdx];
    if (!st) return;
    this.setText("proj-stage-badge", `${st.blocoRef} • ETAPA ${st.num} DE 12 • DURAÇÃO SUGERIDA: ${st.durationMin} MIN`);
    this.setText("proj-stage-title", st.title);
    this.setText("proj-stage-speech", `"${st.fala}"`);
    const qList = document.getElementById("proj-stage-questions");
    if (qList) {
      qList.innerHTML = st.perguntas.map((q) => `<li style="margin-bottom:0.65rem;">${q}</li>`).join("");
    }
    this.setText("proj-stage-command", st.comandoEscrita);
  },

  /**
   * Carregar Dados de Demonstração Realistas (Preenche os 3 Blocos e Destrava todos os Cadeados)
   */
  loadDemoData: function () {
    this.state = JSON.parse(JSON.stringify(window.AGORA_DATA.demoState));
    this.saveState();
    this.refreshAllUI();
    this.showToast("✨ Modo Demonstração ativado! Todos os 3 Blocos foram destravados e preenchidos com dados realistas.");
  },

  /**
   * Resetar Jornada (Volta ao Estado Inicial: Bloco 1 Aberto e Blocos 2 e 3 Trancados)
   */
  resetAllData: function () {
    if (!confirm("Deseja limpar os campos e voltar ao estado inicial (Bloco 01 aberto e Blocos 02 e 03 trancados com cadeado)?")) {
      return;
    }
    this.state = this.getDefaultState();
    this.activeBlock = 1;
    this.saveState();
    this.selectBlock(1);
    this.refreshAllUI();
    this.showToast("🔄 Jornada reiniciada! Bloco 01 aberto e Blocos 02 e 03 com cadeado.");
  },

  /**
   * Exportação dos Dados em JSON ou CSV (Planilha para Gestão de T&D)
   */
  exportJSON: function () {
    const blob = new Blob([JSON.stringify(this.state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const safeName = (this.state.fields.nome || "instrutor").toLowerCase().replace(/\s+/g, "_");
    a.href = url;
    a.download = `dossie_agora_2026_${safeName}.json`;
    a.click();
    URL.revokeObjectURL(url);
    this.showToast("📥 Arquivo JSON exportado com sucesso!");
  },

  exportCSV: function () {
    const f = this.state.fields;
    const l = this.state.locks;
    const rows = [
      ["Campo", "Valor"],
      ["Nome do Instrutor", f.nome],
      ["Area de Atuacao", f.areaAtuacao],
      ["Tempo de Experiencia", f.tempoExperiencia],
      ["Status Bloco 01", l.block1Completed ? "Concluido" : "Em andamento"],
      ["Status Bloco 02", l.block2Completed ? "Concluido" : l.block2Unlocked ? "Aberto" : "Bloqueado"],
      ["Status Bloco 03", l.block3Completed ? "Concluido" : l.block3Unlocked ? "Aberto" : "Bloqueado"],
      ["Meu Superpoder", f.meuSuperpoder],
      ["Interesses Selecionados", (f.interessesSelecionados || []).join(" | ")],
      ["Maior Aprendizagem (Bloco 1)", f.sabedoriaMaiorAprendizagem],
      ["Crenca Ressignificada (Caverna)", `${f.cavernaCrencaAntiga} -> ${f.cavernaNovaPerspectiva}`],
      ["Perfil Comportamental DISC", f.discSelected],
      ["Area Explorada nas Rodas (Bloco 2)", f.caminhosAreaEscolhida],
      ["Referencia que Inspira (Bloco 2)", f.inspiraQuem],
      ["Tema de Habilidades em Acao (Bloco 2)", f.acaoTemaEscolhido],
      ["Area Visitada em Vivencias (Bloco 3)", f.vivenciasAreaVisitada],
      ["Desafio Orientado (Bloco 3)", f.vivenciasDesafioOrientado],
      ["Nota de Networking (0-10)", f.networkNota],
      ["Frase-Sintese da Marca Profissional", f.marcaFraseSintese],
      ["PDI Objetivo 1 - Competencia", f.pdiObj1Competencia],
      ["PDI Objetivo 1 - Acoes", f.pdiObj1Acoes],
      ["PDI Objetivo 1 - Prazo", f.pdiObj1Prazo],
      ["PDI Objetivo 2 - Competencia", f.pdiObj2Competencia],
      ["PDI Objetivo 2 - Acoes", f.pdiObj2Acoes],
      ["PDI Objetivo 2 - Prazo", f.pdiObj2Prazo],
      ["Compromisso Principal PDI", f.pdiMeuCompromisso],
      ["Mensagem Carta para o Eu do Futuro", f.cartaMensagemFinal]
    ];

    const csvContent =
      "\uFEFF" +
      rows
        .map((r) => r.map((cell) => `"${String(cell || "").replace(/"/g, '""')}"`).join(";"))
        .join("\r\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const safeName = (f.nome || "instrutor").toLowerCase().replace(/\s+/g, "_");
    a.href = url;
    a.download = `forms_ciclo_agora_${safeName}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    this.showToast("📊 Planilha CSV dos 3 Blocos exportada com sucesso!");
  },

  /**
   * Alternar Tema Claro / Azul Profundo
   */
  toggleTheme: function () {
    document.body.classList.toggle("theme-dark");
    const isDark = document.body.classList.contains("theme-dark");
    const btn = document.getElementById("theme-toggle-btn");
    if (btn) btn.textContent = isDark ? "☀️ Modo Claro" : "🌙 Modo Azul Profundo";
  },

  setText: function (id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  },

  showToast: function (msg) {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "agora-toast";
    toast.innerHTML = `<span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.3s ease";
      setTimeout(() => toast.remove(), 320);
    }, 3800);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  window.AgoraApp.init();
});

