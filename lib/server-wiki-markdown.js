import fs from 'fs';
import path from 'path';

const MD_DIR = path.join(process.cwd(), 'content', 'external-wikis', 'markdown');

export function listServerWikiSlugs() {
  if (!fs.existsSync(MD_DIR)) return [];
  return fs
    .readdirSync(MD_DIR)
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''))
    .sort();
}

export function readServerWikiMarkdown(slug) {
  const safe = String(slug || '').toLowerCase().replace(/[^a-z0-9-]/g, '');
  if (!safe) return null;
  const file = path.join(MD_DIR, `${safe}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  return parseWikiMarkdown(raw, safe);
}

function parseWikiMarkdown(raw, slug) {
  let body = raw;
  const meta = { slug };
  if (body.startsWith('---')) {
    const end = body.indexOf('\n---', 3);
    if (end !== -1) {
      const front = body.slice(3, end).trim();
      body = body.slice(end + 4).replace(/^\n+/, '');
      for (const line of front.split('\n')) {
        const idx = line.indexOf(':');
        if (idx === -1) continue;
        const key = line.slice(0, idx).trim();
        let value = line.slice(idx + 1).trim();
        if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
        meta[key] = value;
      }
    }
  }
  return {
    slug,
    title: meta.title || `${slug} Open Tibia Server`,
    canonical: meta.canonical || `https://opentibiaservers.com/${slug}`,
    directory: meta.directory || 'https://opentibiaservers.com',
    markdown: body,
    html: markdownToSafeHtml(body),
    meta,
  };
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function inlineFormat(text) {
  let s = escapeHtml(text);
  s = s.replace(/\[([^\]]+)\]\((https?:[^)\s]+|\/[^)\s]*)\)/g, '<a href="$2" rel="noopener noreferrer">$1</a>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  return s;
}

export function markdownToSafeHtml(markdown = '') {
  const lines = String(markdown).replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let i = 0;
  let inUl = false;
  let inOl = false;
  let inTable = false;

  const closeLists = () => {
    if (inUl) { out.push('</ul>'); inUl = false; }
    if (inOl) { out.push('</ol>'); inOl = false; }
  };
  const closeTable = () => {
    if (inTable) { out.push('</tbody></table>'); inTable = false; }
  };

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      closeLists();
      closeTable();
      i += 1;
      continue;
    }

    if (trimmed === '---') {
      closeLists();
      closeTable();
      out.push('<hr />');
      i += 1;
      continue;
    }

    if (trimmed.startsWith('> ')) {
      closeLists();
      closeTable();
      const quote = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quote.push(lines[i].trim().replace(/^>\s?/, ''));
        i += 1;
      }
      out.push(`<blockquote>${quote.map(inlineFormat).join('<br />')}</blockquote>`);
      continue;
    }

    const heading = trimmed.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      closeLists();
      closeTable();
      const level = heading[1].length;
      out.push(`<h${level}>${inlineFormat(heading[2])}</h${level}>`);
      i += 1;
      continue;
    }

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      closeLists();
      const cells = trimmed.slice(1, -1).split('|').map((c) => c.trim());
      const isSep = cells.every((c) => /^:?-+:?$/.test(c));
      if (!inTable) {
        out.push('<table class="server-wiki__table"><thead><tr>');
        cells.forEach((c) => out.push(`<th>${inlineFormat(c)}</th>`));
        out.push('</tr></thead><tbody>');
        inTable = true;
        i += 1;
        continue;
      }
      if (isSep) {
        i += 1;
        continue;
      }
      out.push('<tr>');
      cells.forEach((c) => out.push(`<td>${inlineFormat(c)}</td>`));
      out.push('</tr>');
      i += 1;
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      closeTable();
      if (!inUl) { closeLists(); out.push('<ul>'); inUl = true; }
      out.push(`<li>${inlineFormat(trimmed.replace(/^[-*]\s+/, ''))}</li>`);
      i += 1;
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      closeTable();
      if (!inOl) { closeLists(); out.push('<ol>'); inOl = true; }
      out.push(`<li>${inlineFormat(trimmed.replace(/^\d+\.\s+/, ''))}</li>`);
      i += 1;
      continue;
    }

    closeLists();
    closeTable();
    out.push(`<p>${inlineFormat(trimmed)}</p>`);
    i += 1;
  }

  closeLists();
  closeTable();
  return out.join('\n');
}
