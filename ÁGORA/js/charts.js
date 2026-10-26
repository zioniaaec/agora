/* ==========================================================================
   ÁGORA 2026 — MOTOR GRÁFICO (RADAR DE COMPETÊNCIAS & DISTRIBUIÇÃO DISC)
   ========================================================================== */

window.AgoraCharts = {
  /**
   * Desenha o Gráfico Radar (Spider Chart) das 8 Hard Skills no Canvas
   * e calcula médias de Hard Skills vs Soft Skills
   */
  renderCompetencyRadar: function (canvasId, hardRatings, softRatings) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const dpr = window.devicePixelRatio || 1;
    const size = 310;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + "px";
    canvas.style.height = size + "px";
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;
    const maxRadius = 102;
    const levels = 4;

    const labels = [
      "Conteúdo",
      "Planejamento",
      "Facilitação",
      "Recursos",
      "Avaliação",
      "Indicadores",
      "Materiais",
      "Tempo"
    ];
    const keys = ["hs1", "hs2", "hs3", "hs4", "hs5", "hs6", "hs7", "hs8"];
    const totalAxes = labels.length;

    // 1. Desenha a teia concêntrica (Níveis 1 a 4)
    for (let lvl = 1; lvl <= levels; lvl++) {
      const r = (maxRadius / levels) * lvl;
      ctx.beginPath();
      for (let i = 0; i < totalAxes; i++) {
        const angle = (Math.PI * 2 * i) / totalAxes - Math.PI / 2;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = lvl === levels ? "#A6D1E6" : "#D2E8F3";
      ctx.lineWidth = lvl === levels ? 1.5 : 1;
      ctx.stroke();
      if (lvl % 2 === 0) {
        ctx.fillStyle = "rgba(199, 232, 247, 0.14)";
        ctx.fill();
      }
    }

    // 2. Eixos e Rótulos
    ctx.font = "700 10.5px Montserrat, sans-serif";
    ctx.fillStyle = "#053D68";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let i = 0; i < totalAxes; i++) {
      const angle = (Math.PI * 2 * i) / totalAxes - Math.PI / 2;
      const xEnd = cx + maxRadius * Math.cos(angle);
      const yEnd = cy + maxRadius * Math.sin(angle);

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(xEnd, yEnd);
      ctx.strokeStyle = "#D2E8F3";
      ctx.lineWidth = 1;
      ctx.stroke();

      const labelRadius = maxRadius + 24;
      const lx = cx + labelRadius * Math.cos(angle);
      const ly = cy + labelRadius * Math.sin(angle);
      ctx.fillText(labels[i], lx, ly);
    }

    // 3. Polígono de Hard Skills (Azul Ágora / Turquesa)
    ctx.beginPath();
    keys.forEach((k, i) => {
      const val = Number(hardRatings[k] || 0);
      const r = (maxRadius / levels) * val;
      const angle = (Math.PI * 2 * i) / totalAxes - Math.PI / 2;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = "rgba(8, 183, 188, 0.28)";
    ctx.fill();
    ctx.strokeStyle = "#08B7BC";
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // 4. Vértices
    keys.forEach((k, i) => {
      const val = Number(hardRatings[k] || 0);
      if (val > 0) {
        const r = (maxRadius / levels) * val;
        const angle = (Math.PI * 2 * i) / totalAxes - Math.PI / 2;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = "#053D68";
        ctx.fill();
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    });

    // Atualiza indicadores numéricos de média
    const hardVals = Object.values(hardRatings || {}).map(Number).filter(Boolean);
    const softVals = Object.values(softRatings || {}).map(Number).filter(Boolean);
    const hardAvg = hardVals.length ? (hardVals.reduce((a, b) => a + b, 0) / hardVals.length).toFixed(1) : "0.0";
    const softAvg = softVals.length ? (softVals.reduce((a, b) => a + b, 0) / softVals.length).toFixed(1) : "0.0";

    const hardEl = document.getElementById("raiox-hard-avg");
    const softEl = document.getElementById("raiox-soft-avg");
    if (hardEl) hardEl.textContent = hardAvg + " / 4.0";
    if (softEl) softEl.textContent = softAvg + " / 4.0";
  },

  /**
   * Atualiza barras visuais do Perfil DISC
   */
  renderDiscBars: function (scores, selectedProfile) {
    const types = ["D", "I", "S", "C"];
    types.forEach((t) => {
      const pct = scores && scores[t] != null ? scores[t] : 25;
      const bar = document.getElementById(`disc-bar-${t}`);
      const lbl = document.getElementById(`disc-pct-${t}`);
      if (bar) bar.style.width = `${pct}%`;
      if (lbl) lbl.textContent = `${pct}%`;
    });

    const summaryBox = document.getElementById("disc-selected-summary");
    if (summaryBox && selectedProfile && window.AGORA_DATA.discProfiles[selectedProfile]) {
      const p = window.AGORA_DATA.discProfiles[selectedProfile];
      summaryBox.innerHTML = `
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.4rem;">
          <span style="background:${p.color};color:#fff;font-family:var(--font-heading);font-weight:800;padding:0.25rem 0.65rem;border-radius:8px;">
            PERFIL PREDOMINANTE: ${p.letter} — ${p.name}
          </span>
          <span style="font-size:0.82rem;font-weight:700;color:var(--agora-text-muted);">${p.focus}</span>
        </div>
        <p style="font-size:0.88rem;margin-bottom:0.35rem;"><strong>Síntese:</strong> ${p.summary}</p>
        <p style="font-size:0.84rem;color:var(--agora-blue);"><strong>💡 Dica para Instrutor(a):</strong> ${p.tips}</p>
      `;
    }
  }
};

