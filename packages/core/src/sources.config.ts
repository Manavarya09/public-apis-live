export interface Source { repo: string; rawUrl: string; adapter: "markdownTable" | "apisGuru"; }

export const sources: Source[] = [
  { repo: "public-apis/public-apis", rawUrl: "https://raw.githubusercontent.com/public-apis/public-apis/master/README.md", adapter: "markdownTable" },
  { repo: "public-api-lists/public-api-lists", rawUrl: "https://raw.githubusercontent.com/public-api-lists/public-api-lists/master/README.md", adapter: "markdownTable" },
  { repo: "n0shake/Public-APIs", rawUrl: "https://raw.githubusercontent.com/n0shake/Public-APIs/master/README.md", adapter: "markdownTable" },
  { repo: "APIs.guru", rawUrl: "https://api.apis.guru/v2/list.json", adapter: "apisGuru" },
];
