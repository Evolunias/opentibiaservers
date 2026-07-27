import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-wiki');
}

export default function WithScreenshotsRealeraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-wiki" />;
}
