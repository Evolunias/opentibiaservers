import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-wiki-canada');
}

export default function WithScreenshotsWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-wiki-canada" />;
}
