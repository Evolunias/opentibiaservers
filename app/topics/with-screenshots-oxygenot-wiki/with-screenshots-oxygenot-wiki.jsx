import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oxygenot-wiki');
}

export default function WithScreenshotsOxygenotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oxygenot-wiki" />;
}
