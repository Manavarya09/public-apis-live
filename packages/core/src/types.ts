export type Status = "up" | "down" | "unknown";
export type Auth = "none" | "apiKey" | "OAuth" | "token" | "unknown";

export interface RawEntry {
  name: string;
  description: string;
  category: string;
  url: string;
  auth?: Auth;
  https?: boolean;
  cors?: "yes" | "no" | "unknown";
  license?: string;
  sourceRepo: string;
}

export interface ApiEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  docsUrl?: string;
  auth: Auth;
  https: boolean;
  cors: "yes" | "no" | "unknown";
  sourceRepos: string[];
  license?: string; // e.g. "MIT", "apache-2.0" — present mainly for APIs.guru entries
  status: Status;
  httpCode?: number;
  responseMs?: number;
  lastChecked?: string;
  uptimePct?: number; // % of "up" checks over the tracked window
  checks?: number; // number of daily checks recorded
  returnsData?: boolean; // no-auth GET returned a real (non-HTML) body
}
