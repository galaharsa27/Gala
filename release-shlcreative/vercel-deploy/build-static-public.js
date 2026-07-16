const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const out = path.join(root, 'dist');

const allowedExtensions = new Set([
  '.html',
  '.css',
  '.js',
  '.mjs',
  '.jpg',
  '.jpeg',
  '.png',
  '.svg',
  '.ico',
  '.webmanifest',
  '.xml',
  '.txt',
  '.webp',
  '.avif',
  '.mp4',
  '.webm',
  '.woff',
  '.woff2',
]);

const blockedDirs = new Set([
  '.git',
  '.vercel',
  '_source',
  'source',
  'src',
  'node_modules',
  'dist',
  'backup',
  'backups',
  'archive',
  'archives',
  'old',
  'tmp',
  'temp',
  'test',
  'tests',
  'dev',
  'staging',
]);

const blockedFiles = new Set([
  '.env',
  '.env.local',
  '.gitignore',
  '.htaccess',
  'README.md',
  'package.json',
  'package-lock.json',
  'pnpm-lock.yaml',
  'yarn.lock',
  'vercel.json',
  'build-static-public.js',
]);

function isBlockedFile(name) {
  const lower = name.toLowerCase();

  return (
    blockedFiles.has(name) ||
    lower.endsWith('.dc.html') ||
    lower.endsWith('.md') ||
    lower.endsWith('.zip') ||
    lower.endsWith('.tar') ||
    lower.endsWith('.gz') ||
    lower.endsWith('.sql') ||
    lower.endsWith('.log') ||
    lower.endsWith('.bak') ||
    lower.endsWith('.map')
  );
}

function copyPublicFiles(from, to) {
  fs.mkdirSync(to, { recursive: true });

  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || blockedDirs.has(entry.name)) {
      continue;
    }

    const source = path.join(from, entry.name);
    const target = path.join(to, entry.name);

    if (entry.isDirectory()) {
      copyPublicFiles(source, target);
      continue;
    }

    if (!entry.isFile() || isBlockedFile(entry.name)) {
      continue;
    }

    if (allowedExtensions.has(path.extname(entry.name).toLowerCase())) {
      fs.copyFileSync(source, target);
    }
  }
}

fs.rmSync(out, { recursive: true, force: true });
copyPublicFiles(root, out);
console.log(`Static public output created at ${out}`);
