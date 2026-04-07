import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

export function loadPostMarkdown(filename) {
  const filePath = path.join(CONTENT_DIR, filename);
  return fs.readFileSync(filePath, "utf8");
}
