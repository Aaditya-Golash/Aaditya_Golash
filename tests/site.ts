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

export const projectPages = [
  'eye-tracking-research/',
  'calmora/',
  'social-media-growth/',
  'ancestry-searcher/',
  'legal-summarizer-extension/',
  'helpr/',
  'ta-allocation-system/',
  'venueworks/',
  'soccer-net/',
  'brain-connectivity/',
  'certifications/',
].map((path) => `posts/${path}`);
