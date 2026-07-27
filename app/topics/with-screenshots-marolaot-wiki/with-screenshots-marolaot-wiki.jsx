import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-marolaot-wiki');
}

export default function WithScreenshotsMarolaotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-marolaot-wiki" />;
}
