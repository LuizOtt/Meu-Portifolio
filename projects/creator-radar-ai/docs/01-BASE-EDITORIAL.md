# Base editorial do Creator Radar AI

## Objetivo

Usar a AI Knowledge Base como memória permanente do projeto e transformar conhecimentos existentes em oportunidades de vídeo, sem duplicar capítulos e sem tratar conteúdo antigo como automaticamente atual.

## As três entradas

### 1. AI Knowledge Base

Fornece conhecimentos consolidados, fontes, estado de confiança e histórico. Cada candidato local deve guardar:

- `knowledge_id`;
- caminho do documento original;
- estado factual (`documented`, `verified`, `tested`);
- última data de verificação;
- ação necessária antes de gravar.

### 2. Ideias registradas

Recebe ideias criadas pelo Luiz, comentários da audiência e temas que ainda não possuem capítulo na biblioteca. Uma ideia pode depois ser relacionada a um ou mais conhecimentos.

### 3. Radar externo

Acrescenta atualidade. Um lançamento pode:

- atualizar um conhecimento existente;
- tornar uma ideia antiga relevante novamente;
- criar uma pauta nova;
- permanecer apenas como notícia, sem virar capítulo permanente.

## Regra de combinação

Uma oportunidade pode ter várias origens. Exemplo:

`capítulo sobre segurança de agentes + notícia recente + dúvida de um comentário → vídeo atualizado`

O sistema deve preservar todas as referências e nunca apagar a origem manual da ideia.

## Gates antes do roteiro

Um item só muda para `ready_for_script` quando:

1. o benefício para o público está claro;
2. afirmações temporais foram atualizadas;
3. fato, opinião e hipótese estão separados;
4. há uma demonstração real ou a ausência de teste será declarada;
5. riscos de privacidade, segurança e direitos foram revisados;
6. o ângulo é original e compatível com a identidade do canal.

## Primeiro lote

O arquivo `data/editorial-backlog.json` contém seis candidatos iniciais. Todos começam em `verify`, porque a biblioteca registra corretamente que conteúdo documentado ou verificado não é necessariamente testado.

O primeiro vídeo deve ser escolhido considerando:

- facilidade de demonstrar com segurança;
- apelo para iniciantes;
- disponibilidade de fontes atuais;
- tempo de produção;
- possibilidade de mostrar aprendizado próprio.

## Atualização futura

Quando a AI Knowledge Base estiver disponível localmente, um importador poderá ler `sistema/indice-conhecimentos.json` e atualizar o catálogo de candidatos. Até lá, este snapshot editorial registra a leitura feita em 09/11/2026 e mantém links para a fonte original.

