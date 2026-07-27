import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-originaltibia-wiki');
}

export default function WithScreenshotsOriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-originaltibia-wiki" />;
}
