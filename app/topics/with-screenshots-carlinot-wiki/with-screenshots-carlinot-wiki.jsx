import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-carlinot-wiki');
}

export default function WithScreenshotsCarlinotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-carlinot-wiki" />;
}
