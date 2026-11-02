# Project Instructions

## GitHub Project Management

When asked to work with GitHub projects, use the `github-project-manager` agent via the Task tool. This agent is specialized for managing GitHub project #2 ("India's website") including:

- Adding issues to the project
- Updating issue status (Ready, Blocked, In progress, Done)
- Managing project items and operations
- Working with pull requests in the project context

Example usage:

```
Task tool with subagent_type: "github-project-manager"
```

## Agent skills

### Issue tracker

Issues live in GitHub Issues for gsong/indianagy.com, managed with the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Uses the five default triage labels (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `GLOSSARY.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.
