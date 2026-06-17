import type { RawEntry } from "../types.js";

interface GuruVersion {
  info?: {
    title?: string;
    description?: string;
    "x-providerName"?: string;
    "x-apisguru-categories"?: string[];
  };
  externalDocs?: { url?: string };
}
interface GuruApi {
  preferred?: string;
  versions?: Record<string, GuruVersion>;
}

const titleCase = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const oneLine = (s: string) => s.replace(/\s+/g, " ").trim().slice(0, 160);

// Parses the APIs.guru directory (https://api.apis.guru/v2/list.json) into RawEntry[].
export function parseApisGuru(content: string, sourceRepo: string): RawEntry[] {
  const data = JSON.parse(content) as Record<string, GuruApi>;
  const out: RawEntry[] = [];
  for (const [key, api] of Object.entries(data)) {
    const versions = api.versions ?? {};
    const v = versions[api.preferred ?? ""] ?? Object.values(versions)[0];
    const info = v?.info;
    if (!info?.title) continue;
    const provider = info["x-providerName"] ?? key.split(":")[0];
    const cat = info["x-apisguru-categories"]?.[0];
    out.push({
      name: oneLine(info.title),
      url: `https://${provider}`,
      description: oneLine(info.description ?? ""),
      category: cat ? titleCase(cat) : "Enterprise",
      auth: "unknown",
      https: true,
      cors: "unknown",
      sourceRepo,
    });
  }
  return out;
}
