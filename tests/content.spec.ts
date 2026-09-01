import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(__dirname, '..');
const maxResumeAgeDays = Number.parseInt(process.env.CONTENT_MAX_AGE_DAYS ?? '240', 10);

const read = (relativePath: string) => fs.readFileSync(path.join(repoRoot, relativePath), 'utf8');
const exists = (relativePath: string) => fs.existsSync(path.join(repoRoot, relativePath));

test.describe('Content freshness and portfolio hygiene', () => {
  test('dependency and resume artifacts are present and reasonably fresh', () => {
    expect(exists('package-lock.json')).toBe(true);
    expect(exists('static/resume.pdf')).toBe(true);

    const resumeStat = fs.statSync(path.join(repoRoot, 'static/resume.pdf'));
    const ageDays = (Date.now() - resumeStat.mtimeMs) / (1000 * 60 * 60 * 24);
    expect(ageDays).toBeLessThanOrEqual(maxResumeAgeDays);
  });

  test('project markdown keeps required recruiter-facing front matter', () => {
    const postsDir = path.join(repoRoot, 'content', 'posts');
    const postFiles = fs
      .readdirSync(postsDir)
      .filter((file) => file.endsWith('.md') && file !== '_index.md');

    expect(postFiles.length).toBeGreaterThanOrEqual(10);

    for (const file of postFiles) {
      const content = read(path.join('content', 'posts', file));
      expect.soft(content, `${file} title`).toMatch(/^title:\s*".+"/m);
      expect.soft(content, `${file} description`).toMatch(/^description:\s*".+"/m);
      expect.soft(content, `${file} system_group`).toMatch(/^system_group:\s*"(academic|organizational|data|growth)"/m);
      expect.soft(content, `${file} role_alignment`).toMatch(/^role_alignment:\s*\[/m);
      expect.soft(content, `${file} ascii_cover`).toMatch(/^ascii_cover:\s*\|-/m);
      expect.soft(content, `${file} impact section`).toContain('## Impact');
      expect.soft(content, `${file} tech stack section`).toContain('## Tech Stack');
    }
  });


  test('private profile view page is unlinked and noindexed', () => {
    const profile = read('content/profile-view.md');
    const head = read('layouts/partials/extend_head.html');
    const home = read('layouts/index.html');
    const config = read('hugo.toml');

    expect(profile).toContain('layout: "profile-view"');
    expect(profile).toContain('private: true');
    expect(head).toContain('noindex,nofollow,noarchive');
    expect(home).not.toContain('profile-view/');
    expect(config).not.toContain('profile-view/');
  });

  test('homepage copy keeps the strongest proof points visible', () => {
    const home = read('layouts/index.html');

    expect(home).toContain('Built and deployed DealerSignal');
    expect(home).toContain('Reduced TA allocation admin time by 70%');
    expect(home).toContain('Grew digital brands to 4M+ organic views');
    expect(home).toContain('Phi Delta Theta Philanthropy');
    expect(home).toContain('Role Fit Snapshot');
    expect(home).toContain('Valid Canadian work permit');
    expect(home).toContain('Open to relocation');
  });
});
