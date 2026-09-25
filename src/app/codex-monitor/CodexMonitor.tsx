"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./monitor.module.css";

type Progress = {
  taskId?: string;
  title?: string;
  status?: string;
  phase?: string;
  progress?: number;
  startedAt?: string;
  updatedAt?: string;
  estimatedMinutesRemaining?: number;
  confidence?: "high" | "medium" | "low";
  currentAction?: string;
  blockers?: string[];
  tests?: { passing?: number; failing?: number; running?: boolean };
  notes?: Array<{ at?: string; text: string }>;
};

type Commit = {
  sha: string;
  html_url: string;
  commit: { message: string; author?: { date?: string; name?: string } };
};

type Run = {
  id: number;
  name: string;
  status: string;
  conclusion: string | null;
  html_url: string;
  created_at: string;
  updated_at: string;
};

const phases = [
  ["scoping", "Scoping"],
  ["planning", "Planning"],
  ["implementation", "Core implementation"],
  ["testing", "Testing & refinement"],
  ["review", "Review / fixes"],
  ["complete", "Ready / complete"],
] as const;

const api = "https://api.github.com";

function minutesToHuman(value?: number) {
  if (value == null || !Number.isFinite(value)) return "Unknown";
  if (value < 60) return `~${Math.max(1, Math.round(value))}m`;
  const h = Math.floor(value / 60);
  const m = Math.round(value % 60);
  return m ? `~${h}h ${m}m` : `~${h}h`;
}

