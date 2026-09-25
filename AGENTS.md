<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Codex task progress reporting

For substantial development tasks, keep `.codex-progress.json` current so the Codex Control Centre can report task state.

Update it when planning completes, implementation milestones complete, tests start or finish, blockers appear or resolve, review starts, and the task completes.

Allowed phases:
- `scoping`
- `planning`
- `implementation`
- `testing`
- `review`
- `complete`

Required task fields should include:
- `taskId`
- `title`
- `status`
- `phase`
- `progress`
- `startedAt`
- `updatedAt`
- `estimatedMinutesRemaining`
- `confidence`
- `currentAction`
- `blockers`
- `tests`
- `notes`

ETA must be revised when tests, blockers, scope, or new information change the estimate. Do not infer ETA from token usage. Before declaring completion, run relevant verification, set `phase` to `complete`, `progress` to `100`, and `estimatedMinutesRemaining` to `0`.
