import { spawnSync } from 'node:child_process';

const previous = process.env.VERCEL_GIT_PREVIOUS_SHA;
const current = process.env.VERCEL_GIT_COMMIT_SHA;

if (!previous || !current) {
  process.exit(1);
}

const watched = [
  'app',
  'components',
  'data',
  'public',
  'middleware.ts',
  'next.config.js',
  'package.json',
  'package-lock.json',
  'postcss.config.js',
  'tailwind.config.ts',
  'tsconfig.json',
  'vercel.json',
];

const result = spawnSync('git', ['diff', '--quiet', previous, current, '--', ...watched], {
  stdio: 'inherit',
});

process.exit(result.status ?? 1);
