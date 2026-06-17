"use client";

import { useEffect, useMemo, useState } from "react";
import { filterApis, type WebApiEntry } from "../lib/filter";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const emoji: Record<WebApiEntry["status"], string> = { up: "✅", down: "❌", unknown: "❔" };

export default function Page() {
  const [apis, setApis] = useState<WebApiEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [auth, setAuth] = useState("");
  const [status, setStatus] = useState("");

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

  const results = useMemo(
    () => filterApis(apis, { search, category, auth, status }),
    [apis, search, category, auth, status],
  );

  return (
    <div className="wrap">
      <h1>public-apis-live</h1>
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

      <table>
        <thead>
          <tr>
            <th>API</th>
            <th>Description</th>
            <th>Category</th>
            <th>Auth</th>
            <th>HTTPS</th>
            <th>Status</th>
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
            </tr>
          ))}
        </tbody>
      </table>

      <footer>
        Data aggregated from public API lists, deduped and reachability-checked daily ·{" "}
        <a href="https://github.com/Manavarya09/public-apis-live">source on GitHub</a>
      </footer>
    </div>
  );
}
