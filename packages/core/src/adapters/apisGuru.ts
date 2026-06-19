import type { RawEntry } from "../types.js";

interface GuruVersion {
  info?: {
    title?: string;
    description?: string;
    "x-providerName"?: string;
    "x-apisguru-categories"?: string[];
    license?: { name?: string };
    contact?: { url?: string };
  };
  externalDocs?: { url?: string };
  swaggerUrl?: string;
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
    // Prefer the API's real docs page over the company homepage (the homepage always pings 200
    // and isn't the API, e.g. an "NYT Movie Reviews" entry pointing at nytimes.com).
    const docs = v?.externalDocs?.url ?? info.contact?.url;
    out.push({
      name: oneLine(info.title),
      url: docs ?? `https://${provider}`,
      description: oneLine(info.description ?? ""),
      category: cat ? titleCase(cat) : "Enterprise",
      auth: "unknown",
      https: true,
      cors: "unknown",
      license: info.license?.name,
      specUrl: v?.swaggerUrl,
      sourceRepo,
    });
  }
  return out;
}