function relativeTime(iso?: string) {
  if (!iso) return "—";
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.max(0, Math.floor(diff / 60000));
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const h = Math.floor(mins / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function elapsedMinutes(start?: string) {
  if (!start) return undefined;
  return Math.max(0, (Date.now() - new Date(start).getTime()) / 60000);
}

function estimateRemaining(progress?: Progress, elapsed?: number) {
  if (progress?.estimatedMinutesRemaining != null) return progress.estimatedMinutesRemaining;
  const pct = progress?.progress;
  if (!pct || pct <= 0 || pct >= 100 || elapsed == null) return undefined;
  return Math.max(3, elapsed * ((100 - pct) / pct));
}

export default function CodexMonitor() {
  const [repo, setRepo] = useState("strider308/nexus-website");
  const [branch, setBranch] = useState("feature/codex-task-monitor");
  const [progress, setProgress] = useState<Progress | null>(null);
  const [commits, setCommits] = useState<Commit[]>([]);
  const [runs, setRuns] = useState<Run[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const [commitsRes, runsRes, progressRes] = await Promise.all([
        fetch(`${api}/repos/${repo}/commits?sha=${encodeURIComponent(branch)}&per_page=20`, { cache: "no-store" }),
        fetch(`${api}/repos/${repo}/actions/runs?branch=${encodeURIComponent(branch)}&per_page=10`, { cache: "no-store" }),
        fetch(`https://raw.githubusercontent.com/${repo}/${branch}/.codex-progress.json?t=${Date.now()}`, { cache: "no-store" }),
      ]);

      if (!commitsRes.ok) throw new Error(`GitHub commits: ${commitsRes.status}`);
      const commitData = await commitsRes.json();
      const runData = runsRes.ok ? await runsRes.json() : { workflow_runs: [] };

      setCommits(Array.isArray(commitData) ? commitData : []);
      setRuns(Array.isArray(runData.workflow_runs) ? runData.workflow_runs : []);

      if (progressRes.ok) {
        setProgress(await progressRes.json());
      } else {
        setProgress(null);
      }
      setLastRefresh(new Date());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unable to load task signals.");
    } finally {
      setLoading(false);
    }
  }, [repo, branch]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selectedRepo = params.get("repo");
    const selectedBranch = params.get("branch");
    if (selectedRepo) setRepo(selectedRepo);
    if (selectedBranch) setBranch(selectedBranch);
  }, []);

  useEffect(() => {
    refresh();
    const id = window.setInterval(refresh, 30000);
    return () => window.clearInterval(id);
  }, [refresh]);

  const elapsed = elapsedMinutes(progress?.startedAt);
  const remaining = estimateRemaining(progress ?? undefined, elapsed);
  const pct = Math.min(100, Math.max(0, progress?.progress ?? (commits.length ? 25 : 0)));
  const currentPhaseIndex = Math.max(0, phases.findIndex(([key]) => key === progress?.phase));
  const latestCommit = commits[0];
  const latestRun = runs[0];
  const failing = runs.filter((r) => r.conclusion === "failure").length + (progress?.tests?.failing ?? 0);
  const confidence = progress?.confidence ?? (progress ? "medium" : "low");
  const status = progress?.status ?? (loading ? "syncing" : "observed from GitHub");
  const sourceLabel = progress ? "Codex + GitHub" : "GitHub fallback";

  const activity = useMemo(() => {
    const items = [
      ...commits.slice(0, 7).map((c) => ({
        at: c.commit.author?.date ?? "",
        text: c.commit.message.split("\n")[0],
        href: c.html_url,
        type: "commit",
      })),
      ...runs.slice(0, 5).map((r) => ({
        at: r.updated_at || r.created_at,
        text: `${r.name}: ${r.conclusion ?? r.status}`,
        href: r.html_url,
        type: "check",
      })),
      ...(progress?.notes ?? []).map((n) => ({
        at: n.at ?? progress.updatedAt ?? "",
        text: n.text,
        href: "",
        type: "agent",
      })),
    ];
    return items.sort((a, b) => new Date(b.at).getTime() - new Date(a.at).getTime()).slice(0, 12);
  }, [commits, runs, progress]);

  return (
    <main className={styles.shell}>
      <section className={styles.topbar}>
        <div>
          <p className={styles.eyebrow}>Codex task monitor</p>
          <h1>{progress?.title ?? "Development progress"}</h1>
          <p className={styles.sub}>
            Live task phase, ETA, blockers and repository activity. Refreshes every 30 seconds.
          </p>
        </div>
        <div className={styles.controls}>
          <input aria-label="GitHub repository" value={repo} onChange={(e) => setRepo(e.target.value)} />
          <input aria-label="Git branch" value={branch} onChange={(e) => setBranch(e.target.value)} />
          <button onClick={refresh} disabled={loading}>{loading ? "Syncing…" : "Refresh"}</button>
        </div>
      </section>

      {error && <div className={styles.error}>Could not sync: {error}</div>}

      <section className={styles.grid}>
        <div className={styles.primary}>
          <article className={styles.card}>
            <div className={styles.row}>
              <div>
                <span className={styles.label}>Overall completion</span>
                <div className={styles.percent}>{Math.round(pct)}%</div>
              </div>
              <span className={styles.badge}>{status}</span>
            </div>
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} style={{ width: `${pct}%` }} />
            </div>
            <p className={styles.currentAction}>
              {progress?.currentAction ?? "No direct Codex progress file yet. Showing repository activity instead."}
            </p>
            <div className={styles.kpis}>
              <div><span>Elapsed</span><strong>{minutesToHuman(elapsed)}</strong></div>
              <div><span>Remaining</span><strong>{minutesToHuman(remaining)}</strong></div>
              <div><span>Confidence</span><strong>{confidence}</strong></div>
              <div><span>Signals</span><strong>{sourceLabel}</strong></div>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.sectionHead}>
              <div>
                <span className={styles.label}>Development path</span>
                <h2>Where we have reached</h2>
              </div>
              <span className={styles.badge}>Phase {currentPhaseIndex + 1} / {phases.length}</span>
            </div>
            <div className={styles.phaseList}>
              {phases.map(([key, name], index) => {
                const state = index < currentPhaseIndex ? "done" : index === currentPhaseIndex ? "current" : "pending";
                return (
                  <div key={key} className={styles.phase}>
                    <span className={styles.dot} data-state={state} />
                    <div>
                      <div className={styles.phaseTitle}>{name}</div>
                      <div className={styles.phaseMeta}>
                        {state === "done" ? "Completed" : state === "current" ? "Current phase" : "Pending"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className={styles.card}>
            <span className={styles.label}>Recent activity</span>
            <div className={styles.activity}>
              {activity.length === 0 && <p className={styles.muted}>No activity found yet.</p>}
              {activity.map((item, index) => (
                <div className={styles.activityRow} key={`${item.at}-${index}`}>
                  <span>{relativeTime(item.at)}</span>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">{item.text}</a>
                  ) : (
                    <p>{item.text}</p>
                  )}
                  <small>{item.type}</small>
                </div>
              ))}
            </div>
          </article>
        </div>

        <aside className={styles.secondary}>
          <article className={styles.card}>
            <span className={styles.label}>Task health</span>
            <div className={styles.healthGrid}>
              <div><span>Latest commit</span><strong>{latestCommit ? relativeTime(latestCommit.commit.author?.date) : "—"}</strong></div>
              <div><span>Latest check</span><strong>{latestRun?.conclusion ?? latestRun?.status ?? "None"}</strong></div>
              <div><span>Failures</span><strong>{failing}</strong></div>
              <div><span>Last sync</span><strong>{lastRefresh ? lastRefresh.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "—"}</strong></div>
            </div>
          </article>

          <article className={styles.card}>
            <span className={styles.label}>Blockers</span>
            <h2>What can extend the ETA?</h2>
            {progress?.blockers?.length ? (
              <ul className={styles.blockers}>{progress.blockers.map((b) => <li key={b}>{b}</li>)}</ul>
            ) : (
              <p className={styles.muted}>No blockers reported by Codex.</p>
            )}
            {failing > 0 && <div className={styles.warning}>{failing} failing test/check signal{failing === 1 ? "" : "s"} detected.</div>}
          </article>

          <article className={styles.card}>
            <span className={styles.label}>How it is integrated</span>
            <h2>Two signal layers</h2>
            <p className={styles.muted}>
              GitHub supplies commits and checks automatically. Codex can improve the estimate by updating
              <code>.codex-progress.json</code> as it moves through phases.
            </p>
          </article>
        </aside>
      </section>
    </main>
  );
}
