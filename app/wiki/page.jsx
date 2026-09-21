import Link from 'next/link';
import { listServerWikiSlugs, readServerWikiMarkdown } from '@/lib/server-wiki-markdown';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';

const title = 'Open Tibia Servers Wiki | Every server guide';
const description = 'Markdown wiki pages for every Open Tibia server listed on OpenTibiaServers.com, with links back to live directory profiles and related servers.';
const canonical = buildAbsoluteUrl('/wiki');

export const metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: getSiteName(),
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
};

export default function WikiIndexPage() {
  const slugs = listServerWikiSlugs();
  const pages = slugs.map((slug) => {
    const page = readServerWikiMarkdown(slug);
    return {
      slug,
      title: (page?.title || slug).replace(/ Open Tibia Server$/i, ''),
      href: `/wiki/${slug}`,
      listing: `/${slug}`,
    };
  });

  return (
    <main className="server-wiki server-wiki--index">
      <nav className="server-wiki__portal-nav" aria-label="Wiki navigation">
        <Link href="/wiki" aria-current="page">Main page</Link>
        <Link href="/directory">Server directory</Link>
        <Link href="/research">Research library</Link>
      </nav>
      <header className="server-wiki__header">
        <p className="server-wiki__eyebrow">OpenTibiaServers Wiki</p>
        <h1>Server wiki library</h1>
        <p className="server-wiki__lede">
          {pages.length} markdown wiki pages with backlinks to{' '}
          <a href="https://opentibiaservers.com">opentibiaservers.com</a> listings.
          Share any page for SEO and player discovery.
        </p>
      </header>
      <h2 className="server-wiki__section-title">All server articles</h2>
      <ul className="server-wiki__index-list">
        {pages.map((page) => (
          <li key={page.slug}>
            <Link href={page.href}>{page.title}</Link>
            <span>
              {' | '}
              <Link href={page.listing}>listing</Link>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
