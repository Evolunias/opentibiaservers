import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-wiki');
}

export default function WithScreenshotsArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-wiki" />;
}
