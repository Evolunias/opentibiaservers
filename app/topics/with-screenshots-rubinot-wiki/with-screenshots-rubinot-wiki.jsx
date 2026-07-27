import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rubinot-wiki');
}

export default function WithScreenshotsRubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rubinot-wiki" />;
}
