import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot-wiki');
}

export default function WithScreenshotsThaisotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot-wiki" />;
}
