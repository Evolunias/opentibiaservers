import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-wiki-latin-america');
}

export default function WithScreenshotsWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-wiki-latin-america" />;
}
