const stages = ["Request", "Clarify", "Assign", "Complete"];

export function WorkflowVisual() {
  return (
    <div className="panel p-5" aria-label="A workflow moves from a request through clarification and assignment to completion">
      <p className="text-sm font-semibold">One shared view of the work</p>
      <ol className="mt-6 grid gap-3 sm:grid-cols-4">
        {stages.map((stage, index) => (
          <li key={stage} className="relative rounded-md border bg-surface-elevated p-3">
            <span className="text-xs font-bold text-brand">{String(index + 1).padStart(2, "0")}</span>
            <p className="mt-5 text-sm font-semibold">{stage}</p>
            {index < stages.length - 1 && <span aria-hidden="true" className="absolute -right-2 top-1/2 hidden h-px w-4 bg-brand sm:block" />}
          </li>
        ))}
      </ol>
      <p className="mt-5 text-sm text-muted">The useful system makes ownership, status, and the next handoff clear without asking someone to reconstruct it.</p>
    </div>
  );
}
