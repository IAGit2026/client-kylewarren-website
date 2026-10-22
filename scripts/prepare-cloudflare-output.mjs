import fs from "node:fs";
import path from "node:path";

const rootDirectory = process.cwd();
const nextExportDirectory = path.join(rootDirectory, "out");
const cloudflareOutputDirectory = path.join(rootDirectory, "dist");

if (!fs.existsSync(path.join(nextExportDirectory, "index.html"))) {
  throw new Error("The Next.js static export is missing out/index.html.");
}

fs.rmSync(cloudflareOutputDirectory, { recursive: true, force: true });
fs.renameSync(nextExportDirectory, cloudflareOutputDirectory);
