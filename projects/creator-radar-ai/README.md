# Creator Radar AI

Base editorial para transformar conhecimento próprio, ideias registradas e sinais externos em vídeos originais.

## Entradas

1. **AI Knowledge Base** — fonte de conhecimento consolidado e verificável.
2. **Ideias registradas** — backlog criado manualmente pelo Luiz.
3. **Radar externo** — tendências, lançamentos e fontes primárias atuais.

As três entradas alimentam o mesmo processo:

`capturar → normalizar → verificar → priorizar → roteirizar → aprovar → produzir → medir`

## O que já existe nesta base

- [`config/sources.json`](config/sources.json): catálogo das três fontes editoriais.
- [`data/knowledge-candidates.json`](data/knowledge-candidates.json): 13 conhecimentos da biblioteca transformados em candidatos de conteúdo.
- [`data/editorial-backlog.json`](data/editorial-backlog.json): primeiro lote priorizado de seis vídeos.
- [`docs/01-BASE-EDITORIAL.md`](docs/01-BASE-EDITORIAL.md): regras de integração e fluxo editorial.
- [`scripts/Validate-EditorialData.ps1`](scripts/Validate-EditorialData.ps1): valida IDs e campos obrigatórios dos arquivos JSON.

## Regra de separação

A `LuizOtt/ai-knowledge-base` continua sendo a fonte de verdade do conhecimento. Este projeto não copia capítulos inteiros. Ele guarda o `knowledge_id`, o caminho original, o estado factual e a decisão editorial necessária para transformar o assunto em vídeo.

## Próxima entrega

Escolher um item do backlog de prioridade alta, atualizar suas fontes, executar a demonstração prevista e escrever o primeiro roteiro de 30–60 segundos.

