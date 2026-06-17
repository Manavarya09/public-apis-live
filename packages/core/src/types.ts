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
  status: Status;
  httpCode?: number;
  responseMs?: number;
  lastChecked?: string;
}
