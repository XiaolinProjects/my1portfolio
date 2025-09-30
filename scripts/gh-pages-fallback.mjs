// Create a 404.html for SPA fallback on GitHub Pages by duplicating index.html
// Usage: node scripts/gh-pages-fallback.mjs [outDir]
import { promises as fs } from "fs";
import path from "path";

async function main() {
  const outDir = process.argv[2] || process.env.OUT_DIR || "dist/spa";
  const indexPath = path.join(outDir, "index.html");
  const fallbackPath = path.join(outDir, "404.html");

  try {
    const html = await fs.readFile(indexPath, "utf8");
    await fs.writeFile(fallbackPath, html, "utf8");
    console.log(`[gh-pages] 404.html created at ${fallbackPath}`);
  } catch (err) {
    console.error("[gh-pages] Failed to create 404.html:", err);
    process.exit(1);
  }
}

main();
