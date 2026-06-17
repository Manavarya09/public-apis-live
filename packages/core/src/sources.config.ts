export interface Source { repo: string; rawUrl: string; adapter: "markdownTable"; }

export const sources: Source[] = [
  { repo: "public-apis/public-apis", rawUrl: "https://raw.githubusercontent.com/public-apis/public-apis/master/README.md", adapter: "markdownTable" },
  { repo: "public-api-lists/public-api-lists", rawUrl: "https://raw.githubusercontent.com/public-api-lists/public-api-lists/master/README.md", adapter: "markdownTable" },
  { repo: "marcelscruz/dev-resources", rawUrl: "https://raw.githubusercontent.com/marcelscruz/dev-resources/main/README.md", adapter: "markdownTable" },
  { repo: "n0shake/Public-APIs", rawUrl: "https://raw.githubusercontent.com/n0shake/Public-APIs/master/README.md", adapter: "markdownTable" },
];
