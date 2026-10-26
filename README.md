# 🏛️ ÁGORA 2026 — Jornada de Desenvolvimento de Instrutores

> *"A Ágora é o espaço onde a troca vira aprendizado — e o aprendizado gera transformação."*  
> **Diálogo que transforma • Troca • Aprendizado • Evolução**

Plataforma corporativa web da AeC desenvolvida para conduzir a Jornada de Desenvolvimento de Instrutores ao longo de um Ciclo Trimestral (3 Meses / 3 Blocos de Desenvolvimento).

---

## 🚀 Principais Recursos

- **Aplicação Web Autônoma e Resiliente:** Executável diretamente pelo navegador em arquivo único (`index.html`), sem falhas de carregamento em ambientes corporativos ou Microsoft Teams.
- **Integração em Nuvem com Supabase:** Persistência em tempo real dos formulários, missões, perfis e checkpoints da liderança.
- **Funcionamento Híbrido (Online + Offline):** Sincronização em nuvem via Supabase com fallback transparente para `localStorage`.
- **Arquitetura de Perfis e Permissões:**
  - 👑 **Gestor (Liderança):** Controle pleno, auditoria da trilha dos liderados, preenchimento e validação dos Checkpoints 1, 2 e 3 e relatório executivo 1:1.
  - 👨‍🏫 **Instrutor:** Acesso focado à sua Trilha 360°, preenchimento dos 3 Blocos, realização das Missões Práticas e emissão do seu Dossiê Individual.
  - 🎙️ **Facilitador:** Cockpit de sala de aula com cronômetro regressivo (5h), desbloqueio de etapas/cadeados e guia metodológico da jornada.

---

## 🗄️ Arquitetura de Dados (Supabase)

- **Instância:** `https://mxahgjxcdtodbdbxymtb.supabase.co`
- **Tabelas:**
  - `usuarios`: Cadastro de perfis e operadores.
  - `jornada_respostas`: Dados dos Blocos 01, 02 e 03, PDI SMART, DISC e radar de competências.
  - `missoes_praticas`: Acompanhamento das 8 missões práticas de aplicação em campo.
  - `checkpoints_lideranca`: Validação e devolutiva da liderança imediata.
  - `facilitador_sala`: Controle do cronômetro e sala do facilitador.

---

## 📁 Estrutura do Repositório

```text
├── index.html                   # Aplicação Web Principal (Inlined + Supabase)
├── README.md                    # Documentação do projeto
├── .gitignore                   # Arquivos ignorados no Git
├── execution/
│   └── supabase_setup.py        # Utilitário de auditoria e setup do Supabase
└── ÁGORA/
    ├── index.html               # Cópia estruturada do app
    ├── css/                     # Estilos modulares (design-system, components, print)
    ├── js/                      # Scripts modulares (app, charts, data-agora)
    ├── memoria/
    │   └── MEMORIA_AGORA.md     # Documento histórico e regras de negócio
    └── Arquivos/                # Materiais complementares e guias em PDF
```

---

## 💻 Como Executar

1. Basta abrir o arquivo `index.html` em qualquer navegador moderno (Chrome, Edge, Firefox).
2. Para hospedar via **GitHub Pages**, configure em:  
   `Settings > Pages > Branch: main > / (root) > Save`.
