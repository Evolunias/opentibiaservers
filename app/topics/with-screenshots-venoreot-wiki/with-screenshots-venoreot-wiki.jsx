import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-venoreot-wiki');
}

export default function WithScreenshotsVenoreotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-venoreot-wiki" />;
}
