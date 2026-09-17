const fs = require('fs');
const path = require('path');

const themeSelector = `'use client';

import { useEffect, useState } from 'react';

export const OTS_THEMES = [
  { id: 'light', label: 'Light' },
  { id: 'dark', label: 'Dark' },
  { id: 'classic', label: 'Classic' },
  { id: 'midnight', label: 'Midnight' },
  { id: 'forest', label: 'Forest' },
  { id: 'ocean', label: 'Ocean' },
  { id: 'sunset', label: 'Sunset' },
  { id: 'grayscale', label: 'Grayscale' },
  { id: 'neon', label: 'Neon' },
  { id: 'arcane', label: 'Arcane' },
];

export const OTS_THEME_STORAGE_KEY = 'ots_theme';
const DEFAULT_THEME = 'light';

export function applyTheme(themeId) {
  if (typeof document === 'undefined') return;
  const valid = OTS_THEMES.some((t) => t.id === themeId) ? themeId : DEFAULT_THEME;
  document.documentElement.setAttribute('data-theme', valid);
  document.documentElement.style.colorScheme = valid === 'light' || valid === 'classic' || valid === 'sunset' ? 'light' : 'dark';
  try {
    localStorage.setItem(OTS_THEME_STORAGE_KEY, valid);
  } catch (_) {
    /* ignore */
  }
}

export default function ThemeSelector() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    let saved = DEFAULT_THEME;
    try {
      saved = localStorage.getItem(OTS_THEME_STORAGE_KEY) || DEFAULT_THEME;
    } catch (_) {
      saved = DEFAULT_THEME;
    }
    if (!OTS_THEMES.some((t) => t.id === saved)) saved = DEFAULT_THEME;
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const handleChange = (event) => {
    const next = event.target.value;
    setTheme(next);
    applyTheme(next);
  };

  return (
    <div className="theme-selector">
      <label htmlFor="theme-selector" className="sr-only">
        Theme
      </label>
      <select
        id="theme-selector"
        value={theme}
        onChange={handleChange}
        className="theme-selector__select"
        aria-label="Site color theme"
      >
        {OTS_THEMES.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
`;

fs.writeFileSync(path.join('app', 'components', 'ThemeSelector.jsx'), themeSelector, 'utf8');

// Patch Header.jsx
let header = fs.readFileSync(path.join('app', 'components', 'Header.jsx'), 'utf8');
if (!header.includes('ThemeSelector')) {
  header = header.replace(
    "import LanguageSelector from '@/app/components/LanguageSelector';",
    "import LanguageSelector from '@/app/components/LanguageSelector';\\nimport ThemeSelector from '@/app/components/ThemeSelector';"
  );
  header = header.replace(
    '<LanguageSelector />',
    '<ThemeSelector />\\n                <LanguageSelector />'
  );
  fs.writeFileSync(path.join('app', 'components', 'Header.jsx'), header, 'utf8');
}

// Patch layout.jsx - add blocking theme script + data-theme default
let layout = fs.readFileSync(path.join('app', 'layout.jsx'), 'utf8');
if (!layout.includes('ots_theme')) {
  layout = layout.replace(
    '<html lang="en">',
    `<html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: \`(function(){try{var t=localStorage.getItem('ots_theme')||'light';var ok=['light','dark','classic','midnight','forest','ocean','sunset','grayscale','neon','arcane'];if(ok.indexOf(t)<0)t='light';document.documentElement.setAttribute('data-theme',t);document.documentElement.style.colorScheme=(t==='light'||t==='classic'||t==='sunset')?'light':'dark';}catch(e){document.documentElement.setAttribute('data-theme','light');}})();\`,
          }}
        />
      </head>`
  );
  // Next.js app router usually doesn't want manual <head> inside html like that when using metadata API -
  // better put script as first child of body or use next/script beforeInteractive.
  // Revert manual head approach and use body-first script instead.
}

