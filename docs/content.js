'use strict';

const portfolioProjects = [
  {
    id: 'rotom', category: 'Desenvolvimento web', type: 'Projeto público',
    title: 'Rotom Soluções', image: 'rotom-site.png', size: [1579, 880],
    alt: 'Página inicial da Rotom Soluções, com apresentação dos serviços.',
    description: 'Site institucional para apresentar serviços e facilitar pedidos de orçamento.',
    tools: ['HTML', 'CSS', 'JavaScript', 'IA aplicada'],
    context: 'A empresa precisava explicar sua oferta de criação de sites e gestão financeira em um endereço público.',
    goal: 'Organizar as informações e dar ao visitante um caminho claro até o orçamento.',
    role: 'Desenvolvi o site institucional com apoio de IA na implementação.',
    flow: 'A navegação leva da apresentação da empresa aos serviços, às dúvidas e ao orçamento.',
    result: 'Site publicado, com acesso à versão pública abaixo.',
    next: 'Manter a comunicação dos serviços atualizada e revisar o caminho até o orçamento com o uso.',
    url: 'https://rotomsolucoes.vercel.app/'
  },
  {
    id: 'marketing', category: 'Dados e MarTech', type: 'Demonstração',
    title: 'Dashboard de marketing', image: 'pulse-metrics.jpg', size: [1672, 941],
    alt: 'Prévia fictícia de um painel de marketing com cartões de indicadores e gráficos de evolução.',
    description: 'Painel para acompanhar indicadores de marketing e comparar canais e períodos.',
    tools: ['Claude Artifacts', 'APIs', 'Visualização de dados'],
    context: 'Os indicadores de marketing estavam distribuídos entre redes sociais, site e fontes de leads.',
    goal: 'Reunir os indicadores em uma leitura que facilite acompanhar a evolução de cada canal.',
    role: 'Construí o painel no Claude e organizei a apresentação dos indicadores.',
    flow: 'O painel agrupa métricas por fonte e período, com totais e séries para acompanhar variações.',
    result: 'Painel construído. A imagem é uma recriação com valores fictícios.',
    next: 'Deixar explícito quando cada indicador foi coletado e distinguir ausência de dados de valor zero.'
  },
  {
    id: 'b2b', category: 'Inteligência comercial', type: 'Projeto autoral',
    title: 'Prospecção B2B', image: 'b2b-original.jpg', size: [1280, 853],
    alt: 'Imagem ilustrativa da interface B2B, com pesquisa de mercado e filtros por setor e cargo.',
    description: 'Ferramenta de pesquisa de mercado para encontrar empresas e organizar potenciais contatos.',
    tools: ['Python', 'APIs', 'n8n'],
    context: 'Pesquisar empresas e identificar potenciais decisores manualmente exige cruzar várias informações.',
    goal: 'Estruturar a pesquisa por mercado, empresa e cargo para apoiar a prospecção.',
    role: 'Desenvolvi a ferramenta de busca e o fluxo de coleta e organização dos contatos.',
    flow: 'A pesquisa recebe um termo e filtros, consulta fontes via APIs e organiza os resultados para revisão.',
    result: 'Ferramenta desenvolvida. A imagem ilustrativa original mostra a etapa de pesquisa, sem exibir contatos.',
    next: 'Refinar critérios de qualificação e manter a revisão humana dos contatos encontrados.'
  },
  {
    id: 'events', category: 'Operações de marketing', type: 'Demonstração',
    title: 'Gestão de eventos', image: 'nexo-events.jpg', size: [1672, 941],
    alt: 'Prévia fictícia de um dashboard de eventos, com orçamento, progresso e alertas.',
    description: 'Sistema para acompanhar prazos, orçamento, responsáveis e andamento dos eventos.',
    tools: ['Dashboard', 'Indicadores', 'IA aplicada'],
    context: 'A operação precisava acompanhar o planejamento e os pontos de atenção dos eventos em um só lugar.',
    goal: 'Centralizar prazos, andamento e orçamento para facilitar a priorização.',
    role: 'Construí o dashboard e estruturei a visão geral do acompanhamento.',
    flow: 'O painel organiza eventos por estado e reúne progresso, alertas e valores previstos.',
    result: 'Sistema construído. A imagem pública usa uma identidade fictícia e dados de demonstração.',
    next: 'Revisar quais alertas ajudam a antecipar atrasos e quais geram ruído na rotina.'
  }
];

const portfolioTools = [
  ['Claude Code', 'claude'], ['Codex', 'terminal'], ['Python', 'python'], ['JavaScript', 'js'],
  ['n8n', 'nodes'], ['APIs', 'api'], ['PostgreSQL', 'database'], ['Power BI', 'chart'],
  ['HTML', 'html'], ['CSS', 'css'], ['Supabase', 'bolt'], ['GitHub', 'github'],
  ['Vercel', 'vercel'], ['Lovable', 'lovable']
];
