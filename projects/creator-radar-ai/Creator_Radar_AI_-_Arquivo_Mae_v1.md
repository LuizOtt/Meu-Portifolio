# Creator Radar AI — Arquivo-mãe do projeto

> **Versão:** 1.0 — 08/11/2026  
> **Responsável:** Luiz Otávio  
> **Status:** especificação e planejamento; o perfil TikTok já existe, mas o radar e o editor automático ainda não foram implementados.  
> **Uso:** projeto pessoal de aprendizado, criação de conteúdo, portfólio e experimentação em inteligência artificial.  
> **Princípio:** aprender, testar, verificar e explicar IA de um jeito que qualquer pessoa consiga acompanhar.

---

## 0. Leitura rápida — o que é e o que já está decidido

O **Creator Radar AI** será um sistema pessoal de inteligência editorial e produção de vídeos. Ele acompanhará tendências de vídeos curtos **e descobertas internacionais de primeira mão**, avaliará quais merecem um vídeo brasileiro, proporá diferentes formatos e roteiros, receberá uma gravação de Luiz e ajudará a editar o resultado com IA. Luiz **aprova** ideias, roteiros, edições e publicações.

**Decisões aprovadas**

1. **Nicho amplo:** IA, marketing, tecnologia, carreira, oportunidades, notícias, opiniões, experiências e projetos pessoais.
2. **Público amplo:** iniciantes são essenciais; não restringir o canal a desenvolvedores ou entusiastas avançados.
3. **Posicionamento:** criador pessoal que experimenta ferramentas, explica tendências e mostra o impacto prático da IA.
4. **Estratégia internacional → Brasil aprovada:** usar fontes primárias internacionais (criadores, pesquisadores, empresas e desenvolvedores) para identificar assuntos e produzir **roteiros originais, em português, acessíveis e com contexto brasileiro**; sem copiar vídeos de terceiros.
5. **Sistema gratuito primeiro:** n8n Community local, ferramentas de código aberto, modelo local quando viável, Supabase Free se necessário. API, dados comerciais, geração de vídeos por IA e hospedagem 24/7 não podem ser presumidos gratuitos.
6. **Dois subsistemas integráveis:** (A) Radar e Roteirista; (B) Editor de Vídeo. Cada um deve funcionar isoladamente antes de ser conectado.
7. **Aprovação humana obrigatória:** nenhum conteúdo é publicado automaticamente no MVP.
8. **MVP antes de plataforma sofisticada:** começar com coleta assistida e painel simples, não com múltiplos agentes complexos nem promessa de coleta irrestrita do TikTok.
9. **Documentação e portfólio:** registrar decisões, testes, resultados e aprendizados; evitar criar uma coleção de ferramentas sem entregas demonstráveis.
10. **Segurança:** credenciais em ambiente apropriado; nada de chaves em Git, prompts, logs, vídeos ou repositórios públicos.

**Não estão confirmados/implantados:** compra efetiva do curso AiVerso; instalação pessoal de n8n; credenciais de fontes de tendências; coleta automatizada do TikTok; novo repositório do Creator Radar AI; workflow, banco e editor em produção; disponibilidade de hospedagem gratuita 24/7. Este documento **não** deve ser interpretado como evidência de que essas coisas já funcionam.

---

## 1. Visão, missão, promessa e objetivos

### 1.1 Visão

Construir uma operação pessoal enxuta de conteúdo com IA que permita **descobrir oportunidades, entender o que interessa ao público, transformar conhecimento em roteiros autênticos, gravar e editar com eficiência** — e que também seja um portfólio técnico de agentes, automações, dados, produção audiovisual e produto digital.

### 1.2 Promessa editorial ao espectador

> **“Exploro inteligência artificial, tecnologia e oportunidades — testo as novidades e compartilho, de forma simples, o que realmente vale a pena.”**

O perfil não é uma página puramente técnica, nem um repostador de notícias, nem um vendedor de ferramentas. É uma pessoa real conversando com pessoas reais.

### 1.3 Objetivos pessoais

- Aprender novas ferramentas, skills, fluxos de agentes, n8n, APIs e edição programática.
- Produzir vídeos próprios para TikTok, com possibilidade de reaproveitamento em Reels e Shorts.
- Criar um acervo de projetos e conteúdos que fortaleçam o currículo e o portfólio.
- Aplicar aprendizados a sistemas pessoais que já vêm sendo construídos.
- Desenvolver competência para sugerir melhorias de processos no Marketing, **sem misturar dados pessoais do projeto com informações internas da empresa**.
- Desenvolver autonomia: testar, construir, explicar, mensurar e aprimorar.
- Gastar o mínimo possível enquanto valida o método.

### 1.4 O que o projeto não pretende ser inicialmente

- Um robô de raspagem ilimitada do TikTok em “tempo real”.
- Um sistema que baixa e republica vídeos alheios.
- Uma fábrica de conteúdo genérico com roteiro artificial e sensacionalismo.
- Uma ferramenta de postagem automática sem validação factual e revisão humana.
- Um SaaS com usuários, pagamentos e acesso externo já no MVP.

---

## 2. TikTok: identidade já criada

Dados informados por captura de tela do próprio perfil em 08/11/2026:

