import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-wiki');
}

export default function WithScreenshotsCanobWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-wiki" />;
}
