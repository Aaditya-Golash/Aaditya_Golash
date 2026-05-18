import fs from 'node:fs';
import path from 'node:path';

export const siteRoot = process.env.SITE_BASE_PATH ?? '/Aaditya_Golash/';
export const origin = process.env.SITE_ORIGIN ?? 'http://127.0.0.1:1313';

export const sitePath = (path = '') => {
  const cleanRoot = siteRoot.endsWith('/') ? siteRoot : `${siteRoot}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanRoot}${cleanPath}`;
};

export const siteUrl = (path = '') => new URL(sitePath(path), origin).toString();

export const primaryPages = [
  { name: 'Home', path: '' },
  { name: 'Projects', path: 'systems/' },
  { name: 'All Work', path: 'posts/' },
  { name: 'About', path: 'about/' },
  { name: 'Contact', path: 'contact/' },
];

const repoRoot = path.resolve(__dirname, '..');
const postsDir = path.join(repoRoot, 'content', 'posts');

export const projectPages = fs
  .readdirSync(postsDir)
  .filter((file) => file.endsWith('.md') && file !== '_index.md')
  .sort()
  .map((file) => `posts/${file.replace(/\.md$/, '/')}`);