| Campo | Definição atual |
|---|---|
| Plataforma | TikTok |
| Nome de exibição | **Luiz Otávio \| IA & Tech** |
| Usuário | **[@luizotavio.tech](https://www.tiktok.com/@luizotavio.tech)** |
| Bio | **Explorando IA, tecnologia e oportunidades! 👨🏻‍💻📚** / **Descobertas que valem compartilhar.** |
| Foto de perfil | Foto real, enquadramento fechado, camisa preta e fundo preto com degradê roxo suave |
| Identidade | Profissional, moderna, humana e tecnológica |
| CTA na bio | **Não usar CTA agressivo por enquanto**; a proposta de valor deve ser evidente na própria descrição |
| Publicações iniciais | Ainda não confirmadas à data do print |

**Direção visual de vídeo:** formato vertical 9:16; texto branco com destaques amarelos pontuais; composição limpa; preto/grafite como base, roxo discreto como identidade; legendas legíveis; cortes/zooms quando ajudarem a narrativa; animações explicativas em vez de decoração constante. Usar o mesmo estilo visual ao longo do tempo, mas adaptar o ritmo ao assunto.

**Tom de voz:** natural, conversado, direto, curioso, sem parecer “professor de informática” o tempo todo; transmitir aprendizado real e opinião identificada como opinião. Evitar “domine IA em 3 minutos”, “todo mundo será substituído” e promessas de emprego ou renda.

---

## 3. Público-alvo: não apenas técnicos

| Camada | O que conhece | O que procura | Como falar |
|---|---|---|---|
| **Iniciante** — prioridade | Usa IA para perguntas simples, ou ainda não começou | Ganho prático, curiosidade, como começar, erros comuns | Benefício antes da tecnologia; demonstração rápida e vocabulário simples |
| **Intermediário** | Já usa ChatGPT, aplicativos ou automações básicas | Melhorar resultados, produtividade, estudar e trabalhar melhor | Comparações, casos de uso e passos reproduzíveis |
| **Avançado** | Trabalha com código, APIs, n8n, agentes | Arquitetura, testes, custo, limitações e decisões técnicas | Profundidade objetiva, exemplos reais e documentação complementar |

A mesma tendência pode virar três vídeos distintos. **Não presumir que os mais básicos sempre terão maior engajamento**: essa é uma hipótese a ser testada com retenção, compartilhamentos e comentários.

### 3.1 Cinco pilares editoriais — mix de teste

| Pilar | Peso inicial | Exemplos |
|---|---:|---|
| **Dicas e aplicações para o público geral** | **25%** | ChatGPT no dia a dia, estudos, rotina, organização, ferramentas úteis |
| **Carreira, empregos e oportunidades** | **20%** | Começar do zero, vagas reais, portfólio, habilidades, caminhos de aprendizado |
| **Notícias e tendências** | **20%** | Novidades de modelos, agentes, ferramentas, impactos e descobertas internacionais |
| **Opiniões, reflexões e experiências** | **20%** | “Como a IA mudou minha forma de pensar”, bastidores, escolhas, erros e aprendizados |
| **Projetos e conteúdo técnico** | **15%** | Creator Radar AI, n8n, skills, sistemas pessoais e demonstrações |

Esses pesos são **hipóteses de planejamento**, revisáveis a cada 10–15 publicações. A lista antiga de 40/30/20/10 foi substituída por esta organização mais ampla e recente.

### 3.2 Formatos que devem entrar no radar

- **Gancho provocativo com demonstração**: “Você provavelmente está usando o ChatGPT só pela metade.”
- **Listas úteis**: “3 coisas que eu faria se estivesse começando hoje com IA.”
- **Carreira**: “Algumas das melhores maneiras de começar a trabalhar com IA.”
- **Oportunidades verificadas**: “Vagas de IA abertas agora — o que pedem e onde se candidatar.”
- **Opinião em primeira pessoa**: “A IA mudou minha forma de pensar sobre trabalhar e aprender.”
- **Notícia explicada**: “O que mudou hoje/esta semana e por que isso importa?”
- **Teste honesto**: “Testei essa IA viral. Eis o que funcionou e o que não funcionou.”
- **Tutorial simples**: “Como resolver este problema com IA em menos passos.”
- **Construindo em público**: “Criei uma IA que encontra ideias de vídeos para mim.”
- **Experimento visual**: “Gravei meu vídeo e deixei a IA editar.”
- **História pessoal**: trajetória, estudo, rotina de profissional que atua com IA.
- **Comparação**: “Ferramenta A vs B para uma tarefa concreta”, com resultados verificados.
- **Reação contextualizada**: responder a uma tendência com análise ou demonstração própria.

**Regra editorial:** a tecnologia pode ser complexa por trás; a explicação deve começar pelo impacto para o espectador. Ex.: “Criei uma IA que organiza ideias para meus vídeos”, não necessariamente “Integrei n8n com uma API e um agente ReAct”.

---

## 4. Estratégia-chave aprovada: descoberta internacional → vídeo brasileiro

### 4.1 Oportunidade

Muitos dos primeiros anúncios, pesquisas e testes surgem em inglês: modelos novos, ferramentas, mudanças em Claude Code, agentes, skills, n8n, APIs, segurança, UX e negócios. O sistema deve usar essas fontes para identificar ideias **antes de depender apenas da tradução de vídeos de criadores brasileiros**.

**Fluxo:** fonte primária internacional → link e data → checagem do fato → análise de relevância para brasileiros → escolha de ângulo → roteiro original em português → demonstração/teste quando possível → gravação → edição → revisão → publicação → mensuração.

### 4.2 Critérios especiais para esse canal de descoberta

1. A informação tem **fonte original**? Ex.: documentação, release note, blog oficial, repositório, post do desenvolvedor, anúncio da empresa.
2. A notícia tem **data do evento**, não apenas data do compartilhamento?
3. É **nova de verdade**? Já apareceu na base? É apenas rumor, beta limitado, marketing ou lançamento geral?
4. Existe algum **benefício explicável para pessoa comum**, profissional ou estudante?
5. É possível **testar ou demonstrar**? Se não, informar claramente que não foi testado.
6. Dá para adicionar **contexto brasileiro**, custo em reais quando verificado, disponibilidade no Brasil, idioma e limitações?
7. O ângulo proposto é **original**, sem traduzir literalmente um roteiro de terceiros?
8. Há riscos de afirmações exageradas, segurança, privacidade ou uso indevido?

### 4.3 Exemplos de transformação

| Descoberta técnica | Vídeo acessível | Versão técnica opcional |
|---|---|---|
| Nova função de agente em um produto de IA | “A IA não está mais só respondendo: agora pode executar tarefas. Olha o que muda.” | Como configurar permissões, ferramentas e limites |
| Nova skill de edição | “Gravei uma vez e fiz a IA editar meu TikTok.” | Como funciona o pipeline com Remotion/FFmpeg |
| Novidades do n8n | “Criei uma automação que me ajuda a encontrar ideias de vídeo.” | Workflow, APIs e tratamento de falhas |
| Discussão de carreira no X | “Se eu começasse hoje em IA, focaria nestas habilidades.” | Stack, portfólio e exemplos |
| Incidente de segurança com segredos em repositório | “Seu projeto com IA pode estar vazando senhas sem você saber.” | `.env`, `.gitignore`, GitHub Actions e rotação |

O tema de vazamento de `.env` é um ótimo candidato a vídeo **depois de contextualizar e demonstrar com exemplos fictícios**, sem exibir segredos reais.

---

## 5. Fontes monitoradas — base inicial

### 5.1 YouTube: seis canais já escolhidos para o Radar de IA pessoal

| Canal | Identificador/URL de referência | Papel no Creator Radar |
|---|---|---|
| EnzoSparo | https://www.youtube.com/@EnzoSparo | Automação, experimentos, abordagem prática |
| QuantBrasil | https://www.youtube.com/@QuantBrasil | IA, ferramentas e contexto brasileiro; validar vídeos pertinentes |
| LABS | https://www.youtube.com/@canal-labs | Exploração técnica e novidades |
| Fala IA! — Felipe Borges | https://www.youtube.com/@FelipeBorgesFalaIA | Claude Code, ferramentas, tutoriais e aprendizagem |
| Ratos de IA | https://www.youtube.com/@ratosdeia | Notícias, tutoriais, skills, agentes e aplicações |
| ddiasmatt | https://www.youtube.com/@ddiasmatt | Automação, negócios, criação e IA aplicada |

**Importante:** canais escolhidos para acompanhamento não são garantia de que todos tenham novos vídeos no dia nem de que suas páginas sejam acessíveis automaticamente. Registrar falhas de coleta sem inventar cobertura.

### 5.2 X/Twitter: nove especialistas internacionais já escolhidos

| Perfil | URL | Assuntos de interesse |
|---|---|---|
| `@bcherny` | https://x.com/bcherny | Claude Code, engenharia e agentes |
| `@trq212` | https://x.com/trq212 | Claude Code e novidades do ecossistema |
| `@thsottiaux` | https://x.com/thsottiaux | Modelos e ferramentas de IA |
| `@steipete` | https://x.com/steipete | Ferramentas, agentes e desenvolvimento |
| `@simonw` | https://x.com/simonw | LLMs, experimentos, transparência e análise |
| `@hwchase17` | https://x.com/hwchase17 | Agentes, LangChain e aplicações |
| `@karpathy` | https://x.com/karpathy | Modelos, IA e educação técnica |
| `@JanOberhauser` | https://x.com/JanOberhauser | n8n e automações |
| `@dsp_` | https://x.com/dsp_ | Protocolos, agentes e desenvolvimento |

**Estado:** são fontes de interesse, não autorizações automáticas para coleta de dados por scraping. O MVP pode usar links públicos e resumos assistidos, sempre sujeitos a disponibilidade e condições de uso. Não inventar contas de TikTok para esses especialistas.

### 5.3 TikTok — descoberta de formatos e vídeos virais

- **TikTok Creative Center — Trends:** https://ads.tiktok.com/creative/creativeCenter/trends?countryCode=BR&period=30 — tendências, hashtags, vídeos e filtros *quando disponíveis na região e na conta*.
- **Creator Search Insights:** recurso disponível no aplicativo para quem tem acesso; útil como sinal de demanda de pesquisa, não substitui métricas de viralização.
- **Perfis do nicho:** acompanhar manualmente referências brasileiras e salvar URLs de vídeos relevantes.
- **TikToks identificados em pesquisas anteriores:** `@ratosdeia`, `@ddiasmatt` e `@canaldocs` (este último associado a projeto de formato documental do universo de Enzo). Validar autoria, disponibilidade e atividade antes de automatizar.

### 5.4 Fontes primárias e complementares

- Documentação e changelogs de ferramentas de IA (OpenAI, Anthropic, Google, n8n, GitHub etc.).
- Repositórios oficiais e páginas de releases.
- Blogs e anúncios originais de empresas e desenvolvedores.
- Notícias de veículos confiáveis para contexto, com confirmação de fatos nas fontes originais quando possível.
- Base já existente no GitHub: **`LuizOtt/ai-knowledge-base`**, repositório privado e documento de aprendizado. **Não modificar essa base automaticamente sem regras de separação e deduplicação.**
- Perfil pessoal de TikTok e métricas próprias, quando houver acesso autorizado.

### 5.5 Limites reais de coleta

- A **TikTok Research API** não é uma API geral para produtores de conteúdo: a documentação oficial restringe o uso a pesquisadores elegíveis e aprovados, não a criadores comuns.
- Mesmo pesquisadores com acesso podem enfrentar **atrasos de indexação e atualização de estatísticas**; não prometer “viralização em tempo real” usando dados atrasados.
- A página do Creative Center é útil para pesquisa editorial, mas não há garantia de API de extração automatizada aberta e gratuita para esse MVP.
- Não desenvolver automações que burlam logins, CAPTCHAs, limites de acesso, restrições técnicas ou termos de plataforma.
- **Fallback obrigatório:** importação manual/assistida de links e métricas disponíveis, com origem, horário de consulta e indicação de campos não disponíveis.
- Serviços comerciais de dados podem ser estudados depois, com custo/termos verificados **antes** de contratar.

---

## 6. Arquitetura-alvo, com desenvolvimento por camadas

```text
                       [Fontes BR e internacionais]
             TikTok | YouTube | X | Blogs | Releases | GitHub
                                  |
             [A. Coleta autorizada / importação assistida]
                                  |
                [Normalização + evidências + deduplicação]
                                  |
                    [Base de dados / histórico]
                                  |
                [B. Analista de oportunidades com IA]
                                  |
              [Ranking explicável e oportunidades elegíveis]
                                  |
                  [C. Roteirista / planos visuais]
                                  |
                       [APROVAÇÃO DO LUIZ]
                                  |
                         [Gravação vertical]
                                  |
            [D. Transcrição + edição assistida por IA]
                                  |
                  [Revisão humana do MP4 final]
                                  |
                       [Publicação manual]
                                  |
                  [Métricas + lições aprendidas]
                                  |
                    [Retroalimentação editorial]
```

### 6.1 MVP: arquitetura mínima

**Workflow 1 — Descoberta e curadoria**

- Entrada diária *ou* acionamento manual.
- Recebe links/métricas verificáveis, normaliza, registra evidências e evita duplicatas.
- Um módulo de IA classifica relevância e propõe oportunidades.
- Saída: relatório ou tabela de **10 vídeos/itens reais, 3 ideias justificadas**.

**Workflow 2 — Roteiro e aprovação**

- Recebe uma oportunidade escolhida e propõe 2–3 formatos.
- Gera roteiro original + storyboard/indicações de imagem e edição.
- Luiz edita e aprova antes de gravar.

**Workflow 3 — Editor local experimental**

- Recebe vídeo bruto aprovado.
- Transcreve com timestamps.
- Faz cortes revisáveis; cria legendas e animações; exporta primeira versão 9:16.
- Devolve MP4 e um relatório de operações, com possibilidade de corrigir manualmente.

### 6.2 Infraestrutura recomendada

| Componente | Escolha inicial | Observações |
|---|---|---|
| Orquestração | **n8n Community self-hosted** | Software gratuito no PC; fluxos agendados só rodam quando serviço/PC estiver online |
| Instalação | Docker / Docker Compose | Versões fixadas e volumes persistentes; testar backup/restore |
| Banco de dados | **Supabase Free** ou SQLite/Postgres local | Projeto **novo e separado**; nunca usar tabelas do financeiro por conveniência |
| Análise e rascunhos | Ollama com modelo local, ou ChatGPT para uso interativo | ChatGPT Plus **não equivale** a créditos de API. Produção automatizada pode exigir API com custo |
| Transcrição | Whisper local | Rodar no PC, revisar precisão e termos técnicos |
| Edição e renderização | FFmpeg + Remotion | Software gratuito; trabalho de configuração e renderização local |
| Interface inicial | Tabela/board leve ou formulário básico | Não começar por dashboard sofisticado |
| Controle de versão | GitHub privado | Criar repositório dedicado **somente quando decidido explicitamente** |
| Hospedagem 24/7 | Não obrigatória na v1 | Avaliar VPS ou outro serviço depois, com custo e limites reais |
| Curso de apoio | AiVerso (em avaliação/planejado) | Material de aprendizado, não dependência arquitetural |

O PC pessoal conhecido tem Ryzen 7 5700X, RTX 4070 e 32 GB de RAM: adequado para começar com automações e experimentos de modelos locais menores. Desempenho de inferência e edição depende do modelo, da VRAM e da configuração; deve ser medido.

### 6.3 Princípios de produto

- Separar **coleta**, **classificação**, **roteiro**, **edição** e **publicação**.
- Fazer o caminho mais simples funcionar antes de sofisticar agentes.
- Falhas de uma fonte não interrompem o restante.
- Dados incompletos devem aparecer como incompletos, nunca preenchidos por invenção.
- Reexecuções são **idempotentes**: não criar a mesma tendência ou roteiro duas vezes por acidente.
- Toda decisão automática precisa de justificativa e ligação ao material original.
- Nenhuma IA recebe acesso irrestrito a credenciais, contas ou dados de terceiros.

---

## 7. Agentes e papéis — versões mínima e futura

### 7.1 V1: um agente de análise/roteiro com ferramentas controladas

No MVP, agentes são **papéis lógicos**; não significam que sete modelos estão executando autonomamente. Pode haver apenas um modelo com instruções e ferramentas separadas.

| Papel | Entrada | Saída | Critério de qualidade |
|---|---|---|---|
| **Curador de fontes** | URLs, textos, títulos, datas, métricas disponíveis | Item normalizado e origem | Evidência, timestamp, sem preencher lacunas |
| **Analista de tendências** | Item + dados comparáveis + nicho | Nota, confiança, justificativa e riscos | Sem inventar crescimento; distinguir viral de relevante |
| **Especialista editorial BR** | Tendência internacional e fontes | Ângulo brasileiro, público e linguagem | Originalidade, contexto, utilidade, sem “tradução preguiçosa” |
| **Roteirista** | Oportunidade aprovada | 2–3 ganchos, roteiro, CTA opcional, plano de cena | Natural, factualmente correto, fácil de falar |
| **Verificador de fatos** | Afirmações do roteiro | Evidências, checagens, bloqueios e pendências | Notícias, vagas, preços, modelos e disponibilidade só com fonte atual |
| **Diretor de edição** | Roteiro aprovado + transcrição | Plano temporal de cortes, legendas, B-roll e animação | Efeito acompanha significado; não distorce a fala |
| **Analista de performance** | Métricas dos posts próprios | Hipóteses e recomendações | Não confundir correlação com causalidade |

**Evolução:** quando a v1 estiver estável, transformar papéis em etapas separadas do n8n, skills reutilizáveis ou agentes especializados. Evitar múltiplas chamadas caras para atividades que cabem num único processo estruturado.

### 7.2 Gates humanos obrigatórios

- **Aprovar pauta:** faz sentido para o canal?
- **Aprovar roteiro e fatos:** está correto e soa como Luiz?
- **Aprovar mídia:** imagens, uso de marca, fonte e música têm permissão?
- **Aprovar MP4:** não há erro de legenda, corte estranho, artefato ou explicação enganosa?
- **Publicar:** postagem manual e revisão final das informações sensíveis.

### 7.3 Instrução-mestra editorial — prompt-base

```text
Você é o núcleo editorial do Creator Radar AI, um projeto brasileiro
sobre inteligência artificial, tecnologia, trabalho, oportunidades,
notícias, experiências e projetos pessoais.

Priorize ideias que possam interessar a pessoas iniciantes, sem excluir
conteúdos intermediários e avançados. Comece pelo problema, benefício
ou curiosidade, não pelo nome técnico da ferramenta.

Para toda sugestão:
- identifique a fonte primária, URL e data;
- diferencie fato confirmado, opinião, hipótese e dado ausente;
- verifique se a notícia é atual e se está disponível no Brasil;
- proponha um ângulo original, útil, humano e em português;
- não replique falas, estruturas únicas nem vídeos de outros criadores;
- nunca invente visualizações, crescimento, preços, vagas ou resultados;
- evite sensacionalismo, garantias de emprego e promessas financeiras;
- gere 2 a 3 formatos: explicação simples, opinião/reflexão ou demonstração;
- gere sugestões de cenas apenas para fatos que o vídeo sustenta;
- indique quais partes exigem revisão humana.

Se informações essenciais estiverem faltando, retorne PENDENTE e
explique exatamente o que precisa ser verificado.
```

---

## 8. Como avaliar oportunidades de conteúdo

### 8.1 Dados mínimos de um item

- URL canônica; plataforma; criador/perfil; título ou descrição; idioma; tema/pilar; data de publicação (se conhecida); data/hora de coleta; fonte e qualidade da evidência.
- Métricas somente se disponíveis e lícitas: visualizações, curtidas, comentários, compartilhamentos, seguidores do criador, idade do post, variação entre duas medições.
- Informação se o dado é **real**, **estimado**, **indisponível** ou **apenas ilustrativo**.
- Link para anúncio/documentação original em notícias e lançamentos.

### 8.2 Ranking inicial: 0–100, experimental

| Dimensão | Peso proposto | Como pontuar |
|---|---:|---|
| Relevância para o nicho e público | 30 | Utilidade, clareza, conexão com um pilar, apelo fora da bolha técnica |
| Sinais verificáveis de crescimento | 25 | Velocidade e engajamento **quando houver medições comparáveis** |
| Oportunidade de abordagem original | 25 | Teste próprio, opinião fundamentada, contexto brasileiro, ângulo novo |
| Viabilidade de produzir com qualidade | 20 | Recursos, tempo de gravação, disponibilidade de demonstração, direitos |

Não atribuir “crescimento alto” se só há um número isolado de visualizações. Para dados ausentes, indicar **sem evidência suficiente** e informar uma pontuação provisória apenas das dimensões válidas, com confiança baixa; não mascarar um dado ausente com zero como se fosse performance ruim.

### 8.3 Outras regras de decisão

- Penalizar notícia sem fonte, clickbait enganoso, promessa de renda, suposta ferramenta “gratuita” que exige pagamento e conteúdo baseado em boato.
- Valorizar vídeos com comentários genuinamente curiosos e espaço para uma resposta original.
- Distinguir **viralização** (desempenho relativo demonstrado) de **grande alcance absoluto** (número alto isolado).
- Um vídeo de criador pequeno pode ser mais interessante do que o de uma conta muito grande; validar com dados.
- Não copiar o tema cegamente só porque viralizou: verificar se combina com a identidade do canal.

### 8.4 Estados de oportunidade

`capturado → normalizado → analisado → verificação pendente → elegível → roteiro proposto → aprovado → gravado → em edição → revisão → publicado → mensurado`

Estados alternativos: `descartado`, `duplicado`, `bloqueado por direitos`, `informação insuficiente`, `cancelado`.

---

## 9. Roteiro e storyboard: padrão de entrega

Cada proposta deve conter:

1. **Por que este vídeo agora?** Data, oportunidade, fonte, público e grau de confiança.
2. **Tese central:** uma frase compreensível, sem jargão.
3. **3 ganchos alternativos** e avaliação de risco de exagero.
4. **Formato:** opinião, tutorial, notícia, lista, bastidor, comparação, reação, carreira.
5. **Texto falado completo**, pensado para 30–60 s inicialmente; linguagem de conversa.
6. **Exemplo ou demonstração real** que sustente a fala.
7. **Plano de edição com timecodes aproximados** e imagens permitidas.
8. **Título/capa, legenda da publicação e CTA opcional** (não exigir “segue para parte 2”).
9. **Checklist de fatos**: o que foi testado, fonte, data e pontos não confirmados.
10. **Referências de estilo** separadas do conteúdo, para aprender técnicas sem plagiar.

### 9.1 Template de roteiro em Markdown

```markdown
# Roteiro — [título curto]

- Pilar: [dicas/carreira/notícia/opinião/projetos]
- Público: [iniciante/intermediário/avançado]
- Duração desejada: [30–60 s]
- Origem e data: [URL, autor, publicação, acesso]
- Status factual: [confirmado/parcial/pendente]

## Gancho (0–4 s)
[Fala natural]
[Texto curto na tela e movimento da câmera]

## Contexto (4–12 s)
[Problema ou curiosidade]
[Imagem/captura permitida, se necessária]

## Desenvolvimento (12–40 s)
[2 ou 3 explicações/demonstrações reais]
[Legenda e elementos visuais sincronizados]

## Fechamento (40–55 s)
[Conclusão + pergunta ou convite discreto, se fizer sentido]

## Evidências
- [URL da fonte primária]
- [O que foi efetivamente testado]
- [O que não foi possível confirmar]

## Pendências de gravação e edição
- [ ] Aprovar fatos
- [ ] Verificar direitos das mídias
- [ ] Gravar vertical
- [ ] Revisar legendas
- [ ] Aprovar exportação
```

### 9.2 Primeiros conteúdos candidatos

| Prioridade | Tema/gancho | Pilar | Demonstração sugerida |
|---|---|---|---|
| 1 | “Você provavelmente está usando o ChatGPT só pela metade.” | Iniciantes | 3 usos reais, simples, sem inventar funções |
| 2 | “Se eu começasse do zero em IA hoje, faria isso.” | Carreira | Passos de estudo e portfólio do próprio Luiz |
| 3 | “Criei uma IA que encontra ideias de vídeos para mim.” | Projeto | Mostrar MVP real, inclusive limitações |
| 4 | “Gravei um vídeo e tentei deixar a IA editar tudo.” | Experiência | Antes/depois de uma edição realmente testada |
| 5 | “Como a IA mudou a minha forma de aprender.” | Opinião | Reflexão pessoal com exemplo concreto |
| 6 | “3 erros que eu evitaria ao começar a usar IA.” | Iniciantes | Exemplos práticos, privacidade e verificação |
| 7 | “O que uma pessoa de marketing pode automatizar hoje?” | Marketing | Caso fictício ou público, sem dados internos |
| 8 | “Vale pagar um curso de IA ou aprender por projetos?” | Carreira/opinião | Prós/contras sem prometer retorno |
| 9 | “Vagas de IA abertas: o que elas realmente pedem?” | Oportunidades | Verificar vagas reais na data, URL e requisitos |
| 10 | “Seu projeto pode vazar senhas por causa de um `.env`.” | Segurança acessível | Exemplo fictício, `.gitignore` e GitHub Actions |
| 11 | “A novidade que vi no X e ainda não expliquei para meus amigos.” | Notícias | Fonte internacional + impacto brasileiro |
| 12 | “Eu testei uma skill de IA e economizei estas etapas.” | Ferramentas | Medir e mostrar fluxo real; sem resultado inventado |
| 13 | “O n8n é gratuito? O que dá para fazer sem pagar?” | Iniciantes | Demonstrar Community local e limites |
| 14 | “ChatGPT não é a mesma coisa que API: entenda antes de automatizar.” | Educação | Exemplo claro de uso interativo vs custo de API |
| 15 | “Como eu criei um sistema pessoal sem começar programando do zero.” | Projetos | Mostrar arquitetura com dados fictícios |

Nenhuma dessas ideias afirma que já existe uma tendência ativa. A seleção final depende da pesquisa atual, da utilidade e dos testes.

---

## 10. Editor de vídeo com IA — como queremos que funcione

### 10.1 Entrada e saída

**Entrada:** gravação vertical própria, roteiro aprovado, transcrição/cenas pretendidas, estilo visual, assets autorizados.  
**Saída:** MP4 vertical 1080 × 1920, legendas sincronizadas, cortes revisados, gráficos, ícones e imagens de apoio, com trilha/efeitos somente quando licenciados.

### 10.2 Pipeline de edição recomendado

1. **Receber:** arquivo bruto e metadados; manter original intacto.
2. **Transcrever:** Whisper local com timestamps; revisar nomes, inglês, números e termos técnicos.
3. **Detectar pausas e erros:** sugerir cortes sem apagar informação essencial. Pausa silenciosa não é automaticamente “erro”.
4. **Criar plano temporal:** associar trechos falados a título, palavras-chave, legendas, capturas, zooms e grafismos.
5. **Gerar visuais:** capturas próprias, ícones, formas, diagramas, fotos licenciadas; IA generativa apenas quando disponível e autorizada.
6. **Montar:** Remotion para composições/animações; FFmpeg para cortes, áudio, transcodificação e exportação.
7. **Revisar:** conferir sincronização, rosto, pronúncia, cortes, visibilidade de textos, precisão das ilustrações e presença de qualquer material sigiloso.
8. **Exportar:** MP4 H.264/AAC, vertical, fps compatível com a fonte; manter projeto e logs para revisão.

### 10.3 Templates de edição

- **Talking head clean:** rosto em foco, legendas animadas discretas, cortes e zooms suaves.
- **Tutorial:** alternância entre rosto e gravação de tela, destaques e setas pontuais.
- **Notícia:** headline, fonte/data visível, elementos gráficos, imagens devidamente autorizadas.
- **Opinião:** menos distrações, valorização de expressão, ritmo natural.
- **Projeto/bastidores:** código ou interface desfocando dados sensíveis, screenshots e demonstração real.

**Não** fazer “rosto novo” com IA, alterar expressões drasticamente ou simular falas que Luiz não disse. Priorizar a aparência real e a voz original; ElevenLabs é opcional, não obrigatório. Ferramentas comerciais como Captions, OpusClip e Submagic podem servir para benchmarking, mas **não são dependências do MVP**.

### 10.4 Primeiro experimento de editor

Gravar 20–60 segundos de um vídeo simples; transcrever; fazer cortes revisáveis; inserir legendas com destaque de palavras e um ou dois elementos visuais de apoio; exportar; comparar com bruto; corrigir erros e documentar os ajustes. Só depois adicionar imagens geradas e motion graphics complexos.

---

## 11. n8n — desenho operacional dos workflows

### 11.1 Workflow CR-01: importar fontes e deduplicar

`Manual Trigger ou Schedule → Fetch de fontes permitidas / formulário de links → Normalize → Validate → Hash/URL canônica → Supabase Upsert → Log`

- Cadência proposta: uma vez ao dia, preferencialmente manhã no fuso `America/Sao_Paulo`; horário inicial sugerido 08:00, **não ativado**.
- Não coletar em intervalos agressivos sem justificativa.
- `unique(platform, external_id)` quando houver ID estável; fallback para URL canônica normalizada.
- Registrar quantidade de fontes consultadas, falhas e cobertura parcial.
- Permitir “importação manual de 5 links” para validar tudo antes de integrar APIs.

### 11.2 Workflow CR-02: selecionar oportunidades

`Novos itens → Enriquecer com fonte primária → Avaliar conteúdo → Aplicar gates de fatos/segurança → Pontuação explicável → Salvar oportunidades → Enviar para aprovação`

- Não gerar roteiro para item sem fonte suficiente.
- Identificar peças editoriais semelhantes e consolidar em uma oportunidade.
- Separar **fato da tendência** de **interpretação editorial**.

### 11.3 Workflow CR-03: roteirizar

`Ideia aprovada → Selecionar público/formato → Criar 3 ganchos → Redigir texto → Gerar plano de cenas → Checagem factual → Aguardar revisão do Luiz`

- Guardar `script_version`, alterações e autor da revisão.
- Propor roteiro para leitura em voz alta; corrigir frases artificiais.

### 11.4 Workflow CR-04: editar

`Upload bruto → Transcrição → Plano de edição → Renderizar rascunho → Verificação humana → Render final`

- Render local; o n8n coordena, mas não precisa fazer o processamento pesado em cada nó.
- Implementar fila simples e limite de simultaneidade para não sobrecarregar o PC.
- Nunca deixar um processo acessar toda a pasta pessoal por padrão.

### 11.5 Workflow CR-05: desempenho (posterior)

`Post publicado → métricas próprias autorizadas → armazenamento histórico → aprendizados editoriais → revisão dos pesos`

- Inicialmente importar métricas manualmente ou por recursos oficiais acessíveis.
- Registrar diferenças entre **alcance**, **engajamento absoluto**, **taxas**, **retenção** e **conversões**; não assumir que uma queda de visualizações prova perda de relevância.

---

## 12. Base de dados — modelo lógico do MVP

Pode começar como tabelas do Supabase (em projeto **próprio**) ou banco local. Não reutilizar projetos ou tabelas financeiras.

| Entidade | Campos essenciais | Regras |
|---|---|---|
| `sources` | `id`, `name`, `platform`, `url`, `source_type`, `active`, `access_method` | Cadastro de fonte; dados de permissão e frequência |
| `content_items` | `id`, `source_id`, `external_id`, `canonical_url`, `author`, `title`, `published_at`, `captured_at`, `language`, `raw_metadata`, `evidence_status` | `unique` em ID externo/URL normalizada; sem inventar dados |
| `metric_snapshots` | `id`, `content_item_id`, `observed_at`, `views`, `likes`, `comments`, `shares`, `author_followers`, `metric_source` | Variação exige snapshots comparáveis; ausente = `NULL` |
| `opportunities` | `id`, `topic`, `summary`, `audience_level`, `pillar`, `score`, `confidence`, `reasoning`, `status`, `created_at` | Justificativa e status rastreáveis |
| `opportunity_sources` | `opportunity_id`, `content_item_id`, `relevance_note` | Uma ideia pode se basear em várias fontes |
| `scripts` | `id`, `opportunity_id`, `version`, `format`, `hook`, `spoken_text`, `shot_plan`, `fact_check_status`, `status` | Versionar e aprovar |
| `assets` | `id`, `script_id`, `kind`, `source_uri`, `license`, `usage_notes`, `local_path` | Apenas mídias permitidas; não armazenar credenciais |
| `videos` | `id`, `script_id`, `raw_path`, `edited_path`, `render_status`, `approved_at`, `published_url`, `published_at` | Preservar bruto; publicação manual |
| `performance_snapshots` | `id`, `video_id`, `observed_at`, `views`, `likes`, `comments`, `shares`, `saves`, `watch_time`, `retention` | Métrica não disponível permanece nula |
| `agent_runs` | `id`, `workflow`, `started_at`, `finished_at`, `status`, `input_refs`, `output_refs`, `error_summary`, `cost_estimate` | Observabilidade, deduplicação e não registrar segredos |
| `editorial_rules` | `id`, `version`, `pillar_weights`, `score_weights`, `effective_at` | Mudanças de critérios auditáveis |

**Segurança dos dados:** RLS e autenticação se o banco for exposto a uma interface pública, políticas mínimas por proprietário, projeto e chaves separadas; dados sensíveis ou paths privados nunca enviados a frontend público. Chave Supabase *publishable* é destinada a clientes; `service_role`/chave secreta fica estritamente no servidor e nunca em `VITE_*` ou `NEXT_PUBLIC_*`.

### 12.1 Exemplo de registro de oportunidade (fictício)

```json
{
  "title": "Dica acessível sobre agentes de IA",
  "pillar": "dicas_publico_geral",
  "audience_level": "iniciante",
  "source_urls": ["https://example.org/fonte-primaria"],
  "published_at": null,
  "metrics": { "views": null, "growth_rate": null },
  "score": null,
  "confidence": "pendente_de_evidencia",
  "editorial_angle": "Começar por uma tarefa cotidiana e demonstrar o benefício",
  "status": "verificacao_pendente"
}
```

Os valores acima são **apenas demonstrativos**, não uma descoberta real do radar.

---

## 13. Painel simples — telas e experiência

### Módulos propostos

1. **Hoje:** cobertura das fontes, novos itens, falhas, 3 oportunidades propostas, próximas ações.
2. **Radar:** lista de achados; plataforma, link, data, evidência, pilar, público, pontuação, confiança.
3. **Ideias:** Kanban `Encontrada → Verificar → Roteirizar → Aprovada → Gravando → Editando → Publicada → Aprendizado`.
4. **Roteiros:** editor e versionamento; alternativas de gancho; checklist de fatos; plano de edição.
5. **Produção:** upload do bruto, status do render, links para revisão, aprovação e arquivo final.
6. **Biblioteca:** aprendizados, skills testadas, templates, presets de edição, fontes confiáveis.
7. **Desempenho:** histórico dos vídeos próprios, retenção e comentários, com amostras pequenas claramente identificadas.
8. **Configurações:** pesos, horários, fontes, custos, limites de IA, armazenamento e regras de segurança.

### Estados vazios e falhas

- “Ainda não há tendências importadas — adicione um link ou execute uma fonte autorizada.”
- “Não foi possível acessar esta fonte; última tentativa em [data].”
- “Sem dados suficientes para calcular crescimento.”
- “Roteiro aguardando verificação de fatos.”
- “Render falhou: vídeo bruto preservado; ver log técnico.”

Não usar telas silenciosas nem um número “0” onde o correto é “não medido”.

---

## 14. Base de conhecimento e organização dos arquivos

### 14.1 Papel da base já existente

**`LuizOtt/ai-knowledge-base`** continua sendo a biblioteca de IA pessoal: guias, radar de novidades, técnicas de agentes, skills e aprendizados. O Creator Radar AI será um projeto de **produção editorial**, com referências e links bidirecionais para a biblioteca; não duplicar artigos inteiros nem misturar dashboards ou dados privados por conveniência.

### 14.2 Estrutura proposta para um repositório próprio (não criado)

```text
creator-radar-ai/
├── README.md
├── docs/
│   ├── 00-ARQUIVO-MAE.md
│   ├── 01-ESCOPO-MVP.md
│   ├── 02-ARQUITETURA.md
│   ├── 03-ESTRATEGIA-EDITORIAL.md
│   ├── 04-FONTES-E-LICENCAS.md
│   ├── 05-AGENTES-E-PROMPTS.md
│   ├── 06-MODELO-DE-DADOS.md
│   ├── 07-EDITOR-DE-VIDEO.md
│   ├── 08-SEGURANCA.md
│   ├── 09-TESTES-E-RESULTADOS.md
│   └── CHANGELOG.md
├── workflows/
│   ├── CR-01-coleta.json
│   ├── CR-02-analise.json
│   ├── CR-03-roteiros.json
│   └── CR-04-edicao.json
├── agents/
│   ├── editorial.md
│   ├── verificacao.md
│   ├── roteirista.md
│   └── diretor-edicao.md
├── skills/
│   ├── avaliar-tendencia/
│   ├── adaptar-para-publico-br/
│   ├── criar-roteiro-curto/
│   └── planejar-edicao/
├── app/
│   └── README.md
├── editor/
│   ├── templates/
│   ├── scripts/
│   ├── presets/
│   └── README.md
├── data/
│   ├── examples/
│   └── README.md
├── tests/
├── .github/workflows/
│   └── secret-scan.yml
├── .env.example
└── .gitignore
```

**Não versionar:** vídeos brutos privados, MP4 volumosos desnecessários, exports com dados pessoais, credenciais, cookies, tokens, arquivos `.env` reais, backups e prompts/logs que contenham informações sigilosas. Arquivos de mídia grandes devem ficar em armazenamento separado, com controle de acesso.

### 14.3 Como documentar cada aprendizado

`problema → hipótese → fonte → ferramenta e versão → experimento → resultado observado → custo → limitações → decisão → próximo teste`.

Adicionar tags por dificuldade (`iniciante/intermediário/avançado`), pilar, data, produto e projeto. **Não registrar “testado” quando apenas leu/assistiu uma demonstração.**

---

## 15. Segurança e governança — obrigatórias desde a primeira semana

### 15.1 Regra para `.env`

**Arquivos `.env` são locais e privados, mas o nome `.env` sozinho não impede vazamentos.** O risco ocorre se o arquivo for versionado, enviado por engano, incluído em logs/artefatos, servido por um site ou se a credencial estiver no frontend.

- Colocar `.env` e `.env.*` no `.gitignore`, com exceções apenas para modelos sem segredos como `.env.example`.
- Não adicionar `service_role`, tokens de API, senhas, cookies de sessão ou certificados ao código, a prompts ou à base pública.
- Guardar credenciais de serviços em mecanismos apropriados, com escopo mínimo e rotação quando necessário.
- Não colocar credenciais secretas em `VITE_*` ou `NEXT_PUBLIC_*`; isso vai para o bundle do navegador.
- Não enviar `.env` real a IA ou colar seu conteúdo em conversas.
- Adicionar verificação de segredos em commits/PRs; revisar os alertas.
- **Caso ocorra exposição:** revogar/rotacionar o segredo imediatamente; deletar arquivo do último commit **não basta**, pois o histórico pode continuar acessível.

### 15.2 Correções já executadas em 08/11/2026

- `LuizOtt/Meu-Financeiro`: `.gitignore` ampliado para variantes de `.env`, certificados/chaves e arquivos locais.
- `LuizOtt/Radar-Oportunidades`: `.gitignore` criado.
- `LuizOtt/Meu-Financeiro`, `LuizOtt/Radar-Oportunidades` e `LuizOtt/ai-knowledge-base`: workflow `.github/workflows/secret-scan.yml` criado, usando **Gitleaks** em push/PR/execução manual, com actions fixadas por commit SHA.
- **Verificação do write:** arquivos lidos novamente nos repositórios, conteúdos presentes.
- **Validação concluída:** os três jobs Gitleaks disparados pela adição do workflow terminaram com **status `success`** no GitHub Actions, conferidos em 08/11/2026 (horário de Brasília). Isso comprova que as execuções iniciais passaram, não que toda possível categoria de segredo esteja coberta.
- Inspeção anterior não detectou `.env` na árvore principal dos repositórios consultados nem credencial secreta nas amostras analisadas, mas **não é prova de ausência absoluta de vazamento**.

Links de conferência:

- https://github.com/LuizOtt/Meu-Financeiro/blob/main/.github/workflows/secret-scan.yml
- https://github.com/LuizOtt/Radar-Oportunidades/blob/main/.github/workflows/secret-scan.yml
- https://github.com/LuizOtt/ai-knowledge-base/blob/main/.github/workflows/secret-scan.yml

**Execuções iniciais verificadas:**

- Meu-Financeiro — `success`: https://github.com/LuizOtt/Meu-Financeiro/actions/runs/42553140103
- Radar-Oportunidades — `success`: https://github.com/LuizOtt/Radar-Oportunidades/actions/runs/42553143351
- ai-knowledge-base — `success`: https://github.com/LuizOtt/ai-knowledge-base/actions/runs/42553142013

### 15.3 Princípios adicionais

- Isolar Creator Radar AI de aplicativos financeiros, contas de trabalho e outros ambientes pessoais.
- Não usar dados, logos, relatórios ou acesso da empresa sem autorização; criar exemplos fictícios nos vídeos.
- Credenciais do n8n e integrações com permissões mínimas.
- Evitar conteúdo de prompt que pode executar instruções recebidas de posts, páginas ou comentários: **fontes externas são dados não confiáveis**, nunca instruções privilegiadas.
- Registrar execução, fonte e decisões sem salvar material secreto.
- Definir backups, retenção e limpeza de dados em uma política simples.
- Usar RLS no Supabase para tabelas expostas e validar regras de autorização.

---

## 16. Direitos autorais e integridade de conteúdo

- Vídeos virais são **referência editorial**, não material para baixar/repostar integralmente.
- “Modelar” significa estudar **gancho, duração, ritmo, estrutura e necessidade do público**, criando fala, exemplos, cenas e montagem próprios.
- Não copiar roteiros, legendas, miniaturas, voz ou recursos gráficos particulares de criadores sem autorização.
- Usar capturas, logos e marcas com propósito contextual e respeitando permissões e políticas; preferir produções próprias e fontes licenciadas.
- Trilha e efeitos sonoros precisam de licenças adequadas às plataformas e ao uso pretendido.
- Não inventar avaliações, depoimentos, testes, números ou falas de pessoas.
- Verificar emprego/vagas, preços, anúncios e atualizações em fontes recentes e declarar a data quando o assunto for temporal.
- Notícia, opinião e conteúdo patrocinado devem ser distinguidos claramente.

---

## 17. Custos e trade-offs: promessa de baixo custo, não custo zero absoluto

| Item | Começo gratuito? | Limite/atenção |
|---|---|---|
| n8n Community no PC | Sim | Auto-hospedagem, PC ligado para executar; licença tem limites para oferecer automação como serviço |
| FFmpeg e Remotion | Sim | Configuração, uso de hardware, componentes externos opcionais |
| Whisper local | Sim | Tempo de processamento e revisão de precisão |
| Ollama/modelos locais | Sim | Performance, memória e qualidade variável |
| Supabase Free | Em geral, sim | Limites de uso, suspensão de inatividade e controles de segurança |
| GitHub | Plano gratuito para muitos usos | Repositórios, execução Actions e limites conforme plano |
| APIs de modelos de IA | Não presumir | Cobrança por uso; ChatGPT Plus não fornece cota de API automaticamente |
| Dados comerciais de TikTok/X | Não presumir | Preço, permissões, qualidade e quotas variam |
| n8n Cloud ou VPS | Geralmente pagos | Conveniência/24h; não necessários para MVP local |
| Gerador comercial de vídeos/voz | Opcional | Créditos e licenças separados |
| AiVerso | Curso pago, compra não confirmada | Curso apoia estudo, não dispensa testes e APIs possivelmente pagas |

**Princípio financeiro:** não acrescentar serviços recorrentes enquanto o caminho local gratuito consegue entregar um vídeo e um radar útil.

---

## 18. Cronograma de implementação e critérios de aceite

### Fase 0 — Perfil e diretrizes (estado: perfil concluído)

- [x] Definir nicho amplo, público e tom.
- [x] Criar TikTok `@luizotavio.tech` com nome, foto e bio.
- [x] Aprovar a estratégia “descobertas internacionais → conteúdos brasileiros”.
- [ ] Definir um kit básico de título/legenda/posição de rosto.
- [ ] Gravar primeiro vídeo curto, mesmo que a edição inicial seja manual/semiautomática.

### Semana 1 — MVP do radar

- [ ] Confirmar ambiente pessoal n8n e instalação local com armazenamento persistente.
- [ ] Definir projeto/base separados para Creator Radar AI.
- [ ] Importar **5 a 10 links reais**, com autoria, datas e evidências.
- [ ] Implementar deduplicação e estados de erro.
- [ ] Testar uma fonte oficial e uma fonte internacional em modo autorizado/assistido.
- [ ] Produzir relatório de 3 oportunidades com justificativas e fontes.

**Aceite:** 10 itens reais sem duplicatas; 3 oportunidades justificadas; nenhum número inventado; execução reproduzível.

### Semana 2 — Agente editorial e roteiro

- [ ] Implementar análise/classificação com uma IA de custo controlado.
- [ ] Gerar 3 opções de roteiro para ao menos 1 ideia.
- [ ] Incluir verificação factual, público e plano de cenas.
- [ ] Implementar a aprovação humana sem publicar automaticamente.

**Aceite:** 1 roteiro original aprovado com referências, duração-alvo e linguagem natural.

### Semana 3 — Editor com IA

- [ ] Gravar um teste de 20–60 segundos com voz própria.
- [ ] Transcrever localmente, revisar e sincronizar legendas.
- [ ] Criar template com cortes/zooms, poucos grafismos e um apoio visual.
- [ ] Exportar MP4 vertical e comparar com bruto.

**Aceite:** 1 MP4 reproduzível e revisado; legenda correta; sem mudança artificial de rosto/voz; sem dados privados na tela.

### Semana 4 — Integração e portfólio

- [ ] Ligar oportunidade aprovada a roteiro e projeto de edição.
- [ ] Documentar arquitetura, dificuldades, custo real e melhorias.
- [ ] Publicar um vídeo, de forma manual e com checagem final.
- [ ] Registrar primeiras métricas (sem tirar conclusões precoces).

**Aceite geral do MVP:** **10 itens analisados → 3 ideias → 1 roteiro aprovado → 1 vídeo próprio editado → 1 publicação → 1 estudo de caso**.

### Próximas versões (apenas depois do MVP)

- Captura automatizada de mais fontes, quando houver integração autorizada.
- Comparação da performance entre formatos e níveis de público.
- Sugestão semanal de pauta com base em métricas próprias e sinais externos.
- Biblioteca de presets e skills avançadas.
- Dashboard completo e histórico visual de crescimento.
- Integração com Reels/Shorts, respeitando APIs e políticas.
- Hospedagem 24/7 se o ganho compensar o custo.
- Pipeline de edição mais inteligente, com análise de cenas, mudança de layout e variações de legendas.

---

## 19. Indicadores e avaliação de sucesso

### 19.1 Operacionais (do sistema)

- Número de fontes consultadas com sucesso / total previsto.
- Percentual de itens com evidência e data verificáveis.
- Taxa de duplicação evitada.
- Oportunidades aprovadas / propostas.
- Tempo gasto entre descoberta e roteiro aprovado.
- Tempo gasto na edição manual vs assistida.
- Taxa de falhas de workflow, transcrição e renderização.
- Custo mensal real, incluindo APIs e serviços.

### 19.2 De conteúdo (do canal)

- Publicações por semana, mantendo qualidade.
- Retenção e taxa de conclusão (quando acessíveis).
- Compartilhamentos, salvamentos e comentários relevantes.
- Seguidores e visitas de perfil como métricas de contexto — **não objetivo isolado**.
- Respostas qualitativas: dúvidas, pedidos de demonstração, entendimento do tema.
- Diferença de performance entre iniciantes, carreira, notícias, opinião e projetos.

**Atenção:** vídeo com muita visualização não é automaticamente o mais útil ou o melhor para reputação. Analisar alcance, envolvimento e qualidade da audiência separadamente.

### 19.3 Portfólio

Cada entrega documentada precisa mostrar:

1. Problema real e motivação.
2. Solução, arquitetura e ferramentas.
3. Evidências de funcionamento e testes reproduzíveis.
4. Custos e limitações reconhecidas.
5. Aprendizados e próxima melhoria.

---

## 20. Riscos e respostas planejadas

| Risco | Probabilidade/impacto | Resposta |
|---|---|---|
| TikTok sem API adequada para radar de vídeos | Alto risco técnico | Coleta assistida com fontes oficiais; não prometer automação total |
| Fontes internacionais bloqueiam acesso automático | Médio/alto | Registros com link e metadados autorizados, sem burlar restrições |
| Dados de viralização incompletos | Alto | `NULL`, confiança baixa, não inventar ranking |
| Copiar conteúdo de terceiros sem querer | Médio | Adaptação original, teste próprio, revisão editorial e direitos |
| Notícia falsa/antiga/rumor | Alto | Fonte primária, data do evento, segundo sinal quando aplicável |
| Modelo local gera roteiro genérico | Médio | Prompt estruturado, revisão humana e exemplos reais |
| Editor remove contexto ou legenda incorreta | Médio/alto | Preservar bruto, revisão e comparativo antes/depois |
| Estouro de custo em APIs | Médio | Limites mensais, aprovação para plano pago, logs de custos |
| Vazamento de credenciais/dados de trabalho | Alto impacto | `.gitignore`, Gitleaks, segredos em vault, RLS, separação de ambientes |
| Excesso de projetos e pouco conteúdo publicado | Alto risco de execução | Meta: publicar cedo; MVP mínimo antes de painel complexo |
| Conteúdo restrito só a técnicos | Alto risco editorial | Acessibilidade obrigatória e mix amplo de pilares |
| Agenda local falha com PC desligado | Médio | Execução manual como fallback e, depois, infraestrutura 24/7 |

---

## 21. Registro de decisões e próximos passos

### 21.1 Decisões já tomadas

- Canal pessoal sobre o universo da IA, não só tutoriais.
- Público iniciante tem prioridade, sem abandonar avançados.
- Misturar IA, marketing, tecnologia, carreira, oportunidades, notícias, reflexões e projetos.
- TikTok criado com nome `Luiz Otávio | IA & Tech`, arroba `@luizotavio.tech` e bio definida.
- Apresentação com rosto/voz próprios e edição dinâmica, sem descaracterizar a pessoa.
- Creator Radar AI como projeto de aprendizado, produção e portfólio.
- Fontes BR de vídeo curto **mais** fonte internacional de primeira mão.
- Adaptação de descobertas dos gringos **expressamente aprovada**.
- Priorizar stack gratuita e ambiente pessoal.
- Aprovação humana antes da publicação.
- Segurança preventiva de arquivos de ambiente nos repositórios existentes.

### 21.2 A decidir ao executar (não bloquear planejamento)

- Localização exata dos arquivos no PC e forma de rodar n8n (Docker recomendado).
- Banco local ou novo projeto Supabase, após comparar necessidade de acesso remoto.
- Método licenciado/autorizado de entrada de dados de TikTok e X.
- Modelo local escolhido por benchmarks reais e compatibilidade do PC.
- Primeiro template Remotion e estilo de legendas.
- Criação do repositório dedicado e política de publicização do portfólio.
- Disponibilidade real de tempo semanal e eventual compra de curso ou serviço.

### 21.3 Primeiro trabalho recomendado

1. **Gravar o vídeo #1**: “Você provavelmente está usando o ChatGPT só pela metade”, com três exemplos efetivamente testados.
2. **Instalar o n8n Community no PC pessoal** de forma isolada e persistente.
3. **Importar 5 links**: parte de TikTok/Creative Center, parte de fonte internacional verificada.
4. **Gerar 3 propostas originais** e escolher uma.
5. **Construir o primeiro editor com legendas e cortes revisáveis**.
6. **Registrar um estudo de caso** do fluxo completo para o portfólio.

---

## 22. Referências oficiais para validação técnica (consultadas em 08/11/2026)

- TikTok Creative Center — tendências: https://ads.tiktok.com/creative/creativeCenter/trends?countryCode=BR&period=30
- TikTok — Como usar Trends: https://ads.tiktok.com/resources/help/article/how-to-use-trends
- TikTok Research API — quem pode usar: https://developers.tiktok.com/products/research-api
- TikTok Research API — FAQs, elegibilidade e atrasos: https://developers.tiktok.com/docs/en/research-api-faq
- n8n — documentação self-hosted: https://docs.n8n.io/hosting/
- n8n — Community e licenciamento: https://support.n8n.io/article/can-i-use-your-license-for-my-use-case
- n8n — recursos da Community: https://docs.n8n.io/hosting/community-edition-features/
- Gitleaks Action — uso e restrições: https://github.com/gitleaks/gitleaks-action
- GitHub — Secret scanning: https://docs.github.com/en/code-security/how-tos/secure-your-secrets/detect-secret-leaks/enable-secret-scanning
- Remotion: https://www.remotion.dev/
- FFmpeg: https://ffmpeg.org/
- Ollama: https://ollama.com/
- Supabase: https://supabase.com/docs

> **Nota de manutenção:** ferramentas, preços, APIs, licenças, quotas e políticas mudam. Sempre verificar documentação oficial no momento da implementação e registrar data da validação. Não assumir que uma API de pesquisa autoriza usos comerciais ou a coleta irrestrita do TikTok.

---

## 23. Resumo executivo final

O Creator Radar AI é um laboratório pessoal e um sistema de produção de conteúdo. Seu diferencial será reunir **fontes internacionais de informação técnica**, **tendências de vídeos e linguagem brasileira**, **avaliação editorial baseada em evidências** e **uma edição com IA que respeita a identidade do criador**. O canal pode ensinar uma dica simples para quem conheceu IA ontem e, no dia seguinte, explorar carreira, notícias, uma reflexão pessoal ou um projeto real.

**Ordem de prioridade:** publicar e aprender → validar o radar → automatizar roteiros → automatizar a primeira edição → medir → aprofundar tecnologia. O sistema existe para facilitar a criação de conteúdo original e demonstrar competência; não para acumular agentes, assinaturas ou vídeos genéricos.

**Próxima ação concreta:** primeiro roteiro e primeira gravação, em paralelo à instalação do n8n e ao experimento inicial com 5–10 referências verificáveis.
