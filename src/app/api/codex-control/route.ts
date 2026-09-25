import { NextRequest, NextResponse } from "next/server";

type Repo = {
  full_name: string;
  name: string;
  default_branch: string;
  pushed_at: string;
  html_url: string;
  private: boolean;
};

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
};

const ghHeaders: HeadersInit = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};

async function gh<T>(url: string): Promise<T | null> {
  const res = await fetch(url, { headers: ghHeaders, cache: "no-store" });
  if (!res.ok) return null;
  return res.json() as Promise<T>;
}

async function progressFile(fullName: string, ref: string): Promise<string | null> {
  const data = await gh<{ content?: string; encoding?: string }>(
    `https://api.github.com/repos/${fullName}/contents/.codex-progress.json?ref=${encodeURIComponent(ref)}`
  );
  if (!data?.content) return null;
  try {
    return Buffer.from(data.content.replace(/\\n/g, ""), data.encoding === "base64" ? "base64" : "utf8").toString("utf8");
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const owner = req.nextUrl.searchParams.get("owner") || "strider308";
  const explicit = req.nextUrl.searchParams.getAll("project");
  const repoList = await gh<Repo[]>(
    `https://api.github.com/users/${encodeURIComponent(owner)}/repos?sort=pushed&per_page=30`
  );

  if (!repoList) {
    return NextResponse.json({ error: "Could not load GitHub repositories." }, { status: 502 });
  }

  const now = Date.now();
  const fourteenDays = 14 * 24 * 60 * 60 * 1000;

  const candidates = repoList.filter((r) => {
    const recent = now - new Date(r.pushed_at).getTime() <= fourteenDays;
    return recent || explicit.some((p) => p.startsWith(r.full_name + "@"));
  }).slice(0, 12);

  const configured = new Map<string, string>();
  for (const item of explicit) {
    const [fullName, branch] = item.split("@");
    if (fullName && branch) configured.set(fullName, branch);
  }

  const projects = await Promise.all(
    candidates.map(async (repo) => {
      const ref = configured.get(repo.full_name) || repo.default_branch;
      const [progressText, commits, runs] = await Promise.all([
        progressFile(repo.full_name, ref),
        gh<any[]>(`https://api.github.com/repos/${repo.full_name}/commits?sha=${encodeURIComponent(ref)}&per_page=1`),
        gh<any>(`https://api.github.com/repos/${repo.full_name}/actions/runs?branch=${encodeURIComponent(ref)}&per_page=5`),
      ]);

      let progress: Progress | null = null;
      if (progressText) {
        try { progress = JSON.parse(progressText) as Progress; } catch {}
      }

      const latestCommit = Array.isArray(commits) ? commits[0] : null;
      const workflowRuns = Array.isArray(runs?.workflow_runs) ? runs.workflow_runs : [];
      const failingChecks = workflowRuns.filter((r: any) => r.conclusion === "failure").length;

      const lastSignalAt =
        progress?.updatedAt ||
        latestCommit?.commit?.author?.date ||
        repo.pushed_at;

      const idleMinutes = Math.max(0, Math.round((Date.now() - new Date(lastSignalAt).getTime()) / 60000));
      const activeTask = Boolean(progress && (progress.progress ?? 0) < 100 && progress.phase !== "complete");

      return {
        repo: repo.full_name,
        name: repo.name,
        branch: ref,
        repoUrl: repo.html_url,
        pushedAt: repo.pushed_at,
        progress,
        latestCommit: latestCommit
          ? {
              sha: latestCommit.sha,
              message: latestCommit.commit?.message?.split("\n")[0] || "Commit",
              at: latestCommit.commit?.author?.date,
              url: latestCommit.html_url,
            }
          : null,
        checks: {
          total: workflowRuns.length,
          failing: failingChecks,
          running: workflowRuns.filter((r: any) => r.status !== "completed").length,
        },
        idleMinutes,
        activeTask,
      };
    })
  );

  projects.sort((a, b) => {
    if (a.activeTask !== b.activeTask) return a.activeTask ? -1 : 1;
    const aTime = new Date(a.progress?.updatedAt || a.pushedAt).getTime();
    const bTime = new Date(b.progress?.updatedAt || b.pushedAt).getTime();
    return bTime - aTime;
  });

  return NextResponse.json({
    owner,
    generatedAt: new Date().toISOString(),
    projects,
    note: process.env.GITHUB_TOKEN
      ? "Using authenticated GitHub API."
      : "Using public GitHub API. Add GITHUB_TOKEN on Vercel for higher rate limits/private repositories.",
  });
}
