import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ameria-wiki');
}

export default function WithScreenshotsAmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ameria-wiki" />;
}
