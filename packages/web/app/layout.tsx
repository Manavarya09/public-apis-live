import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "public-apis-live — working public APIs, verified daily",
  description:
    "Search 2,000+ public APIs aggregated from the top lists, deduped and auto-checked for reachability. Refreshed daily.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
