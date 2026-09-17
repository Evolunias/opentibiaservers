import { notFound } from 'next/navigation';
import WikiArticle from '@/app/components/WikiArticle';
import { listServerWikiSlugs, readServerWikiMarkdown } from '@/lib/server-wiki-markdown';

export const dynamicParams = false;
export const revalidate = 3600;

export function generateStaticParams() {
  return listServerWikiSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = readServerWikiMarkdown(params.slug);
  if (!page) return {};
  const name = page.title.replace(/ Open Tibia Server$/i, '');
  return {
    title: `${name} Wiki | OpenTibiaServers`,
    description: `${name} Open Tibia server wiki page with directory links, facts, and sources on OpenTibiaServers.com.`,
    alternates: { canonical: `/wiki/${page.slug}` },
    openGraph: {
      title: `${name} Wiki | OpenTibiaServers`,
      description: `Wiki guide for ${name} with live listing links on OpenTibiaServers.com.`,
      url: `/wiki/${page.slug}`,
      type: 'article',
    },
  };
}

export default function ServerWikiPage({ params }) {
  const page = readServerWikiMarkdown(params.slug);
  if (!page) notFound();
  return <WikiArticle page={page} />;
}
