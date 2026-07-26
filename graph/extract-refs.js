#!/usr/bin/env node
// extract-refs — turn the PDFs registered in papers.json into plain text under
// profiles/<profile>/refs/ (gitignored), so the extraction tooling has
// something to read without committing a second copy of the source.
// Requires poppler-utils (`pdftotext`).
import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, '..');
const profile = process.env.PROFILE || 'neuro';
const profileDir = join(HERE, 'profiles', profile);
const papersPath = join(profileDir, 'catalogs', 'papers.json');

if (!existsSync(papersPath)) {
  console.error(`no papers.json for profile '${profile}'`);
  process.exit(1);
}

let n = 0;
for (const p of JSON.parse(readFileSync(papersPath, 'utf8'))) {
  if (!p.pdf || !p.file) continue;
  const src = join(REPO, 'content', p.pdf);
  const dest = join(profileDir, p.file);
  if (!existsSync(src)) {
    console.error(`  missing pdf for ${p.id}: content/${p.pdf}`);
    continue;
  }
  mkdirSync(dirname(dest), { recursive: true });
  execFileSync('pdftotext', ['-layout', src, dest]);
  console.log(`  ${p.id} -> ${p.file}`);
  n++;
}
console.log(`[refs] extracted ${n} source text file(s)`);
