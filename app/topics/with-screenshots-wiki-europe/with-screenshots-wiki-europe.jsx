import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-wiki-europe');
}

export default function WithScreenshotsWikiEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-wiki-europe" />;
}
