import { notFound } from 'next/navigation';
import WikiArticle from '@/app/components/WikiArticle';
import {
  listServerWikiSlugs,
  readServerWikiMarkdown,
} from '@/lib/server-wiki-markdown';
import { getRelatedWikiServers } from '@/lib/wiki-related-servers';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';

export function generateStaticParams() {
  return listServerWikiSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = readServerWikiMarkdown(slug);
  if (!page) return { title: 'Wiki page not found' };
  const name = String(page.title || slug).replace(/ Open Tibia Server$/i, '');
  const title = `${name} Wiki | Open Tibia Server Guide`;
  const description = `${name} Open Tibia wiki summary with rates, world type, getting started steps, and links to the live listing on OpenTibiaServers.com.`.slice(0, 158);
  const canonical = buildAbsoluteUrl(`/wiki/${slug}`);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: getSiteName(),
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

export default async function WikiSlugPage({ params }) {
  const { slug } = await params;
  const page = readServerWikiMarkdown(slug);
  if (!page) notFound();
  const related = getRelatedWikiServers(slug, 6);
  return <WikiArticle page={page} related={related} />;
}
