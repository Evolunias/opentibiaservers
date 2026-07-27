import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-wiki-mexico');
}

export default function WithScreenshotsWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-wiki-mexico" />;
}
