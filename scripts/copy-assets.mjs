// Copies the repo's /assets folder into /public/assets before dev/build,
// so images keep their original paths (/assets/img/...) without duplicating them in git.
import { cpSync, existsSync } from 'node:fs';
if (existsSync('assets')) cpSync('assets', 'public/assets', { recursive: true });
