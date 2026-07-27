import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realesta-wiki');
}

export default function WithScreenshotsRealestaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realesta-wiki" />;
}
