[CmdletBinding()]
param(
    [string]$ProjectRoot = (Split-Path -Parent $PSScriptRoot)
)

$ErrorActionPreference = 'Stop'

function Read-JsonFile {
    param([Parameter(Mandatory)][string]$Path)

    if (-not (Test-Path -LiteralPath $Path -PathType Leaf)) {
        throw "Arquivo não encontrado: $Path"
    }

    try {
        return Get-Content -Raw -LiteralPath $Path | ConvertFrom-Json
    }
    catch {
        throw "JSON inválido em ${Path}: $($_.Exception.Message)"
    }
}

function Assert-RequiredFields {
    param(
        [Parameter(Mandatory)]$Item,
        [Parameter(Mandatory)][string[]]$Fields,
        [Parameter(Mandatory)][string]$Context
    )

    foreach ($field in $Fields) {
        $property = $Item.PSObject.Properties[$field]
        if ($null -eq $property -or [string]::IsNullOrWhiteSpace([string]$property.Value)) {
            throw "Campo obrigatório ausente em ${Context}: $field"
        }
    }
}

$sourcesPath = Join-Path $ProjectRoot 'config/sources.json'
$candidatesPath = Join-Path $ProjectRoot 'data/knowledge-candidates.json'
$backlogPath = Join-Path $ProjectRoot 'data/editorial-backlog.json'

$sources = Read-JsonFile -Path $sourcesPath
$candidates = Read-JsonFile -Path $candidatesPath
$backlog = Read-JsonFile -Path $backlogPath

$sourceIds = @{}
foreach ($source in $sources.sources) {
    Assert-RequiredFields -Item $source -Fields @('source_id', 'source_type', 'name', 'role') -Context 'source'
    if ($sourceIds.ContainsKey($source.source_id)) {
        throw "source_id duplicado: $($source.source_id)"
    }
    $sourceIds[$source.source_id] = $true
}

$candidateIds = @{}
$knowledgeIds = @{}
foreach ($candidate in $candidates.items) {
    Assert-RequiredFields -Item $candidate -Fields @(
        'candidate_id',
        'knowledge_id',
        'source_path',
        'title',
        'pillar',
        'audience',
        'knowledge_status',
        'editorial_priority',
        'next_gate'
    ) -Context 'knowledge candidate'

    if ($candidateIds.ContainsKey($candidate.candidate_id)) {
        throw "candidate_id duplicado: $($candidate.candidate_id)"
    }
    if ($knowledgeIds.ContainsKey($candidate.knowledge_id)) {
        throw "knowledge_id duplicado: $($candidate.knowledge_id)"
    }

    $candidateIds[$candidate.candidate_id] = $true
    $knowledgeIds[$candidate.knowledge_id] = $true
}

$ideaIds = @{}
$priorities = @{}
foreach ($idea in $backlog.items) {
    Assert-RequiredFields -Item $idea -Fields @(
        'idea_id',
        'candidate_id',
        'origin',
        'working_title',
        'pillar',
        'audience',
        'format',
        'status',
        'priority'
    ) -Context 'editorial backlog item'

    if ($ideaIds.ContainsKey($idea.idea_id)) {
        throw "idea_id duplicado: $($idea.idea_id)"
    }
    if (-not $candidateIds.ContainsKey($idea.candidate_id)) {
        throw "Backlog referencia candidate_id inexistente: $($idea.candidate_id)"
    }
    if ($priorities.ContainsKey([string]$idea.priority)) {
        throw "Prioridade duplicada no backlog: $($idea.priority)"
    }

    $ideaIds[$idea.idea_id] = $true
    $priorities[[string]$idea.priority] = $true
}

[pscustomobject]@{
    Status = 'OK'
    Sources = $sources.sources.Count
    KnowledgeCandidates = $candidates.items.Count
    BacklogItems = $backlog.items.Count
    ValidatedAt = (Get-Date).ToString('yyyy-MM-dd HH:mm:ss zzz')
} | Format-List

