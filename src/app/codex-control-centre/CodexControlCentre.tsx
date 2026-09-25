"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./control-centre.module.css";

type Project = {
  repo: string;
  name: string;
  branch: string;
  repoUrl: string;
  pushedAt: string;
  progress: {
    title?: string;
    status?: string;
    phase?: string;
    progress?: number;
    startedAt?: string;
    updatedAt?: string;
    estimatedMinutesRemaining?: number;
    confidence?: string;
    currentAction?: string;
    blockers?: string[];
    tests?: { passing?: number; failing?: number; running?: boolean };
  } | null;
  latestCommit: { sha: string; message: string; at?: string; url: string } | null;
  checks: { total: number; failing: number; running: number };
  idleMinutes: number;
  activeTask: boolean;
};

const STORAGE_KEY = "codex-control-projects-v1";

const seedProjects = [
  { repo: "strider308/nexus-website", branch: "feature/codex-task-monitor" },
];

function humanMinutes(value?: number) {
  if (value == null || !Number.isFinite(value)) return "Unknown";
  if (value < 60) return `~${Math.max(1, Math.round(value))}m`;
  const h = Math.floor(value / 60);
  const m = Math.round(value % 60);
  return m ? `~${h}h ${m}m` : `~${h}h`;
}

function ago(minutes: number) {
  if (minutes < 1) return "now";
  if (minutes < 60) return `${minutes}m ago`;
  const h = Math.floor(minutes / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function health(project: Project) {
  const blockers = project.progress?.blockers?.length ?? 0;
  if (blockers > 0 || project.checks.failing > 0) return { label: "Needs attention", tone: "danger" };
  if (project.activeTask && project.idleMinutes > 60) return { label: "Possibly stalled", tone: "warn" };
  if (project.activeTask) return { label: "Active", tone: "good" };
  return { label: "Observed", tone: "neutral" };
}

export default function CodexControlCentre() {
  const [owner, setOwner] = useState("strider308");
  const [sources, setSources] = useState(seedProjects);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastSync, setLastSync] = useState<Date | null>(null);
  const [repoInput, setRepoInput] = useState("");
  const [branchInput, setBranchInput] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSources(JSON.parse(raw));
    } catch {}
  }, []);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const q = new URLSearchParams({ owner });
      sources.forEach((s) => q.append("project", `${s.repo}@${s.branch}`));
      const res = await fetch(`/api/codex-control?${q.toString()}`, { cache: "no-store" });
      if (!res.ok) throw new Error(`Sync failed (${res.status})`);
      const data = await res.json();
      setProjects(data.projects ?? []);
      setLastSync(new Date());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not sync projects.");
    } finally {
      setLoading(false);
    }
  }, [owner, sources]);

  useEffect(() => {
    refresh();
    const id = window.setInterval(refresh, 30000);
    return () => window.clearInterval(id);
  }, [refresh]);

  const active = projects.filter((p) => p.activeTask);
  const blocked = projects.filter((p) => (p.progress?.blockers?.length ?? 0) > 0 || p.checks.failing > 0);
  const stalled = projects.filter((p) => p.activeTask && p.idleMinutes > 60);
  const avgProgress = active.length
    ? Math.round(active.reduce((sum, p) => sum + (p.progress?.progress ?? 0), 0) / active.length)
    : 0;

  const sorted = useMemo(() => {
    return [...projects].sort((a, b) => {
      const ah = health(a).tone;
      const bh = health(b).tone;
      const rank: Record<string, number> = { danger: 0, warn: 1, good: 2, neutral: 3 };
      if (rank[ah] !== rank[bh]) return rank[ah] - rank[bh];
      return (b.progress?.progress ?? 0) - (a.progress?.progress ?? 0);
    });
  }, [projects]);

  function addSource() {
    const repo = repoInput.trim();
    const branch = branchInput.trim() || "main";
    if (!repo.includes("/")) return;
    const next = [...sources.filter((s) => s.repo !== repo), { repo, branch }];
    setSources(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setRepoInput("");
    setBranchInput("");
  }

  function removeSource(repo: string) {
    const next = sources.filter((s) => s.repo !== repo);
    setSources(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  return (
    <main className={styles.shell}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Codex control centre</p>
          <h1>All active development, one screen.</h1>
          <p className={styles.sub}>
            Watches your repositories for Codex progress files, commits and checks. Active work is prioritised automatically.
          </p>
        </div>
        <div className={styles.sync}>
          <span>{lastSync ? `Synced ${lastSync.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : "Not synced"}</span>
          <button onClick={refresh}>{loading ? "Syncing…" : "Refresh"}</button>
        </div>
      </header>

      {error && <div className={styles.error}>{error}</div>}

      <section className={styles.summary}>
        <div><span>Active tasks</span><strong>{active.length}</strong></div>
        <div><span>Needs attention</span><strong>{blocked.length}</strong></div>
        <div><span>Possibly stalled</span><strong>{stalled.length}</strong></div>
        <div><span>Avg. active progress</span><strong>{avgProgress}%</strong></div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.label}>Projects</p>
            <h2>Current Codex work</h2>
          </div>
          <span className={styles.small}>Auto-refresh: 30s</span>
        </div>

        <div className={styles.cards}>
          {sorted.map((project) => {
            const state = health(project);
            const pct = Math.max(0, Math.min(100, project.progress?.progress ?? 0));
            return (
              <article className={styles.card} key={project.repo + project.branch}>
                <div className={styles.cardTop}>
                  <div>
                    <a className={styles.repo} href={project.repoUrl} target="_blank" rel="noreferrer">{project.repo}</a>
                    <h3>{project.progress?.title ?? project.name}</h3>
                  </div>
                  <span className={styles.health} data-tone={state.tone}>{state.label}</span>
                </div>

                <div className={styles.progressMeta}>
                  <strong>{project.progress ? `${Math.round(pct)}%` : "No task file"}</strong>
                  <span>{project.progress?.phase ?? "repository activity only"}</span>
                </div>
                <div className={styles.track}><div style={{ width: `${pct}%` }} /></div>

                <p className={styles.action}>
                  {project.progress?.currentAction ?? project.latestCommit?.message ?? "No current Codex activity reported."}
                </p>

                <div className={styles.metrics}>
                  <div><span>ETA</span><strong>{humanMinutes(project.progress?.estimatedMinutesRemaining)}</strong></div>
                  <div><span>Confidence</span><strong>{project.progress?.confidence ?? "Low"}</strong></div>
                  <div><span>Last signal</span><strong>{ago(project.idleMinutes)}</strong></div>
                  <div><span>Checks</span><strong>{project.checks.failing ? `${project.checks.failing} failing` : project.checks.running ? `${project.checks.running} running` : "Clear"}</strong></div>
                </div>

                {(project.progress?.blockers?.length ?? 0) > 0 && (
                  <div className={styles.blockers}>
                    {project.progress!.blockers!.map((b) => <div key={b}>{b}</div>)}
                  </div>
                )}

                <footer className={styles.cardFooter}>
                  <span>{project.branch}</span>
                  <div>
                    <a href={`/codex-monitor?repo=${encodeURIComponent(project.repo)}&branch=${encodeURIComponent(project.branch)}`}>Open detail</a>
                    {sources.some((s) => s.repo === project.repo) && (
                      <button onClick={() => removeSource(project.repo)}>Remove pin</button>
                    )}
                  </div>
                </footer>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.addPanel}>
        <div>
          <p className={styles.label}>Pin a project</p>
          <h2>Add a repository or non-default branch</h2>
          <p className={styles.sub}>Recent public repositories are discovered automatically. Pin feature branches here when the task is not on the default branch.</p>
        </div>
        <div className={styles.addForm}>
          <input placeholder="owner/repository" value={repoInput} onChange={(e) => setRepoInput(e.target.value)} />
          <input placeholder="branch (default: main)" value={branchInput} onChange={(e) => setBranchInput(e.target.value)} />
          <button onClick={addSource}>Add project</button>
        </div>
      </section>

      <section className={styles.ownerPanel}>
        <label>
          GitHub owner
          <input value={owner} onChange={(e) => setOwner(e.target.value)} />
        </label>
        <p>For private repositories and higher API limits, set <code>GITHUB_TOKEN</code> in Vercel project environment variables.</p>
      </section>
    </main>
  );
}
