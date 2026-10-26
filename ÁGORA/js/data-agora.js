/* ==========================================================================
   ÁGORA 2026 — BASE DE DADOS ESTRUTURADA DA PLATAFORMA
   Ciclo de 3 Meses • 3 Blocos com Cadeado • 5 Eixos Práticos • Workbook 14 Págs • Manual 16 Págs
   ========================================================================== */

window.AGORA_DATA = {
  brand: {
    name: "ÁGORA",
    signature: "Diálogo que transforma.",
    pillarsLine: "TROCA • APRENDIZADO • EVOLUÇÃO",
    edition: "EDIÇÃO 01 • 2026",
    cycleDuration: "3 Meses (1 Trimestre)",
    facilitatorKey: "AGORA2026"
  },

  /* Os 5 Eixos Oficiais da Tabela enviada pelo usuário, agrupados nos 3 Blocos do Ciclo */
  matrixAxes: [
    {
      id: 1,
      blocoId: 1,
      blocoLabel: "Bloco 01 • Mês 1",
      title: "1. Identidades e Conexões",
      objetivo: "Conhecer trajetórias, interesses e expectativas.",
      atividadePratica: "Passaporte profissional e mapa de interesses.",
      quemContribui: "Facilitador do projeto e profissional de desenvolvimento.",
      workbookPages: "Págs. 02 a 06 (Boas-vindas, Passaporte Ágora, Sabedoria da Experiência, Saindo da Caverna e Perfil DISC)"
    },
    {
      id: 2,
      blocoId: 2,
      blocoLabel: "Bloco 02 • Mês 2",
      title: "2. Possibilidades e Caminhos",
      objetivo: "Apresentar áreas e suas atividades.",
      atividadePratica: "Rodas de conversa e escolha de uma área para explorar.",
      quemContribui: "Representantes das áreas participantes.",
      workbookPages: "Págs. 07 e 08 (Raio-X de Competências e Quem Inspira a Minha Jornada?)"
    },
    {
      id: 3,
      blocoId: 2,
      blocoLabel: "Bloco 02 • Mês 2",
      title: "3. Habilidades em Ação",
      objetivo: "Trabalhar temas de aprendizagem escolhidos pelos participantes.",
      atividadePratica: "Oficinas, simulações e resolução de situações fictícias.",
      quemContribui: "Profissionais com experiência nos temas.",
      workbookPages: "Aplicação Prática de Sala, Laboratório de Facilitação e Estudo de Caso"
    },
    {
      id: 4,
      blocoId: 3,
      blocoLabel: "Bloco 03 • Mês 3",
      title: "4. Vivências e Conexões",
      objetivo: "Aproximar os participantes da realidade de outras atividades.",
      atividadePratica: "Visitas, observação de rotinas e desafios orientados, mediante autorização.",
      quemContribui: "Profissionais anfitriões e mentores voluntários.",
      workbookPages: "Pág. 09 + Etapa 09 Manual (Networking, Presença Profissional, LinkedIn e Marca Profissional)"
    },
    {
      id: 5,
      blocoId: 3,
      blocoLabel: "Bloco 03 • Mês 3",
      title: "5. Meu Próximo Passo",
      objetivo: "Organizar a continuidade do desenvolvimento.",
      atividadePratica: "Plano individual com objetivo, ação, apoio e prazo.",
      quemContribui: "Facilitador e profissionais de apoio.",
      workbookPages: "Págs. 10 a 13 (PDI ÁGORA SMART, Carta para o Meu Eu do Futuro, Anotações e Cartão de Saída)"
    }
  ],

  /* Configuração dos 3 Blocos do Ciclo Trimestral (3 Meses) */
  cycleBlocks: [
    {
      id: 1,
      month: "Mês 01",
      code: "BLOCO 01",
      title: "Identidades, Autoconhecimento e Conexões",
      subtitle: "Reconhecer de onde estamos partindo, mapear interesses, questionar sombras e compreender nosso perfil comportamental.",
      axesIncluded: ["1. Identidades e Conexões"],
      contributors: "Facilitador do projeto e profissional de desenvolvimento",
      practicalDeliverable: "Forms Bloco 01: Passaporte Profissional + Mapa de Interesses + Sabedoria + Caverna + DISC",
      sections: [
        { id: "b1-s1", label: "1.1 Passaporte & Interesses", icon: "🛂" },
        { id: "b1-s2", label: "1.2 Sabedoria da Experiência", icon: "🏆" },
        { id: "b1-s3", label: "1.3 Saindo da Caverna", icon: "🕯️" },
        { id: "b1-s4", label: "1.4 Perfil Comportamental DISC", icon: "🧭" }
      ]
    },
    {
      id: 2,
      month: "Mês 02",
      code: "BLOCO 02",
      title: "Possibilidades, Caminhos e Habilidades em Ação",
      subtitle: "Diagnosticar competências técnicas e comportamentais, explorar áreas em rodas de conversa e praticar em oficinas e simulações.",
      axesIncluded: ["2. Possibilidades e Caminhos", "3. Habilidades em Ação"],
      contributors: "Representantes das áreas participantes e profissionais com experiência nos temas",
      practicalDeliverable: "Forms Bloco 02: Raio-X de Competências + Rodas de Conversa & Área + Referências + Oficina & Simulação",
      sections: [
        { id: "b2-s1", label: "2.1 Raio-X de Competências", icon: "📊" },
        { id: "b2-s2", label: "2.2 Possibilidades e Caminhos", icon: "🗺️" },
        { id: "b2-s3", label: "2.3 Quem Inspira Minha Jornada?", icon: "🌟" },
        { id: "b2-s4", label: "2.4 Habilidades em Ação (Oficinas)", icon: "⚡" }
      ]
    },
    {
      id: 3,
      month: "Mês 03",
      code: "BLOCO 03",
      title: "Vivências, Marca Profissional e Meu Próximo Passo",
      subtitle: "Vivenciar rotinas em outras áreas, fortalecer networking e marca profissional, e consolidar o PDI SMART e a Carta do Futuro.",
      axesIncluded: ["4. Vivências e Conexões", "5. Meu Próximo Passo"],
      contributors: "Profissionais anfitriões, mentores voluntários, facilitador e profissionais de apoio",
      practicalDeliverable: "Forms Bloco 03: Diário de Vivências + Networking & LinkedIn + Marca Profissional + PDI SMART + Carta do Futuro",
      sections: [
        { id: "b3-s1", label: "3.1 Vivências e Conexões", icon: "🤝" },
        { id: "b3-s2", label: "3.2 Networking & LinkedIn", icon: "🌐" },
        { id: "b3-s3", label: "3.3 Marca Profissional", icon: "💎" },
        { id: "b3-s4", label: "3.4 PDI ÁGORA (Próximo Passo)", icon: "🎯" },
        { id: "b3-s5", label: "3.5 Carta para o Eu do Futuro", icon: "✉️" }
      ]
    }
  ],

  /* Opções do Mapa de Interesses (Bloco 1 — Eixo 1) */
  interestTopics: [
    "Andragogia e Aprendizagem de Adultos",
    "Facilitação Dinâmica e Gamificação",
    "Design Instrucional e Roteiros",
    "Análise de Indicadores de T&D (KPIs)",
    "Comunicação Não-Violenta e Feedback",
    "Liderança de Turmas e Gestão de Conflitos",
    "Ferramentas Digitais e IA na Educação",
    "Qualidade, Monitoria e Processos Operacionais",
    "Desenvolvimento Humano e Mentoria",
    "Storytelling e Apresentações de Impacto"
  ],

  /* Áreas Corporativas para Exploração (Bloco 2 — Eixo 2 e Bloco 3 — Eixo 4) */
  explorationAreas: [
    "Desenvolvimento Organizacional / Universidade Corporativa",
    "Qualidade e Monitoria de Atendimento",
    "Planejamento e Controle Operacional (PCO / WFM)",
    "Operações e Gestão de Equipes (Supervisão/Coordenação)",
    "Design Instrucional e Conteúdo Digital",
    "Recrutamento, Seleção e Atração de Talentos",
    "Projetos, Inovação e Experiência do Cliente (CX)",
    "Comunicação Interna e Endomarketing"
  ],

  /* Raio-X de Competências (Pág. 07 da Revista) */
  hardSkills: [
    { id: "hs1", name: "Domínio de conteúdo" },
    { id: "hs2", name: "Planejamento de treinamentos" },
    { id: "hs3", name: "Facilitação e condução de grupos" },
    { id: "hs4", name: "Uso de ferramentas e recursos didáticos" },
    { id: "hs5", name: "Avaliação de aprendizagem" },
    { id: "hs6", name: "Análise de resultados e indicadores" },
    { id: "hs7", name: "Construção de materiais e roteiros" },
    { id: "hs8", name: "Gestão do tempo" }
  ],

  softSkills: [
    { id: "ss1", name: "Comunicação" },
    { id: "ss2", name: "Escuta ativa" },
    { id: "ss3", name: "Empatia" },
    { id: "ss4", name: "Trabalho em equipe" },
    { id: "ss5", name: "Flexibilidade" },
    { id: "ss6", name: "Resiliência" },
    { id: "ss7", name: "Proatividade" },
    { id: "ss8", name: "Liderança" },
    { id: "ss9", name: "Inteligência emocional" },
    { id: "ss10", name: "Visão de melhoria contínua" }
  ],

  /* Presença Profissional (Pág. 09 da Revista — Escala 1 a 5) */
  presenceStatements: [
    { id: "pr1", text: "Participo ativamente das discussões." },
    { id: "pr2", text: "Contribuo com ideias e soluções." },
    { id: "pr3", text: "Escuto os outros com atenção." },
    { id: "pr4", text: "Colaboro e apoio meus colegas." },
    { id: "pr5", text: "Sou lembrado(a) quando surgem novas oportunidades." },
    { id: "pr6", text: "Transmito uma imagem de profissional comprometido(a) e confiável." }
  ],

  /* Checklist do LinkedIn (Pág. 09 da Revista — 7 itens) */
  linkedinChecklist: [
    { id: "lk1", text: "Tenho uma foto profissional." },
    { id: "lk2", text: "Meu cargo e área de atuação estão atualizados." },
    { id: "lk3", text: "Meu resumo apresenta quem eu sou e o que faço." },
    { id: "lk4", text: "Tenho informações sobre minhas formações." },
    { id: "lk5", text: "Descrevo minhas principais experiências." },
    { id: "lk6", text: "Compartilho conteúdos ou aprendizados." },
    { id: "lk7", text: "Estou conectado(a) com pessoas da minha área." }
  ],

  /* Perfis DISC (Pág. 06 da Revista) */
  discProfiles: {
    D: {
      letter: "D",
      name: "DOMINÂNCIA",
      focus: "Foco em resultados",
      color: "#E53935",
      summary: "Direto, decidido, orientado a metas rápidas e desafios. Na sala de aula, imprime ritmo forte, objetividade e foco em performance.",
      tips: "Pratique a escuta paciente e dê tempo para perfis mais reflexivos processarem o conteúdo."
    },
    I: {
      letter: "I",
      name: "INFLUÊNCIA",
      focus: "Foco em pessoas",
      color: "#F59E0B",
      summary: "Comunicativo, entusiasmado, criativo e agregador. Na sala de aula, gera alto engajamento, energia positiva e conexão emocional.",
      tips: "Atenção à gestão do tempo, estrutura do roteiro e fechamento objetivo das atividades."
    },
    S: {
      letter: "S",
      name: "ESTABILIDADE",
      focus: "Foco em relacionamentos",
      color: "#10B981",
      summary: "Acolhedor, paciente, colaborativo e constante. Na sala de aula, cria um ambiente seguro, empático e de aprendizado passo a passo.",
      tips: "Exercite posicionar-se com firmeza em debates intensos e adaptar-se rápido a imprevistos."
    },
    C: {
      letter: "C",
      name: "CONFORMIDADE",
      focus: "Foco em processos",
      color: "#1E88E5",
      summary: "Analítico, preciso, organizado e estruturado. Na sala de aula, domina os detalhes técnicos, critérios de avaliação e qualidade metodológica.",
      tips: "Evite excesso de perfeccionismo e permita momentos de espontaneidade e troca aberta."
    }
  },

  /* Mini-Instrumento Reflexivo DISC Integrado (6 questões rápidas) */
  discQuizQuestions: [
    {
      q: "1. Quando conduzo um treinamento ou projeto novo, minha prioridade imediata é:",
      options: [
        { type: "D", label: "Garantir que o objetivo final e os resultados sejam atingidos rapidamente" },
        { type: "I", label: "Criar entusiasmo, engajar as pessoas e promover integração no grupo" },
        { type: "S", label: "Acolher a turma, garantir que todos se sintam seguros e apoiados" },
        { type: "C", label: "Dominar cada detalhe técnico do roteiro, dados e regras com precisão" }
      ]
    },
    {
      q: "2. Na comunicação com colegas e treinandos, as pessoas costumam me perceber como:",
      options: [
        { type: "D", label: "Direto(a), objetivo(a), firme e focado(a) em solução" },
        { type: "I", label: "Expressivo(a), inspirador(a), dinâmico(a) e contador(a) de histórias" },
        { type: "S", label: "Calmo(a), bom(a) ouvinte, diplomático(a) e prestativo(a)" },
        { type: "C", label: "Criterioso(a), lógico(a), estruturado(a) e baseado(a) em evidências" }
      ]
    },
    {
      q: "3. Diante de um imprevisto ou pressão durante a condução de uma turma:",
      options: [
        { type: "D", label: "Assumo o comando imediatamente e tomo uma decisão rápida" },
        { type: "I", label: "Uso o humor e a conversa para manter o clima leve e contornar a situação" },
        { type: "S", label: "Mantenho a serenidade, busco consenso e estabilizo o grupo" },
        { type: "C", label: "Analiso a causa do problema e recorro ao procedimento correto" }
      ]
    },
    {
      q: "4. O que mais me motiva no papel de instrutor(a) é:",
      options: [
        { type: "D", label: "Superar metas de indicadores e ver impacto concreto na operação" },
        { type: "I", label: "O reconhecimento público, a troca de energia e a visibilidade positiva" },
        { type: "S", label: "Acompanhar a evolução contínua de cada pessoa e construir vínculos" },
        { type: "C", label: "Entregar um material impecável e ver o processo executado sem erros" }
      ]
    }
  ],

  /* Manual do Facilitador Completo — 12 Etapas e Situações de Sala (Manual_Facilitador_AGORA_2026_8982 1.pdf) */
  facilitatorStages: [
    {
      num: "01",
      time: "00:00–00:15",
      durationMin: 15,
      blocoRef: "Bloco 01",
      title: "Abertura — Sua jornada começa aqui",
      objetivo: "Acolher o grupo, apresentar o propósito da jornada e criar um ambiente de participação segura.",
      preparacao: "Receba os participantes, deixe a revista fechada sobre a mesa e projete o título. Combine que ninguém precisa compartilhar algo pessoal se não quiser.",
      fala: "Hoje, eu não quero que vocês saiam daqui apenas com novas informações. Quero que saiam com uma percepção diferente sobre si mesmos, sobre o papel que exercem e sobre o profissional que desejam se tornar. Esta jornada começa com uma pergunta: será que estamos enxergando todo o nosso potencial?",
      perguntas: [
        "Quando vocês pensam no próprio desenvolvimento profissional, qual é a primeira coisa que vem à cabeça?",
        "O que faz uma experiência de desenvolvimento valer a pena para você?"
      ],
      comandoEscrita: "Peça que registrem brevemente o que esperam levar do encontro.",
      debrief: "Convide duas ou três pessoas a compartilhar uma expectativa, sem obrigar ninguém. Agrupe as respostas em temas como autoconhecimento, comunicação, confiança e evolução.",
      transicao: "Para descobrir aonde queremos chegar, primeiro precisamos reconhecer de onde estamos partindo."
    },
    {
      num: "02",
      time: "00:15–00:25",
      durationMin: 10,
      blocoRef: "Bloco 01",
      title: "Passaporte ÁGORA",
      objetivo: "Apresentar a revista/plataforma como registro individual da jornada e combinar a forma de participação.",
      preparacao: "Peça que abram a página do Passaporte. Explique que o material é pessoal e não será avaliado pela qualidade da escrita.",
      fala: "Pensem neste material como um passaporte. Ao longo do nosso encontro e do ciclo, vocês vão registrar percepções, reconhecer competências e assumir compromissos. Não existe resposta perfeita. Existe a resposta que representa aquilo que vocês realmente pensam hoje.",
      perguntas: [
        "Qual é a diferença entre participar de um treinamento e se comprometer com o próprio desenvolvimento?",
        "O que ajuda você a refletir com sinceridade?"
      ],
      comandoEscrita: "Oriente o preenchimento dos campos previstos no Passaporte e Mapa de Interesses. Convide cada participante a assumir um compromisso pessoal: escutar, refletir, experimentar e registrar.",
      debrief: "Reforce acordos: escuta respeitosa, confidencialidade sobre relatos pessoais, direito de não compartilhar e foco em comportamentos que podem ser desenvolvidos.",
      transicao: "E, para começar essa viagem, vamos reconhecer o valor que já existe em cada um de nós."
    },
    {
      num: "03",
      time: "00:25–00:45",
      durationMin: 20,
      blocoRef: "Bloco 01",
      title: "Sabedoria da Experiência",
      objetivo: "Reconhecer aprendizados relevantes da trajetória profissional e valorizar a experiência acumulada.",
      preparacao: "Peça que pensem em uma situação real de trabalho que ensinou algo importante. Dê alguns segundos de silêncio antes de abrir a conversa.",
      fala: "Nem todo aprendizado veio de um curso. Muitos vieram de uma conversa difícil, de um erro, de um feedback ou de uma situação em que vocês precisaram encontrar uma solução. A experiência ganha força quando paramos para entender o que ela nos ensinou.",
      perguntas: [
        "Qual situação profissional mais ensinou você?",
        "O que você sabe fazer hoje que não sabia quando começou?",
        "Que aprendizado gostaria de transmitir a outro instrutor?"
      ],
      comandoEscrita: "Peça que registrem uma experiência significativa, o aprendizado extraído dela e como esse aprendizado aparece hoje em sua atuação (situação concreta).",
      debrief: "Em duplas, cada pessoa pode compartilhar a experiência que escolheu, se desejar. Quem escuta deve identificar o aprendizado que percebeu, sem julgar nem dar conselhos automaticamente.",
      transicao: "Mas existe uma diferença entre ter experiência e conseguir enxergar tudo o que essa experiência nos ensinou."
    },
    {
      num: "04",
      time: "00:45–01:10",
      durationMin: 25,
      blocoRef: "Bloco 01",
      title: "Saindo da Caverna",
      objetivo: "Questionar crenças limitantes e abrir espaço para novas interpretações sobre a própria capacidade.",
      preparacao: "Mostre a imagem da alegoria da caverna e convide o grupo a observá-la em silêncio por alguns segundos. Explique brevemente a metáfora sem impor uma interpretação única.",
      fala: "Imaginem passar a vida inteira acreditando que aquilo que enxergam representa toda a realidade. Se nunca tivessem conhecido outra perspectiva, como saberiam que existia algo além? Às vezes, fazemos algo parecido conosco: tratamos uma percepção antiga como se fosse um limite definitivo.",
      perguntas: [
        "Que relação podemos fazer entre a alegoria e o desenvolvimento profissional?",
        "Você já evitou uma oportunidade por acreditar que não conseguiria?",
        "Que outra explicação poderia existir para essa situação?"
      ],
      comandoEscrita: "Convide cada pessoa a identificar uma crença profissional que deseja questionar e escrever uma perspectiva alternativa, realista e praticável (ex: 'Não sou bom em falar em público' → 'Posso desenvolver minha comunicação com preparação e prática').",
      debrief: "Peça exemplos voluntários de como transformar uma afirmação fixa em algo que pode ser desenvolvido. Evite minimizar dificuldades reais.",
      transicao: "Questionar uma crença não significa ignorar nossas dificuldades. Significa abrir espaço para observar nossos comportamentos e competências com mais clareza."
    },
    {
      num: "05",
      time: "01:10–01:35",
      durationMin: 25,
      blocoRef: "Bloco 01",
      title: "Perfil Comportamental DISC",
      objetivo: "Aumentar a consciência sobre tendências comportamentais e seus efeitos na comunicação e no trabalho.",
      preparacao: "Explique a finalidade do instrumento DISC escolhido e as regras de realização. Confirme que o QR Code ou quiz funciona.",
      fala: "Pessoas diferentes podem alcançar bons resultados de maneiras diferentes. Um perfil não define quem somos por completo nem serve para rotular alguém. Ele pode nos oferecer pistas para observar preferências, reações e formas de interação.",
      perguntas: [
        "Em quais situações seu jeito de agir ajuda o trabalho?",
        "Em quais situações pode ser útil adaptar a forma de se comunicar?",
        "Como você reage quando está sob pressão?"
      ],
      comandoEscrita: "Oriente a realização do teste DISC e peça que registrem uma percepção sobre si e uma situação profissional em que essa tendência aparece.",
      debrief: "Reforce que perfis são referências para reflexão, não diagnósticos definitivos nem justificativa para comportamentos prejudiciais.",
      transicao: "Conhecer nossas tendências é um passo. Agora vamos observar as competências que colocamos em prática no dia a dia."
    },
    {
      num: "06",
      time: "01:50–02:15",
      durationMin: 25,
      blocoRef: "Bloco 02",
      title: "Raio-X de Competências",
      objetivo: "Identificar forças e oportunidades de desenvolvimento com base em evidências do cotidiano.",
      preparacao: "Apresente a diferença entre opinião e evidência. Ex: 'sou comunicativo' é percepção; 'consigo explicar um procedimento complexo de forma clara e verificar a compreensão' é evidência observável.",
      fala: "Vamos olhar para a prática. O que vocês já fazem bem? O que ainda exige esforço? E que competência faria diferença para sua atuação como instrutor? O objetivo não é se dar uma nota perfeita: é enxergar com honestidade o próximo passo.",
      perguntas: [
        "Em quais competências você se destaca? Que situação demonstra isso?",
        "Que competência precisa fortalecer?",
        "Que retorno ou resultado ajuda você a avaliar isso?"
      ],
      comandoEscrita: "Peça que preencham o diagnóstico de Hard e Soft Skills (1 a 4) e registrem evidências concretas.",
      debrief: "Em duplas, compartilhar uma força e uma competência a desenvolver. O parceiro pergunta 'Que evidência você tem?' e 'Qual seria um próximo passo possível?'.",
      transicao: "Às vezes, reconhecemos nossas competências com mais facilidade quando lembramos das pessoas que nos ajudaram a desenvolvê-las."
    },
    {
      num: "07",
      time: "02:15–02:30",
      durationMin: 15,
      blocoRef: "Bloco 02",
      title: "Quem Inspira a Minha Jornada?",
      objetivo: "Reconhecer referências positivas e transformar admiração em comportamentos observáveis.",
      preparacao: "Convide o grupo a lembrar de alguém que contribuiu para sua trajetória: colega, liderança, instrutor, professor ou outra referência.",
      fala: "Ninguém constrói uma trajetória profissional sozinho. Em algum momento, alguém nos ensinou algo, acreditou no nosso potencial ou demonstrou, pelo exemplo, uma forma de atuar que nos marcou.",
      perguntas: [
        "Quem marcou sua trajetória profissional?",
        "Que comportamento dessa pessoa você admira?",
        "Como você pode praticar esse comportamento sem deixar de ser autêntico?"
      ],
      comandoEscrita: "Registrar a referência escolhida, a característica admirada e uma atitude concreta que desejam incorporar à própria prática.",
      debrief: "Ajude o grupo a converter adjetivos abstratos ('inspirador') em ações observáveis ('dar feedback com respeito', 'simplificar um tema complexo').",
      transicao: "Assim como aprendemos observando outras pessoas, também deixamos marcas por meio da forma como nos relacionamos com elas."
    },
    {
      num: "08",
      time: "02:30–02:50",
      durationMin: 20,
      blocoRef: "Bloco 03",
      title: "Networking e Presença Profissional",
      objetivo: "Refletir sobre a qualidade da participação em reuniões, treinamentos, projetos e redes profissionais.",
      preparacao: "Esclareça que networking não significa acumular contatos: envolve construir relações profissionais úteis, respeitosas e recíprocas.",
      fala: "Presença profissional não é apenas estar em uma reunião, em um treinamento ou em um projeto. É a contribuição que deixamos nesses espaços. Participar também significa ouvir, compartilhar conhecimento, colaborar e dar continuidade às conversas.",
      perguntas: [
        "De 0 a 10, como você avalia sua participação em reuniões, treinamentos e projetos?",
        "O que sustenta essa nota? Você costuma contribuir ou apenas acompanhar?",
        "Como pode fortalecer sua presença profissional, inclusive no LinkedIn, quando fizer sentido?"
      ],
      comandoEscrita: "Autoavaliação de 0 a 10, escala 1 a 5 de presença, checklist do LinkedIn e ação concreta para ampliar participação ou fortalecer uma conexão.",
      debrief: "Em trios, compartilhar apenas a ação que deseja testar. Colegas sugerem uma oportunidade prática de colocá-la em ação.",
      transicao: "A forma como participamos dos espaços influencia a maneira como as pessoas reconhecem nosso trabalho. Isso nos leva à nossa marca profissional."
    },
    {
      num: "09",
      time: "02:50–03:15",
      durationMin: 25,
      blocoRef: "Bloco 03",
      title: "Marca Profissional",
      objetivo: "Definir como o instrutor deseja ser reconhecido e alinhar valores, atitudes e entregas.",
      preparacao: "Diferencie marca profissional de autopromoção: ela é construída principalmente pela consistência entre o que se diz, o que se faz e o impacto gerado.",
      fala: "Marca profissional não é apenas o que colocamos no currículo ou publicamos nas redes sociais. É a percepção que construímos por meio das nossas atitudes, da qualidade das nossas entregas e da forma como tratamos as pessoas. A pergunta é: como quero ser reconhecido e que comportamentos precisam sustentar essa imagem?",
      perguntas: [
        "Pelo que você deseja ser lembrado como instrutor?",
        "Quais valores precisam aparecer nas suas atitudes?",
        "O que diferencia sua contribuição?",
        "O que precisa ser mais consistente entre intenção e prática?"
      ],
      comandoEscrita: "Oriente o preenchimento sobre imagem profissional desejada, valores, diferenciais e frase-síntese da marca ligada a comportamentos.",
      debrief: "Revisar a frase e perguntar: 'Que atitude observável provaria isso na prática?'.",
      transicao: "Agora que você reconhece o profissional que deseja construir, vamos transformar essa intenção em ações concretas."
    },
    {
      num: "10",
      time: "03:30–04:00",
      durationMin: 30,
      blocoRef: "Bloco 03",
      title: "PDI ÁGORA — Meu Próximo Passo",
      objetivo: "Converter as reflexões em até dois objetivos de desenvolvimento acompanháveis.",
      preparacao: "Peça que revisitem as etapas anteriores e observem os temas que mais se repetiram. Reforce que o PDI deve priorizar, não tentar resolver tudo ao mesmo tempo.",
      fala: "Desenvolvimento não acontece apenas porque identificamos o que precisamos melhorar. Ele acontece quando decidimos agir. Vamos escolher até dois objetivos que realmente façam diferença para nossa atuação e definir como perceberemos a evolução.",
      perguntas: [
        "Qual competência teria maior impacto se fosse desenvolvida agora?",
        "Que ação prática depende de você?",
        "Que evidência mostrará progresso?",
        "De que apoio você precisa e até quando?"
      ],
      comandoEscrita: "Para cada objetivo, preencher: competência, ação, prazo e evidência; registrar também o apoio necessário e o compromisso pessoal.",
      debrief: "Em duplas, revisão de qualidade: a ação está clara? O prazo é realista? A evidência pode ser observada?",
      transicao: "Um plano registra o que pretendemos fazer. Um compromisso nos lembra por que decidimos fazer."
    },
    {
      num: "11",
      time: "04:00–04:20",
      durationMin: 20,
      blocoRef: "Bloco 03",
      title: "Carta para o Meu Eu do Futuro",
      objetivo: "Consolidar aprendizados e reforçar o compromisso individual com a evolução.",
      preparacao: "Crie um momento de tranquilidade. Oriente que a carta é pessoal e que cada participante decide se deseja compartilhá-la.",
      fala: "Quero convidar vocês a escreverem para a pessoa que serão daqui a algum tempo. Imaginem que essa pessoa está lendo esta carta depois de ter colocado em prática o que começou aqui. O que esperam ter desenvolvido? Que atitude gostariam de ter mudado? Do que gostariam de se orgulhar?",
      perguntas: [
        "O que você não quer esquecer sobre o que descobriu hoje?",
        "Qual compromisso deseja assumir consigo?",
        "Que conselho daria ao seu eu do futuro?"
      ],
      comandoEscrita: "Escrever livremente sobre o que descobriram, o que desejam transformar e qual compromisso assumem.",
      debrief: "Ofereça um minuto de silêncio para releitura. Peça que cada pessoa destaque uma frase que deseja levar consigo.",
      transicao: "Esta carta registra um compromisso. A jornada continua nas escolhas que vocês farão no cotidiano."
    },
    {
      num: "12",
      time: "04:20–04:30",
      durationMin: 10,
      blocoRef: "Bloco 03",
      title: "Encerramento — Diálogo que transforma",
      objetivo: "Consolidar a experiência, ouvir uma síntese dos participantes e fechar com uma ação concreta.",
      preparacao: "Convide o grupo a lembrar o percurso: experiência, crenças, comportamento, competências, referências, presença, marca e plano de ação.",
      fala: "Hoje, nós não encerramos um processo de desenvolvimento. Iniciamos um movimento. Cada reflexão só ganha valor quando encontra espaço nas nossas atitudes. Que vocês levem desta jornada não apenas o que escreveram, mas a coragem de colocar em prática aquilo que descobriram.",
      perguntas: [
        "Qual palavra representa o que você leva deste encontro?",
        "Qual ação você pretende colocar em prática primeiro?"
      ],
      comandoEscrita: "Preencher o Cartão de Saída com a palavra-síntese e a primeira ação prática.",
      debrief: "Rodada rápida, voluntária, de uma palavra ou ação. Agradeça a participação e explique o acompanhamento do PDI nos 3 blocos do ciclo.",
      transicao: "A ÁGORA acredita que o diálogo transforma. E essa transformação começa quando temos coragem de olhar para nós mesmos e escolher o próximo passo."
    }
  ],

  /* Como responder a situações comuns (Pág. 16 do Manual do Facilitador) */
  commonSituations: [
    {
      title: "🤫 O grupo fica em silêncio",
      action: "Não preencha o silêncio imediatamente. Dê 5–10 segundos, reformule a pergunta ou convide a pensar individualmente antes de compartilhar em dupla."
    },
    {
      title: "☁️ A resposta é muito genérica",
      action: "Pergunte com curiosidade: 'Você consegue lembrar de uma situação específica?' ou 'O que alguém teria visto você fazer?'."
    },
    {
      title: "🎙️ Uma pessoa domina a conversa",
      action: "Agradeça a contribuição e distribua a palavra: 'Quero ouvir outras perspectivas também; quem ainda não falou gostaria de acrescentar algo?'."
    },
    {
      title: "🛡️ Alguém não quer compartilhar",
      action: "Respeite sem insistir. Diga: 'Tudo bem; você pode manter essa reflexão só para você'."
    },
    {
      title: "⚡ Surge discordância",
      action: "Peça que descrevam a situação e o impacto sem atacar a pessoa. Diferencie intenção, comportamento observado e efeito."
    },
    {
      title: "⏳ O tempo está acabando",
      action: "Reduza o número de compartilhamentos, não elimine o tempo de escrita. Priorize o PDI, a carta e o fechamento."
    },
    {
      title: "🏷️ O DISC vira rótulo",
      action: "Reforce que o instrumento sugere tendências, não define a pessoa. Traga a conversa para comportamentos observáveis e capacidade de adaptação."
    },
    {
      title: "💙 Surge relato sensível",
      action: "Acolha, agradeça a confiança e não investigue diante do grupo. Ofereça conversa reservada e siga os canais de apoio da organização, se necessário."
    }
  ],

  /* Estado de Demonstração Realista (1 clique para testar tudo preenchido e destravado) */
  demoState: {
    invite: {
      date: "24 de Novembro de 2026",
      time: "08h30 às 13h30 (5h)",
      location: "Sala Ágora • Auditório Corporativo"
    },
    locks: {
      block1Unlocked: true,
      block2Unlocked: true,
      block3Unlocked: true,
      block1Completed: true,
      block2Completed: true,
      block3Completed: true,
      block1SubmittedAt: "20/10/2026 às 10:15",
      block2SubmittedAt: "20/10/2026 às 13:40",
      block3SubmittedAt: "20/10/2026 às 15:30"
    },
    fields: {
      /* BLOCO 01 */
      nome: "Camila Ferreira Mendes",
      areaAtuacao: "Treinamento & Desenvolvimento Operacional",
      tempoExperiencia: "4 anos e 6 meses",
      oqueTrouxe: "Comecei na operação como atendente, descobri a paixão por ensinar colegas novatos na monitoria e conquistei a vaga de instrutora.",
      minhaTrajetoria: "Passei por atendimento receptivo, célula de retenção, multiplicadora de qualidade e, há 3 anos, atuo como instrutora titular de formação inicial e reciclagem.",
      minhasConquistas: "Formei mais de 28 turmas com aprovação acima de 94% na curva de 30 dias e cocriei o guia rápido de onboarding da operação.",
      meuSuperpoder: "Traduzir sistemas e fluxos complexos em passos simples com empatia e exemplos práticos da operação.",
      meuDesenvolvimento: "Aprimorar a análise de indicadores pós-treinamento (curva de aprendizagem de 30/60/90 dias) e síntese executiva com gestores.",
      meuFuturo: "Tornar-me instrutora sênior / referência em design instrucional e mentora de novos instrutores no projeto Ágora.",
      expectativasEncontro: "Ampliar minha visão estratégica sobre o papel do instrutor, estruturar um PDI focado em indicadores e fortalecer conexões com outras áreas.",
      interessesSelecionados: [
        "Andragogia e Aprendizagem de Adultos",
        "Facilitação Dinâmica e Gamificação",
        "Análise de Indicadores de T&D (KPIs)",
        "Storytelling e Apresentações de Impacto"
      ],
      sabedoriaMarcantes: "A primeira turma híbrida durante uma mudança crítica de sistema em que precisei redesenhar toda a dinâmica prática em 24 horas.",
      sabedoriaEnsinaram: "Que o domínio técnico só funciona quando estamos atentos ao estado emocional da turma e abertos a adaptar o plano com serenidade.",
      sabedoriaInfluenciam: "Hoje planejo sempre com roteiros modulares e checo o entendimento real da turma por meio de simulações, não apenas slides.",
      sabedoriaFuturo: "A coragem de inovar no formato das aulas e a escuta ativa com cada treinando.",
      sabedoriaMaiorAprendizagem: "Ensinar não é transferir slides: é criar um ambiente seguro onde o erro na sala vira acerto confiante na operação.",
      cavernaSombras: "A crença de que 'sou boa em sala de aula, mas não tenho perfil analítico para apresentar relatórios executivos para a diretoria'.",
      cavernaRessignificar: "Trocar o receio de números pela compreensão de que dados contam a história do impacto que minhas turmas geram na operação.",
      cavernaCrencaAntiga: "Não levo jeito para apresentações executivas de indicadores.",
      cavernaNovaPerspectiva: "Posso estruturar dados de treinamento em narrativas claras de impacto com preparação e mentoria do time de Qualidade/PCO.",
      cavernaNovoOlhar: "Enxergar-me como uma parceira estratégica de negócios da operação, além de facilitadora em sala.",
      cavernaImpacto: "Minhas devolutivas pós-turma para coordenadores e gerentes serão baseadas em evidências observáveis e planos de sustentação.",
      cavernaProximoPasso: "Agendar uma conversa de 30 minutos com a liderança de Qualidade nesta semana para construir um painel simples de acompanhamento de 30 dias.",
      discSelected: "I",
      discScores: { D: 22, I: 42, S: 24, C: 12 },
      discPontosFortes: "Entusiasmo contagiante em sala, facilidade para criar conexão rápida com turmas heterogêneas e clareza verbal.",
      discBonsResultados: "Uso de histórias reais da operação, dinâmicas colaborativas em duplas e acolhimento das dúvidas sem julgamento.",
      discPontosDesenvolvimento: "Gerenciar melhor o tempo quando o debate se estende e estruturar registros mais analíticos e detalhados (força C).",
      discDesafiosMudancas: "Reajo com otimismo e flexibilidade, buscando mobilizar o grupo, mas preciso cuidar para não dispersar em múltiplas ideias simultâneas.",
      discContribuicaoInstrutor: "Transformo temas densos ou normativos em encontros dinâmicos nos quais todos participam ativamente.",
      discReflexao: "Vou usar cronômetros visíveis por bloco de aula e checklists objetivos de fechamento para equilibrar minha comunicação (I) com precisão (C).",

      /* BLOCO 02 */
      hardSkillsRatings: { hs1: 4, hs2: 3, hs3: 4, hs4: 3, hs5: 3, hs6: 2, hs7: 3, hs8: 2 },
      softSkillsRatings: { ss1: 4, ss2: 4, ss3: 4, ss4: 4, ss5: 3, ss6: 3, ss7: 4, ss8: 3, ss9: 3, ss10: 4 },
      raioxFortalezas: "Facilitação e condução de grupos, domínio de conteúdo, comunicação empática e escuta ativa com evidências consistentes nas avaliações de reação (NPS 96).",
      raioxDesenvolver: "Análise de resultados e indicadores (Hard Skill) e Gestão do tempo em módulos práticos densos.",
      raioxComoEvoluir: "Participar da oficina prática de KPIs de T&D no Bloco 2 e aplicar matriz de tempo por atividade nos próximos 3 treinamentos.",
      raioxCompromisso: "Elevar minha competência em Análise de Resultados do nível 2 para o nível 3 até o fim deste Ciclo Trimestral.",
      caminhosRodasResumo: "Participei da roda de conversa com representantes de Qualidade/Monitoria e Planejamento Operacional, compreendendo como a aderência e o TMA/ FCR refletem lacunas específicas do treinamento inicial.",
      caminhosAreaEscolhida: "Qualidade e Monitoria de Atendimento",
      caminhosMotivoEscolha: "Quero conectar diretamente os critérios da ficha de monitoria às simulações práticas que aplico em sala de aula.",
      caminhosRepresentanteApoio: "Juliana Rocha (Coordenadora de Qualidade) e Marcos Oliveira (Especialista de Desenvolvimento).",
      inspiraQuem: "Mariana Costa, minha primeira líder no T&D, que conseguia conduzir salas com 30 pessoas mantendo firmeza técnica e profundo respeito humano.",
      inspiraAtitudes: "A capacidade de fazer perguntas que levam o treinando a descobrir a resposta sozinho, além da organização impecável dos seus roteiros.",
      inspiraAprendizados: "Nunca responder com rispidez a uma dúvida repetida; sempre validar a pergunta e usar exemplos práticos.",
      inspiraFoco: "Lembrar do padrão de excelência dela me inspira a preparar cada turma como se fosse única.",
      inspiraFuturo: "Ser lembrada pelos novatos e colegas como uma instrutora que destrava a confiança das pessoas e entrega profissionais prontos para brilhar.",
      inspiraReflexao: "Solicitar feedbacks estruturados após minhas aulas e apadrinhar um instrutor recém-chegado ao time.",
      acaoTemaEscolhido: "Condução de simulações práticas (Roleplay) conectadas a indicadores operacionais e gestão do tempo em sala.",
      acaoOficinaPratica: "Conduzi a oficina de Roleplay Estruturado utilizando gravações reais anonimizadas e rubrica de avaliação objetiva.",
      acaoSituacaoFicticia: "Situação simulada: turma resistente a uma nova regra de script obrigatório. Apliquei escuta ativa, separei fatos de percepções e co-construí 3 abordagens naturais que respeitam o compliance.",
      acaoFeedbackRecebido: "Feedback do especialista convidado: excelente acolhimento da objeção e fechamento prático em 15 minutos cravados.",

      /* BLOCO 03 */
      vivenciasAreaVisitada: "Qualidade e Monitoria de Atendimento (Célula de Escuta & Calibração)",
      vivenciasAnfitriao: "Juliana Rocha (Anfitriã de Qualidade) • Autorização validada pela Supervisão de T&D",
      vivenciasObservacoes: "Acompanhei 2 sessões de calibração de monitoria e observei que 60% dos desvios dos novatos ocorrem na etapa de confirmação de dados no sistema.",
      vivenciasDesafioOrientado: "Redesenhei o laboratório prático do 3º dia de treinamento incluindo 5 simulações focadas exatamente no passo de confirmação de dados no sistema.",
      networkNota: 8,
      networkContribui: "Boa relação com instrutores do meu turno e supervisores diretos das turmas que atendo.",
      networkAumentar: "Participar ativamente dos fóruns interáreas (Qualidade, Operações e PCO) e compartilhar boas práticas na comunidade Ágora.",
      presenceRatings: { pr1: 4, pr2: 4, pr3: 5, pr4: 5, pr5: 4, pr6: 5 },
      conexoesPessoasAreas: "Time de Qualidade, Liderança de Operações, Coordenação de T&D e colegas instrutores de outras praças.",
      conexoesFortalecer: "Comunidade de instrutores Ágora, especialistas de indicadores e liderança de operações.",
      linkedinChecks: { lk1: true, lk2: true, lk3: true, lk4: true, lk5: true, lk6: false, lk7: true },
      linkedinAcao: "Publicar neste mês um artigo curto sobre aprendizados na facilitação de turmas operacionais e atualizar a descrição das minhas conquistas com dados.",
      networkPlanoConexao: "Coordenação de Qualidade e Mentoria de T&D",
      networkPlanoObjetivo: "Criar um fluxo contínuo de troca entre monitoria de 15 dias e ajustes no treinamento inicial.",
      networkPlanoPrimeiraAcao: "Enviar convite para café quinzenal de 20 min de alinhamento com o ponto focal de Qualidade.",
      marcaLembrado: "Uma instrutora que une calor humano, didática clara e foco em resultados reais na operação.",
      marcaValores: "Respeito genuíno, clareza, evolução contínua, colaboração e compromisso com a prática.",
      marcaDiferenciais: "Capacidade de transformar procedimentos densos em treinamentos leves, práticos e mensuráveis.",
      marcaFraseSintese: "Facilito conexões entre conhecimento técnico e prática humana para formar profissionais confiantes que geram resultados consistentes.",
      marcaAtitudeObservavel: "Entregar 100% das turmas com simulação prática validada e relatório executivo de evolução em até 48h após o encerramento.",
      pdiObj1Competencia: "Análise de resultados e indicadores de treinamento (Hard Skill)",
      pdiObj1Acoes: "Construir e aplicar o acompanhamento de curva de 15 e 30 dias das próximas 2 turmas em parceria com a Qualidade, apresentando o diagnóstico à coordenação.",
      pdiObj1Prazo: "Até o final do 3º mês do Ciclo (60 dias)",
      pdiObj1Evidencias: "Relatório comparativo de desempenho pós-treinamento entregue e validado pela liderança de T&D e Operações.",
      pdiObj2Competencia: "Gestão do tempo e síntese em conduções práticas (Hard/Soft Skill)",
      pdiObj2Acoes: "Estruturar roteiros com blocos cronometrados e aplicar a técnica de síntese em 3 pontos ao final de cada módulo.",
      pdiObj2Prazo: "Próximas 4 turmas (30 dias)",
      pdiObj2Evidencias: "100% dos módulos encerrados dentro do horário previsto sem comprimir o momento de prática e PDI.",
      pdiQuemApoia: "Facilitador do Projeto Ágora, Coordenador de T&D e Ponto Focal da área de Qualidade.",
      pdiMeuCompromisso: "Reservar 1 hora toda sexta-feira para analisar os indicadores das turmas entregues e atualizar meu progresso no PDI Ágora.",
      cartaQuemQueroSer: "Daqui a um ano, quero ser uma instrutora ainda mais confiante, estratégica e reconhecida como referência técnica e humana na formação de talentos.",
      cartaOqueConquistar: "Ter consolidado a metodologia de acompanhamento de impacto pós-treinamento e atuar como mentora de novos instrutores na Ágora.",
      cartaComoEvoluir: "Equilibrar minha energia comunicativa com rigor analítico, planejamento no tempo e presença ativa em projetos transversais.",
      cartaQualImpacto: "Contribuir para que cada treinando saia da sala seguro do seu papel e para que a operação sinta a diferença na qualidade do atendimento desde o primeiro dia.",
      cartaMensagemFinal: "Camila do futuro: lembre-se de quando você achava que números e apresentações executivas eram uma sombra na caverna. Você escolheu evoluir, praticou e transformou diálogo em resultado. Continue escrevendo a história que você se orgulha de viver!",
      anotacoesLivres: "• Ideia para próxima turma: abrir o dia 1 com a dinâmica do Passaporte simplificado.\n• Combinar dupla de observação cruzada com outro instrutor da Ágora.\n• Revisar checklist SMART antes da mentoria mensal.",
      saidaAprendizado: "Perceber que minha marca profissional é construída pela consistência entre o que ensino em sala e o impacto observável que gero na operação.",
      saidaPrimeiraAcao: "Estruturar o roteiro cronometrado da turma de segunda-feira e agendar o alinhamento com a Qualidade.",
      saidaApoio: "Feedback quinzenal do facilitador sobre o painel de indicadores da primeira turma."
    }
  }
};

