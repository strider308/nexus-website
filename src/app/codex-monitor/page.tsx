import CodexMonitor from "./CodexMonitor";

export const metadata = {
  title: "Codex Task Monitor | Nexus",
  description: "Live development progress, ETA, blockers, commits and checks for Codex tasks.",
};

export default function CodexMonitorPage() {
  return <CodexMonitor />;
}
