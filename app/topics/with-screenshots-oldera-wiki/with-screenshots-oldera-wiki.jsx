import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oldera-wiki');
}

export default function WithScreenshotsOlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oldera-wiki" />;
}