// Re-read and do a cleaner layout patch
layout = fs.readFileSync(path.join('app', 'layout.jsx'), 'utf8');
// Remove botched head if present
layout = layout.replace(/\\s*<html lang="en" suppressHydrationWarning>[\\s\\S]*?<body/, '<html lang="en" suppressHydrationWarning>\\n      <body');
if (!layout.includes("localStorage.getItem('ots_theme')")) {
  layout = layout.replace('<html lang="en">', '<html lang="en" suppressHydrationWarning>');
  layout = layout.replace(
    '<body className="ots-directory-light">',
    `<body className="ots-directory-light">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('ots_theme')||'light';var ok=['light','dark','classic','midnight','forest','ocean','sunset','grayscale','neon','arcane'];if(ok.indexOf(t)<0)t='light';document.documentElement.setAttribute('data-theme',t);document.documentElement.style.colorScheme=(t==='light'||t==='classic'||t==='sunset')?'light':'dark';}catch(e){document.documentElement.setAttribute('data-theme','light');}})();",
          }}
        />`
  );
  fs.writeFileSync(path.join('app', 'layout.jsx'), layout, 'utf8');
}

const themeCss = \`

/* ===== Site theme engine (data-theme on <html>) ===== */
:root,
html[data-theme='light'] {
  --ots-bg: #f1f5f9;
  --ots-bg-elevated: #ffffff;
  --ots-bg-muted: #e2e8f0;
  --ots-text: #0f172a;
  --ots-text-muted: #475569;
  --ots-border: rgba(15, 23, 42, 0.12);
  --ots-accent: #0f766e;
  --ots-accent-2: #0369a1;
  --ots-header-bg: rgba(255, 255, 255, 0.92);
  --ots-header-border: rgba(15, 23, 42, 0.08);
  --ots-chip-bg: rgba(15, 23, 42, 0.04);
  --ots-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  --ots-glow: transparent;
  --ots-filter: none;
}

html[data-theme='dark'] {
  --ots-bg: #0b1220;
  --ots-bg-elevated: #111827;
  --ots-bg-muted: #1e293b;
  --ots-text: #e2e8f0;
  --ots-text-muted: #94a3b8;
  --ots-border: rgba(148, 163, 184, 0.18);
  --ots-accent: #2dd4bf;
  --ots-accent-2: #38bdf8;
  --ots-header-bg: rgba(15, 23, 42, 0.92);
  --ots-header-border: rgba(148, 163, 184, 0.14);
  --ots-chip-bg: rgba(148, 163, 184, 0.1);
  --ots-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
  --ots-glow: radial-gradient(circle at top, rgba(45, 212, 191, 0.12), transparent 45%);
  --ots-filter: none;
}

html[data-theme='classic'] {
  --ots-bg: #f3e7c9;
  --ots-bg-elevated: #fff8e7;
  --ots-bg-muted: #e8d5a8;
  --ots-text: #3b2a14;
  --ots-text-muted: #6b542e;
  --ots-border: rgba(90, 60, 20, 0.22);
  --ots-accent: #a16207;
  --ots-accent-2: #9a3412;
  --ots-header-bg: rgba(255, 248, 231, 0.94);
  --ots-header-border: rgba(90, 60, 20, 0.16);
  --ots-chip-bg: rgba(161, 98, 7, 0.1);
  --ots-shadow: 0 10px 28px rgba(90, 60, 20, 0.12);
  --ots-glow: radial-gradient(circle at top, rgba(234, 179, 8, 0.18), transparent 40%);
  --ots-filter: none;
}

html[data-theme='midnight'] {
  --ots-bg: #020617;
  --ots-bg-elevated: #0f172a;
  --ots-bg-muted: #1e293b;
  --ots-text: #f8fafc;
  --ots-text-muted: #94a3b8;
  --ots-border: rgba(99, 102, 241, 0.28);
  --ots-accent: #818cf8;
  --ots-accent-2: #c084fc;
  --ots-header-bg: rgba(2, 6, 23, 0.94);
  --ots-header-border: rgba(129, 140, 248, 0.2);
  --ots-chip-bg: rgba(129, 140, 248, 0.12);
  --ots-shadow: 0 16px 50px rgba(0, 0, 0, 0.55);
  --ots-glow: radial-gradient(circle at top right, rgba(129, 140, 248, 0.2), transparent 40%);
  --ots-filter: none;
}

html[data-theme='forest'] {
  --ots-bg: #0f1f14;
  --ots-bg-elevated: #163020;
  --ots-bg-muted: #1f3d28;
  --ots-text: #ecfdf5;
  --ots-text-muted: #a7f3d0;
  --ots-border: rgba(52, 211, 153, 0.22);
  --ots-accent: #34d399;
  --ots-accent-2: #84cc16;
  --ots-header-bg: rgba(15, 31, 20, 0.94);
  --ots-header-border: rgba(52, 211, 153, 0.18);
  --ots-chip-bg: rgba(52, 211, 153, 0.12);
  --ots-shadow: 0 12px 36px rgba(0, 0, 0, 0.4);
  --ots-glow: radial-gradient(circle at top, rgba(52, 211, 153, 0.16), transparent 42%);
  --ots-filter: none;
}

html[data-theme='ocean'] {
  --ots-bg: #062833;
  --ots-bg-elevated: #0b3a4a;
  --ots-bg-muted: #0f4c5c;
  --ots-text: #e0f2fe;
  --ots-text-muted: #7dd3fc;
  --ots-border: rgba(56, 189, 248, 0.24);
  --ots-accent: #22d3ee;
  --ots-accent-2: #38bdf8;
  --ots-header-bg: rgba(6, 40, 51, 0.94);
  --ots-header-border: rgba(34, 211, 238, 0.2);
  --ots-chip-bg: rgba(34, 211, 238, 0.12);
  --ots-shadow: 0 12px 40px rgba(0, 20, 30, 0.45);
  --ots-glow: radial-gradient(circle at top, rgba(34, 211, 238, 0.18), transparent 42%);
  --ots-filter: none;
}

html[data-theme='sunset'] {
  --ots-bg: #fff1e8;
  --ots-bg-elevated: #ffffff;
  --ots-bg-muted: #ffd8c2;
  --ots-text: #4a1942;
  --ots-text-muted: #9a3412;
  --ots-border: rgba(234, 88, 12, 0.22);
  --ots-accent: #ea580c;
  --ots-accent-2: #db2777;
  --ots-header-bg: rgba(255, 255, 255, 0.92);
  --ots-header-border: rgba(234, 88, 12, 0.16);
  --ots-chip-bg: rgba(234, 88, 12, 0.1);
  --ots-shadow: 0 12px 32px rgba(154, 52, 18, 0.12);
  --ots-glow: linear-gradient(135deg, rgba(251, 146, 60, 0.2), rgba(244, 114, 182, 0.16), transparent 60%);
  --ots-filter: none;
}

html[data-theme='grayscale'] {
  --ots-bg: #f4f4f5;
  --ots-bg-elevated: #ffffff;
  --ots-bg-muted: #e4e4e7;
  --ots-text: #18181b;
  --ots-text-muted: #52525b;
  --ots-border: rgba(24, 24, 27, 0.14);
  --ots-accent: #3f3f46;
  --ots-accent-2: #71717a;
  --ots-header-bg: rgba(255, 255, 255, 0.94);
  --ots-header-border: rgba(24, 24, 27, 0.1);
  --ots-chip-bg: rgba(24, 24, 27, 0.06);
  --ots-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
  --ots-glow: transparent;
  --ots-filter: grayscale(1);
}

html[data-theme='neon'] {
  --ots-bg: #050510;
  --ots-bg-elevated: #0d0d1f;
  --ots-bg-muted: #16162e;
  --ots-text: #f5f3ff;
  --ots-text-muted: #c4b5fd;
  --ots-border: rgba(168, 85, 247, 0.35);
  --ots-accent: #a855f7;
  --ots-accent-2: #22d3ee;
  --ots-header-bg: rgba(5, 5, 16, 0.94);
  --ots-header-border: rgba(34, 211, 238, 0.28);
  --ots-chip-bg: rgba(168, 85, 247, 0.14);
  --ots-shadow: 0 0 30px rgba(168, 85, 247, 0.25);
  --ots-glow: radial-gradient(circle at 20% 0%, rgba(168, 85, 247, 0.28), transparent 35%), radial-gradient(circle at 80% 0%, rgba(34, 211, 238, 0.2), transparent 35%);
  --ots-filter: none;
}

html[data-theme='arcane'] {
  --ots-bg: #1a1025;
  --ots-bg-elevated: #2a1840;
  --ots-bg-muted: #3b2158;
  --ots-text: #faf5ff;
  --ots-text-muted: #d8b4fe;
  --ots-border: rgba(216, 180, 254, 0.24);
  --ots-accent: #c084fc;
  --ots-accent-2: #f0abfc;
  --ots-header-bg: rgba(26, 16, 37, 0.94);
  --ots-header-border: rgba(192, 132, 252, 0.22);
  --ots-chip-bg: rgba(192, 132, 252, 0.14);
  --ots-shadow: 0 16px 48px rgba(76, 29, 149, 0.35);
  --ots-glow: radial-gradient(circle at top, rgba(192, 132, 252, 0.22), transparent 42%);
  --ots-filter: none;
}

html[data-theme] body,
html[data-theme] body.ots-directory-light {
  background: var(--ots-bg) !important;
  color: var(--ots-text) !important;
  filter: var(--ots-filter);
}

html[data-theme] body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background: var(--ots-glow);
}

html[data-theme] body > * {
  position: relative;
  z-index: 1;
}

html[data-theme] .site-header,
html[data-theme] .site-header--enterprise {
  background: var(--ots-header-bg) !important;
  border-bottom: 1px solid var(--ots-header-border) !important;
  backdrop-filter: blur(12px);
  color: var(--ots-text);
}

html[data-theme] .site-header .text-slate-900,
html[data-theme] .site-header .text-gray-900 {
  color: var(--ots-text) !important;
}

html[data-theme] .site-header .text-slate-500,
html[data-theme] .site-header .text-gray-500 {
  color: var(--ots-text-muted) !important;
}

html[data-theme] .brand-mark__sigil {
  background: linear-gradient(135deg, var(--ots-accent), var(--ots-accent-2)) !important;
  color: #fff !important;
}

html[data-theme] .nav-chip,
html[data-theme] .theme-selector__select,
html[data-theme] .language-selector__select,
html[data-theme] .btn-ghost,
html[data-theme] .auth-btn--signin {
  background: var(--ots-chip-bg) !important;
  color: var(--ots-text) !important;
  border: 1px solid var(--ots-border) !important;
}

html[data-theme] .btn-primary,
html[data-theme] .auth-btn--register {
  background: linear-gradient(135deg, var(--ots-accent), var(--ots-accent-2)) !important;
  color: #fff !important;
  border: none !important;
}

html[data-theme] .directory-shell,
html[data-theme] .forum-shell,
html[data-theme] main {
  color: var(--ots-text);
}

html[data-theme] .glass-panel,
html[data-theme] .forum-section,
html[data-theme] .forum-board-row,
html[data-theme] .forum-topic-row,
html[data-theme] .forum-post,
html[data-theme] .directory-masthead,
html[data-theme] .ots-site-footer {
  background: var(--ots-bg-elevated) !important;
  color: var(--ots-text) !important;
  border-color: var(--ots-border) !important;
  box-shadow: var(--ots-shadow);
}

html[data-theme] .forum-hero__title,
html[data-theme] .forum-section__head h2,
html[data-theme] .directory-masthead__title,
html[data-theme] h1,
html[data-theme] h2,
html[data-theme] h3 {
  color: var(--ots-text) !important;
}

html[data-theme] .forum-hero__dek,
html[data-theme] .forum-board-row__desc,
html[data-theme] .directory-masthead__dek,
html[data-theme] p {
  color: var(--ots-text-muted);
}

html[data-theme] a {
  color: var(--ots-accent-2);
}

html[data-theme='neon'] .site-header {
  box-shadow: 0 0 24px rgba(168, 85, 247, 0.25);
}

html[data-theme='classic'] .brand-mark__sigil {
  font-family: Georgia, 'Times New Roman', serif;
}

.theme-selector {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.theme-selector__select {
  appearance: none;
  border-radius: 999px;
  padding: 0.45rem 2rem 0.45rem 0.85rem;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M5 7l5 5 5-5' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7rem center;
  min-width: 7.5rem;
}
\`;

const globalsPath = path.join('app', 'globals.css');
let globals = fs.readFileSync(globalsPath, 'utf8');
if (!globals.includes('Site theme engine')) {
  globals += themeCss;
  fs.writeFileSync(globalsPath, globals, 'utf8');
}

console.log('ThemeSelector written');
console.log('Header has ThemeSelector:', fs.readFileSync(path.join('app', 'components', 'Header.jsx'), 'utf8').includes('ThemeSelector'));
console.log('Layout has ots_theme:', fs.readFileSync(path.join('app', 'layout.jsx'), 'utf8').includes('ots_theme'));
console.log('Globals has theme engine:', fs.readFileSync(globalsPath, 'utf8').includes('Site theme engine'));
