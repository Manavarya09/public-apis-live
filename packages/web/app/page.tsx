"use client";

import { useEffect, useMemo, useState } from "react";
import { filterApis, type WebApiEntry } from "../lib/filter";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const emoji: Record<WebApiEntry["status"], string> = { up: "✅", down: "❌", unknown: "❔" };
const statusRank: Record<WebApiEntry["status"], number> = { up: 0, unknown: 1, down: 2 };

export default function Page() {
  const [apis, setApis] = useState<WebApiEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [auth, setAuth] = useState("");
  const [status, setStatus] = useState("");
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/Manavarya09/public-apis-live")
      .then((r) => r.json())
      .then((d) => typeof d.stargazers_count === "number" && setStars(d.stargazers_count))
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch(`${BASE}/apis.json`)
      .then((r) => r.json())
      .then((d: WebApiEntry[]) => setApis(d))
      .catch(() => setApis([]))
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(
    () => [...new Set(apis.map((a) => a.category))].sort(),
    [apis],
  );
  const auths = useMemo(() => [...new Set(apis.map((a) => a.auth))].sort(), [apis]);
  const reachable = useMemo(() => apis.filter((a) => a.status === "up").length, [apis]);
  const verified = useMemo(() => {
    const dates = apis
      .map((a) => (a as WebApiEntry & { lastChecked?: string }).lastChecked)
      .filter(Boolean) as string[];
    return dates.length ? dates.sort().at(-1)!.slice(0, 10) : "";
  }, [apis]);

  const results = useMemo(() => {
    const r = filterApis(apis, { search, category, auth, status });
    // Keep fuzzy relevance order while searching; otherwise show working APIs first.
    if (search.trim()) return r;
    return [...r].sort(
      (a, b) => statusRank[a.status] - statusRank[b.status] || a.name.localeCompare(b.name),
    );
  }, [apis, search, category, auth, status]);

  return (
    <div className="wrap">
      <div className="topbar">
        <h1>public-apis-live</h1>
        <div className="actions">
        <a
          className="gh-btn"
          href="https://github.com/Manavarya09/public-apis-live"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          <span>Star</span>
          {stars !== null && <span className="gh-count">{stars.toLocaleString()}</span>}
        </a>
        <a
          className="npm-btn"
          href="https://www.npmjs.com/package/public-apis-live"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="npm-mark">npm</span>
          <code>npm i public-apis-live</code>
        </a>
        </div>
      </div>
      <p className="stat">
        {loading
          ? "Loading…"
          : `${apis.length.toLocaleString()} public APIs · ${reachable.toLocaleString()} reachable${
              verified ? ` · verified ${verified}` : ""
            }`}
      </p>
      <p className="note">
        The only public-API list where every entry is auto-checked for reachability and refreshed
        daily. ✅ = the server responded (incl. auth/rate-limit codes), ❌ = DNS/connection failure,
        5xx, or 404, ❔ = timeout. We do <strong>not</strong> functionally test endpoints.
      </p>

      <p className="cli-hint">
        Try it in your terminal: <code>npx public-apis-live weather</code>
      </p>

      <div className="controls">
        <input
          placeholder="Search by name or description…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select value={auth} onChange={(e) => setAuth(e.target.value)}>
          <option value="">Any auth</option>
          {auths.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Any status</option>
          <option value="up">✅ reachable</option>
          <option value="down">❌ down</option>
          <option value="unknown">❔ unknown</option>
        </select>
      </div>

      <p className="count">{results.length.toLocaleString()} shown</p>

      <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>API</th>
            <th>Description</th>
            <th>Category</th>
            <th>Auth</th>
            <th>HTTPS</th>
            <th>Status</th>
            <th>Uptime</th>
            <th>License</th>
          </tr>
        </thead>
        <tbody>
          {results.map((a) => (
            <tr key={a.id}>
              <td>
                <a href={a.url} target="_blank" rel="noopener noreferrer">
                  {a.name}
                </a>
              </td>
              <td className="desc">{a.description}</td>
              <td>{a.category}</td>
              <td>{a.auth}</td>
              <td>{a.https ? "Yes" : "No"}</td>
              <td>{emoji[a.status]}</td>
              <td>{a.uptimePct !== undefined ? `${a.uptimePct}%` : "—"}</td>
              <td>{a.license ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <footer>
        Data aggregated from public API lists, deduped and reachability-checked daily ·{" "}
        <a href="https://github.com/Manavarya09/public-apis-live">source on GitHub</a>
      </footer>
    </div>
  );
}
