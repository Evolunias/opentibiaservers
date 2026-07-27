import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-wiki-uk');
}

export default function WithScreenshotsWikiUkKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-wiki-uk" />;
}
